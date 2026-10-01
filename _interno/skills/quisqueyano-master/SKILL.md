---
name: quisqueyano-master
description: >
  Skill maestra de El Quisqueyano en NYC — orquesta todos los flujos de trabajo de Venul
  en un solo punto de entrada inteligente. Activa SIEMPRE que Venul mencione cualquier
  combinación de: contenido, posts, reels, semana, plan, publicar, ads, campañas, Meta,
  seguidores, crecer, viralizar, Instagram, Facebook, dominicano, comunidad, NYC,
  orgullo, o cualquier tarea relacionada con su marca El Quisqueyano. También activa cuando
  Venul diga frases como "qué hago hoy", "ayúdame con la página", "necesito contenido",
  "qué publico", "cómo voy con mis ads", "hazme un reel", "dame la semana completa", o
  "publícalo". Esta skill evalúa el intent, selecciona la skill correcta y coordina flujos
  multi-skill automáticamente sin pedirle a Venul que elija — simplemente actúa.
---

# El Quisqueyano — Master Orchestrator (v3)

**FB:** page_id `2061443547418301` | **IG:** @venulh ig_user_id `27679245571697539`
**Publicación automática:** vía Composio (Blotato vencido desde el 24 sep 2026). Turnos fijos: 10am ET Quisqueya Travel (`trig_01YMzWjhCCLipL8z79xzNu36`), 6pm ET El Quisqueyano (`trig_01Lr9e88BTv7LBt6fouXYVbp`).

---

## 🗺️ MAPA COMPLETO DE SKILLS

### FASE 1 — INVESTIGACIÓN (antes de crear)
| Skill | Cuándo usarla |
|-------|--------------|
| `last-30-days` | "qué está trending", "dame ideas", "qué habla la gente", "no sé qué publicar" |
| `competitive-ads-extractor` | "espía la competencia", "qué ads hacen otros", "qué está validado" |

### FASE 2 y 3 — PLANIFICACIÓN Y CREACIÓN (orgánico)
| Skill | Cuándo usarla | Cuándo NO usarla |
|-------|--------------|-----------------|
| `contenido-quisqueyano` | TODO el contenido orgánico: hooks (5 variantes puntuadas), guion de reel, caption, carrusel, stories, comentarios, respuestas, DMs, plan semanal, viral, auditoría, perfil y voz de Venul | NO para anuncios pagados |
| `ad-hook-generator` | Hooks para **pauta pagada**: deseo / miedo / solución | NO para posts orgánicos |
| `hyperframes` | La **estructura visual**: frames, texto en pantalla, timing | No para el guion hablado |
| `prompt-master` | Prompts cinematográficos para imágenes/videos con IA (nunca para El Quisqueyano, que va sin IA ni stock) | No para copy de redes |

### FASE 4 — PRODUCCIÓN Y PUBLICACIÓN
| Skill | Cuándo usarla |
|-------|--------------|
| `viral-video-el-quisqueyano` | Publicar el reel de El Quisqueyano (IG + FB) vía Composio, a pedido o en automático: usa la tarea de las 6pm |
| `pexels-quisqueya-travel` / `quisqueya-travel` | El reel y el contenido de Quisqueya Travel (turno de las 10am) |

### FASE 5 — ANÁLISIS Y ESCALA
| Skill | Cuándo usarla | Diferencia clave |
|-------|--------------|-----------------|
| `meta-ads-analyzer` | Diagnóstico puro: qué apagar, qué escalar, CPM/CTR/frecuencia | Solo análisis, no crea contenido |
| `meta-ads-blotato` | Flujo completo de ads: analizar + crear + decidir si pagar | Combina análisis + producción |

### FASE 6 — AUTOMATIZACIÓN
| Skill | Cuándo usarla |
|-------|--------------|
| `workspace-connectors` | Conectar con Google Sheets, Notion, Slack, Drive |

---

## 🔄 FLUJOS DE TRABAJO ENCADENADOS

### Flujo A — "Quiero publicar algo hoy"
```
1. last-30-days               → qué está trending hoy
2. contenido-quisqueyano      → hook (modo HOOK) + guion (modo REEL) + caption
3. viral-video-el-quisqueyano → lo publica por el turno de las 6pm (Composio)
```

### Flujo B — "Quiero lanzar una campaña de ads"
```
1. last-30-days               → tema validado con audiencia real
2. competitive-ads-extractor  → formato y hook de la competencia
3. ad-hook-generator          → 3 ángulos (deseo/miedo/solución)
4. meta-ads-blotato           → monta la campaña, escala si funciona
```

### Flujo C — "¿Cómo van mis ads?"
```
1. meta-ads-analyzer          → diagnóstico rápido con semáforo
2. [si creativo falla]        → ad-hook-generator para nuevas variantes
3. [si público falla]         → competitive-ads-extractor para segmentos
4. meta-ads-blotato           → implementar cambios y ajustar presupuesto
```

### Flujo D — "Dame el contenido de la semana"
```
1. last-30-days          → 3-5 temas trending
2. contenido-quisqueyano → modo PLAN (semana + hooks por slot)
3. workspace-connectors  → guardar en Google Sheets
```

### Flujo E — "Modo automático"
```
viral-video-el-quisqueyano → confirma que los turnos de 10am y 6pm están encendidos y sanos
```

---

## 🚦 REGLAS ANTI-CONFLICTO

**Hooks orgánicos vs pagados:**
- `contenido-quisqueyano` = feed orgánico (sin presupuesto)
- `ad-hook-generator` = pauta pagada (con dinero en Meta)
- Si no está claro: preguntar "¿es para un post orgánico o para un anuncio?"

**Palabras vs imagen:**
- `contenido-quisqueyano` = las PALABRAS (hook, guion, caption) y la voz
- `hyperframes` = la IMAGEN (lo que se ve). Primero el guion, luego hyperframes

**Diagnóstico vs acción completa:**
- "¿Cómo van mis ads?" → `meta-ads-analyzer`
- "Arregla mis ads / qué hago" → `meta-ads-blotato`

**Cadencia:** solo 2 posts al día (10am QT, 6pm EQ). Nunca publicar fuera de esos turnos sin mover o cancelar el turno que toca.

---

## 🎯 DECISIÓN RÁPIDA

| Si Venul dice... | Flujo |
|-----------------|-------|
| "publicar", "post", "reel", "video hoy" | Flujo A |
| "caption", "carrusel", "stories", "comentarios", "DM", "perfil", "qué funcionó" | contenido-quisqueyano |
| "anuncio", "pauta", "campaña", "dinero en ads" | Flujo B |
| "cómo van mis ads", "cuánto gasto" | Flujo C |
| "semana", "plan", "calendario" | Flujo D |
| "auto", "solo", "sin intervención" | Flujo E |
| "qué está trending / viral / hablando la gente" | Fase 1: last-30-days |
| "competencia", "qué hacen otros" | competitive-ads-extractor |
| "conectar", "sheets", "notion", "slack" | workspace-connectors |
