# Auditoría SEO — Quisqueya Travel (8 de agosto 2026)

Auditoría completa en vivo de quisqueyatravel.org, comparando contra las auditorías previas (jul 2026 y 5 ago 2026) para medir qué avanzó y qué es nuevo.

## Resumen ejecutivo

El sitio tiene una base técnica excelente para 17 guías: title, meta description, canonical, hreflang, schema Article + FAQPage y alt text en el 100% de las imágenes. El hallazgo crítico de esta auditoría — la landing "Arma tu itinerario" huérfana, sin sitemap ni enlaces internos — **ya se arregló en el mismo día**. Las prioridades que quedan son cerrar la brecha de contenido en inglés (10 guías sin traducir) y ajustar el enfoque de keywords hacia un público global de viajeros a RD, no solo la diáspora de Nueva York. Evaluación general: **base sólida, con el bloqueador principal ya resuelto.**

## ✅ Lo que sigue sólido

- **Técnico impecable en las 17 guías:** title único, meta description, canonical, hreflang, JSON-LD Article + FAQPage en el 100% de las páginas (verificado archivo por archivo).
- **Imágenes:** 100% de las `<img>` en las guías tienen alt text descriptivo; se cargan vía Pexels con `loading="lazy"`, así que no pesan en tu propio hosting.
- **Cabeceras de seguridad completas:** CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy — sin cambios, siguen bien.
- **Meta description del home** quedó en 145 caracteres — el fix del 5 de agosto se mantiene en producción.
- **Scripts no bloquean el render:** GTM y el pixel de afiliados cargan `async`, no hay `<script>` de terceros bloqueando el `<head>`.
- **robots.txt limpio:** `Allow: /` + sitemap declarado. El bloqueo de crawlers de IA que viste en el informe del 5 de agosto vive en Cloudflare (edge), no en el archivo fuente — confirmado.
- **3 guías nuevas desde el 5 de agosto** (`guia-las-terrenas`, `guia-mejores-hoteles-baratos-punta-cana`, `guia-itinerario-7-dias-republica-dominicana`) ya nacieron con title, meta, canonical y schema completos — no hay que tocarlas.

## ✅ Hallazgo crítico — Resuelto (8 de agosto)

| Página | Issue | Severidad | Estado |
|---|---|---|---|
| `landing-arma-tu-itinerario.html` | Página huérfana: no estaba en `sitemap.xml` ni tenía enlaces entrantes. | Crítico | **Arreglado.** Se agregó a `sitemap.xml`, al menú de navegación del home, a un nuevo CTA en la sección de calculadora, y al footer de las 17 guías. Ahora tiene 19 enlaces internos entrantes y Google puede descubrirla e indexarla en el próximo crawl. |

## 🟡 Hallazgos medios (siguen o crecieron desde el 5 de agosto)

| Página | Issue | Severidad | Fix |
|---|---|---|---|
| `/en/` | La brecha creció: ahora son **10 guías** sin versión en inglés (Santiago, Jarabacoa, La Romana, Barahona, Isla Saona, Mejores Playas, Las Terrenas, Hoteles Baratos Punta Cana, Itinerario 7 Días, y la landing de itinerario) vs. 7 páginas EN existentes | Media | Priorizar traducir Isla Saona y Mejores Playas primero (son las de mayor `priority` en el sitemap: 0.9) |
| `/fr/` | Sigue en 3 páginas, sin cambios desde julio | Baja | Backlog, sin urgencia |
| `guia-itinerario-7-dias-republica-dominicana.html` | Meta description de 156 caracteres — al límite, Google puede cortarla en móvil | Baja | Recortar ~10 car. si quieres margen |
| Home `#resenas` | Sigue oculta con placeholders de comentarios reales sin rellenar | Media | Pendiente desde junio — mismo fix: pedir 3 testimonios reales de FB/IG |
| Homepage | Solo tiene schema `TravelAgency`. No hay `WebSite` con `SearchAction` ni `ItemList` de las guías | Baja | Opcional: agregar `WebSite` schema ayuda a que Google muestre el sitename correctamente en resultados |

## Checklist técnico

| Check | Estado | Detalle |
|---|---|---|
| HTTPS | ✅ Pass | Forzado vía HSTS |
| Sitemap.xml | 🟡 Warning | Completo excepto la landing huérfana |
| Robots.txt | ✅ Pass | Limpio, permite todo excepto `/cdn-cgi/` |
| Canonical tags | ✅ Pass | Presentes en las 17 guías + home |
| Hreflang | ✅ Pass | es/en/fr donde existe la traducción |
| Schema Article | ✅ Pass | 17/17 guías |
| Schema FAQPage | ✅ Pass | 17/17 guías — buena oportunidad de rich snippets |
| Alt text en imágenes | ✅ Pass | 100% de las guías revisadas |
| Render-blocking scripts | ✅ Pass | Todo async |
| Viewport / mobile | ✅ Pass | Meta viewport correcto |
| Enlazado interno | 🔴 Fail | Landing de itinerario sin ningún enlace entrante |
| Seguridad (headers) | ✅ Pass | CSP, HSTS, X-Frame-Options completos |

