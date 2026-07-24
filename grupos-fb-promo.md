# Campaña de promoción en grupos de Facebook — Quisqueya Travel

Registro de a qué grupos de Facebook ya se envió el post promocional de quisqueyatravel.org (imagen + link), para no repetir grupos y no verse como spam.

Imagen a usar: `C:\Users\venul\OneDrive\Desktop\Quisqueya\quisqueya-travel-promo-facebook.png`
Página desde donde se publica: El Quisqueyano en NYC (facebook.com/2061443547418301)
Método: composer de la Página → adjuntar imagen → "Configuración de la publicación" → "Compartir en grupos" (nativo de Facebook, máximo 9 grupos por publicación) → Publicar.

## Grupos ya usados (NO volver a seleccionar)

Tanda 1 — 2026-07-03:
- Latinos Y Dominicanos en New york y New Jersey
- Dominicanos 🇩🇴 En Usa 🇺🇸
- Dominicanos en New York Nueva York
- República Dominicana
- Latinos Y Dominicanos en New York Y New Jersey
- Dominicanos en New York
- Hispanos y Latinos en New York
- Latinos en New York
- REPÚBLICA DOMINICANA

Tanda 2 — 2026-07-03 (segunda ejecución, vía tarea programada):
- Latinos Y Dominicanos DONDE SE BAILA ESTA NOCHE??
- Dominicanos Unidos
- Dominicanos en todo el Mundo
- DOMINICANOS EN ESPAÑA
- Republica dominicana la tierra del merengue y la bachata de pajugo
- DOMINICANO HASTA LA TAMBORA 100% PLATANERO
- Dominicanos en new york

Tanda 3 — 2026-07-09 (vía tarea programada):
- Dominicanos- En estados unidos 🇩🇴 🔥 🇺🇸
- NEW YORK - NEW YORK - NYC - NY
- New York City
- Ofertas de Empleo y Trabajo República Dominicana

## Grupos a evitar siempre (no relevantes para viajes)

- Planeta Alofoke
- Alofoke Radio Chow
- Venta de terrenos
- Compra o vende tu casa en Republica Dominicana
- Punta Cana Ofertas!!! (10,4 mil miembros) — verificado 2026-07-21: es para residentes locales de Punta Cana/Bávaro (comida, fiesta), no para viajeros de la diáspora
- Cualquier grupo de chisme/farándula sin relación con viajes o comunidad dominicana/latina

## Intento de programar nativo en Meta (3 jul 2026, tarde)

Se intentó programar la tanda 2 directo en Facebook (Página → Crear publicación → Opciones de programación → 6 jul 2026 11:06am → Compartir en grupos), en vez de depender de la tarea de Claude. Copy nuevo ya redactado (ángulo "vale la pena ir a RD vs. otro país del Caribe") y la imagen se adjuntó bien, pero el flujo de Facebook (el modal "Configuración de la publicación" combinando programación + compartir en grupos) se puso inestable con la automatización: el diálogo se cerraba solo varias veces y en un momento se activó por accidente el toggle de "Promocionar publicación" (se detectó y se desactivó antes de continuar — no se gastó dinero ni se creó ningún anuncio).

**Resultado: NO se publicó ni se programó nada de la tanda 2.** Quedó como borrador sin terminar (confirmado con el diálogo "Aún no finalizaste tu publicación"). No hay riesgo de que se publique solo.

Existe el "Planificador" nativo de Meta (Panel profesional → Contenido → Planificador, o facebook.com/professional_dashboard/content_calendar/) que sí muestra el calendario de contenido y podría ser un camino más estable para programar — pendiente de explorar en la próxima sesión en vez de pelear con el modal de "Crear publicación".

**Plan de respaldo activo:** la tarea programada `quisqueya-travel-fb-grupos` (cada 3 días, ver scheduled tasks de Claude) sigue activa y hará la tanda 2 sola siguiendo el mismo método que funcionó en la tanda 1 (publicar ahora + compartir en grupos, sin programación futura). Si se prefiere programar nativo en Meta, retomar desde el Planificador la próxima vez.

## Nota tanda 2

