// Cloudflare Pages Function — proxy seguro para el Agente de Ventas.
//
// Por qué existe: el widget de chat (js/widget.js) y el panel de administración
// (js/app-admin.js) necesitan llamar a un modelo de IA, pero nunca deben tener
// la API key en el navegador — cualquier visitante podría verla abriendo las
// herramientas de desarrollador (pestaña Network). Esta función corre en el
// servidor de Cloudflare y guarda la key en una variable de entorno secreta.
//
// Proveedor: Gemini directo.
//
// Variables de entorno (Pages > tu proyecto > Settings > Environment variables):
//   GEMINI_API_KEY     — requerida
//
// Uso desde el cliente:
//   POST /api/chat
//   body: {
//     contents: [{ role: 'user'|'model', parts: [{ text: '...' }] }, ...],
//     systemInstruction: 'texto plano opcional',
//     generationConfig: { temperature?, responseMimeType? }
//   }
// Respuesta: { text: '...' }  o  { error: '...' } con status >= 400

const GEMINI_MODEL = 'gemini-flash-latest';
const MAX_MESSAGES = 40;
const MAX_MESSAGE_CHARS = 4000;
const MAX_SYSTEM_CHARS = 8000;
const MAX_OUTPUT_TOKENS = 700;

export async function onRequestPost(context) {
    const { request, env } = context;

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
        text: String(c?.parts?.[0]?.text ?? '').slice(0, MAX_MESSAGE_CHARS),
  }));

  const systemInstruction =
        typeof body.systemInstruction === 'string' ? body.systemInstruction.slice(0, MAX_SYSTEM_CHARS) : '';

  const temperature =
        typeof body.generationConfig?.temperature === 'number' ? body.generationConfig.temperature : 0.7;
    const wantsJson = body.generationConfig?.responseMimeType === 'application/json';

  if (!env.GEMINI_API_KEY) {
        return json(
          { error: 'El agente no está configurado todavía: falta GEMINI_API_KEY en Cloudflare Pages.' },
                503
              );
  }

  try {
        const text = await callGemini({ env, safeContents, systemInstruction, temperature, wantsJson });
        return json({ text });
  } catch (err) {
        return json({ error: `Gemini falló: ${err.message}` }, 502);
  }
}

async function callGemini({ env, safeContents, systemInstruction, temperature, wantsJson }) {
    if (!env.GEMINI_API_KEY) throw new Error('GEMINI_API_KEY no configurada');

  const contents = safeContents.map((c) => ({ role: c.role, parts: [{ text: c.text }] }));
    const generationConfig = {
          temperature,
          maxOutputTokens: MAX_OUTPUT_TOKENS,
          ...(wantsJson ? { responseMimeType: 'application/json' } : {}),
    };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${env.GEMINI_API_KEY}`;

  const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
                contents,
                ...(systemInstruction ? { systemInstruction: { parts: [{ text: systemInstruction }] } } : {}),
                generationConfig,
        }),
  });

  if (!res.ok) {
        throw new Error(`estado ${res.status}`);
  }

  const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
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
