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

## Instrucciones para la próxima tanda

1. Leer este archivo completo para saber qué grupos ya se usaron.
2. Ir a facebook.com/2061443547418301, abrir "Crear publicación".
3. Escribir un copy corto nuevo (gancho + emojis + cuerpo breve + CTA a comentar/compartir, tono auténtico de El Quisqueyano — no copiar literal el texto de tandas anteriores para que no se vea repetido en el feed de la Página). Debe incluir el link quisqueyatravel.org.
4. Adjuntar la imagen de arriba.
5. En "Configuración de la publicación" → "Compartir en grupos", seleccionar hasta 9 grupos de la lista que aparezca que NO estén en "Grupos ya usados" ni en "Grupos a evitar siempre". Priorizar grupos dominicanos/latinos (NY primero, luego otros países/diáspora si no hay más de NY).
6. Publicar.
7. Agregar la nueva tanda usada a la sección "Grupos ya usados" de este archivo, con la fecha.
8. Si ya no quedan grupos nuevos relevantes sin usar, avisar a Venul en el resumen y no programar más tandas automáticas.
