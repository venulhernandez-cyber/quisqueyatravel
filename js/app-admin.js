// INITIAL VALUES AND PERSISTENCE MANAGEMENT
const DEFAULT_KB = {
    agencyInfo: `Quisqueya Travel es una agencia líder en viajes al Caribe y todo el mundo, con más de 15 años de experiencia. Nos especializamos en vuelos, paquetes vacacionales todo incluido, cruceros, hoteles y excursiones de aventura.
Ofrecemos atención al cliente 24/7 y asistencia en español, inglés y francés durante todo tu viaje. 
Contacto: reservas@quisqueyatravel.org | Teléfono: +1 (809) 555-0199 | WhatsApp: +1 (829) 555-0100
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
- Cancelaciones con menos de 7 días: No reembolsable.`
};

const DEFAULT_CONFIG = {
    geminiKey: '',
    agentPersona: `Eres el Asistente de Ventas Inteligente de Quisqueya Travel, un agente experto en turismo caribeño, amable, profesional y persuasivo. 
Tu misión principal es entusiasmar al cliente con nuestros destinos turísticos y CAPTURAR su información de contacto (Nombre, Email y/o Teléfono), junto con los detalles de su viaje (destino, fechas aproximadas, cantidad de pasajeros), para que un asesor humano le envíe una cotización a la medida.

REGLAS DE COMPORTAMIENTO:
1. Saluda cordialmente y muéstrate entusiasmado por sus planes de viaje.
2. Utiliza estrictamente la Base de Conocimiento provista para responder preguntas sobre precios, paquetes, FAQs y políticas. Si no sabes algo, di que lo consultarás con un especialista.
3. Si el cliente pregunta por paquetes o cotizaciones, dale opciones atractivas basadas en la base de datos de paquetes, y pregúntale educadamente sus fechas tentativas de viaje y cantidad de pasajeros.
4. Cuando el cliente parezca interesado, pídele su nombre, correo y/o número telefónico diciendo algo como: "Para poder procesar tu solicitud y enviarte un presupuesto formal detallado, ¿me podrías compartir tu nombre, correo electrónico o teléfono?"
5. Mantén respuestas cortas, fluidas y bien organizadas con viñetas para que se lean bien en pantallas móviles.
6. Nunca inventes información. Si te preguntan algo fuera de la base de conocimientos, invítalos a dejarnos su contacto para que un agente les responda.`,
    agentGoal: 'capture_lead'
};

// Global application state
let state = {
    leads: [],
    kb: { ...DEFAULT_KB },
    config: { ...DEFAULT_CONFIG },
    chatHistory: [] // Format: {role: 'user'|'model', text: '...'}
};

// LOAD FROM SERVER (Cloudflare KV vía /api/config y /api/leads)
// Reemplaza el localStorage original: así el panel muestra los leads y la
// configuración reales, sin importar en qué navegador se guardaron.
async function loadState() {
    try {
        const [configRes, leadsRes] = await Promise.all([
            fetch('/api/config'),
            fetch('/api/leads'),
        ]);
        if (configRes.ok) {
            const data = await configRes.json();
            state.config.agentPersona = data.agentPersona || DEFAULT_CONFIG.agentPersona;
            state.config.agentGoal = data.agentGoal || DEFAULT_CONFIG.agentGoal;
            state.kb = data.kb || { ...DEFAULT_KB };
        }
        if (leadsRes.ok) {
            state.leads = await leadsRes.json();
        }
    } catch (e) {
        console.warn('No se pudo cargar el estado desde el servidor, usando valores por defecto', e);
    }

    // Sync input fields with state
    document.getElementById('kb-agency-info').value = state.kb.agencyInfo;
    document.getElementById('kb-packages').value = state.kb.packages;
    document.getElementById('kb-faqs').value = state.kb.faqs;

    document.getElementById('agent-persona').value = state.config.agentPersona;
    document.getElementById('agent-goal').value = state.config.agentGoal;

    updateApiStatusBadge();
    renderLeads();
    updateMetrics();
}

// SAVE TO SERVER WITH FEEDBACK
function saveKb() {
    state.kb.agencyInfo = document.getElementById('kb-agency-info').value;
    state.kb.packages = document.getElementById('kb-packages').value;
    state.kb.faqs = document.getElementById('kb-faqs').value;

    persistConfig('Base de conocimientos guardada con éxito');
}

// Guarda persona + goal + kb juntos en /api/config (protegido por auth de admin)
async function persistConfig(successMessage) {
    try {
        const res = await fetch('/api/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                agentPersona: state.config.agentPersona,
                agentGoal: state.config.agentGoal,
                kb: state.kb,
            }),
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        updateApiStatusBadge();
        showToast(successMessage, 'success');
    } catch (e) {
        showToast('No se pudo guardar: ' + e.message, 'info');
    }
}

