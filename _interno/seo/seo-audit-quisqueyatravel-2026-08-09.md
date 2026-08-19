# Auditoría SEO — Quisqueya Travel (9 de agosto 2026)
Modo: cliente exigente revisando el sitio antes de cerrar el día.

## Resumen ejecutivo

Vengo a buscarle fallos a mi propio sitio antes de parar por hoy, y encontré uno que ya vivimos antes: **la guía de Boca Chica que publicamos hoy mismo es una página huérfana** — está en el sitemap pero no hay un solo enlace hacia ella desde el home ni desde ninguna otra guía. Es exactamente el mismo bug que "landing-arma-tu-itinerario" tuvo hasta ayer. Fuera de eso, la base técnica sigue sólida (title, meta, canonical, schema Article+FAQPage en el 100% de las páginas nuevas) y el quick win pendiente del informe de ayer (meta description de itinerario-7-días) ya se corrigió solo. Evaluación general: **base sólida, un bloqueador crítico de hoy que hay que cerrar antes de parar.**

## 🔴 Hallazgo crítico — cerrar hoy

| Página | Issue | Severidad | Fix |
|---|---|---|---|
| `guia-boca-chica.html` | Publicada hoy (9 ago) con title/meta/schema completos, pero **cero enlaces internos entrantes** — no está en el nav, ni en el footer, ni en ninguna otra guía. Google no la va a encontrar en el próximo crawl salvo por el sitemap. | Crítico | Agregar al dropdown "Destinos y guías" del nav, al footer de las 21 guías, y considerar un CTA cruzado desde `guia-santo-domingo` (Boca Chica está a 20 min del aeropuerto de SD — enlace natural). Mismo fix que se le aplicó ayer a la landing de itinerario. |

## 🟡 Hallazgos medios

| Página | Issue | Severidad | Fix |
|---|---|---|---|
| `guia-constanza.html` | Title de 68 caracteres ("Constanza 2026: El Valle Frío que Nadie te Cuenta \| Quisqueya Travel") — Google trunca sobre ~60. Meta description de 166 caracteres — también se corta. | Media | Recortar title a ~58 car. (ej. quitar "que Nadie te Cuenta" o el año) y description a ~155 car. |
| `guia-mejor-epoca-para-viajar-rd.html` | Title de 62 caracteres, 2 sobre el límite recomendado — riesgo bajo de corte, pero al límite. | Baja | Recortar ~5 caracteres si quieres margen. |
| Home `#resenas` | Sigue oculta con placeholders sin rellenar — van 2 meses así (flag desde junio). | Media | Pedir los 3 testimonios reales de FB/IG y activar la sección. |
| Homepage | Solo schema `TravelAgency`, sin `WebSite`+`SearchAction`. | Baja | Opcional — ayuda a que Google muestre el sitename en resultados. |
| `/en/` | 7 guías en español sin versión en inglés: itinerario-7-días, hoteles-baratos-punta-cana, las-terrenas, landing-itinerario, **constanza, mejor-época, boca-chica** (estas 3 últimas nacieron sin EN). | Media | La brecha bajó de 10 a 7 desde ayer — bien — pero cada guía nueva la vuelve a abrir. Considerar traducir al momento de publicar, no después. |

## ✅ Lo que se corrigió solo desde ayer

- Meta description de `guia-itinerario-7-dias-republica-dominicana` bajó de 156 a 133 caracteres — el quick win de ayer ya está resuelto.
- La landing de itinerario sigue bien enlazada (19 entradas), no volvió a quedar huérfana.
- Las 3 guías nuevas (Constanza, Cuándo Viajar, Boca Chica) sí tienen title, meta, canonical y schema Article+FAQPage completos — el problema de Boca Chica es solo de enlazado, no de estructura on-page.

## Hallazgo nuevo (cambio de hoy en index.html)

| Elemento | Issue | Severidad | Fix |
|---|---|---|---|
| Tarjeta "Alquiler de carro" (`.servicio-badge`) | La animación de pulso del badge y el `cue-bounce` del hero corren indefinido sin respetar `prefers-reduced-motion` — mala práctica de accesibilidad para usuarios con sensibilidad al movimiento. Contraste de color revisado y sí pasa (5.1:1 y 6.5:1, AA ok). | Baja | Agregar `@media (prefers-reduced-motion: reduce) { animation: none; }` a `.servicio-badge` y `.scroll-cue`. 2 minutos de arreglo. |

## Checklist técnico

| Check | Estado | Detalle |
|---|---|---|
| HTTPS | ✅ Pass | Forzado vía HSTS |
| Sitemap.xml | ✅ Pass | 21 guías ES + 15 EN + 3 FR, todas listadas incl. Boca Chica |
| Robots.txt | ✅ Pass | Limpio |
| Canonical tags | ✅ Pass | Presentes en las 3 guías nuevas + home |
| Schema Article + FAQPage | ✅ Pass | 3/3 guías nuevas |
| Alt text en imágenes | ✅ Pass | 100% de imágenes de contenido (el único `<img>` sin alt es el pixel de tracking 1×1, no cuenta) |
| Enlazado interno | 🔴 Fail | `guia-boca-chica` huérfana |
| Reduced motion | 🟡 Warning | Animaciones nuevas sin fallback de accesibilidad |
| Enlaces rotos (`/hoteles`) | ✅ Pass | No se encontró ninguna referencia rota |

## Plan de acción — para cerrar hoy

**Hoy (bloqueador, ~10 min):**
1. Enlazar `guia-boca-chica` desde el nav, el footer de las guías, y un CTA cruzado en `guia-santo-domingo`.

**Esta semana (quick wins):**
2. Recortar title/description de `guia-constanza` (68→58 car. / 166→155 car.).
3. Agregar `prefers-reduced-motion` a las animaciones de badge y scroll-cue.
4. Recortar 5 caracteres al title de `guia-mejor-epoca-para-viajar-rd`.

**Backlog (sin urgencia):**
5. Traducir al inglés las 7 guías pendientes (priorizar Boca Chica y Constanza si generan tráfico).
6. Conseguir 3 testimonios reales para activar `#resenas`.
7. Agregar schema `WebSite` + `SearchAction` al home.

---

¿Cierro el bloqueador de hoy (enlazar Boca Chica) antes de terminar, o lo dejamos anotado para mañana?
