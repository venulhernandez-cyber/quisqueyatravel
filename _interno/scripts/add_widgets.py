#!/usr/bin/env python3
"""Inserta widgets de Travelpayouts en las guias. Uso: add_widgets.py [--apply]"""
import os, re, sys

APPLY = "--apply" in sys.argv
ROOT = os.path.expanduser("~/mnt/Quisqueya")
AV = {"es": "es", "fr": "fr"}  # host de aviasales por idioma (el idioma debe coincidir con el host o sale una tarjeta promo)
G = "%231a6b3a"  # verde de marca (--verde #1a6b3a)

def src(kind, loc, sub):
    m = f"743485.{sub}"
    if kind == "vuelos":
        return (f"https://tpemb.com/content?currency=usd&trs=543349&shmarker={m}&show_hotels=false&powered_by=false"
                f"&locale={loc}&searchUrl=www.aviasales.{AV.get(loc, 'com')}%2Fsearch&primary_override={G}&color_button={G}&color_icons={G}"
                f"&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused={G}"
                f"&border_radius=8&plain=false&promo_id=7879&campaign_id=100")
    if kind == "traslados":
        return (f"https://tpemb.com/content?currency=USD&trs=543349&shmarker={m}&locale={loc}&from=&to=&country="
                f"&powered_by=false&height=&wtype=true&transfers_limit=10&bg_color=%23f5f5f5&button_color={G}"
                f"&button_font_color=%23ffffff&button_hover_color=%2314502b&border_color=%23f4a261"
                f"&input_font_color=%23c8ced4&input_bg_color=%23ffffff&input_label_color=%23c8ced4&icon_bg_color=%23ffffff"
                f"&icon_arrow_color=%236c7c8c&icon_bg_color_mobile=%23f4a261&icon_arrow_color_mobile=%23ffffff"
                f"&autocomplete_font_color=%23373f47&autocomplete_bg_color=%23ffffff&autocomplete_font_color_active=%23ffffff"
                f"&autocomplete_bg_color_active={G}&loader_color=%23f4a261&empty_color=%23373f47&info_bg_color=%23fff0cc"
                f"&info_icon_color=%234a4a4a&info_caption_color=%234a4a4a&class_background=%23ffffff&class_font_color=%23373f47"
                f"&class_header_color=%236c7c8c&class_button_background={G}&class_button_font_color=%23ffffff"
                f"&class_button_background_hover=%2314502b&class_comment_background=%23bfc0c4&class_comment_font=%23bfc0c4"
                f"&more_background=&more_background_hover=&more_font_color={G}&notification_background=%23f6f1ec"
                f"&notification_border_color=%23e37f17&notification_color=%23373f47&transfer_background=%23f6f7f8"
                f"&transfer_background_hover=%23f6f7f8&transfer_font_color=%23373f47&campaign_id=1&promo_id=2949")
    if kind == "carro":
        return f"https://tp.media/content?campaign_id=222&promo_id=8813&shmarker={m}&trs=543349"
    if kind == "esim":
        return (f"https://tpemb.com/content?trs=543349&shmarker={m}&locale={loc}&powered_by=false&color_button={G}"
                f"&color_focused={G}&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23C4C4C4&border_radius=8"
                f"&plain=false&no_labels=true&promo_id=8588&campaign_id=541")

