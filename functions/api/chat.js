// Cloudflare Pages Function — proxy seguro para el Agente de Ventas.
//
// Por qué existe: el widget de chat (js/widget.js) y el panel de administración
// (js/app-admin.js) necesitan llamar a un modelo de IA, pero nunca deben tener
// la API key en el navegador — cualquier visitante podría verla abriendo las
// herramientas de desarrollador (pestaña Network). Esta función corre en el
// servidor de Cloudflare y guarda las keys en variables de entorno secretas.
//
// Proveedor primario: OmniRoute (self-hosted en tu PC o un VPS, ver deploy/omniroute/).
// Enruta entre 340+ proveedores de IA con fallback automático — si un proveedor
// se queda sin cuota, OmniRoute salta al siguiente sin que el sitio se entere.
// Si OmniRoute no está configurado o falla, esta función cae de vuelta a
// llamar a Gemini directamente (comportamiento original).
//
// Variables de entorno (Pages > tu proyecto > Settings > Environment variables):
//   OMNIROUTE_URL      — ej. https://ai.quisqueyatravel.org (sin barra final)
//   OMNIROUTE_API_KEY  — key generada en el dashboard de OmniRoute
//   OMNIROUTE_MODEL    — opcional, default "auto"
//   GEMINI_API_KEY     — respaldo, se usa si OmniRoute no está configurado o falla
//
// Uso desde el cliente:
//   POST /api/chat
//   body: {
//     contents: [{ role: 'user'|'model', parts: [{ text: '...' }] }, ...],
//     systemInstruction: 'texto plano opcional',
//     generationConfig: { temperature?, responseMimeType? }
//   }
// Respuesta: { text: '...' }  o  { error: '...' } con status >= 400

const GEMINI_MODEL = 'gemini-2.5-flash';
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

  if (!env.OMNIROUTE_URL && !env.GEMINI_API_KEY) {
    return json(
      { error: 'El agente no está configurado todavía: falta OMNIROUTE_URL o GEMINI_API_KEY en Cloudflare Pages.' },
      503
    );
  }

  // 1) Intentar OmniRoute primero, si está configurado.
  if (env.OMNIROUTE_URL) {
    try {
      const text = await callOmniRoute({ env, safeContents, systemInstruction, temperature, wantsJson });
      return json({ text });
    } catch (err) {
      // Si también hay Gemini configurado, caemos a él silenciosamente.
      // Si no, devolvemos el error de OmniRoute.
      if (!env.GEMINI_API_KEY) {
        return json({ error: `OmniRoute falló: ${err.message}` }, 502);
      }
    }
  }

  // 2) Gemini directo (respaldo, o proveedor único si OMNIROUTE_URL no está configurado).
  try {
    const text = await callGemini({ env, safeContents, systemInstruction, temperature, wantsJson });
    return json({ text });
  } catch (err) {
    return json({ error: `Gemini falló: ${err.message}` }, 502);
  }
}

async function callOmniRoute({ env, safeContents, systemInstruction, temperature, wantsJson }) {
  const baseUrl = env.OMNIROUTE_URL.replace(/\/+$/, '');
  const model = env.OMNIROUTE_MODEL || 'auto';

  const messages = [
    ...(systemInstruction ? [{ role: 'system', content: systemInstruction }] : []),
    ...safeContents.map((c) => ({ role: c.role === 'user' ? 'user' : 'assistant', content: c.text })),
  ];

  const res = await fetch(`${baseUrl}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(env.OMNIROUTE_API_KEY ? { Authorization: `Bearer ${env.OMNIROUTE_API_KEY}` } : {}),
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      max_tokens: MAX_OUTPUT_TOKENS,
      ...(wantsJson ? { response_format: { type: 'json_object' } } : {}),
    }),
  });

  if (!res.ok) {
    throw new Error(`estado ${res.status}`);
  }

  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content ?? '';
  if (!text) throw new Error('respuesta vacía');
  return text;
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

// deploy-trigger: activar OmniRoute en Cloudflare Pages (2026-08-18 00:17 EST)
