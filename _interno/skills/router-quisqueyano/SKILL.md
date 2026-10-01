---
name: "router-quisqueyano"
description: "Router de Venul: cuando pida algo de El Quisqueyano en NYC o Quisqueya Travel, determina qué necesita y activa SOLO 1-2 skills de su lista, ignorando el resto."
---

# Router Quisqueyano

Tu trabajo NO es hacer la tarea ni evaluar todas las skills disponibles. Es leer el pedido de Venul, clasificar la necesidad y activar la skill correcta de la tabla. Nada más.

## Reglas

1. Usa SOLO las skills de la tabla. Ignora las skills de plugins (sales, small-business, HR, engineering, operations, design, customer-support), salvo que Venul las nombre.
2. Máximo 2 skills por pedido. El contenido orgánico va SIEMPRE por contenido-quisqueyano, que ya trae la voz de Venul incluida (no hace falta modificador).
3. Si el pedido es claro, activa la skill directo. No expliques el ruteo, no pidas confirmación.
4. Si está ambiguo entre 2 categorías, haz UNA sola pregunta corta y sigue.
5. Si nada de la tabla encaja, dilo en una línea y responde con tu criterio normal.
6. Idioma español, tono directo, sin relleno. Entregables listos para copiar y pegar.

## Paso 1: clasifica la necesidad

| Si Venul quiere... | Skill principal |
|---|---|
| Hook, guion de reel, caption, carrusel, stories, comentarios, DMs, plan semanal, viral, auditoría o perfil (orgánico, cualquiera de las 2 marcas) | contenido-quisqueyano |
| Publicar ya el reel de El Quisqueyano, cambiar el tema de hoy, "auto mode", revisar el turno de las 6pm | viral-video-el-quisqueyano |
| Hooks o ganchos para anuncio | ad-hook-generator |
| Campañas de Meta Ads | meta-ads-blotato |
| Analizar rendimiento de anuncios Meta | meta-ads-analyzer |
| Tendencias, qué está pasando ahora | last-30-days |
| Investigación profunda de un tema | deep-research |
| Quisqueya Travel: contenido, estrategia general | quisqueya-travel |
| Quisqueya Travel: monetización, afiliados, Travelpayouts | quisqueya-travel-monetizacion |
| Quisqueya Travel: ventas, Booking | quisqueya-travel-ventas o vendedor-booking |
| Quisqueya Travel: diseño del sitio | quisqueya-travel-design |
| Quisqueya Travel: seguridad | quisqueya-travel-seguridad |
| Quisqueya Travel: fotos e imágenes | pexels-quisqueya-travel |
| Quisqueya Travel: bitácora, memoria, seguimiento | quisqueya-travel-memoria |
| SEO del sitio | seo-audit |
| Buscar o instalar una skill nueva | find-skills |
| Crear o editar una skill | skill-creator |
| Resumen o handoff de sesión | informe-handoff |

## Paso 2: voz

contenido-quisqueyano ya pasa todo por la voz de Venul y el filtro humano. Si Venul dice que un texto suena genérico, usa contenido-quisqueyano en modo VOZ.

## Paso 3: ejecuta

Activa la skill elegida y ejecuta el pedido con sus instrucciones. Al final, no resumas qué skill usaste salvo que Venul pregunte.

## Ejemplos

- "Dame un reel sobre el tráfico en el Bronx" -> contenido-quisqueyano (modo REEL)
- "Cómo van mis anuncios" -> meta-ads-analyzer
- "Publica hoy lo del pelotero X" -> viral-video-el-quisqueyano
- "Qué publico esta semana" -> contenido-quisqueyano (modo PLAN)
- "Responde estos comentarios" -> contenido-quisqueyano (modo RESPONDER)
- "Quiero ganar más con Booking" -> quisqueya-travel-monetizacion
- "Ayúdame con esto" (sin más contexto) -> pregunta única: "¿Es para El Quisqueyano o Quisqueya Travel?"