function saveConfig() {
    // El campo "gemini-key" quedó deshabilitado (la key ahora vive en Cloudflare
    // como GEMINI_API_KEY), así que ya no se lee ni se guarda desde aquí.
    state.config.agentPersona = document.getElementById('agent-persona').value;
    state.config.agentGoal = document.getElementById('agent-goal').value;

    persistConfig('Configuración guardada y agente actualizado');
}

// UPDATE API STATUS BADGE
// Ya no depende de una key guardada en el navegador: hace un ping real a la
// función serverless /api/chat para confirmar que GEMINI_API_KEY está
// configurada en Cloudflare.
async function updateApiStatusBadge() {
    const badge = document.getElementById('api-status');
    const indicator = badge.querySelector('.status-indicator');
    const text = badge.querySelector('.status-text');

    indicator.className = 'status-indicator status-off';
    text.innerText = 'Verificando...';

    try {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: 'ping' }] }] })
        });
        const data = await res.json().catch(() => ({}));

        if (res.ok) {
            indicator.className = 'status-indicator status-on';
            text.innerText = 'Gemini API Conectada (servidor)';
        } else if (res.status === 503) {
            indicator.className = 'status-indicator status-off';
            text.innerText = 'Falta GEMINI_API_KEY en Cloudflare';
        } else {
            indicator.className = 'status-indicator status-off';
            text.innerText = data.error || 'Gemini API Desconectada';
        }
    } catch {
        indicator.className = 'status-indicator status-off';
        text.innerText = 'Sin conexión al servidor (/api/chat)';
    }
}

// TOAST NOTIFICATIONS
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
    
    const iconName = type === 'success' ? 'check-circle' : 'info';
    toast.innerHTML = `<i data-lucide="${iconName}"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    lucide.createIcons();

    // Auto remove
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// TAB NAVIGATION
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
}

// LEADS RENDERING AND MANAGEMENT
function renderLeads() {
    const tbody = document.getElementById('leads-tbody');
    tbody.innerHTML = '';

    if (state.leads.length === 0) {
        tbody.innerHTML = `
            <tr class="empty-state-row">
                <td colspan="5">
                    <div class="empty-state">
                        <i data-lucide="message-square-dashed"></i>
                        <p>No se han capturado leads aún. ¡Interactúa con el chat simulador para generar prospectos!</p>
                    </div>
                </td>
            </tr>
        `;
        lucide.createIcons();
        return;
    }

    // Sort leads by timestamp desc
    const sortedLeads = [...state.leads].sort((a, b) => b.timestamp - a.timestamp);

    sortedLeads.forEach(lead => {
        const tr = document.createElement('tr');
        if (lead.isNew) {
            tr.className = 'new-lead-row';
            // Quitar el resaltado "nuevo" tras un momento (solo estado visual
            // local; el servidor es la fuente de verdad de los datos del lead).
            setTimeout(() => {
                lead.isNew = false;
            }, 2000);
        }

        const dateStr = new Date(lead.timestamp).toLocaleString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit'
        });

        tr.innerHTML = `
            <td>
                <span class="lead-name">${escapeHtml(lead.nombre || 'Interesado Anónimo')}</span>
                <span class="lead-time">${dateStr}</span>
            </td>
            <td>
                <div class="lead-contact-info">
                    ${lead.email ? `<span class="contact-item"><i data-lucide="mail"></i> ${escapeHtml(lead.email)}</span>` : ''}
                    ${lead.telefono ? `<span class="contact-item"><i data-lucide="phone"></i> ${escapeHtml(lead.telefono)}</span>` : ''}
                    ${!lead.email && !lead.telefono ? '<span class="text-muted italic">Sin datos</span>' : ''}
                </div>
            </td>
            <td>
                <span class="lead-interest-badge interest-${lead.interes || 'low'}">${lead.destino || 'Consulta General'}</span>
            </td>
            <td>
                <p class="lead-details">${escapeHtml(lead.detalles || 'Consultando ofertas...')}</p>
            </td>
            <td>
                <span class="lead-status ${lead.email || lead.telefono ? 'status-qualified' : 'status-new'}">
                    ${lead.email || lead.telefono ? 'Calificado' : 'Contacto Inicial'}
                </span>
            </td>
        `;
        tbody.appendChild(tr);
    });

    lucide.createIcons();
}

// METRICS
function updateMetrics() {
    const totalLeads = state.leads.length;
    const qualifiedLeads = state.leads.filter(l => l.email || l.telefono).length;
    const packageInterest = state.leads.filter(l => l.interes === 'alto' || l.interes === 'medio').length;

    document.getElementById('metric-total').innerText = totalLeads;
    document.getElementById('metric-qualified').innerText = qualifiedLeads;
    document.getElementById('metric-packages').innerText = packageInterest;
}

// CHAT SIMULATION LOGIC
const chatMessagesContainer = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send-btn');
const typingIndicator = document.getElementById('typing-indicator');

function appendMessage(text, role) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${role === 'user' ? 'user-msg' : 'system-msg'}`;
    msgDiv.innerHTML = formatMarkdownText(text);
    chatMessagesContainer.appendChild(msgDiv);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

