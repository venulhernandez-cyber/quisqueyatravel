#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Migracion Stay22 + Travelpayouts (parcial) -> Booking.com/CJ afiliado.
Se ejecuta una vez, luego se borra. No tocar data binaria/imagenes.
"""
import re
import os
import urllib.parse

BOOKING_TRACK = "https://www.tkqlhce.com/click-101799556-15734352?url="

def booking_deep(dest_url):
    return BOOKING_TRACK + urllib.parse.quote(dest_url, safe='')

# Los 4 servicios de Travelpayouts con equivalente directo en Booking.com.
# eSIM (yesim.tpo.li) y Seguro de viaje (ektatraveling.tpo.li) NO se tocan:
# Booking.com no ofrece esos dos servicios.
STATIC_MAP = {
    "https://aviasales.tpo.li/AIrUfvdu": booking_deep("https://www.booking.com/flights/index.html"),
    "https://getrentacar.tpo.li/gFUlN3Yl": booking_deep("https://www.booking.com/cars/index.html"),
    "https://kiwitaxi.tpo.li/wOqfFo9t": booking_deep("https://www.booking.com/taxi/index.html"),
    "https://klook.tpo.li/yEpeRgNT": booking_deep("https://www.booking.com/attractions/index.html"),
}

STAY22_RE = re.compile(
    r'https://www\.stay22\.com/allez/quisqueyatravel\?address=([^&"\']*)(?:&campaign=([^"\'&]+))?'
)

def stay22_replace(m):
    address_enc = m.group(1)
    if not address_enc:
        # caso especial: constante base en hoteles.js / hoteles2.js sin address real,
        # no se toca aqui (se maneja aparte)
        return m.group(0)
    address = urllib.parse.unquote_plus(address_enc)
    address = address.replace('Dominican Republic', 'Republica Dominicana')
    dest = "https://www.booking.com/searchresults.html?ss=" + urllib.parse.quote(address, safe='')
    return booking_deep(dest)

EXCLUDE_DIRS = {'.git'}
TARGET_EXT = {'.html'}

changed_files = []
for root, dirs, files in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
    for fn in files:
        ext = os.path.splitext(fn)[1]
        if ext not in TARGET_EXT:
            continue
        path = os.path.join(root, fn)
        with open(path, encoding='utf-8') as f:
            content = f.read()
        orig = content
        content = STAY22_RE.sub(stay22_replace, content)
        for old, new in STATIC_MAP.items():
            content = content.replace(old, new)
        if content != orig:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            changed_files.append(path)

# data/hoteles.json usa el mismo patron de address=, mismo tratamiento
json_path = os.path.join('data', 'hoteles.json')
if os.path.exists(json_path):
    with open(json_path, encoding='utf-8') as f:
        content = f.read()
    orig = content
    content = STAY22_RE.sub(stay22_replace, content)
    if content != orig:
        with open(json_path, 'w', encoding='utf-8') as f:
            f.write(content)
        changed_files.append(json_path)

print("Archivos modificados:", len(changed_files))
for p in changed_files:
    print(" -", p)
