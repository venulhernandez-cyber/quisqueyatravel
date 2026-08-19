# Quisqueya Travel — Memoria de Proyecto

Bitácora viva del sitio afiliado **https://quisqueyatravel.org**

> Leer esta memoria SIEMPRE al inicio de una sesión de Quisqueya Travel.
> Actualizar SIEMPRE al final de cada sesión.

> 📌 **Este proyecto vende/afilia: hoteles (Booking.com CJ + Stay22), vuelos, alquiler de carros, traslados, tours, eSIM y seguro de viaje (todo vía Travelpayouts) — enfocado 100% en turismo hacia República Dominicana.**
>
> 📎 **Existe una segunda bitácora activa: [`quisqueya-travel-memoria.md`](./quisqueya-travel-memoria.md)**, escrita principalmente por sesiones automáticas/programadas (auto-mode, tareas diarias de contenido). Este archivo (`memoria-proyecto.md`) se usa más en sesiones manuales de Cowork. **Leer AMBOS archivos al empezar una sesión** — ninguno de los dos es la única fuente de verdad todavía. Ver `LEEME-CARPETA.md` en la raíz para el mapa completo de la carpeta.

---

## ⚠️ REGLA FIJA — NUNCA PUBLICAR EN FACEBOOK SIN VIDEO (confirmado por Venul 2026-08-18)

**Ningún post en Facebook (ni en la Página, ni compartido en grupos) se publica solo con texto+imagen. SIEMPRE debe incluir video.** Si se está preparando una publicación (ej. campaña de grupos, promoción de una guía) y no hay un video listo para ese post, no publicar — conseguir o generar el video primero, o esperar.

## ⚠️ REGLA FIJA — NO NETLIFY (confirmado por Venul 2026-07-02)

**Venul YA NO usa Netlify. Cuenta eliminada por completo el 30 de junio de 2026. NUNCA sugerir Netlify, ni como hosting, ni como deploy, ni como fallback.**

- Hosting real: **Cloudflare Pages** (proyecto `quisqueyatravel`)
- Repo: **github.com/venulhernandez-cyber/quisqueyatravel** (rama `main`)
- Deploy: subir archivos a GitHub (web upload o push) → GitHub Actions (`deploy-cloudflare.yml`) → Cloudflare Pages publica solo en ~1-2 min
- Dominio: quisqueyatravel.org apunta a Cloudflare

---

## Estado Actual del Proyecto

**Última actualización:** 17 de agosto de 2026

| Item | Estado | Detalle |
|---|---|---|
| Sitio en vivo | ✅ Activo | https://quisqueyatravel.org |
| Dominio personalizado | ✅ Activo | quisqueyatravel.org |
| Hosting | ✅ Cloudflare Pages | Ya NO se usa Netlify para hosting — deploy via GitHub Actions |
| GitHub repo | ✅ Activo | github.com/venulhernandez-cyber/quisqueyatravel |
| Cuenta Netlify | ✅ ELIMINADA (30 jun) | Venul borró toda la cuenta porque quisqueyatravel.netlify.app seguía indexado en Google y competía con el dominio real ("dos versiones" en Google). ⏳ Pendiente confirmar que el CDN ya purgó la caché vieja (tarea programada para 1 jul 10am la verifica sola) |
| Google Search Console | ✅ Verificado | mdPqqtii0hp-UXNgsl15ohIIpIIEHYlF-KPJvjFBvjI |
| Canonical tags | ✅ Corregido (4 jul) | Cambiadas de `/guia-x.html` a `/guia-x` (URL limpia) en 8 guías — antes apuntaban a la URL que `_redirects` abandona con 301, lo cual GSC marca como error. Se aceptó el riesgo de reindexación porque el sitio aún no tiene tráfico real que proteger (Fase 6 pendiente) |
| Hreflang ES | ✅ Implementado | 9 páginas ES con hreflang |
| Hreflang EN/FR | ✅ Implementado | x-default en todas las páginas EN/FR |
| Afiliado Stay22 | ✅ Activo | https://www.stay22.com/allez/quisqueyatravel — hoteles |
| Afiliado Travelpayouts | ✅ Activo (30 jun) | Aviasales (vuelos), GetRentacar (carro), Kiwitaxi (traslados), Klook (tours), Yesim (eSIM), EKTA (seguro) — en las 9 guías + portada. ⏳ Falta configurar método de pago para poder cobrar (Venul debe hacerlo directo en el dashboard, no Claude) |
| Afiliado Booking CJ | ✅ APROBADO (confirmado 17 ago) | CID 7985681 — CJ Affiliate / Booking.com Latam. Link `jdoqocy.com` ya estaba integrado como CTA principal de hoteles en casi todo el sitio (nav + 2 botones por guía) desde antes de la aprobación — ahora empieza a generar comisión real |
| Sitemap.xml | ✅ Correcto | 10 páginas ES + 7 EN + 3 FR, URLs limpias sin .html |
| index.html | ✅ Committed | Santiago, Puerto Plata, Jarabacoa en nav/footer + sección #servicios (Travelpayouts) + Google Analytics — commit 5d838e9 |
| guia-santiago.html | ✅ Committed | Vive en main, completo |
| Title tag portada | ✅ Optimizado (30 jun) | De 85 a 55 caracteres |
| Panel de control | ✅ Creado (30 jun) | "Quisqueya Travel - Panel.html" en el Escritorio de Venul — accesos directos a sitio, GitHub, Travelpayouts, Stay22, SEO, redes |
| Indexación solicitada | ✅ Done | 13 URLs solicitadas en Google Search Console |
| guia-samana.html | ✅ Corregido (3 jul) | Le faltaban Analytics, widget Travelpayouts, Schema Article y caja de servicios — ya a la par de las otras 10 guías. Commit 15b00a5 |
| Campaña grupos FB | ⏳ En progreso | Post publicado en la Página + compartido en 9 grupos dominicanos/NY el 3 jul. Tarea programada `quisqueya-travel-fb-grupos` corre cada 3 días para cubrir el resto de los ~44 grupos. Registro en `grupos-fb-promo.md` |
| Travelpayouts método de pago | ⏳ Pendiente (Venul) | Sigue siendo el bloqueador #1 para cobrar comisiones — sin esto no se puede monetizar aunque haya tráfico y clicks |
| Cabeceras de seguridad (`_headers`) | ✅ Corregido (5 jul) | Agregadas `X-Content-Type-Options: nosniff` y `Referrer-Policy` — commit `7d4057f` |
| Foto rota hotel Samaná | ✅ Corregido (5 jul) | `data/hoteles.json` tenía un retrato de una persona en vez de foto de hotel en "Hotel Bahia Principe Grand Samana" — commit `1cf0ac5`→`main` (ver detalle en sesión de hoy) |
| CSP en Cloudflare (posible bloqueo silencioso) | 🔴 Pendiente (Venul) | Ver "Pendientes urgentes" — requiere que Venul revise Cloudflare > Rules > Transform Rules, Claude no pudo acceder al dashboard |
| Newsletter / captura de email | ✅ Activo (17 ago) | Google Form publicado + sección `#newsletter` en `index.html` con CTA y tracking de Facebook Pixel (`ClicNewsletter`) |
| Posts FB con links muertos a Netlify | ✅ Corregido (5 jul) | 6 posts detectados (20 jun-30 jun) con links rotos a quisqueyatravel.netlify.app / golden-heliotrope-c5c46d.netlify.app. Se agregó un comentario de la Página en cada uno con el link correcto de quisqueyatravel.org (no se editó el post original, más seguro). 1 post adicional (30 jun, Puerto Plata) ya tenía el link correcto en el texto — solo la miniatura de FB está en caché vieja, no requiere acción |
| Hero de la portada | ✅ Rediseñado (7 jul) | Titular escalonado "Siente. Vive. Explora. República Dominicana." + foto real de playa de Punta Cana (Pexels, licencia libre, foto de Leonardo Rossatti) de fondo — reemplaza el degradado plano. Commits `5ffc331`, `960844e`, `b95f75a` |
| Sección de reseñas | 🔶 Preparada, oculta | Estructura y diseño listos en `index.html` (`#resenas`) pero con `display:none` — falta que Venul provea 3 comentarios reales de Facebook/Instagram para publicarla (instrucciones dejadas como comentario HTML en el archivo) |
| Buscador destacado en el hero | ✅ Agregado (7 jul) | Selector de destino + botón "Buscar hoteles" arriba de todo, reutiliza `filtrarHoteles()` de `hoteles2.js` y hace scroll suave a `#hoteles` — commit `b95f75a` |
| Animaciones al hacer scroll | ✅ Agregado (7 jul) | Tarjetas de destinos, "¿Por qué RD?" y servicios aparecen con fade+slide al entrar en pantalla (IntersectionObserver, con fallback si el navegador no lo soporta) — commit `b95f75a` |
| Colores de acento por destino | ✅ Agregado (7 jul) | Borde superior de color distinto en cada tarjeta de destino (turquesa Punta Cana, rojo Santo Domingo, azul Puerto Plata, morado La Romana, verde Samaná, naranja Santiago) — commit `b95f75a` |
| Iconos emoji sobre fotos de destino | ✅ Quitados (7 jul) | Venul pidió eliminar los emoji pequeños superpuestos en las fotos (🌴🏛️⛰️🎨🐋🏙️) — se ven mejor sin ellos. Se mantienen las etiquetas `.destino-tag` ("⭐ Más popular", etc). CSS `.destino-img span.destino-emoji` también eliminada — commit `d17da18` |
| Fotos de Puerto Plata y Samaná | ✅ Reemplazadas (7 jul) | Las fotos de Unsplash eran poco claras/no representaban bien el destino. Puerto Plata → foto aérea de la plaza/malecón (Pexels 29266595, Carlos Corporan). Samaná → foto del nuevo malecón/puente hacia Cayo Levantado (Pexels 16210227), a pedido explícito de Venul — commit `d17da18`. Santo Domingo y Punta Cana se revisaron y están bien, no se tocaron |
| Nuevo destino: Sosúa — Playa Alicia | ✅ Agregado (7 jul) | Venul pidió agregarla ("es la mejor playa del norte"). Tarjeta nueva en `#destinos` con foto aérea verificada (Pexels 29221468, Carlos Corporan — cala en media luna, agua turquesa, sombrillas). Como no existe `guia-sosua.html` ni entrada en `hoteles2.js`, el botón enlaza directo a Stay22 (`address=Sosúa, Dominican Republic`) en vez de usar `filtrarHoteles()` — evita romper el buscador de hoteles interno. Acento turquesa `#00b4a6`. Contador del hero actualizado de "6+" a "7+" destinos — commit `d17da18` |
| Pinterest | ✅ Activo (17 ago) | Cuenta de negocio `pinterest.com/quisqueyatravel`, sitio verificado. 6 tableros por destino creados y con 1 pin cada uno (Punta Cana, Santo Domingo, Puerto Plata, La Romana, Samaná, Santiago), cada pin enlaza a su guía correspondiente en el sitio |

