# Auditoría SEO — quisqueyatravel.org
**Fecha:** 30 de julio, 2026
**Tipo:** Auditoría completa (técnica + on-page + gap de contenido + competidores)
**Nota sobre datos:** Semrush no tenía unidades de API disponibles al momento de esta auditoría, así que las cifras de volumen/dificultad de keywords son estimaciones cualitativas basadas en búsqueda web, no datos exactos de Semrush. Para cifras precisas, resuelve el acceso en semrush.com/mcp-access y vuelve a correr esta auditoría.

---

## Resumen Ejecutivo

El sitio tiene una base técnica sólida: robots.txt y sitemap.xml correctos, HTTPS, contenido con buena profundidad (1,500–2,400 palabras por guía), meta tags mayormente bien optimizados, y una estructura de hreflang ES/EN/FR ambiciosa para un sitio de menos de dos meses. Pero hay tres problemas concretos que sí están costando visibilidad:

1. **Bug de hreflang en las páginas en francés** — rompe el clúster de señales entre idiomas para las páginas que sí tienen traducción completa.
2. **11 de 12 guías no tienen ninguna foto real** — solo texto, mientras que el home y la guía de Santiago sí tienen imágenes. Esto es inconsistente y débil para engagement/E-E-A-T.
3. **Colisión de marca** — existen otros negocios con nombres casi idénticos (quisqueyatravel.net, quisqueyatravel.com, Quisqueya Travel Solutions), lo que puede diluir tu posicionamiento cuando la gente busque "Quisqueya Travel" directamente.

Evaluación general: **base fuerte, necesita trabajo puntual** — nada crítico que bloquee indexación, pero los tres puntos de arriba son barreras reales para crecer el tráfico orgánico.

---

## Hallazgos Técnicos

| Check | Estado | Detalle |
|---|---|---|
| robots.txt | ✅ Pass | Permite todo excepto `/cdn-cgi/`, referencia el sitemap correctamente |
| XML Sitemap | ✅ Pass | Existe, formato correcto, prioridades y changefreq configurados |
| HTTPS | ✅ Pass | Sitio completo en HTTPS |
| Referencias rotas a Netlify | ✅ Pass | No quedan referencias al dominio viejo en el HTML (ya limpiado) |
| Frescura de contenido | ✅ Pass | Las 12 guías se actualizaron el 24 de julio — nada desactualizado |
| Profundidad de contenido | ✅ Pass | 1,500–2,400 palabras por guía, sin contenido delgado |
| **Hreflang x-default en FR** | 🔴 **Fail** | Ver detalle abajo |
| **Imágenes en guías** | 🔴 **Fail** | 11 de 12 guías sin ninguna foto real |
| Alt text | ✅ Pass (donde hay imágenes) | Las pocas imágenes que existen (home, Santiago) sí tienen alt text descriptivo |
| Un solo H1 por página | ✅ Pass | Verificado en las 12 guías + home |
| Canonical tags | ✅ Pass | Todas las páginas se auto-canonicalizan correctamente |

### 🔴 Bug de hreflang — clúster de Punta Cana y República Dominicana (FR)

Cuando una página tiene versión en los tres idiomas, el `x-default` debe apuntar al mismo URL en todas las versiones del clúster. Encontré que **no es el caso**:

- `guia-punta-cana.html` (ES) → x-default: `/en/guide-punta-cana` ✅
- `en/guide-punta-cana.html` → x-default: `/en/guide-punta-cana` ✅
- `fr/guide-punta-cana.html` → x-default: **`/en/`** (la home en inglés, no la guía) ❌

Mismo patrón en `fr/guide-republique-dominicaine.html`. Esto contradice a sus propios hermanos ES/EN del mismo clúster — Google puede terminar ignorando el par hreflang completo para estas páginas por la inconsistencia, lo cual reduce las chances de que la versión francesa aparezca para búsquedas en francés.

**Fix:** en `fr/guide-punta-cana.html` y `fr/guide-republique-dominicaine.html`, cambiar el `hreflang="x-default"` para que apunte a la página EN correspondiente (`/en/guide-punta-cana` y `/en/guide-dominican-republic` respectivamente), igual que hacen sus versiones ES y EN.

### 🔴 11 de 12 guías sin foto real

Revisé el `<img>` de cada guía: solo `guia-santiago.html` tiene una foto de contenido real (con alt text correcto). Las otras 11 (Barahona, Costo, Itinerario, Jarabacoa, La Romana, Puerto Plata, Punta Cana, Requisitos, Samaná, Santo Domingo, Vuelos NYC-RD) son 100% texto — el único `<img>` que tienen es el píxel de rastreo de Facebook (invisible, 1x1).

Esto es inconsistente con el home (19 imágenes) y con Santiago, y es una señal débil de calidad/experiencia (E-E-A-T) frente a competidores como Viajeros Callejeros o Temporada de Viajes, que sí usan fotos reales en cada guía.

**Fix:** agregar al menos 1-2 fotos reales por guía, mismo patrón de Pexels sin IA que ya usas en redes sociales (respeta la regla de "nunca IA" del proyecto), con alt text descriptivo como el de Santiago.

### 🟡 Títulos ligeramente largos

Tres títulos exceden el rango recomendado de 50–60 caracteres (se truncan en el SERP):
- `guia-barahona.html`: 70 caracteres
- `guia-itinerario-republica-dominicana.html`: 67 caracteres
- `guia-samana.html`: 68 caracteres

