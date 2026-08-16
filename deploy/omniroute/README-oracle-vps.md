# Integrar OmniRoute en Quisqueya Travel (gratis, Oracle Cloud)

OmniRoute es un servidor que corre 24/7 — no cabe en Cloudflare Pages Functions
(que es serverless). Por eso vive en un VPS aparte, y `functions/api/chat.js`
le habla por HTTPS como si fuera "otro Gemini". Si OmniRoute falla, el código
cae de vuelta a Gemini directo automáticamente.

Esta guía usa **Oracle Cloud Always Free** — VPS gratis para siempre (no es
prueba de 30 días), 2 OCPU / 12GB RAM, corre 24/7 sin depender de tu PC.

⚠️ Oracle pide tarjeta solo para verificar identidad — **no cobra nada**
mientras uses recursos marcados "Always Free". No selecciones ningún recurso
que diga "pay as you go" y no tendrás cargos.

## 1. Crear la cuenta y el servidor gratis

1. Ve a https://www.oracle.com/cloud/free/ → "Start for free".
2. Regístrate (correo, teléfono, tarjeta para verificación).
3. Una vez dentro, ve a **Compute → Instances → Create Instance**.
4. **Image**: cambia a "Canonical Ubuntu" **24.04**.
5. **Shape**: clic en "Change shape" → pestaña **Ampere** → `VM.Standard.A1.Flex`
   → pon **2 OCPU / 12 GB RAM** (el máximo del plan Always Free).
6. **SSH keys**: deja que Oracle genere el par de llaves y descarga la privada
   (`.key`), o pega tu propia llave pública si ya tienes una.
7. Deja la red por defecto (se te asigna una IP pública automáticamente) y
   dale **Create**.
8. Anota la IP pública del servidor.

## 2. Abrir los puertos 80 y 443 (paso que Oracle no hace solo)

Oracle bloquea el tráfico entrante por dos capas — hay que abrir ambas:

**A) Security List (en la consola web):**
Networking → Virtual Cloud Networks → tu VCN → Security Lists → Default
Security List → Add Ingress Rules → agrega dos reglas:
- Source `0.0.0.0/0`, protocolo TCP, puerto destino `80`
- Source `0.0.0.0/0`, protocolo TCP, puerto destino `443`

**B) Firewall del propio Ubuntu (por SSH, una vez conectado — ver paso 3):**
```bash
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
sudo netfilter-persistent save
```

## 3. Apuntar un subdominio al VPS

En Cloudflare (donde administras `quisqueyatravel.org`):

1. DNS → Add record.
2. Tipo `A`, nombre `ai`, contenido = IP del VPS, proxy **desactivado** (nube gris,
   no naranja) — Caddy necesita hablar directo con el VPS para el certificado HTTPS.
3. Resultado: `ai.quisqueyatravel.org` apunta a tu VPS.

## 4. Instalar Docker y desplegar OmniRoute

Conéctate por SSH (usuario `ubuntu`, no `root`, en las imágenes de Oracle):

```bash
ssh -i tu-llave.key ubuntu@TU_IP_DEL_VPS
```

Instala Docker:

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```

Cierra sesión y vuelve a entrar (para que el grupo `docker` tome efecto), luego:

```bash
mkdir -p ~/omniroute && cd ~/omniroute
nano docker-compose.yml   # pega el contenido de deploy/omniroute/docker-compose.yml
nano Caddyfile            # pega el contenido de deploy/omniroute/Caddyfile
```

Levanta todo (Docker detecta automáticamente que el servidor es ARM y baja la
imagen correcta — OmniRoute publica multi-arch):

```bash
docker compose up -d
```

Verifica (puede tardar ~30s en emitir el certificado HTTPS la primera vez):

```bash
curl https://ai.quisqueyatravel.org/v1/models
```

Si responde JSON (aunque sea una lista vacía), está vivo.

## 5. Conectar proveedores gratis y generar tu API key

1. Abre `https://ai.quisqueyatravel.org` en el navegador — es el dashboard de OmniRoute.
2. Providers → conecta **Kiro AI** o **OpenCode Free** (no piden tarjeta).
3. Dashboard → Endpoints → copia la **API key** que genera OmniRoute (esta es
   la key que usará tu sitio, no la de ningún proveedor individual).

## 6. Configurar Cloudflare Pages (el sitio)

Pages → proyecto de Quisqueya Travel → Settings → Environment variables → añade:

| Variable | Valor |
|---|---|
| `OMNIROUTE_URL` | `https://ai.quisqueyatravel.org` |
| `OMNIROUTE_API_KEY` | la key del paso 5 |
| `OMNIROUTE_MODEL` | `auto` (opcional, es el default) |

Deja `GEMINI_API_KEY` como está — queda de respaldo si OmniRoute se cae.

## 7. Verificar en el sitio

Después del próximo deploy, abre el widget de chat en quisqueyatravel.org y
manda un mensaje. Si algo falla, revisa en Cloudflare Pages → Functions → Logs.

## Rollback

Si quieres volver a Gemini directo sin tocar código: borra o vacía la variable
`OMNIROUTE_URL` en Cloudflare Pages y vuelve a desplegar — `chat.js` detecta que
no está configurado y usa Gemini automáticamente.
