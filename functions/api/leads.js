// Leads capturados por el agente de ventas, persistidos en Cloudflare KV.
//
// POST — público: lo llama el widget (o el simulador de chat del panel admin)
//        cada vez que extrae datos de contacto de una conversación. Hace
//        upsert por email/teléfono/nombre, igual que la lógica original.
// GET  — protegido por functions/_middleware.js (solo el admin autenticado
//        llega aquí): devuelve la lista completa para el panel.

import { kvGet, kvPut } from '../_lib/kv.js';

const MAX_LEADS = 500;

export async function onRequestGet(context) {
  const raw = await kvGet(context.env, 'leads');
  const leads = raw ? safeParse(raw, []) : [];
  return json(leads);
}

export async function onRequestPost(context) {
  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: 'JSON inválido' }, 400);
  }

  const nombre = String(body.nombre || '').slice(0, 200);
  const email = String(body.email || '').slice(0, 200);
  const telefono = String(body.telefono || '').slice(0, 60);
  const destino = String(body.destino || '').slice(0, 200);
  const detalles = String(body.detalles || '').slice(0, 500);
  const interes = ['alto', 'medio', 'bajo'].includes(body.interes) ? body.interes : 'bajo';

  if (!nombre && !email && !telefono && !destino) {
    // Nada útil que guardar — no es un error, simplemente no se capturó nada aún.
    return json({ ok: true, saved: false });
  }

  const raw = await kvGet(context.env, 'leads');
  const leads = raw ? safeParse(raw, []) : [];

  let idx = -1;
  if (email) idx = leads.findIndex((l) => l.email === email);
  else if (telefono) idx = leads.findIndex((l) => l.telefono === telefono);
  else if (nombre) idx = leads.findIndex((l) => l.nombre === nombre && !l.email && !l.telefono);

  if (idx !== -1) {
    const lead = leads[idx];
    if (nombre) lead.nombre = nombre;
    if (email) lead.email = email;
    if (telefono) lead.telefono = telefono;
    if (destino) lead.destino = destino;
    if (detalles) lead.detalles = detalles;
    if (interes) lead.interes = interes;
    lead.timestamp = Date.now();
    lead.isNew = true;
  } else {
    leads.unshift({
      id: 'lead_' + Math.random().toString(36).slice(2, 11),
      nombre: nombre || 'Prospecto Anónimo',
      email,
      telefono,
      destino: destino || 'Consultando',
      detalles: detalles || 'Interés general',
      interes,
      timestamp: Date.now(),
      isNew: true,
    });
  }

  const trimmed = leads.slice(0, MAX_LEADS);

  try {
    await kvPut(context.env, 'leads', JSON.stringify(trimmed));
  } catch (e) {
    return json({ error: e.message }, 503);
  }

  return json({ ok: true, saved: true });
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
