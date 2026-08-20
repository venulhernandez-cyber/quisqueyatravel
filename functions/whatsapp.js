// Cloudflare Pages Function — /whatsapp
//
// Por que existe: el boton flotante de WhatsApp y los enlaces de contacto en las
// 56 paginas del sitio antes apuntaban directo a https://wa.me/<numero de Venul>,
// lo cual deja el numero real visible en el HTML publicado y en el codigo fuente
// del repo (que es publico en GitHub). Esta funcion redirige /whatsapp al chat
// real sin que el numero aparezca nunca en el HTML ni en el repo — solo vive en
// la variable de entorno WHATSAPP_NUMBER (Cloudflare Pages > Settings >
// Environment variables, como "secret", igual que ADMIN_PASS).
//
// Si la variable no esta configurada, la ruta falla con un mensaje claro en vez
// de exponer o inventar un numero por defecto (mismo patron que ADMIN_PASS en
// _middleware.js).

export async function onRequestGet(context) {
  const { env } = context;
  const numero = env.WHATSAPP_NUMBER;

  if (!numero) {
    return new Response(
      'WhatsApp no configurado: agrega WHATSAPP_NUMBER en Cloudflare Pages (Settings > Environment variables) para activar este enlace.',
      { status: 503 }
    );
  }

  const mensaje = encodeURIComponent('Hola! Vi Quisqueya Travel y tengo una pregunta sobre mi viaje a RD.');
  return Response.redirect(`https://wa.me/${numero}?text=${mensaje}`, 302);
}
