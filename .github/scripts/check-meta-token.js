// .github/scripts/check-meta-token.js
//
// Dry-run del pipeline publish-social: valida que META_PAGE_ACCESS_TOKEN,
// META_PAGE_ID y META_IG_USER_ID todavia funcionan contra la Graph API,
// SIN publicar nada (solo lecturas GET, cero side effects). Se dispara
// manualmente antes de un turno automatico para confirmar que no va a
// fallar por credencial vencida.

const GRAPH_VERSION = 'v23.0';
const GRAPH_BASE = `https://graph.facebook.com/${GRAPH_VERSION}`;

async function main() {
  const pageId = process.env.META_PAGE_ID;
  const igUserId = process.env.META_IG_USER_ID;
  const token = process.env.META_PAGE_ACCESS_TOKEN;

  const results = {};

  results.page = await checkGraph(`${GRAPH_BASE}/${pageId}?fields=id,name&access_token=${encodeURIComponent(token)}`);
  results.instagram = await checkGraph(`${GRAPH_BASE}/${igUserId}?fields=id,username&access_token=${encodeURIComponent(token)}`);

  const allOk = results.page.ok && results.instagram.ok;
  console.log('DRY_RUN_RESULTADO: ' + JSON.stringify(results, null, 2));
  console.log(allOk ? '\n✅ TOKEN VALIDO — el proximo turno deberia publicar sin problema.' : '\n❌ TOKEN INVALIDO O VENCIDO — hay que renovarlo antes del proximo turno.');
  process.exit(allOk ? 0 : 1);
}

async function checkGraph(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) return { ok: false, error: (data.error && data.error.message) || 'Error desconocido' };
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: e.message || String(e) };
  }
}

main();