---

## Datos Fijos del Proyecto

```
Sitio:          https://quisqueyatravel.org
Hosting:        Cloudflare Pages (proyecto quisqueyatravel) — deploy automatico via GitHub Actions
GitHub:         github.com/venulhernandez-cyber/quisqueyatravel (branch: main)
Archivos local: C:\Users\venul\OneDrive\Desktop\Quisqueya\
Facebook:       pageId 2061443547418301 (El Quisqueyano en NYC)
Instagram:      @venulh
WhatsApp CTA:   +1 347 720 5769
Afiliado:       Stay22 — https://www.stay22.com/allez/quisqueyatravel
Afiliado CID:   7985681 (CJ Affiliate — Booking.com, pendiente aprobación)
Google Verif:   mdPqqtii0hp-UXNgsl15ohIIpIIEHYlF-KPJvjFBvjI
OG Image:       https://d8j0ntlcm91z4.cloudfront.net/user_3BIr3rEkWzimSr0jX6Jzj2wEBZ8/hf_20260621_001007_b673c298-8907-4508-ab28-085c96bd72f3.png
CSS vars:       --verde:#1a6b3a --verde2:#2d9b5a --naranja:#f4a261 --oscuro:#1a1a2e
Fuentes:        Montserrat + Open Sans (Google Fonts)
Travelpayouts:  https://emrldtp.com/NTQzMzQ5.js?t=543349
```

---

## Páginas del Sitio (completo)

### Páginas en Español (/)
| Archivo | URL | Canonical ✅ | Hreflang ✅ |
|---|---|---|---|
| index.html | / | quisqueyatravel.org/ | es + en + fr + x-default |
| guia-punta-cana.html | /guia-punta-cana | ✅ (4 jul: limpio) | es + en + fr + x-default |
| guia-santo-domingo.html | /guia-santo-domingo | ✅ (4 jul: limpio) | es + x-default→/en/ |
| guia-barahona.html | /guia-barahona | ✅ (4 jul: limpio) | es + x-default→/en/ |
| guia-vuelos-nyc-rd.html | /guia-vuelos-nyc-rd | ✅ (4 jul: limpio) | es + x-default→/en/ |
| guia-costo-viaje-familia-rd.html | /guia-costo-viaje-familia-rd | ✅ (4 jul: limpio) | es + x-default→/en/ |
| guia-requisitos-viaje-rd-2026.html | /guia-requisitos-viaje-rd-2026 | ✅ (4 jul: limpio) | es + x-default→/en/ |
| guia-la-romana.html | /guia-la-romana | ✅ (4 jul: limpio) | — |
| guia-samana.html | /guia-samana | ✅ (4 jul: limpio) | — |

### Páginas en Inglés (/en/)
| Archivo | URL | Canonical ✅ | Hreflang ✅ |
|---|---|---|---|
| en/index.html | /en/ | ✅ | es + en + fr + x-default |
| en/guide-punta-cana.html | /en/guide-punta-cana.html | ✅ | es + en + fr + x-default |
| en/guide-dominican-republic.html | /en/guide-dominican-republic.html | ✅ | x-default |
| en/guide-santo-domingo.html | /en/guide-santo-domingo.html | ✅ | es + en + x-default |
| en/guide-entry-requirements-2026.html | /en/guide-entry-requirements-2026.html | ✅ | es + en + x-default |
| en/guide-flights-nyc-dr.html | /en/guide-flights-nyc-dr.html | ✅ | es + en + x-default |
| en/guide-family-budget-dr.html | /en/guide-family-budget-dr.html | ✅ | es + en + x-default |

### Páginas en Francés (/fr/)
| Archivo | URL | Canonical ✅ | Hreflang ✅ |
|---|---|---|---|
| fr/index.html | /fr/ | ✅ | es + en + fr + x-default→/en/ |
| fr/guide-punta-cana.html | /fr/guide-punta-cana.html | ✅ | es + en + fr + x-default→/en/ |
| fr/guide-republique-dominicaine.html | /fr/guide-republique-dominicaine.html | ✅ | x-default→/en/ |

---

## ✅ Auditoría de voz humana — sitio completo (18 ago, skill `quisqueya-travel-voz-humana`)

