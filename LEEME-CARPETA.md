# Quisqueya Travel — Mapa de la carpeta

*Generado el 18 de agosto de 2026 para poner en contexto esta carpeta. Actualízalo si la estructura cambia.*

## Estructura actual

```
Quisqueya/
├── (sitio en vivo: index.html, guia-*.html, en/, fr/, js/, data/, img/, functions/, _headers, _redirects, sitemap.xml, robots.txt...)
├── memoria-proyecto.md          ← bitácora activa (leer siempre)
├── quisqueya-travel-memoria.md  ← bitácora activa (leer siempre)
├── LEEME-CARPETA.md             ← este archivo
├── auditoria.py, reparacion.py, ultimo-reporte-auditoria.json, grupos-fb-promo.md  ← activos, no mover
└── _interno/
    ├── seo/            ← reportes SEO históricos
    ├── planificacion/  ← docs de plan y monetización
    ├── scripts/        ← migraciones de un solo uso, ya ejecutadas
    ├── media/          ← imagen promocional (deduplicada)
    └── bitacoras-viejas/  ← sesiones sueltas archivadas
```

## Qué es este proyecto

**Quisqueya Travel** (sitio en vivo: https://quisqueyatravel.org) es un negocio de afiliación de turismo hacia República Dominicana. Genera comisión por:

- **Hoteles** — Booking.com vía CJ Affiliate (CID 7985681, aprobado) y Stay22 como respaldo.
- **Vuelos** — Aviasales, vía Travelpayouts.
- **Alquiler de carros** — GetRentacar, vía Travelpayouts (tarjeta "Alquiler de carro" en la sección `#servicios` del sitio).
- **Traslados** — Kiwitaxi, vía Travelpayouts.
- **Tours/excursiones** — Klook, vía Travelpayouts.
- **eSIM y seguro de viaje** — Yesim y EKTA, vía Travelpayouts.

Es decir: **sí cubre hoteles, viajes (vuelos/traslados/tours) y alquiler de carros** — el alcance que describiste. No hacía falta corregir el modelo de negocio, solo confirmarlo y dejarlo documentado (antes no había un solo archivo que lo resumiera así).

El sitio es multilenguaje: **23 guías en español, ~23 en inglés (`/en/`), 10 en francés (`/fr/`)**, cubriendo destinos (Punta Cana, Santo Domingo, Samaná, Las Terrenas, Puerto Plata, La Romana, Santiago, Jarabacoa, Constanza, Boca Chica, Barahona, Isla Saona...), itinerarios, requisitos de entrada, presupuesto familiar, mejor época para viajar, etc.

Marketing: página de Facebook "El Quisqueyano en NYC", Instagram @venulh, Pinterest, campañas de Meta Ads, promoción en ~44 grupos de Facebook dominicanos/NY, y un flujo de contenido diario (posts de hoteles/playas) vía Blotato.

## Cómo está desplegado

- **Hosting:** Cloudflare Pages (proyecto `quisqueyatravel`), dominio propio `quisqueyatravel.org`.
- **Repo:** `github.com/venulhernandez-cyber/quisqueyatravel`, rama `main`.
- **Deploy:** subir archivos a GitHub (GitHub Desktop es el método principal; upload web como respaldo) → GitHub Actions (`.github/workflows/deploy-cloudflare.yml`) publica solo en Cloudflare Pages.
- **Netlify ya NO se usa** — la cuenta fue eliminada por completo el 30 de junio de 2026. Nunca sugerir Netlify.

⚠️ Importante: **todos los archivos HTML/CSS/JS en la raíz y en `en/`, `fr/`, `js/`, `data/`, `functions/`, `img/` son parte del sitio en vivo y no se deben mover ni renombrar** — las URLs limpias (`/guia-punta-cana`, sin `.html`) dependen de `_redirects`, y el deploy sube la carpeta tal cual está.

## Qué es cada cosa en la raíz

| Archivo/carpeta | Qué es |
|---|---|
| `index.html`, `404.html`, `admin.html` | Páginas principales del sitio (admin.html: panel interno, activo desde el 19 ago — pide login `ADMIN_USER`/`ADMIN_PASS`) |
| `guia-*.html` | Las 23 guías en español (páginas reales del sitio) |
| `en/`, `fr/` | Versiones en inglés y francés de las guías |
| `landing-arma-tu-itinerario.html`, `bio-link-el-quisqueyano.html` | Landing pages adicionales |
| `data/hoteles.json` | Base de datos de hoteles destacados que alimenta el buscador |
| `js/hoteles.js`, `js/hoteles2.js`, `js/widget.js`, `js/app-admin.js` | Lógica del sitio (buscador de hoteles, panel admin) |
| `img/` | Imágenes propias del sitio (Santiago) |
| `functions/` | Cloudflare Pages Functions (middleware de seguridad/CSP) |
| `.github/workflows/` | Automatización de deploy y purga de caché |
| `_headers`, `_redirects`, `robots.txt`, `sitemap.xml`, `googled0ccc0fd3defd16e.html` | Configuración técnica del sitio — no tocar sin saber para qué sirve cada uno |
| `style-admin.css` | Estilos del panel admin |
| `deploy/omniroute/` | ❌ **(19 ago) Eliminado a pedido explícito de Venul** — ya no existe ni localmente ni en GitHub. Ver nota debajo de la tabla. |
| `.git`, `.gitignore` | Control de versiones. Hay una carpeta `.git` interna dañada por un conflicto con OneDrive — es inofensiva, ya identificada en la memoria del proyecto, se puede borrar cuando quieras (no es urgente) |

## Documentos de gestión (no forman parte del sitio en vivo)

Estos son texto/reportes/scripts de trabajo — no se sirven como páginas, solo viven en la carpeta:

- **Memoria/bitácora:** `memoria-proyecto.md` y `quisqueya-travel-memoria.md` — las dos activas, ahora con una nota cruzada al inicio de cada una para que no se pierdan entre sí. Léelas ambas al empezar una sesión de este proyecto.
- **Bitácoras puntuales más viejas:** `sesion-2026-07-05.md`, `nota-bitacora-2026-08-06.md` — sesiones sueltas, su contenido relevante ya debería estar reflejado en las memorias principales.
- **Reportes SEO:** `informe-seo-quisqueya-travel.md`, `informe-seo-2026-08-05.md`, `informe-seo-2026-08-08.md`, `seo-audit-quisqueyatravel-2026-07-30.md`, `-07-31.md`, `-08-04.md`, `-08-09.md`, `-08-13.md`, `ultimo-reporte-auditoria.json` — snapshots históricos de auditorías SEO. Son 8 reportes acumulados; probablemente solo hace falta conservar el más reciente (`-08-13.md` + `ultimo-reporte-auditoria.json`) y archivar el resto.
- **Planificación:** `plan-desarrollo-quisqueya-travel.docx`, `plan-accion-google-analytics.docx`, `plan-semana-playa-hoteles-viajes.md`, `monetizacion-progreso.md`, `quisqueya-travel-vs-mejores-sitios-afiliados.md`, `prospector-skill.md`, `grupos-fb-promo.md` (registro de la campaña en grupos de Facebook), `marketing.plugin`.
- **Scripts puntuales:** `_migrate_booking_texto.py`, `_migrate_booking.py`, `auditoria.py`, `reparacion.py` — scripts de migraciones/reparaciones ya ejecutadas una vez.
- **Imágenes promocionales duplicadas:** `a1.png`, `qt-promo-fb-upload.png`, `quisqueya-travel-promo-facebook.png` y `x.png` parecen ser la misma imagen (mismo tamaño, 101,492 bytes) guardada varias veces con nombres distintos. `5 skills.jpg` es otra imagen suelta. Ninguna está referenciada en el código del sitio.

### Reorganización ya hecha (18 ago) — solo falta que borres los originales sueltos

Ya copié los documentos de gestión a una nueva carpeta `_interno/` (fuera del código del sitio, no afecta el deploy). Puedes borrar los originales que quedaron sueltos en la raíz — sus copias ya están a salvo en `_interno/`:

| Carpeta nueva | Contiene copias de |
|---|---|
| `_interno/seo/` | Los 8 reportes SEO (`informe-seo-*.md`, `seo-audit-quisqueyatravel-*.md`) |
| `_interno/planificacion/` | `plan-desarrollo-quisqueya-travel.docx`, `plan-accion-google-analytics.docx`, `plan-semana-playa-hoteles-viajes.md`, `monetizacion-progreso.md`, `quisqueya-travel-vs-mejores-sitios-afiliados.md`, `prospector-skill.md` |
| `_interno/scripts/` | `_migrate_booking.py`, `_migrate_booking_texto.py` (scripts de migración ya ejecutados, uso único) |
| `_interno/media/` | `promo-facebook-quisqueya-travel.png` — 1 sola copia de la imagen que estaba duplicada 4 veces (`a1.png`, `qt-promo-fb-upload.png`, `quisqueya-travel-promo-facebook.png`, `x.png` eran, byte a byte, la misma imagen) |
| `_interno/bitacoras-viejas/` | `sesion-2026-07-05.md`, `nota-bitacora-2026-08-06.md` |

✅ **(19-20 ago) Limpieza de duplicados completada de verdad.** Primero se movieron 22 a `_to_delete/` localmente (esta sesión no puede borrar archivos, solo moverlos) y esa carpeta se borró por computer-use. Luego, al sincronizar con GitHub, se detectó que 12 de esos archivos (8 SEO/planificación + 2 scripts + 4 imágenes duplicadas — no `quisqueya-travel-memoria.md`, que resultó ser un archivo real y se restauró) seguían existiendo en el repositorio remoto porque esa limpieza nunca se había subido. Con permiso de Venul se borraron también ahí, directo en GitHub. **No queda ningún duplicado ni localmente ni en GitHub.**

**Dejé estos en la raíz a propósito, sin tocar** (aunque parecen "documentos sueltos", están acoplados a scripts o procesos activos y moverlos podría romper algo):
- `auditoria.py` y `reparacion.py` — calculan su carpeta de trabajo a partir de su propia ubicación (`__file__`), así que deben quedarse donde están.
- `ultimo-reporte-auditoria.json` — es el archivo que esos dos scripts leen y escriben; si lo muevo, el próximo `auditoria.py` genera uno nuevo en la raíz y pierdes el enlace.
- `grupos-fb-promo.md` — es el registro vivo de la campaña de grupos de Facebook (cambió de tamaño mientras trabajaba en esta sesión, confirmando que algo lo sigue escribiendo).
- `marketing.plugin` — no lo pude copiar: el sistema lo bloqueó por ser un "hardlink" (un archivo enlazado a otro por el sistema operativo). Si quieres que lo mueva también, tendrías que copiarlo tú manualmente primero (Ctrl+C/Ctrl+V en el Explorador rompe el enlace) y yo lo organizo después.

No puedo borrar archivos yo mismo (esta sesión solo puede leer y escribir en tu carpeta, no borrar) — por eso los moví a `_to_delete/` en vez de borrarlos, y esa carpeta queda pendiente de que tú la elimines.

### Pendiente sin resolver aún

- [x] ✅ (19 ago) Carpeta `.git` interna dañada — borrada por computer-use directo en el equipo de Venul (con su permiso explícito).
- [x] ✅ (19 ago) Carpeta `_to_delete/` (los 22 duplicados movidos antes) — borrada de la misma forma.
- [x] ✅ (19 ago) `deploy/omniroute/` — investigado, confirmado en uso, y luego **borrado por completo a pedido de Venul** (carpeta local, código en `functions/api/chat.js`, y los 4 archivos en GitHub). El chat del sitio ahora usa Gemini directo, sin OmniRoute. Ver "🔴 Pendiente real" abajo por un efecto secundario de este cambio.

### ✅ git local reconectado y sincronizado al 100% con GitHub (19-20 ago, resuelto en la misma sesión)

Al limpiar la carpeta `.git` "rota" (el primer pendiente de esta lista), resultó que ESA era la conexión real de git — no la rota — y borrarla desconectó GitHub Desktop de esta carpeta ("Can't find quisqueyatravel"). Los archivos del sitio nunca estuvieron en riesgo. Se reconstruyó `.git` a mano con comandos de bajo nivel (`git commit-tree` + `update-ref`, evitando un `index.lock` que quedó trabado y no se pudo borrar).

Al revisar a fondo la divergencia que quedó entre ese commit "ancla" y `origin/main` (~43 archivos), se encontró que **`quisqueya-travel-memoria.md` se había borrado por error** en la limpieza de duplicados de esta misma sesión — no era un duplicado, es la bitácora activa real (1802 líneas, la que usa la skill `quisqueya-travel-memoria`). Se restauró desde GitHub sin pérdida de contenido.

Con permiso explícito de Venul, se completó la limpieza de verdad: los 12 archivos que sí eran duplicados genuinos (8 informes/planes + 2 scripts de migración + 4 imágenes idénticas — ya tienen copia en `_interno/`) se borraron directo en GitHub, no solo local. Después se sincronizó la carpeta local 1:1 con `origin/main` (todo el contenido real de las 296+ commits que faltaban) conservando las ediciones de hoy en `memoria-proyecto.md` y `LEEME-CARPETA.md`.

**Estado final: carpeta local y GitHub idénticos, sin archivos de más ni de menos, rama `main` apuntando al mismo commit que producción.** No queda ningún detalle técnico pendiente de esto.

## Automatizaciones/skills relacionadas con este proyecto

Detectadas en tus skills de Claude: `quisqueya-travel`, `quisqueya-travel-design`, `quisqueya-travel-memoria`, `quisqueya-travel-monetizacion`, `quisqueya-travel-seguridad`, `quisqueya-travel-ventas`, `quisqueya-travel-voz-humana`, `quisqueyano-master`, `quisqueyatravel`, `auto-mode-quisqueyano`, `autoconsistencia-quisqueyano`, `semana-quisqueyano`, `vendedor-booking`, `viral-script-quisqueyano`, `viral-video-el-quisqueyano`, `pexels-quisqueya-travel`. Varias de ellas corren en sesiones automáticas/programadas (de ahí las entradas en `quisqueya-travel-memoria.md` que tú no escribiste a mano).

## Pendientes urgentes reales (según la memoria más reciente, 19 ago)

- ✅ Guía "Las Terrenas vs Samaná" ya está publicada — subida a GitHub y mergeada a `main` el 19 de agosto (commit `072450a` + merge `817282a`). El bloqueo era un `.git/index.lock` trabado de la sesión anterior; se resolvió borrándolo manualmente y usando GitHub Desktop para el pull/push.
- ✅ `admin.html` ya está activo. La API key de Gemini ya estaba configurada en Cloudflare desde antes (no era el bloqueo real); lo que faltaba era el secreto `ADMIN_PASS`. Se agregó en Cloudflare Pages → Settings → Variables and secrets, y se forzó un redeploy con "Re-run all jobs" en GitHub Actions (los secrets de Cloudflare Pages solo aplican a deployments nuevos). Verificado en vivo: `admin.html` devuelve `401` (pide login), ya no el mensaje de "deshabilitado".
- ✅ Travelpayouts: el método de pago (Bank account, USD USA) ya estaba cargado, solo faltaba confirmar por email. Se confirmó el 19 de agosto — aparece como **Main** en Payout methods, sin avisos pendientes. Falta acumular el mínimo de $400 para el primer pago, eso es normal.
- 🔴 Actualizar método de pago de Meta Ads (la campaña de Punta Cana está pausada por eso). Pendiente — no se llegó a esta parte en la sesión del 19 de agosto.
- 🔴 3 testimonios reales para activar la sección de reseñas (`#resenas`, hoy oculta). Se revisaron los comentarios de Facebook/Instagram vía Blotato buscando candidatos reales — no hay ninguno usable: los únicos comentarios registrados son 3 respuestas automáticas del propio Venul que además fallaron por permisos (`errorCode 20201`, Blotato no tiene permiso para leer comentarios de audiencia). La sección en `index.html` (línea ~1324) ya está armada con 3 tarjetas placeholder, solo espera contenido real. Dos caminos pendientes: (a) Venul pasa 3 comentarios reales con texto+nombre para insertarlos, o (b) revisar el permiso de Blotato para leer comentarios de audiencia.
