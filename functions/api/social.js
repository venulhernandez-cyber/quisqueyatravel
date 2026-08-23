// Cloudflare Pages Function — /api/social
//
// Por qué existe: reemplaza a Blotato (bloqueado por facturación, ago 2026)
// para publicar y leer contenido en Facebook e Instagram. Habla directo con
// la Graph API de Meta, que es gratuita y sin límite mensual de publicaciones
// (solo límites de tasa por hora, muy por encima de lo que este sitio necesita).
//
// No es público: solo lo llaman las tareas programadas de Cowork (posting
// automático) y sesiones manuales, nunca el navegador del visitante — por eso
// exige un token propio (SOCIAL_API_TOKEN) distinto del panel admin.
//
// Variables de entorno requeridas (Cloudflare Pages > Settings > Environment
// variables — todas como "secret" excepto donde se indica):
//   SOCIAL_API_TOKEN        — token inventado por Venul, lo debe mandar toda
//                              llamada como header "Authorization: Bearer <token>"
//   META_PAGE_ID             (texto, no secreto) — ID de la Página de Facebook
//   META_PAGE_ACCESS_TOKEN  — token de acceso de página de larga duración
//   META_IG_USER_ID          (texto, no secreto) — ID de la cuenta de
//                              Instagram Business/Creator vinculada a la Página
//                              (solo necesario para acciones de Instagram)
//
// Uso:
//   GET  /api/social?action=posts&platform=facebook|instagram&limit=10
//     → últimas publicaciones (id, texto/caption, fecha, permalink) — sirve
//       para revisar duplicados recientes antes de publicar, como se hacía
//       con blotato_list_posts.
//   GET  /api/social?action=comments&platform=facebook|instagram&postId=XXXX
//     → comentarios de un post/media puntual — para juntar testimonios reales
//       (uso original: sección #resenas de quisqueyatravel.org).
//   POST /api/social
//     body: { platform: 'facebook'|'instagram', type: 'video'|'image',
//              mediaUrl: 'https://...' (debe ser una URL pública que Meta
//              pueda descargar — no funciona con localhost ni con URLs que
//              requieran login), caption: 'texto del post' }
//     → publica el contenido. Para Instagram, video/reel siempre usa
//       media_type=REELS (Meta ya no distingue "video normal" de reel en
//       cuentas nuevas).
//
// Todas las respuestas: { ok: true, ... } o { ok: false, error: '...' }.

const GRAPH_VERSION = 'v23.0'; // subir este valor cuando Meta lo recomiende
const GRAPH_BASE = `https://graph.facebook.com/${GRAPH_VERSION}`;
const IG_PUBLISH_POLL_TRIES = 10;
const IG_PUBLISH_POLL_DELAY_MS = 3000;

export async function onRequestGet(context) {
  const denied = requireToken(context);
  if (denied) return denied;

  const { request, env } = context;
  const url = new URL(request.url);
  const action = url.searchParams.get('action');

  if (action === 'posts') {
    return handleListPosts(url, env);
  }
  if (action === 'comments') {
    return handleListComments(url, env);
  }
  return json({ ok: false, error: 'action inválido: usa "posts" o "comments"' }, 400);
}

export async function onRequestPost(context) {
  const denied = requireToken(context);
  if (denied) return denied;

  const { request, env } = context;
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'JSON inválido' }, 400);
  }

  const platform = body.platform === 'instagram' ? 'instagram' : body.platform === 'facebook' ? 'facebook' : null;
  const type = body.type === 'video' ? 'video' : body.type === 'image' ? 'image' : null;
  const mediaUrl = typeof body.mediaUrl === 'string' ? body.mediaUrl.trim() : '';
  const caption = typeof body.caption === 'string' ? body.caption.slice(0, 2200) : '';

  if (!platform) return json({ ok: false, error: 'Falta "platform" (facebook|instagram)' }, 400);
  if (!type) return json({ ok: false, error: 'Falta "type" (video|image)' }, 400);
  if (!mediaUrl || !/^https:\/\//.test(mediaUrl)) {
    return json({ ok: false, error: '"mediaUrl" debe ser una URL https pública' }, 400);
  }

  try {
    if (platform === 'facebook') {
      return await publishFacebook(env, type, mediaUrl, caption);
    }
    return await publishInstagram(env, type, mediaUrl, caption);
  } catch (e) {
    return json({ ok: false, error: e.message || String(e) }, 502);
  }
}