Se revisaron las 24 guías + `index.html` + `bio-link-el-quisqueyano.html` buscando texto con
"olor a IA" (transiciones de relleno, aperturas de folleto genérico, listas sin voz propia,
exceso de adjetivos vacíos, estructura robóticamente simétrica). **Resultado: el sitio ya está
bien humanizado.** Los párrafos son en primera persona, con anécdotas reales ("yo nací en la
isla", "los muchachos", "mi gente"), datos concretos y humor — no se encontró ningún patrón
genérico de folleto turístico ni relleno corporativo que valiera la pena reescribir. Único
hallazgo menor: el header `<h2>Lo que no te puedes perder</h2>` en `guia-barahona.html` (frase
común pero no problemática, es solo un título de sección — no se tocó).
**No se hizo ningún cambio de contenido.** Próxima sesión: no hace falta re-auditar el sitio
completo salvo que se agreguen guías nuevas — auditar solo la guía nueva antes de darla por
terminada.

## ✅ Reorganización de la carpeta subida a GitHub (18 ago, sesión Cowork)

Los archivos de `_interno/` (seo, planificacion, scripts, media, bitacoras-viejas) y las 3 copias
raíz actualizadas (`memoria-proyecto.md`, `quisqueya-travel-memoria.md`, `LEEME-CARPETA.md`) ya
están commiteados y pusheados a `main` en GitHub vía el uploader web (Claude in Chrome), en 6
commits separados. Cloudflare Pages ya los desplegó (no afectan el sitio en vivo, son solo docs).
**Sigue pendiente que Venul borre los 21 archivos originales que quedaron duplicados sueltos en
la raíz de la carpeta local** (`C:\Users\venul\OneDrive\Desktop\Quisqueya\`) — ver checklist en
`LEEME-CARPETA.md`. Los originales en GitHub también quedaron duplicados (root + `_interno/`)
hasta que alguien los borre ahí también con `git rm` o el editor web.

## ✅ Tareas programadas reales creadas (18 ago, sesión Cowork)

Se confirmó que `quisqueya-travel-daily`, `quisqueya-travel-video-diario` y `quisqueya-travel-fb-grupos` NUNCA existieron como tareas programadas reales (`list_triggers` devolvía 0). Se crearon 2 tareas reales con el sistema correcto (`create_trigger`), que sobreviven aunque se cierre la sesión:

- **"Quisqueya Travel - Turno Playa (10am ET)"** — `trig_012auKX2PgKJDsoaeqcnwQfP` — cron `0 14 * * *` (14:00 UTC). Publica sobre un destino/playa en FB+IG.
- **"Quisqueya Travel - Turno Hoteles (6pm ET)"** — `trig_01Gnfi1qdwhmezgrGooSpkwE` — cron `0 22 * * *` (22:00 UTC). Publica sobre un hotel específico en FB+IG.

Ambas siguen las reglas fijas de este archivo (video siempre, metraje real de Pexels, link a quisqueyatravel.org) y actualizan esta bitácora al final de cada corrida. El turno de hoteles de hoy (18 ago) se disparó manualmente como catch-up porque ya había pasado la hora cuando se crearon las tareas.

**Nota:** la skill `quisqueya-travel` (SKILL.md sincronizado) sigue desactualizada — todavía referencia Netlify y la carpeta `Documentos\Claude\Scheduled\quisqueya-travel-diario\` que ya no se usa. Las tareas programadas nuevas NO dependen de esa skill; tienen sus propias instrucciones autocontenidas. Pendiente: actualizar o reemplazar esa skill para que no confunda a futuras sesiones.

---

## Historial de Sesiones

### Sesión — 17 de agosto de 2026 (auditoría de pendientes — bitácora muy desactualizada)

**Qué se hizo:**
- Venul pidió revisar los últimos pendientes. Esta bitácora no se actualizaba desde el 7 de julio (más de un mes) y estaba muy desfasada de la realidad del sitio.
- Comparación contra el estado real de los archivos locales y `sitemap.xml`:
  - El sitio pasó de **10 guías en español a 23** (nuevas: Jarabacoa, Constanza, Boca Chica, Bayahíbe, Las Terrenas, Isla Saona, itinerarios de 5/7 días, mejores playas, mejores hoteles baratos Punta Cana, mejor época para viajar, qué llevar en la maleta, itinerario general) — con `lastmod` en `sitemap.xml` hasta el **11 de agosto de 2026**.
  - EN pasó de 7 a ~21 páginas, FR de 3 a 9 páginas, incluyendo una landing nueva `/landing-arma-tu-itinerario` (ES) y `/en/plan-my-trip` / `/fr/plan-mon-voyage`.
  - **Confirmado con grep: las 23 guías en español YA tienen Schema.org Article** — el pendiente "Agregar Schema.org Article a las guías en ES" (listado desde julio) ya está resuelto, probablemente en alguna sesión no registrada aquí.
  - **Sigue sin resolver:** la sección `#resenas` (prueba social) en `index.html` sigue con `display:none` — todavía no se cargaron testimonios reales.
- **Conclusión:** hay trabajo real hecho en el sitio (probablemente en sesiones de auto-mode o de Cowork que no pasaron por esta bitácora) que nunca quedó documentado aquí. Recomendado: seguir tratando esta bitácora como la fuente de verdad y actualizarla cada sesión — o si el flujo cambió, decírmelo para ajustar el proceso.

**Más tarde en la misma sesión:**
- Auditoría de fotos reales en el cuerpo de las guías: 20 de 23 guías ES ya tienen foto real (Pexels/Unsplash) con alt text descriptivo. Faltaban 3: `guia-mejor-epoca-para-viajar-rd.html`, `guia-itinerario-5-dias-republica-dominicana.html`, `guia-itinerario-7-dias-republica-dominicana.html` (solo tenían el pixel de tracking de Facebook, sin foto real).
- Agregada foto real a `guia-itinerario-5-dias-republica-dominicana.html` (Zona Colonial de Santo Domingo, reusando `pexels-photo-5273055`) y a `guia-itinerario-7-dias-republica-dominicana.html` (montañas de Jarabacoa, `pexels-photo-14948623`). La de `guia-mejor-epoca-para-viajar-rd.html` quedó sin aplicar (Venul detuvo esa edición puntual) — sigue pendiente.
- **Venul confirmó que Booking.com Latam APROBÓ el afiliado CJ** (CID 7985681). Se descubrió que el link de Booking (`jdoqocy.com`) ya estaba integrado como CTA principal de hoteles en casi todo el sitio desde antes de la aprobación (nav + 2 botones por guía, con tracking de Facebook Pixel `ClicReservaHotel`) — solo faltaban 6 páginas (Constanza y Boca Chica en ES/EN/FR) que todavía usaban Stay22. Se corrigieron los 18 links (3 por página × 6 páginas) al patrón `jdoqocy.com` para que también generen comisión.
- **Pendiente de deploy:** los 6 archivos de Constanza/Boca Chica se corrigieron localmente pero no se subieron a GitHub — falta el deploy para que quede en vivo.

**Más tarde — bug del "Alquiler de carro" + deploy exitoso vía GitHub Desktop:**
- Venul reportó que la tarjeta destacada de "Alquiler de carro" en `#servicios` parecía dañada desde el día anterior. Verificado visualmente con Claude in Chrome: la insignia "🔥 Muy pedido" era invisible (texto verde sobre fondo verde). Causa: la regla genérica `.servicio-card span { color: var(--verde) }` (line ~476) le ganaba en especificidad CSS a `.servicio-badge { color: var(--blanco) }`. Corregido cambiando el selector a `.servicio-card .servicio-badge` en `index.html`.
- **`file_upload` de Claude in Chrome no está disponible en esta sesión** (error explícito del host) — no se pudo arrastrar archivos al uploader web como en sesiones anteriores.
- **Descubrimiento importante: el git local YA NO está roto.** Se probó `GitHub Desktop` (con acceso a control total del computador de Venul) y el repo `quisqueyatravel` está correctamente configurado ahí, en la rama `main`, sincronizado con el remoto. Se hizo commit y push de los 9 archivos pendientes directo desde GitHub Desktop sin problema — mucho más seguro y rápido que escribir archivos a mano en el editor web de GitHub. **Actualizar el proceso: usar GitHub Desktop como método principal de deploy de ahora en adelante, no el uploader web.**
- **Otro descubrimiento importante:** el historial de GitHub Desktop muestra commits recientes (últimas 12-96 horas) de autores `Venul Hernandez` y `venulhernandez-cyber` que no están documentados en esta bitácora (ej. "Migración LATAM Booking/CJ, fix textos", "Fix: unpkg.com en CSP, min-height tab-...", "Nueva guía: itinerario 5 días RD"). Esto confirma que hay otro proceso (probablemente una tarea programada o sesión de auto-mode) escribiendo directo a este repo por su cuenta, fuera de las sesiones de Cowork donde se actualiza esta bitácora. Vale la pena que Venul confirme qué automatización es esa, para evitar choques de contenido entre ambos flujos.
- Commit final: "Fix badge alquiler de carro + Booking/CJ en Constanza-Boca Chica + fotos itinerarios" — pusheado a `main`. Cloudflare Pages debería desplegarlo en 1-2 min.

**Corregida la tarea programada `quisqueya-travel-daily`:** estaba completamente rota — apuntaba a una carpeta temporal de sesión (`local_fb4e6ef9-...`) que ya no existe, y su paso de deploy usaba Netlify (cuenta eliminada en junio). Llevaba tiempo sin hacer nada útil o fallando en silencio. Reescrita para: usar la carpeta real `C:\Users\venul\OneDrive\Desktop\Quisqueya\`, no prometer un scraper de hoteles que no existe (se documenta como pendiente si Venul lo quiere reconstruir), y desplegar vía GitHub Desktop (método confirmado funcionando hoy) con el uploader web como respaldo.

**Consolidación hecha (17 ago):** Venul pidió eliminar una de las dos tareas duplicadas y verificar que la que queda funcione bien.
- Eliminada `auditoria-quisqueya-travel` (la más rota: lista de archivos hardcodeada a 7 páginas viejas, nombres de herramientas de Chrome desactualizados, exigía Stay22 como afiliado "requerido").
- Se quedó `quisqueya-travel-daily` (ya corregida hoy para no usar Netlify ni carpetas temporales muertas).
- Al verificar que funcionara, se encontraron y corrigieron 2 bugs reales en `auditoria.py` y `reparacion.py`:
  1. `PAGES` (auditoria.py) y `CANONICALS` (reparacion.py) solo cubrían ~9-23 páginas viejas — regenerados desde `sitemap.xml` para cubrir las 58 páginas reales del sitio (ES+EN+FR).
  2. `REQUERIDOS` en auditoria.py exigía `stay22.com` como afiliado obligatorio — cambiado a `jdoqocy.com` (Booking CJ), que es el afiliado real desde la aprobación de Booking Latam.
  3. Mensaje final de `reparacion.py` seguía diciendo "sube a GitHub para que Netlify despliegue" — corregido a Cloudflare Pages.
- **Nota conocida:** `auditoria.py` no puede alcanzar `quisqueyatravel.org` en vivo desde el sandbox de Cowork (proxy 403 — limitación del entorno, no del sitio). Reporta "no se pudo acceder al live" en las 58 páginas cuando corre aquí; es ruido esperado, no una señal real de que el sitio esté mal. `reparacion.py` no actúa sobre ese tipo de error, así que no hay riesgo de que "repare" algo por una falsa alarma.
- Al correr `reparacion.py` con las listas ya actualizadas, encontró un bug real que nadie había visto: `landing-arma-tu-itinerario.html` tenía el canonical y el og:url apuntando a la versión `.html` en vez de la URL limpia (mismo patrón de bug corregido en julio para las otras guías). Corregido y desplegado — commit "Fix canonical/og:url landing-arma-tu-itinerario".
- Los archivos `auditoria.py` y `reparacion.py` no parecen estar trackeados por git (GitHub Desktop no los mostró como cambiados) — viven solo en la carpeta local. No afecta su funcionamiento vía la tarea programada, pero si Venul quiere que vivan en el repo también, hay que agregarlos.

**Más tarde — investigación competitiva + primer feature del gap list (captura de email):**
- Se conectó el conector **Tavily** (búsqueda/investigación web) a pedido de Venul, tras buscar sin éxito una skill de "Firecrawl". Verificado con una búsqueda real.
- Venul pidió investigar cuáles son las mejores páginas afiliadas de viajes del mundo y qué le falta a Quisqueya Travel para estar entre las mejores. Investigación hecha con Tavily (Wander Scotland, Bucketlist Bri, Jou Jou Travels, Katie Caf Travel, The World Travel Guy, Mog and Dog Travels, entre otros — varios de nicho de un solo país, igual que Quisqueya Travel). Entregado el reporte `quisqueya-travel-vs-mejores-sitios-afiliados.md` (guardado en la carpeta local, no en el repo del sitio). Resumen del hallazgo principal: el sitio ya está técnicamente a la par o mejor que muchos ejemplos exitosos (SEO, estructura, herramientas, afiliados) — lo que falta es captura de audiencia (email + Pinterest) y prueba social real.
- Venul pidió implementar los hallazgos ("vamos a aplicar los que se encontró y ponerlos a funcionar en mi página"), sin más preguntas de por medio ("continua"). Se empezó por el ítem 🔴 más importante: **lista de correo / newsletter** (el sitio no tenía ninguna forma de capturar el email de un visitante).
- Creado un **Google Form** ("Recibe tu guía gratis de República Dominicana") como mecanismo de captura — nombre + correo electrónico (con validación de formato de email y mensaje de error personalizado), publicado. Link: `https://docs.google.com/forms/d/e/1FAIpQLSfxCKhZu92s9fJl4reY3-JW9WQwBMkL-RA__zPPlSvETciqjw/viewform`
- Agregada una nueva sección **`#newsletter`** en `index.html` (entre "¿Por qué RD?" y la sección de reseñas), con CTA "✉️ Quiero mi guía gratis" enlazando al Google Form en una pestaña nueva. Se agregó tracking de Facebook Pixel (`ClicNewsletter` + evento `Lead`) para los clics en el link del formulario, siguiendo el mismo patrón que ya existía para los clics de reserva de hotel.
- Deploy: commit "Agregar seccion de captura de email (newsletter)" vía GitHub Desktop, pusheado a `main`. Cloudflare Pages debería desplegarlo en 1-2 min.
- **Nota técnica:** GitHub Desktop mostró "No local changes" la primera vez después de editar `index.html` con las herramientas de archivo de Claude — el file-watcher no detectó el cambio en caliente. Solución: cerrar y volver a abrir la app (restart), que fuerza un `git status` fresco. Si vuelve a pasar, reiniciar GitHub Desktop antes de asumir que el commit está vacío.
- El archivo `quisqueya-travel-vs-mejores-sitios-afiliados.md` (reporte de investigación) se dejó **fuera del repo** a propósito (documento interno, no hace falta publicarlo en GitHub) — vive solo en la carpeta local `Quisqueya`.
- Pendiente de esta misma iniciativa: Pinterest requiere que Venul cree la cuenta (Claude no puede crear cuentas); prueba social real sigue esperando 3 comentarios reales de Venul.

**Más tarde — cuenta de Pinterest creada y configurada:**
- Venul pidió crear la cuenta de Pinterest ("Pinterest vamos a crear la cuenta"). Se abrió el registro (`pinterest.com/business/create/`) y **Venul escribió su propio correo y contraseña** — crear cuentas y manejar contraseñas es una acción que Claude tiene prohibido hacer, incluso con autorización explícita.
- Una vez creada la cuenta, Claude configuró el resto del perfil de negocio:
  - Categoría de negocio: **Creador de contenido** (blogueros — la que mejor describe a Quisqueya Travel).
  - Nombre: Quisqueya Travel · País: Estados Unidos · Sitio web: quisqueyatravel.org
  - Objetivos: Impulsar tráfico al sitio + Crear contenido en Pinterest para aumentar audiencia · Enfoque de marca: **Viajes**
  - Nombre de usuario cambiado de `venulh` (autogenerado) a **`quisqueyatravel`** → perfil en `pinterest.com/quisqueyatravel`
  - Biografía: "Guías de viaje a República Dominicana desde un dominicano en NYC. Hoteles, playas, presupuesto y tips reales para tu próximo viaje."
  - **Sitio web verificado** (Configuración → Enlace a Pinterest → Sitios web): se agregó el meta tag `<meta name="p:domain_verify" content="4747c5b12177762b7d143272c6031106"/>` al `<head>` de `index.html`, se desplegó vía GitHub Desktop (commit "Agregar meta tag de verificacion de Pinterest"), y se confirmó "Conectado ✅" en Pinterest. Esto hace que todos los pines que lleven a quisqueyatravel.org muestren el nombre/foto de Quisqueya Travel automáticamente.
- **Nota técnica:** la app de Pinterest en este navegador tuvo varios cuelgues del renderer (`ReferenceError: app_const_localStorage...`, capturas de pantalla con timeout) — se resolvió abriendo una pestaña nueva en vez de reintentar en la misma. Si vuelve a pasar, abrir una pestaña nueva primero.
- **Pendiente:** Venul no completó el paso de "Instalar la etiqueta de Pinterest" (Pinterest Tag, para medir conversión de anuncios pagados) — se dejó sin instalar porque todavía no hay plan de pauta paga en Pinterest, solo pines orgánicos. Retomar si se decide invertir en Pinterest Ads.
- **Siguiente paso lógico (no hecho aún):** empezar a crear tableros (boards) por destino (Punta Cana, Santo Domingo, Samaná, etc.) y pinear las guías del sitio con imágenes verticales.

**Más tarde — 6 tableros creados + primer pin publicado en cada uno:**
- Venul aprobó proceder ("dale") con crear tableros por destino y empezar a pinear las guías.
- Creados los 6 tableros públicos (uno por destino): "Punta Cana, Republica Dominicana", "Santo Domingo, Republica Dominicana", "Puerto Plata, Republica Dominicana", "La Romana, Republica Dominicana", "Samana, Republica Dominicana", "Santiago, Republica Dominicana" — todos en `pinterest.com/quisqueyatravel/<slug>/`.
- Publicado 1 pin por tablero, reutilizando las mismas fotos que ya usa `index.html` para cada destino (Unsplash/Pexels/foto propia de Santiago), cada uno con título descriptivo y enlace directo a la guía real del sitio:
  1. Punta Cana → `guia-punta-cana.html`
  2. Santo Domingo → `guia-santo-domingo.html`
  3. Puerto Plata → `guia-puerto-plata.html`
  4. La Romana → `guia-la-romana.html`
  5. Samaná → `guia-samana.html`
  6. Santiago → `guia-santiago.html`
- Verificado visualmente en `pinterest.com/quisqueyatravel/` — los 6 pines aparecen en la pestaña "Creados".
- **Nota técnica (para automatizaciones futuras en Pinterest):** el creador de pines (`pinterest.com/pin-creation-tool/`) solo acepta subir un archivo de imagen (no admite pegar una URL directo). Como las fotos del sitio están en dominios externos (Unsplash/Pexels) que el sandbox de Cowork no puede alcanzar (proxy bloqueado), la forma que funcionó fue: cargar la imagen en un `<img crossOrigin="anonymous">` dentro de la propia pestaña de Pinterest, dibujarla en un `<canvas>`, convertirla a blob con `canvas.toBlob()`, y inyectarla como `File` en el input oculto vía `DataTransfer` + evento `change`. El intento directo con `fetch()` fue bloqueado (parece un CSP/restricción de Pinterest, no de las imágenes), pero el método de `<img>`+canvas sí funcionó porque Unsplash/Pexels sirven sus imágenes con CORS abierto.
- **Nota técnica 2:** la descripción del pin (campo "Describe tu Pin") no se pudo rellenar por automatización — es un editor de texto enriquecido (no un `<textarea>` normal) que ignora tanto la escritura simulada como los eventos de teclado sintéticos. Se dejó en blanco en los 6 pines; Venul puede completarla a mano desde Pinterest si quiere (opcional, no bloquea nada).
- **Nota técnica 3:** la app web de Pinterest sigue colgándose seguido después de navegar (mismo patrón de sesiones anteriores) — la solución que funcionó consistentemente fue cerrar la pestaña y abrir una nueva, a veces esperando 15-20 segundos a que hidrate antes de que los elementos del formulario aparezcan en el DOM.
- **Pendiente futuro:** agregar más pines a cada tablero (con distintas imágenes/ángulos de cada destino) para que los tableros no se vean vacíos con solo 1 pin; considerar pinear también las guías nuevas que no tienen tablero propio (Jarabacoa, Constanza, Boca Chica, Bayahíbe, Las Terrenas, Isla Saona, Sosúa, etc.).

---

### Sesión — 7 de julio de 2026 (auditoría + prueba social + hero)

**Qué se hizo:**
- Venul preguntó qué quedó incompleto de la sesión del 6 jul. Se revisó `ultimo-reporte-auditoria.json` (falló por proxy 403 local, no por el sitio) y `memoria-proyecto.md`.
- Reintentada la auditoría técnica vía `web_fetch` (no el script local): las 9 páginas cargan bien, incluido el copy nuevo de las tarjetas de destino (commit `5ffc331` del 6 jul) ya en vivo. El error de ayer era 100% del proxy del script `auditoria.py`, no del sitio.
- Agregada sección de prueba social (`#resenas`) en `index.html`, oculta con `display:none` hasta tener comentarios reales — Venul decidió no fabricar testimonios ni buscarlos todavía. Queda lista con instrucciones en un comentario HTML para llenarla cuando haya contenido real.
- Rediseñado el hero de la portada: titular escalonado "Siente. / Vive. / Explora. / República Dominicana." con tamaños y opacidad crecientes (inspirado en el patrón de la competencia detectado el 6 jul), reemplazando el H1 estándar.
- Deploy: subido `index.html` vía `github.com/.../upload/main` con Claude in Chrome (`file_upload`), commit **960844e** ("Hero con titular escalonado + sección de reseñas preparada"). Cloudflare Pages debería desplegarlo en 1-2 min.

**Errores encontrados y solución:**
- Se intentó primero editar `index.html` directo en el editor web (`/edit/main/index.html`) escribiendo el archivo completo (39KB) con la acción `type` de Claude in Chrome — el renderer de Chrome se congeló (mismo problema ya documentado el 27 jun para archivos grandes). Al navegar para recuperar el tab, quedó bloqueado por el diálogo nativo "cambios sin guardar" de Chrome, que ni captura de pantalla ni CDP pueden interactuar. Solución: cerrar el tab (`tabs_close_mcp`) y abrir uno nuevo.
- **Lección nueva:** para archivos grandes (>30KB) NO usar el editor `/edit/main/archivo` con `type` de Claude in Chrome — usar siempre `/upload/main` + `file_upload` (sube el archivo directo desde disco, sin escribir carácter por carácter, cero riesgo de congelar el renderer).

**Pendiente nuevo:**
- Ninguno adicional — los pendientes de prueba social (testimonios reales) y Travelpayouts/CSP siguen igual que antes.

**Estado del deploy:**
- Commit `960844e` en `main`, verificado en `/commits/main`. Cloudflare Pages despliega solo en 1-2 min.

---

### Sesión — 6 de julio de 2026 (comparación de diseño vs. competencia)

**Qué se hizo:**
- Venul pidió comparar quisqueyatravel.org contra quisqueyatravel.com.do (DMC/tour operador dominicano) porque le pareció que tenía mejor presentación.
- El sitio propio no cargó en vivo desde esta sesión (ni por fetch directo ni por navegador — error de conexión en ambos intentos, varias veces). Según esta misma bitácora el sitio está activo en Cloudflare Pages, así que puede ser un problema temporal de DNS/CDN o algo puntual de esta sesión — Venul debería confirmarlo cargando el sitio él mismo y, si también falla, revisar el estado del proyecto en el dashboard de Cloudflare Pages.
- Se conectó la carpeta local y se revisó `index.html` directo en código para hacer la comparación (sin necesitar el sitio en vivo).

**Hallazgo principal:** el sitio de Venul ya es más completo funcionalmente que el de la competencia (widget de hoteles en vivo con precios, filtros por destino, sección de servicios con 6 afiliados de Travelpayouts, sección personal "Sobre mí"). La competencia gana en presentación en 3 puntos concretos:
1. Hero con titular escalonado de alto impacto emocional (ellos: "CONOCE/VIVE/EXPLORA/DISFRUTA") vs. el hero estándar de Quisqueya Travel (badge + H1 + subtexto + botones).
2. Copy de cada tarjeta de destino con gancho narrativo (ellos: "¿Te imaginas caminar por la primera ciudad del Nuevo Mundo...?") vs. copy factual (temporada + rango de precio) en las tarjetas de Quisqueya Travel.
3. Prueba social visible en el home (reseñas de Google) — Quisqueya Travel no tiene ningún testimonio o prueba social en la portada.

**Pendiente nuevo (agregado a la lista de abajo):**
- 🟡 Agregar una sección de prueba social en el home (capturas de comentarios reales de la Página de Facebook, ya que no hay Google Reviews propio).
- 🟢 Explorar un hero con más peso tipográfico/emocional (opcional, cosmético).

**Actualización — mismo día, más tarde:** Venul aprobó publicar el cambio. Se reescribió el copy de las 6 tarjetas de destino en `index.html` (Punta Cana, Santo Domingo, Puerto Plata, La Romana, Samaná, Santiago) con gancho narrativo en vez de temporada/precio genérico. Subido directo a `main` vía el editor web de GitHub (Claude in Chrome, sesión de Venul ya autenticada) — commit **5ffc331** ("Reescribir copy de tarjetas de destino con gancho narrativo"), verificado en `/commits/main`. Cloudflare Pages debería desplegarlo solo en 1-2 min. Nota corregida: los fallos de carga de quisqueyatravel.org (y los intermitentes de GitHub) durante la sesión NO fueron un problema del sitio ni de Cloudflare/DNS — fue la extensión de Claude in Chrome que se desconectó (confirmado con `list_connected_browsers` → "Claude in Chrome is not connected"). No hace falta que Venul revise Cloudflare por esto. Si vuelve a pasar, revisar que la extensión esté activa/con sesión iniciada en Chrome, o recargarla desde chrome://extensions.

---

### Sesión — 5 de julio de 2026, parte 2 (diagnóstico de ventas + corrección de 6 posts de FB con links muertos)

**Qué se hizo:**
- Venul preguntó qué le falta a Quisqueya Travel para tener ventas. Diagnóstico entregado: (1) falta configurar método de pago en Travelpayouts — bloqueador #1 confirmado en varias sesiones, (2) tráfico insuficiente (355 vistas/28 días, solo 6-8 clics/mes en links de afiliado — muestra muy chica para esperar reservas, no es un bug), (3) tráfico mal atribuido por falta de UTM en los links compartidos en Facebook, (4) 6 posts de Facebook con links muertos a dominios de Netlify abandonados, (5) indexación de Google incompleta.
- Venul pidió corregir primero los 6 posts de Facebook con links muertos (pendiente desde el 2026-07-01, con intentos incompletos en sesiones anteriores).
- Se usó el panel "Administrar publicaciones" de Facebook (vista de administrador de la Página, no el perfil personal) para encontrar todos los posts con preview de link roto entre el 20 y el 30 de junio. Se confirmaron 6 posts con dominio muerto real (`quisqueyatravel.netlify.app` o `golden-heliotrope-c5c46d.netlify.app`) + 1 post adicional (30 jun, Puerto Plata) que ya tenía el link correcto de `quisqueyatravel.org` en el texto — ese último solo tiene la miniatura de Facebook cacheada vieja (Facebook no recorta previews automáticamente), no requiere corrección real.
- **Decisión de seguridad:** en vez de editar el texto/link de cada post original (un intento anterior el 2026-07-02 hizo que Facebook revirtiera el cambio de un post en vivo), se agregó un **comentario de la Página** en cada uno de los 6 posts con el link correcto de `quisqueyatravel.org`. Esto es más seguro (no toca el post público original) y Facebook genera automáticamente una vista previa nueva y funcional en el comentario, confirmada visualmente en los 5 primeros.
- Posts corregidos (comentario agregado con link funcionando, verificado con preview cards en vivo):
  1. 27 jun 8:10am — "¿Cuántos años llevas viajando a Punta Cana..." (Barahona) → `quisqueyatravel.org/guia-barahona`
  2. 27 jun 7:47am — "¿Eres de familia cibaeña..." (Santiago) → `quisqueyatravel.org/guia-santiago`
  3. 27 jun 4:17pm — "Todo el mundo habla de Punta Cana... pero los qu..." (Samaná) → `quisqueyatravel.org/guia-samana`
  4. 23 jun 2:03pm — "¿Llevas años viniendo a RD y nunca has ido a..." (Samaná) → `quisqueyatravel.org/guia-samana`
  5. 20 jun 7:04am — "¿Cuánto hace que no te comes un mangú..." (portada) → `quisqueyatravel.org`
- Post NO tocado (no lo necesitaba): 30 jun 7:53am, guía de Puerto Plata — el link en el texto del post ya es `quisqueyatravel.org/guia-puerto-plata` (correcto y funcional), solo la miniatura de Facebook muestra un "Page not found" viejo cacheado.

**Pendiente nuevo:**
- 🟢 Opcional: usar el Sharing Debugger de Facebook (developers.facebook.com/tools/debug/) para forzar que Facebook actualice la miniatura cacheada del post de Puerto Plata (cosmético, el link real ya funciona).

**Estado del deploy:** Sin cambios de código del sitio esta sesión — todo el trabajo fue en Facebook (comentarios) y esta bitácora.

---

### Sesión — 5 de julio de 2026

**Qué se hizo:**
- Auditoría completa del proyecto a pedido de Venul: seguridad del sitio (`quisqueya-travel-seguridad`), diseño/UX (`quisqueya-travel-design`) y estado general (esta bitácora)
- Seguridad: no se encontraron secretos/API keys expuestas ni dominios externos sospechosos. `_headers` tenía CSP, X-Frame-Options, Permissions-Policy y HSTS, pero le faltaban `X-Content-Type-Options: nosniff` y `Referrer-Policy` — corregido
- Diseño: detectado un bug real navegando el sitio en vivo — en la sección de hoteles, filtrando por Samaná, la tarjeta "Hotel Bahia Principe Grand Samana" mostraba el retrato de un hombre en vez de una foto de hotel (URL de Unsplash mal asignada en `data/hoteles.json`, probablemente por el scraper automático). Corregido reemplazando por la misma foto de playa que ya usa el otro hotel de Samaná (`photo-1518548419970-58e3b4079ab2`), consistente con el patrón que ya usa el archivo para otros hoteles sin foto propia
- Ambos fixes se subieron directo a `main` vía el editor web de GitHub (Claude in Chrome, sesión de Venul ya autenticada): commit `hoteles.json` (parent `1cf0ac5`) y commit `_headers` **`7d4057f`**
- Se intentó verificar en vivo si Cloudflare sigue removiendo la cabecera CSP (problema documentado el 1 jul) — el dashboard de Cloudflare (dash.cloudflare.com) se quedó congelado en el logo de carga en este navegador, sin llegar a mostrar contenido ni formulario de login. No se pudo confirmar ni descartar el problema desde Claude
- Venul pidió conectar la carpeta local del proyecto para no repetir el proceso de subir por GitHub cada vez — conectada `C:\Users\venul\OneDrive\Desktop\Quisqueya\` como carpeta de trabajo de Claude en esta sesión de Cowork
- Venul confirmó que **no quiere** el botón flotante de WhatsApp de vuelta (ver nota en Decisiones de Diseño — actualiza/pausa la decisión de junio 2026)

**Guías publicadas:**
- Ninguna guía nueva esta sesión

**Mejoras al sitio:**
- `_headers`: `X-Content-Type-Options: nosniff` + `Referrer-Policy: strict-origin-when-cross-origin` (commit `7d4057f`)
- `data/hoteles.json`: foto corregida en "Hotel Bahia Principe Grand Samana"

**Errores encontrados y solución:**
- Al verificar el commit de `_headers` justo después de subirlo, tanto la vista `blob` de GitHub como `raw.githubusercontent.com` seguían mostrando el archivo viejo (12 líneas, sin los headers nuevos) — pareció que el commit había fallado. Se confirmó en `/commit/<sha>` (el diff real, no cacheado) que el cambio sí se guardó correctamente con los `+2` esperados. Lección: para verificar un commit recién hecho, usar siempre la vista de diff del commit (`/commit/<sha>`), no `raw.githubusercontent.com` ni la vista `blob` — ambas pueden tardar unos minutos en reflejar el cambio por caché de CDN (mismo patrón ya visto el 30 jun con `index.html`)
- El dashboard de Cloudflare no cargó en el navegador de esta sesión (se quedó en el spinner). No se investigó más para no arriesgar quedar atascado en un login que no me corresponde completar — queda como pendiente de Venul

**Estado del deploy:**
- Ambos commits en `main`, Cloudflare Pages debería desplegar solo en 1-2 min como siempre

**Notas importantes:**
- Pendiente urgente (Venul, no Claude): revisar en Cloudflare dashboard → `quisqueyatravel.org` → Rules > Transform Rules (y "Modify Response Header" si existe aparte) por cualquier regla que mencione `Content-Security-Policy` y esté removiéndola. El `_headers` del repo ya tiene la CSP correcta — si sigue sin verse en el navegador, el problema está en la cuenta de Cloudflare, no en el código
- La carpeta local `Quisqueya` sigue teniendo la carpeta `.git` rota (sin `objects`) — sigue siendo inofensiva, backlog de borrarla cuando Venul quiera
- A partir de ahora Claude puede leer/escribir archivos directo en `C:\Users\venul\OneDrive\Desktop\Quisqueya\` en esta sesión de Cowork sin pedir la carpeta de nuevo — pero para publicar cambios en el sitio se sigue usando el editor web de GitHub (el `git` local sigue roto por el conflicto con OneDrive del 4 jul)

---

### Sesión — 4 de julio de 2026

**Qué se hizo:**
- Auditoría de diseño/UX de guia-punta-cana.html (comparada contra guia-santo-domingo.html) usando la nueva skill `quisqueya-travel-design`
- Detectado y corregido: canonical y og:url en 8 guías apuntaban a `/guia-x.html`, la URL que `_redirects` abandona con 301 — GSC marca esto como error ("canonical apunta a una URL que redirige"). Cambiadas a la URL limpia en: punta-cana, santo-domingo, barahona, requisitos-2026, costo-viaje-familia, vuelos-nyc, la-romana, samana
- **Decisión consciente:** esto contradice lo que decía esta misma bitácora (canonical `.html` "correcto", verificado en GSC el 30 jun). Se optó por la URL limpia de todas formas porque el sitio todavía no tiene tráfico real que proteger (Fase 6 del roadmap sigue pendiente) — es el momento más barato para corregirlo antes de que haya algo que perder con la reindexación
- Actualizado `reparacion.py`: su diccionario `CANONICALS` tenía hardcodeada la versión `.html` — sin este cambio, la próxima corrida del script hubiera revertido el fix. Se agregaron también `guia-la-romana.html` y `guia-samana.html`, que no estaban en el diccionario
- Estandarizados enlaces internos (logo, "Inicio", pie de página) en punta-cana, la-romana y samana — usaban `index.html` o URL absoluta en vez de `/` y rutas limpias como el resto del sitio
- Actualizado `COMMIT.bat`: agregado `guia-la-romana.html` y `reparacion.py` a la lista de `git add` (faltaban), y el mensaje de commit

**Pendiente (no se tocó, requiere contenido nuevo):**
- 9 de las 10 guías no tienen ninguna foto real del destino en el cuerpo del artículo (solo Santiago tiene una) — es trabajo de sourcing/creación de contenido, no un fix de código

**Estado del deploy:**
- ✅ Subido y desplegado. `COMMIT.bat` falló ("git" no reconocido — Git no está instalado en esta máquina, ni en Program Files ni en Program Files (x86)). Se subieron los 9 archivos vía el uploader web de GitHub (github.com/.../upload/main) usando Claude in Chrome + `file_upload`, commit directo a `main`: **5fedbfe**. Cloudflare Pages despliega solo en 1-2 min.

### Sesión — 3 de julio de 2026

**Que se hizo:**
- Investigación competitiva: analizados sitios de éxito de viajes afiliados (Viajeros Callejeros, Azul Marino) para sacar patrones — caja de acción con CTAs categorizados, enlaces de afiliado embebidos en el texto, tono honesto, mapa embebido
- Detectado y corregido un gap real: `guia-samana.html` era la única de las 11 guías sin Google Analytics, sin el widget de Travelpayouts, sin Schema.org Article y sin la caja de servicios (vuelos/carro/traslado/tours/eSIM/seguro) — quedó a la par del resto
- Diagnóstico de por qué no hay ventas todavía: (1) falta configurar método de pago en Travelpayouts (bloqueador real, acción de Venul), (2) el sitio casi no tiene tráfico porque es nuevo y no hay canal activo empujando visitas
- Creada imagen promocional `quisqueya-travel-promo-facebook.png` (1080x1350) con mockup del sitio + botón grande "Visita quisqueyatravel.org", para compartir en Facebook
- Publicado el post (imagen + copy) en la Página "El Quisqueyano en NYC" y compartido usando la función nativa "Compartir en grupos" de Facebook en 9 grupos dominicanos/latinos de NY (máximo permitido por publicación)
- Programada tarea recurrente `quisqueya-travel-fb-grupos` (cada 3 días, 11am) para seguir cubriendo el resto de los ~44 grupos de Venul en tandas de 9, con copy variado cada vez para no verse repetitivo. Se detiene sola cuando ya no queden grupos relevantes

**Guias publicadas:**
- Ninguna guía nueva esta sesión (se corrigió guia-samana.html, no es nueva)

**Mejoras al sitio:**
- guia-samana.html: Analytics + widget Travelpayouts + Schema Article + caja de servicios (commit `15b00a5` en GitHub, deploy automático vía Cloudflare Pages)

**Errores encontrados y solución:**
- Al revisar la carpeta local se descubrió que la skill/memoria genérica que carga por defecto apunta a un proyecto viejo de Netlify (golden-heliotrope-c5c46d.netlify.app) que ya no existe — Venul eliminó esa cuenta el 30 de junio. Ese contenido de la skill quedó obsoleto; la fuente de verdad real es este archivo (`memoria-proyecto.md`) y `DEPLOY-LEEME.md`, no la skill `quisqueya-travel-memoria` en sí
- bash mostró el archivo `guia-samana.html` truncado justo después de editarlo (sin `</html>`) — resultó ser un problema de caché/sync de la carpeta OneDrive dentro del sandbox, no una truncación real. Se verificó con la herramienta `Read` (que sí refleja el estado real) y el archivo estaba completo. Lección: si bash muestra algo raro en esta carpeta justo después de un Edit/Write, verificar con `Read` antes de asumir que algo se rompió

**Posts publicados:**
- FB: publicado en El Quisqueyano en NYC + compartido en 9 grupos (Latinos Y Dominicanos en NY y NJ x2, Dominicanos En Usa, Dominicanos en NY Nueva York, Dominicanos en New York, República Dominicana x2, Hispanos y Latinos en NY, Latinos en NY) — ver detalle y próximas tandas en `grupos-fb-promo.md`
- IG: no esta sesión

**Estado del deploy:**
- guia-samana.html en vivo en quisqueyatravel.org (Cloudflare Pages, deploy automático desde GitHub main)

**Notas importantes:**
- El bloqueador #1 para generar ventas reales sigue siendo que Venul configure el método de pago en Travelpayouts (app.travelpayouts.com/dashboard) — Claude no lo hace por norma de seguridad (datos financieros)
- Nuevo archivo de registro: `grupos-fb-promo.md` en esta misma carpeta — lleva el control de qué grupos de Facebook ya recibieron el post para que la tarea programada no se repita
- Nueva imagen reutilizable: `quisqueya-travel-promo-facebook.png` — sirve para futuras campañas, no hace falta regenerarla cada vez
- Se intentó programar la tanda 2 directo en el "Crear publicación" de Facebook (fecha futura + compartir en grupos combinados) y el modal se puso inestable con la automatización — no se publicó ni se programó nada, quedó como borrador sin terminar (sin riesgo). De paso se detectó que un clic activó por accidente "Promocionar publicación" (posible gasto en ads); se revirtió a tiempo, no se gastó nada. **Lección: en este modal de FB, verificar SIEMPRE el estado del toggle "Promocionar publicación" antes de cada "Publicar", y preferir refs de read_page/find sobre coordenadas de clic — el viewport cambia de tamaño entre capturas y los clics por coordenada caen en el lugar equivocado.**
- Pendiente explorar: el "Planificador" nativo de Meta (Panel profesional → Contenido → Planificador) como alternativa más estable para programar posts futuros, en vez del modal de "Crear publicación"
- La tarea programada `quisqueya-travel-fb-grupos` (cada 3 días) sigue siendo el plan activo para la tanda 2 en adelante

---

### Sesión — 30 de junio de 2026

**Qué se hizo:**
- Integrados enlaces de afiliados Travelpayouts en las 9 guías + portada: Aviasales (vuelos), GetRentacar (carro), Kiwitaxi (traslados aeropuerto), Klook (tours), Yesim (eSIM), EKTA (seguro de viaje) — manteniendo Stay22 como afiliado de hoteles
- Auditoría SEO completa: robots.txt ✅, sitemap.xml ✅, canonical tags ✅, hreflang ✅, JSON-LD ✅
- Diagnosticado el problema de "dos versiones" en Google: el sitio viejo quisqueyatravel.netlify.app seguía indexado y compitiendo con quisqueyatravel.org
- Title tag de la portada acortado de 85 a 55 caracteres (mejor SEO)
- Creado panel de control en el Escritorio: "Quisqueya Travel - Panel.html" con accesos directos a sitio, GitHub, Travelpayouts, Stay22, SEO, redes
- Venul eliminó su cuenta completa de Netlify

**Commits realizados en GitHub (rama main):**
- ✅ b029e1a — Integración Travelpayouts en las 9 guías + index.html
- ✅ 5d838e9 — Fix regresión: restaurar gtag y nav/footer completo en index.html, guia-punta-cana.html, guia-jarabacoa.html
- ✅ SEO: acortar title tag de la portada (85 a 55 caracteres)

**Errores encontrados y solución:**
- Comando sed truncó 10 archivos durante una edición masiva → recuperados sin pérdida usando GitHub (rama main) como fuente de verdad
- Usé una versión vieja en caché de GitHub (`raw.githubusercontent.com`) como base para la "recuperación", lo que casi revierte mejoras recientes (Google Analytics, nav de Santiago/Puerto Plata/Jarabacoa, hoteles2.js externo) en index.html, guia-punta-cana.html y guia-jarabacoa.html. Detectado a tiempo comparando contra el commit padre exacto (aee378d) y corregido en el commit 5d838e9. Lección: `raw.githubusercontent.com` puede tardar minutos en reflejar un commit nuevo — verificar siempre contra `/commits/main`, no asumir que el raw está actualizado.

**Estado del deploy:**
- Cloudflare Pages, auto-deploy desde main vía GitHub Actions — todo en vivo

**Notas importantes:**
- Pendiente: confirmar que el CDN de Netlify ya purgó la caché vieja (tarea programada `check-netlify-down-quisqueya-travel` corre el 1 jul 10am y avisa sola)
- Pendiente: Venul debe configurar el método de pago en Travelpayouts directamente en su dashboard — Claude no introduce datos bancarios/financieros por norma de seguridad

---

### Sesión — 27 de junio de 2026

**Qué se hizo:**
- Auditoría completa del sitio local
- Creada nueva guía: guia-santiago.html (Santiago de los Caballeros, 12KB)
- Actualizado index.html: tarjeta de Santiago en destinos + nav link + footer link + CSS background
- Actualizado sitemap.xml: 18 URLs (agregada guia-santiago)
- Fix: CTA de guia-costo-viaje-familia-rd.html → Stay22 directo (antes apuntaba a index.html#hoteles)
- Fix: CTA de guia-requisitos-viaje-rd-2026.html → Stay22 directo (antes apuntaba a index.html#hoteles)
- Fix: en/index.html "5 Destination Guides" → "6" + links EN corregidos (diferido por Venul)
- Post de Facebook publicado: https://facebook.com/2061443547418301_1318634073591687

**Commits realizados en GitHub (rama main):**
- ✅ 12c2331 — sitemap.xml (18 URLs con Santiago)
- ✅ 8fbfb50 — guia-costo-viaje-familia-rd.html (Stay22 CTA fix)
- ✅ 681e23b — guia-requisitos-viaje-rd-2026.html (Stay22 CTA fix)

**PENDIENTE para próxima sesión (archivos locales listos, solo falta commitear):**
1. 🔴 index.html — ir a https://github.com/venulhernandez-cyber/quisqueyatravel/edit/main/index.html
   → Contenido completo local en C:\Users\venul\OneDrive\Desktop\Quisqueya\index.html (694 líneas)
   → Cambios: tarjeta Santiago, nav link, CSS .destino-img.santiago, footer link
   → Mensaje de commit: "Add Santiago destination card + nav link to index.html"

2. 🔴 guia-santiago.html — NUEVO ARCHIVO, ir a https://github.com/venulhernandez-cyber/quisqueyatravel/new/main
   → Contenido completo local en C:\Users\venul\OneDrive\Desktop\Quisqueya\guia-santiago.html
   → Nombre del archivo: guia-santiago.html
   → Mensaje de commit: "Create guia-santiago.html (Santiago de los Caballeros)"

**Nota técnica:** El renderer de Chrome congela cuando el archivo es grande (>30KB). El trick es:
1. write_clipboard con el contenido completo
2. Navegar al editor de GitHub
3. Click en el editor → ctrl+a → ctrl+v
4. Click "Confirma los cambios..." → llenar mensaje → "Confirmar cambios"
5. Si el renderer congela, navegar a /commits/main para verificar que se guardó

---



### Sesión — 25 de junio de 2026

**Qué se hizo:**
- Auditoría SEO completa del sitio
- Confirmado que canonical homepage está CORRECTO en browser (fue problema de caché CDN de Netlify)
- robots.txt en GitHub correcto — problema era caché CDN
- Creado netlify.toml con Cache-Control: no-cache para forzar CDN a no cachear HTML
- Añadido hreflang a las 7 páginas en español
- Añadido x-default hreflang a las 6 páginas EN/FR
- Fijados links de afiliado Stay22 en guia-barahona.html y guia-vuelos-nyc-rd.html (antes apuntaban a #hoteles)
- Creadas 4 nuevas guías en inglés (ver abajo)
- Sitemap actualizado a 17 URLs
- Todo deployado en Netlify via GitHub (4 commits)

**Guías publicadas (nuevas hoy):**
- /en/guide-santo-domingo.html — "Santo Domingo: What to Do Before You Head to the Resort"
- /en/guide-entry-requirements-2026.html — "Dominican Republic Entry Requirements 2026"
- /en/guide-flights-nyc-dr.html — "Flights NYC to Dominican Republic 2026 — JFK, Newark or LaGuardia?"
- /en/guide-family-budget-dr.html — "Dominican Republic Family Trip Cost 2026 — Real Budget from NYC"

**Errores encontrados y solución:**
- canonical live mostraba netlify.app → en realidad era caché CDN, no bug en el archivo. Browser confirmó el correcto. Fix: netlify.toml con no-cache.
- robots.txt live mostraba netlify.app/sitemap.xml → mismo problema de caché. Archivo fuente ya tenía quisqueyatravel.org. Fix: netlify.toml forzó refresco.

**Estado del deploy:**
- ✅ 4 commits enviados a main en GitHub
- Netlify auto-deploy activo desde main
- Commit más reciente: "Add 4 EN guide pages: Santo Domingo, Entry Requirements, Flights, Family Budget"

---

## Pendientes (por prioridad) — reescrito 17 ago 2026 tras auditoría

> Nota: muchos pendientes de julio ya estaban resueltos sin documentar (23 guías ES en vez de 10, Schema.org Article ya en todas, EN/FR muy ampliados). Lista de abajo = estado real verificado hoy.

### 🔴 Urgente
- [x] ~~Subir a GitHub y desplegar los 6 archivos de Constanza/Boca Chica (Stay22 → Booking CJ)~~ → ✅ Desplegado (17 ago)
- [x] ~~Verificar que TODO el sitio migró de Stay22 a Booking CJ~~ → ✅ Verificado (18 ago) con grep sobre las 62 páginas HTML del repo local: **cero referencias a `stay22.com` en todo el sitio**. 57 páginas tienen link de Booking (`jdoqocy.com`), 2 usan el dominio alterno de CJ `tkqlhce.com` (mismo afiliado, misma comisión) — solo `404.html`, `admin.html` y el archivo de verificación de Google no tienen link de hotel, y no deberían tenerlo. `js/hoteles.js` y `js/hoteles2.js` (buscador interno) también apuntan a Booking. Migración 100% completa.
- [ ] Venul: configurar método de pago en Travelpayouts (app.travelpayouts.com/dashboard) — sigue siendo el bloqueador #1 para cobrar comisión de vuelos/carro/tours. Sin verificar desde julio.
- [ ] 🔴 **Hallazgo nuevo (18 ago):** al entrar al panel de la Página de Facebook apareció un aviso de **"Pago requerido"** — los anuncios de la cuenta publicitaria (Meta Ads, act_290012163) se pausaron porque no se pudo procesar el último pago. Venul debe actualizar el método de pago directamente en Facebook (Claude no introduce datos de pago) para que la campaña de tráfico a Punta Cana (`$5/día`) vuelva a correr.
- [x] ~~Confirmar si la sección CSP/Cloudflare sigue teniendo el problema detectado en julio~~ → ✅ Verificado en vivo (18 ago) vía cabeceras HTTP reales: `Content-Security-Policy` SÍ se está sirviendo (`default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net...`), junto con `Strict-Transport-Security`, `Referrer-Policy: strict-origin-when-cross-origin` y `X-Content-Type-Options: nosniff`. Cloudflare ya NO está removiendo la cabecera — el problema de julio quedó resuelto. Único detalle menor: el CSP incluye `'unsafe-inline'` en `script-src`, lo cual no es ideal pero no es un bloqueador.
- [x] ~~Confirmar si CJ Affiliate (Booking, CID 7985681) ya fue aprobado~~ → ✅ Confirmado por Venul el 17 ago — APROBADO
- [x] ~~Lista de correo / newsletter — sitio sin forma de capturar emails~~ → ✅ Google Form + sección `#newsletter` en `index.html`, desplegado (17 ago)
- [x] ~~Duplicado de `/guia-punta-cana.html` vs `/guia-punta-cana` en producción~~ → ✅ Verificado en vivo (18 ago): ambas URLs sirven ahora exactamente el mismo título, H1 y canonical (`https://quisqueyatravel.org/guia-punta-cana`) — el `.html` ya no es un artículo distinto, aunque técnicamente sigue devolviendo 200 en vez de un 301 real (el canonical correcto evita el problema de indexación duplicada de todas formas). El link "Leer en Español" en `/en/guide-punta-cana.html` sigue apuntando al `.html`, pero como ya sirve el contenido correcto no hay impacto real. Los 2 links del footer de esa misma página (Entry Requirements, Flights NYC-DR) también están corregidos — ya apuntan a las versiones en inglés (`/en/guide-entry-requirements-2026.html`, `/en/guide-flights-nyc-dr.html`) en vez de a las páginas en español. El hallazgo del 13 ago se resolvió solo entre esa fecha y hoy, probablemente por el "segundo camino de despliegue" mencionado en ese mismo informe.

### 🟡 Próximas sesiones
- [ ] Prueba social en el home: sección `#resenas` en `index.html` sigue oculta (`display:none`) — falta que Venul pase 3 comentarios reales de Facebook/Instagram para publicarla
- [x] ~~Pinterest: crear cuenta de negocio~~ → ✅ Creada y verificada (17 ago) — `pinterest.com/quisqueyatravel`
- [x] ~~Pinterest: crear tableros por destino y publicar primeros pines~~ → ✅ 6 tableros creados con 1 pin cada uno, enlazando a las guías reales (17 ago). Falta: agregar más pines por tablero y descripciones (ver nota técnica en la sesión de hoy)
- [x] ~~Auditar cuántas de las 23 guías ES ya tienen foto real del destino en el cuerpo~~ → ✅ Verificado (18 ago): **22 de 23 guías** ya tienen foto real (Pexels/Unsplash) en el cuerpo. Solo falta `guia-mejor-epoca-para-viajar-rd.html` — coincide con lo ya sabido de julio (Venul detuvo esa edición puntual a propósito). Pendiente: decidir si se aplica ahora
- [~] Fix de `prefers-reduced-motion` en producción — **no se pudo confirmar ni descartar (18 ago)**: WebFetch convierte la página a texto/markdown y descarta los bloques `<style>`, así que no es una herramienta confiable para verificar CSS en vivo. Sigue pendiente de confirmar con una captura de pantalla o inspección directa del navegador
- [ ] 🔴 **Hallazgo importante (18 ago): `quisqueya-travel-fb-grupos` y `quisqueya-travel-daily` NO existen como tareas programadas reales.** Se consultó `list_triggers` (el sistema oficial de tareas programadas de Cowork) y devolvió 0 resultados — ninguna tarea programada activa en la cuenta. Es probable que sesiones anteriores las hayan creado con el cron local (`CronCreate`), que se pierde al cerrar la sesión y nunca ejecuta nada de verdad. Esto significa que la campaña de grupos de Facebook probablemente lleva semanas/meses sin correr sola como se pensaba. Acción: si Venul quiere que esto siga corriendo automáticamente, hay que recrearlas con el sistema correcto de tareas programadas
- [ ] Pedirle a Venul que actualice esta bitácora (o decirme) cuándo se agregan guías nuevas fuera de esta sesión, para no perder el registro

### 🟢 Ideas / Backlog
- [ ] Borrar la carpeta oculta `.git` rota dentro de `Quisqueya` (inofensiva)
- [ ] Diversificar ingreso: versión de pago de "Arma tu itinerario gratis" (itinerario personalizado)
- [ ] Reforzar la voz/cara de Venul dentro de las guías (no solo en "Sobre mí")
- [ ] Video corto por guía (mismo esfuerzo que ya hace para El Quisqueyano, aplicado a Quisqueya Travel)
- [ ] Guía de vuelos desde Miami a RD (mercado hispano USA no-NYC)

---

## Decisiones de Diseño Tomadas

| Decisión | Razón | Fecha |
|---|---|---|
| Dominio personalizado quisqueyatravel.org | SEO — canonical propio, no depender de netlify.app | Jun 2026 |
| Afiliado: Stay22 (no directo Booking) | Stay22 agrega widget de hoteles y no requiere aprobación | Jun 2026 |
| netlify.toml con Cache-Control: no-cache en HTML | Evitar que CDN de Netlify sirva versiones viejas | Jun 2026 |
| Hreflang x-default → /en/ para todo el sitio | Google recomienda apuntar x-default al idioma más universal | Jun 2026 |
| Footer con aviso de afiliación en cada página | Requisito FTC y política de afiliados | Jun 2026 |
| Botón flotante WhatsApp en páginas ES | Conversión directa con la comunidad dominicana | Jun 2026 |
| ~~Restaurar botón WhatsApp~~ → Venul dijo que NO lo quiere | Decisión explícita de Venul, no tocar este tema salvo que él lo pida de nuevo | 5 jul 2026 |
| Sin tildes en alt/meta de imágenes | Evita problemas de encoding | Jun 2026 |
| Travelpayouts como segundo afiliado (vuelos/carro/traslados/tours/eSIM/seguro) | Stay22 solo cubre hoteles — TP cubre el resto del viaje sin requerir cuenta nueva por servicio | 30 jun 2026 |
| Eliminar cuenta de Netlify por completo (no solo desconectar) | El sitio viejo seguía indexado en Google compitiendo con quisqueyatravel.org pese al canonical correcto | 30 jun 2026 |

---

## Errores Conocidos y Soluciones

| Error | Causa | Solución |
|---|---|---|
| web_fetch muestra canonical netlify.app | Caché del CDN de Netlify en ciertos nodos | Verificar siempre con el browser, no con web_fetch. netlify.toml con no-cache fuerza refresco. |
| Sitio en blanco después de deploy | Archivo HTML truncado (no termina en `</html>`) | Verificar siempre el cierre del archivo antes de subir |
| Post de IG fallido | Instagram requiere media (imagen/video) | Generar visual o publicar solo en FB |
| GitHub commit message va al campo description | El campo title se limpia con triple-click | Usar triple-click + retype antes de confirmar |
| Recuperación de archivos con baseline desactualizado deshace mejoras recientes | raw.githubusercontent.com puede tardar minutos en reflejar el último commit (caché de CDN) | Verificar siempre contra github.com/.../commits/main antes de usar un raw fetch como fuente de verdad; si hace falta, fijar el commit exacto (ej. .../<sha>/archivo.html) |
| Comando sed truncó 10 archivos en una edición masiva | sed con regex multilínea mal escapado sobre archivos grandes | Evitar sed para ediciones grandes/multilínea en HTML; usar Read+Edit/Write por archivo |
| `COMMIT.bat` falla con "git no se reconoce como comando" | Git no estaba instalado en esta máquina — el script asume que sí | Git ya se instaló (4 jul, `C:\Program Files\Git`). Pero NO vale la pena terminar de conectar `COMMIT.bat`: la carpeta `Quisqueya` se sincroniza con OneDrive, y OneDrive corrompió los archivos internos de `.git` a medias en el primer intento de `git init` (falta `.git/objects`, config con error). OneDrive + git en la misma carpeta es una combinación frágil conocida — puede repetirse. **Decisión (4 jul): usar SIEMPRE github.com/.../upload/main con Claude in Chrome (`file_upload` sobre el input de archivos) para desplegar, no local git.** Queda una carpeta `.git` rota e inofensiva dentro de `Quisqueya` (oculta, sin `objects`, git no la reconoce como repo) — se puede borrar cuando Venul quiera, no urge. |

---

## Roadmap del Proyecto

| Fase | Objetivo | Estado |
|---|---|---|
| 1 — Lanzamiento | Sitio en vivo con dominio propio | ✅ Completado |
| 2 — SEO Técnico | Canonicals, hreflang, sitemap, robots.txt | ✅ Completado |
| 3 — Multilingual | EN + FR pages para mercados internacionales | ✅ EN: 7 páginas ✅ FR: 3 páginas |
| 4 — Indexación | Google indexando todas las URLs | ⏳ En progreso (solicitado) |
| 5 — Afiliación Booking | CJ Affiliate aprobado y links activos | ⏳ Pendiente aprobación |
| 6 — Tráfico | 500 visitas/mes orgánicas | 🔜 Pendiente |
| 7 — Monetización | Primera comisión de afiliado | 🔜 Pendiente |
| 8 — Escala | 20+ guías + campaña Meta Ads | 🔜 Pendiente |
