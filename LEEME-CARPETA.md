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
| `index.html`, `404.html`, `admin.html` | Páginas principales del sitio (admin.html: panel interno, deshabilitado hasta configurar credenciales) |
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
| `deploy/omniroute/` | Carpeta de una automatización externa (revisar con Venul si sigue en uso) |
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

**Puedes borrar de la raíz de `Quisqueya`** (ya tienen copia en `_interno/`): los 8 archivos SEO, los 6 de planificación, `_migrate_booking.py`, `_migrate_booking_texto.py`, las 4 imágenes duplicadas (`a1.png`, `qt-promo-fb-upload.png`, `quisqueya-travel-promo-facebook.png`, `x.png`), `sesion-2026-07-05.md` y `nota-bitacora-2026-08-06.md`.

**Dejé estos en la raíz a propósito, sin tocar** (aunque parecen "documentos sueltos", están acoplados a scripts o procesos activos y moverlos podría romper algo):
- `auditoria.py` y `reparacion.py` — calculan su carpeta de trabajo a partir de su propia ubicación (`__file__`), así que deben quedarse donde están.
- `ultimo-reporte-auditoria.json` — es el archivo que esos dos scripts leen y escriben; si lo muevo, el próximo `auditoria.py` genera uno nuevo en la raíz y pierdes el enlace.
- `grupos-fb-promo.md` — es el registro vivo de la campaña de grupos de Facebook (cambió de tamaño mientras trabajaba en esta sesión, confirmando que algo lo sigue escribiendo).
- `marketing.plugin` — no lo pude copiar: el sistema lo bloqueó por ser un "hardlink" (un archivo enlazado a otro por el sistema operativo). Si quieres que lo mueva también, tendrías que copiarlo tú manualmente primero (Ctrl+C/Ctrl+V en el Explorador rompe el enlace) y yo lo organizo después.

No pude borrar los originales yo mismo (esta sesión solo puede leer y escribir en tu carpeta, no borrar) — por eso quedan duplicados hasta que tú los borres.

### Pendiente sin resolver aún

- [ ] Borrar la carpeta `.git` interna dañada dentro de `Quisqueya` (opcional, inofensiva, ya documentada en la memoria).
- [ ] Confirmar si `deploy/omniroute/` sigue en uso.

## Automatizaciones/skills relacionadas con este proyecto

Detectadas en tus skills de Claude: `quisqueya-travel`, `quisqueya-travel-design`, `quisqueya-travel-memoria`, `quisqueya-travel-monetizacion`, `quisqueya-travel-seguridad`, `quisqueya-travel-ventas`, `quisqueya-travel-voz-humana`, `quisqueyano-master`, `quisqueyatravel`, `auto-mode-quisqueyano`, `autoconsistencia-quisqueyano`, `semana-quisqueyano`, `vendedor-booking`, `viral-script-quisqueyano`, `viral-video-el-quisqueyano`, `pexels-quisqueya-travel`. Varias de ellas corren en sesiones automáticas/programadas (de ahí las entradas en `quisqueya-travel-memoria.md` que tú no escribiste a mano).

## Pendientes urgentes reales (según la memoria más reciente, 18 ago)

- 🔴 Dar Push en GitHub Desktop a la guía "Las Terrenas vs Samaná" (commit `792406e` ya listo, no se pudo subir por un bug de GitHub Desktop con computer-use).
- 🔴 Configurar método de pago en Travelpayouts — bloquea cobrar comisión de vuelos/carro/tours/traslados.
- 🔴 Actualizar método de pago de Meta Ads (la campaña de Punta Cana está pausada por eso).
- 🔴 3 testimonios reales para activar la sección de reseñas (`#resenas`, hoy oculta).
- 🔴 API key de Gemini para activar `admin.html`.
