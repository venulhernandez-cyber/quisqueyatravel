# Auditoría SEO — quisqueyatravel.org
**Fecha:** 4 de agosto, 2026
**Tipo:** Auditoría completa (técnica + on-page + gap de contenido + seguimiento desde el 31 de julio)
**Nota sobre datos:** Semrush/Ahrefs no están conectados en esta sesión, así que las cifras de dificultad/volumen de keywords son estimaciones cualitativas basadas en búsqueda web y en los datos reales de Search Console de sesiones anteriores. Los datos de tráfico (GA4, rebote) vienen de la corrida diagnóstica del 3 de agosto ya documentada en la bitácora.

---

## Resumen Ejecutivo

El trabajo de las últimas dos semanas dejó el on-page en muy buena forma: los 12 títulos están dentro de 52-60 caracteres, las 13 guías tienen foto real con alt text, el enlazado interno hacia la guía de playas ya llega desde 9 guías de destino, y los footers de guía tienen 11 enlaces (paridad con el home). Verificado en vivo: el home publicado coincide con el código local, incluyendo los cambios de CTA/franja de guías rápidas de esta semana.

Encontré un hallazgo técnico nuevo y real que no estaba en auditorías anteriores: **el sitio no tiene una página 404 propia, así que Cloudflare devuelve el contenido completo del home (probablemente con código 200) para cualquier URL que no existe** — lo comprobé pidiendo una URL inventada al azar y me devolvió el home completo, idéntico. Esto también explica el hallazgo pendiente del 3 de agosto sobre `/marketing.plugin` y `/quisqueya-travel-memoria.md` "apareciendo" en GA4: no es que esos archivos sigan expuestos (siguen borrados), es que *cualquier* URL rota cae en el mismo comportamiento. Ya preparé el archivo `404.html` y corregí el `sitemap.xml` — están listos en tu carpeta, solo falta subirlos.

El problema de fondo que sigue sin resolverse es el de tráfico, no de contenido: **97.3% de rebote en el home** con tráfico casi 100% pagado y engagement bajo parejo en todas las ciudades — confirmado el 3 de agosto que no es un problema de segmentación geográfica sino del sitio/landing en sí. Evaluación general: **base técnica sólida, con dos pendientes puntuales de esta semana y un problema de fondo (conversión del tráfico pagado) que ya tiene un primer intento de solución con la landing dedicada que armamos hoy** (`landing-arma-tu-itinerario.html`).

---

## ✅ Verificación de lo corregido desde el 31 de julio

| Hallazgo del 31 jul | Estado hoy |
|---|---|
| Sitemap `lastmod` desactualizado en 5 guías editadas ese día | 🟡 Parcial → ✅ **Completado hoy**. Solo 5 de las 11 guías editadas el 31 jul habían recibido el fix (Jarabacoa, Puerto Plata, Samaná, La Romana, Itinerario). Las otras 6 (Requisitos, Costo Familiar, Vuelos NYC-RD, Barahona, Santo Domingo, Punta Cana) seguían con fecha de julio 11-12 pese a haber sido editadas el 31. Corregidas las 6 hoy en el `sitemap.xml` local — falta subir. |
| 6 títulos que excedían 60 caracteres | ✅ **Resuelto** — los 12 títulos están hoy entre 52-60 caracteres |
| Página de playas sin enlaces desde guías de destino | ✅ **Resuelto** — 9 guías de destino ya enlazan a `guia-mejores-playas-republica-dominicana.html` |
| Footers de guía con solo 5 enlaces (vs. 12 del home) | ✅ **Resuelto** (de una sesión anterior, confirmado hoy) — 11 enlaces por footer |

---

## 🔴 Hallazgo nuevo — Soft 404 en todo el sitio

**Qué pasa:** No existe un archivo `404.html` en el repo. Probé pidiendo `quisqueyatravel.org/pagina-que-no-existe-xyz-test-404` (una URL inventada) y el servidor devolvió el HTML completo del home — mismo título, mismo meta description, mismo contenido, byte por byte. Es decir, **cualquier URL rota "funciona" y muestra el home en vez de un error**.

