@echo off
SET PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\Git\bin;C:\Program Files (x86)\Git\cmd
cd /d C:\Users\venul\OneDrive\Desktop\Quisqueya
echo Subiendo cambios a GitHub... > COMMIT-LOG.txt
git add guia-samana.html index.html guia-costo-viaje-familia-rd.html guia-requisitos-viaje-rd-2026.html guia-barahona.html guia-santo-domingo.html guia-jarabacoa.html guia-santiago.html guia-puerto-plata.html guia-punta-cana.html guia-vuelos-nyc-rd.html guia-la-romana.html "en/index.html" "en/guide-santo-domingo.html" "en/guide-punta-cana.html" "en/guide-family-budget-dr.html" "en/guide-dominican-republic.html" "en/guide-entry-requirements-2026.html" "en/guide-flights-nyc-dr.html" "fr/index.html" "fr/guide-punta-cana.html" "fr/guide-republique-dominicaine.html" bio-link-el-quisqueyano.html sitemap.xml _redirects reparacion.py >> COMMIT-LOG.txt 2>&1
git commit -m "Fix canonical/og:url a URL limpia (coincide con destino real del 301), estandarizar enlaces internos en punta-cana/la-romana/samana" >> COMMIT-LOG.txt 2>&1
git push origin main >> COMMIT-LOG.txt 2>&1
echo. >> COMMIT-LOG.txt
echo ESTADO FINAL: >> COMMIT-LOG.txt
git status >> COMMIT-LOG.txt 2>&1
echo. >> COMMIT-LOG.txt
echo Listo! Cloudflare Pages desplegara automaticamente en 1-2 minutos. >> COMMIT-LOG.txt
