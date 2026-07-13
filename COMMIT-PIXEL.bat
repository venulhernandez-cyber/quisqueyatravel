@echo off
echo Subiendo Meta Pixel a GitHub...
SET PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\Git\bin;C:\Program Files (x86)\Git\cmd
cd /d C:\Users\venul\OneDrive\Desktop\Quisqueya
git add index.html guia-samana.html guia-costo-viaje-familia-rd.html guia-requisitos-viaje-rd-2026.html guia-barahona.html guia-santo-domingo.html guia-jarabacoa.html guia-santiago.html guia-puerto-plata.html guia-punta-cana.html guia-vuelos-nyc-rd.html guia-la-romana.html guia-itinerario-republica-dominicana.html bio-link-el-quisqueyano.html "en/index.html" "en/guide-santo-domingo.html" "en/guide-punta-cana.html" "en/guide-family-budget-dr.html" "en/guide-dominican-republic.html" "en/guide-entry-requirements-2026.html" "en/guide-flights-nyc-dr.html" "fr/index.html" "fr/guide-punta-cana.html" "fr/guide-republique-dominicaine.html"
git commit -m "Instalar Meta Pixel (2054264274867364) en todas las paginas ES/EN/FR"
git push origin main
echo.
echo Listo! Cloudflare Pages desplegara automaticamente en 1-2 minutos.
pause
