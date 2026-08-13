// Cloudflare Pages Function — proxy seguro para el Agente de Ventas.
//
// Por qué existe: el widget de chat (js/widget.js) y el panel de administración
// (js/app-admin.js) necesitan llamar a la API de Gemini, pero nunca deben tener
// la API key en el navegador — cualquier visitante podría verla abriendo las
// herramientas de desarrollador (pestaña Network). Esta función corre en el
// servidor de Cloudflare, guarda la key en la variable de entorno secreta
// GEMINI_API_KEY (configúrala en el dashboard: Pages > tu proyecto > Settings >
// Environment variables > Add secret) y reenvía la petición a Gemini desde ahí.
//
// Uso desde el cliente:
//   POST /api/chat
//   body: {
//     contents: [{ role: 'user'|'model', parts: [{ text: '...' }] }, ...],
//     systemInstruction: 'texto plano opcional',
//     generationConfig: { temperature?, responseMimeType? }
//   }
// Respuesta: { text: '...' }  o  { error: '...' } con status >= 400

const MODEL = 'gemini-2.5-flash';
const MAX_MESSAGES = 40;
const MAX_MESSAGE_CHARS = 4000;
const MAX_SYSTEM_CHARS = 8000;

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.GEMINI_API_KEY) {
    return json(
      { error: 'El agente no está configurado todavía: falta la variable de entorno GEMINI_API_KEY en Cloudflare Pages.' },
      503
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'JSON inválido' }, 400);
  }

  if (!Array.isArray(body.contents) || body.contents.length === 0) {
    return json({ error: 'Falta el campo "contents"' }, 400);
  }

  // Saneamos la entrada: solo aceptamos role + un texto por mensaje, con límites
  // de tamaño, para no reenviar campos arbitrarios ni permitir abuso de costos.
  const safeContents = body.contents.slice(-MAX_MESSAGES).map((c) => ({
    role: c && c.role === 'user' ? 'user' : 'model',
    parts: [{ text: String(c?.parts?.[0]?.text ?? '').slice(0, MAX_MESSAGE_CHARS) }],
  }));

  const systemInstruction =
    typeof body.systemInstruction === 'string' ? body.systemInstruction.slice(0, MAX_SYSTEM_CHARS) : '';

  const generationConfig = {
    temperature:
      typeof body.generationConfig?.temperature === 'number' ? body.generationConfig.temperature : 0.7,
    maxOutputTokens: 700,
    ...(body.generationConfig?.responseMimeType === 'application/json'
      ? { responseMimeType: 'application/json' }
      : {}),
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${env.GEMINI_API_KEY}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: safeContents,
        ...(systemInstruction ? { systemInstruction: { parts: [{ text: systemInstruction }] } } : {}),
        generationConfig,
      }),
    });

    if (!res.ok) {
      return json({ error: `Gemini respondió con estado ${res.status}` }, 502);
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
    return json({ text });
  } catch {
    return json({ error: 'No se pudo contactar a Gemini' }, 502);
  }
}

export async function onRequestGet() {
  return json({ error: 'Método no permitido, usa POST' }, 405);
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
