# Quisqueya Travel — Memoria de Proyecto

Bitacora viva del sitio afiliado **https://quisqueyatravel.org**

> Leer esta skill SIEMPRE al inicio de una sesion de Quisqueya Travel.
> Actualizar SIEMPRE al final de cada sesion antes de cerrar.

---

## ⚠️ REGLA FIJA — NO NETLIFY (confirmado por Venul 2026-07-02)

**Venul YA NO usa Netlify. Cuenta eliminada por completo el 30 de junio de 2026. NUNCA sugerir Netlify, ni como hosting, ni como deploy, ni como fallback.**

- Hosting real: **Cloudflare Pages** (proyecto `quisqueyatravel`)
- Repo: **github.com/venulhernandez-cyber/quisqueyatravel** (rama `main`)
- Deploy: subir archivos a GitHub (web upload o push) → GitHub Actions (`deploy-cloudflare.yml`) → Cloudflare Pages publica solo en ~1-2 min
- Dominio: quisqueyatravel.org apunta a Cloudflare (nameservers athena/rory.ns.cloudflare.com)
- No hay carpeta `.git` en el mount local de Cowork — para desplegar hay que subir los archivos vía la interfaz web de GitHub (`/upload/main`) o pedirle a Venul que use `COMMIT.bat` si tiene Git instalado en su máquina.

---

## Estado Actual del Proyecto

**Fecha de ultima actualizacion:** 2026-07-12 (revision de efectividad: hallazgo critico de error de pago en Meta Ads, widgets de afiliados confirmados completos, datos reales de SEO/GSC y Travelpayouts)

| Item | Estado | Detalle |
|---|---|---|
| Sitio en vivo (pages.dev) | ✅ CORRECTO | quisqueyatravel.pages.dev — hoteles funcionando, Santiago filter, 13 cards |
| Sitio en vivo (dominio) | ⚠️ CACHE STALE | quisqueyatravel.org — Cloudflare Zone cache sirve version vieja. Fix: purgar cache en dashboard |
| GitHub repo | ✅ Actualizado | commit mas reciente: _headers (no-cache permanente) |
| DNS | ✅ RESUELTO | quisqueyatravel.org apunta a Cloudflare Pages (Namecheap → CF nameservers completado) |
| Cloudflare Pages | ✅ En produccion | deploy-cloudflare.yml activo. Auto-deploy en cada push a main |
| Cloudflare Zone cache | ⚠️ REQUIERE PURGA | Zona cachea JS/HTML con TTL largo — purgar en dash.cloudflare.com para fix inmediato |
| js/hoteles.js | ✅ CORREGIDO | Usa hoteles-grid + filtro-btn (ES) + entry Santiago — v3 cache buster en index.html |
| _headers | ✅ NUEVO | Previene cacheo futuro de HTML/JS — Cache-Control: no-cache en todas las rutas |
| Netlify | ❌ ABANDONADO | Sin creditos. NO usar. DNS ya migrado a Cloudflare |
| Travelpayouts Drive | ✅ ACTIVO | Token 543349 — archivos JS externos unicos (NO inline script) |
| Afiliado Booking/CJ | ❌ ABANDONADO (2026-07-04) | CID 7985681 — Venul decidio dejar de perseguir esta aprobacion. Afiliados definitivos: Stay22 (hoteles) + Travelpayouts (vuelos/carro/traslados/tours/eSIM/seguro) |
| Stay22 hoteles | ✅ Activo | stay22.com/allez/quisqueyatravel — en todos los CTAs de hoteles |
| Guias publicadas | ✅ 12 guias | Punta Cana, Barahona, Santo Domingo, Vuelos, Requisitos, Costo, Santiago, Jarabacoa, Puerto Plata, Samana, La Romana, Itinerario 10 dias |
| Google Analytics GA4 | ✅ Verificado en vivo | G-LJWN28FFQE — confirmado firing en produccion (2026-07-02). URL del data stream CORREGIDA 2026-07-04 (apuntaba a golden-heliotrope-c5c46d.netlify.app, un dominio abandonado — ahora apunta a quisqueyatravel.org) |
| Posts FB con links muertos | ✅ RESUELTO (2026-07-10) | 6 posts con enlaces a Netlify eliminados de Facebook. Nuevo reel con video real (no IA) publicado en su lugar |
| Blotato (video IA + auto-publish) | ❌ ROTO | API key invalida — Venul debe reconectar en my.blotato.com/settings/api |
| Google Search Console | ⚠️ MAYORIA SIN INDEXAR | De 26 URLs conocidas por Google, solo 4 estaban indexadas (dato del reporte agregado "Paginas", desactualizado al 29/6/26). Verificado EN VIVO con Inspeccion de URLs (mas confiable que el agregado): guia-punta-cana SI esta indexada. Solicitada indexacion 2026-07-04 para: guia-jarabacoa, guia-puerto-plata, guia-santiago, guia-santo-domingo, guia-vuelos-nyc-rd, guia-requisitos-viaje-rd-2026, guia-costo-viaje-familia-rd, guia-barahona (8 URLs). Pendiente: volver a revisar en unos dias si ya quedaron indexadas |

---

## Datos Fijos del Proyecto

```
Sitio principal:    https://quisqueyatravel.org
GitHub:             github.com/venulhernandez-cyber/quisqueyatravel (rama: main)
Archivos locales:   C:\Users\venul\OneDrive\Desktop\Quisqueya\

HOSTING (NUEVO — Cloudflare Pages):
  CF Account ID:    964860a341ac8ca2b5be0a1059f0b23b
  CF Zone ID:       059078dc193c7878004408a8d0265927
  CF Pages project: quisqueyatravel
  CF Nameservers:   athena.ns.cloudflare.com / rory.ns.cloudflare.com
  GitHub Actions:   .github/workflows/deploy-cloudflare.yml (push main → CF Pages produccion)

DEPLOY CORRECTO (proceso actual — Netlify ya no se usa, cuenta eliminada):
  1. Editar archivos en C:\Users\venul\OneDrive\Desktop\Quisqueya\
  2. Subir a GitHub: github.com/venulhernandez-cyber/quisqueyatravel/upload/main
  3. GitHub Actions corre automaticamente → despliega a Cloudflare Pages
  4. Verificar en: https://dash.cloudflare.com (proyecto quisqueyatravel)

Afiliados:
  Travelpayouts Drive token: 543349
  Script Drive URL: https://emrldtp.com/NTQzMzQ5.js?t=543349
  Stay22:           https://www.stay22.com/allez/quisqueyatravel
  Booking CJ CID:   7985681 (pendiente aprobacion)

Facebook:      pageId 2061443547418301 (El Quisqueyano en nyc)
Instagram:     @venulh
WhatsApp CTA:  +1 347 720 5769
```

---

## Historial de Sesiones

### Sesion — 2026-07-12 (revision de efectividad: conversiones, SEO, Meta Ads, tecnico, via Cowork)

**Que se hizo:** Venul pidio revisar la carpeta para hacerla mas efectiva. Se investigaron 4 frentes con acceso real a dashboards (Chrome ya logueado):

**🔴 Meta Ads — hallazgo critico:** la campana "Quisqueya Travel — Trafico Global" tiene **Error en el pago** — probablemente NO esta entregando anuncios ahora mismo pese a verse "activa". Venul pidio dejar esto para manana. Dato importante mientras tanto: **AS1 (Diaspora Dominicana Global) gana por mucho** — 1,724 visitas a la pagina / 16,435 alcance vs **AS2 (Viajeros al Caribe)** con solo 97 visitas / 1,652 alcance. Cuando se resuelva el pago, pausar o reducir AS2 y escalar AS1.

**Conversiones y afiliados:** Travelpayouts registro solo 25 clics totales en 30 dias (todos los programas combinados) y 0 bookings — con ese volumen, 0 conversiones es estadisticamente normal, NO es un bug de tracking. Balance $0, falta configurar metodo de pago en Travelpayouts (Venul debe hacerlo el mismo, dato financiero). Stay22 verificado funcionando end-to-end (redirige a Booking.com con affiliate_id correcto). Se confirmo por grep que **los 12 archivos locales YA tienen los 6 widgets de Travelpayouts** (vuelos, carro, traslado, tours, eSIM, seguro) + Stay22 — el pendiente antiguo de "agregar widgets" esta mas avanzado de lo que decia esta memoria, se corrige abajo. El problema real no son widgets faltantes sino volumen de trafico bajo, agravado justo ahora por el error de pago en Meta Ads que corto la principal fuente de trafico pagado.

**SEO / Google Search Console:** 4 paginas indexadas, 22 sin indexar (1 error 404, 16 "Descubierta: actualmente sin indexar" — Google conoce la URL pero no prioriza el rastreo, 5 "Rastreada: actualmente sin indexar" — Google la reviso y decidio no indexarla, posible senal de contenido delgado o poca autoridad). Performance: 11 clics / 156 impresiones en las ultimas 2 semanas, CTR 7.1%, posicion media 29.4 (pagina 3 de Google). Casi todo el trafico organico es gente buscando la marca directamente ("quisqueya travel") — practicamente cero trafico real por keywords de destino pese a 12 guias publicadas. Normal para un sitio de 3 semanas, pero la prioridad deberia ser autoridad/backlinks + solicitar indexacion manual de las 16 paginas "descubiertas sin indexar".

**Tecnico:** confirmado en vivo que el fix de `guia-samana.html` (boton CTA con clase `btn-primary`) esta desplegado correctamente. CSP sigue sin resolverse — sigue siendo el mismo bug de plataforma de Cloudflare ya escalado a su comunidad en la sesion anterior, sin cambios nuevos.

**Pendiente nuevo:**
- 🔴 Resolver el error de pago en Meta Ads (Venul, manana) — la campana probablemente no esta gastando ni entregando ahora mismo.
- 🔴 Cuando se resuelva el pago: pausar/reducir AS2 (Viajeros al Caribe) y escalar AS1 (Diaspora Dominicana Global) — 17x mejor en visitas a la pagina.
- 🟡 Configurar metodo de pago en Travelpayouts (Venul, dato financiero — Claude no puede hacerlo).
- 🟡 Trabajar autoridad de dominio (backlinks, mas contenido, mas tiempo) — explica la posicion media 29.4.

**ACTUALIZACION (misma sesion) — Venul pidio "corrige todos los del SEO", se ejecuto todo:**

1. **Causa raiz encontrada del 404 en GSC:** `https://quisqueyatravel.org/cdn-cgi/l/email-protection` — generada por la funcion Email Obfuscation de Cloudflare (reescribe los `mailto:` del footer), no es una pagina real. Fix: agregado `Disallow: /cdn-cgi/` a `robots.txt`.
2. **Causa raiz encontrada de las 5 paginas "rastreadas sin indexar":** las 8 paginas `/en/` y `/fr/` (excepto sus index) tenian `canonical`, `hreflang` y `og:url` apuntando a si mismas CON `.html`, contradiciendo el sitemap y el patron de las guias en espanol (que usan URLs limpias). Corregidos los 8 archivos + agregados los redirects 301 faltantes para `/en/*.html` y `/fr/*.html` en `_redirects` (antes solo existian para las guias en espanol) + limpiados enlaces internos y URLs de schema.org JSON-LD que tambien usaban `.html`.
3. **Meta titles/descriptions optimizados** en 6 guias que excedian ~70 caracteres (se truncaban en Google): costo-viaje-familia-rd, samana, puerto-plata, requisitos-viaje-rd-2026, barahona. Descripciones cortas/genericas alargadas (barahona, santiago). Descripcion de punta-cana acortada (182 caracteres, se truncaba a media frase).
4. **19 archivos desplegados a GitHub** (3 commits: raiz, en/, fr/) — confirmado el deploy en Cloudflare Pages y verificado en vivo que `/en/guide-santo-domingo` sirve sin `.html`.
5. **Indexacion manual solicitada en GSC:** de las 16 paginas "descubiertas sin indexar", 10 YA estaban indexadas al verificar (Google se puso al dia solo) — 7 guias raiz en espanol + 2 guias fr + `/fr/`. Las 6 restantes (todas en ingles: dominican-republic, entry-requirements-2026, family-budget-dr, flights-nyc-dr, punta-cana, santo-domingo) tenian el bug de canonical real — se solicito indexacion manual para las 6 despues del deploy.

**Pendiente 🟢 (verificar en 1-2 semanas):** confirmar en GSC que las 6 paginas en ingles quedaron indexadas tras la correccion del canonical, y que las 5 que antes aparecian "rastreadas sin indexar" (duplicados .html) ya no aparecen en ese informe.

---

### Sesion — 2026-07-11 (auditoria completa: seguridad + diseno + contenido, via Cowork)

