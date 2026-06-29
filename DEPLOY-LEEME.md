# Cómo se despliega Quisqueya Travel

## Estado actual: Cloudflare Pages ✅ (actualizado 2026-06-29)

El sitio **https://quisqueyatravel.org** está conectado a:

- **Repositorio:** https://github.com/venulhernandez-cyber/quisqueyatravel (rama `main`)
- **Hosting:** Cloudflare Pages — cualquier push a `main` despliega en 1-2 minutos
- **Dominio propio:** quisqueyatravel.org (migrado desde Netlify el 2026-06-28)

## Qué significa esto en la práctica

Para actualizar el sitio, sube los archivos al repositorio de GitHub (rama `main`) directamente desde la web: `github.com/venulhernandez-cyber/quisqueyatravel` → "Add file" → "Upload files". Cloudflare Pages detecta el cambio y publica automáticamente.

**Ya NO se usa Netlify.** No subir archivos a Netlify Drop.

## Redirecciones (URLs limpias)

Cloudflare Pages usa `_redirects` (en la raíz del repo) para redirigir `/guia-punta-cana.html` hacia `/guia-punta-cana`, etc. El `netlify.toml` puede quedar en el repo — Cloudflare lo ignora.

## Workflow de deploy

1. Editar archivos HTML
2. Commit + push a `main`
3. GitHub Actions dispara `.github/workflows/deploy-cloudflare.yml`
4. Cloudflare Pages despliega en ~1-2 minutos
5. Verificar en https://quisqueyatravel.org

## Afiliación Stay22 (activa)

- AID: quisqueyatravel
- Enlace general: https://booking.stay22.com/quisqueyatravel/Hx6xlzKc4K
- Ver config.md para enlaces por destino