Con esta tanda se agotaron prácticamente todos los grupos relevantes visibles en el diálogo "Compartir en grupos" (20 grupos listados en total: 9 ya usados en tanda 1, 3 en la lista de "evitar siempre" — Planeta Alofoke, Venta de terrenos, Alofoke Radio Chow —, y los 7 usados en esta tanda 2). Nota: en el diálogo aparece "Dominicanos Unidos" duplicado (dos entradas con el mismo nombre); solo se seleccionó una de las dos, así que en la próxima ejecución podría quedar una entrada más con ese mismo nombre disponible para revisar.

Si en la próxima ejecución de la tarea programada el paso 5 (leer la lista de grupos disponibles) no muestra ningún grupo nuevo elegible fuera de los ya usados/evitados, no publicar nada — reportar eso y sugerir a Venul desactivar la tarea `quisqueya-travel-fb-grupos`.

## Nota tanda 3

Con esta tanda se agotaron los grupos relevantes del diálogo "Compartir en grupos" (20 grupos listados en total en esta ejecución: 16 ya usados en tandas 1-2, 4 en la lista de "evitar siempre" — Planeta Alofoke, Alofoke Radio Chow, Venta de terrenos, Compra o vende tu casa en Republica Dominicana —, y los 4 usados en esta tanda 3, que eran los únicos que quedaban disponibles). El ángulo de copy usado esta vez fue "cuánto cuesta el viaje real / guía honesta vs. agencias".

**No quedan grupos nuevos elegibles.** La próxima vez que corra esta tarea programada, el diálogo "Compartir en grupos" no debería mostrar ningún grupo fuera de usados/evitados — en ese caso no publicar nada (según instrucción del paso 2) y recomendar a Venul desactivar la tarea `quisqueya-travel-fb-grupos`, o bien unirse a nuevos grupos dominicanos/latinos si quiere seguir con esta estrategia.

## Tanda 4 — 2026-07-13 (vía tarea programada): NO SE PUBLICÓ

Se siguió el flujo completo: se abrió "Crear publicación" en la Página, se escribió un copy nuevo (ángulo "planifica tu viaje de verano" — distinto a los ángulos anteriores), se adjuntó la imagen promocional, y se llegó hasta "Configuración de la publicación" → "Compartir en grupos".

Se leyó la lista completa del diálogo "Compartir en grupos" (20 grupos listados, igual que en tanda 3): los 20 coinciden exactamente con los 16 ya usados en tandas 1-3 más los 4 de "Grupos a evitar siempre" (Planeta Alofoke, Alofoke Radio Chow, Venta de terrenos, Compra o vende tu casa en Republica Dominicana). **No apareció ni un solo grupo nuevo elegible.**

Por instrucción explícita de la tarea (si no hay grupos nuevos, no publicar), se cerró el composer sin seleccionar grupos y sin publicar. El borrador se descartó — no quedó nada publicado ni programado.

**Confirmado: no quedan grupos nuevos elegibles en esta cuenta.** Recomendación para Venul: desactivar la tarea programada `quisqueya-travel-fb-grupos`, o si quiere seguir con esta estrategia, unirse manualmente a nuevos grupos dominicanos/latinos (idealmente de viajes, comunidad NY, o diáspora) para que vuelvan a aparecer grupos elegibles en el diálogo.

## Tanda 5 — 2026-07-16 (vía tarea programada): NO SE PUBLICÓ

Se repitió el flujo: se abrió "Crear publicación" en la Página, se escribió un copy nuevo (ángulo "cuánto tiempo llevas sin pisar tu país / nostalgia de tiempo sin ir", distinto a los ángulos usados en tandas 1-4), se adjuntó la imagen promocional, y se llegó a "Configuración de la publicación" → "Compartir en grupos".

Se leyó la lista completa del diálogo (20 grupos, igual que en tandas 3 y 4): los 20 coinciden exactamente con los 16 ya usados en tandas 1-3 más los 4 de "Grupos a evitar siempre" (Planeta Alofoke, Alofoke Radio Chow, Venta de terrenos, Compra o vende tu casa en Republica Dominicana). **No apareció ni un solo grupo nuevo elegible** — tercera vez consecutiva (tandas 3, 4 y 5) que se confirma esto.

Por instrucción explícita de la tarea, se cerró el composer sin seleccionar grupos y sin publicar. No quedó nada publicado ni programado.

