# Memoria de proyecto (Cowork/Claude) — mirror en disco

> Este archivo es un espejo legible de la memoria de proyecto que Claude guarda internamente en Cowork (fuera de este disco). Se sincroniza a mano cuando algo cambia; la fuente "viva" sigue siendo la memoria de Cowork, pero así queda todo también aquí, en `Desktop\Quisqueya\_interno`, junto con `memoria-proyecto.md` y `quisqueya-travel-memoria.md` (que son las que usan las tareas programadas).
>
> Última sincronización: 1 sep 2026.

---

## Reglas de contenido

Regla: los videos con clips de Pexels se usan SOLO en publicaciones de Quisqueya Travel.
Por qué: Venul lo estableció como regla fija — El Quisqueyano en NYC no debe usar Pexels.
Cómo aplicar: al generar o revisar guiones/reels/posts, si la marca es El Quisqueyano en NYC, no usar clips de Pexels (usar footage propio u otro recurso); si la marca es Quisqueya Travel, Pexels sí está habilitado.

---

## Visibilidad de links FB/IG — completado 31 ago 2026

Contexto: Facebook penaliza el alcance orgánico de posts con un link externo en el propio texto; Instagram no hace clicable ningún link dentro del caption del feed. Antes, el pipeline diario (turno playa/hoteles) ponía el link crudo directo en el copy — invisible/perjudicial.

Cambios aplicados y en `main` (pusheados a origin/main vía GitHub Desktop el 30 ago, deploy de Cloudflare Pages disparado solo):
- **Scheduled tasks "Quisqueya Travel - Turno Playa (10am ET)" y "Turno Hoteles (6pm ET)"**: el copy ya NO lleva el link crudo — termina con el CTA "🔗 Link directo en el primer comentario 👇". El link real (con UTM: utm_source=facebook|instagram, utm_medium=social, utm_campaign=turno_playa|turno_hoteles, utm_content=<destino|hotel>) se pasa como `firstComment` en `blotato_create_post`. Verificado 31 ago: ambos scheduled tasks corrieron ese día (last_run SUCCEEDED) con este prompt ya activo.
- **PLAN B (pipeline de respaldo GitHub Actions, repo quisqueyatravel)**: `.github/scripts/publish-social.js` y `.github/workflows/publish-social.yml` aceptan un input opcional `link_comment` — tras publicar en la Graph API, postea ese texto como comentario en el post/media recién publicado (no rompe el job si el comentario falla).
- **bio-link-el-quisqueyano.html**: si la URL trae `?src=`, se agrega automáticamente como `utm_source` (+ utm_medium=social, utm_campaign=link_hub) al link destacado de Quisqueya Travel — para diferenciar Facebook vs Instagram en Analytics aunque ambos compartan la misma página de bio-link.

Verificado en vivo el 31 ago 2026 (ya NO pendiente):
- Instagram (@venulh) → bio: `quisqueyatravel.org/bio-link-el-quisqueyano?src=instagram_bio` ✅
- Facebook (página "El Quisqueyano en nyc") → Sitios web y enlaces: `https://quisqueyatravel.org/bio-link-el-quisqueyano?src=facebook_bio` ✅

Página de FB: 3,7 mil seguidores (subió desde la base de ~2K registrada anteriormente).

**Git — resuelto el 30 ago:** `main` tenía una divergencia previa sin resolver entre un commit local (7665deb, GetYourGuide/Discover Cars) y uno remoto (5a0de7e, tarjetas visuales hoteles/tours) que chocaban en guia-punta-cana.html y guia-santiago.html. Se resolvió quedándose con las tarjetas visuales (tours-grid) del commit remoto. Se mergeó también la rama `link-visibility-updates`. El push final se hizo abriendo GitHub Desktop por computer-use (el PAT guardado en `_interno/github-pat.txt` no tiene scope `workflow`, así que no puede pushear cambios a `.github/workflows/*` por CLI/API).

Nota: hay un stash viejo en el repo ("!!GitHub_Desktop<main>") sin relación con este trabajo — no se tocó.

---

## Auditoría de plugins/skills/conectores/tareas — 30 ago 2026