TEXT = {
 "es": {
  "vuelos": ("✈️ Busca tu vuelo aquí mismo", "Compara aerolíneas y precios sin salir de la página. Al elegir tu vuelo, terminas la compra en el sitio de la aerolínea o agencia, sin costo extra para ti."),
  "traslados": ("🚐 Reserva tu traslado del aeropuerto", "Pon el aeropuerto y tu hotel, y ve el precio al momento. Cuando confirmas, el pago se completa en el sitio del proveedor."),
  "carro": ("🚗 Cotiza tu carro de alquiler", "Compara precios de carro sin salir de la guía. La reserva final se completa en el sitio del proveedor, sin costo extra para ti."),
  "esim": ("📱 Compra tu eSIM ahora", "Elige tu plan de datos para República Dominicana y llega con internet desde que aterrices. El pago se completa en el sitio del proveedor."),
 },
 "en": {
  "vuelos": ("✈️ Search your flight right here", "Compare airlines and prices without leaving the page. When you pick a flight you finish the purchase on the airline or agency site, at no extra cost to you."),
  "traslados": ("🚐 Book your airport transfer", "Enter the airport and your hotel and see the price instantly. You complete payment on the provider's site when you confirm."),
  "carro": ("🚗 Get a rental car quote", "Compare car rental prices without leaving the guide. You complete the booking on the provider's site, at no extra cost to you."),
  "esim": ("📱 Get your eSIM now", "Pick your data plan for the Dominican Republic and land with internet already working. You complete payment on the provider's site."),
 },
 "fr": {
  "vuelos": ("✈️ Cherchez votre vol ici même", "Comparez compagnies et prix sans quitter la page. Une fois le vol choisi, vous finalisez l'achat sur le site de la compagnie ou de l'agence, sans frais supplémentaires."),
  "traslados": ("🚐 Réservez votre transfert depuis l'aéroport", "Indiquez l'aéroport et votre hôtel et voyez le prix tout de suite. Le paiement se termine sur le site du prestataire."),
  "carro": ("🚗 Obtenez un devis de location de voiture", "Comparez les prix sans quitter le guide. La réservation se finalise sur le site du prestataire, sans frais supplémentaires."),
  "esim": ("📱 Achetez votre eSIM", "Choisissez votre forfait data pour la République dominicaine. Le paiement se termine sur le site du prestataire."),
 },
}

# archivo -> tipos de widget
PLAN = {
 "": {  # espanol (raiz)
  "guia-vuelos-nyc-rd.html": ["vuelos"], "guia-vuelos-miami-rd.html": ["vuelos"],
  "guia-vuelos-bogota-punta-cana.html": ["vuelos"],
  "guia-itinerario-republica-dominicana.html": ["vuelos"], "guia-itinerario-5-dias-republica-dominicana.html": ["vuelos"],
  "guia-itinerario-7-dias-republica-dominicana.html": ["vuelos"],
  "guia-costo-viaje-familia-rd.html": ["vuelos"], "guia-costo-viaje-punta-cana-colombia.html": ["vuelos"],
  "guia-punta-cana.html": ["vuelos", "traslados"], "guia-bayahibe.html": ["traslados"], "guia-la-romana.html": ["traslados"],
  "guia-boca-chica.html": ["traslados"], "guia-las-terrenas.html": ["traslados"], "guia-puerto-plata.html": ["traslados"],
  "guia-mejores-hoteles-baratos-punta-cana.html": ["traslados"],
  "guia-alquiler-carro-punta-cana.html": ["carro"], "guia-jarabacoa.html": ["carro"], "guia-constanza.html": ["carro"],
  "guia-barahona.html": ["carro"],
  "guia-esim-republica-dominicana.html": ["esim"], "guia-que-llevar-maleta-rd.html": ["esim"],
  "guia-requisitos-viaje-rd-2026.html": ["esim"],
 },
 "en": {
  "guide-flights-nyc-dr.html": ["vuelos"], "guide-flights-miami-dr.html": ["vuelos"],
  "guide-itinerary-5-days.html": ["vuelos"], "guide-itinerary-7-days.html": ["vuelos"], "guide-itinerary-10-days.html": ["vuelos"],
  "guide-family-budget-dr.html": ["vuelos"], "guide-holidays-from-uk.html": ["vuelos"],
  "guide-march-break-family-resorts.html": ["vuelos"],
  "guide-punta-cana.html": ["vuelos", "traslados"], "guide-bayahibe.html": ["traslados"], "guide-la-romana.html": ["traslados"],
  "guide-boca-chica.html": ["traslados"], "guide-las-terrenas.html": ["traslados"], "guide-puerto-plata.html": ["traslados"],
  "guide-cheap-hotels-punta-cana.html": ["traslados"],
  "guide-renting-a-car-punta-cana.html": ["carro"], "guide-jarabacoa.html": ["carro"], "guide-constanza.html": ["carro"],
  "guide-barahona.html": ["carro"],
  "guide-esim-dominican-republic.html": ["esim"], "guide-packing-list-dr.html": ["esim"],
  "guide-entry-requirements-2026.html": ["esim"],
 },
 "fr": {
  "guide-itineraire-7-jours.html": ["vuelos"], "guide-punta-cana.html": ["vuelos", "traslados"],
  "guide-boca-chica.html": ["traslados"], "guide-las-terrenas.html": ["traslados"], "guide-constanza.html": ["carro"],
 },
}

