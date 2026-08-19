# Auditoría SEO — Quisqueya Travel (13 de agosto 2026)

Auditoría completa hecha contra el sitio **en vivo** (quisqueyatravel.org), comparada con el repo local y con los 4 informes anteriores (30-31 jul, 4 y 9 ago) para no repetir hallazgos ya cerrados.

## Resumen ejecutivo

El bloqueador del 9 de agosto (Boca Chica huérfana) está resuelto — confirmado en vivo, con enlaces en nav y footer. Pero apareció un problema más serio que ningún informe anterior detectó porque nunca se pudo probar contra el sitio en vivo: **el pipeline de despliegue está desincronizado de tu repo local por 3 semanas y 38 commits**, y como consecuencia, al menos una guía clave (Punta Cana) tiene dos versiones distintas compitiendo en Google bajo dos URLs diferentes. Evaluación general: **base de contenido sólida y voz auténtica, pero riesgo operativo real — no hay certeza de que lo que arreglas en local esté realmente en producción.**

## 🔴 Hallazgo crítico — contenido duplicado real, hoy, en producción

| Página | Issue | Severidad | Fix |
|---|---|---|---|
| `/guia-punta-cana.html` vs `/guia-punta-cana` | Son **dos artículos distintos** en producción ahora mismo: el `.html` tiene título "Punta Cana desde NYC: La Guia Honesta para Dominicanos" (73 car., sin tildes, enfoque solo NYC) y su propio canonical autorreferenciado; la versión limpia tiene título "Punta Cana 2026: Playas y Precios" y contenido reescrito para diáspora global. El archivo `_redirects` de tu repo SÍ tiene la regla `/guia-punta-cana.html → /guia-punta-cana 301`, pero en producción **no se aplica** — devuelve 200 con contenido propio en vez de redirigir. Mismo patrón confirmado en `/en/guide-punta-cana.html` (canonical correcto, pero el enlace "Leer en Español" de esa página en inglés manda al usuario de vuelta al duplicado viejo en español, no a la versión limpia actual). | Crítico | 1) Verificar por qué el `_redirects` desplegado no coincide con el de tu repo (ver hallazgo operativo abajo). 2) Mientras tanto, confirmar manualmente en el dashboard de Cloudflare Pages que la regla esté activa. 3) Corregir el enlace "Leer en Español" en `/en/guide-punta-cana` para que apunte a `/guia-punta-cana` (sin `.html`). |
| `/guia-santo-domingo.html` | Este SÍ está bien: sirve el mismo contenido que la versión limpia y su canonical apunta correctamente a `/guia-santo-domingo`. Confirma que el problema de Punta Cana es puntual (contenido viejo que nunca se consolidó), no un fallo del sitio entero. | — | Ninguno — dejar como referencia de que sí funciona quitando el archivo `.html` duplicado de raíz para Punta Cana. |

## 🔴 Hallazgo operativo — el despliegue no refleja tu repo

Tu carpeta local está **38 commits por delante de `origin/main`**, y `origin/main` (la rama que dispara el GitHub Action de Cloudflare Pages) no recibe un push desde el **24 de julio**. Aun así, contenido nuevo como Boca Chica y Constanza sí está en producción — lo que indica que hay **un segundo camino de despliegue** (manual, vía dashboard de Cloudflare o Wrangler) corriendo en paralelo al GitHub Action, sin que ambos estén sincronizados entre sí.

**Por qué esto importa más que cualquier fix individual:** los informes SEO del 31 jul, 4 y 8 ago marcan varios quick wins como "corregidos" basándose en el código local — pero si el mecanismo de despliegue real es otro, no hay garantía de que esas correcciones locales lleguen nunca a producción. El bug de Punta Cana de arriba es la prueba: la regla de redirect existe en tu código desde antes del 3 de agosto y sigue sin funcionar en vivo 10 días después.

**Fix recomendado:** decide un solo camino de despliegue (o el GitHub Action con push a `main`, o el manual) y retira el otro, para que "lo que ves en local" y "lo que hay en producción" vuelvan a ser la misma cosa.

## 🟡 Hallazgos medios

