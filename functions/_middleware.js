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

export async function onRequest(context) {
  const response = await context.next();
  const headers = new Headers(response.headers);

  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://www.googletagmanager.com https://emrldtp.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https: data:; connect-src 'self' https://*.google-analytics.com https://www.googletagmanager.com; frame-ancestors 'none'; base-uri 'self'; object-src 'none'"
  );

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