function showTyping(visible) {
    if (visible) {
        typingIndicator.classList.remove('hidden');
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    } else {
        typingIndicator.classList.add('hidden');
    }
}

// INTEGRATION WITH GEMINI API
// La API key vive en Cloudflare (variable de entorno GEMINI_API_KEY), nunca en
// este archivo ni en el navegador — todas las llamadas pasan por la Pages
// Function /api/chat.
async function callGemini(messages, systemInstruction) {
    const contents = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
    }));

    const payload = {
        contents: contents,
        systemInstruction,
        generationConfig: { temperature: 0.7 }
    };

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (!response.ok || !data.text) {
            throw new Error(data.error || `HTTP ${response.status}`);
        }
        return data.text;

    } catch (error) {
        console.error("Gemini API Error:", error);
        return `❌ **Error de Conexión:** No se pudo comunicar con el agente. Detalles: ${error.message}.`;
    }
}

// REAL TIME BACKGROUND LEAD EXTRACTION
async function extractLeadFromChat() {
    if (state.chatHistory.length < 2) return;

    const promptText = `Analiza la siguiente conversación entre un cliente y un asistente de ventas de viajes (Quisqueya Travel).
Extrae la información relevante en un JSON plano con los siguientes campos estrictos:
- "nombre": (nombre del cliente si lo mencionó, o vacío)
- "email": (correo electrónico del cliente si lo proporcionó, o vacío)
- "telefono": (número telefónico o WhatsApp proporcionado, o vacío)
- "destino": (destino de viaje de interés principal, o vacío)
- "detalles": (resumen corto de lo que busca: fechas, pax, tipo de viaje o cotización solicitada)
- "interes": (nivel de interés del prospecto: "alto" si dio contacto y tiene planes claros, "medio" si pregunta mucho pero no dio contacto, "bajo" si es vago)

Responde UNICAMENTE con un objeto JSON válido y legible. Sin bloques de código markdown (\`\`\`json). Sin explicaciones extras.

CONVERSACIÓN:
${state.chatHistory.map(m => `${m.role === 'user' ? 'Cliente' : 'Asistente'}: ${m.text}`).join('\n')}

JSON:`;

    const payload = {
        contents: [{
            role: 'user',
            parts: [{ text: promptText }]
        }],
        generationConfig: {
            temperature: 0.1,
            responseMimeType: "application/json"
        }
    };

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) return;

        const data = await response.json();
        if (!data.text) return;
        const extracted = JSON.parse(data.text.trim());

        if (extracted.nombre || extracted.email || extracted.telefono || extracted.destino) {
            updateLeadsDatabase(extracted);
        }
    } catch (e) {
        console.warn("Background lead extraction error:", e);
    }
}

// SYNC LEADS DATABASE AND UPDATE UI
// El upsert (¿es un lead nuevo o uno existente?) ahora lo hace /api/leads en
// el servidor, con la misma lógica que tenía este archivo antes — así el
// simulador de chat del panel y el widget público comparten una sola fuente
// de verdad en vez de cada uno llevar su propia copia en localStorage.
async function updateLeadsDatabase(newData) {
    try {
        const postRes = await fetch('/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData),
        });
        if (!postRes.ok) throw new Error('HTTP ' + postRes.status);

        const leadsRes = await fetch('/api/leads');
        if (leadsRes.ok) {
            state.leads = await leadsRes.json();
            renderLeads();
            updateMetrics();
            showToast(`Lead guardado: ${newData.nombre || 'Prospecto'}`, 'success');
        }
    } catch (e) {
        console.warn('No se pudo guardar el lead', e);
        showToast('No se pudo guardar el lead: ' + e.message, 'info');
    }
}