**Por qué importa:**
- Google trata esto como "soft 404": indexa (o intenta indexar) URLs que no deberían existir, diluyendo la señal de qué es contenido real y desperdiciando presupuesto de rastreo.
- Cualquier link roto — interno, de un post viejo de Facebook, o un backlink externo mal escrito — no le avisa al visitante que algo salió mal; simplemente le muestra el home sin explicación, lo cual es confuso.
- Explica (con alta probabilidad) el hallazgo pendiente del 3 de agosto: las "vistas" de `/marketing.plugin` y `/quisqueya-travel-memoria.md` en GA4 no significan que esos archivos sigan expuestos — cualquier URL, exista o no, cae en este mismo comportamiento.

**Fix:** creé `404.html` (con tu estética real — verde/naranja/Montserrat, `noindex`, botón de vuelta al home) en tu carpeta local, listo para subir junto con el resto de archivos del sitio. Cloudflare Pages lo detecta automáticamente y empieza a devolver un 404 real en vez del home.

---

## Hallazgos Técnicos

| Check | Estado | Detalle |
|---|---|---|
| HTTPS | ✅ Pass | Todo el sitio en HTTPS, HSTS activo |
| robots.txt | ✅ Pass | Permite todo excepto `/cdn-cgi/`, referencia el sitemap |
| Cabeceras de seguridad (`_headers`) | ✅ Pass | CSP, HSTS, X-Frame-Options, nosniff, Permissions-Policy configurados |
| Sincronía home local vs. producción | ✅ Pass | El home en vivo incluye ya los cambios de CTA/franja de guías rápidas de esta semana |
| Un solo H1 por página | ✅ Pass | Verificado programáticamente en las 13 guías |
| Alt text en imágenes de contenido | ✅ Pass | Todas las imágenes de contenido tienen alt descriptivo (el único "sin alt" por guía es el píxel invisible de Facebook, que no necesita alt) |
| Títulos (50-60 caracteres) | ✅ Pass | Las 12 guías entre 52-60 caracteres |
| Meta descriptions | 🟡 Warning | 116-151 caracteres — funcionales, pero varias se quedan cortas del rango ideal (150-160). Oportunidad de usar el espacio extra para más CTA, no es urgente |
| Enlazado interno hacia guía de playas | ✅ Pass | 9/9 guías de destino relevantes enlazan a ella |
| Footers de guía | ✅ Pass | 11 enlaces cada uno, paridad con el home |
| Datos estructurados (JSON-LD) | ✅ Pass | Presente en home y guías (FAQPage + BreadcrumbList en las 12 guías principales, TravelAgency en el home) |
| Sitemap — existencia y cobertura | ✅ Pass | Cubre ES/EN/FR, incluye la guía de playas |
| **Sitemap `lastmod`** | ✅ Corregido hoy (local) | Ver sección de arriba |
| **Página 404** | 🔴 Crítico → ✅ Corregido hoy (local) | Ver hallazgo nuevo arriba |
| Enlaces internos .html vs. URL limpia | 🟡 Low | El nav, footer y tarjetas de destino del home enlazan a `guia-*.html` en vez de la URL limpia (`/guia-*`), generando un salto de redirección 301 innecesario en cada clic interno. No rompe nada (el `_redirects` ya lo resuelve), pero es más limpio linkear directo a la URL canónica |

---

## Panorama de Competidores (actualizado)

| Competidor / nicho | Qué hacen bien | Brecha frente a Quisqueya Travel |
|---|---|---|
| discoversaona.com, caribbeansaona.com, sitios especializados en Isla Saona | Dominan el SERP de "isla saona guía/precio 2026" con contenido 100% dedicado | Sigues sin página propia — la mencionas dentro de la guía de playas, pero no compites por el término directamente |
| Blogs tipo "10 mejores hoteles baratos Punta Cana" (Tripadvisor, One Two Traveling, Revista Mercado) | Rankean listas curadas con nombres de hotel específicos | Sigues sin esta página — sigue en backlog desde el 30 de julio |
| Viajeros Callejeros, La Cosmopolilla, Diario de un Mentiroso, Imanes de Viaje | Itinerarios de 7/10/15 días bien posicionados, con mucho detalle día por día | Tu itinerario de 10 días compite bien; la variante de 7 días sigue sin existir pese a demanda confirmada (múltiples blogs y hasta TikToks compitiendo por ese término) |

---

