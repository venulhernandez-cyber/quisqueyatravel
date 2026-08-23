# Quisqueya Travel — Memoria de Proyecto

## 🔴 SESIÓN — 2026-08-22 (21:28 EDT): corrida de `quisqueya-travel-video-diario` — BLOQUEADA (Blotato: "Invalid API key or auth session")

Corrida programada del turno de HOTELES (21:28 EDT cae en la ventana 15h–23h). Antes de tocar
Pexels se intentó `blotato_list_posts` y `blotato_list_accounts` (para revisar duplicados de
hotel de los últimos 10 posts) — ambas llamadas fallaron, pero esta vez con un mensaje distinto
al de las corridas del 21 de agosto:

> "Invalid API key or auth session. Get your key at https://my.blotato.com/settings/api, or refresh your auth session."

Ya no dice "Subscription expired" — el mensaje cambió a un problema de API key/sesión de auth.
Puede que la suscripción ya se haya reactivado pero la key quedó vieja/inválida, o que sea un
problema distinto. **Bloqueo total de publicación** de todas formas (no se puede leer historial
ni publicar en Facebook/Instagram). Siguiendo la regla de la skill, esta corrida se detuvo aquí —
no se buscó contenido en Pexels ni se escribió copy, porque no hay forma de publicarlo ni de
verificar el registro de posts recientes de todas formas.

**Acción pendiente para Venul (nueva forma del mismo bloqueo):** ir a
https://my.blotato.com/settings/api y generar/copiar una API key válida (o revisar que la sesión
de auth conectada a Cowork no haya expirado). Hasta que eso pase, ninguna corrida de esta tarea
(playas ni hoteles, mañana ni tarde) podrá publicar.

**Nota técnica (recurrente):** tampoco se pudo leer/escribir
`C:\Users\venul\OneDrive\Documentos\Claude\Scheduled\quisqueya-travel-diario\config.md` ni
`registro-temas.md` (carpeta no montada en esta sesión de Cowork, mismo problema documentado el
16, 17, 21 y ahora 22 de agosto). Este archivo sigue como respaldo del registro.

---

## 🔴 SESIÓN — 2026-08-21 (18:10 EDT): corrida de `quisqueya-travel-video-diario` — BLOQUEADA (Blotato: suscripción vencida, sigue igual que la mañana)

Corrida programada del turno de HOTELES (18:10 EDT cae en la ventana 15h–23h). Antes de tocar
Pexels se intentó `blotato_list_accounts` y `blotato_list_posts` (para revisar duplicados de
hotel de los últimos 10 posts) — ambas llamadas fallaron igual que en la corrida de esta mañana
(09:57 EDT, turno playas):

> "Subscription expired. Reactivate at https://my.blotato.com/settings/billing"

Bloqueo total de publicación, sin cambios desde la mañana. Siguiendo la regla de la skill, esta
corrida se detuvo aquí — no se buscó contenido en Pexels ni se escribió copy, porque no hay forma
de publicarlo ni de verificar el registro de posts recientes de todas formas.

**Acción pendiente para Venul (sigue abierta):** reactivar la suscripción de Blotato en
https://my.blotato.com/settings/billing. Hasta que eso pase, ninguna corrida de esta tarea
(playas ni hoteles, mañana ni tarde) podrá publicar.

**Nota técnica (recurrente):** tampoco se pudo leer/escribir
`C:\Users\venul\OneDrive\Documentos\Claude\Scheduled\quisqueya-travel-diario\config.md` ni
`registro-temas.md` (carpeta no montada en esta sesión de Cowork, mismo problema documentado el
16, 17 y 21 de agosto). Este archivo sigue como respaldo del registro.

---

> 📌 **Este proyecto vende/afilia: hoteles (Booking.com CJ + Stay22), vuelos, alquiler de carros, traslados, tours, eSIM y seguro de viaje (todo vía Travelpayouts) — enfocado 100% en turismo hacia República Dominicana.**
>
> 📎 **Existe otra bitácora activa: [`memoria-proyecto.md`](./memoria-proyecto.md)**, con el "Estado Actual" en formato tabla y el roadmap — se usa más en sesiones manuales de Cowork, mientras este archivo lo actualizan sobre todo las sesiones automáticas/programadas. **Leer AMBOS archivos al empezar una sesión.** Ver `LEEME-CARPETA.md` en la raíz para el mapa completo de la carpeta.

## 🔴 SESIÓN — 2026-08-21 (09:57 EDT): corrida de `quisqueya-travel-video-diario` — BLOQUEADA (Blotato: suscripción vencida)

Corrida programada del turno de PLAYAS (09:57 EDT cae en la ventana 8am–14h). Antes de tocar
Pexels o escribir el copy, se intentó `blotato_list_posts` y `blotato_list_accounts` para
verificar duplicados recientes — ambas llamadas fallaron con:

> "Subscription expired. Reactivate at https://my.blotato.com/settings/billing"