| Página | Issue | Severidad | Fix |
|---|---|---|---|
| Home `#resenas` | Sigue con los 3 placeholders sin rellenar — van más de 2 meses así (flag desde junio, repetido el 9 ago). | Media | Pedir los 3 testimonios reales de FB/IG esta semana; es el ítem más viejo del backlog. |
| `/en/guide-punta-cana` | Los enlaces del footer a "Entry Requirements" y "Flights NYC-DR" mandan a las páginas en **español** (`guia-requisitos-viaje-rd-2026.html`, `guia-vuelos-nyc-rd.html`) en vez de a un equivalente en inglés — mala experiencia para lector angloparlante y señal confusa de idioma para Google. | Media | O crear las versiones EN de esas 2 guías, o al menos enlazar a algo en inglés existente mientras tanto. |
| `/en/` | Sigue sin versión en inglés para Boca Chica, Constanza y Cuándo Viajar (nacieron sin EN, igual que reportó el informe del 9 ago). | Media | Traducir al momento de publicar, no después — ya se mencionó dos informes seguidos. |
| Homepage | Solo schema `TravelAgency`, sin `WebSite` + `SearchAction`. | Baja | Opcional — ayuda a que Google muestre el sitename en resultados. |
| Reduced motion (`.servicio-badge`, `.scroll-cue`) | El fix de accesibilidad SÍ está en el `index.html` local (línea 484, `@media (prefers-reduced-motion: reduce)`), pero dado el hallazgo de arriba sobre desincronización de despliegue, **no se puede confirmar que esté en producción** sin revisar el HTML servido en vivo. | Baja | Confirmar en el sitio en vivo con "Inspeccionar" antes de darlo por cerrado. |

## ✅ Lo que se corrigió y sí se confirmó en vivo

- Enlazado de `guia-boca-chica` — presente en nav y footer del home, ya no es huérfana.
- Title de `guia-constanza` — bajó de 68 a 54 caracteres. Meta description en 149 caracteres. Ambos dentro de rango.
- Title de `guia-mejor-epoca-para-viajar-rd` — 54 caracteres, dentro de rango.
- `guia-santo-domingo.html` sirve contenido idéntico a la versión limpia con canonical correcto (a diferencia de Punta Cana).
- `robots.txt` y `sitemap.xml` en vivo: limpios, correctos, sin bloqueos accidentales.

## Investigación de keywords y competencia

Búsquedas en vivo para "guía punta cana república dominicana blog viajes" y "quisqueyatravel.org" **no devolvieron tu sitio ni una sola vez** — quien domina esos resultados son blogs genéricos españoles (viajeroscallejeros.com, revistaviajeros.es, azulmarino.com, siguiendolasenda.com, maspuntacana.net). Ninguno de ellos escribe para la diáspora dominicana ni tiene la voz "de alguien que nació allá" que tú sí tienes — es tu ángulo diferenciador y todavía nadie te lo está disputando.

| Keyword | Dificultad est. | Oportunidad | Por qué |
|---|---|---|---|
| vuelos NYC a República Dominicana | Media | Alta | Ya tienes `guia-vuelos-nyc-rd` — intención transaccional clara, sin competencia enfocada en diáspora |
| Punta Cana desde Nueva York | Media | Alta | Justo el ángulo que tenía tu página duplicada — vale la pena consolidarlo en la versión limpia en vez de perderlo en el duplicado |
| cuánto cuesta un viaje a RD en familia | Baja | Alta | Ya tienes `guia-costo-viaje-familia-rd`, intención de alta conversión |
| requisitos para viajar a RD 2026 | Baja | Alta | Ya tienes la guía, contenido evergreen que se busca todo el año |
| qué hacer en Boca Chica con niños | Baja | Media | Cubierto en el FAQ de la guía nueva — considera un H2 dedicado para reforzar |
| mejores playas cerca de Santo Domingo | Baja | Media | Oportunidad de enlazar Boca Chica + Santo Domingo con más fuerza (ya empezó) |
| Constanza clima frío República Dominicana | Baja | Media | Ángulo único, casi sin competencia — el "nadie te lo cuenta" que ya usas en el copy |
| itinerario 5 días República Dominicana | Baja | Media | Tienes 7 y 10 días — falta la versión corta para viajes de fin de semana largo |
| seguro de viaje República Dominicana | Media | Media | Ya enlazas afiliado de seguro — falta una guía propia que capture la búsqueda |
| qué llevar en la maleta para RD | Baja | Media | Contenido de utilidad, fácil de escribir, buen enlazado interno hacia todas las guías |
| Las Terrenas vs Samaná | Media | Media | Comparativa que la gente busca antes de decidir — tienes ambas guías, falta el cruce |
| dominicanos en NYC viaje a RD | Baja | Alta | Tu audiencia exacta, casi sin competencia porque nadie más escribe para ella |
| mejor época para ver ballenas Samaná | Baja | Media | Ya está cubierto en `guia-mejor-epoca` — podría ser su propio H1 con más detalle |

