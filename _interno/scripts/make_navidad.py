#!/usr/bin/env python3
"""Genera vuelos-navidad-nyc-rd.html (landing de campana) a partir de guia-vuelos-nyc-rd.html."""
import os, re
R = os.path.expanduser("~/mnt/Quisqueya")
t = open(f"{R}/guia-vuelos-nyc-rd.html", encoding="utf-8", newline="").read()
nl = "\r\n" if "\r\n" in t else "\n"
t = t.replace("\r\n", "\n")

URL = "https://quisqueyatravel.org/vuelos-navidad-nyc-rd"
# 1) head: titulo, meta, canonical; sin hreflang (no hay version EN/FR) y noindex (landing de anuncios)
t = re.sub(r"<title>.*?</title>", "<title>Vuelos NYC a RD en Navidad 2026: compara y reserva | Quisqueya Travel</title>", t, count=1)
t = re.sub(r'<meta name="description" content="[^"]*" />',
           '<meta name="description" content="Compara vuelos de JFK, Newark y LaGuardia a República Dominicana para Navidad y fin de año. Cuándo reservar y cómo no pagar de más." />', t, count=1)
t = re.sub(r'\s*<meta name="keywords"[^>]*/>', "", t, count=1)
t = re.sub(r'<link rel="canonical"[^>]*/>', f'<meta name="robots" content="noindex, follow" />\n  <link rel="canonical" href="{URL}" />', t, count=1)
t = re.sub(r'\s*<link rel="alternate" hreflang[^>]*/>', "", t)
t = re.sub(r'<meta property="og:title" content="[^"]*" />', '<meta property="og:title" content="Vuelos NYC a RD para Navidad 2026" />', t, count=1)
t = re.sub(r'<meta property="og:description" content="[^"]*" />', '<meta property="og:description" content="Compara JFK, Newark y LaGuardia y reserva con tiempo tu vuelo a casa en diciembre." />', t, count=1)
t = re.sub(r'<meta property="og:url" content="[^"]*" />', f'<meta property="og:url" content="{URL}" />', t, count=1)
t = re.sub(r'\s*<script type="application/ld\+json">.*?</script>', "", t, flags=re.S)

# 2) cabecera del articulo
t = t.replace('<span class="article-badge">✈️ Guía de vuelos</span>', '<span class="article-badge">🎄 Navidad 2026</span>')
t = re.sub(r"<h1>.*?</h1>", "<h1>Vuelos de NYC a RD para Navidad: reserva ahora y no pagues de más</h1>", t, count=1)
t = re.sub(r'<p class="intro">.*?</p>',
  '<p class="intro">Diciembre es la temporada más pedida para volar a República Dominicana: todo el mundo quiere estar en casa para Nochebuena y fin de año. Compara aquí los tres aeropuertos de Nueva York, elige tus fechas y busca tu vuelo en minutos.</p>', t, count=1, flags=re.S)
t = t.replace('<p class="breadcrumb"><a href="/">Inicio</a> / Guías de viaje</p>', '<p class="breadcrumb"><a href="/">Inicio</a> / Vuelos</p>')

# 3) bloque de campana (antes de la comparacion) con CTA directo al buscador y a WhatsApp
camp = '''<div class="cta-box" style="margin:8px 0 28px">
    <p>🎄 ¿Ya sabes tus fechas? Busca tu vuelo NYC → RD ahora:</p>
    <a href="https://aviasales.tpo.li/AIrUfvdu" target="_blank" rel="noopener sponsored" class="btn-primary">✈️ Buscar vuelos para Navidad</a>
    <p style="margin:14px 0 0;font-size:0.85rem;font-weight:400">Sin costo extra para ti. Terminas la compra en el sitio de la agencia o aerolínea.</p>
  </div>

  <h2>Cómo no pagar de más en diciembre</h2>
  <p><strong>Reserva con tiempo.</strong> Las fechas cercanas a Nochebuena y fin de año son las primeras en subir de precio y en agotarse. Mientras más tarde busques, menos opciones tendrás.</p>
  <p><strong>Sé flexible con el día.</strong> Salir uno o dos días antes o después de las fechas más pedidas suele salir más barato que volar justo el 23 o el 24. Prueba varias combinaciones de ida y vuelta.</p>
  <p><strong>Compara los tres aeropuertos.</strong> JFK, Newark y LaGuardia pueden dar precios distintos para el mismo día. Búscalos en la misma comparación antes de decidir.</p>
  <p><strong>Mira el precio total.</strong> Con la tarifa básica la maleta de bodega se cobra aparte, y en diciembre casi todos llevamos regalos. Suma el equipaje antes de comparar.</p>

  <div class="cta-box">
    <p>💬 ¿Prefieres que te ayude? Escríbeme tus fechas y desde qué aeropuerto sales, y te oriento.</p>
    <a href="/whatsapp" target="_blank" rel="noopener" class="btn-primary">Escribir por WhatsApp</a>
  </div>

  '''
t = t.replace("<h2>Comparación rápida</h2>", camp + "<h2>Comparación rápida</h2>", 1)

# 4) FAQ: sin duplicar ld+json; ajustar pie
t = t.replace("Preguntas frecuentes sobre vuelos de NYC a RD", "Preguntas frecuentes sobre vuelos a RD en Navidad")
open(f"{R}/vuelos-navidad-nyc-rd.html", "w", encoding="utf-8", newline="").write(t.replace("\n", nl))
print("ok", len(t))
