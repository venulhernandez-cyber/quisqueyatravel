# Auditoría SEO — quisqueyatravel.org
**Fecha:** 31 de julio, 2026
**Tipo:** Auditoría completa (técnica + on-page + gap de contenido + seguimiento de cambios desde el 30 de julio)
**Nota sobre datos:** Semrush sigue sin autorizar en esta sesión, así que las cifras de volumen/dificultad de keywords son estimaciones cualitativas. Conecta Semrush cuando puedas para cifras exactas.

---

## Resumen Ejecutivo

Desde la auditoría de ayer resolviste los tres problemas grandes que señalé: el bug de hreflang en francés está arreglado, las 13 guías ahora tienen al menos una foto real con alt text descriptivo (antes solo Santiago la tenía), y ya existe la página roundup "Mejores playas de República Dominicana" que cerraba tu brecha de contenido más clara frente a competidores. Verifiqué las 24 páginas del sitio (ES/EN/FR) en vivo contra el código local: **las 24 están sincronizadas** — título, canonical y meta descripción coinciden exactamente entre local y producción, sin fugas de dominio viejo ni problemas de canonical.

Quedan tres cosas puntuales, ninguna crítica: varios títulos nuevos superan los 60 caracteres (se truncan en Google), el `lastmod` del sitemap no refleja las ediciones de hoy en 5 guías, y la página nueva de playas todavía no recibe enlaces internos desde las guías de destino individuales. Evaluación general: **el sitio pasó de "base fuerte, necesita trabajo puntual" a "en muy buena forma"** — los ajustes que quedan son de 30-60 minutos, no de fondo.

---

## ✅ Verificación de lo corregido desde ayer

| Hallazgo de ayer | Estado hoy |
|---|---|
| Bug de hreflang x-default en FR | ✅ **Resuelto** — `fr/guide-punta-cana.html` y `fr/guide-republique-dominicaine.html` ahora apuntan correctamente a sus pares en `/en/`, igual que ES y EN |
| 11 de 12 guías sin foto real | ✅ **Resuelto** — las 13 guías tienen ahora 1 foto real con alt text (la nueva de playas tiene 6) |
| Brecha de contenido: no existía roundup "mejores playas" | ✅ **Resuelto** — `guia-mejores-playas-republica-dominicana.html` ya está publicada y en vivo, ~2,450 palabras, 3 bloques de schema.org |
| Títulos largos (Barahona 70, Itinerario 67, Samaná 68) | ✅ **Resuelto** — los tres bajaron a 58-60 caracteres |

---

## Hallazgos Técnicos

| Check | Estado | Detalle |
|---|---|---|
| Sincronía local vs. producción (24 páginas ES/EN/FR) | ✅ Pass | Título, canonical y meta descripción coinciden en las 24 páginas verificadas en vivo |
| robots.txt | ✅ Pass | Permite todo excepto `/cdn-cgi/`, referencia el sitemap |
| XML Sitemap — existencia y páginas nuevas | ✅ Pass | Incluye la página de playas nueva con `lastmod` correcto |
| Canonical tags | ✅ Pass | Auto-canonicalización correcta en las 24 páginas, sin fugas a netlify.app |
| HTTPS | ✅ Pass | Todo el sitio en HTTPS |
| Un solo H1 por página | ✅ Pass | Verificado en todas las guías (la única página con 0 H1 es el archivo de verificación de Google, que no es una página real) |
| Cabeceras de seguridad (`_headers`) | ✅ Pass | CSP, HSTS, X-Frame-Options, nosniff y Permissions-Policy configurados correctamente |
| Alt text en imágenes de guías | ✅ Pass | Descriptivo y específico en las 4 guías revisadas (Jarabacoa, La Romana, Puerto Plata, Samaná) |
| Datos estructurados (JSON-LD) | ✅ Pass | Presente en home y guías (3 bloques en Punta Cana y en la nueva de playas) |
| **Sitemap `lastmod` desactualizado** | 🟡 Warning | Ver detalle abajo |
| **Títulos que exceden 60 caracteres** | 🟡 Warning | Ver detalle abajo |
| **Enlazado interno hacia la página de playas** | 🟡 Warning | Ver detalle abajo |

### 🟡 Sitemap con `lastmod` desactualizado en 5 guías

Editaste hoy (31 de julio) el contenido y agregaste fotos a `guia-jarabacoa`, `guia-puerto-plata`, `guia-samana`, `guia-la-romana` e `guia-itinerario-republica-dominicana`, pero el `sitemap.xml` sigue mostrando `lastmod` del 11-12 de julio para esas cinco. Google usa esta fecha como señal de frescura — no es grave, pero le resta una señal de "contenido actualizado" a páginas que sí lo están.

**Fix:** actualiza el `lastmod` de esas 5 entradas a `2026-07-31` en `sitemap.xml`.

### 🟡 Títulos que ahora exceden 60 caracteres