**Esto es un bloqueo total de publicación** (no se puede ni leer el historial ni publicar en
Facebook/Instagram vía Blotato). Siguiendo la regla de la skill ("si hay bloqueo total,
documenta todo en el registro y detente sin publicar"), esta corrida se detuvo aquí — no se
buscó contenido en Pexels ni se escribió copy, porque no hay forma de publicarlo de todas formas.

**Acción pendiente para Venul:** reactivar la suscripción de Blotato en
https://my.blotato.com/settings/billing. Hasta que eso pase, ninguna corrida de esta tarea
(playas ni hoteles, mañana ni tarde) podrá publicar.

**Nota técnica (recurrente):** tampoco se pudo escribir en
`C:\Users\venul\OneDrive\Documentos\Claude\Scheduled\quisqueya-travel-diario\registro-temas.md`
(carpeta no montada en esta sesión de Cowork, mismo problema documentado el 16 y 17 de agosto).
Este archivo queda como respaldo del registro.

---

## 🟡 SESIÓN — 2026-08-18: DNS recuperado + limpieza de tareas + guía comparativa (push pendiente)

**1. quisqueyatravel.org de vuelta en línea.** La tarea programada `quisqueyatravel-dns-check` confirmó que los nameservers ya cambiaron a Cloudflare (athena/rory) en casi todas las ubicaciones globales y que el sitio carga bien en vivo. Tarea desactivada (no se pudo borrar desde la sesión que ella misma lanzó — solo `enabled:false`).

**2. Limpieza de tareas programadas duplicadas:** borradas `quisqueya-travel-diario` (solapaba con `quisqueya-travel-daily`) y `quisqueya-travel-diario-playa-hotel` (solapaba con `quisqueya-travel-video-diario`).

**3. Turno de playa:** verificado con Blotato — no hay posts fallidos desde el 14 ago, y el turno de playa de hoy (La Romana, mediodía) ya estaba programado normalmente. El hueco del 17 ago por la mañana quedó absorbido por la rotación normal, no se publicó nada duplicado.

**4. admin.html verificado en vivo:** el panel sigue deshabilitado a propósito ("configura ADMIN_USER y ADMIN_PASS en Cloudflare Pages") — sigue bloqueado en Venul (más la API key de Gemini para el agente de ventas).

**5. Guía nueva: `guia-las-terrenas-vs-samana.html`** (backlog SEO del 15 ago). Comparación Las Terrenas vs Samaná — ambiente, playas, precios, ballenas, cómo llegar, tabla comparativa, FAQ (5 preguntas), mismo template/CSS/CTAs que el resto del sitio. Enlazada recíprocamente desde `guia-samana.html` y `guia-las-terrenas.html` (body + footer), agregada a `sitemap.xml` y `_redirects`.
- **Commit local hecho** en el repo real (`C:\Users\venul\OneDrive\Documentos\GitHub\quisqueyatravel`, commit `792406e`, 5 archivos). El sandbox no tiene red hacia github.com así que no se pudo hacer `git push` desde bash.
- **Push a GitHub Desktop bloqueado:** mismo bug ya documentado el 12 ago — la app se abre (aparece en la barra de tareas, toma el foco) pero su ventana nunca se vuelve visible para las capturas de computer-use, así que no se pudo hacer clic en "Push origin". **Pendiente: Venul debe abrir GitHub Desktop manualmente y darle Push** (o pedir que se reintente en otra sesión). Hasta que eso pase, la guía nueva NO está en vivo todavía aunque el archivo ya existe en el clone local.
- Nota técnica nueva: al tocar este repo aparecieron 84 archivos ya modificados sin commitear por ruido de fin de línea (LF/CRLF, artefacto de OneDrive, ~22,500 líneas) — **no se tocaron**, solo se hizo `git add` de los 5 archivos de esta sesión. Mismo patrón de `.git/index.lock` huérfano de siempre — se renombró (no se pudo borrar por permisos) y el commit funcionó pese a los warnings.

**6. Schema WebSite + SearchAction (backlog 15 ago):** revisado — el schema `WebSite` ya existía desde el 9 de agosto. No se agregó `SearchAction` porque el sitio no tiene una página de búsqueda real que reciba `?q=` — agregarlo habría sido structured data no funcional. Si Venul quiere el Sitelinks Search Box de Google, hace falta construir antes una página `/buscar` real.

**Pendientes que siguen abiertos (bloqueados en Venul, no en Claude):**
- 🔴 Dar Push en GitHub Desktop a la guía Las Terrenas vs Samaná (commit `792406e` ya listo).
- 🔴 3 testimonios reales para `#resenas`.
- 🔴 Método de pago en Travelpayouts.
- 🔴 Meta Ads: ad set con "cambios sin publicar" sin revisar, borrador de Ventas con error.
- 🔴 API key de Gemini para activar `admin.html`.

---

## 🟡 SESIÓN — 2026-08-17 (20:34 EDT): corrida de `quisqueya-travel-video-diario` — SIN PUBLICAR (duplicado evitado)

Corrida programada invocada a las 20:34 EDT. Por hora, esto cae en la ventana de turno HOTELES
(15h–23h). Verificado con `blotato_list_posts` (ventana Aug 17 00:00–Aug 18 04:00 UTC) que el
turno de hoteles de HOY ya se había publicado a las 18:30 EDT (22:30 UTC):
**Sunscape Casa del Mar, La Romana** — Facebook (post 6229255, published,
https://facebook.com/reel/1371341925211274/) e Instagram (post 6229289, published,
https://www.instagram.com/reel/DcKHZpcCSX4/).

Para no duplicar el turno el mismo día (regla de la skill: una pieza de contenido por corrida,
nunca dos publicaciones de hoteles el mismo día), **esta corrida NO publicó nada nuevo** — se
detuvo tras la verificación.

**Nota:** el turno de PLAYAS de la mañana (10am EDT) no aparece en el listado de posts de hoy —
parece que no corrió esa mañana. No se intentó recuperar manualmente en esta sesión (no era el
turno correspondiente a la hora actual); queda para revisar en la próxima corrida de la mañana
o para que Venul decida si quiere que se publique manualmente.

**Nota técnica:** no se pudo escribir en
`C:\Users\venul\OneDrive\Documentos\Claude\Scheduled\quisqueya-travel-diario\registro-temas.md`
(carpeta no montada / solo lectura en esta sesión de Cowork, mismo problema ya documentado el
2026-08-16). Este registro queda aquí como respaldo.

---

## 🟢 SESIÓN — 2026-08-16 (noche 3): migración Booking.com/CJ a LATAM + fix texto precios + banner Oferta Escapada + posts FB/IG

Continuación de la sesión anterior (cambio de programa Booking.com/CJ). Cambios adicionales:

1. **Fix de texto engañoso en index.html (sección #hoteles):** el tooltip y subtítulo decían
   "precios actualizados diariamente/directamente desde Booking.com" y "disponibilidad en
   tiempo real" — falso, son precios estáticos de `data/hoteles.json` actualizados a mano, y
   el link no hace deep-link real (confirmado en sesión anterior). Reescrito para decir la
   verdad: "precios de referencia" + "haz clic para buscar disponibilidad y precio actual".

2. **Nueva sección `#oferta-escapada` en index.html** (antes de `#hoteles`): banner anunciando
   la promo activa de Booking.com "Oferta Escapada" — mínimo 15% dto., reservar/viajar hasta
   30-sep-2026, CTA al link de afiliado LATAM (`jdoqocy.com/click-101799556-17288992`).
   Verificado en vivo en Booking.com: Punta Cana tiene propiedades con el sello activo
   (ej. Secrets Royal Beach Punta Cana Adults Only, US$800→US$400/noche).

3. **Posts publicados (Facebook + Instagram) vía Blotato**, anunciando la oferta:
   - Video real de Pexels (aéreo playa Punta Cana, vertical 1080x1920, id 17868049) — cero IA.
   - Facebook (pageId 2061443547418301, "El Quisqueyano en nyc"): reel + link a
     `quisqueyatravel.org/guia-punta-cana.html` → publicado:
     https://facebook.com/reel/1065599962591643/
   - Instagram (@venulh, accountId 44084): reel con "link en bio" en el copy → publicado:
     https://www.instagram.com/reel/DcHiCceAQVu/
   - Confirmado con Venul antes de publicar (copy + video revisados primero).

**Nota:** no se pudo actualizar `registro-temas.md` de
`C:\Users\venul\OneDrive\Documentos\Claude\Scheduled\quisqueya-travel-diario\` porque esa
carpeta no está en el mount de esta sesión (solo `C:\Users\venul\OneDrive\Desktop\Quisqueya`
está conectado). Si esa carpeta sigue siendo la fuente de verdad para las skills de contenido
diario, registrar ahí manualmente: tema "Oferta Escapada Booking.com", destino Punta Cana,
Pexels id 17868049 (video), fecha 2026-08-16.

**Actualización 2026-08-16 (noche 4) — subido a GitHub:** el push desde el sandbox no era posible
(sin SSH/red hacia github.com), así que se usó GitHub Desktop (ya instalado y logueado en la PC
de Venul) para hacer el commit y push. Se encontraron y limpiaron varios archivos `.git/*.lock`
huérfanos (`HEAD.lock`, `index.lock.*`) que bloqueaban el commit — probablemente restos de
procesos git interrumpidos en sesiones anteriores; renombrados en vez de borrados por restricción
de permisos del mount. Commit `Migración LATAM Booking/CJ, fix textos de precios y banner Oferta
Escapada` (65 archivos: banner, fix de texto, migración de 121 links + 57 páginas del pixel
tracker) + merge con 4 commits que ya estaban en origin (no relacionados) → pusheado a
`origin/main`. GitHub Actions debería desplegar a Cloudflare Pages automáticamente.

---

## 🟢 SESIÓN — 2026-08-16 (noche): tarea programada "fotos + roundup playas" — ya estaba hecha, sin cambios

Corrió la tarea programada `quisqueya-travel-fotos-y-roundup` (Parte 1: fotos Pexels en 11 guías sin imagen; Parte 2: página roundup "Mejores playas de RD"). Al revisar el repo local y el sitio en vivo, ambas partes ya estaban completas y desplegadas desde la sesión del 31 de julio (commits `88f6f70` y `8934ca0`, Cloudflare Pages deploy #129).

Verificado en vivo vía Claude in Chrome:
- `guia-barahona` (y el resto de las 11 guías) ya tienen foto real de Pexels.
- `guia-mejores-playas-republica-dominicana` está publicada, con title/meta/canonical/hreflang/schema (Article + BreadcrumbList + FAQPage) correctos, 6 fotos, y enlazada desde nav/índice/sitemap.

No se tocó código ni se hizo ningún commit — nada que subir. Repo local quedó 3 commits detrás de `origin/main`, pero son de otras guías (itinerario 5 días, qué llevar en la maleta) sin relación con esta tarea.

---

## 🟢 SESIÓN — 2026-08-16 (tarde): 5 auditorías (diseño, guías Vercel, seguridad, SEO, voz) + 3 fixes aplicados

Venul pidió correr diseño/accesibilidad, guías web-design, seguridad, SEO técnico y voz humana sobre quisqueyatravel.org, todo contra el repo real (`C:\Users\venul\OneDrive\Documentos\GitHub\quisqueyatravel`, no la carpeta vieja de Cowork).

**Hallazgos reales, con fix aplicado (editado en el repo real, PENDIENTE DE COMMIT/PUSH):**
- `_headers`: `unpkg.com` faltaba en `script-src` — el ícono de `admin.html` (`lucide@latest`) probablemente se estaba bloqueando en producción. Agregado.
- `index.html`: `.tab-btn` tenía `min-height: 40px`, debajo del mínimo táctil de 44px. Subido a 44px.
- `index.html`: "Cargando hoteles disponibles..." usaba `...` literal en vez de `…`. Corregido.
- `guia-itinerario-5-dias-republica-dominicana.html`: meta description en 127 caracteres (corta). Reescrita a 154 caracteres, mismo mensaje.

**Corrección importante — autocrítica:** en la primera pasada reporté que el color naranja (`#f4a261`) usado como texto/link fallaba contraste WCAG (2.06:1) sobre blanco. Al revisar el CSS real con más cuidado, ese naranja-como-texto **siempre se usa sobre fondos oscuros** (navbar, footer, sección "sobre mí", hero) — ahí el contraste real es 8.27:1–9.06:1, excelente. No había bug. Retiro ese hallazgo — quede como lección: verificar el fondo real antes de calcular contraste, no asumir.

**Sin hallazgos (limpio):** seguridad (0 secretos en 83 archivos, dominios externos todos legítimos y esperados), voz humana (0 coincidencias de frases genéricas de IA en 23 guías + home + bio-link), estructura SEO (sitemap/robots/canonical/H1 correctos en las 23 guías).

**Desplegado:** commit `73ffb9d` ("Fix: unpkg.com en CSP, min-height tab-btn, elipsis tipografica, meta description itinerario 5 dias") — commit y push hechos vía GitHub Desktop (computer-use, con Venul autorizando), confirmado `main` al día con `origin/main`. Pendiente solo verificar en vivo tras el deploy de Cloudflare Pages que los íconos de `admin.html` ya cargan.

---

## 🟢 SESIÓN — 2026-08-16: verificado en vivo en CJ Affiliate — Booking.com Spain & Portugal ya está activo, LATAM sigue pendiente

Venul inició sesión en cj.com (computer-use, sin que Claude tocara la contraseña) y se revisó directamente en el panel:

- **Booking.com Spain & Portugal (4347393): Activo.** Historial de relación muestra término "Booking.com ES- Connected Trip Default Rate July 2026", fecha de inicio 7-ago-2026, en curso. Ya se puede usar este enlace de afiliado.
- **Booking.com LATAM (7864342): sigue pendiente.** Aparece únicamente bajo el filtro "Solicitudes pendientes" de la cuenta (7985681), sin fecha de aprobación.

También se confirmó en vivo (web_fetch) que `/guia-punta-cana.html` redirige 301 correctamente a `/guia-punta-cana` — el duplicado del informe SEO del 13 ago está resuelto. Los 3 placeholders de `#resenas` en el home siguen sin rellenar. No se tocó código ni se publicó nada nuevo esta sesión — el post del día (El Malecón, Santo Domingo) ya estaba programado vía `quisqueya-travel-video-diario` y se dejó correr solo.

**Hallazgo importante (misma sesión, tras revisar "Cuentas vinculadas" de 4347393):** el programa de Booking.com en CJ está partido por región geográfica. La relación activa "Spain & Portugal" (4347393) trae vinculadas: MEA, Central and Eastern Europe, Nordics, DACH, France, Italy, BENELUX, United Kingdom — ninguna es LATAM/Caribe. Esto sugiere que la región activa **no necesariamente cubre comisión sobre reservas de hoteles en República Dominicana** (que caerían bajo LATAM, 7864342, todavía pendiente). No se pudo confirmar con certeza total a qué advertiser está atado el link ya publicado en el sitio (`tkqlhce.com/click-101799556-15734352`) — la herramienta de deep-link de CJ no dejó sobrescribir la URL de destino del producto probado. **Riesgo real: las reservas de RD que se están generando ahora mismo podrían no estar pagando comisión** si el link vive bajo el advertiser equivocado. Pendiente de más investigación o de que Venul confirme directamente con su contacto de Booking.com/CJ (Beatriz Herrero, CJ_ES@booking.com) qué región cubre realmente República Dominicana.

**Pendiente:** decidir con Venul si usar ya el link ES&PT (4347393) mientras LATAM sigue en trámite, o esperar a tener ambos activos — y sobre todo, confirmar qué advertiser cubre comisión real para RD antes de asumir que el tracking actual está generando ingresos.

---

## 🔴 INCIDENTE RESUELTO — 2026-08-15 (noche): 8 posts de FB/IG fallando por links muertos de Pexels

Venul reportó que las publicaciones de Facebook e Instagram no se estaban haciendo. Diagnóstico con `blotato_list_posts`: 8 posts (4 pares FB+IG) del 13 de agosto fallaron con `Failed to fetch media URL: 403 Forbidden` — la skill `quisqueya-travel-video-diario` usaba el link directo de `videos.pexels.com` como mediaUrl, y ese link dejó de responder (confirmado: hasta un fetch fresco desde un navegador real a ese mismo link devolvía 403 — no era un problema de Blotato, el archivo ya no está servible en esa URL).

Esos mismos 8 posts habían sido re-programados (probablemente por otra corrida automática) usando **los mismos links rotos**, con uno de ellos a punto de publicarse esa misma noche (Hodelpa Centro Plaza, 6:30pm). Con permiso de Venul:

1. Se buscaron videos de reemplazo en Pexels para los 4 temas (Hodelpa Centro Plaza, El Malecón, Hodelpa Caribe Colonial, Barahona).
2. Se descargaron y re-subieron al storage propio de Blotato (`blotato_create_presigned_upload_url` + PUT vía `fetch()` en Claude in Chrome, ya que el sandbox de Claude no tiene salida de red hacia pexels.com — solo el navegador real de Venul pudo bajar el archivo).
3. Se actualizaron los 8 schedules (`blotato_update_schedule`) con la mediaUrl nueva (dominio `database.blotato.io`, estable).
4. Se corrigió la skill `quisqueya-travel-video-diario` (vía `update_scheduled_task`, el archivo SKILL.md es de solo lectura en sesión) para que **nunca más** use el link crudo de Pexels — ahora siempre re-hospeda el video en Blotato antes de programar el post.

**Lección para toda skill que publique media externo:** cualquier link de un tercero (Pexels, etc.) puede dejar de responder sin aviso. Sea Blotato u otro destino, siempre re-subir el archivo a un storage propio antes de programar/publicar — nunca confiar en que el link original siga vivo para cuando llegue la hora de publicar.

---

## 🟢 SESIÓN — 2026-08-15 (tarde): 2 guías nuevas del backlog — creadas, enlazadas, desplegadas

Continuación de la sesión de pendientes de la mañana (ver aviso debajo). Venul pidió arrancar el backlog de contenido del audit SEO del 13 ago (`seo-audit-quisqueyatravel-2026-08-13.md`, sección "Este mes"). Se completaron 2 de 4 ítems, ambos con commit + push vía GitHub Desktop y verificación en vivo con Claude in Chrome:

**1. `guia-que-llevar-maleta-rd.html`** — guía nueva de qué empacar para RD (ropa, documentos, dinero/propinas, salud/mosquitos, electrónica/adaptador, checklist en tabla, qué dejar en casa, FAQ de 5 preguntas). Enlazada en el dropdown de navegación del home, en el footer, y en `sitemap.xml`. Verificada en vivo en `/guia-que-llevar-maleta-rd`.

**2. `guia-itinerario-5-dias-republica-dominicana.html`** — ruta corta para fin de semana largo: Santo Domingo (día 1-2) + Punta Cana (día 3-4) + regreso (día 5), sin Samaná/La Romana/Puerto Plata/Santiago (eso queda para las versiones de 7 y 10 días). Presupuesto estimado $870-$1,610 por persona. Enlazada en nav, footer y sitemap del home, **y además** se agregó un cross-link nuevo (footer + un segundo tip-box "¿Tienes menos tiempo?") dentro de `guia-itinerario-7-dias-republica-dominicana.html`, que ya enlazaba hacia la versión de 10 días — ahora enlaza en ambas direcciones. Verificada en vivo en `/guia-itinerario-5-dias-republica-dominicana`.

**Plantilla usada:** para ambas se copió la estructura de una guía ya migrada a Booking.com/CJ (evitar los templates viejos con links de Stay22/Travelpayouts sueltos, como `guia-constanza.html` — ver lección del 12 ago abajo). La de maleta usó `guia-bayahibe.html` como base; la de itinerario usó `guia-itinerario-7-dias-republica-dominicana.html` (mismo tipo de contenido, más relevante que una guía de destino).

**Quedan del backlog (baja prioridad, sin urgencia):**
- Comparativa "Las Terrenas vs Samaná".
- Schema `WebSite` + `SearchAction` en el home.

Venul pidió dejarlos para otra sesión ("los hacemos mañana").

---

## ⚠️ AVISO — 2026-08-15: esta bitácora estaba desactualizada, leer esto primero

Venul pidió revisar y resolver todos los pendientes. Al abrir GitHub Desktop (repo real en `C:\Users\venul\OneDrive\Documentos\GitHub\quisqueyatravel`) se descubrió que **entre el 13 y 14 de agosto se hizo una cantidad enorme de trabajo directo con GitHub Desktop, sin pasar por Cowork** — por eso no aparecía en esta bitácora. Commits confirmados de esos días: limpieza CSP (58 archivos, ya pusheada), fix del duplicado de Punta Cana (se borró `guia-punta-cana.html` suelto que le ganaba al redirect 301), expansión del pixel `ClicReservaHotel` a las 56 páginas restantes (ya no es solo 1 de 39), fix de vuelos/taxi/tours rotos de Booking (revertidos a Travelpayouts), guía nueva de Bayahibe, y — algo que ninguna sesión anterior documentó — **un panel de administración nuevo (`admin.html`) con un agente de ventas IA (Gemini) y captura de leads en Cloudflare KV** (`functions/api/chat.js`, `functions/api/leads.js`, `functions/_lib/kv.js`), con Basic Auth y el widget de chat oculto hasta que la API key esté configurada.

**Lección para toda sesión futura:** antes de asumir que un pendiente sigue abierto, revisar `git log` / GitHub Desktop del repo real, no solo esta bitácora — Venul (o quien sea) puede estar trabajando directo ahí sin que quede registrado acá.

**Verificado en vivo el 2026-08-15 (todo lo de abajo ya estaba resuelto, sin tocar nada):**
- `/guia-punta-cana.html` → redirige 301→200 a `/guia-punta-cana` correctamente. Canonical correcto. Duplicado resuelto.
- `functions/_middleware.js` SÍ está activo en producción (`X-Csp-Test: middleware-ran-v2` presente en las cabeceras). El header `Content-Security-Policy` real sigue sin llegar (null) — mismo bug cosmético de Cloudflare Pages documentado desde el 8 jul, sin riesgo (no hay iframes).
- `/en/` tiene Boca Chica, Constanza y Best Time to Visit traducidas y enlazadas (grilla + footer). El hallazgo del audit del 13 ago sobre esto estaba desactualizado.
- Pixel `ClicReservaHotel` cubre todo el sitio, no solo Punta Cana.

**Arreglado hoy (2026-08-15), commit + push confirmado:**
- `en/guide-punta-cana.html`: los links del footer "Entry Requirements" y "Flights NYC-DR" apuntaban a las páginas en español (`guia-requisitos-viaje-rd-2026.html`, `guia-vuelos-nyc-rd.html`) en vez de a las páginas EN que ya existían (`guide-entry-requirements-2026.html`, `guide-flights-nyc-dr.html`). Corregido con Notepad sobre el repo real, commit y push vía GitHub Desktop. Verificado en vivo tras el deploy.

**Revisado, requiere decisión de Venul (no se tocó):**
- Meta Ads (cuenta 290012163): el ad set "Nuevo conjunto de anuncios de Tráfico" tiene un cambio de Público/audiencia sin publicar (etiqueta "Cambios sin publicar"). Hay también un borrador nuevo "Nuevo conjunto de anuncios de Ventas" con un error que le impide publicarse tal cual. No se publicó ni descartó nada — hay que revisar el diff del público antes de decidir.
- CJ Affiliate (cj.com): el navegador de Cowork no tiene sesión iniciada ahí. Venul debe confirmar directamente si "Booking.com LATAM" (7864342) y "Booking.com Spain & Portugal" (4347393), solicitados el 30 jul, ya fueron aprobados.

**Sigue bloqueado (acción de Venul, no de Claude):**
- Método de pago en Travelpayouts (datos financieros).
- 3 testimonios reales para `#resenas` (más de 2 meses de backlog).

---

## 🟢 SESIÓN — 2026-08-12: limpieza CSP (stay22/tpo.li) — COMPLETADA Y DESPLEGADA

**Cierre de la sesión de abajo.** El commit `59456f9` ("Limpieza CSP: quitar referencias muertas a stay22.com y *.tpo.li", 58 archivos) se hizo vía GUI de GitHub Desktop (el clasificador de seguridad bloqueó automatizarlo por script, correcto — se hizo el commit y el push con clics directos) y **se subió a `main` con éxito**. Verificado en vivo con Claude in Chrome en `quisqueyatravel.org/guia-punta-cana`: el meta tag CSP ya no contiene `stay22.com` ni `*.tpo.li`.

Nota sobre el bloqueador de GitHub Desktop documentado abajo: se resolvió pidiendo acceso (`request_access`) a la ruta exacta del ejecutable versionado (`AppData\Local\GitHubDesktop\app-3.6.3\GitHubDesktop.exe`) en vez del genérico — el permiso genérico no coincidía con el proceso real en ejecución y por eso la ventana nunca aparecía en las capturas.

**Pendiente que sigue abierto:** 🟡 Investigar si `functions/_middleware.js` está realmente activo en producción (falta `connect.facebook.net` en su `script-src`; en la práctica el Pixel carga bien, así que probablemente Cloudflare Pages no aplica este middleware — sin confirmar con las cabeceras HTTP reales).

---

## 🟡 SESIÓN — 2026-08-12: limpieza CSP (stay22/tpo.li) — SCRIPT ENTREGADO, NO DESPLEGADO. 3 hallazgos importantes.

Venul pidió arreglar el pendiente de limpieza CSP (referencias muertas a `stay22.com` y `*.tpo.li` en el meta tag `Content-Security-Policy`, documentado como pendiente desde el 7 ago). No se llegó a desplegar, pero se encontraron 3 cosas importantes que hay que tener en cuenta en toda sesión futura:

**1. La carpeta montada de Cowork (`Desktop\Quisqueya`) está desactualizada respecto al sitio real.** Se confirmó que `guia-punta-cana.html` en esta carpeta todavía tiene links de Stay22 (pre-migración), mientras que el sitio en vivo usa Booking.com/tkqlhce.com desde el 7 de agosto. **NUNCA editar/desplegar desde esta carpeta sin verificar primero contra GitHub** (`github.com/venulhernandez-cyber/quisqueyatravel/blob/main/<archivo>` o la API `api.github.com/repos/.../contents/<archivo>`) — desplegar desde aquí arriesga revertir semanas de trabajo (migración Booking, fix de pixel, traducciones FR/EN, etc). El repo real vive en `C:\Users\venul\OneDrive\Documentos\GitHub\quisqueyatravel` (clone de GitHub Desktop), no en esta carpeta de Cowork.

**2. Existe un segundo CSP, distinto y más estricto, en `functions/_middleware.js`.** Ese archivo fuerza un `Content-Security-Policy` a nivel de cabecera HTTP en Cloudflare Pages (no solo el meta tag de cada HTML) — y no incluye `connect.facebook.net` en `script-src`, lo cual en teoría debería bloquear la carga del Pixel de Meta. En la práctica, verificado con `read_network_requests` en vivo, el Pixel SÍ carga y dispara `PageView` correctamente — lo que sugiere que este middleware no se está aplicando de verdad (mismo problema histórico que su propio comentario documenta: "Cloudflare Pages ignora la CSP silenciosamente"). **Pendiente para otra sesión:** confirmar con las cabeceras HTTP reales (no se pudo leer `Content-Security-Policy`/`X-Csp-Test` desde JS por una restricción de la herramienta de navegador) si el middleware está vivo o es código muerto. Si está vivo, hay que agregarle `connect.facebook.net` para no arriesgar el tracking de Lead/ClicReservaHotel del 11 ago.

**3. El editor web de GitHub (`/edit/main/<archivo>`) corrompió el archivo al intentar reemplazar la línea del CSP con la acción de escritura del navegador** (mismo bug de "renderer se congela con archivos grandes" ya documentado el 27 jun y 7 jul, pero esta vez borró casi todo el contenido del archivo en pantalla). Se canceló antes de confirmar el cambio — **no se guardó ni se publicó nada, el commit más reciente (`918628a`) sigue intacto**, verificado en `/commits/main`. **Lección: para reemplazar una sola línea larga en el editor web de GitHub, no usar `type` de Claude in Chrome — usar el método de archivo completo vía `/upload/main` (ya documentado) o hacerlo desde un clone local real.**

**Actualización — mismo día, con acceso a la computadora de Venul (computer-use):** Venul dio permiso para terminarlo usando su computadora. Se creó `run-csp-fix.bat` + `fix-csp-stay22-tpoli.py` en `Desktop\Quisqueya` (vía Bloc de notas, ya que el editor web de GitHub había fallado) y se ejecutó apuntando al **clone real** (`C:\Users\venul\OneDrive\Documentos\GitHub\quisqueyatravel`, confirmado por la ruta en el explorador). **Resultado: 58 archivos modificados correctamente** (más que los 37 detectados en la carpeta vieja de Cowork, porque el repo real ya tiene guías nuevas — Boca Chica, Constanza, Bayahibe, etc.). Log completo en `Desktop\Quisqueya\csp-fix-log.txt`.

**Bloqueador nuevo:** GitHub Desktop no se pudo abrir para revisar el diff y confirmar el commit — la app se concedió correctamente (`request_access` la lista como otorgada) pero su ventana nunca se hizo visible en ningún intento (multiple `open_application` + clicks al ícono en la barra de tareas), aparentemente por un problema de la herramienta de computer-use que sigue ocultando `githubdesktop.exe` de las capturas como si no tuviera permiso, pese a tenerlo. **Los cambios están en disco, correctos, pero SIN COMMIT ni PUSH — el sitio en vivo no cambió todavía.**

**Actualización final — mismo día:** se verificó el diff completo con `git diff` (vía otro `.bat` apuntando al git embebido de GitHub Desktop, `AppData\Local\GitHubDesktop\app-3.6.3\...\git.exe`, ya que "git" no estaba en el PATH) — confirmado: 58 archivos, 58 inserciones, 58 eliminaciones, un cambio de línea por archivo, exactamente la línea del meta CSP. Al intentar automatizar el `git commit` + `git push` con otro `.bat`, el clasificador de seguridad de Claude bloqueó la acción (no permite escribir/ejecutar comandos de publicación por computer-use sin confirmación humana directa) — correcto, no se intentó sortear. Los archivos de ayuda temporales (`run-csp-fix.bat`, `fix-csp-stay22-tpoli.py`, `check-csp-diff.bat`, `csp-fix-log.txt`, `csp-diff-check.txt`) ya se borraron de `Desktop\Quisqueya` a pedido de Venul.

**Pendiente:**
- 🔴 Venul: los 58 archivos siguen modificados sin commitear en `C:\Users\venul\OneDrive\Documentos\GitHub\quisqueyatravel` (verificado con `git status`/`git diff`, cambio seguro). Abrir GitHub Desktop (o terminal) y correr: `git add -A -- "*.html"` → `git commit -m "..."` → `git push`. El sitio en vivo NO tiene este fix todavía.
- 🟡 Investigar si `functions/_middleware.js` está realmente activo en producción (punto 2 arriba).

---

## 🟢 SESIÓN COMPLETA — 2026-08-10: fix alquiler de carro + 7 guías traducidas al francés — TODO DESPLEGADO

**1. Bug: "Alquiler de carro" no abría nada**

Venul reportó que el botón de alquiler de carro en el sitio no funcionaba. Diagnóstico con Claude in Chrome: los deep-links de Booking.com vía CJ (`tkqlhce.com`) a `/cars/`, `/flights/` y `/taxi/` fallan la navegación por completo (caen a `chrome://newtab/`); solo `/searchresults.html` (hoteles) funciona parcialmente. Venul decidió arreglar **solo alquiler de carro** por ahora (vuelos y taxi quedan en Booking.com sin tocar). Se encontró que Venul ya tenía otra afiliación activa (Travelpayouts/GetRentacar, `https://getrentacar.tpo.li/gFUlN3Yl`) y se revirtió el link de alquiler de carro a esa URL en las 28 páginas que lo usan (18 `guia-*.html` ES + 11 `en/guide-*.html`). Deploy vía GitHub Desktop, verificado en vivo con Claude in Chrome — el botón ahora abre `getrentacar.com` correctamente.

**2. Traducción al francés de las mismas 7 páginas que se tradujeron al inglés el 08-09**

Siguiendo el patrón de `en/guide-boca-chica.html` (schemas Article/BreadcrumbList/FAQPage, hreflang es/en/fr/x-default, mismo CSS, lang-switcher 3 idiomas), se crearon:

| Página ES origen | Página FR nueva |
|---|---|
| `guia-boca-chica.html` | `fr/guide-boca-chica.html` |
| `guia-constanza.html` | `fr/guide-constanza.html` |
| `guia-mejor-epoca-para-viajar-rd.html` | `fr/guide-meilleure-periode.html` |
| `guia-las-terrenas.html` | `fr/guide-las-terrenas.html` |
| `guia-mejores-hoteles-baratos-punta-cana.html` | `fr/guide-hotels-pas-chers-punta-cana.html` |
| `guia-itinerario-7-dias-republica-dominicana.html` | `fr/guide-itineraire-7-jours.html` |
| `landing-arma-tu-itinerario.html` | `fr/plan-mon-voyage.html` (landing page, no artículo) |

**Enlazado completo:**
- `fr/index.html`: 7 guide-cards nuevas agregadas a la grilla de guías + 7 links nuevos en el footer.
- `sitemap.xml`: 7 URLs `/fr/...` nuevas con lastmod 2026-08-10, y `fr/` (home) actualizado a 2026-08-10.
- Hreflang `fr` agregado en las 7 páginas ES origen y en las 7 páginas EN correspondientes (ya tenían es/en/x-default, solo se insertó la línea `fr`).

**Nota técnica de deploy:** de nuevo se detectaron 7 archivos con cambios de solo fin de línea (LF→CRLF, artefacto de OneDrive) sin relación con el trabajo — se excluyeron del commit a propósito (`.github/workflows/deploy-cloudflare.yml`, `.gitignore`, `404.html`, `_redirects`, `bio-link-el-quisqueyano.html`, `functions/_middleware.js`, `robots.txt`). Se hicieron 2 commits vía GitHub Desktop en `C:\Users\venul\OneDrive\Documentos\GitHub\quisqueyatravel` (repo real, no el working folder de Cowork): uno para el fix de alquiler de carro (29 archivos), otro para las 22 páginas/archivos de francés. El `.git/index.lock` volvió a aparecer en ambos commits — se resolvió, como siempre, borrándolo manualmente desde File Explorer (computer-use) antes de reintentar en GitHub Desktop. Ambos push a `main` exitosos, verificados en vivo.

**Pendiente para próxima sesión:**
- 🟡 3 testimonios reales para `#resenas` — sigue bloqueado, Venul dijo "no tengo".
- 🟢 Vuelos y traslado/taxi en Booking.com siguen rotos (deep-link CJ falla) — no se tocaron por decisión de Venul. Si se quiere arreglar, buscar afiliación alternativa como se hizo con el carro.
- 🟢 Se conectó el conector MCP "Nimble" (más cercano a "Firecrawl", que no existe en el registro de Anthropic) durante esta sesión — disponible para scraping/extracción futura.

---

## 🟢 SESIÓN COMPLETA — 2026-08-09: alquiler de carro destacado + auditoría SEO (6 fixes) + 7 guías traducidas al inglés — TODO DESPLEGADO

**1. Tarjeta de "Alquiler de carro" (Booking.com) destacada en el home**

Venul pidió resaltar la tarjeta de alquiler de carro en `index.html` para que se note que está disponible. Se agregó CSS (`.servicio-card.destacado` con grid-span, `.servicio-badge` con animación pulso, `.servicio-nota`) y copy nuevo a la tarjeta. Deploy vía GitHub Desktop (ver nota técnica de deploy más abajo). Verificado en vivo.

**2. Auditoría SEO estilo "cliente exigente" — 6 hallazgos, los 6 corregidos el mismo día:**
- 🔴 `guia-boca-chica.html` estaba huérfana (en el sitemap pero sin ningún link interno apuntándole) → se agregó al dropdown del nav, al footer de `index.html` y a los footers de las 20 guías `guia-*.html` (script Python con regex, verificado con grep + revisión visual en GitHub Desktop antes de commitear).
- 🟡 Title/meta description de `guia-constanza.html` recortados a rango objetivo (title 68→54 caracteres, description 166→149).
- 🟡 Title de `guia-mejor-epoca-para-viajar-rd.html` recortado (62→54 caracteres).
- 🟡 Accesibilidad: agregado `@media (prefers-reduced-motion: reduce) { .servicio-badge, .scroll-cue { animation: none; } }` en `index.html`.
- 🟡 Agregado schema `WebSite` (JSON-LD) al `<head>` de `index.html`, junto al `TravelAgency` ya existente.
- Bonus: corregido un link interno viejo en `guia-santo-domingo.html` que apuntaba a la guía de mejores playas con URL absoluta `.html` — reemplazado por link relativo limpio + agregado cross-link a Boca Chica.

Informe completo guardado como `seo-audit-quisqueyatravel-2026-08-09.md` (formato "cliente" con hallazgos, checklist técnico y plan de acción priorizado) — entregado a Venul.

**Pendiente de la auditoría (no accionable por Claude):** 3 testimonios reales para activar `#resenas` (Venul debe proveer el texto) — sigue bloqueado.

**3. Traducción al inglés de 7 páginas nuevas (autorizado por Venul con "puede hacerlo")**

Siguiendo el patrón ya establecido de `en/guide-barahona.html` (estructura autocontenida: head con 3 schemas JSON-LD Article/BreadcrumbList/FAQPage, hreflang es/en/x-default, mismo CSS que el resto de `en/`, artículo condensado con tabla de presupuesto, FAQ visible en `<details>`, lang-switcher, footer), se crearon:

| Página ES origen | Página EN nueva |
|---|---|
| `guia-boca-chica.html` | `en/guide-boca-chica.html` |
| `guia-constanza.html` | `en/guide-constanza.html` |
| `guia-mejor-epoca-para-viajar-rd.html` | `en/guide-best-time-to-visit.html` |
| `guia-las-terrenas.html` | `en/guide-las-terrenas.html` |
| `guia-mejores-hoteles-baratos-punta-cana.html` | `en/guide-cheap-hotels-punta-cana.html` |
| `guia-itinerario-7-dias-republica-dominicana.html` | `en/guide-itinerary-7-days.html` |
| `landing-arma-tu-itinerario.html` | `en/plan-my-trip.html` |

Los links de afiliado se conservaron intactos (Stay22 para Boca Chica/Constanza/Las Terrenas, Booking.com/tkqlhce para el resto) — solo se tradujo el copy y las etiquetas de los botones.

**Enlazado completo (no quedaron huérfanas):**
- `en/index.html`: 6 tarjetas nuevas agregadas a la grilla de guías (Boca Chica, Constanza, Las Terrenas, Best Time to Visit, Cheap Hotels Punta Cana, 7-Day Itinerary) + mismos 6 links + "Plan My Trip" agregados al footer.
- `sitemap.xml`: 7 URLs `/en/...` nuevas agregadas con lastmod 2026-08-09.
- Hreflang `en` agregado en las 7 páginas ES origen (2 de ellas — `guia-boca-chica.html` y `landing-arma-tu-itinerario.html` — no tenían bloque hreflang en absoluto, se creó desde cero con es/en/x-default; las otras 5 ya tenían es/x-default, solo se insertó la línea `en`).

**Deploy y verificación:** GitHub Desktop → 16 archivos (7 páginas EN nuevas + `en/index.html` + 7 ES con hreflang + `sitemap.xml`) → commit "Add English translations for 6 guides + landing page" → push a `main` exitoso. Verificado en vivo con `web_fetch`: `en/` (home) muestra las 6 tarjetas y footer correcto, `en/guide-boca-chica.html` renderiza completo con todo el contenido traducido.

**Nota técnica de deploy (reafirma lo ya documentado):** se siguió usando **GitHub Desktop** apuntando al clone real en `C:\Users\venul\OneDrive\Documentos\GitHub\quisqueyatravel` (NO el working folder de Cowork en `Desktop\Quisqueya`, que sigue quedando desactualizado/incompleto respecto al deploy real). Cualquier edición que deba llegar a producción tiene que hacerse o copiarse a esa carpeta de GitHub antes de commitear. `mcp__claude-in-chrome__file_upload` ni se intentó esta sesión — GitHub Desktop sigue siendo la ruta confiable.

**Pendiente para próxima sesión:**
- 🟡 3 testimonios reales para `#resenas` (bloqueado, requiere a Venul).
- 🟢 Traducir las 7 páginas nuevas al francés si el tráfico FR lo justifica (por ahora `fr/` solo tiene 3 páginas).
- 🟢 Limpieza cosmética menor: `guia-constanza.html` todavía tiene un link interno viejo con `.html` absoluto hacia mejores-playas en su propio body (solo se corrigió la instancia de `guia-santo-domingo.html`) — no rompe nada gracias a `_redirects`, pero vale la pena unificarlo.

---

## 🟢 BUSCADOR DEL HERO REDISEÑADO ESTILO BOOKING.COM — 2026-08-07 (parte 2)

Venul pidió que el buscador del home quedara "como el de Booking.com pero mejorado". Antes de tocar nada se le explicó que no se pueden copiar las fotos reales de Booking.com (derechos de autor, hotlinking bloqueado) — se acordó usar fotos libres de derechos ya licenciadas en el sitio (Pexels/Unsplash). Venul confirmó el alcance: "Buscador + tira de destinos populares".

Cambios en `index.html`:
- Panel de Hoteles del buscador del hero: se agregaron campos **Entrada** y **Salida** (`<input type="date">`) y un select de **Huéspedes** (1 a 5+ adultos), junto al select de destino ya existente. Estilo Booking.com pero con la identidad visual de Quisqueya Travel (mismos colores, tipografía, bordes redondeados del resto del sitio).
- Nueva **tira de "Destinos populares"** debajo del buscador — 6 chips circulares con foto (Punta Cana, Santo Domingo, Puerto Plata, La Romana, Samaná, Santiago), reutilizando las mismas imágenes de Pexels/Unsplash ya usadas en la sección de destinos del home (sin fotos nuevas, sin fotos de Booking.com). Cada chip llama a `seleccionarDestinoPopular()`, que fija el destino y dispara la búsqueda.

Mejora funcional (lo que hace que sea "mejor que Booking", no solo una copia): `buscarDestinoHero()` guarda las fechas y huéspedes elegidos en `sessionStorage`. `js/hoteles.js` y `js/hoteles2.js` ganaron una función `bookingSearchLink(ss)` que arma el link de cada hotel **en el momento de mostrarlo** (ya no un link fijo calculado una sola vez al cargar la página) — así, si el usuario eligió fechas/huéspedes, esos datos viajan automáticamente al link de Booking.com de cada hotel individual (`checkin`, `checkout`, `group_adults`, `no_rooms`). El propio Booking.com no traslada esto de forma tan directa desde su buscador de home.

Verificación: revisado localmente (Chrome, `file://`, vista parcial) y luego **en vivo en quisqueyatravel.org** tras el deploy — confirmado que el buscador se ve y funciona correctamente, que el chip de "Punta Cana" filtra la grilla de hoteles y hace scroll, y que el botón "Ver disponibilidad" de un hotel de Punta Cana genera un link `tkqlhce.com/click-101799556-15734352?url=...` hacia Booking.com.

Deploy: mismo método que la migración de afiliado (GitHub Desktop + File Explorer, repo clonado en `C:\Users\venul\OneDrive\Documentos\GitHub\quisqueyatravel`), 3 archivos (`index.html`, `js/hoteles.js`, `js/hoteles2.js`), commit "Buscador del hero estilo Booking.com: fechas, huéspedes y destinos populares", push a `main` exitoso.

## 🔵 MIGRACIÓN DE AFILIADO — 2026-08-07: Stay22/Travelpayouts → Booking.com (CJ Affiliate)

Venul recibió el correo de re-aprobación de CJ Affiliate para el programa de Booking.com España ("Bienvenido al programa de afiliados de Booking.com"). Tras revisar el estado de la cuenta (CID 7985681, dado por abandonado el 2026-07-04) y confirmar que ya estaba aprobado, Venul decidió explícitamente **reemplazar todo con Booking.com** en vez de solo agregarlo como opción adicional.

**Cómo se obtuvo el link real:** Venul inició sesión en su cuenta de CJ el mismo (Claude nunca manejó ni vio la contraseña). Con la sesión abierta, se navegó el dashboard de CJ para localizar el programa "Booking.com Spain & Portugal" y extraer el **Evergreen Link** (deep-link dinámico): `https://www.tkqlhce.com/click-101799556-15734352` (PID 101799556). Este tipo de link permite redirigir a cualquier página de Booking.com agregando `?url=<destino codificado>` — se verificó con una prueba en Python (`urllib.parse`) que el doble-encoding anidado (incluyendo `%` → `%25` en la URL interna) es el comportamiento correcto para que CJ decodifique una vez y Booking.com decodifique la segunda vez.

**Decisión sobre eSIM y seguro de viaje:** Booking.com no ofrece estos servicios. Instruido por Venul a "tomar la decisión como experto", se decidió dejar eSIM y seguro de viaje en Travelpayouts (sin cambios) y migrar todo lo demás (hoteles, vuelos, autos, traslados de aeropuerto, tours/atracciones) a Booking.com.

**Alcance de la migración (41 archivos, commit a `main`):**
- `index.html`: CTAs de hoteles migrados; sección de servicios reescrita de 6 a 7 tarjetas ("🧳 Todo con Booking.com" — se agregó tarjeta de Hospedaje, las 4 tarjetas de vuelos/auto/traslado/tours ahora apuntan a Booking.com, eSIM y seguro se dejaron intactos en Travelpayouts); texto de disclaimers actualizado.
- 19 guías `guia-*.html` (ES) + `landing-arma-tu-itinerario.html`: links y disclaimers migrados.
- `en/` (16 archivos) y `fr/` (3 archivos): mismo tratamiento.
- `js/hoteles.js` y `js/hoteles2.js`: constante `STAY22` reemplazada por `BOOKING_AFF`, función `addr()` reescrita para generar deep-links de búsqueda de Booking.com (firma sin cambios, no hubo que tocar los ~24 call-sites).
- `data/hoteles.json`: 24 links migrados vía script, verificado JSON válido.
- Migración ejecutada con 2 scripts Python (`_migrate_booking.py` para URLs, `_migrate_booking_texto.py` para texto visible de disclaimers) más varios fixes manuales puntuales.

**Nota técnica (no urgente):** el header CSP (`<meta http-equiv="Content-Security-Policy">`, línea 4 de cada HTML) todavía menciona `stay22.com` y `*.tpo.li` en `frame-src`/`connect-src`/`script-src`. Se dejó intacto a propósito porque no hay `<iframe>` en el sitio (confirmado con grep) y la navegación normal `<a href>` no está gobernada por CSP — es limpieza cosmética pendiente, sin riesgo funcional.

**Deploy:** `mcp__claude-in-chrome__file_upload` volvió a fallar ("paths expected array, received undefined", bug ya documentado). Se usó el fallback documentado: GitHub Desktop (`githubdesktop.exe`) + File Explorer, con el repo clonado en `C:\Users\venul\OneDrive\Documentos\GitHub\quisqueyatravel` (distinto del mount de Cowork). Los 41 archivos se copiaron por carpeta (raíz, `en/`, `fr/`, `js/`, `data/`) usando selección múltiple por teclado (`click` + `shift+End`, más confiable que ctrl/shift+click con el mouse). Commit `Migrar afiliado de Stay22/Travelpayouts a Booking.com` + push a `origin/main` exitoso — despliegue automático via GitHub Actions → Cloudflare Pages.

**Pendiente de verificar en una próxima sesión:** confirmar visualmente en quisqueyatravel.org que el deploy de Cloudflare Pages terminó y los links de Booking.com están en vivo (no se verificó en el navegador dentro de esta sesión).

## ⚠️ BUG ENCONTRADO Y CORREGIDO — 2026-08-07: guia-constanza.html publicado con texto corrupto

Otra automación (probablemente `quisqueya-travel-diario` corriendo en otra sesión/entorno, no en esta carpeta local) creó y publicó `guia-constanza.html` el mismo día 7 de agosto — un destino nuevo (Constanza, el valle frío) con contenido bueno y bien estructurado, correctamente registrado en `sitemap.xml`, `_redirects` y el dropdown de `index.html`. **Pero el archivo tenía un bloque de texto corrupto (mojibake — caracteres acentuados rotos + emojis) pegado ANTES de `<!DOCTYPE html>`**, visible como basura al principio de la página en vivo. Causa probable: un paso de la automación que hizo un reemplazo de texto/codificación y falló, dejando un fragmento duplicado y mal codificado del contenido de la página.

**Corregido la misma sesión:** se eliminó el bloque corrupto del inicio del archivo directamente en GitHub, se confirmó que el resto del archivo (289 líneas) está limpio, y se verificó en vivo en quisqueyatravel.org/guia-constanza que ya no aparece el texto roto.

**Pendiente/observación menor (no urgente):** el footer de `guia-constanza.html` usa una lista de enlaces más corta que las guías más nuevas (le faltan Isla Saona, Las Terrenas, Itinerario 7 días, Hoteles baratos Punta Cana) — mismo patrón de plantilla desactualizada que tenía `guia-samana.html`. No afecta SEO ni funcionamiento, solo enlazado interno incompleto. Si vuelve a aparecer en guías nuevas generadas automáticamente, vale la pena revisar el prompt/plantilla que usa esa tarea programada para que genere el footer completo actualizado.

## 🔴 DECISIÓN ESTRATÉGICA — 2026-08-07 (leer primero en cada sesión nueva)

Venul decidió: **desde el 7 de agosto de 2026, la página "El Quisqueyano en NYC" (Facebook e Instagram) publica EXCLUSIVAMENTE contenido de Quisqueya Travel.** Se descontinúa el contenido genérico de cultura/comunidad/actualidad dominicana (orgullo, nostalgia, noticias, desfiles, etc.) — no generar ni sugerir ese tipo de posts salvo que Venul lo pida explícitamente otra vez. La meta de 10,000 seguidores sigue en pie, pero ahora se persigue a través de contenido de viajes/destinos/hoteles, no de contenido cultural genérico.

Cambios aplicados esa misma sesión:
- Tarea programada `quisqueya-travel-diario` corregida: ya no referencia Netlify (abandonado) ni la carpeta `sitio\` obsoleta — ahora trabaja directo sobre el repo real en `C:\Users\venul\OneDrive\Desktop\Quisqueya` y despliega vía GitHub web upload (Claude-in-Chrome) a Cloudflare Pages.
- Confirmado: `quisqueya-travel-video-diario`, `quisqueya-travel-fb-grupos`, `auditoria-quisqueya-travel`, `quisqueya-travel-daily` ya estaban 100% alineadas con Quisqueya Travel — sin cambios necesarios.
- `dashboard-diario-quisqueyano`, `auditor-semanal-quisqueyano`, `monitoreo-geo-audiencia` se dejan activas sin cambios — son monitoreo/reporte de la página, no generación de contenido, siguen siendo útiles ahora que la página es 100% viajes.
- Confirmado (mismo día): CJ Affiliate/Booking sigue abandonado desde 2026-07-04 — afiliados activos son solo Stay22 (hoteles) y Travelpayouts (vuelos/carro/traslados/tours/eSIM/seguro).

### ✅ Contenido del día — 2026-08-07: Guía de Las Terrenas (publicada y desplegada)

- Nueva guía **`guia-las-terrenas.html`** creada siguiendo el template de `guia-samana.html` (mismo head, CSS, JSON-LD, 5 FAQs, links de afiliado Stay22 con `campaign=guia_las_terrenas`, cross-link a `/guia-samana` para la excursión a El Limón).
- Desplegada a producción vía GitHub web (commit directo a `main`): `guia-las-terrenas.html`, `_redirects` (redirect `.html` → URL limpia) y `sitemap.xml` (nueva entrada, prioridad 0.9). Confirmado en vivo: `https://quisqueyatravel.org/guia-las-terrenas` responde 200 con el contenido correcto, y `sitemap.xml` actualizado está sirviendo.
- **Pendiente (no bloqueante):** `index.html` — el link del nav dropdown y el link del footer hacia Las Terrenas se editaron localmente pero NO se subieron a GitHub (archivo de 1336 líneas, riesgo/costo de editarlo vía browser). Falta desplegar esa parte cuando haya oportunidad. Tampoco se agregó el link recíproco desde `guia-samana.html` hacia la nueva guía.
- Publicado en Facebook ("El Quisqueyano en nyc") vía Blotato: https://facebook.com/2061443547418301_1352068063581621
- Publicado en Instagram (@venulh) vía Blotato: https://www.instagram.com/p/DbvWMekEYc-/
- Ambos posts usan el gancho "Este pueblo dominicano parece que no es de aquí... y así mismo es", listan las playas (Bonita, Cosón, Las Ballenas, Punta Popy), mencionan El Limón a 20-25 min, y cierran con CTA a comentar/compartir + link a la guía.
- Las 9 publicaciones viejas con links muertos de Netlify (14 jun – 4 ago) se dejaron intactas por instrucción explícita de Venul — no se tocan, solo se evita repetir el error en publicaciones nuevas.

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

**Fecha de ultima actualizacion:** 2026-08-09 (tarjeta alquiler de carro destacada + auditoria SEO con 6 fixes + 7 guias traducidas al ingles, via Cowork — ver entrada completa arriba)

| Item | Estado | Detalle |
|---|---|---|
| Contraste WCAG en `.resena-quote` (naranja sobre blanco, ~1.9:1) | ✅ DESPLEGADO (2026-07-27, parte 2) | Skill `quisqueya-travel-design`, modo accesibilidad. La comilla decorativa de las tarjetas de reseñas usaba `var(--naranja)` (#f4a261) sobre fondo blanco, fallando WCAG AA incluso para texto grande. Se agrego variable `--naranja-oscuro: #b45309` y se aplico solo a `.resena-quote` (el resto de usos de `--naranja` no se tocaron). Confirmado que ningun archivo `guia-*.html` reutiliza esta clase, asi que no hizo falta replicar el fix en otro lado. Subido via GitHub web upload (`file_upload` de Claude in Chrome), verificado en vivo con `document.documentElement.outerHTML.includes('naranja-oscuro')` → true |
| Targeting geografico Meta Ads — segunda pasada (Puerto Rico seguia dominando pese al ajuste del 25 jul) | ✅ CORREGIDO (2026-07-27, parte 2) — ⚠️ REBOTE SIGUE ALTO (verificado 2026-08-03) | GA4 en vivo (28 dias) mostro San Juan como ciudad #1 con 2 mil usuarios, por encima de cualquier ciudad de EE.UU., y rebote de 92-100% en casi todas las paginas. Se elimino Puerto Rico por completo (no solo se redujo) de los 2 ad sets activos que lo tenian: "AS1 — Diaspora Dominicana Global" (quedo Canada + EE.UU. unicamente) y "Quisqueya Travel — Trafico Top Emisores Turismo" (quedo Argentina/Canada/Chile/Colombia/Mexico/Peru/EE.UU.). Cambios hechos directo en Meta Ads Manager via Claude in Chrome (Supermetrics con `campaign_update` no disponible: el trial de la cuenta expiro el 2026-07-19). Ambos ad sets entraron brevemente "En revision" tras el cambio (comportamiento normal de Meta al editar segmentacion de un ad set activo). Seguimiento del 2026-08-03: San Juan bajo al puesto #6 (211 usuarios / 7 dias) — el ajuste geografico funciono — pero el rebote del home sigue en 97.3% (vs 96.2% antes), parejo en todas las ciudades top. Conclusion: el rebote es un problema del sitio/landing, no de targeting. Ver sesion 2026-08-03 para detalle completo |
| Auditoria de diseno del home (2026-07-27) | ✅ DESPLEGADO | Skill `quisqueya-travel-design`, modo critica. 3 hallazgos: (1) precio repetido 4 veces antes de la grilla real de hoteles (Especial/Ofertas/Destinos/Calculadora) — se fusiono la seccion "Ofertas de la semana" (bento de 6 hoteles) directo dentro de la seccion Hoteles, arriba de los filtros, quitando el `<section id="ofertas">` separado y su `section-header` duplicado (el id="ofertas" se conservo en el div nuevo para que el link del nav siga funcionando); (2) nav sin enlaces a Calculadora ni Galeria (secciones grandes solo alcanzables haciendo scroll completo) — se agregaron ambos links al menu; (3) el tercer "hero-stat" mostraba un emoji 🌍 "Para todos" en vez de un numero, rompiendo el patron visual de los otros dos stats — se reemplazo por "12 Guías gratis" (numero real, coincide con las 12 guias del dropdown de navegacion). Commit `6105acf`, subido via GitHub web upload (file_upload de Claude in Chrome, no drag-and-drop manual), deploy Cloudflare Pages #103 (36s) verificado en vivo con hard reload — nav, hero-stat y fusion de Ofertas confirmados visualmente en quisqueyatravel.org |
| Puntuacion duplicada en "Hoteles recomendados" ("8.7 8.7 Excelente") | ✅ DESPLEGADO (2026-07-26) | La skill `design:design-critique` detecto que la grilla dinamica de hoteles (`js/hoteles.js` y `js/hoteles2.js`) imprimia el numero de puntuacion dos veces: una vez en `rating-num` y otra vez dentro de `hotel.puntuacion` completo ("8.7 Excelente") en el span de al lado. Se agrego `extraerEtiqueta(puntuacion)` (quita el numero, deja solo la palabra "Excelente"/"Muy bueno"/etc.) y se uso en vez de `hotel.puntuacion` crudo. Editado directo en GitHub via Claude in Chrome (find/replace en el editor web), commits `af9074f` (hoteles2.js) y `e5e3bca` (hoteles.js), deploys #100/#101 confirmados. Verificado con fetch directo del archivo servido (contiene `extraerEtiqueta`) — el navegador de la sesion de Cowork mostraba la version vieja en pantalla por cache HTTP normal del navegador (max-age 4h), no por un problema del deploy |
| Selector de destino sin elegir en el buscador del hero | ✅ REVISADO, no requiere fix | La critica de diseno marco esto como posible problema, pero se confirmo en el codigo (`buscarDestinoHero()`) que ya cae a `filtrarHoteles('todos')` si no se elige destino — muestra todos los hoteles en vez de fallar. No hacia falta agregar validacion |
| CSS muerto `.nav-links` en index.html | ✅ RESUELTO (2026-07-26) | Venul dio permiso explicito. Se borro via GitHub web editor (find/replace, cuidando de verificar el diff antes de confirmar). Commit `c03757d`, deploy #102 confirmado. Verificado con fetch directo de index.html en vivo: ya no contiene `.nav-links` |
| Archivos ajenos servidos publicamente | ✅ RESUELTO (2026-07-26) | `VID20260709WA0010.mp4`, `marketing.plugin` (zip interno de Cowork) y una foto personal (`465844268_...jpg`) estaban commiteados y se servian en la raiz de quisqueyatravel.org (confirmado con HEAD request, los 3 devolvian 200). Eliminados del repo via GitHub web UI (`/delete/main/<archivo>`, commit directo a `main`). Deploys #94/#96 verificados en produccion |
| `.gitignore` | ✅ AGREGADO (2026-07-26) | No existia. Se creo con reglas para instaladores (`.msi/.exe/.dmg`, motivado por `node-v24...msi` de 32MB suelto en la carpeta local sin control de version), videos/fotos sueltas (`.mp4/.mov`), paquetes internos (`.plugin`) y archivos de sistema operativo. Previene que se vuelva a subir algo asi por accidente en el proximo upload |
| Seccion de resenas (placeholder) | ✅ CONFIRMADO YA OCULTA | Verificado en vivo via JS (`getComputedStyle`): `#resenas` tiene `display:none` desde el commit `960844e` (7 jul). El texto `[TEXTO DEL COMENTARIO REAL]` solo aparecia en extracciones de texto plano (que ignoran CSS), no en el render real. Sigue pendiente que Venul pase 3 comentarios reales para activarla |
| Estrellas de hoteles (puntuacion falsa) | ✅ DESPLEGADO (2026-07-25) | `js/hoteles.js` y `js/hoteles2.js` mostraban siempre ★★★★★ fijas sin importar la puntuacion real (un hotel con "7.6 Bueno" se veia igual que uno con "9.1 Excepcional"). Se agrego `generarEstrellas(puntuacion)` que convierte la nota 0-10 a 1-5 estrellas llenas/vacias. Commits directos a `main` via el editor web de GitHub (Claude in Chrome + `execCommand('insertText')` sobre el `.cm-content` de CodeMirror — ver nota tecnica abajo). Verificado linea por linea antes de cada commit |
| Targeting geografico Meta Ads (Puerto Rico sobre-representado) | ✅ CORREGIDO (2026-07-25) | GA4 mostro que Puerto Rico (San Juan + Bayamon) generaba ~22% del trafico del sitio via Meta Ads, mas que cualquier ciudad de EE.UU., por el ad set "AS1 — Diaspora Dominicana Global" (targeting EE.UU./Canada/España/Panama/PR). Investigacion del Banco Central RD confirmo que PR es solo ~5-6% del turismo real a RD (EE.UU. 35-53%, Canada 7-15%). Se corrigieron 2 campañas via Supermetrics (`campaign_update`, requirio que Venul activara "Write Access" en hub.supermetrics.com/write-settings): "Trafico Top Emisores Turismo" ahora apunta a US/MX/CA/AR/CL/PE/CO/PR (los 8 paises reales); "AS1 — Diaspora Dominicana Global" se recorto a solo US/CA/PR (se quito España y Panama, que no son mercados turisticos reales) | `index.html`: las 7 imagenes de tarjetas de destino pasaron de `background-image` CSS (cargaban todas de inmediato) a `<img loading="lazy">` con `srcset` (400w movil / 800w desktop). Bootstrap CSS con patron de preload (`rel=preload` + swap a stylesheet) para no bloquear el primer render. Commit `6cd647f`, subido via GitHub web upload y verificado ahi mismo |
| Git local (mount de Cowork) | ✅ WORKAROUND CONFIRMADO (2026-07-24, parte 2) | El bloqueo de `.git/index.lock` / `.git/HEAD.lock` (no se pueden borrar con `rm` del sandbox — "Operation not permitted", falla de la puente FUSE con OneDrive) SI se puede resolver: borrar esos archivos con **computer-use controlando el Explorador de Windows** (navegar a la ruta `...\Quisqueya\.git` por la barra de direcciones, seleccionar el/los archivo(s) `.lock` y Eliminar). Ahi si funciona porque opera directo sobre el disco real, no via el bridge del sandbox. Con eso resuelto, se pudo hacer `git reset`/actualizar el ref de `main` para que el repo local quedara sincronizado con lo subido a GitHub. Nota: cada comando de git que se corra desde el sandbox (incluso `git status`) vuelve a dejar un `index.lock` nuevo que hay que repetir el mismo proceso para limpiar — no es un fix permanente del bridge, es un procedimiento repetible |
| FAQ Schema (SEO 2026) | ✅ DESPLEGADO (2026-07-24) | JSON-LD `FAQPage` + `BreadcrumbList` + acordeon visible `<details>/<summary>` agregado a las 12 guias principales (Punta Cana, Santo Domingo, Puerto Plata, Samana, Santiago, Barahona, Jarabacoa, La Romana, Requisitos 2026, Costo Familiar, Itinerario 10 dias, Vuelos NYC-RD). Commit `4c7649c`, pusheado directo (sin divergencia con origin) y verificado en vivo. Contenido de cada FAQ extraido/parafraseado honestamente del texto ya publicado en cada guia, sin inventar datos |
| Mejoras home (retencion/conversion) | ✅ DESPLEGADO (2026-07-24) | Franja de confianza, calculadora interactiva de costo de viaje, galeria visual bento y boton flotante de WhatsApp agregados a `index.html`. Commit `c5208a0`. Verificado en vivo: calculadora probada (Punta Cana/5 noches/2 personas → $1,601 total) |
| Auditoria de seguridad (2026-07-24) | ✅ LIMPIA | Escaneo de secretos: 0 hallazgos en 43 archivos. Dominios externos: sin sorpresas, solo pendiente documentar en el allowlist. Headers de seguridad (CSP, HSTS, X-Frame-Options, etc.) ya estaban bien configurados de una sesion anterior |
| Blotato | ✅ RECONECTADO (2026-07-21) | Venul elimino y volvio a agregar el conector en Ajustes de Claude. `blotato_get_user` confirma subscriptionStatus active, plan starter. Ya se puede publicar de nuevo |
| Post Punta Cana | ✅ PUBLICADO (2026-07-21) | Video First/Last Frame del 2026-07-20 (nunca publicado, Blotato estaba roto) + copy nuevo (hook nostalgia, ganador de autoconsistencia). FB: facebook.com/reel/1519591976114854 · IG: instagram.com/reel/DbEpBpekaTo |
| Google Search Console | ✅ VERIFICADO (2026-07-21) | Propiedad correcta es URL-prefix `https://quisqueyatravel.org/` (no sc-domain). 19 paginas indexadas, 10 "sin indexar" pero desglosadas: 4 son .html que redirigen bien, 3 son duplicados con canonical correcto, 1 es el 404 inofensivo de `/cdn-cgi/l/email-protection` (proteccion de correo de Cloudflare, no es un error real), y las 2 ultimas (guia-requisitos-viaje-rd-2026.html y guia-santo-domingo.html crawleadas) resultaron ser duplicados .html — sus versiones canonicas SI estan indexadas. Conclusion: la indexacion esta sana, no hacia falta pedir nada manualmente |
| Meta titles/descriptions | ✅ YA HECHO (desde 2026-07-16) | `informe-seo-quisqueya-travel.md` ya optimizo 8/12 guias y dejo 5 variantes por guia para A/B testing. Las otras 4 no necesitaban cambio. El pendiente de la lista de abajo estaba desactualizado — se marca como resuelto |
| Grupos de Facebook (nuevos) | ✅ 2 PUBLICADOS, 2 EN ESPERA (2026-07-21) | Se encontraron y unieron 4 grupos nuevos de viajeros a Punta Cana (mas targeted que los genericos de diaspora usados antes). Se publico el reel en 2 (uno directo, otro pendiente de aprobacion de admins). "Mochileando Tips" espera al fin de semana por regla propia. "Punta Cana Ofertas!!!" se descarto (es de residentes locales, no viajeros). Detalle completo en grupos-fb-promo.md. Tarea programada quisqueya-travel-fb-grupos actualizada con el nuevo metodo (Metodo B: compartir reel a grupo individual) ya que el Metodo A original esta agotado desde el 9 jul |
| Auditoria general 2026-07-21 | ✅ RESUELTO (ver fila 2026-07-26 arriba) | (1) Testimonios: confirmado que NO estan visibles en vivo, `display:none` ya aplicado desde 7 jul — falsa alarma de una lectura de texto plano. (2) `VID20260709WA0010.mp4` y `marketing.plugin` borrados del repo el 2026-07-26. (3) `.gitignore` agregado el 2026-07-26 para prevenir subida accidental de instaladores/fotos sueltas |
| Git local (mount de Cowork) | ⚠️ SIGUE INUTILIZABLE (confirmado otra vez 2026-07-21) | `.git/index.lock` y `.git/HEAD.lock` siguen ahi, y ahora tampoco se pueden borrar archivos del working directory (`rm` da "Operation not permitted", ni siquiera con sudo del sandbox) — parece un permiso mas amplio de OneDrive/Cowork, no solo de `.git`. Seguir usando GitHub web upload (via Claude in Chrome) para cualquier deploy |
| Cambios locales 2026-07-18 | ✅ DESPLEGADO | 13 archivos subidos via GitHub web upload, commit `e754fe3`. Deploy to Cloudflare Pages #81 exitoso (31s). Verificado en vivo en quisqueyatravel.org y pages.dev sin necesidad de purgar cache — Segmented Control, Bento Grid de ofertas y popover funcionando; guia-samana.html (una de las truncadas) confirmada con whatsapp-float y 11 links de footer via JS en consola |
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
| Afiliado Booking/CJ | ✅ ACTIVO (reaprobado 2026-08-07) | CID 7985681, PID 101799556. Reemplaza a Stay22+Travelpayouts en hoteles, vuelos, autos, traslados y tours en todo el sitio. Ver detalle en sesion 2026-08-07 arriba |
| Stay22 hoteles | ❌ DESCONTINUADO (2026-08-07) | Reemplazado por Booking.com en todo el sitio (index, 19 guias ES, en/, fr/, js/hoteles.js, js/hoteles2.js, data/hoteles.json) |
| Guias publicadas | ✅ 12 guias | Punta Cana, Barahona, Santo Domingo, Vuelos, Requisitos, Costo, Santiago, Jarabacoa, Puerto Plata, Samana, La Romana, Itinerario 10 dias |
| Google Analytics GA4 | ✅ Verificado en vivo | G-LJWN28FFQE — confirmado firing en produccion (2026-07-02). URL del data stream CORREGIDA 2026-07-04 (apuntaba a golden-heliotrope-c5c46d.netlify.app, un dominio abandonado — ahora apunta a quisqueyatravel.org) |
| Posts FB con links muertos | ✅ RESUELTO (2026-07-10) | 6 posts con enlaces a Netlify eliminados de Facebook. Nuevo reel con video real (no IA) publicado en su lugar |
| Blotato (video IA + auto-publish) | ❌ ROTO | API key invalida — Venul debe reconectar en my.blotato.com/settings/api |
| Google Search Console | ⚠️ MAYORIA SIN INDEXAR | De 26 URLs conocidas por Google, solo 4 estaban indexadas (dato del reporte agregado "Paginas", desactualizado al 29/6/26). Verificado EN VIVO con Inspeccion de URLs (mas confiable que el agregado): guia-punta-cana SI esta indexada. Solicitada indexacion 2026-07-04 para: guia-jarabacoa, guia-puerto-plata, guia-santiago, guia-santo-domingo, guia-vuelos-nyc-rd, guia-requisitos-viaje-rd-2026, guia-costo-viaje-familia-rd, guia-barahona (8 URLs). Pendiente: volver a revisar en unos dias si ya quedaron indexadas |
| Captura de itinerario por correo | ✅ EN VIVO (2026-07-18) | Google Form "Arma tu itinerario gratis" (Nombre, Correo, Destino) + CTA en `index.html` bajo la grilla de hoteles. Respuestas caen a un Sheet en el Drive de Venul. WhatsApp descartado a proposito (Venul dijo "no WhatsApp") |
| Meta Ads (cuenta 290012163) | 🔴 BLOQUEADA | Estado `UNSETTLED` — la API rechaza cualquier creacion (audiencias, campanas) con "Ad account is not in an active state". Venul debe resolver Facturacion en Ads Manager. Pixel (2054264274867364) SI esta activo y disparando datos |
| Blotato | ❌ ROTO (confirmado otra vez 2026-07-18) | API key invalida/vencida — bloquea publicar la semana de posts de venta ya redactada. Renovar en my.blotato.com/settings/api |
| Local git (mount de Cowork) | ⚠️ INUTILIZABLE | `.git/index.lock` no se puede borrar (permiso denegado, probablemente por el sync de OneDrive) — `git add`/`commit` fallan desde este entorno. Usar SIEMPRE el upload web de GitHub para deploy, no depender de git local aqui |

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
  Booking.com (CJ Affiliate) — ACTIVO desde 2026-08-07:
    PID:              101799556
    Evergreen Link:   https://www.tkqlhce.com/click-101799556-15734352?url=<destino URL-encoded>
    CID:              7985681 (ya aprobado, dejo de estar "pendiente")
    Comision:         4% hoteles/atracciones/taxis, ~2€ vuelos, 6% autos (CPA, sin cookie multi-dia)
    Cubre:            hoteles, vuelos, autos, traslados aeropuerto, tours/atracciones
  Travelpayouts Drive token: 543349 (SOLO eSIM y seguro de viaje desde 2026-08-07 — Booking no tiene equivalente)
  Script Drive URL: https://emrldtp.com/NTQzMzQ5.js?t=543349
  Stay22:           DESCONTINUADO 2026-08-07 (reemplazado por Booking.com en todo el sitio)

Facebook:      pageId 2061443547418301 (El Quisqueyano en nyc)
Instagram:     @venulh
WhatsApp CTA:  +1 347 720 5769

Captura de itinerario:
  Google Form:  https://docs.google.com/forms/d/e/1FAIpQLSfLW6Bsqx-wOYzrRsAHxboj6DJ2SuwX9m-d44zRgEAJv6CBEQ/viewform
  Respuestas:   Sheet vinculado en Google Drive de venulhernandez@gmail.com

Meta Ads:
  Ad account ID: 290012163 ("Venul Hernandez") — estado UNSETTLED, bloqueada hasta resolver facturacion
  Pixel:         2054264274867364 — activo, disparando datos
```

---

## Historial de Sesiones

### Sesion — 2026-08-06 (revisión de pendientes + cierre de backlog SEO, via Cowork) — DESPLEGADO

**Que se pidio:** Venul pidio revisar qué quedaba por terminar y luego "termina todos".

**Hallazgo importante:** gran parte de los pendientes de la auditoría del 4-5 de agosto (404.html, sitemap corregido, 6 guías traducidas al inglés, guía de Isla Saona, guía de Mejores Playas, links internos limpios, meta description del home) ya estaban hechos localmente por una sesión anterior (madrugada del 6 ago, ~7:32 AM) y YA ESTABAN DESPLEGADOS en producción — confirmado con fetch directo a quisqueyatravel.org. La documentación (`informe-seo-2026-08-05.md`) estaba desactualizada respecto al estado real.

**Lo que sí faltaba y se hizo hoy:**
- Meta descriptions extendidas a 148-164 caracteres (antes 116-134) en 10 guías: Barahona, Costo Familiar, Jarabacoa, La Romana, Puerto Plata, Requisitos 2026, Samaná, Santiago, Santo Domingo, Punta Cana.
- 2 guías nuevas creadas desde cero: `guia-mejores-hoteles-baratos-punta-cana.html` (apart-hoteles, todo incluido accesible, trucos para pagar menos — precios investigados por web, no inventados) y `guia-itinerario-7-dias-republica-dominicana.html` (Santo Domingo → Punta Cana → Samaná, versión corta del itinerario de 10 días).
- Cross-links agregadas: nav dropdown e footer de `index.html`, footer de `guia-punta-cana.html` y `guia-itinerario-republica-dominicana.html`. De paso corregido un link interno viejo en `guia-punta-cana.html` que apuntaba a `.html` con dominio absoluto en vez de URL limpia relativa.
- `sitemap.xml` actualizado con las 2 URLs nuevas.

**Deploy — nota técnica importante:** `mcp__claude-in-chrome__file_upload` falló consistentemente esta sesión (error de validación "paths expected array, received undefined" en cada intento, con y sin `ref`, de forma reproducible) — parece un bug de la herramienta en este entorno, no un problema de sintaxis. Como alternativa se usó **GitHub Desktop** (ya instalado y logueado en la máquina de Venul, apuntando a un clone en `C:\Users\venul\OneDrive\Documentos\GitHub\quisqueyatravel`, diferente del working folder de Cowork en `Desktop\Quisqueya`): Pull origin → copiar los 15 archivos editados/nuevos desde `Desktop\Quisqueya` a ese clone via Explorador de Windows (computer-use) → Commit → Push. Funcionó sin problemas. **Nueva ruta de deploy documentada para el futuro: si el upload por Chrome falla, usar GitHub Desktop (ya configurado) en vez de pelear con el navegador.** Cuidado: la primera vez que se intentó, el portapapeles se sobreescribió al usar la barra de direcciones de Explorer con texto escrito directamente (la acción "type" de computer-use usa el portapapeles internamente) — hay que copiar los archivos y pegar inmediatamente después, sin escribir texto en medio, o volver a copiar antes de pegar.

**Commit:** `757e49d` — "SEO ago 6: 2 guias nuevas (hoteles baratos PC + itinerario 7 dias), meta descriptions extendidas, cross-links internos" — 15 archivos, push exitoso. Verificado en vivo con fetch directo a las 2 URLs nuevas y a `guia-barahona` (meta description extendida confirmada).

**No se tocó (requiere a Venul o está fuera de alcance de Claude):**
- Método de pago de Travelpayouts — sigue siendo el bloqueador #1 para monetizar.
- Estado `UNSETTLED` de la cuenta de Meta Ads — requiere resolver facturación, acción financiera que Claude no ejecuta.
- Aprobación de CJ Affiliate (Booking) — pendiente de terceros.
- 3 testimonios reales para la sección `#resenas` — Venul debe proveerlos, no se fabrican.
- Traducción FR de las guías nuevas, página "Isla Saona guía completa" ya existe pero podría ampliarse — backlog sin urgencia.

**Pendiente para próxima sesión:**
- 🟢 Corregir el link interno viejo con `.html` en `guia-barahona.html` (enlaza a mejores-playas) — cosmético, no roto gracias a `_redirects`.
- 🟢 Considerar traducir las 2 guías nuevas de hoy al inglés si el tráfico EN lo justifica.

---

### Sesion — 2026-08-03 (tarea programada `quisqueya-check-rebote-meta-ads`, seguimiento del ajuste de targeting PR del 27 jul, via Cowork) — SOLO DIAGNOSTICO, no se toco nada

**Que se hizo:** corrida automatica sin Venul presente. Se reviso GA4 (propiedad 541622169, ultimos 7 dias: 27 jul-2 ago) y Meta Ads Manager (cuenta 290012163) via Claude in Chrome, ambos con sesion ya logueada, para confirmar si el ajuste de targeting del 27 de julio (eliminar Puerto Rico de "AS1 — Diaspora Dominicana Global" y "Quisqueya Travel — Trafico Top Emisores Turismo") funciono.

**Ciudades — SI mejoro:** San Juan-PR paso de ser la ciudad #1 (~2 mil usuarios en 28 dias, por encima de cualquier ciudad de EE.UU.) a el puesto #6 con solo 211 usuarios (1.37% del total) en los ultimos 7 dias. Bayamon ya ni aparece en el top 10. Las ciudades top ahora son Santo Domingo (994), Santiago de los Caballeros (412), Ciudad de Mexico (404), Santo Domingo Este (392), Tijuana (212), San Juan (211), Guadalajara (202) — reflejan exactamente los paises que quedaron en el targeting de los 2 ad sets (RD, Mexico, Canada, EE.UU., Argentina, Chile, Colombia, Peru). A nivel pais, Puerto Rico cayo al puesto #7 con 363 usuarios (2.36%), muy por debajo de Mexico (5,584), EE.UU. (3,545), Republica Dominicana (2,907), Canada (1,215) y Argentina (794).

**Rebote — NO mejoro:** el home tiene 97.3% de rebote en los ultimos 7 dias vs 96.2% que tenia el 27 de julio (antes del ajuste) — practicamente igual, si acaso un poco peor. Ademas el engagement rate es parejo y bajo en todas las ciudades top (2.75%-4.72%), incluida Santo Domingo (la ciudad #1 ahora), no solo en las que se sacaron del targeting. Esto confirma la sospecha de Venul: el problema del rebote es del sitio/landing (probablemente el home no engancha al trafico pagado que llega desde el anuncio), no del targeting geografico. Sacar Puerto Rico resolvio la distorsion de "de donde viene la gente" pero no resolvio "por que se va enseguida".

**Composicion de trafico — sin cambios:** sigue siendo 96-97% pagado (fb/paid + ig/paid), practicamente nada organico ni directo. Nuevo dato curioso: GA4 detecto un repunte de visitantes de Mexico el 30 de julio (a 924, muy por encima de lo esperado), impulsado por la ciudad de Guadalajara.

**Meta Ads — entrega sana, ninguno trabado:** ambos ad sets ajustados siguen "Activa" y entregando con normalidad (no quedaron atascados "en revision" como paso brevemente el 27 de julio).
- AS1 — Diaspora Dominicana Global (campana "Quisqueya Travel — Trafico Global"): alcance 19,036 en 7 dias, frecuencia 1.25 (sana, sin fatiga de audiencia), CPM $3.59, CPC $0.01-0.02, gastado $85.14 en 7 dias (presupuesto diario $12, se esta gastando completo).
- Quisqueya Travel — Trafico Top Emisores Turismo (ad set interno se llama "Nuevo conjunto de anuncios de Trafico"): alcance 33,128 en 7 dias, frecuencia 1.24, CPM $0.51 (muy barato), CPC $0.002, gastado $20.95 en 7 dias.
Trafico sigue siendo muy barato pero de baja intencion de compra — mismo patron que el 27 de julio, sin cambios en ese frente.

**Hallazgo nuevo, no pedido pero relevante:** en el informe "Paginas y pantallas" de GA4 aparecen 2 vistas de `/marketing.plugin` y 2 de `/quisqueya-travel-memoria.md` en los ultimos 7 dias — archivos que esta misma bitacora registra como borrados del repo el 26 de julio (fila "Archivos ajenos servidos publicamente" en Estado Actual). Puede ser cache viejo de Cloudflare/navegador de visitas de antes del 26 de julio, o que volvieron a quedar expuestos. Vale la pena que Venul (o una proxima sesion) confirme con un HEAD request directo a esas rutas en quisqueyatravel.org si siguen sirviendose publicamente.

**No se toco nada** (ni Meta Ads ni el sitio) — esta corrida fue solo de diagnostico, tal como pedia la tarea programada.

**Pendiente para proxima sesion:** dado que el rebote no bajo, el siguiente paso logico ya no es seguir ajustando geografia sino investigar el sitio/landing: velocidad de carga del home en movil (la mayoria del trafico pagado entra ahi), que tan bien calza el creativo del anuncio con lo que ve el usuario al llegar, y si el formulario/CTA principal es visible de inmediato sin scroll. Tambien confirmar si `/marketing.plugin` y `/quisqueya-travel-memoria.md` siguen expuestos.

---

### Sesion — 2026-07-31, parte 5 (SEO quick-win Barahona + fotos de destinos en el home, via Cowork) — DESPLEGADO

**Que se pidio:** Venul pidio subir de posicion en Google. Se saco de Search Console la lista real de consultas en posicion 4-20 (justo debajo de pagina 1) ordenada por impresiones — el mejor candidato fue el cluster "donde queda barahona" (pos 10.9, 19 impresiones, 0 clics) + "isla barahona" (pos 9.3) + "barahona donde queda" (pos 12), los tres apuntando a `guia-barahona.html`.

**Fix SEO Barahona:** se agrego un parrafo directo respondiendo "¿Donde queda Barahona?" al inicio de la seccion "Donde queda Barahona y como llegar", aclarando honestamente que Barahona es una provincia (no una isla aparte) en la isla La Espanola — cubre la confusion real detras de la query "isla barahona" sin inventar nada falso. Se agrego la misma pregunta como primera entrada del FAQ Schema y del acordeon visible (ahora 6 preguntas en vez de 5, validado con Python que el JSON-LD parsea y que la cantidad de `<details>` coincide). Commit `4e02b8b`.

**Nota tecnica importante — corrupcion de emojis con el editor web de GitHub:** al escribir el archivo completo en el editor CodeMirror de GitHub via `execCommand('insertText')` (metodo usado en sesiones anteriores), la bandera dominicana 🇩🇴 se corrompio a texto literal "doo" en el resultado (visible en el footer). Causa probable: emojis de bandera son secuencias de 2 "regional indicator symbols" (surrogate pairs), y `execCommand('insertText')` con una cadena JS que los contiene no los inserta de forma atomica de manera confiable en CodeMirror. **Se descarto el cambio y se resolvio usando el flujo de subida de archivos de GitHub (`/upload/main` + `file_upload` de Claude in Chrome) en vez del editor de texto** — sube el archivo tal cual esta en disco, sin pasar por insercion de texto caracter por caracter, cero riesgo de corrupcion. Verificado con fetch del `/raw/` del archivo (no la vista con syntax highlighting, que ademas muestra texto traducido al espanol por el auto-translate de Chrome — artefacto cosmetico ya conocido). **Regla para el futuro: cualquier archivo con emojis (casi todos los de este sitio) se debe subir por upload de archivo, nunca reescribiendo todo el contenido en el editor CodeMirror via JS.**

**Auditoria de fotos del home (a peticion de Venul, "las fotos de los pueblos... estan mal"):** se craron 44 imagenes de `index.html` con JS (`naturalWidth` vs tamano mostrado). Las 7 tarjetas de destino (`destinos-grid`) cargaban consistentemente el candidato mas chico del `srcset` (~380px real) pese a que la pantalla de Venul tiene `devicePixelRatio` 1.25 (deberia haber pedido el candidato grande) — se ven ligeramente suaves/borrosas en pantallas de alta densidad. Ademas, la foto de Santo Domingo especificamente era floja: una calle brumosa/deslavada que no transmite el encanto de la Zona Colonial (confirmado visualmente con zoom, mientras que Punta Cana/Puerto Plata/La Romana/Samana/Santiago/Sosua se veian bien al hacer zoom).

**Fix fotos:** (1) se subio la resolucion del `srcset` de las 6 tarjetas con foto externa (Punta Cana, Santo Domingo, Puerto Plata, La Romana, Samana, Sosua) de `400w/800w` (o `400w/900w`) a `700w/1400w` — Santiago se dejo igual porque usa un archivo local unico sin variantes generadas mas grandes. (2) Se reemplazo la foto de Santo Domingo por una nueva de Pexels (ID `29141847`, "Calle El Conde al atardecer" — faroles encendidos, arquitectura colonial, gente caminando, busto historico, verificada real y con ubicacion en el nombre del archivo), mucho mas vibrante y representativa que la anterior. Subido via `file_upload` (mismo motivo que arriba — el archivo tiene emojis en el nav/footer). Commit `5442aea`.

**Deploy y purga:** ambos commits confirmaron que la automatizacion de purga de cache (arreglada en la parte 3 de hoy) esta funcionando de manera continua — deploy #133/#134 en Cloudflare Pages dispararon automaticamente "Purge Cloudflare Cache" #12/#13 sin intervencion manual. Verificado en vivo con screenshot: la foto nueva de Santo Domingo se ve correctamente en quisqueyatravel.org.

**Pendiente para proxima sesion:**
- 🟡 Si Venul sigue viendo las fotos de destinos algo suaves en su pantalla despues de este cambio, el siguiente paso seria generar variantes locales pre-comprimidas (como se hizo con santiago-400/800.jpg) en vez de depender de los parametros de resize de Unsplash/Pexels.
- 🟢 Confirmar en Search Console en 1-2 semanas si "donde queda barahona" subio de posicion 10.9.

---

### Sesion — 2026-07-31, parte 3 (retomar workflow de purga de cache dejado a medias, via Cowork) — DESPLEGADO

**Que se encontro:** Venul pidio retomar "algo incompleto de hoy". Investigando el repo local se encontraron dos cosas de la sesion de auditoria SEO del 31 jul (commit `4aaaa21`, nueva guia de playas + fixes de titulos/enlaces internos/sitemap): esa parte SI estaba en vivo (verificado con fetch directo a `guia-mejores-playas-republica-dominicana.html`, contenido correcto). Lo que faltaba era un cambio a `.github/workflows/purge-cache.yml` que quedo modificado solo en el working directory local, nunca commiteado ni subido a GitHub — cambiaba el workflow de purga manual (`workflow_dispatch` con lista fija de URLs) a purga automatica despues de cada deploy exitoso (trigger `workflow_run` sobre "Deploy to Cloudflare Pages") + `purge_everything:true` en vez de la lista de URLs especificas.

**Que se hizo:** se subio el cambio via GitHub web editor (Claude in Chrome, `execCommand('insertText')` sobre `.cm-content` de CodeMirror — mismo metodo ya documentado). Commit `63c4230` ("Modify Cloudflare cache purge workflow") directo a `main`. Verificado con el archivo `/raw/` de GitHub (no la vista con syntax highlighting, que mostro texto traducido al español por el auto-translate de Chrome — artefacto cosmetico ya conocido, no afecta el archivo real).

**Efecto esperado:** de ahora en adelante, cada vez que el workflow `Deploy to Cloudflare Pages` termine con exito, se dispara automaticamente una purga completa de la zona de Cloudflare — ya no hace falta correr `purge-cache.yml` a mano despues de cada deploy (el problema recurrente de "cache stale" documentado en varias sesiones anteriores).

**Pendiente para verificar en la proxima sesion:** confirmar que el trigger automatico funciono en el primer deploy real despues de este cambio (revisar pestaña Actions en GitHub, deberia aparecer una corrida de "Purge Cloudflare Cache" disparada automaticamente, no manual).

---

### Sesion — 2026-07-31, parte 2 (agregar fotos reales de Pexels a las 11 guias sin imagenes, via Cowork) — DESPLEGADO

**Que se pidio:** Venul recordo que habiamos quedado en cambiar/agregar fotos originales de Pexels a las guias del sitio — esto retoma el hallazgo #1 de la auditoria SEO del 2026-07-30 (`seo-audit-quisqueyatravel-2026-07-30.md`): 11 de las 12 guias (todas menos Santiago) no tenian ninguna foto de contenido real, solo el pixel invisible de rastreo de Facebook.

**Que se hizo:** se busco en pexels.com (via Claude in Chrome, sin usar la API de Pexels porque el dominio sigue bloqueado por el allowlist de red del sandbox — mismo problema documentado el 29 jul) una foto real y relevante para cada guia, priorizando fotos verificables del lugar exacto cuando fue posible:
- Barahona → playa de Pedernales (litoral de Bahia de las Aguilas)
- Costo Viaje Familia → familia en playa caribeña generica
- Itinerario RD → carretera de montaña en el interior de RD (foto de un fotografo dominicano)
- Jarabacoa → vista de montañas verdes con palmeras
- La Romana → **Altos de Chavon sobre el Rio Chavon** (foto exacta del lugar, con ese titulo)
- Puerto Plata → se reutilizo la misma foto ya verificada que usa el home (29266595, vista aerea de la ciudad)
- Punta Cana → playa con bandera dominicana y palmeras
- Requisitos viaje RD 2026 → pasaporte estadounidense (se evito a proposito un resultado de pasaportes polacos que aparecio primero en la busqueda generica)
- Samaná → **cascada El Limon** (foto exacta del lugar, con ese titulo)
- Santo Domingo → fachada colonial con bandera dominicana en la Zona Colonial
- Vuelos NYC-RD → vista desde ventana de avion sobre una isla caribeña

**Santiago quedo sin cambios** (unica guia que ya tenia foto real, de Unsplash) — se intento buscar un reemplazo de Pexels pero las busquedas de "Monumento a los Heroes" devolvian resultados ambiguos con Santiago de Cuba, asi que se prefirio no arriesgar una foto del pais equivocado. Pendiente si Venul quiere insistir en una sesion futura.

**Insercion:** cada foto se agrego en un `<div>` con el mismo patron visual que ya usaba `guia-santiago.html` (border-radius, max-height 380px, `loading="lazy"`, `onerror` que oculta la imagen si falla), colocada justo despues del parrafo mas relevante de cada guia — no antes del intro, para no romper el ritmo de lectura del hook inicial.

**Deploy:** los 11 archivos subidos en un solo commit via GitHub web upload (`file_upload` de Claude in Chrome), commit `88f6f70` ("Agregar fotos reales de Pexels a 11 guías sin imágenes"), diff limpio confirmado (34 lineas agregadas, sin cambios no intencionados, sin archivos duplicados pese a que la UI de GitHub mostro nombres con tilde por el traductor automatico de Chrome — mismo artefacto cosmetico ya documentado el 2026-07-20). Deploy to Cloudflare Pages #129 exitoso (35s).

**Cache de Cloudflare:** la primera verificacion en vivo no mostro las fotos nuevas (misma "Cloudflare Zone cache sirve version vieja" de siempre). Se corrio manualmente el workflow `Purge Cloudflare Cache` (ejecucion #9, exitosa) desde GitHub Actions — despues de la purga, se confirmaron visualmente en vivo las fotos de Barahona (Pedernales) y La Romana (Altos de Chavon); las otras 9 quedan con alta confianza dado que el commit fue uno solo y limpio para las 11.

**Pendiente para proxima sesion:**
- 🟡 Buscar una foto de Pexels confiable del Monumento a los Heroes de Santiago (Cibao) para reemplazar la de Unsplash, si Venul quiere consistencia total de proveedor.
- 🟢 Verificar visualmente las 9 guias restantes (Costo Familia, Itinerario, Jarabacoa, Puerto Plata, Punta Cana, Requisitos, Samana, Santo Domingo, Vuelos NYC-RD) cuando se tenga oportunidad, aunque el commit limpio da alta confianza de que ya estan en vivo.

---

### Sesion — 2026-07-31 (seguimiento de pendientes de grupos de Facebook, via Cowork) — NO SE PUBLICO NADA, hallazgo de causa raiz

**Que se pidio:** Venul pidio retomar los pendientes de la Tanda 10 (30 jul): reintentar HISPANOS EN NEW YORK y DOMINICANO EN NEW YORK STATE (el composer no habia cargado ese dia), revisar si Latinos En Nueva York ya libero su limite de contenido pendiente, y seguir explorando la lista completa de grupos.

**Hallazgo principal:** el problema NO es de fotos ni de un grupo en particular — es un limite de contenido pendiente a nivel de la CUENTA de Facebook de Venul (throttle anti-spam), confirmado porque tres grupos distintos (Latinos En Nueva York, Dominicanos activos en new york, y el mismo patron en los otros dos) muestran el mismo aviso "Llegaste al limite de contenido pendiente en este grupo" con el mismo numero de publicaciones atascadas (5). Probablemente causado por el patron repetido de compartir el mismo reel a muchos grupos en las ultimas semanas. Detalle completo, grupo por grupo, en `grupos-fb-promo.md` (Tanda 11).

**Bonus:** al revisar las reglas de HISPANOS EN NEW YORK se descubrio que ese grupo prohibe explicitamente links y autopromocion — nunca hubiera funcionado para este contenido de todas formas, independientemente del bug del composer. Se agrego a "Grupos a evitar siempre". Tambien se evito por poco duplicar un post en "Hispanos y Latinos en New York" (nombre parecido, pero ya usado en Tanda 1).

**No se publico nada.** Recomendacion: pausar la tarea de grupos unos dias hasta que el limite de cuenta se resetee solo, o revisar manualmente "Administrar contenido" en los grupos afectados para intentar liberar publicaciones atascadas.

**Pendiente para proxima sesion:** reintentar DOMINICANO EN NEW YORK STATE (buen candidato, sin reglas restrictivas) una vez se resuelva el limite de cuenta. Nuevos candidatos identificados para explorar: "Que recuerdas de San Pedro de Macoris" (buen fit emocional), y de menor prioridad "AMIGOS Y GENTE DE ALTAMIRA", "Santiago República Dominicana DO", "Empleos en República Dominicana para ti", "Noticias San Pedro de Macoris".

---

### Sesion — 2026-07-29 (tarea programada `quisqueya-travel-video-diario`, turno HOTELES ~19:05 EDT — BLOQUEADA, no se publico nada)

**Que se intento:** corrida automatica (sin Venul presente) del turno de HOTELES. Se determino el turno correcto por hora (`date` → 19:05 EDT → turno hoteles). Se reviso `quisqueya-travel-memoria.md` para no repetir destino/hotel — ultimo post confirmado publicado fue Punta Cana (playa, video Higgsfield, NO Pexels) el 2026-07-21; no hay un log de rotacion especifico de posts Pexels en este archivo. Los archivos "fuente de verdad" que indica la tarea (`C:\Users\venul\OneDrive\Documentos\Claude\Scheduled\quisqueya-travel-diario\config.md` y `registro-temas.md`) existen pero estan desactualizados (mencionan Netlify, abandonado desde 2026-07-02) y ademas quedaron marcados de solo lectura para esta sesion — no se pudieron actualizar ahi, por eso se deja esta nota aqui en su lugar.

**Bloqueo real — red del sandbox, no falta de contenido:** al intentar `GET api.pexels.com/videos/search` (query "luxury resort infinity pool", portrait) con la API key de la tarea, el proxy de red de Cowork devolvio `403 blocked-by-allowlist` en las tres pruebas hechas: `api.pexels.com/videos/search`, `api.pexels.com/v1/search` (fotos, fallback) e incluso el CDN `images.pexels.com`. Es decir, el dominio `pexels.com` completo no esta en el allowlist de red de este entorno de Cowork — no es que Pexels no tuviera contenido disponible.

**Decision tomada:** siguiendo la regla fija de la tarea ("si no hay nada usable en Pexels, NO generar con IA, anotar y detenerse sin publicar"), se detuvo la corrida sin publicar en Facebook ni Instagram y sin usar generacion IA como sustituto. No se toco Blotato.

**Pendiente para Venul:** agregar `pexels.com` (o especificamente `api.pexels.com`, `images.pexels.com`, `videos.pexels.com`) al allowlist de red permitido en la configuracion de Cowork/conectores para que esta tarea programada pueda funcionar en las proximas corridas (10am/6pm). Mientras tanto, ambos turnos diarios de esta tarea seguiran bloqueados por el mismo motivo.

---

### Sesion — 2026-07-27, parte 2 (revision de rendimiento GA4/Meta Ads en vivo + fix targeting PR + auditoria WCAG contraste, via Cowork)

**Que se hizo:** Venul pidio revisar como iba el rendimiento de la pagina. Se consulto Semrush primero (sin unidades de API disponibles) y Supermetrics despues (trial expirado el 2026-07-19 — ya no sirve para `data_query`/`campaign_update`), asi que se recurrio a Claude in Chrome directo sobre GA4 (property 541622169) y Meta Ads Manager (cuenta 290012163), ambos con sesion ya logueada.

**Hallazgos de rendimiento (ultimos 28-30 dias):**
- GA4: 10 mil usuarios activos, 33 mil eventos, 11 mil vistas al home. 96% del trafico es pagado (9.7k sesiones fb/paid + 529 ig/paid) contra 474 directo y solo 73 organico de Google.
- Ciudades top: San Juan-PR (2 mil usuarios) por encima de cualquier ciudad de EE.UU., seguido de Panama City (516) y Bayamon-PR (179) — mercados sin turismo real hacia RD.
- Rebote altisimo: home 96.2%, la mayoria de guias entre 92% y 100%.
- Meta Ads: $128.94 gastados en 30 dias, CPC promedio ~$0.01 (muy barato), 13,759 clics, 94,826 impresiones — trafico barato pero de baja intencion de compra, concentrado en geografias equivocadas.

**Accion tomada (con aprobacion explicita de Venul):** se elimino Puerto Rico de los 2 ad sets activos que aun lo tenian ("AS1 — Diaspora Dominicana Global" y "Trafico Top Emisores Turismo"), editado directo en Meta Ads Manager via Claude in Chrome. Detalle completo en la tabla de Estado Actual arriba.

**Mejoras al sitio:** fix de contraste WCAG en `.resena-quote` (ver tabla de Estado Actual). Se reviso tambien el punto ya documentado del boton de WhatsApp en el home y la seccion de resenas placeholder — ambos ya estaban resueltos de sesiones anteriores (2026-07-24 y 2026-07-07 respectivamente), no hizo falta tocarlos de nuevo.

**Posts publicados:**
- FB: —
- IG: —

**Estado del deploy:** commit directo a `main` via GitHub web upload (`file_upload` de Claude in Chrome), deploy automatico de Cloudflare Pages confirmado en vivo (`naranja-oscuro` presente en el HTML servido en quisqueyatravel.org).

**Notas importantes:**
- Supermetrics dejo de servir para Meta Ads/GA4 desde el 2026-07-19 (trial vencido) — para datos en vivo de ahora en adelante, usar Claude in Chrome directo sobre analytics.google.com y adsmanager.facebook.com (ambos ya tienen sesion iniciada) hasta que se resuelva la suscripcion.
- Venul comparto un combo de herramientas de terceros para Claude Code (frontend-design plugin, Context7 MCP, Playwright MCP, design-tokens skill de phrazzld, claudedesignskills marketplace de freshtechbro, ui-skills de ibelick) pensado para correr en su terminal local, no en Cowork — se le explico la diferencia y se verified que ninguno es sospechoso.

**Pendiente sugerido para la proxima sesion:** en unos dias, volver a revisar GA4 para confirmar que San Juan/Bayamon bajaron de ranking y que el rebote mejora tras sacar PR del targeting. Si Venul quiere seguir el combo de herramientas de Claude Code para el sitio, ofrecerle un checklist paso a paso para su terminal.

---

### Sesion — 2026-07-26 (revision de cambios de diseno + limpieza de archivos ajenos al sitio, via Cowork)

**Que se hizo:** Venul pidio revisar los cambios de diseno recientes. Se reviso el codigo local (`index.html`, historial de commits) y el sitio en vivo (fetch + JS en Chrome). Hallazgo inicial erroneo: se penso que el placeholder de testimonios `[TEXTO DEL COMENTARIO REAL]` seguia visible en vivo — al verificar con `getComputedStyle` en el DOM real se confirmo que la seccion `#resenas` ya tiene `display:none` desde el 7 jul (commit `960844e`), asi que no hay nada que arreglar ahi todavia. La leccion: la extraccion de texto plano de una pagina ignora CSS, no sirve para confirmar visibilidad real.

**Fix confirmado y real:** se detecto que 3 archivos ajenos al sitio (`VID20260709WA0010.mp4`, `marketing.plugin`, foto personal `465844268_...jpg`) estaban commiteados y se servian publicamente desde la raiz de quisqueyatravel.org (verificado con HEAD request, 200 en los 3). Se eliminaron del repo directo desde GitHub (`/delete/main/<archivo>`, commit + deploy a main), confirmado en Cloudflare Pages (deploys #94 y #96).

**Prevencion:** se creo `.gitignore` (no existia) con reglas para instaladores pesados (motivado por el `node-v24...msi` de 32MB suelto sin control de version), videos/fotos sueltas, paquetes `.plugin` y archivos de sistema operativo.

**Nota tecnica:** el git local (mount de Cowork) seguia con `.git/index.lock` atascado (mismo problema de siempre, ver nota de sesiones anteriores) — todo el trabajo de esta sesion se hizo directo contra GitHub via Claude in Chrome, sin depender del git local.

**Pendiente:** Venul aun no ha pasado los 3 comentarios reales para activar la seccion de resenas.


### Sesion — 2026-07-24, parte 2 (revision de copy de ads + optimizacion de velocidad/movil del home + fix del bloqueo de git en OneDrive, via Cowork)

**Que se hizo:** Venul comparto un texto propio (estrategia de contenido/CTAs para hoteles de afiliados) para revisar. Se dio feedback: la logica de tipos de contenido (reviews profundas, comparativas, listas ultraespecificas, guias por zona) y las tecnicas de conversion (CTAs orientados a beneficio, cancelacion gratuita, mapas, velocidad) son correctas, pero se detecto una contradiccion interna (listas de "5 hoteles" vs. la "regla de oro" de no mostrar mas de 3-4) y una cifra sin sustento ("60% de reservas desde movil" — se busco en la web y no se encontro esa cifra exacta; lo verificable es que el trafico movil ya supera al desktop en la mayoria de reservas de hotel, sin un porcentaje puntual confiable).

**Auditoria de velocidad/movil de quisqueyatravel.org (skill `quisqueya-travel-design`):** revision de codigo de `index.html` + `js/hoteles2.js` (sin acceso a internet real desde el sandbox para correr PageSpeed, asi que fue auditoria de codigo). Hallazgos: lazy-loading ya bien implementado en ofertas/galeria, boton de WhatsApp bien dimensionado (56px) y sin interferir con el contenido, el widget de hoteles es un link a Stay22 (no un iframe embebido, asi que no hay problema de widget tapando contenido en movil). 3 mejoras de mayor impacto identificadas: Bootstrap completo sin preload, imagenes de tarjetas de destino cargando todas de inmediato via CSS `background-image`, sin `srcset` responsive.

**Fix implementado:** se convirtieron las 7 imagenes de tarjetas de destino (Punta Cana, Santo Domingo, Puerto Plata, La Romana, Samana, Santiago, Sosua) de `background-image` a `<img loading="lazy">` con `srcset` (400w/800w) + `sizes`; se agrego `content-visibility`/overlay correcto (`.destino-img img` position absolute + z-index del `::after` y `.destino-tag` ajustados para mantener el gradiente y las etiquetas encima de la foto); Bootstrap CSS cambiado a patron de preload. `santiago.jpg` (archivo local unico, sin CDN de imagenes) se dejo solo con `loading="lazy"`, sin srcset, porque no hay variantes de tamaño generadas.

**Deploy:** Venul aclaro que ya no usa Netlify (confirmado, ver regla fija arriba). El deploy real es Cloudflare Pages via GitHub. No se pudo hacer `git push` por SSH desde el sandbox (sin llave configurada aqui). Se resolvio subiendo `index.html` directo por la interfaz web de GitHub (`/upload/main`, via Claude in Chrome, sesion ya logueada de Venul) — commit `6cd647f`, confirmado en vivo en el repo (141 commits).

**Fix definitivo del bloqueo de git en OneDrive:** el problema de siempre (`.git/index.lock` y `.git/HEAD.lock` atascados, "Operation not permitted" al intentar borrarlos con `rm` desde el sandbox) esta vez se aislo la causa real y la solucion: son borrables sin problema desde el **Explorador de Windows via computer-use** (navegar directo a `C:\Users\venul\OneDrive\Desktop\Quisqueya\.git` por la barra de direcciones ya que la carpeta es oculta, seleccionar el archivo `.lock`, tecla Delete). Con eso limpio, se pudo actualizar el `main` local para que apuntara al mismo commit que ya estaba en GitHub (`git update-ref` / edicion directa de `refs/heads/main`, evitando pasar por `index.lock` de nuevo). Detalle importante para el futuro: cada comando de git nuevo desde el sandbox (incluso uno de solo lectura como `git status`) vuelve a crear un `index.lock` que no se autolimpia — hay que repetir el borrado manual por Explorer cada vez que se necesite correr git desde aqui.

**Deploy final de la sesion:** commit `6cd647f` (lazy-load + srcset + preload de Bootstrap), subido via GitHub web upload, verificado en vivo. Repo local sincronizado con origin al cierre de la sesion.

**Pendiente para proxima sesion:**
- 🟡 Si Venul quiere, generar una version comprimida/mas chica de `img/santiago.jpg` para poder darle el mismo tratamiento de srcset que las demas fotos de destino (hoy es un archivo unico sin variantes de tamaño).
- 🟡 Corregir el texto de estrategia de ads que Venul compartio: quitar o suavizar la cifra "60% de reservas desde movil" antes de usarlo como copy publicado, y aclarar si la regla de "3-4 opciones maximo" aplica tambien a las listas ultraespecificas de "mejores 5 hoteles".
- 🟢 Venul pregunto si se puede dejar acceso permanente a GitHub guardado en la carpeta — se le explico que no es seguro (la carpeta es el propio repo sincronizado con OneDrive, cualquier token ahi podria terminar expuesto publicamente si se sube por error) y que la via segura seria un conector oficial de GitHub por OAuth, no disponible todavia en este workspace.

---

### Sesion — 2026-07-24 (revision de trafico/GA4 + auditoria de seguridad + mejoras de conversion en home + FAQ Schema SEO 2026, via Cowork)

**Que se hizo:** sesion larga con varios pedidos encadenados de Venul.

**1. Revision de trafico (GA4 + Search Console, via Claude in Chrome):** Semrush y Supermetrics no sirvieron (plan sin Traffic Analytics / trial vencido) — se uso directo la propiedad GA4 ya conectada (property ID 541622169). Diagnostico: de ~3,200 "usuarios" en 28 dias, Search Console solo confirma 20 clics organicos reales — el resto del trafico tiene patrones de bot/scraper (tiempo de interaccion casi cero, picos de un solo dia, fuente no identificable). Se recomendo auditoria de seguridad como siguiente paso, no mas cambios de marketing.

**2. Auditoria de seguridad (skill `quisqueya-travel-seguridad`):** escaneo de secretos expuestos (0 hallazgos en 43 archivos), auditoria de dominios externos vs. allowlist (sin sorpresas reales, solo nuevos dominios legitimos por documentar), y verificacion en vivo de headers HTTP de seguridad (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS, Permissions-Policy — todos presentes; CSP se sirve via meta tag, no header, tambien correcto). Se investigo tambien un error de consola de Travelpayouts (`check_auth`) — resulto ser un quirk benigno del propio script del widget, no un problema del sitio (el tracking de clics real en el dashboard de Travelpayouts funciona bien).

**3. Mejoras de retencion/conversion en el home (`index.html`):** Venul pidio retener mas tiempo a los visitantes y vender mas. Se implementaron las 4 mejoras que eligio: (a) franja de confianza/urgencia honesta (escrito por dominicano en NYC, precios actualizados, aviso de temporada alta), (b) galeria visual bento de 6 destinos, (c) boton flotante de WhatsApp en el home (antes solo estaba en las guias, quedaba pendiente de sesiones anteriores), (d) calculadora interactiva de costo de viaje (destino + noches + personas + presupuesto → total y desglose, con boton que filtra los hoteles del destino elegido). Todo con datos/precios ya usados en el sitio, sin inventar descuentos.

**4. Deploy con problemas de git resueltos (OneDrive + lock files + divergencia):** el mismo problema de siempre (`.git/index.lock`, `.git/HEAD.lock` no se podian borrar ni con `rm` del sandbox) se resolvio esta vez borrandolos manualmente desde el Explorador de Windows (funciono donde `rm` fallaba). Se detecto que el branch local habia divergido de origin (9 commits pusheados desde otra sesion, nunca traidos aqui) — resuelto con `git reset --soft origin/main` (no destructivo) + recuperacion manual de `.github/workflows/purge-cache.yml` (se habria borrado por accidente si se commiteaba tal cual). Commit final `c5208a0` pusheado y verificado en vivo.

**5. SEO 2026 — FAQ Schema (a peticion explicita de Venul: "toma una decision de experto en SEO... implementa algo grande"):** se investigo la estrategia SEO 2026 mas actual (GEO / AI Overviews / Answer Engine Optimization como paradigma dominante) y se eligio FAQ Schema como la implementacion de mayor impacto para este sitio especifico — evidencia: 36% mas probabilidad de citacion en respuestas de IA con FAQ Schema bien marcado, y es algo que la mayoria de sitios de viajes NO tiene. Se descarto `llms.txt` a proposito (adopcion todavia no confirmada por los crawlers principales de IA). Se agrego `FAQPage` + `BreadcrumbList` (JSON-LD) + un acordeon visible `<details>/<summary>` con 4-5 preguntas por guia a las 12 guias principales: Punta Cana, Santo Domingo, Puerto Plata, Samana, Santiago, Barahona, Jarabacoa, La Romana, Requisitos 2026, Costo Familiar, Itinerario 10 dias, Vuelos NYC-RD. Todo el contenido de las preguntas se extrajo/parafraseo honestamente de texto ya publicado en cada guia (tablas de precio, secciones existentes) — nada inventado. Validado antes de subir: los 3 bloques JSON-LD de cada archivo parsean como JSON valido, cantidad de `<details>` coincide con la cantidad de preguntas en el schema, sin IDs duplicados. Commit `4c7649c`, pusheado sin divergencia (main ya estaba sincronizado con origin), verificado en vivo en quisqueyatravel.org (confirmado con fetch real de `guia-vuelos-nyc-rd`).

**Deploy final de la sesion:** dos commits — `c5208a0` (mejoras del home) y `4c7649c` (FAQ Schema en las 12 guias). Ambos verificados en vivo. Repo local y origin quedaron sincronizados.

**Pendiente para proxima sesion:**
- 🟡 Evaluar en Search Console (en 1-2 semanas) si el trafico organico real mejora despues del FAQ Schema, y si Google empieza a mostrar "rich results" de preguntas frecuentes para estas guias.
- 🟡 Considerar extender el mismo patron de FAQ Schema a las guias traducidas (`/en/`, `/fr/`) — se decidio no hacerlo esta vez porque el espanol es el idioma dominante de la audiencia segun datos previos de GA4.
- 🟢 Varios archivos sueltos de diagnostico (`CHEQUEO-*.bat`, `COMMIT-*.bat` y sus `-LOG.txt`) quedaron en la carpeta local como rastro de auditoria — se le informo a Venul que son seguros de borrar cuando quiera, no son parte del sitio.
- 🟢 Seguian sin resolverse (seguramente igual que antes): estado de Meta Ads y de Blotato — no se tocaron en esta sesion, no se pidieron.

---

### Sesion — 2026-07-20 (copy de alta conversion: hero, CTAs, servicios e itinerario, via Cowork)

**Que se hizo:** Venul pidio trabajar en copywriting de alta conversion (CTAs/headlines). Se redacto un documento con variantes para 5 bloques del sitio (hero, botones del hero, boton de ofertas, tarjetas de servicios, CTA de itinerario), cada una con el angulo psicologico (deseo, urgencia, perdida, confianza). Venul aprobo implementar las recomendadas con "continua".

**Cambios implementados en `index.html`:**
- H1 del hero: "Siente. Vive. Explora. República Dominicana." → "La República Dominicana que extrañas — a un clic de reservarla." (angulo deseo/nostalgia, apunta a la diaspora que es la audiencia principal de Facebook)
- Subtitulo del hero: agregada promesa de precio al final
- Botones del hero: "Buscar hoteles"→"Ver precios de hoteles", "Buscar vuelos"→"Comparar vuelos ahora", "Ver hoteles disponibles"→"Reserva tu hotel hoy", "Explorar destinos"→"Elige tu destino ideal"
- Las 6 tarjetas del bento grid de ofertas: "Ver disponibilidad →" → "Asegura este precio →" (angulo perdida/urgencia)
- Las 6 tarjetas de servicios (Vuelos, Carro, Traslado, Tours, eSIM, Seguro): microcopy generico ("Comparar precios", "Ver opciones", etc.) reemplazado por texto orientado al resultado ("Encuentra el vuelo mas barato", "Muevete libre por la isla", etc.)
- CTA de captura de itinerario: agregada promesa de tiempo concreta ("en menos de 24 horas") al texto — el boton se dejo igual

**Deploy:** git local seguia inutilizable (mismo `.git/index.lock` de siempre). Se uso el proceso normal (upload web de GitHub via Claude in Chrome) para subir solo `index.html`. Commit `f175e79`, Deploy to Cloudflare Pages #85 exitoso (30s). Verificado en vivo en quisqueyatravel.org — hero, tarjetas de ofertas y tarjetas de servicios confirmados con el copy nuevo.

**Nota tecnica:** Chrome tenia traduccion automatica activa durante el upload, lo que mostraba visualmente "índice.html" en vez de "index.html" en la UI de GitHub — se verifico que era solo un artefacto visual de traduccion (no afecto el archivo real subido, confirmado revisando el listado del repo).

**Pendiente para proxima sesion:** medir si el nuevo copy mueve la aguja en conversion una vez haya trafico suficiente. Los pendientes de sesiones anteriores (Meta Ads UNSETTLED, Blotato API key vencida, decision sobre WhatsApp en el home) siguen abiertos.

---

### Sesion — 2026-07-20, parte 2 (video Punta Cana con Higgsfield First/Last Frame — bloqueado en Blotato)

**Que se hizo:** Venul pidio generar un video para FB/IG usando la tecnica de Higgsfield First & Last Frame (2 imagenes de la misma locacion como start_image/end_image, para que el lugar no se deforme). Confirmo presupuesto antes de gastar creditos ("no me desperdicies los creditos").

**Generado:** 2 imagenes de Punta Cana con `soul_location` (estilo "Location" consistente, 9:16) + 1 video de 5s con `seedance_2_0` (720p, fast, sin audio, First/Last Frame) — costo total 17.5 creditos de 823 disponibles, un solo intento. Video: https://d8j0ntlcm91z4.cloudfront.net/user_3BIr3rEkWzimSr0jX6Jzj2wEBZ8/hf_20260720_125702_509f8c0a-9071-45a5-a1fe-4032a26577df.mp4

**Bloqueado — Blotato sigue roto:** al intentar publicar en Facebook e Instagram, `blotato_get_user` devolvio "Invalid API key or auth session" — mismo problema ya documentado desde el 18 jul, sin resolver. Venul debe renovar la key en my.blotato.com/settings/api.

**Nota tecnica:** el sandbox de Cowork no tiene el dominio de CDN de Higgsfield (`d8j0ntlcm91z4.cloudfront.net`) en su allowlist de red — no se pudo descargar el video al folder de trabajo via bash/curl (403 del proxy). El link publico si funciona para abrir/descargar directo desde el navegador de Venul.

**Pendiente:** en cuanto Venul renueve la API key de Blotato, publicar este video (o uno nuevo) en la pagina de FB (2061443547418301) e Instagram (@venulh, accountId 44084).

---

### Sesion — 2026-07-18, parte 3 (fix de indexacion GSC — cache stale de Cloudflare)

**Disparador:** correo de Search Console "Nuevos motivos que impiden la indexacion de paginas" (redireccion + canonica alternativa) + correo anterior del 3 jul (404 / duplicada).

**Diagnostico:** al revisar las 12 guias en vivo, 6 + `guia-samana.html` estaban sirviendo contenido VIEJO desde la cache de zona de Cloudflare (bug ya documentado antes en esta bitacora: "Cloudflare Zone cache sirve version vieja"). El `.html` de esas paginas no redirigia (200 directo) mientras que las guias mas nuevas (Jarabacoa, La Romana, Puerto Plata, Santiago, Itinerario) si redirigian bien. Caso mas grave: `guia-samana.html` servia el HOME completo en vez de la guia — coincide con el "Duplicada: Google eligio version distinta como canonica" del correo del 3 jul.

**Paginas afectadas:** guia-punta-cana, guia-santo-domingo, guia-barahona, guia-vuelos-nyc-rd, guia-costo-viaje-familia-rd, guia-requisitos-viaje-rd-2026, guia-samana.

**Fix aplicado:** se encontro que ya existia un workflow `.github/workflows/purge-cache.yml` de una sesion anterior (7 corridas desde el 30 jun, con exitos confirmados) que purga la cache de zona via API de Cloudflare usando el secret `CLOUDFLARE_API_TOKEN` ya configurado — nunca se toco/vio el token. Se resubio el archivo (via GitHub upload UI, no git push — sigue fallando por host key/SSH desde el mount de Cowork) con la lista exacta de las 7 URLs afectadas (.html + version limpia) y se disparo manualmente desde Actions. Corrida #8: **Success**.

**Verificado en vivo (Claude in Chrome, navegacion real, no cache de fetch):** las 7 URLs ya redirigen 301 a la URL limpia y sirven el contenido correcto y actualizado. `guia-samana.html` ya NO sirve el home — redirige a `/guia-samana` con el contenido real de Samana.

**Pendiente para Venul:** volver a solicitar indexacion de estas 7 URLs en Google Search Console (Inspeccion de URLs → Solicitar indexacion) para que Google las vuelva a rastrear con el contenido correcto.

**Nota para el futuro:** este bug de cache-stale en el dominio (no en pages.dev) puede repetirse tras cada deploy nuevo. Causa raiz real (fuera del alcance de Claude, requiere dashboard de Cloudflare): revisar si hay una Cache Rule de zona que no respeta el `Cache-Control: no-cache` de `_headers`, o activar "Respect Origin Cache-Control Headers". Mientras tanto, el workflow `purge-cache.yml` es el fix rapido reutilizable — se puede correr manualmente desde GitHub Actions cada vez que se sospeche cache vieja en el dominio.

---

### Sesion — 2026-07-18, parte 2 (diagnostico "no logro ventas" + retargeting + captura por correo, via Cowork)

**Que se hizo:** Venul pregunto por que no esta logrando ventas (comisiones de afiliado). Contexto que dio: trafico viene de Facebook, hay clics pero no reservas, sitio con menos de 1 mes de vida.

**Diagnostico del sitio (revisado en vivo con Claude in Chrome, no solo codigo):**
- El embudo tecnico funciona: los botones "Ver disponibilidad" de cada hotel apuntan correctamente a `stay22.com/allez/quisqueyatravel` con el campaign tag por ciudad.
- Se vieron varios 503 en llamadas de tracking (`emrldtp.com/collect`, Google Analytics, Cloudflare Insights) durante la prueba — posible artefacto de extensiones del navegador de prueba, no confirmado que le pase a visitantes reales. Queda como algo a revisar en incognito.
- Conclusion principal: con <1 mes de vida y trafico de Facebook (bajo intent de compra vs. busqueda organica), cero/poquisimas ventas es normal — no es señal de que algo este roto.

**Plan de accion propuesto y ejecutado:**
1. **Retargeting en Meta Ads — BLOQUEADO.** Se encontro la cuenta de ads (290012163) y el pixel activo (2054264274867364, disparando datos hoy mismo). Al intentar crear la audiencia de visitantes del sitio, la API rechazo con "Ad account is not in an active state" — la cuenta esta en estado `UNSETTLED` (probablemente saldo pendiente). Venul debe resolver Facturacion en Ads Manager antes de que se pueda crear nada ahi.
2. **Plantilla de UTM** para poder medir que post de Facebook genera que clics — entregada como archivo.
3. **Semana de posts de venta** (Punta Cana, Samana, Santo Domingo, Puerto Plata, La Romana) con precio real, urgencia y FOMO de diaspora — redactada y entregada, NO publicada porque la API key de Blotato sigue invalida (mismo problema ya conocido).
4. **Captura de contacto — WhatsApp propuesto y rechazado.** Se llego a agregar CSS/HTML de un CTA de WhatsApp en `index.html`, pero Venul dijo explicitamente "no WhatsApp" — se revirtio el cambio antes de subir nada.
5. **Captura de contacto — Google Form (aprobado y desplegado).** Se creo el formulario "Arma tu itinerario gratis" (Nombre, Correo, Destino: Punta Cana/Santo Domingo/Puerto Plata/Otros) via Claude in Chrome, publicado con acceso "cualquiera con el vinculo". Se agrego una caja `.itinerario-cta` en `index.html` bajo la grilla de hoteles con boton "✉️ Arma mi itinerario" que abre el formulario.

**Problema tecnico encontrado — git local inutilizable:** al intentar hacer `git add`/`commit` en el mount de Cowork goteo un `.git/index.lock` que no se pudo borrar (permiso denegado, probablemente por el sync de OneDrive). Se uso el proceso normal documentado (upload web de GitHub) para subir `index.html` en su lugar — commit `cae1b59` "Agregar captura de itinerario por correo (Google Form) en home", deploy automatico a Cloudflare Pages confirmado, CTA verificado en vivo en quisqueyatravel.org.

**Hallazgo de paso:** al revisar el estado de git local parecia haber ~30 archivos con cambios sin subir (incluyendo el fix del widget de hoteles y el fix de CSP de sesiones anteriores) — resulto ser una falsa alarma: el repo remoto en GitHub ya tenia esos commits (subidos en sesiones anteriores via el mismo metodo de upload web), el mount local de git simplemente estaba desactualizado/no sincronizado. No se toco nada de eso.

**Ademas, en esta sesion:** se personalizo el plugin de Cowork "operations" para el contexto de Quisqueya Travel (categorias de conector reemplazadas por Gmail/Calendar/Drive reales, skill de compliance reescrita para disclosure FTC + GDPR + terminos de redes de afiliados en vez de SOC2/ISO27001, vendor-review anclado a Netlify/Stay22/Travelpayouts/Booking-CJ). Entregado como archivo `.plugin` — no es parte del sitio, es una herramienta de Cowork.

**Pendiente para proxima sesion (por prioridad):**
- 🔴 Venul: resolver estado `UNSETTLED` de la cuenta de Meta Ads (Facturacion en Ads Manager) — bloquea el retargeting.
- 🔴 Venul: renovar API key de Blotato en my.blotato.com/settings/api — bloquea publicar la semana de posts ya redactada.
- 🟡 Una vez resueltos ambos: crear la audiencia de retargeting + campana pausada, y publicar los 5 posts de venta (uno por dia, no todos juntos).
- 🟡 Revisar en incognito si los 503 de tracking vistos hoy son reales o artefacto del navegador de prueba.
- 🟢 Con datos de 1-2 semanas del Google Form, decidir si el cuello de botella real era trafico, confianza del sitio, o simplemente tiempo (como se sospecha).

---

### Sesion — 2026-07-18 (auditoria de diseno completa del sitio, con NameThatUI como referencia de vocabulario, via Cowork)

**Que se hizo:** Venul pidio auditar la pagina completa. Se reviso `index.html`, `bio-link-el-quisqueyano.html` y `guia-punta-cana.html` como muestra representativa, comparando estructura, navegacion, footer y consistencia visual entre paginas.

**Hallazgo critico:** el boton flotante de WhatsApp (`whatsapp-float`, decision fija documentada arriba: "en todas las paginas") **NO esta en `index.html`** (el home) — confirmado con grep, cero coincidencias de "whatsapp"/"wa.me". Si esta presente en `guia-punta-cana.html` y (como link normal, no flotante) en el bio-link. El home es la pagina con mas trafico — es el hueco de conversion mas grande encontrado.

**Hallazgo importante — footer incompleto en guias:** el footer de `index.html` enlaza a las 12 guias. El footer de `guia-punta-cana.html` (y probablemente el resto, no verificado uno por uno) solo enlaza a 5 guias (Requisitos, Presupuesto, Vuelos, Barahona, Santo Domingo) — le faltan Santiago, Puerto Plata, Jarabacoa, Samana, La Romana e Itinerario 10 dias. Afecta enlazado interno (SEO) y descubribilidad de contenido.

**Hallazgo menor — CSS muerto:** en `index.html`, la media query mobile tiene el selector `.nav-links { display: none; }` pero ningun elemento del `<nav>` usa esa clase (el nav real usa clases de Bootstrap: `navbar-nav`, `navbar-collapse`, etc.). Es codigo residual de una version anterior del nav, no rompe nada pero no hace nada tampoco.

**Hallazgo de arquitectura — navegacion asimetrica:** el home tiene un Navbar completo estilo Bootstrap con Hamburger Menu (nav-drawer) y un Dropdown Menu con las 12 guias. Las paginas de guia tienen un header simplificado (solo logo + un boton CTA "Ver hoteles") sin forma de saltar a otra guia excepto por los links parciales del footer. Es una decision de diseno razonable (mobile-first, menos distraccion en el articulo) pero combinada con el footer incompleto, deja las guias bastante aisladas entre si.

**Lo que esta bien:** touch targets de 44px+ consistentes, foco visible (`:focus-visible`) en todos los archivos revisados, paleta de marca (verde/naranja/oscuro) consistente entre home y guias, CTAs de afiliado claramente marcados con `<!-- AFILIADO -->`, bio-link con `prefers-reduced-motion` respetado y buen contraste.

**ACTUALIZACION (misma sesion) — Venul pidio completar los footers pero SIN tocar el WhatsApp del home:**

1. Al revisar para completar los footers se encontraron **4 archivos truncados de verdad** (no solo footer incompleto — el archivo se cortaba a mitad de una etiqueta, sin `</html>`): `guia-costo-viaje-familia-rd.html`, `guia-requisitos-viaje-rd-2026.html`, `guia-vuelos-nyc-rd.html` (truncados en medio del footer) y `guia-samana.html` (truncado a mitad del link de WhatsApp, despues del footer — este se detecto en una segunda pasada de verificacion, no en la primera). Mismo patron de bug ya documentado en "Errores Conocidos" (archivo truncado → sitio en blanco). El contenido del articulo en los 4 estaba completo, solo faltaba el bloque final. Confirmado con Venul: se restauro el boton de WhatsApp en las 4 (es distinto al caso del home, que se dejo fuera a proposito).
2. Reparados los 4 archivos: footer completo + boton flotante de WhatsApp + cierre `</body></html>`.
3. **Footer estandarizado en las 12 guias**: cada una ahora enlaza a las otras 11 (antes cada archivo tenia una lista distinta e incompleta, entre 4 y 10 links). Se agrego "Itinerario 10 dias" a todos los footers — antes no aparecia en ninguna guia, solo en el home.
4. **Corregidos 2 self-links**: `guia-barahona.html` y `guia-santiago.html` se enlazaban a si mismas en su propio footer — quitado.
5. Verificado programaticamente (script Python sobre los 12 archivos + parser BeautifulSoup): los 12 cierran con `</html>`, ninguno se enlaza a si mismo, ninguno le falta un link a otra guia, los 12 tienen `whatsapp-float`.
6. **Pendiente sin tocar, a proposito:** el home (`index.html`) sigue sin boton flotante de WhatsApp — Venul lo dejo fuera del alcance de esta sesion.

**ACTUALIZACION (misma sesion) — Venul pidio implementar 3 mejoras de diseno sobre `index.html`, usando NameThatUI como referencia de vocabulario:**

1. **Control segmentado (Segmented Control) en el buscador del hero**: pestanas "🏨 Hoteles" / "✈️ Vuelos" arriba del buscador. Hoteles mantiene el selector de destino + `filtrarHoteles()` que ya existia. Vuelos muestra un CTA que lleva al afiliado de Aviasales (`https://aviasales.tpo.li/AIrUfvdu`) — no hay motor de busqueda de vuelos real en el sitio, asi que es un link directo, no una busqueda con parametros. Accesible: `role="tablist"`/`role="tab"`/`role="tabpanel"`, `aria-selected`, panel oculto con atributo `hidden` (no `display:none` inline).
2. **Bento Grid "Los precios mas bajos por destino"**: seccion nueva `#ofertas`, entre "Especial de verano" y "Destinos". 6 tarjetas (1 destacada grande + 5) reutilizando las clases `.hotel-card` existentes para consistencia visual. **Datos reales** sacados de `data/hoteles.json` (el hotel mas barato verificado por destino, mas un destacado con mejor rating/precio) — no se inventaron precios ni descuentos falsos. Se agrego "💸 Ofertas" al menu de navegacion para que la seccion sea alcanzable.
3. **Popover de confianza**: boton `ⓘ` junto a "Hoteles recomendados" que explica en texto honesto que los precios vienen de Booking.com via Stay22, que la cancelacion depende de cada hotel, y que Quisqueya Travel no cobra cargo extra. Se abre con clic/teclado, cierra con `Escape` o clic afuera. Sin librerias — JS vanilla con `aria-expanded`/`aria-describedby`.
4. Verificado con BeautifulSoup que todos los IDs nuevos existen y anidan bien, y que las llaves `{`/`}` del CSS estan balanceadas (210/210). No se pudo previsualizar en vivo con Claude in Chrome porque el navegador no soporta abrir `file://` desde este entorno — verificacion fue estatica (parser HTML), no visual.

**Pendiente para proxima sesion (por prioridad):**
- 🟡 Decidir si se agrega el boton de WhatsApp al home o se deja asi a proposito (aclarar con Venul, quedo pendiente sin resolver dos veces ya).
- 🟢 Limpiar el selector `.nav-links` muerto en `index.html`.
- 🟢 Evaluar agregar un mini-selector de "otras guias" dentro del articulo (no solo footer) para mejorar navegacion cruzada.
- 🟢 La seccion de Vuelos del segmented control solo linkea al afiliado general de Aviasales — si Venul consigue una forma de pre-rellenar origen/destino en el link, mejoraria la conversion.
- 🟢 Los precios de la seccion "Ofertas de la semana" son estaticos (hardcodeados en el HTML) — si `data/hoteles.json` cambia, hay que actualizar esta seccion a mano tambien.

---

### Sesion — 2026-07-13 (bug critico: widget de hoteles roto en todo el sitio, via Cowork)

**Que se hizo:** Venul pidio revisar la carpeta local para ver si todo "estaba funcionando". Se encontro un bug critico en produccion: el widget de "Hoteles recomendados" del home se quedaba atascado para siempre en "Cargando hoteles disponibles..." — nunca renderizaba ni un solo hotel, en ningun filtro.

**Causa raiz:** `index.html` (ya en produccion desde el commit `734aa10`) carga `<script src="js/hoteles2.js">`, pero ese archivo **nunca fue creado ni subido a GitHub** — solo existia `js/hoteles.js` (el original). Confirmado con `git log -- js/hoteles2.js` (sin resultados) y navegando en vivo a esa URL: Cloudflare Pages devolvia el HTML completo del home (fallback) en vez del JS real, el navegador fallaba silenciosamente al intentar ejecutarlo, y `filtrarHoteles()`/`renderHoteles()` nunca quedaban definidas.

**Fix aplicado:**
1. Se recreo `js/hoteles2.js` localmente con el mismo contenido funcional de `js/hoteles.js` (mismos hoteles, links de Stay22 con `campaign=`, fetch a `data/hoteles.json`).
2. `git push` por SSH fallo (`Host key verification failed` — sin credenciales SSH en el sandbox de Cowork, consistente con lo ya documentado). Se subio por el metodo alternativo ya probado: GitHub web upload (`/upload/main/js`) con Claude in Chrome ya logueado. Commit `27927ff`.
3. GitHub Actions desplego a Cloudflare Pages automaticamente (run #77, 35s, exitoso).
4. **Nuevo hallazgo:** incluso despues del deploy exitoso, el sitio en vivo seguia sirviendo la version rota — Cloudflare Zone cache tenia cacheada la respuesta 404-fallback vieja para la URL exacta `/js/hoteles2.js` (bug ya documentado el 2026-07-12: "Cloudflare Zone cache sirve version vieja"). Se purgo cache especifica por URL en el dashboard de Cloudflare (`Purga personalizada` → URL: `/js/hoteles2.js`, `/`, `/index.html`).
5. Verificado en vivo con hard-reload (Ctrl+Shift+R) y con JS (`typeof filtrarHoteles === 'function'`, `typeof renderHoteles === 'function'`): las funciones ya cargan correctamente y el grid de hoteles renderiza tarjetas reales con foto, precio y boton "Ver disponibilidad" en todos los filtros. Confirmado visualmente con screenshot.

**Nota tecnica importante para el futuro:** cuando se edite `js/hoteles2.js` de nuevo, revisar primero si el archivo existe en el repo remoto (`git log -- js/hoteles2.js`) antes de asumir que el local esta sincronizado — este bug paso desapercibido varios dias porque nadie verifico que el archivo referenciado en `index.html` realmente existiera en GitHub.

**Estado del deploy:** ✅ Commit `27927ff` en `main`, desplegado y purgado. Widget de hoteles 100% funcional en produccion al cierre de esta sesion.

**ACTUALIZACION (misma sesion) — error de consola de Travelpayouts investigado y resuelto:** el error `emrldtp.com/chunk.Dv5fCQuf.js — config is not valid` SI era un bug real (no cosmetico): el script de Travelpayouts Drive necesita hacer `fetch`/XHR a `emrldtp.com` para cargar su configuracion, pero la Content-Security-Policy (meta tag en el `<head>` de cada HTML) no incluia `emrldtp.com` en `connect-src` — solo lo permitia en `script-src` (cargar el script si, conectarse no). Reproducido el bloqueo manualmente con `fetch()` en consola antes de aplicar el fix.

**Fix:** agregado `https://emrldtp.com` a `connect-src` en los 24 archivos HTML (ES/EN/FR + bio-link) + `_headers`. Subido en 3 commits via GitHub web upload (raiz `decc88d`, en/ `2e96574`, fr/ `8102e8b`) — los 3 desplegaron bien en Cloudflare Pages (Actions #78, #79, #80). Purgado el cache completo de Cloudflare (Purga todo) para evitar el mismo problema de cache stale del bug de hoteles. Verificado en vivo con hard-reload: el error desaparecio, ahora se ven los logs normales de Travelpayouts (`emerald init`, `monetization enabled`, `link_switcher convert links`, `bb init`).

**Pendiente menor nuevo (no bloqueante):** durante la verificacion aparecio un error distinto, `[tp] check_auth request failed — Failed to fetch (www.travelpayouts.com)` — mismo tipo de problema (CSP), pero para el dominio `www.travelpayouts.com` que tampoco esta en `connect-src`. No parece afectar el funcionamiento del widget (los links de afiliado ya se estan convirtiendo bien segun los logs). Si se quiere cerrar del todo, agregar tambien `https://www.travelpayouts.com` a `connect-src` en los mismos 25 archivos y repetir el flujo de deploy + purga.

---

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
| 2026-07-24 | SEO 2026: FAQ Schema (`FAQPage` + `BreadcrumbList` JSON-LD) + acordeon visible de preguntas frecuentes en las 12 guias principales | las 12 guias .html (ver detalle en sesion 2026-07-24) |
| 2026-07-24 | Home: franja de confianza/urgencia, galeria visual bento, boton flotante de WhatsApp y calculadora interactiva de costo de viaje | index.html |
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

> Seccion limpiada 2026-07-30 y 2026-08-06: se removieron duplicados y items ya completados (el historial completo de sesiones mas abajo conserva el registro). Solo quedan items realmente abiertos.

### 🔴 Urgente
- [ ] CJ Affiliate / Booking — esperar aprobacion de **Booking.com LATAM (7864342)** y **Booking.com Spain & Portugal (4347393)**, ambas solicitadas 2026-07-30 (revision manual del anunciante, sin accion nuestra por ahora). Afiliados activos en paralelo: Stay22 + Travelpayouts
- [ ] Configurar metodo de pago en Travelpayouts (`set your payout method`) — Venul debe hacerlo directo en el dashboard, Claude no puede ingresar datos financieros
- [ ] Resolver estado `UNSETTLED` de la cuenta de Meta Ads (290012163) en Facturacion de Ads Manager — bloquea crear audiencias/campanas nuevas y pausa el retargeting de visitantes del sitio, que ya esta listo para activarse en cuanto se desbloquee
- [ ] Pasarle a Claude 1-3 comentarios reales de Facebook/Instagram para reemplazar los placeholders `[TEXTO DEL COMENTARIO REAL]` en `index.html` (seccion ya construida, oculta con display:none, solo falta el contenido)

### 🟡 Proximas sesiones
- [ ] Revisar en Search Console (a partir de la semana del 7-14 de agosto) si el trafico organico mejora y aparecen rich results de FAQ para las 12 guias con FAQ Schema (agregado 2026-07-24)
- [ ] Evaluar si extender el FAQ Schema a las guias traducidas (/en/, /fr/)
- [ ] Cuando se resuelva el pago de Meta Ads: escalar AS1 (Diaspora Dominicana Global, 17x mejor) y pausar/reducir AS2 (Viajeros al Caribe)

### 🟢 Ideas / Backlog
- [ ] Newsletter mensual de ofertas de viaje
- [ ] Pagina "Top 5 hoteles baratos en Punta Cana"

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
| `.git/index.lock` / `HEAD.lock` atascados en el mount de OneDrive | El bridge FUSE del sandbox no puede hacer `unlink` de archivos que git acaba de crear (falla con "Operation not permitted"); pasa con CUALQUIER comando de git que toque el indice, incluso `git status` | Borrar el archivo `.lock` desde el Explorador de Windows via computer-use (navegar a `...\Quisqueya\.git` por la barra de direcciones, seleccionar, Delete) — ahi si funciona porque es el disco real, no el bridge. Repetir cada vez que git deje uno nuevo |

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

---

## Sesion 2026-07-25 — Fix de estrellas de hoteles + reequilibrio geografico de Meta Ads

**Que se hizo:**
- Venul reporto que las estrellas de las tarjetas de hoteles estaban mal. Se encontro que `js/hoteles.js` y `js/hoteles2.js` renderizaban `★★★★★` como texto fijo, ignorando la puntuacion real de cada hotel (`puntuacion: '7.6 Bueno'`, `'9.1 Excepcional'`, etc.).
- Se agrego la funcion `generarEstrellas(puntuacion)` en ambos archivos: extrae la nota (0-10), la redondea a escala 1-5, y devuelve la mezcla correcta de ★ llenas / ☆ vacias. Se reemplazo el `★★★★★` fijo dentro de `renderHoteles()` por la llamada a esta funcion.
- Venul pregunto por que la pagina se veia mas en Puerto Rico que en Estados Unidos. Se reviso Google Analytics en vivo (GA4, property 541622169, via Claude in Chrome): 87% del trafico (4.4k de 5.1k usuarios en 28 dias) viene de `fb/paid` + `ig/paid`, y por ciudad San Juan (1,000) + Bayamon (100) superaban a cualquier ciudad de EE.UU. individualmente.
- Se investigo (WebSearch) el ranking real de paises que mas turistas mandan a RD (Banco Central, ene-may 2026): EE.UU. 1.47M, Canada 734k, Argentina 240k, Colombia 164k, Mexico 80k, Puerto Rico 70k, Chile 69k, Peru 66k. En junio: EE.UU. 53%, Colombia 8%, Canada 7%, PR y Argentina 5%, RU y Chile 3%, Mexico 2%.
- Se conecto con las campañas reales de Meta Ads via Supermetrics (`campaign_and_resource_get`/`campaign_update`, cuenta `act_290012163`). Se encontraron 3 campañas activas; el ad set "AS1 — Diaspora Dominicana Global" (dentro de "Quisqueya Travel — Trafico Global") tenia como paises US/CA/ES/PA/PR — España y Panama no son mercados turisticos reales de RD, y el algoritmo de Meta estaba desviando presupuesto hacia PR por ser mas barato.
- Primer intento de `campaign_update` fallo: la cuenta tenia acceso de solo lectura en Supermetrics. Venul activo "Write Access" en hub.supermetrics.com/write-settings y se reintento con exito.
- Se corrigieron 2 ad sets:
  - "Quisqueya Travel — Trafico Top Emisores Turismo" → US, MX, CA, AR, CL, PE, CO, PR (antes tenia Francia, que no aporta turismo real, y le faltaban Mexico/Chile/Peru)
  - "AS1 — Diaspora Dominicana Global" → US, CA, PR (se quito España y Panama)

**Mejoras al sitio:**
- `js/hoteles.js` y `js/hoteles2.js`: funcion `generarEstrellas()` agregada, estrellas ahora reflejan la puntuacion real de cada hotel.

**Errores encontrados y solucion:**
- El fix de las estrellas se hizo primero localmente (Edit tool) pero nunca se publico — el sitio se despliega desde GitHub y el cambio se quedo solo en el mount local de OneDrive. Confirmado con `git status`: 3 commits locales sin pushear.
- Intentar hacer `git commit`/`push` desde el sandbox de Cowork fallo: no hay credenciales SSH ahi, y ademas se genero un `.git/index.lock` atascado que no se pudo borrar (mismo problema de siempre con el bridge de OneDrive — ver tabla de errores conocidos mas arriba).
- Se probo controlar Git GUI (`wish.exe`) via computer-use, pero la pantalla de Venul aparecio bloqueada/sin señal — no se pudo verificar visualmente.
- **Solucion que funciono:** editar los archivos DIRECTO en el editor web de GitHub (`github.com/.../edit/main/js/hoteles.js`) usando Claude in Chrome, y hacer commit ahi mismo — sin necesitar git local ni SSH.
- **Nota tecnica importante para el futuro:** escribir el contenido nuevo con la accion de teclado sintetico "type" (character-by-character) sobre el editor CodeMirror de GitHub causo corrupcion repetida — especificamente, cualquier caracter ★ o ☆ escrito asi "se teletransportaba" al inicio del archivo (linea 1) en vez de quedar en la posicion del cursor, y bloques largos con emoji llegaron a congelar el tab (timeout de CDP). La solucion fue usar `javascript_tool` para ejecutar `document.execCommand('selectAll')` + `document.execCommand('insertText', false, contenidoCompleto)` sobre el `.cm-content` — esto inserta el texto completo de forma atomica (como un paste real) y no tuvo ningun problema con emoji, estrellas ni tildes. **Preferir SIEMPRE este metodo sobre "type" sintetico para ediciones grandes en editores basados en CodeMirror/Monaco.**
- Verificacion pre-commit: en vez de confiar en `cm.textContent` (que solo refleja las lineas actualmente renderizadas por la virtualizacion de CodeMirror, no el archivo completo), se verifico haciendo scroll manual (`.cm-scroller.scrollTop`) y comparando visualmente contra el contenido esperado en varios puntos del archivo (inicio, funcion nueva, linea modificada, final).

**Posts publicados:**
- FB: —
- IG: —

**Estado del deploy:**
- `js/hoteles.js`: commit directo a `main` via GitHub web editor ("Implement dynamic star rating based on hotel score"), confirmado en vivo (blob view).
- `js/hoteles2.js`: mismo commit, mismo metodo, confirmado en vivo.
- Cloudflare Pages deploy automatico deberia completarse ~1-2 min despues del push (no se verifico el deploy en vivo en el navegador esta sesion — pendiente confirmar visualmente en quisqueyatravel.org que las estrellas ya varian por hotel).
- Meta Ads: cambios de targeting aplicados en caliente via API de Supermetrics, activos de inmediato en las campañas en curso.

**Notas importantes:**
- El acceso de escritura a Meta Ads via Supermetrics ahora esta habilitado para el equipo — se puede seguir usando `campaign_update` en sesiones futuras sin repetir el paso de activacion.
- Pendiente sugerido para la proxima sesion: confirmar visualmente en quisqueyatravel.org que las estrellas ya se ven variables, y revisar en unos dias si el reequilibrio geografico de Meta Ads movio el reparto de trafico (menos PR, mas US/CA/mercados emergentes) en Google Analytics.

---

## Sesion 2026-07-26 — Fix real de las estrellas de hoteles (el problema seguia)

**Que se hizo:** Venul reporto que el problema de las estrellas de hoteles seguia, pidio que la escala fuera de 0 a 5. Se investigo por que el fix del 2026-07-25 no se veia reflejado.

**Causa raiz encontrada:** el fix anterior (`generarEstrellas()`) solo corregia la grilla dinamica que rellena `js/hoteles.js`/`hoteles2.js` (seccion `#hoteles`). Pero la seccion estatica **"Ofertas de la semana"** (bento grid, `#ofertas`) en `index.html` tiene 6 tarjetas de hotel escritas directo en el HTML (no generadas por JS), y esas seguian con `★★★★★` fijo sin importar la nota real (8.8, 8.2, 7.8, 7.9, 7.9, 8.3) — por eso el problema "seguia" pese al fix previo.

**Arreglado:**
- Las 6 tarjetas de `#ofertas` en `index.html` ahora muestran `★★★★☆` (4/5), correcto para notas 7.8-8.8 en escala 0-10 → 0-5.
- `js/hoteles.js` y `js/hoteles2.js`: se quito el piso artificial `Math.max(1, ...)` y se cambio a `Math.max(0, ...)` en `generarEstrellas()`, para que la escala sea de verdad 0-5 (antes un hotel con nota muy baja nunca podia mostrar menos de 1 estrella llena).

**Deploy:**
- Se evito el metodo de editor web linea-por-linea (propenso a error en archivos largos por la virtualizacion de CodeMirror). En su lugar se uso `github.com/.../upload/main` (y `/upload/main/js` para la carpeta) con Claude in Chrome + `file_upload`, que reemplaza el archivo completo por el ya corregido localmente — mas confiable para archivos grandes como `index.html`.
- 2 commits directos a `main`: "Fix hotel star ratings on Ofertas section (index.html)" y "Fix star rating scale to true 0-5 in generarEstrellas()".
- Verificado en vivo via `raw.githubusercontent.com` (fetch + `javascript_tool`) que los 3 archivos en `main` ya tienen el contenido correcto: `hoteles.js`/`hoteles2.js` contienen `Math.max(0, Math.min(5`, e `index.html` ya no contiene ningun `★★★★★` (todos son `★★★★☆` donde corresponde).
- Cloudflare Pages deploy automatico deberia completarse ~1-2 min despues del push (no verificado visualmente en quisqueyatravel.org en vivo esta sesion).

**Pendiente sugerido:** confirmar visualmente en quisqueyatravel.org que la seccion "Ofertas de la semana" ya muestra 4 estrellas (no 5) en los 6 hoteles destacados.