// ─── Facebook ───────────────────────────────────────────────────────────────

async function publishFacebook(env, type, mediaUrl, caption) {
  const pageId = env.META_PAGE_ID;
  const token = env.META_PAGE_ACCESS_TOKEN;
  if (!pageId || !token) {
    return json({ ok: false, error: 'Falta META_PAGE_ID o META_PAGE_ACCESS_TOKEN en Cloudflare Pages' }, 503);
  }

  const endpoint = type === 'video' ? 'videos' : 'photos';
  const params = new URLSearchParams({ access_token: token });
  if (type === 'video') {
    params.set('file_url', mediaUrl);
    params.set('description', caption);
  } else {
    params.set('url', mediaUrl);
    params.set('caption', caption);
  }

  const res = await fetch(`${GRAPH_BASE}/${pageId}/${endpoint}`, { method: 'POST', body: params });
  const data = await res.json();
  if (!res.ok) return json({ ok: false, error: graphErrorMessage(data) }, 502);

  return json({ ok: true, platform: 'facebook', id: data.id || data.post_id });
}

// ─── Instagram ──────────────────────────────────────────────────────────────

async function publishInstagram(env, type, mediaUrl, caption) {
  const igUserId = env.META_IG_USER_ID;
  const token = env.META_PAGE_ACCESS_TOKEN;
  if (!igUserId || !token) {
    return json({ ok: false, error: 'Falta META_IG_USER_ID o META_PAGE_ACCESS_TOKEN en Cloudflare Pages' }, 503);
  }

  // Paso 1 — crear el contenedor de medio.
  const createParams = new URLSearchParams({ access_token: token, caption });
  if (type === 'video') {
    createParams.set('video_url', mediaUrl);
    createParams.set('media_type', 'REELS');
  } else {
    createParams.set('image_url', mediaUrl);
  }

  const createRes = await fetch(`${GRAPH_BASE}/${igUserId}/media`, { method: 'POST', body: createParams });
  const createData = await createRes.json();
  if (!createRes.ok) return json({ ok: false, error: graphErrorMessage(createData) }, 502);

  const creationId = createData.id;

  // Paso 2 — para video, esperar a que Meta termine de procesarlo antes de
  // publicar (las imágenes normalmente ya están listas de inmediato, pero no
  // cuesta nada revisar una vez).
  let statusCode = 'FINISHED';
  if (type === 'video') {
    statusCode = await pollIgStatus(creationId, token);
    if (statusCode !== 'FINISHED') {
      return json(
        { ok: false, error: `Instagram no terminó de procesar el video a tiempo (estado: ${statusCode}). El contenedor ${creationId} puede seguir procesando — reintenta la publicación en unos minutos con /api/social usando el mismo creationId manualmente si hace falta.` },
        504
      );
    }
  }

  // Paso 3 — publicar.
  const publishParams = new URLSearchParams({ access_token: token, creation_id: creationId });
  const publishRes = await fetch(`${GRAPH_BASE}/${igUserId}/media_publish`, { method: 'POST', body: publishParams });
  const publishData = await publishRes.json();
  if (!publishRes.ok) return json({ ok: false, error: graphErrorMessage(publishData) }, 502);

  return json({ ok: true, platform: 'instagram', id: publishData.id });
}

