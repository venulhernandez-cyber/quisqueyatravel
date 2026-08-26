# Progreso — Plan de Desarrollo y Monetización

Registro de cada corrida de la skill `quisqueya-travel-monetizacion`. Fuente de verdad para no repetir diagnóstico.

---

## 2026-08-25 — Tercera corrida

**GA4 (propiedad 541622169, 28 días: 28 jul–24 ago 2026)**
- Usuarios activos: 17.938 (baja de 26.000 el 12-ago) · Eventos totales: 56.867
- Eventos `clic_reserva_hotel`: **1** — igual que el 12-ago, CERO progreso en 13 días (meta 30 días era 15-20)
- `user_engagement`: solo 369 de 56.867 eventos (0,65%) — casi nadie interactúa de verdad
- Rebote portada: 96,3% (igual que antes) · Rebote guía Punta Cana (la que recibe el tráfico pagado del anuncio dedicado): **96,5%** con 781 vistas — la hipótesis de Fase 2 (guía específica convierte mejor que portada) no se sostiene con este tráfico
- ⚠️ **Hallazgo nuevo y grave: el tráfico del sitio se desplomó a partir del 4-5 de agosto** — el gráfico de eventos por día cae de ~8-10 mil/día a casi cero hacia el 24 de agosto. Coincide con la caída de gasto en Meta Ads (ver abajo)
- Ciudades con más usuarios activos: Ciudad de México, Santiago de los Caballeros (RD), Montreal, Santo Domingo Este, Guadalajara, Tijuana — sigue sin ser mayoritariamente diáspora dominicana en EE.UU./Canadá

**Meta Ads (cuenta act_290012163, vía MCP de Meta Ads — más confiable que el navegador)**
- Estado: ACTIVE, método de pago configurado
- 2 campañas activas, gasto combinado últimos 7 días: **$9,99** (vs. $14,95 el 12-ago, vs. $85-128/semana en julio) — el gasto sigue bajando, no subiendo
  1. **"Tráfico Punta Cana FB+IG ($5/día)"** — $6,39/7d, 128 vistas de landing page, $0,05/resultado. Targeting: ✅ solo US+CA, ✅ solo Facebook+Instagram (sin Audience Network) — esta parte de Fase 1 SÍ está bien
  2. **"Tráfico Top Emisores Turismo"** — $3,60/7d, 64 vistas de landing page, $0,06/resultado. Targeting: ❌ solo US (sin CA), ❌ Audience Network + Messenger + WhatsApp + Threads TODAVÍA activos — esta es la campaña original que el diagnóstico del 12-ago marcó como el problema, y sigue sin corregirse
- **Conversión personalizada sobre `clic_reserva_hotel`: sigue sin existir (0 conversiones personalizadas en la cuenta)** — ambas campañas siguen optimizando a "Landing page views", no al evento real. Fase 1 paso 1 sin completar
- Pixel `2054264274867364`: activo, disparó hoy (05:35 hora Pacífico) — el pixel funciona, el problema es que no hay conversión configurada sobre él

**CJ Affiliate / Booking.com**
- Sigue sin poder verificarse — sesión de navegador no autenticada en cj.com, igual que el 12-ago. Venul debe confirmar directo si el método de pago del CID 7985681 ya está completo.

**Hallazgo adicional (fuera del alcance de esta skill pero relevante):** el run de GitHub Actions `publish-social` de anoche (Turno Hoteles, 24-ago ~18:57 ET) **falló** en el paso "Publicar en Meta" — https://github.com/venulhernandez-cyber/quisqueyatravel/actions/runs/32787317996. No se pudo bajar el log completo para ver la causa exacta en esta corrida.

**Estado de fases (actualizado)**
- Fase 0: ⏳ sigue pendiente Venul (CJ payment method sin confirmar; ahora también hay que explicar por qué el gasto de Meta Ads sigue bajando en vez de estabilizarse)
- Fase 1: 🟡 parcial — 1 de 2 campañas con targeting/ubicaciones correctos, pero NINGUNA optimiza al evento real y la campaña problema original (Top Emisores Turismo) sigue sin tocarse
- Fase 2: ❌ no completada — UTMs y sección de reseñas siguen pendientes; la guía de Punta Cana con tráfico dedicado no muestra mejor comportamiento que la portada
- Fase 3, 4: sin empezar

**Próximo paso sugerido:** no tiene sentido seguir generando contenido/tráfico si el evento de conversión sigue sin configurarse — recomendado crear la conversión personalizada sobre `clic_reserva_hotel` y migrar la campaña "Top Emisores Turismo" a placements limpios (o pausarla y quedarse solo con la de Punta Cana, que ya está bien configurada) antes de la próxima corrida. Revisar también por qué falló el `publish-social` de anoche.

---

## 2026-08-12 — Primera corrida (línea base)