**Funcionando bien (probado con llamadas reales, no solo "conectado"):**
Blotato (activa, plan starter, FB+IG confirmados), Meta Ads (cuenta 290012163 activa, con método de pago), Cloudflare Dev Platform (auth ok, sin Workers desplegados — normal, el sitio usa Cloudflare Pages que este MCP no gestiona), Gmail, Google Calendar, Google Drive, Vercel (auth ok, plan hobby, no se usa para Quisqueya Travel), higgsfield (769.61 créditos, plan plus), Semrush (dominio quisqueyatravel.org: rank 3.9M, 146 keywords, 92 visitas orgánicas/mes — muy bajo), Nimble, Tavily, dispositivo "venul" (online, carpeta Quisqueya conectada), GitHub Desktop (push confirmado funcionando).

**Hallazgos que requerían atención:**
1. **Turno Playa del 30 ago quedó "PENDING" 10+ min sin publicar ni caer a PLAN B** — sospecha: tareas programadas autónomas piden permiso de Claude in Chrome cada sesión nueva (el grant no es persistente) y si nadie está para aprobarlo, la sesión se queda esperando indefinidamente. **Nota 1 sep: el pipeline ya no depende de Claude in Chrome como método principal — el paso de video usa WebFetch sobre un video-pool.json en GitHub — así que este riesgo debería estar mitigado, pero vale la pena seguir vigilando corridas "PENDING".**
2. **Turno Hoteles** tuvo el mismo síntoma el 26-29 ago.
3. **Skill "quisqueyatravel"** (sin guion, distinta de "quisqueya-travel") tiene descripción rota "Actua como un acesor experto" — residuo de prueba, sugerido borrarla desde claude.ai (no se puede desde esta sesión).
4. **Plugins duplicados**: "operations", "design", "marketing" y "sales" aparecen 2 veces cada uno en ListPlugins — revisar en Configuración → Plugins.
5. **Supermetrics**: el conector funciona pero NINGUNA fuente de datos individual está autenticada todavía.
6. **Slack**: conectado pero sin canales encontrados — no parece un workspace en uso activo.

---

## Auditoría del sitio + venta + tráfico — 30 ago 2026

Pedido de Venul: "integrar [ayuda] a mi página web para aumentar ventas y dar a conocer quisqueyatravel.org". Entregado `Quisqueya-Travel-Plan-30ago2026.docx` (en la carpeta Quisqueya) con tres partes.

**1. Auditoría técnica (revisada en vivo con Claude in Chrome):** GA4 y Meta Pixel activos y disparando; los 6 links de afiliado (Booking vía CJ/jdoqocy, auto/tours/eSIM/seguro vía Travelpayouts tpo.li) abren correctamente con tracking; formulario de captura de correo funciona; la lógica `?src=` de bio-link-el-quisqueyano.html funciona. Gaps: no hay sección de reseñas/testimonios reales en el sitio; WhatsApp y el chat del asistente no tienen eventos de Analytics enganchados.

**2. Contenido de venta:** bloque "¿Por qué reservar aquí y no directo?", plantilla vacía de "Lo que dice mi gente" (testimonios, a rellenar solo con citas reales), meta description opcional.

**3. Plan de tráfico:** 3 captions nuevas para FB/IG (calculadora de presupuesto, transparencia/afiliado, itinerario gratis por WhatsApp), cada una con UTM. Cadencia sugerida: sumar 2 posts/semana enfocados en el sitio como herramienta, además del Turno Playa/Turno Hoteles ya automatizado.

**Fuera del alcance, encontrado en `grupos-fb-promo.md`:** ya existe una campaña activa (con tarea programada) de compartir posts en grupos de Facebook dominicanos/latinos. Alertas: 2 grupos (Latinos En Nueva York, Dominicanos activos en new york) llevan 22+ días con el post bloqueado por Facebook — sin resolver.

**Meta Ads — resuelto 30 ago (misma tarde):** Venul pagó, cuenta 290012163 `account_status=ACTIVE`, `has_payment_method=true`. Solo "Retargeting Visitantes 30d" ($4/día) está activa. "Conversión Reserva Hotel FB+IG" ($3/día) y "Tráfico Punta Cana FB+IG" ($5/día) quedaron pausadas por decisión de Venul. "Tráfico Top Emisores Turismo" sigue pausada desde el 25 ago.

---

## Auditoría SEO de quisqueyatravel.org — 31 ago 2026

Entregado `Auditoria-SEO-QuisqueyaTravel-31ago2026.docx` (en la carpeta Quisqueya) con research de Semrush + revisión de código fuente de las 29 guías en español. Auditoría e implementación 100% completas — todo commiteado y pusheado a main.

