// Configuración del agente (persona + base de conocimiento), persistida en
// Cloudflare KV para que llegue igual a todos los visitantes del sitio, sin
// importar en qué navegador se configuró desde el panel de administración.
//
// GET  — público: lo consume el widget (js/widget.js) al cargar en cualquier
//        visitante.
// POST — protegido por functions/_middleware.js (solo el admin autenticado
//        llega aquí).

import { kvGet, kvPut } from '../_lib/kv.js';

const DEFAULT_KB = {
  agencyInfo: `Quisqueya Travel es una agencia líder en viajes al Caribe y todo el mundo, con más de 15 años de experiencia. Nos especializamos en vuelos, paquetes vacacionales todo incluido, cruceros, hoteles y excursiones de aventura.
Ofrecemos atención al cliente 24/7 y asistencia en español, inglés y francés durante todo tu viaje.
Contacto: reservas@quisqueyatravel.org | WhatsApp: +1 (347) 720-5769
Dirección: Av. Winston Churchill, Plaza Metropolitana, Santo Domingo, República Dominicana.`,

  packages: `1. Paquete Punta Cana Todo Incluido:
- Duración: 5 días y 4 noches en resort de 5 estrellas (Ej. Barceló Bávaro Palace o Hard Rock Hotel).
- Incluye: Todo incluido (comidas, bebidas ilimitadas, snacks), traslados privados aeropuerto-hotel-aeropuerto, e impuestos hoteleros.
- Precio especial: $499 USD por persona en ocupación doble.
- Restricción: Válido para viajar hasta el 15 de diciembre de 2026.

2. Escapada Romántica a Samaná:
- Duración: 4 días y 3 noches en Hotel Boutique frente al mar en Las Terrenas.
- Incluye: Desayunos diarios, tour a Cascada El Limón, traslados e impuestos.
- Precio especial: $350 USD por persona.

3. Tour de Aventura a Isla Saona (Full Day):
- Incluye: Transporte en catamarán de ida con barra libre y animación, regreso en lanchas rápidas, almuerzo buffet en la playa (pescado, pollo, ensaladas) y tiempo libre en la piscina natural.
- Precio especial: $75 USD por adulto, $40 USD por niño.

4. Ofertas Especiales de Vuelo:
- Madrid (MAD) <-> Santo Domingo (SDQ) desde $620 USD ida y vuelta.
- Nueva York (JFK) <-> Santo Domingo (SDQ) desde $340 USD ida y vuelta.
- Miami (MIA) <-> Punta Cana (PUJ) desde $280 USD ida y vuelta.`,

  faqs: `¿Qué documentos necesito para viajar a la República Dominicana?
La mayoría de los países solo requieren un pasaporte válido por la duración del viaje y completar el formulario electrónico de entrada/salida (E-Ticket). No se requiere visa de turismo para ciudadanos de la UE, EE. UU. o Latinoamérica.

¿Cómo se realizan las reservas y pagos?
Se requiere un depósito del 20% para reservar paquetes turísticos o alojamientos. El balance restante debe pagarse 15 días antes de la fecha de viaje. Aceptamos tarjetas de crédito/débito, PayPal, transferencias locales e internacionales.

¿Cuál es la política de cancelaciones?
- Cancelaciones con más de 15 días de anticipación: Reembolso del 100% (menos cargos administrativos de $50 USD).
- Cancelaciones entre 7 y 14 días de anticipación: Penalidad del 50% del total.
- Cancelaciones con menos de 7 días: No reembolsable.`,
};

const DEFAULT_CONFIG = {
  agentPersona: `Eres el Asistente de Ventas Inteligente de Quisqueya Travel, un agente experto en turismo caribeño, amable, profesional y persuasivo.
Tu misión principal es entusiasmar al cliente con nuestros destinos turísticos y CAPTURAR su información de contacto (Nombre, Email y/o Teléfono), junto con los detalles de su viaje (destino, fechas aproximadas, cantidad de pasajeros), para que un asesor humano le envíe una cotización a la medida.

REGLAS DE COMPORTAMIENTO:
1. Saluda cordialmente y muéstrate entusiasmado por sus planes de viaje.
2. Utiliza estrictamente la Base de Conocimiento provista para responder preguntas sobre precios, paquetes, FAQs y políticas. Si no sabes algo, di que lo consultarás con un especialista.
3. Si el cliente pregunta por paquetes o cotizaciones, dale opciones atractivas basadas en la base de datos de paquetes, y pregúntale educadamente sus fechas tentativas de viaje y cantidad de pasajeros.
4. Cuando el cliente parezca interesado, pídele su nombre, correo y/o número telefónico diciendo algo como: "Para poder procesar tu solicitud y enviarte un presupuesto formal detallado, ¿me podrías compartir tu nombre, correo electrónico o teléfono?"
5. Mantén respuestas cortas, fluidas y bien organizadas con viñetas para que se lean bien en pantallas móviles.
6. Nunca inventes información. Si te preguntan algo fuera de la base de conocimientos, invítalos a dejarnos su contacto para que un agente les responda.`,
  agentGoal: 'capture_lead',
  kb: DEFAULT_KB,
};

export async function onRequestGet(context) {
  const raw = await kvGet(context.env, 'config');
  const config = raw ? safeParse(raw, DEFAULT_CONFIG) : DEFAULT_CONFIG;
  // "ready" le dice al widget si puede mostrarse: true solo si GEMINI_API_KEY
  // está configurada en Cloudflare. Nunca se expone la key en sí, solo este
  // booleano — así ningún visitante ve un chat que no puede responder.
  return json({ ...config, ready: Boolean(context.env.GEMINI_API_KEY) });
}

export async function onRequestPost(context) {
  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: 'JSON inválido' }, 400);
  }

  const config = {
    agentPersona:
      typeof body.agentPersona === 'string' && body.agentPersona.trim()
        ? body.agentPersona.slice(0, 8000)
        : DEFAULT_CONFIG.agentPersona,
    agentGoal: typeof body.agentGoal === 'string' ? body.agentGoal.slice(0, 100) : DEFAULT_CONFIG.agentGoal,
    kb: {
      agencyInfo: String(body.kb?.agencyInfo ?? '').slice(0, 8000),
      packages: String(body.kb?.packages ?? '').slice(0, 8000),
      faqs: String(body.kb?.faqs ?? '').slice(0, 8000),
    },
  };

  try {
    await kvPut(context.env, 'config', JSON.stringify(config));
  } catch (e) {
    return json({ error: e.message }, 503);
  }

  return json({ ok: true });
}

function safeParse(raw, fallback) {
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