**Que se hizo:**
- **Seguridad:** escaneo de secretos (`scan_secrets.py`) sobre 38 archivos — sin hallazgos. Listado de dominios externos (`list_external_domains.py`) — 14 dominios conocidos, 7 nuevos sin clasificar pero todos benignos y explicables: `connect.facebook.net` (script real del Meta Pixel, ya documentado en sesion 2026-07-07), `eticket.migracion.gob.do` (link oficial de migracion, solo href), `images.pexels.com` (fotos de stock, igual que Unsplash), `instagram.com` y `wa.me` (links de contacto), `schema.org`/`www.w3.org` (namespaces de JSON-LD/SVG, no son requests). Pendiente: agregar estos 7 a `references/allowlist-dominios.md` la proxima vez que se edite ese skill.
- Revisadas cabeceras HTTP en vivo (Chrome): `X-Frame-Options: DENY` ✅, `X-Content-Type-Options: nosniff` ✅ (ya la servia Cloudflare aunque no estaba en `_headers` local), `Referrer-Policy: strict-origin-when-cross-origin` ✅ (idem), `Strict-Transport-Security` ✅ con `max-age` + `includeSubDomains`, `Content-Security-Policy` ❌ AUSENTE (confirma el problema ya documentado en `references/cabeceras-seguridad.md` del 2026-07-01: Cloudflare parece removerla a nivel de cuenta/zona, no es un problema del archivo).
- Actualizado `_headers`: se agregaron explicitamente `X-Content-Type-Options`, `Referrer-Policy`, y una `Content-Security-Policy` construida con los dominios reales del sitio (incluyendo `connect.facebook.net` para el Meta Pixel). Falta subir a GitHub — Cloudflare puede seguir sin aplicar la linea de CSP (revisar Transform Rules en el dashboard si vuelve a faltar tras el deploy).
- **Diseno/UX:** verificados touch targets (WhatsApp float 56x56px, botones CTA con `min-height: 44px`) — OK. Contraste de color revisado por muestreo (footer, disclaimers) — pasa AA. Imagenes de destino son `background-image` en CSS (no `<img>`), por eso no llevan `alt` — es decorativo, no es un error de accesibilidad.
- **Bug real encontrado y corregido:** `guia-samana.html` tenia el CTA principal de hoteles (linea 157) SIN la clase `btn-primary` — se veia como link plano sin boton, distinto a las otras 11 guias. Corregido localmente.
- **Bug real encontrado y corregido:** `guia-vuelos-nyc-rd.html`, `guia-requisitos-viaje-rd-2026.html` y `guia-costo-viaje-familia-rd.html` no tenian el boton flotante de WhatsApp (ni el CSS ni el link) — contradice la decision fija documentada mas abajo ("Boton flotante WhatsApp en todas las paginas"). Se agrego el componente completo (CSS + link a wa.me) en los 3 archivos, igual que en el resto del sitio.
- **Contenido/consistencia:** corrido un chequeo local (adaptado de `auditoria.py`, que no puede llegar al sitio live desde el sandbox — proxy 403 Forbidden, error ya visto en `ultimo-reporte-auditoria.json` del 07-10) sobre los 25 archivos HTML del sitio (ES/EN/FR). Cero referencias a `netlify.app` en ningun archivo (migracion completa confirmada). Todos los canonical apuntan a `quisqueyatravel.org`. Todas las guias tienen el script de Travelpayouts y el link de Stay22. `bio-link-el-quisqueyano.html` y el archivo de verificacion de Google no tienen estos elementos, pero es esperado (no son guias de viaje).
- Verificado en vivo (Chrome) que el bug de `guia-samana.html` SI esta afectando produccion ahora mismo (el link live sigue sin `class`), confirmando que el fix local es necesario y aun no esta desplegado.
- Nota tecnica: el chequeo de "archivo truncado" via bash marco falsos positivos en los 3 archivos recien editados (parecia que no cerraban en `</html>`) — es el mismo lag de sincronizacion de OneDrive ya documentado (bash ve una copia vieja momentaneamente). Confirmado con `Read` (fuente de verdad) que los 3 archivos cierran bien.

**Pendiente nuevo:**
- 🔴 Subir a GitHub los archivos modificados en esta auditoria: `_headers`, `guia-samana.html`, `guia-vuelos-nyc-rd.html`, `guia-requisitos-viaje-rd-2026.html`, `guia-costo-viaje-familia-rd.html`.
- 🟡 Tras el deploy, revisar la consola del navegador (F12) en 2-3 paginas buscando errores de CSP bloqueando algo que falte en la politica.
- 🟡 Si la CSP sigue sin aparecer en las cabeceras live tras el deploy, revisar Cloudflare > Rules > Transform Rules (problema de cuenta, no de codigo).
- 🟢 Actualizar `references/allowlist-dominios.md` del skill de seguridad con los 7 dominios nuevos clasificados (fuera del alcance de esta sesion, ese archivo es de solo lectura desde Cowork).

**ACTUALIZACION (misma sesion):** Venul pidio subir los cambios por el mismo. Se subieron los 5 archivos via GitHub web upload (`/upload/main`, con Claude in Chrome ya logueado) — commit `9441e7` en `main`, GitHub Actions deberia desplegar a Cloudflare Pages automaticamente.

**Hallazgo importante durante el deploy:** ya existe un `functions/_middleware.js` (agregado hace ~3 dias, "fix: reescribir middleware CSP v2") que intenta forzar la cabecera Content-Security-Policy via Cloudflare Pages Function porque `_headers` no la aplica (mismo problema documentado en `references/cabeceras-seguridad.md`). Se verifico en vivo despues del commit: la cabecera `X-Csp-Test: middleware-ran-v2` (el marcador de diagnostico del propio middleware) NO aparece en la respuesta — es decir, el middleware tampoco esta corriendo/aplicandose en produccion ahora mismo, ni siquiera su marcador de diagnostico. Esto es informacion nueva: el problema no es solo que Cloudflare descarte la cabecera CSP especificamente, sino que el Function completo no parece estar ejecutandose en el request. Ademas, si el middleware SI llegara a correr, su CSP no incluye `connect.facebook.net` (necesario para el Meta Pixel agregado el 07-07) — quedaria desactualizado respecto al `_headers` nuevo de esta sesion.

**Pendiente critico para Venul (fuera del alcance de este skill — es de su cuenta de Cloudflare):**
- 🔴 Confirmar en el dashboard de Cloudflare (pestaña Deployments del proyecto `quisqueyatravel`) que el commit `9441e7` desplego bien y revisar los logs de build — si `functions/_middleware.js` no esta corriendo, puede ser un problema de configuracion del proyecto (ej. "Build output directory" mal apuntado, o Pages Functions deshabilitadas).
- 🔴 Si el middleware sigue sin ejecutarse tras confirmar el deploy, revisar Settings > Functions en el dashboard de Cloudflare Pages.
- 🟡 Si en algun momento el middleware SI empieza a correr, actualizar su CSP para incluir `connect.facebook.net` (Meta Pixel) — ahora mismo solo el `_headers` nuevo lo tiene.

**ACTUALIZACION 2 (misma sesion) — investigacion profunda del bug de CSP, con acceso a Cloudflare dashboard:**

Venul dio acceso a `dash.cloudflare.com` (ya logueado en su sesion). Con eso se investigo a fondo por que el CSP nunca llega al navegador. Hallazgos, en orden:

1. El deploy `9441e7` SI corrio bien (GitHub Actions "Success", Cloudflare "exito"). Confirmado en el dashboard: el commit se desplego a `quisqueyatravel.pages.dev` con alias `quisqueyatravel.org`.
2. En la pestana "Funciones" del deployment, la seccion "Rutas de invocacion" confirma que `functions/_middleware.js` SI esta correctamente detectado y registrado para TODAS las rutas (`"incluir": ["/*"]`) — Wrangler lo bundleo bien. Esto descarta que el problema sea "la Function no se despliega".
3. Se activo el log en tiempo real (Real-time Logs) y se genero trafico real a `quisqueyatravel.org?cachebust=...`. El header de diagnostico `X-Csp-Test: middleware-ran-v2` SI llega al navegador (`cf-cache-status: DYNAMIC`, sin cache de por medio) — confirma que la Function SI se ejecuta en cada request. Pero en esa misma respuesta, el header `Content-Security-Policy` seguia ausente. Es decir: la Function corre, un header personalizado con cualquier otro nombre llega bien, pero especificamente el header llamado `Content-Security-Policy` no llega — nunca.
4. Se probo un segundo mecanismo, totalmente independiente del codigo/Function: una **Response Header Transform Rule** a nivel de zona (`Rules > Transform Rules > Response Header`, "Forzar CSP (workaround Pages Function no la entrega)"), aplicada a "Todas las solicitudes entrantes", forzando el mismo valor de CSP de forma estatica. Se desplego y aparecio como "Active". Aun asi, tras esperar y probar con cache-busting, el header seguia sin llegar.
5. Se verifico con un test definitivo (no solo mirar el header, sino comprobar si el navegador REALMENTE aplica la politica): se inyecto un `<script src="https://example.com/no-deberia-cargar.js">` con JS. Si el CSP estuviera activo, el navegador nunca deberia hacer el request (bloqueado antes de tocar la red). El request SI se disparo y llego a la red (status 503 real de example.com) — confirmando que el CSP genuinamente NO se esta aplicando, ni con la Function ni con la Transform Rule.
6. Como tercer intento, se agrego el CSP como **meta tag `<meta http-equiv="Content-Security-Policy">`** directo en el `<head>` de las 24 paginas HTML (ES, EN, FR, bio-link) — esto NO depende de Cloudflare en absoluto, es HTML puro que el navegador siempre respeta. Se desplego (3 commits: raiz, en/, fr/). Se confirmo que el meta tag SI llega al HTML final, en la posicion 0 de `<head>`, con el contenido completo e intacto (506 caracteres, sin truncar). A pesar de eso, el mismo test del `<script src="https://example.com/...">` sigue sin ser bloqueado — el navegador tampoco aplica la politica del meta tag.

**Prueba de control (descarta que sea un problema del navegador/extension usada):** se repitio el mismo test (inyectar `<script src="https://example.com/...">`) en `github.com` en la misma sesion/navegador — ahi SI se bloqueo (0 requests de red, la CSP estricta de GitHub funciono normal). Esto confirma que el metodo de prueba es valido y que el problema es especifico de quisqueyatravel.org, no un bug generalizado del navegador o de la extension de Chrome usada para probarlo.

**Conclusion de esta sesion:** este es un problema mas profundo de lo que se penso originalmente. No es "Cloudflare descarta el header CSP" (eso ya se sabia) — es que NINGUNO de los tres mecanismos probados (Pages Function, Transform Rule de zona, ni meta tag en el HTML) logra que el navegador aplique la politica, a pesar de que los tres SI entregan/incluyen el CSP correctamente segun se puede verificar (el header o el meta tag estan ahi, con el contenido correcto). Esto ya no tiene una explicacion clara dentro de lo que se puede diagnosticar por este medio (Cowork/Chrome) — huele a algo raro con el orden de carga de recursos, el timing del meta tag, o algo especifico de como Cloudflare Pages sirve el HTML que rompe silenciosamente la aplicacion del CSP en el navegador. Recomendacion: si esto importa a Venul, el siguiente paso realista es abrir un ticket con soporte de Cloudflare (o postear en su comunidad) con esta evidencia especifica, o probar el sitio en un navegador totalmente limpio (perfil nuevo, sin extensiones) para descartar que sea el propio Chrome de esta sesion el que este ignorando el CSP por alguna razon local.

**Lo que SI quedo confirmado funcionando (no tocar, ya esta bien):** `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, y `Strict-Transport-Security` — los 4 llegan correctamente en cada respuesta. El CSP es la unica cabecera de seguridad que sigue sin poder aplicarse, y es una capa adicional de defensa (util pero no la unica proteccion del sitio).

**RESUELTO (misma sesion):** se descargo el contenido real de `hoteles.html` y `vuelos.html` directo de GitHub (raw), se les agrego el mismo meta tag de CSP, y se subieron de vuelta (commit "Agregar meta tag CSP a hoteles.html y vuelos.html"). Las 26 paginas del sitio (24 + estas 2) ya tienen el meta tag. Sigue pendiente: la carpeta local `C:\Users\venul\OneDrive\Desktop\Quisqueya` NO tiene copia de `hoteles.html`, `vuelos.html`, `netlify.toml` ni `lighthouserc.js` — si se vuelven a editar en el futuro, hay que traerlas de GitHub primero (no existen localmente).

**Estado del deploy:** ✅ 4 commits subidos a `main` en total esta sesion (`_headers` + 4 paginas de diseno, luego 3 commits de meta tag CSP: raiz/en/fr). Todo desplegado y confirmado en produccion excepto el CSP en si, que sigue sin aplicarse pese a 3 intentos distintos.

---

### Sesion — 2026-07-10, parte 2 (eliminacion 6 posts FB con links muertos + nuevo reel con video real, via Cowork)

**Que se hizo:**
- Se identificaron y eliminaron los 6 posts de Facebook con enlaces muertos a `golden-heliotrope-c5c46d.netlify.app` (pendiente desde 2026-07-04). Flujo usado en "Administrar publicaciones": seleccionar checkboxes → "Siguiente" → radio "Eliminar publicaciones" → "Listo" (el boton "Borrar" solo NO ejecuta el borrado, hay que pasar por ese flujo completo). Verificado post por post que ya no aparecen.
- Se intento crear un video nuevo con IA para reemplazar esos posts. Blotato broken: `blotato_get_user` devuelve "Invalid API key or auth session" — la cuenta de Blotato necesita ser reconectada por Venul en my.blotato.com/settings/api. Se probo un MCP alternativo tipo Higgsfield pero no tenia un template adecuado para video realista de viajes.
- Venul opto por usar un video real de su telefono (`VID20260709WA0010.mp4`, subido a la carpeta Quisqueya) en vez de generar con IA. Video vertical 478x850, ~11s, costa dominicana (acantilados + agua turquesa), sin lugar especifico confirmado por Venul.
- Se publico el video directamente vía Facebook (navegador, Claude in Chrome) ya que Blotato no esta disponible: subido como Reel en la pagina "El Quisqueyano en nyc", con caption en la voz de marca (gancho emocional + emojis + CTA a comentar/compartir), sin nombrar lugar especifico (generico "costa dominicana"), enlace a quisqueyatravel.org, etiqueta de IA desactivada (es contenido real, no generado). Confirmado publicado: notificacion de Facebook "Tu reel ya se puede ver."

**Estado del deploy:** Sin cambios de deploy en esta parte (solo accion en Facebook, no en el sitio).

**Pendiente para retomar:**
- 🔴 Reconectar Blotato si se quiere volver a generar video con IA o auto-publicar en el futuro (API key invalida).
- 🔴 Continuar mañana (cuota GSC): solicitar indexacion de guia-puerto-plata, guia-samana, guia-la-romana, guia-itinerario-republica-dominicana + 7 paginas EN + 3 FR.
- 🔴 Subir `sitemap.xml` (con lastmod ya agregado localmente) a GitHub para que se despliegue en Cloudflare Pages — todavia no se ha hecho.
- 🟡 Considerar publicar el mismo video/reel tambien en Instagram (@venulh) para consistencia cross-platform.

---

### Sesion — 2026-07-10 (indexacion GSC + sitemap lastmod, via Cowork)

**Que se hizo:**
- Venul reporto que en Google salen "versiones viejas" de la pagina y que cosas de Netlify lo estan perjudicando. Se investigo a fondo:
  - Se agregaron fechas `<lastmod>2026-07-09</lastmod>` a las 23 URLs del `sitemap.xml` (ES/EN/FR) — no las tenia, ayuda a Google a priorizar el re-rastreo.
  - Se reviso Google Search Console EN VIVO (Inspeccion de URLs, no el reporte agregado que sigue mostrando datos del 29/6). Confirmado indexadas: home, guia-punta-cana, guia-santo-domingo, guia-barahona, guia-requisitos-viaje-rd-2026, guia-costo-viaje-familia-rd, guia-vuelos-nyc-rd, guia-santiago, guia-jarabacoa. Se solicito re-indexacion prioritaria para las 9.
  - Se intento continuar con guia-puerto-plata, guia-samana, guia-la-romana, guia-itinerario-republica-dominicana + paginas EN/FR pero Google corto por **Cuota superada** (limite diario de solicitudes manuales de indexacion) — mensaje: "Prueba a enviarla de nuevo mañana". Pendiente continuar mañana.
  - Se busco si el subdominio viejo `golden-heliotrope-c5c46d.netlify.app` sigue indexado/compitiendo en Google — no se encontro evidencia (fetch devuelve vacio, `site:` search sin resultados de ese dominio). Probablemente no es la causa de lo que Venul esta viendo.
  - IMPORTANTE — al releer la bitacora completa (no solo el resumen), se encontro que el verdadero pendiente sin resolver relacionado a Netlify son **6 posts de Facebook con enlaces muertos a golden-heliotrope-c5c46d.netlify.app** (documentado 2026-07-04 parte 3, quedo a medias por corte de sesion). Esto es probablemente la causa real de lo que Venul esta reportando — no la indexacion de Google. Pendiente retomarlo.

**Pendiente nuevo:**
- 🔴 Continuar mañana (cuota de GSC se resetea): solicitar indexacion de guia-puerto-plata, guia-samana, guia-la-romana, guia-itinerario-republica-dominicana + las 7 paginas EN + 3 FR.
- 🔴 PRIORITARIO: retomar la busqueda y correccion de los 6 posts de Facebook con links muertos a Netlify — este es probablemente el problema real que Venul esta viendo, mas que la indexacion de Google.

**Estado del deploy:** Solo cambio `sitemap.xml` (lastmod agregado) — falta subir a GitHub para que se despliegue.

---

### Sesion — 2026-07-09 (auditoria config afiliado Stay22, via Cowork) — EN CURSO

**Que se hizo:**
- Venul pidio revisar si falta algo en la config de afiliado Stay22. Se verifico en vivo (Chrome, sesion ya logueada en hub.stay22.com): cuenta real y activa, **AID: quisqueyatravel**.
- Se probo el formato de link actual del sitio (`stay22.com/allez/quisqueyatravel?address=X`) contra: un path inventado (`fakequisqueyatest`), el endpoint oficial `/allez/roam` sin aid, y `aid=quisqueyatravel` explicito — los 4 aterrizan en Booking.com con el mismo `affiliate_id=1607597`. CONCLUSION correcta (tras corregir una alarma falsa inicial): 1607597 es el ID maestro de Stay22 con Booking.com para TODOS sus publishers — normal, no es un fallback generico. La atribucion real pasa por un `label` interno de Stay22, no visible desde afuera.
- El Generador Allez oficial del panel (con su AID ya cargado) genera un formato de link DISTINTO al que usa el sitio: enlaces cortos tipo `https://booking.stay22.com/quisqueyatravel/{codigo}` (via campo "URL del proveedor" + campaign). No se pudo confirmar 100% si el formato viejo del sitio (`/allez/quisqueyatravel?address=`) sigue siendo valido — pendiente preguntar a support@stay22.com.
- **Dato duro revisado en Performance (hub.stay22.com/en/analytics), ultimos 30 dias (9 jun-9 jul 2026):** 4 loads, 2 vistas, 2 interacciones, **2 clics**, **0 transacciones**. En Transacciones (Actas): $0.00 ingresos historicos, 0 transacciones, comision promedio $0.00. Esto CONFIRMA (consistente con lo ya documentado el 2026-07-04: "6-8 clics/mes") que el cuello de botella real es volumen de clics, no necesariamente un bug tecnico.
- Confirmado (otra vez, grep del codigo): NINGUN link del sitio usa `campaign=` — sin esto no se puede saber que guia genera cada clic en el dashboard de Stay22.
- Confirmado: el footer/disclaimers de TODAS las guias mencionan "afiliado de Stay22 y Travelpayouts" pero no se encontro ningun link o script real de Travelpayouts en el codigo actual (solo el texto del disclaimer) — revisar si Travelpayouts se cayo del sitio en algun momento o si el texto quedo desactualizado.

