#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Segunda pasada: actualiza texto visible (avisos de afiliacion, disclaimers)
que menciona 'Stay22' -> 'Booking.com'. No toca CSP (linea 4, defensivo/no
usado por <a> normales) ni comentarios de codigo ya actualizados.
"""
import os

REPLACEMENTS = [
    # Español - disclaimers con Travelpayouts
    ("Quisqueya Travel es un sitio afiliado de Stay22 y Travelpayouts",
     "Quisqueya Travel es un sitio afiliado de Booking.com y Travelpayouts"),
    # Español - disclaimers solo Stay22 (paginas sin vuelos/autos)
    ("Quisqueya Travel es un sitio afiliado de Stay22;",
     "Quisqueya Travel es un sitio afiliado de Booking.com;"),
    ("Quisqueya Travel es un sitio afiliado de Stay22 —",
     "Quisqueya Travel es un sitio afiliado de Booking.com —"),
    ("Quisqueya Travel es un sitio afiliado de Stay22.",
     "Quisqueya Travel es un sitio afiliado de Booking.com."),
    # Español - footer corto
    ("Sitio afiliado de Stay22 y Travelpayouts",
     "Sitio afiliado de Booking.com y Travelpayouts"),
    # English - disclaimers con Travelpayouts
    ("Quisqueya Travel is a Stay22 and Travelpayouts affiliate site",
     "Quisqueya Travel is a Booking.com and Travelpayouts affiliate site"),
    ("Quisqueya Travel is an affiliate site for Stay22 and Travelpayouts",
     "Quisqueya Travel is an affiliate site for Booking.com and Travelpayouts"),
    # English - solo Stay22
    ("Quisqueya Travel is a Stay22 affiliate site.",
     "Quisqueya Travel is a Booking.com affiliate site."),
    ("Quisqueya Travel is a Stay22 affiliate site —",
     "Quisqueya Travel is a Booking.com affiliate site —"),
    ("Quisqueya Travel is a Stay22 affiliate site;",
     "Quisqueya Travel is a Booking.com affiliate site;"),
    # Mencion suelta en prosa (guia-costo-viaje-familia-rd.html)
    ("comparando precio directo contra un buscador como Stay22",
     "comparando precio directo contra un buscador como Booking.com"),
]

EXCLUDE_DIRS = {'.git'}
changed = []
for root, dirs, files in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
    for fn in files:
        if not fn.endswith('.html'):
            continue
        path = os.path.join(root, fn)
        with open(path, encoding='utf-8') as f:
            content = f.read()
        orig = content
        for old, new in REPLACEMENTS:
            content = content.replace(old, new)
        if content != orig:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            changed.append(path)

print("Archivos con texto actualizado:", len(changed))
for p in changed:
    print(" -", p)
