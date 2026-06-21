# Cómo desplegar Quisqueya Travel sin que "se pierda" otra vez

## Qué pasó

El sitio real es **https://quisqueyatravel.netlify.app** (proyecto Netlify "quisqueyatravel", Project ID `2f529032-f47f-4317-8019-445ab2b841cb`, creado el 10 de junio).

Existe también un sitio viejo y abandonado en `golden-heliotrope-c5c46d.netlify.app` — es un deploy suelto de una sesión anterior que quedó huérfano. La documentación de la tarea programada (`config.md` / SKILL de Quisqueya Travel) todavía apunta a esa URL vieja, por eso pareció que "el sitio se había caído": no se cayó, simplemente se estaba buscando en la dirección equivocada.

## La causa raíz

Netlify Drop (arrastrar una carpeta a app.netlify.com) crea un **sitio nuevo con nombre aleatorio cada vez que lo subes desde la página genérica `/drop`**. Si en vez de eso subes los archivos siempre dentro del proyecto correcto (`/projects/quisqueyatravel/deploys`), se actualiza el mismo sitio de siempre — eso es lo que hemos estado haciendo en esta sesión.

## Regla de oro para no repetir el problema

1. **Nunca** uses `app.netlify.com/drop` a secas — siempre entra primero a `https://app.netlify.com/projects/quisqueyatravel/deploys` y sube los archivos ahí.
2. El nombre del proyecto ("quisqueyatravel") es fijo — no cambia aunque subas archivos nuevos, mientras lo hagas en esa misma pantalla.
3. Antes de dar por "caído" el sitio, verifica primero en el dashboard de Netlify (`app.netlify.com/teams/venulhernandez/projects`) si existe un proyecto con un nombre distinto al que tenías anotado — pudo haber cambiado de nombre en otra sesión.
4. Corrige (o pide que se corrija) la URL vieja `golden-heliotrope-c5c46d` en la configuración de la tarea programada `quisqueya-travel-diario`, para que no vuelva a generar confusión.

## Recomendación para eliminar el riesgo de raíz (opcional, requiere tu decisión)

La forma más sólida de que esto no vuelva a pasar es dejar de depender de subir archivos a mano y conectar el sitio a un repositorio de GitHub (Netlify hace el deploy automático en cada cambio, con historial completo). Esto requiere crear un repo y conectar tu cuenta de GitHub a Netlify — es un cambio de una sola vez. También puedes comprar un dominio propio (ej. quisqueyatravel.com) para no depender del subdominio de Netlify. Avísame si quieres que te ayude a configurar cualquiera de las dos cosas.

## Archivos del sitio (carpeta local)

- `index.html` — homepage
- `guia-requisitos-viaje-rd-2026.html`
- `guia-costo-viaje-familia-rd.html`
- `guia-vuelos-nyc-rd.html`
- `robots.txt`, `sitemap.xml`

Cada vez que se edite cualquiera de estos archivos, hay que volver a subir **todos** a la vez en `/projects/quisqueyatravel/deploys` (el deploy reemplaza el sitio completo).
