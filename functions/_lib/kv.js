// Cliente mínimo para la API REST de Cloudflare KV.
//
// Por qué vía REST y no un binding nativo: este sitio se despliega vía GitHub
// Actions con cloudflare/pages-action, sin wrangler.toml. Agregar un binding
// de KV normalmente requiere tocar la configuración de build/despliegue, y no
// queríamos arriesgar ese pipeline. Llamando a la API REST desde dentro de la
// función evitamos cualquier cambio al despliegue existente.
//
// Requiere estas variables de entorno en Cloudflare Pages (Settings >
// Environment variables):
//   CF_API_TOKEN   — token con permiso "Workers KV Storage:Edit", scopeado a esta cuenta
//   CF_ACCOUNT_ID  — ID de tu cuenta de Cloudflare (mismo valor que ya usas en
//                    el secret CLOUDFLARE_ACCOUNT_ID de GitHub Actions)

const NAMESPACE_ID = '6069a4e6e9fc4ff39d024a93d7a5516f'; // "quisqueya-sales-agent"

function kvUrl(env, key) {
  return `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/storage/kv/namespaces/${NAMESPACE_ID}/values/${encodeURIComponent(key)}`;
}

export function kvConfigured(env) {
  return Boolean(env.CF_API_TOKEN && env.CF_ACCOUNT_ID);
}

export async function kvGet(env, key) {
  if (!kvConfigured(env)) return null;
  const res = await fetch(kvUrl(env, key), {
    headers: { Authorization: `Bearer ${env.CF_API_TOKEN}` },
  });
  if (res.status === 404) return null;
  if (!res.ok) return null;
  return await res.text();
}

export async function kvPut(env, key, value) {
  if (!kvConfigured(env)) {
    throw new Error('Faltan CF_API_TOKEN / CF_ACCOUNT_ID en Cloudflare Pages');
  }
  const res = await fetch(kvUrl(env, key), {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${env.CF_API_TOKEN}`,
      'Content-Type': 'text/plain',
    },
    body: value,
  });
  if (!res.ok) {
    throw new Error(`Cloudflare KV respondió ${res.status} al guardar "${key}"`);
  }
}