## Oportunidades de Keywords (actualizado)

| Keyword | Dificultad estimada | Oportunidad | Estado | Formato recomendado |
|---|---|---|---|---|
| isla saona guía completa / precio | Media | Alta | Pendiente (mencionada, sin página propia) | Página dedicada — hay demanda confirmada y varios sitios especializados compitiendo solo por esto |
| itinerario 7 días república dominicana | Baja-media | Media-alta | Pendiente | Variante corta del itinerario de 10 días ya existente; demanda confirmada (blogs + TikTok) |
| mejores hoteles baratos punta cana | Media | Media | Pendiente (backlog desde 30 jul) | Página tipo listado con 5-8 hoteles reales y precios |
| dominicanos en nyc viajar a rd | Baja (nicho) | Alta (ventaja única) | Pendiente | Contenido que conecta El Quisqueyano con Quisqueya Travel — nadie más puede competir aquí con tu voz |
| las terrenas república dominicana | Baja | Media | Parcial (dentro de Samaná) | Evaluar página propia si el tráfico de Samaná lo justifica |
| qué hacer en cabarete | Baja | Media | Mencionada en Puerto Plata, sin foco propio | Sección o página corta |

---

## El problema de fondo: rebote de 97.3% en el home

Esto no es estrictamente "SEO" en el sentido de rankings orgánicos, pero es el hallazgo más importante para el negocio ahora mismo y viene directo de la sesión de diagnóstico del 3 de agosto: sacar Puerto Rico del targeting de Meta Ads funcionó (bajó del puesto #1 al #6 en ciudades), pero **el rebote no bajó nada** — 97.3% vs 96.2% antes del cambio. El engagement es parejo y bajo en todas las ciudades top, incluida Santo Domingo (ahora la #1). Conclusión ya confirmada: **el problema es el sitio/landing, no la geografía del anuncio**.

La landing dedicada que armamos hoy (`landing-arma-tu-itinerario.html`) es un primer intento de solución — una página de aterrizaje enfocada, sin la sobrecarga de secciones del home completo, con el CTA de itinerario visible sin scroll. Recomendación: antes de invertir más en contenido nuevo (Isla Saona, hoteles baratos, itinerario 7 días), vale la pena **probar esa landing como destino de una porción del tráfico pagado** y comparar el rebote contra el home — es una prueba barata (cambiar el link de destino en el anuncio) con el potencial de mover la aguja más que cualquier guía nueva.

---

## Plan de Acción Priorizado

### Quick wins (esta semana)
1. Subir `404.html` y `sitemap.xml` corregido (ya están en tu carpeta local, listos) — 5 minutos vía upload de GitHub.
2. Cambiar los enlaces internos de `guia-*.html` a `/guia-*` en el nav, footer y tarjetas de destino del home — 20 minutos, elimina saltos de redirección innecesarios.
3. Probar la landing nueva (`landing-arma-tu-itinerario.html`) como destino de una parte del tráfico de Meta Ads y comparar rebote contra el home en 3-5 días.
4. Alargar 4-5 meta descriptions que se quedan cortas (116-130 caracteres) para aprovechar el espacio hasta 150-160 — 15 minutos.

### Inversión estratégica (este trimestre)
1. Página dedicada "Isla Saona: guía completa 2026" — hay demanda confirmada y sitios especializados compitiendo solo por este término.
2. Página "Mejores hoteles baratos en Punta Cana" (backlog desde el 30 de julio).
3. Variante corta "Itinerario 7 días República Dominicana", reciclando el de 10 días.
4. Contenido de nicho "dominicanos en NYC viajando a RD" — ventaja competitiva única de tu voz que ningún blog genérico puede igualar.
5. Si el rebote sigue alto después de probar la landing dedicada, evaluar una versión "ligera" del home específica para tráfico pagado (menos secciones, un solo CTA).

---

## Siguientes pasos posibles
- ¿Subo yo mismo `404.html` y el `sitemap.xml` corregido vía el flujo de GitHub la próxima vez que tengamos el navegador conectado?
- ¿Actualizo los enlaces internos del home a las URLs limpias?
- ¿Redacto el borrador de "Isla Saona" o de "Itinerario 7 días" primero?
- ¿Configuro el experimento de landing dedicada vs. home en Meta Ads?