ANCHORS = ['<div class="cta-box">', '<div class="trust-box">']
HOSTS = ("https://tpemb.com https://*.tpemb.com https://tp.media https://*.tp.media https://*.travelpayouts.com "
         "https://*.aviasales.com https://*.aviasales.es https://*.aviasales.fr https://*.kiwitaxi.com https://*.airalo.com https://*.getrentacar.com https://*.tpo.li")

def block(kind, lang, stem):
    h, p = TEXT[lang][kind]
    s = src(kind, lang, f"qt-{kind}-{stem}")
    return (f'<!-- tp-widget:{kind} -->\n'
            f'  <div class="tp-widget" style="background:#f8f9fa;border-radius:14px;padding:20px;margin:28px 0">\n'
            f'    <h3 style="margin:0 0 6px">{h}</h3>\n'
            f'    <p style="margin:0 0 14px;font-size:0.9rem;color:#555">{p}</p>\n'
            f'    <script async src="{s}" charset="utf-8"></script>\n'
            f'  </div>\n  ')

def patch_csp(txt):
    def add(m):
        d = m.group(0)
        for k in ("script-src", "connect-src", "frame-src"):
            if re.search(rf"{k} ", d):
                d = re.sub(rf"({k} )", rf"\1{HOSTS} ", d, count=1)
            else:
                d = d.rstrip("'\"") if False else d
        if "frame-src" not in d:
            d = d.replace("object-src", f"frame-src {HOSTS}; object-src", 1)
        return d
    return re.sub(r'Content-Security-Policy" content="[^"]*"', add, txt)

changed, skipped = [], []
for sub, files in PLAN.items():
    lang = sub or "es"
    for fn, kinds in files.items():
        path = os.path.join(ROOT, sub, fn)
        if not os.path.exists(path):
            skipped.append((path, "no existe")); continue
        t = open(path, encoding="utf-8", newline="").read()
        anchor = next((a for a in ANCHORS if a in t), None)
        if not anchor:
            skipped.append((path, "sin ancla")); continue
        ins = ""
        for k in kinds:
            if f"tp-widget:{k}" in t: continue
            ins += block(k, lang, fn.replace(".html", ""))
        if not ins:
            skipped.append((path, "ya tiene")); continue
        nl = "\r\n" if "\r\n" in t else "\n"
        t2 = t.replace(anchor, (ins.replace("\n", nl)) + anchor, 1)
        if "Content-Security-Policy" in t2 and "https://*.tpemb.com" not in t2.split("tp-widget")[0]:
            t2 = patch_csp(t2)
        changed.append(path)
        if APPLY:
            open(path, "w", encoding="utf-8", newline="").write(t2)

hp = os.path.join(ROOT, "_headers")
h = open(hp, encoding="utf-8", newline="").read()
if "tpemb.com" not in h:
    h2 = patch_csp(h.replace("Content-Security-Policy: ", 'Content-Security-Policy" content="', 1)
                    .replace("\n\n/js", '"\n\n/js', 1).replace("\r\n\r\n/js", '"\r\n\r\n/js', 1))
    h2 = h2.replace('Content-Security-Policy" content="', "Content-Security-Policy: ", 1).replace('"\n\n/js', "\n\n/js", 1)
    if APPLY:
        open(hp, "w", encoding="utf-8", newline="").write(h2)

print("modificados:", len(changed)); [print("  ", c) for c in changed]
print("omitidos:"); [print("  ", s) for s in skipped]