**Pendiente nuevo:**
- 🔴 Escribir a support@stay22.com: confirmar si `/allez/quisqueyatravel?address=X` sigue siendo un formato valido/atribuido, o si hay que migrar a los enlaces cortos del Generador Allez.
- 🟡 Reescribir los +40 enlaces de Stay22 en el sitio (js/hoteles.js + HTML ES/EN/FR) agregando `campaign=` por pagina/guia (ej. `campaign=guia_puntacana`) para poder medir que contenido convierte.
- 🟡 Investigar por que Travelpayouts no aparece en el codigo pese a estar en los disclaimers de todas las guias.
- 🟢 Evaluar visibilidad/ubicacion de los botones "Ver hoteles" en las guias — con solo 2 clics/mes y trafico real segun GA4 (ver sesion 07-04: 355 vistas/28 dias), vale la pena revisar si el CTA es lo suficientemente visible.

**ACTUALIZACION (misma sesion, continuacion):** se agrego `campaign=` a TODOS los enlaces de Stay22 del sitio:
- 21 archivos HTML (ES/EN/FR) via sed, un campaign unico por pagina (ej. `guia_punta_cana`, `en_guide_santo_domingo`, `fr_home`) — verificado 1:1 (cada link de stay22.com tiene su campaign, conteo coincide en los 21 archivos).
- `js/hoteles.js`: funcion `addr(ciudad, slug)` ahora acepta un segundo parametro y arma `campaign=home_hoteles_<slug>` (ej. `home_hoteles_punta_cana`). Se reescribio el archivo completo con Write (no solo sed) porque el mount de OneDrive mostraba una copia truncada por el lag de sincronizacion ya documentado — confirmado con la herramienta Read (fuente de verdad) que el archivo real esta completo y bien formado, 152 lineas, cierra correctamente.
- `data/hoteles.json`: mismos 24 links (6 ciudades x 4 hoteles) actualizados con `campaign=home_hoteles_<ciudad>` via sed, JSON validado con `python3 -m json.tool`.
- Todos los HTML verificados: cierran correctamente en `</html>`, sin truncamiento.

**Pendiente para Venul:**
- 🔴 Subir los archivos modificados a GitHub (upload web, rama main) para que Cloudflare Pages despliegue: `js/hoteles.js`, `data/hoteles.json`, `index.html`, los 12 `guia-*.html`, `en/index.html` + 6 guias en/, `fr/index.html` + 2 guias fr/.
- 🔴 Sigue pendiente escribir a support@stay22.com para confirmar si el formato de link (`/allez/quisqueyatravel?address=`) atribuye correctamente — el campaign nuevo ayuda a medir apenas eso se confirme.

**Estado del deploy:** Cambios hechos localmente, NO desplegados todavia — falta subir a GitHub.

---

### Sesion — 2026-07-07 (Meta Pixel + plan de Meta Ads global, via Cowork)

**Que se hizo:**
- Venul pidio monetizar el sitio a nivel mundial. Se reviso la cuenta de Meta Ads (290012163): estaba en estado UNSETTLED (saldo $35.51 atrasado, cuenta publicitaria inhabilitada). Venul pago el saldo directamente en Meta Business Suite — cuenta confirmada ACTIVE via API.
- Se detecto que el sitio NO tenia Meta Pixel instalado (dataset 2054264274867364 existe en la cuenta de ads pero `last_fired_time` era epoch 0, nunca disparo).
- Se instalo el snippet del Meta Pixel (ID 2054264274867364) en el `<head>` de las 24 paginas HTML del sitio (13 ES + 7 EN + 3 FR + bio-link), verificado que ningun archivo se trunco (todos cierran en `</html>`).
- Se creo `COMMIT-PIXEL.bat` en la raiz del proyecto (mismo patron que `COMMIT.bat`) con el `git add` de los 24 archivos modificados — falta que Venul lo corra (doble clic) para hacer commit + push a `main` y que Cloudflare Pages lo despliegue.
- Se diseno un plan de campana de Meta Ads para trafico internacional (no solo NYC): 3 ad sets (diaspora dominicana global, viajeros al Caribe interes general, retargeting) + 5 hooks (2 deseo, 2 miedo, 1 solucion) generados con `ad-hook-generator`. Guardado como archivo aparte (no en este repo) para revisar con Venul antes de crear las campanas reales en Meta Ads.
- Encontrado: pagina de Facebook vinculada a la cuenta de ads = page_id 2061443547418301 (El Quisqueyano en NYC) — a usar en `object_story_spec` cuando se creen los creativos.
- Encontrado: imagen og:image ya usada en el sitio (`https://d8j0ntlcm91z4.cloudfront.net/user_3BIr3rEkWzimSr0jX6Jzj2wEBZ8/hf_20260621_001007_b673c298-8907-4508-ab28-085c96bd72f3.png`) — candidata para reusar como creativo de anuncio en vez de generar una nueva (se intento generar una nueva pero la cuenta de Higgsfield esta sin creditos).

**Pendiente nuevo:**
- 🔴 Venul debe correr `COMMIT-PIXEL.bat` para publicar el Pixel en produccion.
- 🟡 Confirmar que el Pixel dispara en quisqueyatravel.org despues del deploy (revisar en Meta Events Manager).
- 🟡 Crear las campanas reales en Meta Ads (creativos + ad sets) una vez el Pixel este disparando y Venul apruebe el plan de audiencias/presupuesto.
- 🟢 (Opcional) Comprar creditos de Higgsfield si se quiere generar una imagen nueva para el anuncio en vez de reusar la del sitio.

**Notas importantes:**
- La seccion de "Comentarios reales de la comunidad" en `index.html` sigue con texto placeholder entre corchetes (`[TEXTO DEL COMENTARIO REAL 1...]`) — se ve poco profesional, recomendado llenarla con comentarios reales de FB/IG antes de escalar trafico pagado hacia el sitio.

---

### Sesion — 2026-07-04, parte 2 (fix GA4 stream URL + verificacion afiliados, via Cowork)

**Que se hizo:**
- Venul senalo que sospechaba que Google Analytics estaba mal configurado con el dominio viejo — se verifico en analytics.google.com (propiedad GA4 "QuisqueyaTravel") y era correcto: el campo "URL del flujo" del data stream "QuisqueyaTravel Web" apuntaba a `https://golden-heliotrope-c5c46d.netlify.app` (dominio de Netlify, abandonado desde el 30 de junio). El Measurement ID (G-LJWN28FFQE) y la recoleccion de datos SI funcionaban bien (confirmado que el HTML de quisqueyatravel.org tiene ese mismo ID) — el problema era solo cosmetico/de metadata en la consola de GA, no afectaba el tracking real.
- CORREGIDO directamente en analytics.google.com: URL del flujo actualizada a `https://quisqueyatravel.org`.
- Revisado el informe "Paginas y pantallas" de los ultimos 28 dias (6 jun-3 jul): 355 vistas / 321 usuarios activos totales. Desglose por pagina: home 112 vistas (85 usuarios), guia-punta-cana 42, guia-santiago 41, guia-barahona 40, guia-jarabacoa 39, guia-santo-domingo 39, guia-vuelos-nyc-rd 39, /en/ 1. Trafico por canal: Direct 235 sesiones, Unassigned 75, Organic Social 21, Organic Search 7. Por pais: Estados Unidos 297 usuarios, Republica Dominicana 7.
- Verificado en vivo el contenido de `guia-vuelos-nyc-rd.html` (Venul penso que faltaba crearla) — YA EXISTE, buena calidad (comparacion JFK/Newark/LaGuardia, tips de equipaje, tono on-brand), no requeria trabajo.
- Verificado el estado real de los afiliados en sus dashboards (con sesion ya iniciada en el navegador de Venul):
  - **Travelpayouts**: cuenta "Quisqueyatravel" verificada (check verde). Julio (1-4 jul): 6 clics, $0 ganancias, 0 reservas. Junio: pocos clics tambien, $0 ganancias. Balance total: $0. Nota: aparece "set your payout method" sin configurar — falta configurar metodo de pago para poder cobrar cuando haya comisiones.
  - **Stay22**: no se pudo verificar dashboard (no hay sesion iniciada en stay22.com desde este navegador, pantalla de Login). Confirmado en cambio que los links en vivo del sitio SI apuntan correctamente a Stay22 (`stay22.com/allez/quisqueyatravel?address=...`).
  - **CJ Affiliate / Booking (CID 7985681)**: no hay sesion iniciada en cj.com desde este navegador. Sigue igual que antes — pendiente de aprobacion, no se encontro nada que indique que se abandono.

**Pendiente nuevo:**
- 🟡 Configurar metodo de pago en Travelpayouts (`set your payout method`) para poder recibir comisiones cuando lleguen.
- ✅ Investigado por que 0 conversiones — RESUELTO (no era bug): se probo el link de Stay22 end-to-end (`?address=Punta%20Cana...`) y redirige correctamente a Booking.com con resultados reales (cientos de hoteles filtrables, affiliate_id=1607597 presente en la URL). El funnel tecnico esta bien. La razon real de 0 conversiones es volumen: solo 6-8 clics/mes es una muestra demasiado chica para esperar reservas — no hay nada que arreglar tecnicamente, hace falta mas trafico.
- ✅ Investigado el trafico "Direct" — RESUELTO: se confirmo que los links de quisqueyatravel.org en los posts de Facebook NO tienen parametros UTM, solo el `fbclid` que agrega Facebook automaticamente (ej: `quisqueyatravel.org/?fbclid=...`). GA4 no reconoce `fbclid` para atribuir "Organic Social" — cuando el referrer se pierde (comun en el navegador in-app de Facebook/Instagram), esas visitas caen en "Direct" o "Unassigned" en vez de "Social". Esto explica por que 235+75 de 355 vistas aparecen como Direct/Unassigned en vez de Organic Social.
- 🟡 NUEVO, accionable: agregar parametros UTM a todos los links que se compartan en Facebook/Instagram (ej. `?utm_source=facebook&utm_medium=social&utm_campaign=nombre-del-post`) para que GA4 atribuya correctamente el trafico social real vs directo.

**Estado del deploy:** Sin cambios de codigo del sitio esta sesion — todo el trabajo fue en las consolas de Google Analytics y Travelpayouts, no en el repo de GitHub.

**Notas importantes:**
- Confirmado (otra vez): el problema que reporto Venul con GA era real y especifico (URL del stream, no el tracking en si) — buen instinto de su parte, vale la pena que siga revisando la consola de GA de vez en cuando.

---

### Sesion — 2026-07-04, parte 3 (indexacion Google Search Console + intento de arreglo de posts FB)