async function pollIgStatus(creationId, token) {
  for (let i = 0; i < IG_PUBLISH_POLL_TRIES; i++) {
    const res = await fetch(`${GRAPH_BASE}/${creationId}?fields=status_code&access_token=${encodeURIComponent(token)}`);
    const data = await res.json();
    if (data.status_code === 'FINISHED' || data.status_code === 'ERROR') return data.status_code;
    await sleep(IG_PUBLISH_POLL_DELAY_MS);
  }
  return 'IN_PROGRESS';
}

// ─── Lectura: posts recientes y comentarios ────────────────────────────────

async function handleListPosts(url, env) {
  const platform = url.searchParams.get('platform') === 'instagram' ? 'instagram' : 'facebook';
  const limit = clampLimit(url.searchParams.get('limit'));
  const token = env.META_PAGE_ACCESS_TOKEN;
  if (!token) return json({ ok: false, error: 'Falta META_PAGE_ACCESS_TOKEN en Cloudflare Pages' }, 503);

  if (platform === 'facebook') {
    const pageId = env.META_PAGE_ID;
    if (!pageId) return json({ ok: false, error: 'Falta META_PAGE_ID en Cloudflare Pages' }, 503);
    const res = await fetch(
      `${GRAPH_BASE}/${pageId}/posts?fields=id,message,created_time,permalink_url&limit=${limit}&access_token=${encodeURIComponent(token)}`
    );
    const data = await res.json();
    if (!res.ok) return json({ ok: false, error: graphErrorMessage(data) }, 502);
    return json({ ok: true, platform, posts: data.data || [] });
  }

  const igUserId = env.META_IG_USER_ID;
  if (!igUserId) return json({ ok: false, error: 'Falta META_IG_USER_ID en Cloudflare Pages' }, 503);
  const res = await fetch(
    `${GRAPH_BASE}/${igUserId}/media?fields=id,caption,timestamp,permalink&limit=${limit}&access_token=${encodeURIComponent(token)}`
  );
  const data = await res.json();
  if (!res.ok) return json({ ok: false, error: graphErrorMessage(data) }, 502);
  return json({ ok: true, platform, posts: data.data || [] });
}

async function handleListComments(url, env) {
  const platform = url.searchParams.get('platform') === 'instagram' ? 'instagram' : 'facebook';
  const postId = url.searchParams.get('postId');
  const token = env.META_PAGE_ACCESS_TOKEN;
  if (!token) return json({ ok: false, error: 'Falta META_PAGE_ACCESS_TOKEN en Cloudflare Pages' }, 503);
  if (!postId) return json({ ok: false, error: 'Falta "postId"' }, 400);

  const fields = platform === 'facebook' ? 'id,message,from,created_time' : 'id,text,username,timestamp';
  const res = await fetch(
    `${GRAPH_BASE}/${postId}/comments?fields=${fields}&access_token=${encodeURIComponent(token)}`
  );
  const data = await res.json();
  if (!res.ok) return json({ ok: false, error: graphErrorMessage(data) }, 502);
  return json({ ok: true, platform, comments: data.data || [] });
}

// ─── Utilidades ─────────────────────────────────────────────────────────────

function requireToken(context) {
  const { request, env } = context;
  if (!env.SOCIAL_API_TOKEN) {
    return json({ ok: false, error: 'Falta SOCIAL_API_TOKEN en Cloudflare Pages — /api/social está deshabilitado' }, 503);
  }
  const auth = request.headers.get('Authorization') || '';
  if (auth !== `Bearer ${env.SOCIAL_API_TOKEN}`) {
    return json({ ok: false, error: 'No autorizado' }, 401);
  }
  return null;
}

function clampLimit(raw) {
  const n = parseInt(raw, 10);
  if (!Number.isFinite(n) || n < 1) return 10;
  return Math.min(n, 50);
}

function graphErrorMessage(data) {
  return (data && data.error && data.error.message) || 'Error desconocido de la Graph API de Meta';
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