Impacto bajo (Google normalmente recorta con "...", no rompe nada), pero es una mejora rápida.

---

## Colisión de Marca (hallazgo no técnico, pero relevante)

Al buscar "quisqueyatravel.org" en Google, el dominio no aparece — en cambio aparecen negocios completamente distintos con nombres casi idénticos: **quisqueyatravel.net**, **quisqueyatravel.com** (agencias de viaje físicas en Miami/Florida) y **Quisqueya Travel Solutions**. Esto significa que:

- Alguien que busque "Quisqueya Travel" en Google puede terminar en un negocio que no es el tuyo.
- Tu marca compite por las mismas palabras clave de marca con negocios ya establecidos (aunque en un nicho diferente — agencias físicas vs. blog afiliado).

**Recomendación:** esto no se arregla con SEO técnico — vale la pena reforzar "El Quisqueyano" como el nombre que la gente busca (ya lo haces en redes), y usar "quisqueyatravel.org" como el detalle técnico del dominio, no como la marca principal de búsqueda.

---

## Panorama de Competidores (vía búsqueda web, sin datos de Semrush)

| Competidor | Qué hacen bien | Brecha frente a Quisqueya Travel |
|---|---|---|
| Viajeros Callejeros | Roundups tipo "12 playas de RD", guías con muchas fotos propias | No tiene enfoque en diáspora/NYC ni afiliados locales |
| Temporada de Viajes | Roundup "20 mejores playas RD" bien posicionado | Contenido genérico, sin voz/personalidad |
| La Cosmopolilla | Ruta de 15 días, afiliados de reservas | No cubre requisitos de entrada actualizados a 2026 |
| Ratón Viajero / Flowo / Revista Viajeros | Guías generales de RD | Ninguno está en español dominicano/diáspora — hueco real para tu voz |

**Brecha de contenido más clara:** ninguna de tus 12 guías es un roundup consolidado tipo "las mejores playas de República Dominicana" — tienes guías por destino, pero varios competidores rankean bien justo con ese formato de lista. Es contenido que ya podrías armar reciclando lo que ya escribiste por destino.

---

## Oportunidades de Keywords (estimación cualitativa — sin datos duros de Semrush)

| Keyword | Dificultad estimada | Oportunidad | Ranking actual | Intención | Formato recomendado |
|---|---|---|---|---|---|
| mejores playas república dominicana | Media-alta (varios competidores establecidos) | Alta | No tienes página dedicada | Informacional | Guía roundup nueva |
| cuánto cuesta viajar a república dominicana | Media | Alta | Ya tienes `guia-costo-viaje-familia-rd` | Comercial | Ya cubierto — reforzar con datos 2026 actualizados |
| requisitos para viajar a república dominicana 2026 | Baja-media | Alta | Ya tienes `guia-requisitos-viaje-rd-2026` | Transaccional/informacional | Ya cubierto |
| vuelos nyc a república dominicana | Media | Alta (tu nicho específico, diáspora NYC) | Ya tienes `guia-vuelos-nyc-rd` | Transaccional | Ya cubierto — ventaja porque casi nadie más targetea "NYC a RD" específicamente |
| top hoteles baratos punta cana | Media | Media | No existe (está en tu backlog) | Comercial | Página nueva — ya la tenías anotada en pendientes |
| las terrenas república dominicana | Baja | Media | Cubierto parcialmente en `guia-samana.html` | Informacional | Evaluar página propia si el tráfico de Samaná lo justifica |
| itinerario 7 días república dominicana | Baja-media | Media | Tienes de 10 días, no de 7 | Informacional | Variante rápida del itinerario existente |
| dominicanos en nyc viajar a rd | Baja (nicho, poca competencia) | Alta (tu ventaja única) | No existe | Informacional/emocional | Contenido que conecta tu audiencia de El Quisqueyano con Quisqueya Travel — nadie más lo está targeteando |

---

## Plan de Acción Priorizado

### Quick wins (esta semana)
1. Corregir el `x-default` de hreflang en las 2 páginas FR (punta-cana y república-dominicana) — 15 minutos, arregla el bug técnico más concreto.
2. Acortar los 3 títulos que exceden 60 caracteres.
3. Escribir el meta description/título de una página nueva "Mejores playas de República Dominicana" reciclando contenido ya escrito por destino.

### Inversión estratégica (este trimestre)
1. Agregar 1-2 fotos reales (Pexels, sin IA) a las 11 guías que no tienen ninguna — usa el mismo flujo que ya tienes rodando para redes sociales.
2. Construir la página roundup "Mejores playas de RD" — es el hueco de contenido más claro frente a competidores.
3. Crear contenido específico para tu ventaja única: diáspora dominicana en NYC viajando a RD — nadie más está en ese nicho exacto, y ya tienes la audiencia en El Quisqueyano para amplificarlo.
4. Página "Top hoteles baratos en Punta Cana" (ya estaba en tu backlog).
5. Reforzar la marca "El Quisqueyano" en vez de "Quisqueya Travel" en búsquedas de marca, dado el choque de nombre con otros negocios.

---

## Siguientes pasos posibles
- ¿Quieres que redacte ya el borrador de la guía "Mejores playas de República Dominicana"?
- ¿Corrijo ahora mismo el bug de hreflang en las 2 páginas FR?
- ¿Genero los títulos/meta descriptions más cortos para las 3 páginas señaladas?
- Cuando resuelvas el acceso a Semrush, puedo re-correr esta auditoría con cifras reales de volumen/dificultad y competidores directos por keyword.