**Que se hizo:**
- Venul pregunto si la pagina esta indexada en Google. Se reviso el reporte "Indexacion de paginas" en Search Console: 22 de 26 URLs conocidas NO estan indexadas (dato del 29/6/26, desactualizado). Se verifico cada URL relevante EN VIVO con la herramienta "Inspeccion de URLs" (mas confiable que el reporte agregado, que tarda dias en refrescar):
  - guia-punta-cana: SI esta indexada (buena noticia, el reporte agregado estaba desactualizado en este caso)
  - guia-santiago, guia-santo-domingo, guia-vuelos-nyc-rd, guia-requisitos-viaje-rd-2026, guia-costo-viaje-familia-rd, guia-barahona: confirmadas NO indexadas ("Descubierta: actualmente sin indexar" — Google las conoce por el sitemap pero nunca las ha rastreado)
  - Se solicito indexacion manual para las 6 anteriores + guia-jarabacoa + guia-puerto-plata (ya solicitadas en la parte 1 de esta sesion) = 8 URLs en total solicitadas hoy
  - Los 5 casos de "Rastreada: actualmente sin indexar" resultaron ser las variantes .html duplicadas de las paginas EN/FR (`/en/guide-dominican-republic.html`, etc.) — Google las rastreo y decidio NO indexarlas porque el canonical apunta a la URL limpia. Esto es correcto, no es un problema.
  - El unico 404 real es `/cdn-cgi/l/email-protection` — ruta automatica de Cloudflare para ofuscar emails, no es una pagina real del sitio. Tampoco es un problema.
- Se intento retomar la correccion de los 6 posts de Facebook con links muertos a Netlify (Venul dio permiso explicito para reintentarlo). Se empezo a buscar los posts scrolleando el timeline de la pagina de Facebook, pero la sesion se interrumpio antes de completar la busqueda — QUEDA PENDIENTE continuar esto en la proxima sesion.

**Pendiente nuevo:**
- 🟡 Volver a revisar en unos dias (via Inspeccion de URLs, no el reporte agregado que tarda en refrescar) si las 8 URLs solicitadas hoy ya quedaron indexadas.
- 🟡 CONTINUAR: buscar y corregir los 6 posts de Facebook con enlaces muertos a Netlify (Venul ya dio permiso, quedo a medias por corte de sesion).

**Estado del deploy:** Sin cambios de codigo — todo el trabajo fue en Search Console y un intento (incompleto) en Facebook.

---

### Sesion — 2026-07-04 (bug fotos Stay22 en Samana + limpieza archivos Netlify)

**Que se hizo:**
- Revisada la seccion "Hoteles recomendados" del sitio en vivo con Chrome: se encontro que el widget de Stay22 muestra la misma foto incorrecta (retrato de un hombre con lentes y barba, no una foto de hotel) en 2 propiedades de Samana: "Hotel Bahia Principe Grand Samana" y "Casa Marina Bay". Tambien se encontraron 4 hoteles con foto rota/sin cargar: Radisson Blu Hotel Santo Domingo, Hotel El Embajador Autograph Collection, Hodelpa Centro Plaza, Hodelpa Camino Real.
- Se confirmo que las imagenes vienen de URLs firmadas del dominio de Stay22 (no son archivos del sitio) — es un bug del feed de datos de Stay22, no algo editable desde el codigo del sitio.
- Se redacto y envio un correo a support@stay22.com (borrador creado con create_draft, enviado por Venul via Gmail) reportando ambos problemas con el detalle de los hoteles afectados.
- Confirmado (otra vez) por Venul: NO usa Netlify. Ya estaba documentado arriba en la regla fija, no hizo falta cambiar nada de la config real.
- LIMPIEZA: borrados `netlify.toml` y `DEPLOY-LEEME.md` de la carpeta del sitio (pendiente desde la auditoria del 2026-07-03) — eran archivos huerfanos de la era Netlify, ya no se usan.

**Pendiente:**
- Esperar respuesta de Stay22 sobre las fotos incorrectas/rotas — no hay accion adicional posible desde el lado del sitio.

**Estado del deploy:** Sin cambios de codigo del sitio esta sesion (solo se borraron 2 archivos que no se desplegaban). No requiere nuevo deploy.

---

### Sesion — 2026-07-03, parte 2 (implementacion de 3 hallazgos de la auditoria del mismo dia)

**Que se hizo:** Venul eligio 3 de los 6 pendientes que salieron de la auditoria de la manana (dejo fuera, por ahora: el boton de WhatsApp en index.html):
- Acortados 3 titulos (`guia-santo-domingo`, `guia-santiago`, `guia-vuelos-nyc-rd`) y 5 meta descriptions (`guia-samana`, `guia-requisitos-viaje-rd-2026`, `guia-costo-viaje-familia-rd`, `guia-santiago`, `guia-barahona`) que excedian el largo recomendado. Verificado con conteo de caracteres, todos quedaron dentro de rango, HTML validado con html.parser.
- RECONSTRUIDAS `guia-jarabacoa.html` y `guia-puerto-plata.html` con la plantilla actual (la misma de `guia-santiago.html`: paleta oficial `:root` con --verde/--naranja/--oscuro, nav sticky simple con logo+CTA, clase `.whatsapp-float`, foco visible). Se preservo todo el contenido original (texto, precios, tablas, CTAs de afiliados) — solo cambio el armazon visual. Tambien se completo el footer de ambas con enlaces a todas las guias (antes les faltaban Samana/La Romana/entre si).
- CREADA `guia-itinerario-republica-dominicana.html` — la brecha de contenido detectada en la auditoria SEO (competidores en español rankean fuerte con itinerarios de varios dias y Quisqueya Travel no tenia ninguno). Ruta de 10 dias: Santo Domingo → La Romana → Punta Cana → Samana → Puerto Plata → Santiago, con tabla de presupuesto, version corta de 7 dias, y enlaces internos a las 6 guias de destino que toca (buen refuerzo de SEO interno). Titulo 65 caracteres, meta description 145 — dentro de rango.
- De paso (mismo archivo que ya se estaba editando, bajo riesgo): se agrego `guia-puerto-plata.html` a `_redirects` (faltaba, era el unico guia sin su regla de URL limpia) y se agrego "La Romana" + el nuevo itinerario al dropdown "Destinos y guias" y al footer de `index.html` (a La Romana tampoco le faltaba solo el redirect, tambien faltaba en el menu — se aprovecho para completarlo).
- ADVERTENCIA DE VALIDACION: al revisar los archivos recien editados con `bash`/`grep` justo despues del `Edit`, salieron truncados (`index.html` cortado a mitad de un link, `sitemap.xml` con un tag sin cerrar) — pero esto fue el lag de sincronizacion de OneDrive ya documentado, NO una corrupcion real. Se confirmo releyendo los archivos con la herramienta `Read` (que si esta actualizada al toque) y ambos estaban completos y correctos. Regla para la proxima vez: si `bash` muestra un archivo de OneDrive truncado justo despues de editarlo, releer con `Read` antes de alarmarse — no asumir que el archivo esta roto.
- DESPLEGADO: subida via GitHub web upload (13 archivos: las 2 guias reconstruidas + la guia nueva + las 7 con SEO corregido + `index.html` + `sitemap.xml` + `_redirects`), commit `4c04b2f`, forzado `translate=no` antes de subir (los nombres de archivo salieron correctos, sin acentos raros). `Deploy to Cloudflare Pages #52` completo en 30s. VERIFICADO en vivo con fetch directo: `/guia-itinerario-republica-dominicana` carga con todo el contenido y enlaces, `/guia-puerto-plata` ya sirve la plantilla nueva (nav simple + whatsapp-float).

**Pendiente (se quedo fuera a proposito, Venul no lo selecciono esta vez):**
- 🟡 Agregar el boton flotante de WhatsApp a `index.html` (sigue siendo la unica pagina principal sin el).

**Estado del deploy:** ✅ EN VIVO — commit 4c04b2f, Deploy to Cloudflare Pages #52 exitoso.

---

### Sesion — 2026-07-03 (Auditoria completa: seguridad + diseno/UX + SEO, vía Cowork)

