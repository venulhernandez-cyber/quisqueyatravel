// Cloudflare Pages Function — fuerza la cabecera Content-Security-Policy en cada respuesta.
//
// Por qué existe este archivo: el archivo _headers estático en la raíz del repo
// declara Content-Security-Policy correctamente, pero Cloudflare Pages la ignora
// silenciosamente (confirmado el 7 jul 2026: se probó en quisqueyatravel.org y en
// quisqueyatravel.pages.dev directamente, sin pasar por ninguna regla de zona/DNS —
// mismo resultado en ambos, así que no es un problema de Cloudflare Rules ni del
// dominio personalizado). Las demás cabeceras de _headers (X-Frame-Options,
// Permissions-Policy, X-Content-Type-Options, Referrer-Policy, Strict-Transport-Security)
// sí funcionan bien vía _headers — solo Content-Security-Policy se pierde.
//
// Una Pages Function se ejecuta en cada petición y puede setear cualquier cabecera
// sin esa limitación, así que la forzamos aquí como solución confiable.

// --- Protección del Panel de Administración (admin.html) ---
// admin.html expone leads de clientes y la configuración del agente de ventas,
// así que no puede quedar público. Esto lo protege con usuario/contraseña
// (HTTP Basic Auth) usando las variables de entorno ADMIN_USER y ADMIN_PASS,
// que debes configurar en Cloudflare Pages > tu proyecto > Settings >
// Environment variables (como "secret", no como texto plano).
//
// Si esas variables no están configuradas, la ruta se bloquea por completo
// (falla cerrado) en vez de quedar abierta por accidente.
function isAdminProtected(request, url) {
  if (url.pathname === '/admin.html' || url.pathname === '/admin') return true;
  // El panel también lee/escribe leads y configuración vía estas rutas — solo
  // los métodos que exponen datos o permiten escribir necesitan protegerse.
  // GET /api/config y POST /api/leads quedan públicos a propósito: el widget
  // los usa para atender a visitantes anónimos del sitio.
  if (url.pathname === '/api/leads' && request.method === 'GET') return true;
  if (url.pathname === '/api/config' && request.method === 'POST') return true;
  return false;
}

function requireAdminAuth(request, env) {
  if (!env.ADMIN_USER || !env.ADMIN_PASS) {
    return new Response(
      'Panel de administración deshabilitado: configura ADMIN_USER y ADMIN_PASS en Cloudflare Pages (Settings > Environment variables) para activarlo.',
      { status: 503 }
    );
  }

  const authHeader = request.headers.get('Authorization') || '';
  if (authHeader.startsWith('Basic ')) {
    let user = '';
    let pass = '';
    try {
      const decoded = atob(authHeader.slice(6));
      const sep = decoded.indexOf(':');
      user = decoded.slice(0, sep);
      pass = decoded.slice(sep + 1);
    } catch {
      // credenciales mal formadas, caen al 401 de abajo
    }
    if (user === env.ADMIN_USER && pass === env.ADMIN_PASS) {
      return null; // autenticado, dejar pasar
    }
  }

  return new Response('Autenticación requerida', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Quisqueya Travel Admin"' },
  });
}

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (isAdminProtected(request, url)) {
    const denied = requireAdminAuth(request, env);
    if (denied) return denied;
  }

  const response = await context.next();

  // Intento 2 (2026-07-08): en vez de construir un objeto Headers nuevo y
  // pasarlo como init de un Response nuevo, clonamos la respuesta original
  // (esto copia status/statusText/headers automáticamente) y mutamos sus
  // headers directamente. Si esto tampoco entrega el CSP al navegador, el
  // problema no es la forma de construir el Response — es que Cloudflare
  // Pages está descartando este header específico en su capa de serving,
  // ya que el intento anterior (headers.set sobre `new Headers()`) también
  // falló tanto en el dominio propio como en *.pages.dev, lo cual ya
  // descarta Transform Rules / Page Rules de zona como causa (esas no
  // aplican a *.pages.dev). Si esta versión tampoco funciona, revisar:
  // 1) si hay alguna Cloudflare "Response Header Transform Rule" a nivel de
  //    cuenta (no de zona), 2) abrir un ticket/consultar la comunidad de
  //    Cloudflare por "Pages Functions Content-Security-Policy header
  //    stripped", 3) probar sirviendo la CSP con otro nombre de header como
  //    `Content-Security-Policy-Report-Only` para confirmar si el problema
  //    es específico al nombre exacto del header.
  const newResponse = new Response(response.body, response);

  // Marcador de diagnóstico — v2 confirma que ESTA versión del middleware
  // (no una versión vieja o cacheada) es la que está corriendo.
  newResponse.headers.set('X-Csp-Test', 'middleware-ran-v2');

  newResponse.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://www.googletagmanager.com https://emrldtp.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https: data:; connect-src 'self' https://*.google-analytics.com https://www.googletagmanager.com https://emrldtp.com; frame-ancestors 'none'; base-uri 'self'; object-src 'none'"
  );

  return newResponse;
}