**GA4 (propiedad 541622169, 28 días: 14 jul–10 ago 2026)**
- Usuarios activos: 26,000 · Vistas de página: 30,000 (casi todas en portada)
- Eventos `clic_reserva_hotel`: **1** (la métrica que de verdad importa)
- Rebote portada: 96.6% · Rebote páginas de guía individuales: 20-38%
- Tiempo de interacción promedio: 0s · Sesiones con interacción/usuario: 0.04

**Meta Ads (cuenta act_290012163)**
- Estado: Activa (no UNSETTLED)
- 1 campaña activa: "Quisqueya Travel — Tráfico Top Emisores Turismo"
- Gasto últimos 7 días: $14.95 (vs. $85-128/semana en julio — bajó mucho, sin confirmar si fue decisión de Venul o del sistema)
- Optimización actual: **"Visitas a la página" (Landing Page Views)** — todavía NO está configurada la conversión personalizada sobre `clic_reserva_hotel`. Fase 1 sigue pendiente.
- Alcance 30 días: 68,455 · Resultados: 11,763 · Frecuencia: 1.23
- ⚠️ El conjunto de anuncios tiene una etiqueta "Cambios sin publicar" — alguien (Venul o una sesión anterior) dejó una edición a medias sin publicar. Revisar qué es antes de tocar la campaña.
- No se pudo confirmar el estado de ubicaciones (Audience Network on/off) ni el desglose de países sin arriesgar ediciones accidentales en la interfaz (un clic casi activó "Duplicar conjunto de anuncios" por un cambio de layout tras seleccionar la fila — cancelado a tiempo, nada se publicó ni se duplicó).

**CJ Affiliate / Booking.com**
- No se pudo verificar: la sesión del navegador no está autenticada en cj.com. Venul debe confirmar directamente si el método de pago y los datos fiscales del programa de Booking (CID 7985681) ya están completos.

**Estado de fases**
- Fase 0: ⏳ pendiente confirmación de Venul (método de pago CJ + motivo de la baja de presupuesto de Meta Ads)
- Fase 1: ❌ no completada (conversión `clic_reserva_hotel` sin configurar; ubicaciones/países sin verificar)
- Fase 2, 3, 4: sin empezar

**Próximo paso sugerido:** Venul confirma los dos puntos de Fase 0, y decide si quiere que la próxima corrida configure directamente el evento de conversión y ajuste ubicaciones/países en Meta Ads, o prefiere hacerlo él mismo.

---

## 2026-08-11 — Segunda corrida (fix de pixel + campaña nueva de tráfico)

**Fix de tracking (guia-punta-cana.html)**
- Se descubrió que el Meta Pixel nunca capturaba el evento `clic_reserva_hotel` — solo GA4 lo medía. El pixel solo disparaba "PageView".
- Se agregó un script de tracking de clic (`fbq('trackCustom','ClicReservaHotel')` + `fbq('track','Lead')`) sobre los enlaces de reserva de hotel.
- Deploy en dos pasos vía GitHub (commits `f453cb4` y `918628a`): el primer commit usaba el selector viejo `stay22.com`, pero el sitio ya había migrado sus enlaces de afiliado a `tkqlhce.com` (CJ Affiliate/Booking.com) — corregido en el segundo commit. Verificado en el archivo crudo publicado.
- Alcance: **solo guia-punta-cana.html** (por decisión de Venul). Los otros 38 HTML del sitio todavía no tienen este fix — pendiente para una sesión futura si se decide expandir.

**Campaña Meta Ads nueva**
- El plan original (objetivo Ventas/Conversiones optimizado al evento Lead) no se pudo lanzar: Meta obliga a "Campaña de ventas Advantage+" para el objetivo Ventas, que exige optimizar a un evento de conversión con volumen histórico — y el evento Lead/ClicReservaHotel recién se activó, con 0 eventos todavía.
- Se lanzó en su lugar: **"Quisqueya Travel — Tráfico Punta Cana FB+IG ($5/día)"**, objetivo Tráfico, configuración manual (sin Advantage+):
  - Presupuesto: $5.00/día
  - Países: Estados Unidos + Canadá
  - Ubicaciones: solo Facebook + Instagram (excluidos Audience Network, Messenger, WhatsApp, Threads)
  - Optimización: visitas a la página de destino
  - Anuncio: reutiliza el post orgánico "¿Planeando tu viaje a Punta Cana?" (10 ago 2026), botón "Más información" → quisqueyatravel.org/guia-punta-cana
  - **Publicada** (no borrador) el 11 ago 2026.
- Queda un borrador huérfano sin publicar ("Nuevo anuncio de Ventas") de un intento anterior — no gasta dinero, se puede descartar en cualquier momento.

**Estado de fases (actualizado)**
- Fase 1: 🟡 en progreso — pixel de conversión ya activo en 1 de 39 páginas; campaña de tráfico dirigida corriendo para generar los primeros eventos Lead reales.

**Próximo paso sugerido:** en 1-2 semanas, revisar en Events Manager si el evento Lead ya acumuló volumen (~50+); si es así, migrar esta campaña (o crear una nueva) a objetivo Ventas optimizado directo a ese evento. Si Venul quiere, expandir el fix del pixel a las otras 38 páginas del sitio.
