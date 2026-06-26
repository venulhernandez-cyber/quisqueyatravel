"""
QUISQUEYA TRAVEL — HERRAMIENTA DE AUDITORÍA
============================================
Compara archivos locales vs sitio live (quisqueyatravel.org)
y detecta errores de SEO, canonical, scripts y contenido.

Uso:
    python auditoria.py

Requiere: pip install requests beautifulsoup4
"""

import os
import sys
import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime

# ─── CONFIGURACIÓN ────────────────────────────────────────────────────────────
BASE_URL   = "https://quisqueyatravel.org"
LOCAL_DIR  = os.path.dirname(os.path.abspath(__file__))
REPORT_DIR = LOCAL_DIR  # guarda el reporte en la misma carpeta

PAGES = [
    ("index.html",                         "/"),
    ("guia-punta-cana.html",               "/guia-punta-cana.html"),
    ("guia-santo-domingo.html",            "/guia-santo-domingo.html"),
    ("guia-barahona.html",                 "/guia-barahona.html"),
    ("guia-vuelos-nyc-rd.html",            "/guia-vuelos-nyc-rd.html"),
    ("guia-requisitos-viaje-rd-2026.html", "/guia-requisitos-viaje-rd-2026.html"),
    ("guia-costo-viaje-familia-rd.html",   "/guia-costo-viaje-familia-rd.html"),
]

ERRORES_CONTENIDO = [
    # (texto_prohibido, descripción)
    ("quisqueyatravel.netlify.app", "Canonical/URL apunta a netlify.app en vez de quisqueyatravel.org"),
    ("netlify.app",                 "Referencia a dominio netlify.app encontrada"),
]

REQUERIDOS = [
    ("emrldtp.com",     "Drive script de Travelpayouts"),
    ("stay22.com",      "Enlace de afiliado Stay22"),
]

HEADERS = {"User-Agent": "Mozilla/5.0 (QT-Audit/2.0; +https://quisqueyatravel.org)"}

# ─── PARSEO DE HTML ───────────────────────────────────────────────────────────
def parse_html(html):
    soup = BeautifulSoup(html, "html.parser")

    def meta(name=None, prop=None):
        tag = soup.find("meta", {"name": name} if name else {"property": prop})
        return (tag.get("content") or "").strip() if tag else ""

    canonical_tag = soup.find("link", {"rel": "canonical"})
    return {
        "title":       (soup.title.string or "").strip() if soup.title else "",
        "canonical":   (canonical_tag.get("href") or "").strip() if canonical_tag else "",
        "description": meta(name="description"),
        "og_title":    meta(prop="og:title"),
        "og_url":      meta(prop="og:url"),
    }

# ─── AUDITORÍA ────────────────────────────────────────────────────────────────
def auditar():
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
    resultados = []
    total_errores = 0

    print(f"\n{'='*65}")
    print(f"  🔍 AUDITORÍA QUISQUEYA TRAVEL — {timestamp}")
    print(f"{'='*65}")

    for local_file, path in PAGES:
        url     = BASE_URL + path
        local_f = os.path.join(LOCAL_DIR, local_file)
        fila    = {"pagina": local_file, "url": url, "ok": [], "errores": []}

        # ── Leer local ────────────────────────────────────────────────────────
        if not os.path.exists(local_f):
            fila["errores"].append("❌ Archivo local no encontrado")
            resultados.append(fila)
            continue
        with open(local_f, "r", encoding="utf-8") as f:
            local_html = f.read()
        local_data = parse_html(local_html)

        # ── Fetch live ────────────────────────────────────────────────────────
        try:
            r = requests.get(url, headers=HEADERS, timeout=15)
            fila["status"] = r.status_code
            if r.status_code != 200:
                fila["errores"].append(f"❌ HTTP {r.status_code}")
                resultados.append(fila)
                continue
            live_html = r.text
            live_data = parse_html(live_html)
        except Exception as e:
            fila["errores"].append(f"❌ No se pudo acceder al live: {e}")
            resultados.append(fila)
            continue

        # ── Comparar meta tags ─────────────────────────────────────────────
        campos = [
            ("title",       "Título"),
            ("canonical",   "Canonical"),
            ("description", "Meta descripción"),
            ("og_title",    "og:title"),
            ("og_url",      "og:url"),
        ]
        for key, label in campos:
            local_val = local_data.get(key, "")
            live_val  = live_data.get(key, "")
            if local_val == live_val:
                fila["ok"].append(f"✅ {label} coincide")
            else:
                fila["errores"].append(
                    f"🔴 {label} DESINCRONIZADO\n"
                    f"     Local: {local_val[:90]}\n"
                    f"     Live:  {live_val[:90]}"
                )

        # ── Verificar errores de contenido en live ─────────────────────────
        for texto, desc in ERRORES_CONTENIDO:
            if texto in live_html:
                fila["errores"].append(f"🔴 {desc}")
            # check also in local
            elif texto in local_html:
                fila["errores"].append(f"⚠️  {desc} (en local, no en live)")

        # ── Verificar elementos requeridos en live ─────────────────────────
        for texto, desc in REQUERIDOS:
            if texto in live_html:
                fila["ok"].append(f"✅ {desc} presente")
            else:
                fila["errores"].append(f"🟡 {desc} NO encontrado en live")

        resultados.append(fila)

    # ─── Imprimir reporte ─────────────────────────────────────────────────────
    for fila in resultados:
        n_err = len(fila["errores"])
        icon  = "✅" if n_err == 0 else ("⚠️ " if n_err <= 2 else "❌")
        print(f"\n{icon}  {fila['pagina']}  (HTTP {fila.get('status','?')})")
        for m in fila["ok"]:
            print(f"      {m}")
        for e in fila["errores"]:
            print(f"      {e}")
            total_errores += 1

    print(f"\n{'='*65}")
    print(f"  RESUMEN: {total_errores} problema(s) en {len(resultados)} páginas")
    if total_errores == 0:
        print("  🎉 ¡Todo sincronizado! El sitio está en perfecto estado.")
    else:
        print("  ⚠️  Ejecuta 'python reparacion.py' para ver las correcciones.")
    print(f"{'='*65}\n")

    # ─── Guardar reporte JSON ──────────────────────────────────────────────────
    reporte = {
        "timestamp":    timestamp,
        "total_errores": total_errores,
        "paginas":      len(resultados),
        "resultados":   resultados,
    }
    reporte_path = os.path.join(REPORT_DIR, "ultimo-reporte-auditoria.json")
    with open(reporte_path, "w", encoding="utf-8") as f:
        json.dump(reporte, f, ensure_ascii=False, indent=2)
    print(f"  📄 Reporte guardado en: {reporte_path}\n")

    return total_errores

if __name__ == "__main__":
    errores = auditar()
    sys.exit(0 if errores == 0 else 1)