**Recomendación reforzada:** esta cuenta ya no tiene grupos nuevos disponibles para esta estrategia. Se sugiere a Venul desactivar la tarea programada `quisqueya-travel-fb-grupos` (para no seguir gastando ejecuciones en balde), o si quiere continuar, unirse manualmente a nuevos grupos dominicanos/latinos (idealmente de viajes, comunidad NY, o diáspora) antes de la próxima ejecución.

## Tanda 6 — 2026-07-18 (vía tarea programada): NO SE PUBLICÓ

Se repitió el flujo: se abrió "Crear publicación" en la Página, se escribió un copy nuevo (ángulo "orgullo/legado familiar — llevar a los hijos a conocer RD", distinto a los ángulos usados en tandas 1-5), se adjuntó la imagen promocional, y se llegó a "Configuración de la publicación" → "Compartir en grupos".

Se leyó la lista completa del diálogo (20 grupos, igual que en tandas 3, 4 y 5): los 20 coinciden exactamente con los 16 ya usados en tandas 1-3 más los 4 de "Grupos a evitar siempre" (Planeta Alofoke, Alofoke Radio Chow, Venta de terrenos, Compra o vende tu casa en Republica Dominicana). **No apareció ni un solo grupo nuevo elegible** — cuarta vez consecutiva (tandas 3, 4, 5 y 6) que se confirma esto.

Por instrucción explícita de la tarea, se cerró el composer sin seleccionar grupos y sin publicar. No quedó nada publicado ni programado.

**Recomendación reforzada (4ª confirmación consecutiva):** esta cuenta ya no tiene grupos nuevos disponibles para esta estrategia — la lista de grupos disponibles en el diálogo no ha cambiado en cuatro ejecuciones seguidas (9 jul, 13 jul, 16 jul, 18 jul). Se recomienda fuertemente a Venul desactivar la tarea programada `quisqueya-travel-fb-grupos` para no seguir gastando ejecuciones en balde, o unirse manualmente a nuevos grupos dominicanos/latinos (idealmente de viajes, comunidad NY, o diáspora) antes de reactivarla.

## Tanda 7 — 2026-07-21 (vía tarea programada): NO SE PUBLICÓ

Se repitió el flujo: se abrió "Crear publicación" en la Página, se escribió un copy nuevo (ángulo "cuándo reservar / guía de temporada y precios — evitar perder dinero por no saber cuándo comprar el pasaje", distinto a los ángulos usados en tandas 1-6), se adjuntó la imagen promocional, y se llegó a "Configuración de la publicación" → "Compartir en grupos".

Se leyó la lista completa del diálogo (20 grupos, igual que en tandas 3-6): los 20 coinciden exactamente con los 16 ya usados en tandas 1-3 más los 4 de "Grupos a evitar siempre" (Planeta Alofoke, Alofoke Radio Chow, Venta de terrenos, Compra o vende tu casa en Republica Dominicana). **No apareció ni un solo grupo nuevo elegible** — quinta vez consecutiva (tandas 3, 4, 5, 6 y 7) que se confirma esto, sin ningún cambio en la lista desde el 9 de julio.

Por instrucción explícita de la tarea, se cerró el composer sin seleccionar grupos y sin publicar. No quedó nada publicado ni programado.

**Recomendación reforzada (5ª confirmación consecutiva, 12 días sin cambios):** esta cuenta ya no tiene grupos nuevos disponibles para esta estrategia. Se recomienda fuertemente a Venul desactivar la tarea programada `quisqueya-travel-fb-grupos` para no seguir gastando ejecuciones en balde, o unirse manualmente a nuevos grupos dominicanos/latinos (idealmente de viajes, comunidad NY, o diáspora) antes de reactivarla.

## Grupos nuevos encontrados y unidos — 2026-07-21 (búsqueda activa, via Cowork)

Los grupos de las tandas 1-3 eran genéricos de diáspora/nostalgia (no específicos de viajes). Se buscaron grupos más específicos de gente activamente planeando viajes a Punta Cana/RD — mejor intención de compra que la nostalgia genérica. Se unió Venul (vía Claude in Chrome, cuenta personal) a estos 4 grupos nuevos, todos públicos y sin relación con los ya usados o evitados:

- **Mochileando Tips para Vacaciones en Punta Cana 🇩🇴 RD 2026🏝️✨** (17,4 mil miembros, 4 pub/día) — https://www.facebook.com/groups/985886876547022 — ⚠️ REGLA DEL GRUPO: "No publiques promociones ni spam — solo los fines de semana se permite publicar tours, servicios de transporte, traslado, y cuando el turista pregunte". **NO publicar entre semana.**
- **Punta Cana 2026 Ofertas de Viaje, Tours Imperdibles y Tips Esenciales** (5,1 mil miembros, 8 pub/día) — reglas no verificadas aún, revisar antes de publicar
- **Viajar a Punta Cana (TIPS Y MAS)** (2,3 mil miembros, 6 pub/día) — reglas no verificadas aún
- **Punta Cana Ofertas!!!** (10 mil miembros, 9 pub/día) — reglas no verificadas aún

**Otros candidatos encontrados pero NO unidos todavía** (para explorar en próxima sesión): PUNTA CANA VACACIONES 2026 TIPS Y RECOMENDACIONES (42 mil, muy activo), Punta Cana 2026/Bayahibe/Tours Isla Saona (124 mil, solo 5 pub/día — buena relación tamaño/ruido), Viajeros En República Dominicana 🇩🇴 (2,6 mil), Dominicanos del Bronx (2,9 mil), Dominicano en New York🇩🇴 (2,4 mil), Dominicanos Unidos Oficial (57 mil, distinto del "Dominicanos Unidos" privado ya usado).

**Decisión tomada:** se revisaron las reglas de los otros 3 grupos nuevos y se publicó donde tenía sentido, el mismo día (2026-07-21, martes):

- **Mochileando Tips para Vacaciones en Punta Cana** — regla explícita: solo fines de semana. NO se publicó. Pendiente para el próximo sábado/domingo.
- **Viajar a Punta Cana (TIPS Y MAS)** (2,4 mil miembros) — sin restricción de día en sus reglas. Descripción: "creado para personas que piensan viajar a Punta Cana y tengan alguna duda". ✅ PUBLICADO 2026-07-21 (reel de Punta Cana + copy "¿Vas a Punta Cana pronto?..." + link a la guía) — publicado directo, visible en el feed del grupo.
- **Punta Cana 2026 Ofertas de Viaje, Tours Imperdibles y Tips Esenciales** (5,2 mil miembros) — sin restricción de día visible. ✅ PUBLICADO 2026-07-21 (mismo reel + copy "Antes de reservar en Punta Cana, échale un ojo a esto..." + link) — quedó PENDIENTE DE APROBACIÓN de los administradores del grupo (revisar en 1-2 días si ya se aprobó).
- **Punta Cana Ofertas!!!** (10,4 mil miembros) — revisado y DESCARTADO: no es un grupo de viajeros, es para residentes locales de Punta Cana/Bávaro buscando ofertas de comida y fiesta ("dirigido especialmente a los residentes"). No es la audiencia de Quisqueya Travel — no publicar aquí en el futuro tampoco (agregar a "Grupos a evitar siempre" si se confirma de nuevo).

**Pendiente para próxima sesión:**
1. Revisar si "Punta Cana 2026 Ofertas de Viaje..." ya aprobó el post pendiente.
2. El próximo sábado o domingo, publicar en "Mochileando Tips para Vacaciones en Punta Cana".
3. Seguir explorando los candidatos de la lista de abajo (Viajeros En República Dominicana, Dominicanos del Bronx, etc.) — unirse y revisar sus reglas antes de publicar.

## Instrucciones para la próxima tanda

1. Leer este archivo completo para saber qué grupos ya se usaron.
2. Ir a facebook.com/2061443547418301, abrir "Crear publicación".
3. Escribir un copy corto nuevo (gancho + emojis + cuerpo breve + CTA a comentar/compartir, tono auténtico de El Quisqueyano — no copiar literal el texto de tandas anteriores para que no se vea repetido en el feed de la Página). Debe incluir el link quisqueyatravel.org.
4. Adjuntar la imagen de arriba.
5. En "Configuración de la publicación" → "Compartir en grupos", seleccionar hasta 9 grupos de la lista que aparezca que NO estén en "Grupos ya usados" ni en "Grupos a evitar siempre". Priorizar grupos dominicanos/latinos (NY primero, luego otros países/diáspora si no hay más de NY).
6. Publicar.
7. Agregar la nueva tanda usada a la sección "Grupos ya usados" de este archivo, con la fecha.
8. Si ya no quedan grupos nuevos relevantes sin usar, avisar a Venul en el resumen y no programar más tandas automáticas.
