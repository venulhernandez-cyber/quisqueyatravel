# Cómo se despliega Quisqueya Travel (actualizado)

## Estado actual: deploy automático activado ✅

El sitio **https://quisqueyatravel.netlify.app** ya no depende de subir archivos a mano. Está conectado a:

- **Repositorio:** https://github.com/venulhernandez-cyber/quisqueyatravel (rama `main`)
- **Netlify:** auto-publish activado — cualquier cambio en `main` se despliega solo, normalmente en 2-7 segundos.

## Qué significa esto en la práctica

Para actualizar el sitio, ya no hace falta entrar a Netlify ni arrastrar carpetas. Basta con subir los archivos nuevos o editados al repositorio de GitHub (rama `main`), por ejemplo desde la página web de GitHub: `github.com/venulhernandez-cyber/quisqueyatravel` → "Add file" → "Upload files". Netlify detecta el cambio y publica automáticamente.

## Por qué se hizo este cambio

Antes, cada actualización requería subir manualmente la carpeta completa a Netlify Drop. Eso generó el problema original: un deploy suelto del pasado (`golden-heliotrope-c5c46d.netlify.app`) quedó huérfano y su URL siguió apareciendo en documentación vieja, lo que pareció un "sitio caído" cuando en realidad el sitio real (`quisqueyatravel`) seguía funcionando bien. Con GitHub conectado, ya no existe ese riesgo: solo hay un origen de verdad (el repositorio) y Netlify siempre construye desde ahí.

## Archivos del sitio

- `index.html` — homepage
- `guia-requisitos-viaje-rd-2026.html`
- `guia-costo-viaje-familia-rd.html`
- `guia-vuelos-nyc-rd.html`
- `robots.txt`, `sitemap.xml`

Estos mismos archivos viven en dos lugares ahora: esta carpeta local (`Desktop\Quisqueya`) y el repositorio de GitHub. Si se edita uno, hay que subir la versión actualizada a GitHub para que se refleje en vivo — la carpeta local por sí sola ya no actualiza el sitio.

## Pendiente opcional

Dominio propio (ej. `quisqueyatravel.com`) en vez de depender del subdominio `.netlify.app` — requiere compra y configuración de DNS, decisión de Venul.