## Checklist técnico (verificado en vivo)

| Check | Estado | Detalle |
|---|---|---|
| HTTPS | ✅ Pass | Forzado vía HSTS |
| robots.txt | ✅ Pass | Limpio, sin bloqueos, referencia correcta al sitemap |
| sitemap.xml | ✅ Pass | Accesible, formato válido |
| Canonical tags | 🟡 Warning | Correctos en la mayoría de páginas probadas, pero rotos en el duplicado de Punta Cana (autorreferenciado al `.html` viejo) |
| Contenido duplicado | 🔴 Fail | `/guia-punta-cana.html` vive como página independiente con canonical propio — Google puede indexar ambas versiones |
| Redirects `.html` → limpio | 🔴 Fail | Reglas existen en el repo pero no se aplican en producción para al menos Punta Cana |
| Enlazado interno | ✅ Pass | Boca Chica, Constanza y Cuándo Viajar ya están enlazadas desde nav/footer |
| Hreflang / enlaces cruzados EN↔ES | 🟡 Warning | El botón "Leer en Español" de la guía EN de Punta Cana manda al duplicado viejo, no a la versión actual |
| Título y meta description | ✅ Pass | Todas las páginas nuevas probadas están dentro de 50-60 / 150-160 caracteres |
| Sección de reseñas | 🔴 Fail | 3 placeholders sin rellenar, visible en el home |

## Plan de acción priorizado

**Esta semana (bloqueadores):**
1. Resolver el duplicado de Punta Cana: confirmar en el dashboard de Cloudflare Pages si el `_redirects` desplegado coincide con el del repo, y forzar que `/guia-punta-cana.html` redirija (301) a `/guia-punta-cana`. Este es el fix de mayor impacto de todo el informe — está dividiendo el ranking de tu guía más importante en dos.
2. Decidir y documentar un único mecanismo de despliegue (GitHub Action o manual) para que dejes de arreglar cosas en local que no llegan a producción.
3. Corregir el enlace "Leer en Español" en `/en/guide-punta-cana`.

**Quick wins (esta semana, bajo esfuerzo):**
4. Confirmar en el HTML servido en vivo que el fix de `prefers-reduced-motion` esté presente.
5. Arreglar los 2 enlaces de idioma cruzado en el footer de `/en/guide-punta-cana` (Entry Requirements, Flights NYC-DR).
6. Pedir los 3 testimonios reales para activar `#resenas` — ya lleva 2 meses de backlog.

**Este mes (contenido, oportunidad estratégica):**
7. Escribir "Punta Cana desde Nueva York" como sección propia dentro de la guía limpia (recupera la intención de búsqueda que tenía la versión duplicada, sin fragmentar el dominio).
8. Nueva guía corta: itinerario de 5 días / fin de semana largo.
9. Nueva guía: qué llevar en la maleta para RD (fácil de producir, buen imán de enlaces internos).
10. Traducir al inglés Boca Chica, Constanza y Cuándo Viajar.

**Backlog (sin urgencia):**
11. Comparativa Las Terrenas vs. Samaná.
12. Schema `WebSite` + `SearchAction` en el home.

---

¿Quieres que empiece por el fix del duplicado de Punta Cana (redactar el contenido consolidado) o prefieres primero confirmar en el dashboard de Cloudflare cuál despliegue está realmente sirviendo el sitio?