// HANDLE CONVERSATION RESPONSE
async function handleUserMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    chatInput.value = '';
    
    appendMessage(text, 'user');
    state.chatHistory.push({ role: 'user', text: text });
    showTyping(true);

    document.getElementById('chat-suggestions').classList.add('hidden');

    const fullSystemInstruction = `${state.config.agentPersona}

=======================================
BASE DE CONOCIMIENTO (INFORMACIÓN REAL):
--- INFORMACIÓN DE LA AGENCIA ---
${state.kb.agencyInfo}

--- PAQUETES Y OFERTAS ---
${state.kb.packages}

--- PREGUNTAS FRECUENTES (FAQS) ---
${state.kb.faqs}
=======================================`;

    const responseText = await callGemini(state.chatHistory, fullSystemInstruction);

    showTyping(false);
    appendMessage(responseText, 'model');
    state.chatHistory.push({ role: 'model', text: responseText });

    await extractLeadFromChat();
}

// EVENT LISTENERS AND HELPERS
function initChatEventListeners() {
    chatSendBtn.addEventListener('click', handleUserMessage);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleUserMessage();
    });

    document.getElementById('reset-chat-btn').addEventListener('click', () => {
        chatMessagesContainer.innerHTML = `
            <div class="message system-msg">
                Hola 👋. Soy tu asesor de Quisqueya Travel. ¿Estás buscando planificar tu próximo viaje, reservar vuelos o buscar hoteles? ¡Cuéntame qué destino tienes en mente!
            </div>
        `;
        state.chatHistory = [];
        document.getElementById('chat-suggestions').classList.remove('hidden');
        showToast('Conversación reiniciada', 'info');
    });

    const chips = document.querySelectorAll('.suggestion-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            const cleanText = chip.innerText.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, '').trim();
            chatInput.value = cleanText;
            handleUserMessage();
        });
    });
}

function initAdminEventListeners() {
    document.getElementById('save-kb-btn').addEventListener('click', saveKb);
    document.getElementById('save-config-btn').addEventListener('click', saveConfig);

    document.getElementById('toggle-key-visibility').addEventListener('click', () => {
        const input = document.getElementById('gemini-key');
        const icon = document.querySelector('#toggle-key-visibility i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.setAttribute('data-lucide', 'eye-off');
        } else {
            input.type = 'password';
            icon.setAttribute('data-lucide', 'eye');
        }
        lucide.createIcons();
    });

    document.getElementById('export-leads-btn').addEventListener('click', () => {
        if (state.leads.length === 0) {
            showToast('No hay leads para exportar', 'info');
            return;
        }

        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Nombre,Email,Telefono,Destino,Detalles,Interes,Fecha\n";

        state.leads.forEach(lead => {
            const row = [
                `"${lead.nombre.replace(/"/g, '""')}"`,
                `"${lead.email.replace(/"/g, '""')}"`,
                `"${lead.telefono.replace(/"/g, '""')}"`,
                `"${lead.destino.replace(/"/g, '""')}"`,
                `"${lead.detalles.replace(/"/g, '""')}"`,
                `"${lead.interes}"`,
                `"${new Date(lead.timestamp).toISOString()}"`
            ].join(",");
            csvContent += row + "\n";
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `leads_quisqueya_travel_${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('CSV exportado con éxito', 'success');
    });

    document.getElementById('copy-code-btn').addEventListener('click', () => {
        const snippet = document.getElementById('embed-code-snippet').innerText;
        navigator.clipboard.writeText(snippet).then(() => {
            showToast('Código copiado al portapapeles', 'success');
        });
    });
}

// HELPERS
function escapeHtml(text) {
    if (!text) return '';
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function formatMarkdownText(text) {
    if (!text) return '';
    // Escapamos el texto crudo primero (puede venir de la IA) antes de aplicar
    // el formato markdown simple, para no permitir inyección de HTML/script.
    let html = escapeHtml(text);
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/^\s*[-*]\s+(.*)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
    html = html.replace(/\n/g, '<br>');
    return html;
}

// APP INITIALIZATION
window.addEventListener('DOMContentLoaded', () => {
    loadState();
    initTabs();
    initChatEventListeners();
    initAdminEventListeners();
    lucide.createIcons();

    // Refrescar leads periódicamente desde el servidor, para ver en el panel
    // los que van llegando de visitantes reales del widget (antes esto se
    // hacía escuchando cambios en localStorage, que solo veía leads del mismo
    // navegador).
    setInterval(async () => {
        try {
            const res = await fetch('/api/leads');
            if (res.ok) {
                state.leads = await res.json();
                renderLeads();
                updateMetrics();
            }
        } catch {
            // silencioso: si falla un refresco, se reintenta en el siguiente ciclo
        }
    }, 15000);
});
