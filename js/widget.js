(function() {
    // 1. Inyectar estilos CSS específicos para el Widget Flotante
    const styles = `
        #qt-widget-container {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 999999;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        #qt-widget-bubble {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: none;
            outline: none;
        }

        #qt-widget-bubble:hover {
            transform: scale(1.08) rotate(5deg);
            box-shadow: 0 6px 24px rgba(139, 92, 246, 0.5);
        }

        #qt-widget-bubble svg {
            width: 28px;
            height: 28px;
            fill: none;
            stroke: white;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        #qt-widget-window {
            width: 360px;
            height: min(520px, calc(100vh - 120px));
            max-height: calc(100vh - 120px);
            border-radius: 20px;
            background: #0d1222;
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
            margin-bottom: 16px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            opacity: 0;
            transform: translateY(20px) scale(0.95);
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        #qt-widget-window.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: auto;
        }

        #qt-widget-header {
            background: linear-gradient(135deg, #0d1426, #152345);
            padding: 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-shrink: 0;
        }

        .qt-brand-wrapper {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .qt-avatar {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: linear-gradient(135deg, #06b6d4, #3b82f6);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .qt-brand-info h4 {
            margin: 0;
            font-size: 13px;
            font-weight: 700;
            color: white;
        }

        .qt-brand-info span {
            font-size: 10px;
            color: #94a3b8;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .qt-online-dot {
            width: 6px;
            height: 6px;
            background: #10b981;
            border-radius: 50%;
            display: inline-block;
            box-shadow: 0 0 6px #10b981;
        }

        .qt-close-btn {
            background: none;
            border: none;
            color: #64748b;
            cursor: pointer;
            font-size: 20px;
            transition: color 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
        }

        .qt-close-btn:hover {
            color: white;
        }

        #qt-chat-messages {
            flex-grow: 1;
            padding: 16px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 12px;
            background: #0d1222;
        }

        .qt-msg {
            max-width: 85%;
            padding: 10px 14px;
            font-size: 12.5px;
            line-height: 1.5;
            border-radius: 14px;
            animation: qtPop 0.25s ease-out;
        }

        @keyframes qtPop {
            from { opacity: 0; transform: scale(0.95) translateY(5px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .qt-msg-agent {
            align-self: flex-start;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: #f8fafc;
            border-top-left-radius: 4px;
        }

        .qt-msg-user {
            align-self: flex-end;
            background: #6366f1;
            color: white;
            border-top-right-radius: 4px;
        }

        /* TYPING INDICATOR */
        .qt-typing-container {
            align-self: flex-start;
            display: flex;
            align-items: center;
            gap: 8px;
            margin-left: 4px;
        }

        .qt-typing-bubble {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            padding: 10px 14px;
            border-radius: 14px;
            border-top-left-radius: 4px;
            display: flex;
            gap: 4px;
        }

        .qt-typing-bubble .qt-dot {
            width: 5px;
            height: 5px;
            background: #94a3b8;
            border-radius: 50%;
            animation: qtTyping 1.4s infinite ease-in-out both;
        }

        .qt-typing-bubble .qt-dot:nth-child(1) { animation-delay: -0.32s; }
        .qt-typing-bubble .qt-dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes qtTyping {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
        }

        #qt-input-area {
            padding: 12px;
            background: #0d1426;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            gap: 8px;
            flex-shrink: 0;
        }

        #qt-input-area input {
            flex-grow: 1;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            color: white;
            padding: 8px 14px;
            font-size: 12px;
            outline: none;
            transition: all 0.2s;
        }

        #qt-input-area input:focus {
            border-color: #3b82f6;
            background: rgba(255, 255, 255, 0.05);
        }

        #qt-send-btn {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            border: none;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s;
        }

        #qt-send-btn:hover {
            transform: scale(1.05);
        }

        #qt-send-btn svg {
            width: 14px;
            height: 14px;
            fill: none;
            stroke: white;
            stroke-width: 2;
        }

        .qt-hidden {
            display: none !important;
        }
    `;

    const styleEl = document.createElement('style');
    styleEl.innerHTML = styles;
    document.head.appendChild(styleEl);

    // 2. Cargar la configuración del agente (persona + base de conocimiento)
    // desde el servidor (Cloudflare KV vía /api/config), no de localStorage —
    // así llega igual a cualquier visitante, no solo al navegador donde se
    // configuró desde el panel de administración.
    //
    // Antes de mostrar la burbuja de chat, esperamos esta respuesta y
    // revisamos "ready" (true solo si GEMINI_API_KEY está configurada en
    // Cloudflare). Así, mientras Venul termina de configurar las variables de
    // entorno, ningún visitante ve un chat que responde "tengo dificultades
    // técnicas" — el widget simplemente no aparece todavía.
    let config = { agentPersona: '', agentGoal: 'capture_lead' };
    let kb = { agencyInfo: '', packages: '', faqs: '' };
    let chatHistory = [];

    initWidget();

    async function initWidget() {
        let data;
        try {
            const res = await fetch('/api/config');
            data = await res.json();
        } catch {
            return; // sin servidor disponible, no mostramos un widget roto
        }

        if (!data || !data.ready) {
            return; // agente no configurado todavía (falta GEMINI_API_KEY)
        }

        config = { agentPersona: data.agentPersona, agentGoal: data.agentGoal };
        if (data.kb) kb = data.kb;

        renderWidget();
    }

    // 3. Crear el árbol del DOM del widget
    function renderWidget() {
    const container = document.createElement('div');
    container.id = 'qt-widget-container';
    container.innerHTML = `
        <div id="qt-widget-window">
            <div id="qt-widget-header">
                <div class="qt-brand-wrapper">
                    <div class="qt-avatar">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="white" stroke-width="2" fill="none"><path d="m12 3-1.912 5.886L4.202 9l5.886 1.912L12 16.798l1.912-5.886L19.798 9l-5.886-1.912L12 3Z"/></svg>
                    </div>
                    <div class="qt-brand-info">
                        <h4>Asistente Quisqueya</h4>
                        <span><span class="qt-online-dot"></span> En línea</span>
                    </div>
                </div>
                <button class="qt-close-btn" id="qt-close-btn">&times;</button>
            </div>

            <div id="qt-chat-messages">
                <div class="qt-msg qt-msg-agent">
                    ¡Hola! 👋 Bienvenido a Quisqueya Travel. ¿A qué parte de República Dominicana te gustaría viajar? Estoy aquí para ayudarte con vuelos, hoteles y excursiones.
                </div>

                <div class="qt-typing-container qt-hidden" id="qt-widget-typing">
                    <div class="qt-typing-bubble">
                        <div class="qt-dot"></div>
                        <div class="qt-dot"></div>
                        <div class="qt-dot"></div>
                    </div>
                </div>
            </div>

            <div id="qt-input-area">
                <input type="text" id="qt-widget-input" placeholder="Escribe tu mensaje..." autocomplete="off">
                <button id="qt-widget-send">
                    <svg viewBox="0 0 24 24" stroke="currentColor"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
            </div>
        </div>

        <button id="qt-widget-bubble">
            <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </button>
    `;

    document.body.appendChild(container);

    // 4. Elementos del DOM
    const bubble = document.getElementById('qt-widget-bubble');
    const windowEl = document.getElementById('qt-widget-window');
    const closeBtn = document.getElementById('qt-close-btn');
    const inputEl = document.getElementById('qt-widget-input');
    const sendBtn = document.getElementById('qt-widget-send');
    const messagesEl = document.getElementById('qt-chat-messages');
    const typingEl = document.getElementById('qt-widget-typing');

    // Toggle ventana del chat
    bubble.addEventListener('click', () => {
        windowEl.classList.toggle('visible');
    });

    closeBtn.addEventListener('click', () => {
        windowEl.classList.remove('visible');
    });

    // Enviar Mensajes
    let fallbackToWhatsApp = false;

    async function sendMessage() {
        const text = inputEl.value.trim();
        if (!text) return;

        inputEl.value = '';

        // Añadir mensaje de usuario al DOM e historial
        appendMessage(text, 'user');
        chatHistory.push({ role: 'user', text: text });

        // Mostrar indicador de escritura
        showTyping(true);

        // Llamar a Gemini API
        fallbackToWhatsApp = false;
        const responseText = await getGeminiResponse();

        showTyping(false);
        appendMessage(responseText, 'agent');
        chatHistory.push({ role: 'model', text: responseText });

        // FIX 2026-09-02: si el server pidió fallback a WhatsApp, mostramos un
        // botón real en vez de dejar el mensaje de texto como único recurso.
        if (fallbackToWhatsApp) appendWhatsAppButton();

        // Extracción de leads en background
        extractLeadBackground();
    }

    function appendWhatsAppButton() {
        const wrap = document.createElement('div');
        wrap.style.alignSelf = 'flex-start';
        wrap.style.margin = '2px 0 4px 4px';
        wrap.innerHTML = '<a href="/whatsapp" target="_blank" rel="noopener" ' +
            'style="display:inline-flex;align-items:center;gap:6px;background:#25D366;color:#0d1222;' +
            'font-weight:700;font-size:12.5px;padding:9px 14px;border-radius:20px;text-decoration:none;">' +
            '💬 Seguir por WhatsApp</a>';
        messagesEl.insertBefore(wrap, typingEl);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function appendMessage(text, role) {
        const msg = document.createElement('div');
        msg.className = `qt-msg ${role === 'user' ? 'qt-msg-user' : 'qt-msg-agent'}`;
        // Escapamos el texto primero (puede venir de la IA o del visitante) y
        // luego aplicamos un formato simple de negrita y salto de línea, para
        // evitar que se inyecte HTML/script en el chat.
        let formatted = escapeHtml(text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formatted = formatted.replace(/\n/g, '<br>');
        msg.innerHTML = formatted;

        // Insertar antes del indicador de typing
        messagesEl.insertBefore(msg, typingEl);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function showTyping(visible) {
        if (visible) {
            typingEl.classList.remove('qt-hidden');
            messagesEl.scrollTop = messagesEl.scrollHeight;
        } else {
            typingEl.classList.add('qt-hidden');
        }
    }

    async function getGeminiResponse() {
        // La API key de Gemini vive en el servidor (Cloudflare Pages Function
        // /api/chat), nunca en este archivo ni en el navegador del visitante.
        const systemInstruction = `${config.agentPersona || 'Eres un agente de ventas de Quisqueya Travel.'}

Base de conocimientos:
${kb.agencyInfo || ''}
${kb.packages || ''}
${kb.faqs || ''}`;

        const formattedContents = chatHistory.map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
        }));

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: formattedContents,
                    systemInstruction,
                    generationConfig: { temperature: 0.7 }
                })
            });

            const data = await res.json();
            if (!res.ok || !data.text) {
                const err = new Error(data.error || ("HTTP " + res.status));
                err.fallback = data.fallback;
                throw err;
            }
            return data.text;
        } catch (e) {
            console.error("Widget API Error:", e);
            // FIX 2026-09-02: antes esto era un callejon sin salida (el chat
            // pedia "reintenta en un momento" y ahi se quedaba el visitante).
            // Si el servidor marco fallback:'whatsapp' (Gemini sigue fallando
            // tras reintentar), mostramos un boton directo a /whatsapp — el
            // numero real nunca se expone aqui, la ruta ya lo maneja server-side.
            fallbackToWhatsApp = e.fallback === 'whatsapp';
            return "¡Uy, se me trabó el chat justo ahora! 😅 Para no hacerte esperar, escríbeme directo por WhatsApp y seguimos la conversación ahí mismo.";
        }
    }

    // Extractor de Leads en segundo plano (para actualizar localStorage y que el Panel lo capte en tiempo real)
    async function extractLeadBackground() {
        if (chatHistory.length < 2) return;

        const promptText = `Analiza la conversación y extrae la información en un JSON plano con los campos estrictos:
- "nombre" (si lo menciona, o vacío)
- "email" (si lo proporciona, o vacío)
- "telefono" (si lo proporciona, o vacío)
- "destino" (destino del viaje, o vacío)
- "detalles" (fecha, pax, o cotización)
- "interes" (nivel: "alto", "medio", "bajo")

Responde ÚNICAMENTE con el objeto JSON válido.
CONVERSACIÓN:
${chatHistory.map(m => `${m.role === 'user' ? 'Cliente' : 'Asistente'}: ${m.text}`).join('\n')}`;

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ role: 'user', parts: [{ text: promptText }] }],
                    generationConfig: { temperature: 0.1, responseMimeType: "application/json" }
                })
            });

            if (!res.ok) return;
            const data = await res.json();
            if (!data.text) return;
            const extracted = JSON.parse(data.text.trim());

            if (extracted.nombre || extracted.email || extracted.telefono || extracted.destino) {
                // Guardar el lead en el servidor (Cloudflare KV vía /api/leads),
                // para que llegue al panel de administración sin importar el
                // navegador o dispositivo del visitante.
                await fetch('/api/leads', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(extracted)
                });
            }
        } catch (e) {
            console.warn("Widget background lead extraction failed", e);
        }
    }

    // Key listeners
    sendBtn.addEventListener('click', sendMessage);
    inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    } // fin de renderWidget()
})();
