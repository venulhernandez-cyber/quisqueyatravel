---
name: "viral-video-el-quisqueyano"
description: "Produce y publica el reel de El Quisqueyano en NYC (IG @venulh + FB) vía Composio, a pedido o en automático, usando el pipeline del turno de las 6pm. Absorbe auto-mode-quisqueyano. Activar cuando Venul diga: publica el reel, hazlo ya, auto mode, que se publique solo, cambia el tema de hoy, corre el turno de las 6, o pida un video de noticia/cultura dominicana listo para subir."
---

# El Quisqueyano: video y publicación (v6, Composio)

Reemplaza a la v5 (Blotato, 3 videos al día solo en Facebook) y a `auto-mode-quisqueyano`. Blotato está vencido desde el 24 sep 2026: **no usarlo**.

**Cuentas:** IG @venulh ig_user_id `27679245571697539` · FB "El Quisqueyano en nyc" page_id `2061443547418301`. El reel de El Quisqueyano sale en LAS DOS.
**Motor:** la tarea programada "Turno El Quisqueyano (6pm ET)" `trig_01Lr9e88BTv7LBt6fouXYVbp`. Su prompt tiene el pipeline completo y probado: fechas especiales, temporada de béisbol, verificación con 2 fuentes, foto real de Wikimedia, tarjetas con los colores de la bandera, música de Kevin MacLeod, publicación y créditos en el primer comentario. **Esta skill no copia ese pipeline: lo usa.** Si hay que cambiar el pipeline, se edita el prompt de la tarea con `update_trigger`, no esta skill.

---

## Qué hacer según lo que pida Venul

| Venul dice | Acción |
|---|---|
| "auto mode", "que se publique solo", "ponlo en automático" | Ya está en automático: la tarea corre todos los días a las 6pm ET. Confirma con `list_triggers` que está `enabled` y que el último run fue SUCCEEDED. Si está apagada, propón encenderla. |
| "hoy publica sobre X", "cambia el tema de hoy" | Antes de las 6pm: no publiques aparte. Dispara la tarea con `fire_trigger` y pon el tema en `text` ("Tema de hoy: X. Usa este tema en vez del PASO 0B/1, verifícalo igual con 2 fuentes"). Luego dile que el turno de las 6pm ya salió y que se va a saltar el de hoy, o pausa y reactiva la tarea para que no salgan 2 reels el mismo día. |
| "publícalo ya" (una noticia caliente) | Lo mismo que arriba, con `fire_trigger`. Recuérdale la regla de 2 posts al día (10am QT, 6pm EQ): si ya salió el de las 6pm, el de mañana se mueve o se cancela. |
| "hazme el video pero no lo publiques" | Usa `contenido-quisqueyano` (modo REEL o HOOK) para el guion y las tarjetas, y entrégaselo. No publiques nada. |
| "¿cómo le fue al reel?" | Lee el último run de la tarea y las métricas (Composio, una métrica de reels por llamada) o pasa a `contenido-quisqueyano` en modo AUDITORÍA. |
| Quiere cambiar una regla del formato (música, colores, tema por defecto) | Lee el prompt de la tarea, propón el cambio en 1-2 líneas y, con el "sí", aplícalo con `update_trigger` (prompt completo). Anota la decisión en la memoria del proyecto. |

---

## Reglas fijas del formato (resumen; el detalle está en la tarea)

- Un solo reel de El Quisqueyano al día, a las 6pm ET. A las 10am sale el de Quisqueya Travel (otra tarea, `trig_01YMzWjhCCLipL8z79xzNu36`).
- Sin Pexels, sin IA y sin stock. Abre con foto real de Wikimedia Commons con licencia libre (si no hay, primera tarjeta animada) y después van 3-5 tarjetas azul #002D62 / rojo #CE1126 con Montserrat Black y una línea en amarillo #FFD166.
- Todo dato se verifica con 2 fuentes; si no hay noticia verificable, no se publica y se avisa.
- Música CC BY de Kevin MacLeod. Las fuentes y los créditos de foto y música van en el primer comentario.
- Caption: la primera línea igual al gancho, cierre con pedido de compartir ("mándaselo a…") y 3-5 hashtags (nada de muros de 15-20).
- Nada de amarillismo, tragedias personales ni política partidista.

---

## Changelog

| Versión | Cambios |
|---|---|
| v6 | Pasa a Composio. Publica en IG y FB. Deja de generar video con IA de Blotato y usa la tarea de las 6pm como motor. Absorbe `auto-mode-quisqueyano`. |
| v5 | Solo Facebook, 3 videos al día vía Blotato (obsoleto). |
