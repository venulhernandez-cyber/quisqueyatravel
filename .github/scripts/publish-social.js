// .github/scripts/publish-social.js
//
// Por qué existe: las tareas programadas de Cowork corren en sandboxes con
// acceso de red restringido (no llegan directo a graph.facebook.com ni a
// quisqueyatravel.org), así que la publicación automática no puede llamar a
// Meta ni a /api/social directamente desde ahí. Este script corre en un
// runner de GitHub Actions (con red completa) y hace exactamente lo mismo
// que functions/api/social.js — reutiliza la misma lógica, sin tocar el
// endpoint público. Se dispara con `gh workflow run publish-social.yml -f ...`
// desde la sesión programada (gh ya está autenticado ahí, no hace falta
// ningún token de Meta visible para esa sesión).
//
// Secrets requeridos en GitHub → Settings → Secrets and variables →
// Actions → New repository secret:
//   META_PAGE_ID            (puede ir como variable, no es secreto)
//   META_PAGE_ACCESS_TOKEN  (secreto — token de acceso de página de larga duración)
//   META_IG_USER_ID          (puede ir como variable, no es secreto)
//
// Inputs (via variables de entorno, puestas por el workflow desde
// workflow_dispatch inputs):
//   PLATFORM  = facebook | instagram
//   TYPE      = video | image
//   MEDIA_URL = URL https pública (Meta debe poder descargarla)
//   CAPTION   = texto del post

const GRAPH_VERSION = 'v23.0';
const GRAPH_BASE = `https://graph.facebook.com/${GRAPH_VERSION}`;
const IG_PUBLISH_POLL_TRIES = 10;
const IG_PUBLISH_POLL_DELAY_MS = 3000;

async function main() {
const platform = process.env.PLATFORM === 'instagram' ? 'instagram' : 'facebook';
const type = process.env.TYPE === 'image' ? 'image' : 'video';
const mediaUrl = (process.env.MEDIA_URL || '').trim();
const caption = (process.env.CAPTION || '').slice(0, 2200);

if (!mediaUrl || !/^https:\/\//.test(mediaUrl)) {
fail('MEDIA_URL debe ser una URL https pública');
}

try {
const result = platform === 'facebook'
? await publishFacebook(type, mediaUrl, caption)
: await publishInstagram(type, mediaUrl, caption);
console.log('RESULTADO: ' + JSON.stringify(result));
if (!result.ok) process.exit(1);

const linkComment = (process.env.LINK_COMMENT || '').trim();
if (linkComment) {
try {
const commentResult = await postComment(result.id, linkComment);
if (commentResult.ok) {
console.log('COMENTARIO_LINK: publicado (' + commentResult.id + ')');
} else {
console.log('COMENTARIO_LINK_AVISO: no se pudo publicar el link como comentario — ' + commentResult.error);
}
} catch (ce) {
console.log('COMENTARIO_LINK_AVISO: error al publicar el link como comentario — ' + (ce.message || String(ce)));
}
}
} catch (e) {
fail(e.message || String(e));
}
}

async function postComment(objectId, message) {
const token = process.env.META_PAGE_ACCESS_TOKEN;
if (!objectId || !token) return { ok: false, error: 'Falta objectId o META_PAGE_ACCESS_TOKEN' };
const params = new URLSearchParams({ access_token: token, message });
const res = await fetch(`${GRAPH_BASE}/${objectId}/comments`, { method: 'POST', body: params });
const data = await res.json();
if (!res.ok) return { ok: false, error: graphErrorMessage(data) };
return { ok: true, id: data.id };
}

async function publishFacebook(type, mediaUrl, caption) {
const pageId = process.env.META_PAGE_ID;
const token = process.env.META_PAGE_ACCESS_TOKEN;
if (!pageId || !token) return { ok: false, error: 'Falta META_PAGE_ID o META_PAGE_ACCESS_TOKEN' };

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
if (!res.ok) return { ok: false, error: graphErrorMessage(data) };
return { ok: true, platform: 'facebook', id: data.id || data.post_id };
}

async function publishInstagram(type, mediaUrl, caption) {
const igUserId = process.env.META_IG_USER_ID;
const token = process.env.META_PAGE_ACCESS_TOKEN;
if (!igUserId || !token) return { ok: false, error: 'Falta META_IG_USER_ID o META_PAGE_ACCESS_TOKEN' };

const createParams = new URLSearchParams({ access_token: token, caption });
if (type === 'video') {
createParams.set('video_url', mediaUrl);
createParams.set('media_type', 'REELS');
} else {
createParams.set('image_url', mediaUrl);
}

const createRes = await fetch(`${GRAPH_BASE}/${igUserId}/media`, { method: 'POST', body: createParams });
const createData = await createRes.json();
if (!createRes.ok) return { ok: false, error: graphErrorMessage(createData) };

const creationId = createData.id;

let statusCode = 'FINISHED';
if (type === 'video') {
statusCode = await pollIgStatus(creationId, token);
if (statusCode !== 'FINISHED') {
return { ok: false, error: `Instagram no terminó de procesar el video a tiempo (estado: ${statusCode}). creationId: ${creationId}` };
}
}

const publishParams = new URLSearchParams({ access_token: token, creation_id: creationId });
const publishRes = await fetch(`${GRAPH_BASE}/${igUserId}/media_publish`, { method: 'POST', body: publishParams });
const publishData = await publishRes.json();
if (!publishRes.ok) return { ok: false, error: graphErrorMessage(publishData) };
return { ok: true, platform: 'instagram', id: publishData.id };
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

function graphErrorMessage(data) {
return (data && data.error && data.error.message) || 'Error desconocido de la Graph API de Meta';
}

function sleep(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}

function fail(msg) {
console.log('RESULTADO: ' + JSON.stringify({ ok: false, error: msg }));
process.exit(1);
}

main();
