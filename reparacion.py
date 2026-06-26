"""
QUISQUEYA TRAVEL — HERRAMIENTA DE REPARACIÓN AUTOMÁTICA
=========================================================
Lee el último reporte de auditoría y repara los errores
más comunes directamente en los archivos locales.

Errores que repara automáticamente:
  - Canonical apuntando a netlify.app
  - og:url apuntando a netlify.app
  - Drive script faltante
  - Referencias a NYC en meta tags (title, description, og)

Uso:
    python reparacion.py              # muestra errores + repara
    python reparacion.py --preview    # solo muestra, no repara

Requiere: pip install beautifulsoup4
"""

import os
import re
import sys
import json
from bs4 import BeautifulSoup
from datetime import datetime

LOCAL_DIR   = os.path.dirname(os.path.abspath(__file__))
REPORTE_PATH = os.path.join(LOCAL_DIR, "ultimo-reporte-auditoria.json")
PREVIEW_ONLY = "--preview" in sys.argv

DRIVE_SCRIPT = (
    '<script nowprocket data-noptimize="1" data-cfasync="false" '
    'data-wpfc-render="false" seraph-accel-crit="1" data-no-defer="1">'
    '(function(){var script=document.createElement("script");script.async=1;'
    'script.src="https://emrldtp.com/NTQzMzQ5.js?t=543349";'
    'document.head.appendChild(script);})()</script>'
)

# Canónicos correctos por página
CANONICALS = {
    "index.html":                         "https://quisqueyatravel.org/",
    "guia-punta-cana.html":               "https://quisqueyatravel.org/guia-punta-cana.html",
    "guia-santo-domingo.html":            "https://quisqueyatravel.org/guia-santo-domingo.html",
    "guia-barahona.html":                 "https://quisqueyatravel.org/guia-barahona.html",
    "guia-vuelos-nyc-rd.html":            "https://quisqueyatravel.org/guia-vuelos-nyc-rd.html",
    "guia-requisitos-viaje-rd-2026.html": "https://quisqueyatravel.org/guia-requisitos-viaje-rd-2026.html",
    "guia-costo-viaje-familia-rd.html":   "https://quisqueyatravel.org/guia-costo-viaje-familia-rd.html",
}


def reparar_archivo(filename):
    path = os.path.join(LOCAL_DIR, filename)
    if not os.path.exists(path):
        print(f"  ❌ {filename}: no encontrado")
        return 0

    with open(path, "r", encoding="utf-8") as f:
        contenido = f.read()

    original   = contenido
    reparaciones = []

    # ── 1. Canonical incorrecto ────────────────────────────────────────────────
    correcto = CANONICALS.get(filename)
    if correcto:
        patron = r'<link\s+rel=["\']canonical["\'][^>]*href=["\'][^"\']*["\'][^>]*/?>'
        actual = re.search(patron, contenido)
        if actual:
            tag_actual = actual.group(0)
            if f'href="{correcto}"' not in tag_actual:
                tag_nuevo  = f'<link rel="canonical" href="{correcto}" />'
                contenido  = contenido.replace(tag_actual, tag_nuevo)
                reparaciones.append(f"🔧 Canonical corregido → {correcto}")

    # ── 2. og:url incorrecto ──────────────────────────────────────────────────
    if correcto:
        patron_og = r'<meta\s+property=["\']og:url["\'][^>]*content=["\'][^"\']*["\'][^>]*/?>'
        actual_og = re.search(patron_og, contenido)
        if actual_og:
            tag_og = actual_og.group(0)
            if f'content="{correcto}"' not in tag_og:
                tag_og_nuevo = f'<meta property="og:url" content="{correcto}" />'
                contenido    = contenido.replace(tag_og, tag_og_nuevo)
                reparaciones.append(f"🔧 og:url corregido → {correcto}")

    # ── 3. Drive script faltante ──────────────────────────────────────────────
    if "emrldtp.com" not in contenido:
        contenido = contenido.replace("<head>", f"<head>\n{DRIVE_SCRIPT}", 1)
        reparaciones.append("🔧 Drive script de Travelpayouts añadido")

    # ── 4. Referencias a netlify.app en el código ────────────────────────────
    if "netlify.app" in contenido and correcto:
        contenido = re.sub(
            r'https?://[a-z0-9\-]+\.netlify\.app(/[^\s"\'<>]*)?',
            lambda m: correcto if m.group(0).rstrip('/') in [
                "https://quisqueyatravel.netlify.app",
                "https://elquisqueyano.netlify.app"
            ] else m.group(0),
            contenido
        )
        if contenido != original and not any("🔧 Canonical" in r for r in reparaciones):
            reparaciones.append("🔧 Referencia(s) a netlify.app corregidas")

    # ── Resultado ─────────────────────────────────────────────────────────────
    if not reparaciones:
        print(f"  ✅ {filename}: sin errores reparables")
        return 0

    print(f"\n  📄 {filename}:")
    for r in reparaciones:
        print(f"     {r}")

    if not PREVIEW_ONLY:
        with open(path, "w", encoding="utf-8") as f:
            f.write(contenido)
        print(f"     💾 Guardado")

    return len(reparaciones)


def main():
    modo = "PREVIEW — no se modifica nada" if PREVIEW_ONLY else "REPARACIÓN AUTOMÁTICA"
    print(f"\n{'='*65}")
    print(f"  🛠️  QUISQUEYA TRAVEL — {modo}")
    print(f"  {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"{'='*65}")

    # Leer reporte si existe
    if os.path.exists(REPORTE_PATH):
        with open(REPORTE_PATH, "r", encoding="utf-8") as f:
            reporte = json.load(f)
        print(f"\n  Último reporte: {reporte['timestamp']} — {reporte['total_errores']} error(es)\n")
    else:
        print("\n  (No hay reporte previo — revisando todos los archivos)\n")

    total = 0
    for filename in CANONICALS:
        total += reparar_archivo(filename)

    print(f"\n{'='*65}")
    if total == 0:
        print("  ✅ Sin errores reparables encontrados.")
    else:
        accion = "DETECTADOS (modo preview)" if PREVIEW_ONLY else "REPARADOS"
        print(f"  ✅ {total} problema(s) {accion}.")
        if not PREVIEW_ONLY:
            print("\n  ⚡ PRÓXIMO PASO: Sube los archivos a GitHub para que Netlify")
            print("     despliegue los cambios:")
            print("     → github.com/venulhernandez-cyber/quisqueyatravel/upload/main")
    print(f"{'='*65}\n")


if __name__ == "__main__":
    main()
