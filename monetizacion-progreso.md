# Progreso — Plan de Desarrollo y Monetización

Registro de cada corrida de la skill `quisqueya-travel-monetizacion`. Fuente de verdad para no repetir diagnóstico.

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
