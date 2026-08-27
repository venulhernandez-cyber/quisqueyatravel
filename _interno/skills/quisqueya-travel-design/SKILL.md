---
name: quisqueya-travel-design
description: >-
  Revisa y mejora diseño, accesibilidad, copy UX, specs de desarrollo, design
  system, research de usuarios y rediseños CRO de quisqueyatravel.org.
  Actívala SIEMPRE con: "revisa el diseño de esta guía", "cómo se ve esta
  página", "audita la accesibilidad", "está bien para móvil", "qué texto le
  pongo a este botón", "dame la spec para agregar tal sección", "las
  tarjetas de las guías son consistentes", "qué dice la gente en los
  comentarios", "el sitio se ve amatero/amateur", "quiero que compita con
  Booking/Expedia/Kayak", "aumenta las conversiones", "hero más impactante",
  "sellos de confianza", "sticky CTA", "revampea/rediseña el sitio", o
  cualquier revisión de calidad/UX/conversión del sitio. También al crear
  una página nueva, antes de escribir el HTML. NO usar para redes sociales
  (viral-video-el-quisqueyano, semana-quisqueyano) ni seguridad del sitio
  (quisqueya-travel-seguridad).
---

# Quisqueya Travel — Diseño y UX

Skill de diseño para **quisqueyatravel.org**, el sitio afiliado de viajes a
República Dominicana de Venul (El Quisqueyano en NYC). Cubre siete cosas que
normalmente estarían repartidas en un plugin de diseño de equipo (crítica,
accesibilidad, UX copy, handoff, design system, research, rediseño CRO) pero
adaptadas a cómo realmente funciona este proyecto: **una sola persona, sin
Figma, sin gestor de proyectos, trabajando directo contra el código del
sitio.**

## El contexto que siempre aplica

- **No hay Figma.** El diseño se hace directo en HTML/CSS con Claude. Para
  revisar algo, pide la URL en vivo, el archivo, o una captura — no hay un
  archivo de diseño separado que consultar.
- **No hay gestor de proyectos.** El código vive en
  `github.com/venulhernandez-cyber/quisqueyatravel`. En vez de crear tickets,
  anota decisiones y pendientes en `config.md`, `registro-temas.md` o la
  bitácora de la skill `quisqueya-travel-memoria`.
