# Auditoría SEO — Quisqueya Travel (5 de agosto 2026)

Revisión en vivo de quisqueyatravel.org contra la memoria del proyecto y el informe anterior (jul 2026).

## ✅ Lo que sigue sólido

- **Técnico base intacto:** canonical, hreflang (es/en/fr), sitemap.xml (20 URLs, incluye las 2 guías nuevas), robots.txt, JSON-LD Article en las guías.
- **Cabeceras de seguridad completas** en `_headers`: CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy. El bloqueo de CSP por Cloudflare que quedó pendiente en julio ya no aparece como riesgo en el archivo fuente (confirmar visualmente en el navegador si quieres cerrarlo del todo).
- **Fotos reales con alt text** ya están en el cuerpo de Barahona, Jarabacoa, Samaná, Punta Cana y las demás guías — el pendiente de julio ("9 de 10 guías sin foto real") está resuelto.
- **2 guías nuevas bien optimizadas** desde la última auditoría: `guia-isla-saona` y `guia-mejores-playas-republica-dominicana` — title, meta, canonical, hreflang y schema completos de entrada.

## 🟡 Hallazgos nuevos

| Página | Issue | Severidad | Fix |
|---|---|---|---|
| Home (`/`) | Meta description de 166 caracteres (Google corta ~155-160) | Media | Recortar a ~150 car., ej: "Guías de viaje, hoteles y tips para República Dominicana. Para dominicanos de la diáspora y viajeros que quieren descubrir la isla de verdad." |
| Todo el sitio | `robots.txt` en producción tiene un bloque "Cloudflare Managed content" que agregó `Disallow` para GPTBot, ClaudeBot, Google-Extended, Amazonbot, etc. No afecta a Googlebot/Bing (indexación normal sigue igual), pero sí bloquea que el contenido aparezca en respuestas de ChatGPT Search, Perplexity o Gemini | Baja/estratégica | Decisión tuya: si quieres visibilidad en buscadores con IA, cambia `Content-Signal: ai-train=no` a permitir `ai-input=yes` en Cloudflare (Settings → AI Crawl Control) |
| `/en/` | Solo 7 páginas EN vs. 14 en ES — faltan Santiago, Jarabacoa, La Romana, Barahona, Isla Saona, Mejores Playas | Media | Traducir las 6 guías faltantes (contenido, no técnico) |
| `/fr/` | Solo 3 páginas FR, sin cambios desde julio | Baja | Sigue en el backlog, sin urgencia mientras EN no esté al día |
| Home `#resenas` | Sigue oculta con placeholders sin rellenar ("[TEXTO DEL COMENTARIO REAL]") — correcto que esté oculta, pero lleva desde junio sin los 3 comentarios reales | Media | Pedir/copiar 3 comentarios reales de FB/IG cuando puedas |

## Plan de acción

**Esta semana (quick wins):**
1. ✅ Meta description del home acortada a 141 caracteres — commit `9d0f179`, desplegado a main vía GitHub. Cloudflare Pages lo publica solo en 1-2 min.
2. ✅ Crawlers de IA (5 ago): Venul cambió **Google-Extended** y **meta-externalagent** de Block a Allow en Cloudflare (Security → AI Crawl Control → Crawlers). Esto habilita que Gemini/AI Overviews y Meta AI puedan citar el contenido del sitio. GPTBot, ClaudeBot, Bytespider, CCBot, Amazonbot y Applebot-Extended se dejaron bloqueados a propósito (son solo de entrenamiento, no afectan citas en ChatGPT Search ni Perplexity, que ya estaban permitidos). Cambio hecho directo en el dashboard de Cloudflare — no requiere deploy ni afecta el repo.

**Este mes:**
3. Traducir al inglés las 6 guías que le faltan a `/en/`.
4. Conseguir los 3 testimonios reales para activar la sección de reseñas.

**Sin cambios respecto a julio (siguen igual):**
- Método de pago de Travelpayouts sin configurar — bloqueador #1 para monetizar.
- Aprobación de CJ Affiliate (Booking) pendiente.
- Fase 6 del roadmap (500 visitas/mes) sin alcanzar.