**Hallazgo crítico — CORREGIDO (commit `7294d72`):** de 151 keywords indexadas (base US), 150 correspondían a páginas en inglés (/en/) y solo 1 a español. Causa: `hreflang x-default` apuntaba a `/en/` en vez de `/es/` en 25 páginas. Corregido con script que hace recíproco el hreflang en las 3 versiones de cada cluster. El efecto en indexación tarda 2-6 semanas en verse en Search Console.

**Números base pre-fix (Semrush, database us, 31 ago 2026):** Authority Score 6/100, 151 keywords orgánicas, 0 en posiciones 1-10, tráfico orgánico estimado ~20 visitas/mes, 40 backlinks de 32 dominios de referencia.

**Quick wins — EN VIVO (commit `a9b5d55`):** títulos y meta descriptions acortados en varias guías; 2 guías nuevas (eSIM, seguro de viaje) con FAQ schema; sitemap a 73 URLs; enlaces internos añadidos.

**Gaps de contenido — CERRADOS (commit `b2fece4`):** `guia-es-seguro-punta-cana.html` y `guia-alquiler-carro-punta-cana.html`, ambas con FAQ schema, hreflang recíproco completo (incluye fix en las versiones EN), sitemap a 75 URLs, enlaces internos añadidos. Imágenes reutilizan Pexels IDs ya embebidos en el sitio (31378162, 2434645, 17070159, 38427745) — pendiente reemplazar por fotos más específicas cuando haya red disponible.

**Nota técnica para el futuro:** varios archivos del repo (index.html, guia-puerto-plata.html, guia-santo-domingo.html, y varios en en/ y fr/) usan CRLF. Editarlos con Python en modo texto normal los convierte a LF y genera diffs gigantes falsos. Revisar `grep -c $'\r' archivo` antes/después y reconvertir si hace falta.

**Cómo se hizo el push:** `git push` desde el shell de la sesión falla (sin credential helper interactivo) — se usó control de computadora (GitHub Desktop). Repo confirmado: `OneDrive - Personal\Escritorio\Quisqueya` (la copia de Desktop, no la de Documentos\GitHub que está desactualizada). Este repo recibe commits concurrentes de otros procesos automatizados (memoria-proyecto.md, quisqueya-travel-memoria.md, data/video-pool.json, _interno/planificacion/*.md) — siempre revisar `git status --short` y comitear solo los archivos propios del trabajo en curso.

**Competidores identificados vía Semrush:** godominicanrepublic.com (oficial, 14,529 keywords/172K tráfico), gruposaona.com (45 keywords/1,097 tráfico — el más realista de superar en el nicho Saona), shortgirlontour.com (blog independiente, 5,918 keywords/13,672 tráfico).

**Pendiente / seguimiento sugerido:** volver a correr Semrush en 3-4 semanas para medir el impacto del fix de hreflang; reemplazar imágenes Pexels reutilizadas por fotos más específicas cuando haya red disponible.

---

## Automatización del sitio — 1 sep 2026

**GitHub Action "Verificar Enlaces" (lychee):**
- Commit 89e232d (1 sep 2026), archivo `.github/workflows/verificar-enlaces.yml`, en `main`.
- Corre diario vía cron `0 10 * * *` UTC (pensado como 6am ET) + lanzamiento manual desde Actions → "Verificar Enlaces" → Run workflow.
- Revisa todos los `.html` del sitio con lychee; si encuentra enlaces rotos, abre un Issue con labels `enlaces-rotos, automatizado`.
- Ojo: el cron está fijo en UTC, no se ajusta al cambio de horario (DST). "0 10 * * *" = 6am ET en horario de verano (EDT); en horario estándar (EST, nov–mar) correrá a las 5am ET. Si se quiere 6am ET todo el año, hay que cambiar el cron dos veces al año o usar un servicio que maneje TZ.

---

## Nota sobre la carpeta huérfana de Documentos

La skill `pexels-quisqueya-travel` cita `C:\Users\venul\OneDrive\Documentos\Claude\Scheduled\quisqueya-travel-diario\config.md` y `registro-temas.md` como "fuente de verdad", pero **las tareas programadas reales (Turno Playa / Turno Hoteles) ya no usan esa ruta** — usan `video-pool.json` en GitHub + `blotato_list_posts` + este archivo (`memoria-proyecto.md`) como fuente real. Esa carpeta de Documentos quedó huérfana; unificación en curso 1 sep 2026 (ver [[reglas-contenido]] y pedir a Venul que conecte esa carpeta si se quiere revisar/fusionar su contenido antes de descartarla).