Al revisar las guías editadas hoy, 5-6 títulos quedaron por encima del rango recomendado (50-60 caracteres, se truncan en el SERP con "..."):

| Página | Caracteres |
|---|---|
| `guia-punta-cana.html` | 66 |
| `guia-jarabacoa.html` | 65 |
| `guia-la-romana.html` | 64 |
| `guia-costo-viaje-familia-rd.html` | 63 |
| `guia-santo-domingo.html` | 63 |
| `guia-santiago.html` | 61 (al límite) |

Impacto bajo (Google recorta, no rompe indexación), pero es fácil de ajustar.

### 🟡 La página de playas no recibe enlaces desde las guías de destino

Solo `index.html` enlaza a `guia-mejores-playas-republica-dominicana.html`. Ninguna guía individual (Punta Cana, Samaná, Puerto Plata, etc.) la menciona ni enlaza hacia ella, aunque temáticamente están directamente relacionadas. Esto es una oportunidad perdida de link juice interno — la página nueva depende 100% del home para recibir autoridad.

**Fix:** agrega 1 enlace contextual desde cada guía de destino hacia la página de playas (ej. en Punta Cana: "si quieres comparar con otras playas de la isla, mira nuestra guía de mejores playas de RD").

---

## Colisión de Marca (seguimiento)

Sigue vigente lo de ayer: quisqueyatravel.net, quisqueyatravel.com y "Quisqueya Travel Solutions" ocupan el espacio de búsqueda de marca. No hay acción nueva aquí — la recomendación de reforzar "El Quisqueyano" como ancla de búsqueda de marca se mantiene.

---

## Panorama de Competidores (actualizado)

La brecha más clara de ayer (roundup de playas) ya está cerrada con tu nueva página. Brecha siguiente más evidente:

| Competidor | Qué hacen bien | Brecha frente a Quisqueya Travel |
|---|---|---|
| Viajeros Callejeros / Temporada de Viajes | Roundups de playas y hoteles | Ya no es tu brecha — tu página de playas la cubre y con más voz propia |
| La Cosmopolilla | Itinerarios largos, afiliados de reservas | Tu itinerario de 10 días ya compite bien; falta variante corta (7 días) |
| Sitios genéricos de "top hoteles [destino]" | Rankean con listas tipo "10 mejores hoteles en Punta Cana" | Sigues sin página de "top hoteles baratos Punta Cana" (ya estaba en tu backlog de ayer) |

---

## Oportunidades de Keywords (actualizado)

| Keyword | Dificultad estimada | Oportunidad | Estado | Formato recomendado |
|---|---|---|---|---|
| mejores playas república dominicana | Media-alta | Alta | ✅ Ya cubierto (nuevo) | — |
| itinerario 7 días república dominicana | Baja-media | Media | Pendiente | Variante corta del itinerario de 10 días ya existente |
| top hoteles baratos punta cana | Media | Media | Pendiente (backlog) | Página nueva tipo listado |
| las terrenas república dominicana | Baja | Media | Parcial (dentro de Samaná) | Evaluar página propia si el tráfico de Samaná lo justifica |
| dominicanos en nyc viajar a rd | Baja (nicho) | Alta (ventaja única) | Pendiente | Contenido que conecta El Quisqueyano con Quisqueya Travel |
| isla saona guía completa | Baja-media | Media | Mencionada en playas, sin guía propia | Página dedicada — Isla Saona es un tour muy buscado por separado |
| qué hacer en cabarete | Baja | Media | Mencionada en Puerto Plata, sin foco propio | Sección o página corta |

---

## Plan de Acción Priorizado

### Quick wins (hoy/esta semana)
1. Actualizar `lastmod` a `2026-07-31` para las 5 guías editadas hoy en `sitemap.xml` — 5 minutos.
2. Acortar los 6 títulos que superan 60 caracteres — 20 minutos.
3. Agregar 1 enlace interno desde cada guía de destino hacia la página de playas — 20 minutos.

### Inversión estratégica (este trimestre)
1. Variante corta "Itinerario 7 días República Dominicana" reciclando el de 10 días.
2. Página "Top hoteles baratos en Punta Cana" (sigue en backlog desde ayer).
3. Página dedicada a Isla Saona — mencionada pero sin guía propia, y es un término de búsqueda fuerte por sí solo.
4. Contenido de nicho "dominicanos en NYC viajando a RD" para capitalizar tu audiencia de El Quisqueyano.

---

## Siguientes pasos posibles
- ¿Corrijo ahora mismo el `sitemap.xml` y los 6 títulos largos?
- ¿Agrego los enlaces internos hacia la guía de playas en las 6-7 guías de destino?
- ¿Redacto el borrador de "Itinerario 7 días" o de "Isla Saona"?
- Cuando conectes Semrush, puedo re-correr esto con cifras reales de volumen y dificultad.