## Panorama de keywords y competencia (investigación web)

**Actualización de enfoque (8 de agosto):** el público objetivo es cualquier persona en el mundo que quiera viajar a República Dominicana — no solo la diáspora de Nueva York. NYC/vuelos desde EE.UU. sigue siendo un contenido válido (es de donde escribes y tienes ventaja real), pero la estrategia de keywords ahora prioriza términos que buscaría un viajero global: de España, Latinoamérica, o cualquier parte de EE.UU., además del que visita familia.

Tu competencia directa en español son sitios genéricos de viaje (Wowair, La Cosmopolilla, Playa.do, Viajeros Callejeros, Mochiadictos) y gigantes como Tripadvisor para términos comerciales como "hoteles baratos Punta Cana". La mayoría escribe guías genéricas de mochilero o resort; muy pocos combinan precios reales en dólares + tono auténtico dominicano + cobertura completa de la isla (no solo Punta Cana) — ahí está tu espacio.

**Oportunidades de keyword — audiencia global de viajeros a RD:**

| Keyword / tema | Intención | Dificultad estimada | Por qué importa |
|---|---|---|---|
| "cuánto cuesta viajar a República Dominicana" | Informacional/comercial | Media-alta (varios blogs grandes) | Ya cubierta con `guia-costo-viaje-familia-rd` — volumen alto y global, vale la pena reforzarla con precios en USD y EUR |
| "mejor época para viajar a República Dominicana" | Informacional | Media | Búsqueda universal sin importar el país de origen; buen candidato a featured snippet |
| "República Dominicana en 7 días" / "en 10 días" | Informacional/comercial | Media | Ya cubiertas — formato itinerario funciona igual de bien para un viajero de México, España o EE.UU. |
| "Punta Cana vs Bávaro" / "Punta Cana vs Boca Chica" | Comercial/comparativo | Media | Formato comparativo que la competencia grande no cubre bien en español, útil para cualquier viajero decidiendo zona |
| "requisitos para entrar a República Dominicana 2026" | Informacional | Media | Ya cubierta — aplica igual a viajeros de EE.UU., Europa o Latam; verificar que la guía cubra los distintos países de origen, no solo EE.UU. |
| "hoteles baratos Punta Cana" | Comercial | Alta (compite con Tripadvisor) | Ya cubierta — mantener actualizada la de precios 2026 |
| "qué llevar cuando visito familia en RD" | Informacional | Baja | Nicho específico (diáspora) que sigue siendo válido como contenido secundario, no como eje central |
| "vuelo a Santo Domingo/Punta Cana cuánto dura / cuánto cuesta" | Transaccional/informacional | Baja-media | Expandir `guia-vuelos-nyc-rd` a una versión general de vuelos internacionales a RD (no solo desde NYC), o crear una guía nueva más amplia |
| "impuestos y aduana al llegar a RD con maletas" | Informacional | Baja | Útil para cualquier viajero que entra con mucho equipaje, no solo diáspora |
| "cuándo NO viajar a RD (temporada ciclones)" | Informacional | Baja | Contenido de utilidad real para cualquier viajero, buen candidato a featured snippet |

## Plan de acción priorizado

**Ya resuelto (8 de agosto):**
1. ✅ `landing-arma-tu-itinerario` agregada a `sitemap.xml`.
2. ✅ Enlazada desde el menú de navegación del home, un CTA nuevo en la sección de calculadora, y el footer de las 17 guías (19 enlaces internos nuevos en total).

**Esta semana (quick wins pendientes):**
3. Recortar la meta description de `guia-itinerario-7-dias-republica-dominicana` a ~150 car.
4. Revisar `guia-requisitos-viaje-rd-2026` y `guia-vuelos-nyc-rd` para confirmar que hablan a un viajero global (EE.UU., Europa, Latam), no solo a alguien que sale de NYC.

**Este mes (inversión estratégica):**
5. Traducir al inglés `guia-isla-saona` y `guia-mejores-playas-republica-dominicana` primero (mayor prioridad en sitemap) — clave para captar al viajero global que busca en inglés.
6. Reforzar `guia-costo-viaje-familia-rd` con precios también en USD/EUR para que sirva a cualquier país de origen, no solo a quien convierte desde pesos dominicanos.
7. Conseguir los 3 testimonios reales para activar `#resenas` en el home.

**Sin cambios (igual que en agosto 5):**
- Método de pago de Travelpayouts sin configurar.
- Aprobación de CJ Affiliate (Booking) pendiente.
- `/fr/` sigue en 3 páginas, backlog sin urgencia.

---

¿Quieres que revise `guia-requisitos-viaje-rd-2026` y `guia-vuelos-nyc-rd` para ampliarlas a un público global, o que arranque la traducción al inglés de Isla Saona y Mejores Playas?