- **Feedback real viene de Facebook/Instagram (página "El Quisqueyano en
  NYC", @venulh) y WhatsApp** (el botón flotante del sitio) — no de una
  herramienta de soporte. Si Venul menciona un comentario o mensaje, trátalo
  como dato real de usuario.
- **Analítica: Google Analytics**, ya instalado en el sitio. Si Venul
  comparte datos de tráfico, úsalos para confirmar o descartar hallazgos
  cualitativos.
- **Audiencia:** dominicanos de la diáspora (EE.UU., España, Italia, Puerto
  Rico) y viajeros internacionales interesados en RD. Mobile-first siempre —
  la mayoría entra desde el teléfono.
- **Voz de marca:** cercana, dominicana, directa, motivadora, sin frases
  genéricas de IA — la skill `voice-alignment` es la referencia de tono para
  cualquier copy que generes aquí.
- **Estructura repetida:** cada guía (`guia-punta-cana.html`,
  `guia-santo-domingo.html`, etc.) se crea copiando la estructura de una
  guía existente. La consistencia entre archivos importa más que en un sitio
  con componentes reutilizables de verdad.

Detecta cuál de los siete modos de abajo aplica según lo que pida Venul y ve
directo a esa sección — no hace falta correr los siete cada vez.

---

## 1. Crítica de diseño

Cuándo: "revisa esta página", "cómo se ve esto", "qué opinas de este diseño".

Evalúa contra estas dimensiones y da una recomendación priorizada (lo más
impactante primero):

- **Jerarquía visual**: ¿qué ve primero el ojo? ¿el CTA de hoteles compite
  con el hero o se pierde?
- **Consistencia**: ¿esta página usa el mismo header, footer, tarjetas y
  paleta que el resto del sitio?
- **Legibilidad en móvil**: texto sin zoom en 375px, botones de mínimo 44px
  de alto táctil.
- **Velocidad**: imágenes optimizadas, sin scripts bloqueantes — la
  audiencia puede tener conexión lenta.
- **Identidad dominicana**: colores (rojo/azul/blanco), imágenes
  representativas, tono cálido y comunitario — no corporativo.

Comparte primero lo que funciona bien, luego 2-3 recomendaciones concretas
con el porqué y el cómo.

## 2. Auditoría de accesibilidad

Cuándo: "audita accesibilidad", "está bien para lectores de pantalla",
"revisa el contraste".

Corre un chequeo WCAG 2.1 AA sobre la URL en vivo o el HTML que te den:

- Contraste de color (mínimo 4.5:1 para texto normal)
- Navegación por teclado (tab order, foco visible)
- Roles y etiquetas ARIA en botones, formularios, el widget de hoteles
- Tamaño de zonas táctiles (mínimo 44×44px)
- Texto alternativo en imágenes de destinos

Reporta hallazgos con severidad (crítico / importante / menor), el criterio
WCAG afectado, y el fix. Si encuentras algo, anótalo en la bitácora de
`quisqueya-travel-memoria` para no perder el rastro entre sesiones.

## 3. UX copy / microcopy

Cuándo: "qué texto le pongo a este botón", "revisa este mensaje", "el CTA de
hoteles no convence".

Escribe o revisa CTAs, mensajes de error, estados vacíos ("cargando hoteles
disponibles..."), y texto de onboarding. Reglas:

- Español natural, sin anglicismos innecesarios ni frases genéricas de IA.
- Corto y directo — la gente lee esto en el teléfono, a veces con datos
  limitados.
- Tono cálido y motivador, coherente con `voice-alignment`.
- Si el copy toca dinero o afiliación (Booking, Stay22, Travelpayouts),
  que sea honesto y claro — no genere expectativas falsas sobre precios o
  disponibilidad.

Da 2-3 alternativas cuando el pedido sea abierto, y explica brevemente
cuándo usar cada una.

## 4. Specs de desarrollo (handoff)

Cuándo: "dame la spec para agregar X", "cómo estructuro esta sección nueva".

Como el mismo Claude diseña e implementa, "handoff" aquí es realmente
**pensar la estructura antes de escribir el HTML**: qué secciones lleva la
página, qué breakpoints importan (es mobile-first, así que empieza por ahí),
qué estados hay que cubrir (carga de hoteles, error, sin resultados), y qué
hay que reusar de una guía existente para mantener consistencia.

Entrega la spec como una lista clara de secciones + comportamiento, lista
para convertirse directo en el HTML del archivo nuevo dentro de `sitio/`.
Si el cambio es grande o va a tardar varias sesiones, anota el plan en la
bitácora de `quisqueya-travel-memoria` en vez de crear un ticket.

## 5. Consistencia del design system

Cuándo: "las tarjetas no se ven iguales entre guías", "audita los
componentes del sitio", "documenta cómo hacemos las tarjetas de hoteles".

Como no hay un sistema de componentes real, la "consistencia" se audita
comparando el HTML/CSS repetido entre páginas: el header, el footer, las
tarjetas de destino, las tarjetas de hoteles, los botones CTA, el botón
flotante de WhatsApp. Señala cualquier archivo que se haya desviado de la
plantilla base (normalmente porque se copió de una guía vieja y no se
actualizó) y documenta el patrón correcto en `config.md` para que la próxima
guía se cree ya consistente.

## 6. Síntesis de research / feedback

Cuándo: "qué dice la gente en los comentarios", "qué feedback hemos
recibido", "sintetiza esto".

Como no hay una herramienta de feedback dedicada, el "research" real son los
comentarios de Facebook/Instagram y los mensajes de WhatsApp que Venul
comparta. Agrupa por tema, incluye citas textuales cuando las haya, separa
observación de interpretación ("3 personas preguntaron por el precio de
vuelos" es observación; "falta información de vuelos" es interpretación), y
si hay datos de Google Analytics de por medio, úsalos para confirmar qué
tan extendido es el problema antes de priorizarlo.

Cierra siempre con una lista corta y accionable: qué cambiar primero.

## 7. Revamp CRO agresivo (rediseño estructural)

Cuándo: "el sitio se ve amateur", "quiero que compita con Booking/Expedia/
Kayak", "aumenta las conversiones", "hazme un hero más impactante",
"necesito sellos de confianza", "el sitio necesita más urgencia", "quiero
rediseñar el home/el sistema de diseño completo", "sticky CTA", "carrusel de
destinos interactivo".

Diferencia con el modo 1: la Crítica de diseño revisa una página puntual con
lo que ya existe. Este modo es un rediseño estructural — de una sección
clave (home, página de guía, flujo de reserva) o del sitio completo —
pensado para maximizar conversión, no solo pulir lo que hay.

Actúa como un diseñador senior de UI/UX y experto en CRO evaluando
quisqueyatravel.org contra los líderes del nicho (Booking, Expedia, Kayak,
Airbnb), pero sin perder el contexto real del proyecto: sitio HTML/CSS
estático mantenido por una sola persona, sin framework de componentes salvo
que Venul pida Tailwind/React explícitamente, con afiliación a
Travelpayouts/Booking/Stay22, y audiencia dominicana que entra sobre todo
desde el teléfono, a veces con conexión lenta.

Trabaja los cuatro pilares en orden de impacto en conversión:

- **Confianza y autoridad**: elimina cualquier detalle que se vea amateur —
  tipografía limpia y consistente, spacing profesional, sellos de
  seguridad, políticas de cancelación visibles, reseñas verificadas cerca
  de cada botón de reserva. Esto pesa más en un sitio de afiliados que en
  uno con inventario propio, porque el usuario está a punto de salir hacia
  Booking y necesita sentir que el salto es seguro.
- **Dinamismo moderno**: hero de ancho completo con imagen o video
  cinematográfico de RD, widget de búsqueda superpuesto con alto contraste
  (destino, fechas, viajeros), micro-interacciones sutiles en tarjetas y
  botones, carrusel de destinos interactivo.
- **Conversión radical**: el camino de descubrimiento a reserva con la
  menor fricción posible — CTA fijo (sticky) que sigue al usuario,
  propuesta de valor clara en cada sección, e indicadores de urgencia
  *solo si son honestos* (ver nota abajo).
- **Mobile-first y velocidad**: diseña primero para ~375px con CSS
  grid/flexbox liviano y expande a desktop después. Evita librerías
  pesadas si CSS/JS vanilla resuelve lo mismo — la audiencia no siempre
  tiene buena conexión.

**Sobre la urgencia/escasez — nunca inventes un contador o disponibilidad
falsa.** Venul no tiene inventario propio: un "3 personas viendo este hotel
ahora" sin dato real detrás es una promesa que Booking/Travelpayouts no
puede sostener y rompe justo la confianza que el primer pilar busca
construir. Si no hay un dato real (feed de disponibilidad, fechas límite de
una promo), usa urgencia basada en temporada real ("la temporada alta en
Punta Cana empieza en diciembre — resérvalo con tiempo") en vez de
contadores inventados.

Entrega la respuesta en este formato:

1. **Diagnóstico UX/UI**: qué cambia y por qué, comparado con el estándar
   de Booking/Expedia/Kayak — directo, sin relleno.
2. **Arquitectura de layout y componentes**: estructura sección por sección
   (hero → búsqueda → destinos destacados → prueba social → CTA final),
   con el comportamiento de cada una pensado mobile-first.
3. **Código listo para producción**: HTML/CSS vanilla coherente con el
   resto del sitio — o Tailwind/React solo si Venul lo pide explícitamente
   para esa pieza — que se pueda pegar directo en un archivo de `sitio/`
   sin dependencias nuevas que instalar.

Si el revamp abarca más de una sesión, anota el plan y el progreso en la
bitácora de `quisqueya-travel-memoria` para retomarlo después.

---

## Cómo reportar cualquier hallazgo

Sin importar el modo, termina con:

1. Qué está bien (para no perder de vista lo que funciona).
2. Los 2-3 cambios de mayor impacto, en orden de prioridad, con el porqué.
3. Si algo queda pendiente de una sesión a otra, anótalo en `config.md` o en
   la bitácora de `quisqueya-travel-memoria` — no hay otro lugar donde vaya
   a quedar registrado.