**Que se hizo:**
- Se corrio la auditoria de seguridad (skill `quisqueya-travel-seguridad`): 36 archivos escaneados, 0 secretos expuestos. `list_external_domains.py` encontro 4 dominios "sin clasificar" que en realidad son legitimos y de bajo riesgo (confirmados por contexto, son solo `href=`/JSON-LD, no scripts): `schema.org` (ya documentado antes), `wa.me` (boton de WhatsApp), `instagram.com` (link social), y `eticket.migracion.gob.do` (link oficial al formulario de inmigracion dominicano en las guias de requisitos ES/EN/FR). Pendiente: agregarlos a `references/allowlist-dominios.md` del skill — no se pudo escribir ahi porque ese archivo vive en el paquete del skill (solo lectura desde Cowork), asi que quedan documentados aqui en su lugar.
- IMPORTANTE — se encontro que `references/allowlist-dominios.md` del skill esta truncado (corta a la mitad de un caracter en la ultima linea, "www.facebook.com" seguido de bytes invalidos). Esto rompia el script `list_external_domains.py`. Se uso una copia temporal corregida para completar la auditoria de esta sesion, pero el archivo original del skill sigue roto — si una proxima sesion no puede correr `list_external_domains.py`, ese es el motivo.
- ACTUALIZACION BUENA NOTICIA: el problema de CSP documentado el 2026-07-01 ("Content-Security-Policy no se aplica en vivo, posible Transform Rule de Cloudflare") **ya no ocurre**. Verificado con securityheaders.com (el sandbox de Cowork tiene bloqueada la salida directa a quisqueyatravel.org, igual que en auditorias anteriores): grado **A**, con X-Frame-Options, X-Content-Type-Options, HSTS, CSP completa, Permissions-Policy y Referrer-Policy sirviendose correctamente. Unico warning (no critico, ya documentado en `references/cabeceras-seguridad.md`): la CSP usa `'unsafe-inline'` en `script-src`, necesario porque el sitio no tiene build step para generar nonces.
- Auditoria de diseno/UX (skill `quisqueya-travel-design`, modos 1/2/5): contraste de color revisado matematicamente (todas las combinaciones texto/fondo pasan WCAG AA, varias pasan AAA), jerarquia de encabezados correcta (un solo h1 por pagina), CTAs con `min-height:44px` ya aplicado consistentemente. Confirmado que `guia-jarabacoa.html` y `guia-puerto-plata.html` **siguen** en la plantilla vieja (verde #006B3F, nav sin Bootstrap, clase `.wa-float` en vez de `.whatsapp-float`) — esto ya estaba documentado como decision consciente del 2026-07-01 ("no necesitaban el fix de color"), pero sigue siendo la inconsistencia visual mas notoria del sitio frente al resto de las guias. Tambien: `index.html` (la pagina de mas trafico) no tiene boton flotante de WhatsApp, a diferencia de 6 de las 7 guias de ciudad.
- Auditoria de SEO (skill `marketing:seo-audit`): Semrush esta conectado pero el plan de Venul no incluye acceso MCP (ya documentado el 07-02) — se completo la auditoria on-page/tecnica directo sobre los archivos locales en vez. Encontrado: 3 titulos por encima de 80 caracteres (`guia-santo-domingo`, `guia-santiago`, `guia-vuelos-nyc-rd` — Google los trunca en el buscador), 5 meta descriptions por encima de 160 caracteres (samana, requisitos, costo-familia, santiago, barahona). Todo lo demas tecnico esta solido: hreflang correcto en ES/EN/FR, canonical en todas las paginas revisadas, sitemap.xml limpio, robots.txt correcto, JSON-LD (Article/Person/TravelAgency) presente, contenido de 1000-1600 palabras por guia (nada de "thin content"). Investigacion de competencia (WebSearch, ya que Semrush esta bloqueado): el competidor mas directo por posicionamiento es **dominicanabroad.com** (mismo angulo diaspora dominicana-americana); tambien hay una franja de blogs de viajes en español (chavetas, diariodeunmentiroso, lacosmopolilla, viajeroscallejeros) que rankean fuerte para "guia viajar república dominicana" con contenido de **itinerarios/rutas de varios dias** — formato que Quisqueya Travel todavia no tiene y que aparece como brecha de contenido clara.
- Nota aparte (no se toco, solo se detecto): sigue existiendo un archivo `netlify.toml` en la carpeta del sitio pese a que la cuenta de Netlify esta eliminada desde el 30 de junio — es basura inofensiva pero puede confundir a una sesion futura.

**Pendientes nuevos (agregar a la lista de prioridades):**
- 🟡 Reconstruir `guia-jarabacoa.html` y `guia-puerto-plata.html` con la plantilla actual (copiar de `guia-santiago.html` o `guia-la-romana.html`) para que dejen de verse como un sitio distinto.
- 🟡 Agregar el boton flotante de WhatsApp a `index.html`.
- 🟢 Acortar 3 titulos y 5 meta descriptions que exceden el largo recomendado (lista completa en el chat de esta sesion).
- 🟢 Evaluar crear contenido de "itinerario/ruta de X dias por RD" — brecha frente a los blogs de viaje en español que mejor posicionan.
- 🟢 Agregar `wa.me`, `instagram.com`, `eticket.migracion.gob.do` y `schema.org` a `references/allowlist-dominios.md` del skill de seguridad (requiere editar el paquete del skill, no el sitio) y reparar la linea final truncada de ese archivo.
- ✅ Borrar `netlify.toml` de la carpeta del sitio (ya no se usa) — RESUELTO 2026-07-04, tambien se borro `DEPLOY-LEEME.md` de paso.

**Estado del deploy:** Sin cambios de codigo esta sesion — fue solo auditoria/diagnostico, nada se desplego.

---

### Sesion — 2026-07-02 (FIX CRITICO: botones de ciudad sin hoteles)

**Que se hizo:**
- DIAGNOSTICADO el reporte de Venul ("los botones de ciudad no muestran suficientes hoteles"): el problema real era que TODOS los links "Ver disponibilidad" (Stay22 Allez) usaban el parametro `destination=` (ej. `?destination=punta-cana`), que Stay22 NO reconoce segun su documentacion oficial (stay22.com/allezdocumentation — el parametro correcto es `address` o `lat`/`lng`). Resultado: cada click caia en el home vacio de Booking.com sin busqueda aplicada — 0 hoteles mostrados, no "pocos".
- Verificado en vivo con Chrome: `?destination=santo-domingo` y `?destination=punta-cana` ambos aterrizaban en `booking.com/` (home en blanco). Tras el fix, `?address=Santo%20Domingo%2C%20Dominican%20Republic` aterriza en `booking.com/searchresults.html?...&city=-3366242` con 126+ hoteles reales filtrados.
- CORREGIDO en 23 archivos (todo el sitio, ES/EN/FR): `js/hoteles.js` (variable STAY22 + funcion `addr()`), `data/hoteles.json`, y 21 guias HTML (11 ES + 7 EN + 3 FR) que tenian el link de Stay22 hardcodeado en el nav/CTA.
- Commits en GitHub (rama main): raiz (11 guias), en/ (7 archivos), fr/ (3 archivos), js/hoteles.js, data/hoteles.json — 5 commits vía upload web.
- ADVERTENCIA repetida (ya documentada 2026-07-01): Chrome traducia automaticamente la pagina de upload de GitHub y renombraba visualmente "guia-" a "guía-" en la lista de archivos. Se forzo `translate=no` + meta notranslate ANTES de cada subida y se verifico con JS que los nombres reales no tuvieran tildes antes de confirmar cada commit.
- VERIFICADO en vivo tras deploy: `window.hotelesData` en quisqueyatravel.org ya sirve `address=` en los links, y el link de Santo Domingo confirmado end-to-end hasta Booking mostrando resultados reales.
- Venul confirmo (otra vez) que YA NO usa Netlify — se agrego una seccion "REGLA FIJA" al inicio de esta memoria y de memoria-proyecto.md para que nunca mas se sugiera Netlify.

**Errores encontrados y solucion:**
- Enlaces Stay22 con parametro `destination=` en vez de `address=` — Stay22 lo ignora silenciosamente y redirige al home de Booking sin busqueda. Solucion: usar `address=` (o `lat`/`lng`) con `encodeURIComponent(ciudad + ', Dominican Republic')`.

**Estado del deploy:** ✅ EN VIVO — Cloudflare Pages desplego los 5 commits automaticamente, verificado con `window.hotelesData` y click-through real hasta Booking.com.

**Notas importantes:**
- Si se agregan mas hoteles/ciudades en el futuro, usar siempre `addr('Nombre Ciudad')` en hoteles.js (ya hace el encodeURIComponent) — nunca escribir `?destination=` de nuevo.
- COMPLETADO (misma sesion, continuacion): se agregaron 1-2 hoteles mas a Punta Cana, Santo Domingo, Puerto Plata, La Romana, Samana y Santiago — las 6 ciudades quedaron parejas con 4 hoteles cada una (antes: Punta Cana 3, el resto 2). Editado `js/hoteles.js` y `data/hoteles.json`, subido a GitHub (2 commits) y verificado en vivo con `window.hotelesData` en quisqueyatravel.org: las 6 ciudades devuelven `4`.
- Durante esta sesion hubo una caida temporal de conexion del navegador (fallaba hasta wikipedia.org) que bloqueo la subida por unos minutos — se resolvio sola, sin accion necesaria mas que esperar y reintentar.
- Truco de validacion: el mount de OneDrive dentro del sandbox de Claude a veces queda desactualizado (lag de sincronizacion) y `node --check` / `python -m json.tool` fallan con "truncado" aunque el archivo real este bien — para validar de forma confiable, copiar el contenido al folder `outputs/` del sandbox (no sincronizado con OneDrive) y validar ahi.

---

### Sesion — 2026-07-02 (verificacion sitio + plugin small-business + guia-la-romana)

**Que se hizo:**
- CUSTOMIZADO el plugin "small-business" de Cowork para el modelo real de Quisqueya Travel (afiliado solo, no PyME con nomina/QuickBooks/HubSpot). Se reescribieron 15 skills, README y .mcp.json (reducido a Gmail, Google Calendar, Google Drive). Corregido en segunda pasada: Cloudflare Pages (no Netlify), Stay22/Travelpayouts activos (no "pendiente"), GA4 ya instalado. Entregado como `small-business.plugin`.
- VERIFICADO el sitio en vivo (quisqueyatravel.org): esta actualizado, no hay cache stale. Navbar Bootstrap, card de Samana bien enlazada, footer correcto.
- CONFIRMADO que GA4 (G-LJWN28FFQE) SI dispara en produccion — se capturo la request de red `google-analytics.com/g/collect?...tid=G-LJWN28FFQE`. Los 503 vistos en consola son de una extension/ad-blocker del navegador, no del sitio.
- INVESTIGADO herramientas para aumentar reservas (no seguidores): Semrush conectado pero bloqueado por plan (requiere upgrade en semrush.com/mcp-access); revisada e validada la legitimidad de OpenSEO+DataForSEO+Docker (alternativa gratis que Venul esta instalando el mismo) con una correccion de seguridad importante — usar la API password dedicada de DataForSEO (app.dataforseo.com/api-access), NO la contrasena de la cuenta.
- Investigacion de brechas de contenido (WebSearch, ya que Semrush esta bloqueado): identificados 3 temas con demanda de busqueda y sin guia propia — **La Romana/Casa de Campo** (prioridad alta, mayor intencion de reserva), "mejor epoca para viajar a RD", "seguro de viaje a RD".
- CREADA `guia-la-romana.html` completa (seccion Casa de Campo, golf Teeth of the Dog, Altos de Chavon, Isla Catalina, tabla de precios, CTAs Stay22 + Travelpayouts) siguiendo la plantilla exacta de guia-punta-cana.html.
- ACTUALIZADO `index.html` (card de La Romana ahora linkea a la guia en vez de `#hoteles`), `sitemap.xml` y `_redirects` (nueva entrada guia-la-romana).
- DESPLEGADO via GitHub web upload (commit `10c7867`, branch main) → Cloudflare Pages deploy #43 exitoso (27s). VERIFICADO en vivo: `quisqueyatravel.org/guia-la-romana` responde 200, titulo y contenido correctos, `_redirects` funcionando (.html → URL limpia), homepage actualizada.

**Pendiente sin resolver (arrastrado de sesion anterior):**
- Los 6 posts de Facebook con enlaces muertos a Netlify (detectados 2026-07-01) siguen sin corregirse. Se intento editar uno automaticamente via navegador (post id 4976300) y el cambio no se guardo (Facebook revirtio el contenido). Se abandono el intento para no arriesgar los posts publicos en vivo. Accion recomendada: Venul los corrige manualmente desde Facebook, o se vuelve a intentar la automatizacion con mas cuidado en una proxima sesion.

**Siguiente paso sugerido:** escribir las guias de "mejor epoca para viajar a RD" y "seguro de viaje a RD" (mismo hallazgo de brecha de contenido).

**Auditoria de botones de hoteles por ciudad (misma sesion, sin aplicar aun — pendiente de OK de Venul):**
- Barahona: solo 1 enlace real a hoteles de Barahona (el CTA del cuerpo manda a Santo Domingo a proposito, como sugerencia de parada). Falta un segundo CTA que venda hoteles de Barahona mismo.
- Samana: 2 enlaces de hotel (nav + 1 CTA) pero es la unica guia de ciudad sin la caja de servicios (vuelos/carro/traslado/tours/eSIM/seguro).
- Santiago: 2 enlaces de hotel (nav + 1 CTA), si tiene caja de servicios completa.
- Punta Cana, Santo Domingo, Puerto Plata, Jarabacoa, La Romana: 3 enlaces de hotel + caja de servicios completa (estandar actual).
- Se le pregunto a Venul si quiere que se agregue el CTA faltante a Barahona/Santiago y la caja de servicios a Samana — quedo pendiente de respuesta, sesion pausada antes de decidir.

---

### Sesion — 2026-07-01 (Auditoria completa + guia-samana + globalizacion)

**Que se hizo:**
- Auditoria de diseno/UX, SEO y accesibilidad del sitio en vivo (quisqueyatravel.org)
- Encontrado y corregido: guia-samana.html no existia (soft-404) pese a 3 posts de FB promocionandola
- Encontrado: posts de FB (20-29 jun) con enlaces muertos a quisqueyatravel.netlify.app y golden-heliotrope-c5c46d.netlify.app (dominios abandonados)
- CREADA guia-samana.html completa: ballenas, Playa Rincon, Las Terrenas, cascada El Limon, tabla de precios, CTA Stay22
- ACTUALIZADO index.html: card de Samana ahora linkea a la guia (antes iba a #hoteles), agregado link en footer
- ACTUALIZADO sitemap.xml y _redirects: agregada entrada guia-samana
- GLOBALIZACION: Venul aclaro que el negocio vende a cualquiera en el mundo que quiera viajar a RD, no solo a dominicanos de NYC. Se removieron referencias a "NYC"/"Nueva York"/"New York" como si fueran el unico publico en:
  - guia-costo-viaje-familia-rd.html, guia-requisitos-viaje-rd-2026.html, guia-barahona.html, guia-santo-domingo.html, guia-jarabacoa.html, guia-santiago.html, guia-puerto-plata.html, guia-punta-cana.html, index.html (schema author + tabla de precios + h1/meta donde aplicaba)
  - en/index.html, en/guide-santo-domingo.html, en/guide-punta-cana.html, en/guide-family-budget-dr.html, en/guide-dominican-republic.html, en/guide-entry-requirements-2026.html, fr/index.html
  - Se dejo intacto guia-vuelos-nyc-rd.html y en/guide-flights-nyc-dr.html — son guias especificas de vuelos NYC-RD, uso legitimo
  - Nombre de marca "El Quisqueyano en NYC" → "El Quisqueyano" en schema.org author y footer de todas las guias afectadas
  - bio-link-el-quisqueyano.html TAMBIEN corregido (Venul confirmo): title, meta description, badge, tagline y footer ya no dicen "en NYC" — solo "El Quisqueyano"
- LIMPIEZA DE MEMORIA: quitadas referencias a Netlify de "Datos Fijos del Proyecto" en este archivo y en memoria-proyecto.md (Venul confirmo que ya no usa Netlify)
- INTEGRADO Bootstrap 5 en index.html (CDN, sin SRI): navbar responsive con toggler + dropdown "Destinos y guias" (agrupa los 10 links que antes saturaban el nav), foco visible en links/botones, y arreglado contraste bajo (#888 → #595959 en destino-meta/precios, footer #666 → #999999 sobre fondo oscuro). Bootstrap JS bundle agregado antes de </body>.
- ACTUALIZADO COMMIT.bat con los archivos de esta sesion (antes solo tenia 6 de una sesion vieja) y mensaje de commit actualizado — listo para que Venul lo ejecute con doble clic
- SEGUNDA PASADA ("entra en la carpeta y arregla lo que falta"): la auditoria original solo se habia aplicado a index.html. Se replico en las 20 paginas restantes:
  - Contraste: color:#888 → #595959 en breadcrumb/disclaimer/destino-meta (18 archivos, via sed verificado con grep antes/despues)
  - Footer sobre fondo oscuro: color:#666 → #999999 en footer{background:#111120} (18 archivos)
  - guia-jarabacoa.html y guia-puerto-plata.html usan otra plantilla (verde #006B3F) que ya tenia buen contraste — no necesitaban el fix de color, solo focus-visible
  - Foco visible (a:focus-visible/button:focus-visible) agregado en los 20 archivos que no lo tenian (antes solo index.html y bio-link lo tenian) — total ahora 22/22 archivos HTML del sitio
  - Verificado con html.parser de Python que ningun archivo quedo con HTML roto tras los cambios
  - COMMIT.bat actualizado de nuevo con los 4 archivos que faltaban (guia-vuelos-nyc-rd.html, en/guide-flights-nyc-dr.html, fr/guide-punta-cana.html, fr/guide-republique-dominicaine.html)

**Archivos modificados (listos para subir a GitHub vía COMMIT.bat):**
guia-samana.html (nuevo), index.html, sitemap.xml, _redirects, guia-costo-viaje-familia-rd.html, guia-requisitos-viaje-rd-2026.html, guia-barahona.html, guia-santo-domingo.html, guia-jarabacoa.html, guia-santiago.html, guia-puerto-plata.html, guia-punta-cana.html, en/index.html, en/guide-santo-domingo.html, en/guide-punta-cana.html, en/guide-family-budget-dr.html, en/guide-dominican-republic.html, en/guide-entry-requirements-2026.html, fr/index.html, bio-link-el-quisqueyano.html

**Estado del deploy: ✅ EN VIVO (2026-07-01, 23:47 UTC)**
- Venul no pudo hacer correr COMMIT.bat ("busca una forma porque yo no e podido"). Se verifico que GitHub estaba autenticado en su Chrome (usuario venulhernandez-cyber) y se desplego via la interfaz web de GitHub ("Add file -> Upload files"), en 3 commits:
  1. 7ffb927 — archivos raiz (14 archivos: guia-samana, index con Bootstrap, guias globalizadas, bio-link, sitemap, _redirects)
  2. 862e7be — carpeta en/ (7 archivos)
  3. 986376a — carpeta fr/ (3 archivos)
- ADVERTENCIA IMPORTANTE detectada durante el proceso: Chrome activo su traduccion automatica de la pagina de GitHub (clase "translated-ltr"), lo que renombraba visualmente los archivos en la lista de carga ("index.html" -> "índice.html", "guia-barahona.html" -> "guía-barahona.html", etc). Se detecto ANTES de commitear, se cancelo, se forzo notranslate via JS (document.documentElement.setAttribute('translate','no') + meta google notranslate) y se repitio la carga verificando los nombres reales antes de cada commit. Si en el futuro se vuelve a usar upload web de GitHub, revisar que la pagina no este traducida antes de confirmar.
- Verificado en vivo tras el deploy (Cloudflare Pages "Deploy to Cloudflare Pages" = success en los 3 commits): quisqueyatravel.org tiene Bootstrap cargado, navbar con clases correctas, footer en rgb(153,153,153) (#999999, contraste corregido), ya no aparece "en NYC", y /guia-samana carga con status 200 (ya no es soft-404)
- COMMIT.bat sigue actualizado localmente por si Venul prefiere usarlo la proxima vez, pero el metodo que SI funciono esta sesion fue el upload web de GitHub

**Notas importantes:**
- Preguntar a Venul si tambien quiere corregir los posts de Facebook con enlaces muertos a Netlify (se le dio la lista con URLs corregidas en chat, no se edito nada en FB directamente)

**Seguridad del sitio (2026-07-01, mismo dia):**
- Se creo el skill `quisqueya-travel-seguridad` (con skill-creator) — escanea secretos
  expuestos, lista dominios externos vs una allowlist documentada, y aplica/mantiene
  cabeceras de seguridad HTTP en `_headers`. Entregado a Venul como archivo .skill.
- Auditoria real ejecutada: 34 archivos escaneados, 0 secretos expuestos. Dos
  dominios sin clasificar encontrados y confirmados benignos: `schema.org` (solo
  el @context de JSON-LD, no es un recurso cargado) y
  `d8j0ntlcm91z4.cloudfront.net` (imagenes og:image generadas con IA/Higgsfield).
  Ambos documentados en la allowlist del skill para que no se marquen de nuevo.
- Aplicado a `_headers`: X-Frame-Options: DENY, Permissions-Policy
  (bloquea geolocation/camera/microphone/payment), Strict-Transport-Security
  (HSTS 1 año), y una Content-Security-Policy ajustada a los dominios reales
  del sitio (Bootstrap CDN, Google Tag Manager, Travelpayouts Drive/emrldtp.com,
  Google Fonts, imagenes https/data).
- VERIFICADO EN VIVO: X-Frame-Options, Permissions-Policy y Strict-Transport-Security
  SI se aplican correctamente en quisqueyatravel.org. Content-Security-Policy NO se
  aplica — se probo con una CSP minima (19 caracteres, `default-src 'self'`) y
  tampoco paso, lo que descarta un problema de largo o sintaxis del archivo _headers.
  Esto apunta a algo a nivel de la cuenta/zona de Cloudflare (posible Transform Rule
  que remueve ese header especificamente) que Venul tiene que revisar el mismo en
  el dashboard de Cloudflare (Rules > Transform Rules > Modificar encabezados de
  respuesta) — no se puede diagnosticar ni arreglar desde el codigo del repo.
  El archivo _headers ya quedo con la CSP completa y correcta lista para cuando
  se resuelva el bloqueo de Cloudflare.
- Cache-Control, x-content-type-options y referrer-policy ya venian aplicados por
  Cloudflare por defecto desde antes (no eran parte de _headers).

---

### Sesion — 2026-06-30 (AUDITORIA: fix hoteles.js + Santiago filter + cache fix)

**Que se hizo:**
- DIAGNOSTICADO root cause de hoteles atascados en spinner: `js/hoteles.js` usaba `getElementById('hotels-grid')` (ingles) pero HTML tiene `id="hoteles-grid"` (espanol). La funcion retornaba early sin renderizar nada.
- CORREGIDO `js/hoteles.js` (commit 59bc3f9): `getElementById('hoteles-grid')` + `querySelectorAll('.filtro-btn')` + entry 'santiago' en HOTELES_BASE (2 hoteles: Hodelpa Gran Almirante $60, Hodelpa Centro Plaza $45)
- CORREGIDO `index.html` (commit 52b00df): agregado boton filtro Santiago + `<script src="js/hoteles.js?v=3">` para cache busting
- CREADO `_headers` (nuevo commit): `Cache-Control: no-cache, must-revalidate` para todas las rutas — previene cacheo futuro en Cloudflare Zone
- VERIFICADO: `quisqueyatravel.pages.dev` funciona perfectamente — 7 filtros, 13 hotel cards, hoteles de Santiago renderizando con CTAs correctos a Stay22

**Estado del sitio (pages.dev vs dominio):**
- `quisqueyatravel.pages.dev` ✅ CORRECTO — version mas reciente servida directamente desde CF Pages edge
- `quisqueyatravel.org` ⚠️ STALE CACHE — Cloudflare Zone tiene en cache la version anterior. Se resuelve con purga manual O expiracion natural del cache (horas)

**Commits esta sesion:**
- `59bc3f9`: Fix hoteles.js v2: hoteles-grid + filtro-btn (ES) + Santiago
- `52b00df`: Add Santiago filter btn + cache buster v3 in hoteles.js script tag
- `[_headers commit]`: Add _headers: no-cache for HTML/JS - fix Cloudflare zone cache

**Accion pendiente (1 sola):**
- Purgar cache de Cloudflare MANUALMENTE:
  1. Ir a dash.cloudflare.com → quisqueyatravel.org → Caching → Configuration
  2. Click "Purge Everything"
  - Despues de esto, quisqueyatravel.org = quisqueyatravel.pages.dev (identico)

**Lo que FUNCIONA en pages.dev (y funcionara en .org tras purga):**
- Seccion hoteles: 7 botones filtro (Todos, Punta Cana, Santo Domingo, Puerto Plata, La Romana, Samana, Santiago)
- 13 tarjetas de hotel con imagen, precio, puntuacion y link Stay22
- Filtro Santiago: Hodelpa Gran Almirante + Hodelpa Centro Plaza
- Destino Santiago en cards: foto, descripcion, link a guia-santiago

**Notas tecnicas:**
- CRITICO: sandbox de Claude puede tener versiones viejas de archivos OneDrive (cloud-only files). SIEMPRE escribir archivos correctives en `outputs/` y subirlos desde ahi, NO desde el mount de Quisqueya
- js/hoteles.js DEBE ser ES5 puro (no backticks, no arrow functions) — Travelpayouts corrompe JS inline pero no archivos externos
- La variable en HOTELES_BASE usa 'santiago' como key pero `link: STAY22 + 'santiago-de-los-caballeros'` para la URL de Stay22

---

### Sesion — 2026-06-30 (guia-puerto-plata + index nav/footer + sitemap)
**Que se hizo:**
- CREADA `guia-puerto-plata.html` (13.5KB) — guia completa del norte de RD: teleferico, Playa Dorada, Sosua, Cabarete, 27 Charcos, tabla de costos, Stay22 CTAs
- ACTUALIZADO `index.html`: tarjeta de Puerto Plata ahora linkea a `guia-puerto-plata.html` (antes apuntaba a #hoteles), agregados links de Puerto Plata y Jarabacoa en nav y footer
- ACTUALIZADO `sitemap.xml`: agregadas `guia-jarabacoa` (faltaba) y `guia-puerto-plata` — sitemap ahora tiene 12 URLs ES
- COMMIT fc529f0 → GitHub Actions "Deploy to Cloudflare Pages #12" ejecutado ✅
- POST FACEBOOK publicado: https://facebook.com/2061443547418301_1321095243345570

**Guias publicadas:**
- guia-puerto-plata.html — "Puerto Plata: la costa norte que los dominicanos de NYC casi no conocen" — CF Pages ✅, FB ✅

**Mejoras al sitio:**
- index.html: Puerto Plata card → guia-puerto-plata.html + Jarabacoa y Puerto Plata en nav/footer
- sitemap.xml: 12 URLs ES (se agregaron guia-jarabacoa y guia-puerto-plata)
- guia-puerto-plata.html: guia nueva completa

**Commits:**
- fc529f0: "Add guia-puerto-plata + update index nav/footer + sitemap (guia-jarabacoa added too)"

**Estado del deploy:**
- GitHub Actions run #12 ✅ (in progress al momento del commit, ~30s)
- CF Pages: quisqueyatravel.pages.dev ✅
- DNS: ⚠️ SIGUE PENDIENTE — cambiar nameservers en Namecheap a Cloudflare (ver seccion Urgente)

**Notas importantes:**
- DNS es el unico bloqueador para que quisqueyatravel.org sirva contenido nuevo
- Ir a: https://ap.www.namecheap.com/domains/domaincontrolpanel/quisqueyatravel.org/domain → Nameservers → Custom DNS
  - NS1: athena.ns.cloudflare.com
  - NS2: rory.ns.cloudflare.com

---

### Sesion — 2026-06-29 (MIGRACION Netlify → Cloudflare Pages + guia-jarabacoa)
**Que se hizo:**
- DIAGNOSTICADO: Netlify agoto creditos de build — ya no despliega commits de GitHub automaticamente
- DIAGNOSTICADO: DNS de quisqueyatravel.org apunta a Netlify (A record 75.2.60.5) pero Netlify no sirve contenido nuevo
- SOLUCION: Migrar hosting completo a Cloudflare Pages
- CORREGIDO `deploy-cloudflare.yml`: le faltaba `branch: main` — todos los deploys iban a preview, no produccion. Corregido con upload via GitHub web UI (commit 53c4d3c). GitHub Actions run exitoso.
- EJECUTADO workflow `add-domain.yml`: agrego quisqueyatravel.org como custom domain a CF Pages (status pending — esperando DNS)
- CONFIRMADO: Cloudflare zone para quisqueyatravel.org ya existe
  - Zone ID: 059078dc193c7878004408a8d0265927
  - Nameservers asignados: athena.ns.cloudflare.com / rory.ns.cloudflare.com
- CREADA `guia-jarabacoa.html` con SEO completo (canonical, og, JSON-LD, Drive script, Stay22 CTAs)
- CREADO `_redirects` para Cloudflare Pages (redirige .html → URL limpia, como netlify.toml)
- PENDIENTE: Cambiar nameservers en Namecheap (Chrome extension timeout impidio completar)

**Guias publicadas:**
- guia-jarabacoa.html — "Jarabacoa: el paraiso verde de RD" — en GitHub ✅, en CF Pages ✅ (live tras cambio DNS)

**Mejoras al sitio:**
- deploy-cloudflare.yml: corregido `branch: main`
- _redirects: creado para Cloudflare Pages
- guia-jarabacoa.html: guia nueva con SEO completo

**Errores encontrados y solucion:**
- CodeMirror 6 en GitHub editor: `execCommand('insertText')` no actualiza estado interno — Solucion: subir archivo via GitHub file upload UI
- Cloudflare dashboard SPA no carga en Chrome extension — Solucion: llamadas directas a la API via browser fetch() con credentials: 'include' desde dash.cloudflare.com
- Chrome extension timeout en Namecheap al final de sesion — pendiente completar en proxima sesion

**Estado del deploy:**
- GitHub Actions: run exitoso (commit 53c4d3c) ✅
- CF Pages: produccion activa en quisqueyatravel.pages.dev ✅
- DNS: quisqueyatravel.org TODAVIA apunta a Netlify — requiere cambio de nameservers ⚠️

**Notas importantes:**
- 🔴 UNICA ACCION PENDIENTE: Ir a Namecheap → quisqueyatravel.org → Nameservers → Custom DNS
  - Nameserver 1: athena.ns.cloudflare.com
  - Nameserver 2: rory.ns.cloudflare.com
  - URL: https://ap.www.namecheap.com/domains/domaincontrolpanel/quisqueyatravel.org/domain
  - Despues de esto, en 10-30 minutos el sitio sirve el contenido nuevo de CF Pages
- El sitio ya genera ventas: Stay22 activo y vendiendo desde cualquier parte del mundo
- PROCESO DE DEPLOY CAMBIA: ya NO se usa Netlify. Solo GitHub upload → GitHub Actions → CF Pages

---

### Sesion — 2026-06-27 (continuacion — fix hoteles JS)
**Que se hizo:**
- DIAGNOSTICADO root cause de hoteles no cargando: Travelpayouts Drive script (`link_switcher convert links`) CORROMPE el bloque `<script>` inline — strippea todas las URLs de Unsplash (deja `imagen: ''`) y acorta el contenido del script, haciendo que `typeof renderHoteles === 'undefined'` en consola
- SOLUCION: mover todo el JS a archivo externo `js/hoteles.js` (ES5 puro — sin template literals, sin arrow functions, sin const/let) — Travelpayouts NO procesa archivos .js externos
- Creado `js/hoteles.js` (122 lineas, 6.5KB) con:
  - HOTELES_BASE completo con 5 destinos y 11 hoteles con URLs Unsplash restauradas
  - `renderHoteles()`, `filtrarHoteles()`, `extraerPrecio()`, `extraerPuntuacion()` en ES5
  - `document.addEventListener('DOMContentLoaded', function() {...})` para init
  - `fetch('data/hoteles.json')` para override opcional desde archivo externo
- Reconstruido `index.html` nuevo (29KB) desde lineas 1-542 del original + `<script src="js/hoteles.js"></script>` + cierre `</body></html>`
  - Frase "isla del encanto" → "🇩🇴 El corazon del Caribe" (no confunde con Puerto Rico)
  - Textos universales: "desde cualquier lugar del mundo" en vez de "desde New York"
  - Heroico h1, stats, seccion especial — todo para visitantes globales
- Arreglado `guia-santiago.html`: foto Monumento a los Heroes de la Restauracion agregada + titulo "Como llegar a Santiago" (no solo desde NYC)
- Commits:
  - f85d9ba: `Add js/hoteles.js — fix hoteles loading (Travelpayouts corrupts inline scripts)`
  - cd84281: `Fix: mover JS a archivo externo + textos universales + El corazon del Caribe`
  - 0a17a86: `guia-santiago: foto Monumento + como llegar universal (no solo NYC)`
- VERIFICACION live: quisqueyatravel.org — hoteles cargando correctamente, todos los destinos con nombres/precios/puntuaciones, sin errores JS en consola

**Guias publicadas:**
- Sin guias nuevas esta sesion

**Mejoras al sitio:**
- js/hoteles.js: nuevo archivo externo — hoteles ahora cargan en el sitio live ✅
- index.html: JS inline → JS externo + textos universales + "El corazon del Caribe"
- guia-santiago.html: foto Monumento + lenguaje universal para llegar a Santiago

**Errores encontrados y solucion:**
- Travelpayouts link_switcher corrompe inline `<script>`: strippea Unsplash URLs, acorta contenido → renderHoteles undefined en browser
  - Diagnosticado via: `typeof renderHoteles === 'undefined'` en consola + comparar raw GitHub vs DOM
  - Solucion definitiva: archivo externo `js/hoteles.js` en ES5 (no backticks, no arrow functions)
- index.html truncado mid-function tras multiples Edit tool operations — reconstruido desde cero

**Posts publicados:**
- No aplica esta sesion

**Estado del deploy:**
- GitHub commit cd84281 ✅ → Netlify auto-deploy completado ✅
- Sitio live verificado: hoteles cargando ✅

**Notas importantes:**
- CRITICO: Si se necesita editar JS de hoteles en el futuro, editar `js/hoteles.js` — NO poner JS en `<script>` inline en index.html o Travelpayouts lo corromperá
- ES5 obligatorio en js/hoteles.js: NO usar backticks (template literals), NO usar arrow functions (=>), NO usar const/let fuera de scope — solo var y function declarations
- Travelpayouts procesa TODO el HTML incluyendo `<script>` inline pero NO los archivos .js externos

---

### Sesion — 2026-06-27
**Que se hizo:**
- Auditoria completa del sitio live (canonicals, imagenes, SEO, duplicados)
- Creado `data/hoteles.json` con 5 destinos (Punta Cana, Santo Domingo, Puerto Plata, La Romana, Samana) y 9 hoteles con imagenes Unsplash y links Stay22
- Corregidos canonical y og:url en TODAS las guias para apuntar a URLs limpias (sin .html)
- Corregido schema.org `url` en guia-santiago (tenia .html)
- Reemplazado "Venul Hernandez" por "El Quisqueyano en NYC" en schema.org author (7 guias) y en el div visible de index.html
- Agregadas 8 reglas 301 en netlify.toml: redirigen .html → URL limpia (evita que Google indexe dos versiones)
- Actualizado sitemap.xml: todas las `<loc>` sin .html
- Deployado guia-santiago.html (estaba pendiente de sesion anterior — se habia creado pero no subido)
- Commit final 3c808ab con netlify.toml + sitemap.xml — deploy automatico completado

**Guias publicadas:**
- guia-santiago.html — "Santiago de los Caballeros: la ciudad que los dominicanos de NYC extranan sin saberlo" ✅ (era el unico pendiente)

**Mejoras al sitio:**
- netlify.toml: 8 redirects 301 (.html → clean URL)
- sitemap.xml: todas las URLs sin .html
- data/hoteles.json: archivo nuevo con grid de hoteles por destino
- index.html: imágenes de hoteles + nombre autor actualizado
- 7 guias HTML: canonical + og:url + schema.org author corregidos

**Errores encontrados y solucion:**
- guia-santiago tenia `"url": "...guia-santiago.html"` en schema.org — corregido con sed
- Chrome MCP `browser_batch` fallo en algunos pasos — se ejecutaron acciones individualmente
- `javascript_tool` requeria parametros `action` y `text` (no solo `script`) — corregido al cargar schema con ToolSearch

**Posts publicados:**
- FB: guia-santiago ya publicado sesion anterior ✅
- IG: pendiente (requiere media — sin creditos Higgsfield)

**Estado del deploy:**
- GitHub commit 3c808ab ✅ → Netlify auto-deploy completado ✅

**Notas importantes:**
- El fix de duplicate URLs (301 redirects) es clave para SEO — Google ahora vera solo una version de cada pagina
- hoteles.json es cargado via fetch() en index.html — funciona sin backend
- Todas las 7 guias tienen canonical limpio, schema.org correcto y nombre "El Quisqueyano en NYC"

---

### Sesion — 2026-06-26
**Que se hizo:**
- Diagnosticado por qué `site:quisqueyatravel.org` devolvía cero resultados en Google
- Causa raíz: canonical en GitHub apuntaba a `https://quisqueyatravel.org/fr/` (incorrecto)
- Corregido `index.html` subiendo la versión local correcta via GitHub web UI (commit `3bae9d4`)
  - canonical ahora: `https://quisqueyatravel.org/` ✅
  - og:url ahora: `https://quisqueyatravel.org/` ✅
- Netlify auto-deploy completado: `Published main@3bae9d4` ✅
- Google Search Console — "Solicitar indexación" completado para TODAS las URLs:
  - ✅ `https://quisqueyatravel.org/` (homepage) — ya indexada
  - ✅ `https://quisqueyatravel.org/guia-punta-cana` — ya indexada
  - ✅ `https://quisqueyatravel.org/guia-santo-domingo` — ya indexada
  - ✅ `https://quisqueyatravel.org/guia-barahona` — ya indexada
  - ✅ `https://quisqueyatravel.org/guia-vuelos-nyc-rd` — ya indexada
  - ✅ `https://quisqueyatravel.org/guia-requisitos-viaje-rd-2026` — ya indexada
  - ✅ `https://quisqueyatravel.org/guia-costo-viaje-familia-rd` — ya indexada
- **Expansión global**: removidas todas las referencias exclusivas a NYC de 6 HTML + index
  - Títulos, meta descriptions, og:title, og:description, body text — todo universal
  - "dominicanos de NYC" → "dominicanos de la diáspora"
  - "El Quisqueyano en NYC" → "El Quisqueyano" (excepto guia-vuelos-nyc-rd que es específica)
- **Herramientas de auditoría y reparación** creadas:
  - `auditoria.py` — compara local vs live, detecta errores SEO, genera reporte JSON
  - `reparacion.py` — auto-repara canonical, og:url, Drive script, refs netlify.app
- **Deploy final**: commit `ede3057` — `Published main@ede3057` en Netlify ✅
  - Verificado: GitHub editor muestra título correcto y canonical = quisqueyatravel.org
  - CDN propagación en curso (normal, 1-5 min)
- **Monitoreo diario** programado: tarea a las 5AM que corre al abrir Claude

**Notas importantes:**
- Todas las páginas YA estaban indexadas por Google — el problema era el canonical incorrecto
- Con el canonical corregido, Google reconocerá quisqueyatravel.org como URL canónica
- `site:quisqueyatravel.org` debería mostrar resultados en los próximos 3-7 días tras recrawl
- OneDrive sync conflict: siempre copiar archivos al outputs folder del sandbox antes de subir a GitHub
- El repo tiene carpetas /en/ y /fr/ añadidas por una sesión anterior (páginas en inglés y francés)

---

### Sesion — 2026-06-25
**Que se hizo:**
- Instalado el script Travelpayouts Drive (token 543349) en los 9 archivos HTML del sitio
- Desplegado en GitHub (commit aec0059) → Netlify auto-deploy completado
- Verificacion exitosa en Travelpayouts: "Drive is running at full capacity" (Monetization boost: Maximum)
- Descubierto que el GitHub username es venulhernandez-cyber (no venulhernandez)
- Corregido el URL del sitio real: quisqueyatravel.org (no golden-heliotrope-c5c46d como decia la memoria anterior)

**Archivos actualizados con Drive script:**
- index.html
- guia-barahona.html
- guia-costo-viaje-familia-rd.html
- guia-punta-cana.html
- guia-requisitos-viaje-rd-2026.html
- guia-santo-domingo.html
- guia-vuelos-nyc-rd.html
- bio-link-el-quisqueyano.html
- googled0ccc0fd3defd16e.html

**Metodo de deploy:**
- GitHub Upload Files (web UI) → commit automatico → Netlify auto-deploy
- NO usar Netlify CLI (npm install timeout en sandbox)
- Para futuros deploys: subir archivos via github.com/venulhernandez-cyber/quisqueyatravel/upload/main

**Estado del deploy:**
- Netlify publicado: main@aec0059 ✅

**Notas importantes:**
- El Drive script va justo despues de `<head>` en cada archivo
- La memoria anterior tenia URL incorrecta (golden-heliotrope-c5c46d) — ya corregida aqui
- Travelpayouts ahora puede mostrar widgets de vuelos/hoteles automaticamente en todas las paginas

---

### Sesiones anteriores (reconstruidas del historial de GitHub)

| Fecha | Commits | Que se hizo |
|---|---|---|
| Jun 24 | main@1a7462b | Quitar nombre personal, usar "El Quisqueyano en NY" |
| Jun 24 | main@fd730cf | Actualizar registro-temas con guia Punta Cana |
| Jun 24 | main@1793ddf | Mejorar fotos destinos con imagenes reales Unsplash |
| Jun 24 | main@c319734 | Agregar guia-punta-cana al sitemap |
| Jun 24 | main@3f0d6d4 | Guia Punta Cana + actualizar nav y footers |
| Jun 23 | main@02dbc27 | Agregar meta tag Google Search Console verification |
| Jun 23 | main@96f5b7c | Guia Santo Domingo + SEO todas las guias + enlaces internos |
| Jun 23 | main@c267939 | Agregar guia-barahona + actualizar index y sitemap |
| Jun 20 | varios | Subida inicial de archivos |

---

## Guias Publicadas (historial completo)

| # | Fecha | Slug | Titulo | Deploy | FB | IG |
|---|---|---|---|---|---|---|
| 1 | 2026-06-21 | guia-requisitos-viaje-rd-2026 | Requisitos para viajar a RD 2026 | ✅ Live | — | — |
| 2 | 2026-06-21 | guia-costo-viaje-familia-rd | Costo del viaje en familia | ✅ Live | — | — |
| 3 | 2026-06-21 | guia-vuelos-nyc-rd | Vuelos NYC a RD (JFK/EWR/LGA) | ✅ Live | — | — |
| 4 | 2026-06-23 | guia-barahona | Barahona: el sur de RD que los dominicanos de NYC no conocen | ✅ Live | ✅ publicado | ⏳ pendiente (sin creditos Higgsfield) |
| 5 | 2026-06-23 | guia-santo-domingo | Santo Domingo: que hacer en la capital antes del resort | ✅ Live | ✅ publicado | — |
| 6 | 2026-06-24 | guia-punta-cana | Punta Cana: la guia honesta que nadie te da | ✅ Live | ⏳ pendiente (Blotato aprobacion manual) | — |
| 7 | 2026-06-27 | guia-santiago | Santiago de los Caballeros: la ciudad que los dominicanos de NYC extranan sin saberlo | ✅ Live | ✅ publicado | — |
| 8 | 2026-06-29 | guia-jarabacoa | Jarabacoa: el paraiso verde de RD | ✅ CF Pages / ⚠️ DNS pendiente | — | — |
| 9 | 2026-06-30 | guia-puerto-plata | Puerto Plata: la costa norte que los dominicanos de NYC casi no conocen | ✅ CF Pages / ⚠️ DNS pendiente | ✅ publicado | — |

---

## Mejoras Implementadas

| Fecha | Mejora | Archivos afectados |
|---|---|---|
| 2026-06-29 | deploy-cloudflare.yml corregido: `branch: main` — CF Pages ahora despliega a produccion | .github/workflows/deploy-cloudflare.yml |
| 2026-06-29 | _redirects creado para Cloudflare Pages (.html → URL limpia) | _redirects |
| 2026-06-29 | guia-jarabacoa.html creada con SEO completo | guia-jarabacoa.html |
| 2026-06-29 | Hosting migrado: Netlify (sin creditos) → Cloudflare Pages | infraestructura |
| 2026-06-27 | Redirects 301: netlify.toml con 8 reglas .html → clean URL | netlify.toml |
| 2026-06-27 | Sitemap limpio: todas las URLs sin .html | sitemap.xml |
| 2026-06-27 | hoteles.json: grid de hoteles por destino (5 destinos, 9 hoteles) | data/hoteles.json |
| 2026-06-27 | Canonical + og:url + schema.org corregidos en todas las guias | 7 archivos HTML |
| 2026-06-27 | Nombre autor: "El Quisqueyano en NYC" reemplaza "Venul Hernandez" | index.html + 7 guias |
| 2026-06-27 | "isla del encanto" → "El corazon del Caribe" (evitar confusion con Puerto Rico) | index.html |
| 2026-06-27 | Fix DEFINITIVO hoteles: mover JS a js/hoteles.js (ES5) — Travelpayouts corrompia inline script | js/hoteles.js (NUEVO), index.html |
| 2026-06-27 | guia-santiago: foto Monumento a los Heroes de la Restauracion + lenguaje universal | guia-santiago.html |
| 2026-06-27 | index.html: textos universales (no solo NYC) + "El corazon del Caribe" | index.html |
| 2026-06-27 | Fix critico: funciones extraerPuntuacion y extraerPrecio faltaban — hoteles no cargaban | index.html |
| 2026-06-27 | guia-santiago deployada (estaba creada pero sin subir a GitHub) | guia-santiago.html |

---

### ACTUALIZACION 2026-07-11 (tarde) — Misterio del CSP: hallazgo clave en Cloudflare Community

Buscando como escalar el bug (headers/CSP no se aplican en trafico real pese a 3 mecanismos de entrega verificados: Pages Function, Transform Rule de zona, y meta tag HTML), se encontro en el foro publico de Cloudflare Community un post de OTRO usuario, publicado hace ~4 horas, con el SINTOMA IDENTICO:

- Titulo: "Response Header Transform Rule shows Active but headers not applied to live traffic"
- Dominio afectado (de ese usuario): followupmedia (no relacionado con Quisqueya Travel)
- Reporta exactamente lo mismo: regla en "Active", probo con 1 header solo y con las 6 cabeceras completas (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP), purgo cache 2 veces, borro y recreo la regla, confirmo que no hay Cache Rules/Configuration Rules/Page Rules en conflicto, verifico con curl (CF-Cache-Status: MISS) y con securityheaders.com — headers ausentes en todos los casos.
- Cloudflare Status (cloudflarestatus.com) NO muestra ningun incidente activo relacionado con Rules/Pages/headers en este momento (solo un issue de Workers AI con modelos especificos, no relacionado).

**Conclusion:** esto NO es un error de configuracion de Quisqueya Travel. Es muy probable que sea un bug de plataforma de Cloudflare (Response Header Transform Rules / posiblemente tambien Pages Functions) que esta afectando a multiples cuentas en este momento, no reportado aun en el status page oficial.

**RESUELTO (publicacion):** Venul aprobo explicitamente publicar. Se creo cuenta en Cloudflare Community (venulhernandez@gmail.com), activada por Venul via correo, y se publico la respuesta (post #3 del hilo) confirmando que quisqueyatravel.org presenta el mismo bug, con el detalle tecnico completo (Transform Rule, _headers, Pages Function con diagnostico X-Csp-Test, verificacion con curl/DevTools/securityheaders.com, sin incidentes en cloudflarestatus.com). Publicado 2026-07-11.

Link del hilo: https://community.cloudflare.com/t/response-header-transform-rule-shows-active-but-headers-not-applied-to-live-traffic/939207

**Estado real del problema de CSP:** sigue TECNICAMENTE SIN RESOLVER (el header aun no se entrega en produccion por ningun mecanismo). Lo que se logro hoy fue escalar el reporte a Cloudflare/comunidad con evidencia solida de que es un bug de plataforma, no de configuracion. Proximo paso cuando haya respuesta en el hilo: aplicar el fix que sugieran, o esperar a que Cloudflare lo reconozca como bug conocido.
| 2026-06-26 | Expansión global: removidas referencias exclusivas a NYC en index + 5 guías | index.html, guia-punta-cana, guia-santo-domingo, guia-barahona, guia-requisitos, guia-costo |
| 2026-06-25 | Drive script Travelpayouts instalado | Todos los HTML |
| 2026-06-24 | Fotos de destinos con Unsplash | index.html |
| 2026-06-24 | Guia Punta Cana + sitemap | guia-punta-cana.html, sitemap.xml |
| 2026-06-23 | SEO metatags + enlaces internos | Todas las guias |
| 2026-06-23 | Guia Barahona | guia-barahona.html |
| 2026-06-23 | Guia Santo Domingo | guia-santo-domingo.html |
| 2026-06-20 | Lanzamiento del sitio | Todos |

---

## Pendientes (por prioridad)

### 🔴 Urgente — HACER PRIMERO EN LA PROXIMA SESION
- [x] Cambiar nameservers en Namecheap a Cloudflare — COMPLETADO (DNS resuelto, confirmado en sesion 2026-07-04)
- [x] Verificar quisqueyatravel.org sirviendo CF Pages tras propagacion DNS — COMPLETADO
- [x] ~~Activar enlace de afiliado Booking.com cuando llegue la aprobacion de CJ Affiliate (CID 7985681)~~ — ABANDONADO 2026-07-04, Venul decidio no seguir con Booking/CJ. Afiliados definitivos: Stay22 + Travelpayouts
- [ ] Configurar metodo de pago en Travelpayouts (`set your payout method`) — Venul debe hacerlo directo en el dashboard, Claude no puede ingresar datos financieros
- [ ] Investigar por que 0 conversiones pese a clics reales en Stay22/Travelpayouts

### 🟡 Proximas sesiones
- [x] Crear guia de Las Terrenas / Samana — COMPLETADO 2026-07-01 (pendiente subir a GitHub)
- [x] Crear guia de Jarabacoa — COMPLETADO 2026-06-29
- [x] Agregar widgets de Travelpayouts en las guias (vuelos, hoteles) — COMPLETADO, verificado 2026-07-12: los 12 archivos locales ya tienen los 6 widgets (vuelos, carro, traslado, tours, eSIM, seguro) + Stay22
- [ ] Optimizar meta titles y descriptions para mejorar CTR en Google
- [ ] Publicar post de Facebook para guia-punta-cana (pendiente aprobacion Blotato)
- [x] Corregir canonical + og:url en todas las guias — COMPLETADO 2026-06-27
- [x] Actualizar canonical a quisqueyatravel.org — COMPLETADO 2026-06-26
- [ ] 🔴 Resolver error de pago en Meta Ads (campana "Quisqueya Travel — Trafico Global" no esta entregando) — detectado 2026-07-12
- [ ] Cuando se resuelva el pago: escalar AS1 (Diaspora Dominicana Global) y pausar/reducir AS2 (Viajeros al Caribe) — AS1 tiene 17x mas visitas a la pagina
- [ ] Configurar metodo de pago en Travelpayouts (Venul directo en el dashboard)
- [ ] Solicitar indexacion manual en GSC para las 16 paginas "descubiertas sin indexar"

### 🟢 Ideas / Backlog
- [ ] Newsletter mensual de ofertas de viaje
- [ ] Pagina "Top 5 hoteles baratos en Punta Cana"
- [ ] Integrar Google Analytics para medir trafico real
- [ ] Guia de Las Terrenas / Samana
- [ ] Campana Meta Ads para trafico al sitio

---

## Decisiones de Diseno Tomadas

| Decision | Razon | Fecha |
|---|---|---|
| Drive script va despues de `<head>` | Requisito de Travelpayouts para deteccion correcta | 2026-06-25 |
| Stay22 como afiliado de hoteles temporal | Booking.com pendiente aprobacion | 2026-06-25 |
| Deploy via GitHub upload (no CLI) | npm install timeout en sandbox de Claude | 2026-06-25 |
| Sin tildes en nombres de archivo | Evita problemas de encoding en el sitio estatico | — |
| Footer con aviso de afiliacion en cada pagina | Requisito FTC y Booking.com | — |
| CTAs marcados con `<!-- AFILIADO -->` | Facilita el reemplazo masivo cuando llegue el link | — |

---

## Errores Conocidos y Soluciones

| Error | Causa | Solucion |
|---|---|---|
| Netlify sin creditos — no despliega | Netlify agoto creditos de build — auto-deploy de GitHub desactivado | Migrar a Cloudflare Pages (deploy-cloudflare.yml) |
| CodeMirror 6 en GitHub editor no guarda cambios | `execCommand('insertText')` actualiza DOM pero no estado interno de CM6 | Crear archivo localmente + subir via GitHub file upload UI |
| CF dashboard SPA no carga en Chrome extension | SPA heavy con JS — bodyLen: 0, solo links de cookie consent | Hacer llamadas API directas via browser fetch() con credentials: 'include' desde dash.cloudflare.com |
| Netlify CLI falla en sandbox | npm install timeout a 45 segundos | Usar GitHub web upload + auto-deploy (ahora Cloudflare Pages) |

---

## Sesion 2026-07-07 (parte 2) — Meta Ads global lanzada y ACTIVA

- Cuenta de Meta Ads (290012163) resuelta: saldo de $35.51 pagado por Venul, estado ACTIVE.
- Meta Pixel (2054264274867364) instalado en las 24 paginas del sitio (ES/EN/FR) — pendiente que Venul corra `COMMIT-PIXEL.bat` para subirlo a produccion si aun no lo hizo.
- Campana **Quisqueya Travel — Trafico Global** creada, $12/dia, objetivo trafico/visitas a pagina de destino:
  - **AS1 — Diaspora Dominicana Global**: EE.UU., Espana, Puerto Rico, Panama, Canada · edad 25-55 · creativo "Donde quiera que estes... Vuelve a tu isla" (D2 Pertenencia)
  - **AS2 — Viajeros al Caribe**: EE.UU., Canada, Espana, Reino Unido, Alemania, Francia · edad 28-60 · creativo "Mientras tu lo piensas... No dejes pasar tu viaje al Caribe" (M1 FOMO precios)
- Ambos ad sets con destino "Sitio web" (quisqueyatravel.org), sin fecha de fin, sin limite de gasto por ad set.
- **Campana ACTIVADA el 2026-07-07 con confirmacion explicita de Venul ("dale").** Ya esta gastando presupuesto real.
- Pendiente para la proxima sesion: revisar rendimiento (CTR, CPC, clics al sitio) a los 2-3 dias y decidir si escalar el ad set ganador o pausar el que no funcione.
- Nota tecnica: al crear ad sets nuevos en Ads Manager, revisar SIEMPRE que "Ubicacion de la conversion" quede en "Sitio web" (no "Video en vivo de Instagram", que sale seleccionado por default a veces) y que el calendario tenga al menos 24h o sin fecha de fin si el presupuesto es diario.
| Travelpayouts verificacion falla | Drive script estaba en elquisqueyano.netlify.app pero Travelpayouts revisa quisqueyatravel.org | Subir archivos al repo de GitHub que alimenta quisqueyatravel.org |
| GitHub 404 en venulhernandez | Username incorrecto | Username real: venulhernandez-cyber |
| Memoria tenia URL incorrecta | Archivo de memoria no se habia actualizado | URL correcta: quisqueyatravel.org |
| Post de IG fallido | Instagram requiere media (imagen/video) | Generar visual con blotato o publicar solo en FB |
| Hoteles no cargaban — imagenes vacias `imagen: ''` | Travelpayouts link_switcher stripea URLs de Unsplash del inline `<script>` y acorta el contenido del script | Mover TODO el JS a `js/hoteles.js` externo en ES5. Travelpayouts no toca archivos .js externos |
| Hoteles no cargaban — `renderHoteles is not defined` | El inline `<script>` era corrompido por Travelpayouts → script falla silenciosamente → funciones undefined | Igual que arriba — solo se soluciona con JS externo |
| index.html truncado mid-function | Multiples Edit tool operations acumularon truncamiento | Reconstruir desde cero: copiar lineas 1-542 + agregar `<script src>` + cerrar `</body></html>` |

---

## Roadmap del Proyecto

| Fase | Objetivo | Estado |
|---|---|---|
| 1 — Lanzamiento | Sitio en vivo con 6 guias | ✅ Completado (7 guias al 2026-06-27) |
| 2 — Afiliacion Drive | Travelpayouts Drive activo | ✅ Completado (2026-06-25) |
| 2b — Migracion hosting | Cloudflare Pages como host principal | ✅ Completado (2026-06-29) — falta cambio DNS |
| 3 — DNS final | Cambiar nameservers Namecheap → Cloudflare | 🔴 PENDIENTE — ultimo paso |
| 4 — Afiliacion Booking | Link de Booking activo en CTAs | ⏳ Pendiente aprobacion CJ |
| 5 — Trafico | 500 visitas/mes organicas | 🔜 Pendiente |
| 6 — Monetizacion | Primera comision de viaje | 🔜 Pendiente |
| 7 — Escala | 10 guias + campana Meta Ads | 🔜 Pendiente |

---

## Como Hacer Deploy (proceso correcto)

**PROCESO NUEVO (Cloudflare Pages — desde 2026-06-29):**
1. Editar archivos HTML en `C:\Users\venul\OneDrive\Desktop\Quisqueya\`
2. Ir a: https://github.com/venulhernandez-cyber/quisqueyatravel/upload/main
3. Arrastrar o seleccionar los archivos HTML actualizados
4. Escribir mensaje de commit descriptivo
5. Click "Confirmar cambios"
6. GitHub Actions corre automaticamente (.github/workflows/deploy-cloudflare.yml) → despliega a CF Pages en ~1-2 min
7. Verificar en: https://dash.cloudflare.com (proyecto quisqueyatravel → Deployments)
8. Verificar sitio live en: https://quisqueyatravel.org

Nota: la cuenta de Netlify fue eliminada por completo (30 jun) — ya no existe como opcion de deploy.

---

## Auditoria de seguridad + diseño — 2026-07-08

**Seguridad:**
- Escaneo de secretos: 38 archivos, 0 hallazgos (sin API keys/tokens expuestos).
- Dominios externos: todos coinciden con la lista blanca conocida (Travelpayouts/tpo.li, emrldtp.com, stay22, GA, fonts, Bootstrap CDN, redes sociales). `eticket.migracion.gob.do` aparece como nuevo pero es legitimo (link oficial de gobierno en la guia de requisitos de viaje).
- Cabeceras HTTP en vivo: X-Frame-Options (DENY), X-Content-Type-Options (nosniff), Referrer-Policy, Permissions-Policy y Strict-Transport-Security SI se estan entregando correctamente.
- 🔴 HALLAZGO IMPORTANTE: **Content-Security-Policy NO se esta entregando en el sitio en vivo**, a pesar de estar definida tanto en `_headers` como en `functions/_middleware.js`. Se confirmo que la Function SI se ejecuta (el header de diagnostico `X-Csp-Test: middleware-ran` llega bien), pero el header `Content-Security-Policy` en si desaparece antes de llegar al navegador. Esto no es un problema del codigo — algo en el dashboard de Cloudflare (Transform Rules / Page Rules / WAF) probablemente esta removiendo ese header especifico. Pendiente: Venul debe revisar Cloudflare Dashboard → Rules → Transform Rules (Modify Response Header) y Page Rules para el dominio, buscando algo relacionado a Content-Security-Policy.

**Diseño/UX:**
- Nav mobile: usa el collapse de Bootstrap con hamburger y aria-label correcto — no hay problema de overflow como se pensaba.
- ARIA: buscador de hoteles con `role="search"` y labels correctos; foco visible definido (`outline: 3px solid naranja`) — buena practica que muchos sitios no tienen.
- Imagenes: solo hay 1 `<img>` real en index.html (pixel de tracking); el resto son backgrounds CSS, asi que no aplica alt text ahi.
- Contraste: naranja (#f4a261) sobre fondo oscuro (#1a1a2e) = ~9:1, excelente. Pero naranja sobre blanco = ~2:1, falla WCAG AA — aparece en `.resena-quote` (comilla decorativa grande en las tarjetas de reseñas). Severidad baja/menor porque es un simple caracter decorativo, no texto informativo.
- Copy: el hook emocional del hero ("¿Cuánto hace que no te comes un mangú frente al mar?") esta muy bien logrado — autentico, dominicano, sin sonar generico.

**Intento 2 de arreglar el CSP (mismo dia, despues de revisar mas):**
- Corregi mi propia hipotesis inicial: el comentario original en `functions/_middleware.js` ya dejaba anotado que el 7 jul se probo tanto en quisqueyatravel.org como en quisqueyatravel.pages.dev directo, con el mismo resultado (CSP ausente en ambos) — eso DESCARTA que sea un Transform Rule o Page Rule de zona, porque esas reglas no aplican al subdominio *.pages.dev. Mi sugerencia anterior de "revisa Transform Rules" no es el camino correcto.
- Nuevo dato: `X-Content-Type-Options` y `Referrer-Policy` llegan correctos en vivo pero NO estan definidos en ningun lado del repo (ni `_headers` ni el Function) — Cloudflare Pages los agrega automaticamente por su cuenta. Esto confirma que Cloudflare Pages tiene su propia capa de inyeccion de headers de seguridad por defecto, separada de lo que declara el proyecto. Es plausible que esa misma capa (o Cloudflare Web Analytics/Zaraz, que a veces necesita modificar el CSP para inyectar su propio beacon) este chocando con un CSP personalizado complejo y descartandolo en vez de fusionarlo.
- Cambios que hice:
  1. Reescribi `functions/_middleware.js` para clonar la respuesta original (`new Response(response.body, response)`) y mutar headers directo, en vez de construir un `Headers` nuevo — patron ligeramente distinto, marcador de diagnostico actualizado a `X-Csp-Test: middleware-ran-v2` para confirmar que esta version (no una vieja) es la que corre.
  2. Quite la linea `Content-Security-Policy` del archivo `_headers` estatico — se dejo solo en el Function, para eliminar la posibilidad de que las dos declaraciones compitan entre si.
  3. Aproveche para agregar `https://emrldtp.com` a `connect-src` en la politica — esto NO estaba antes y si el CSP algun dia se llega a entregar de verdad, hubiera bloqueado las llamadas del script de afiliados (`emrldtp.com/config`, `/entrypoint_config`) que vimos en la consola, rompiendo la monetizacion silenciosamente.
- Pendiente: subir estos 2 archivos (`_headers` y `functions/_middleware.js`) via el proceso normal de deploy (upload a GitHub) y verificar en el navegador si `Content-Security-Policy` ya llega. Si sigue sin llegar, el siguiente paso ya es contactar soporte de Cloudflare o buscar en su comunidad "Pages Functions Content-Security-Policy header stripped" — esto ya no se puede diagnosticar mas sin acceso al dashboard/soporte de Cloudflare.
