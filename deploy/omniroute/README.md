# Integrar OmniRoute en Quisqueya Travel (100% gratis, tu propia PC)

Sin VPS, sin tarjeta, sin cuenta nueva. OmniRoute corre en tu computadora
(Windows) y se conecta a internet con **Cloudflare Tunnel** (gratis, usa la
misma cuenta de Cloudflare donde ya administras el DNS de quisqueyatravel.org).

**Importante — trade-off:** el chat inteligente del sitio solo funciona
mientras tu PC esté prendida, conectada a internet, y con estos dos programas
corriendo. Si apagas la PC o se corta el internet, `functions/api/chat.js` cae
automáticamente a Gemini directo (ya lo dejamos así de fábrica) — el sitio
nunca se rompe, solo deja de usar OmniRoute mientras tu PC esté apagada.

## 1. Instalar Node.js (si no lo tienes)

Abre PowerShell y escribe:

```powershell
node -v
```

Si da error "no se reconoce el comando", instala Node.js LTS desde
https://nodejs.org (el instalador de Windows, dale "Siguiente" a todo) y
vuelve a abrir PowerShell.

## 2. Instalar y arrancar OmniRoute

```powershell
npm install -g omniroute
omniroute
```

Deja esa ventana de PowerShell abierta (es el servidor corriendo). Deberías
poder abrir `http://localhost:20128` en el navegador y ver el dashboard.

## 3. Instalar Cloudflare Tunnel (`cloudflared`)

En **otra** ventana de PowerShell:

```powershell
winget install --id Cloudflare.cloudflared
```

Si `winget` no existe en tu PC, descarga el instalador directo desde
https://github.com/cloudflare/cloudflared/releases (el archivo
`cloudflared-windows-amd64.msi`).

## 4. Conectar el túnel con tu cuenta de Cloudflare

```powershell
cloudflared tunnel login
```

Se abre el navegador — inicia sesión con la MISMA cuenta de Cloudflare donde
administras `quisqueyatravel.org` y autoriza. Esto es gratis, no pide tarjeta
(Cloudflare Tunnel está incluido en el plan gratis).

Crea el túnel y apúntalo a tu subdominio:

```powershell
cloudflared tunnel create omniroute
cloudflared tunnel route dns omniroute ai.quisqueyatravel.org
```

Crea el archivo de configuración `%USERPROFILE%\.cloudflared\config.yml` con
este contenido (reemplaza `TUNNEL_ID` por el ID que te mostró el comando
`tunnel create`, y `TU_USUARIO` por tu usuario de Windows):

```yaml
tunnel: TUNNEL_ID
credentials-file: C:\Users\TU_USUARIO\.cloudflared\TUNNEL_ID.json

ingress:
  - hostname: ai.quisqueyatravel.org
    service: http://localhost:20128
  - service: http_status:404
```

Arranca el túnel:

```powershell
cloudflared tunnel run omniroute
```

Verifica desde cualquier navegador (no tiene que ser tu PC):

```
https://ai.quisqueyatravel.org/v1/models
```

Si responde JSON, ya está expuesto correctamente.

## 5. Dejarlo corriendo solo (opcional pero recomendado)

Para no tener que abrir dos ventanas de PowerShell cada vez, instala los dos
como servicios de Windows:

```powershell
cloudflared service install
```

Esto deja el túnel arrancando solo con Windows. Para que `omniroute` también
arranque solo, la forma más simple es agregar un acceso directo al comando
`omniroute` en la carpeta de inicio de Windows (`shell:startup`), o usar
[NSSM](https://nssm.cc/) para registrarlo como servicio igual que el túnel.

## 6. Conectar proveedores gratis y generar tu API key

1. Abre `http://localhost:20128` (o `https://ai.quisqueyatravel.org` desde
   cualquier lado).
2. Providers → conecta **Kiro AI** o **OpenCode Free** (no piden tarjeta).
3. Dashboard → Endpoints → copia la **API key** que genera OmniRoute.

## 7. Configurar Cloudflare Pages (el sitio)

Pages → proyecto de Quisqueya Travel → Settings → Environment variables → añade:

| Variable | Valor |
|---|---|
| `OMNIROUTE_URL` | `https://ai.quisqueyatravel.org` |
| `OMNIROUTE_API_KEY` | la key del paso 6 |
| `OMNIROUTE_MODEL` | `auto` (opcional, es el default) |

Deja `GEMINI_API_KEY` como está — es el respaldo automático si tu PC está
apagada o el túnel se cae.

## 8. Verificar en el sitio

Con `omniroute` y `cloudflared tunnel run omniroute` corriendo, abre el widget
de chat en quisqueyatravel.org y manda un mensaje. Si algo falla, revisa en
Cloudflare Pages → Functions → Logs.

## Rollback

Si quieres volver a Gemini directo sin tocar código: borra o vacía la variable
`OMNIROUTE_URL` en Cloudflare Pages y vuelve a desplegar.

---

¿Más adelante quieres que esto corra 24/7 sin depender de tu PC? La carpeta
`README-oracle-vps.md` tiene la misma integración pero en un servidor gratis
en la nube (Oracle Cloud Always Free) — requiere dar una tarjeta solo para
verificación de identidad, sin cobros mientras uses el plan gratis.
