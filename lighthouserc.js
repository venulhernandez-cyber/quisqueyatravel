// lighthouserc.js — Configuracion de Lighthouse CI para quisqueyatravel
// Documentacion: https://github.com/GoogleChrome/lighthouse-ci

module.exports = {
  ci: {
    // ── COLLECT: que paginas auditar ────────────────────────────────
    collect: {
      // Servidor local que levanta serve (definido en el workflow)
      startServerCommand: 'serve . -p 3000',
      startServerReadyPattern: 'Accepting connections',
      startServerReadyTimeout: 10000,
      url: [
        'http://localhost:3000/index.html',
        'http://localhost:3000/hoteles.html',
        'http://localhost:3000/vuelos.html',
        'http://localhost:3000/guia-punta-cana.html',
        'http://localhost:3000/guia-santo-domingo.html',
        'http://localhost:3000/guia-barahona.html',
        'http://localhost:3000/guia-vuelos-nyc-rd.html',
        'http://localhost:3000/guia-jarabacoa.html',
        'http://localhost:3000/guia-santiago.html',
      ],
      numberOfRuns: 1,
      settings: {
        // Simula conexion movil 4G (mas exigente, mejor para detectar problemas)
        throttlingMethod: 'simulate',
        emulatedFormFactor: 'mobile',
        // Deshabilita extensiones que podrian interferir
        disableStorageReset: false,
      },
    },

    // ── ASSERT: umbrales minimos aceptables ─────────────────────────
    assert: {
      assertions: {
        // SEO — critico para un sitio de viajes (error si falla)
        'categories:seo': ['error', { minScore: 0.8 }],

        // Performance — advertencia (warn) si es lento
        'categories:performance': ['warn', { minScore: 0.5 }],

        // Accesibilidad — advertencia
        'categories:accessibility': ['warn', { minScore: 0.7 }],

        // Best Practices — advertencia
        'categories:best-practices': ['warn', { minScore: 0.7 }],

        // Metricas de velocidad clave (Web Vitals)
        'first-contentful-paint': ['warn', { maxNumericValue: 4000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 6000 }],
        'total-blocking-time': ['warn', { maxNumericValue: 500 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.25 }],

        // SEO tecnico especifico
        'meta-description': ['error', { minScore: 1 }],
        'document-title': ['error', { minScore: 1 }],
        'canonical': ['warn', { minScore: 1 }],
        'hreflang': ['warn', { minScore: 1 }],
        'image-alt': ['warn', { minScore: 1 }],
        'link-text': ['warn', { minScore: 1 }],
        'is-crawlable': ['error', { minScore: 1 }],
        'robots-txt': ['warn', { minScore: 1 }],
      },
    },

    // ── UPLOAD: donde guardar los reportes ──────────────────────────
    upload: {
      // Almacenamiento publico temporal (genera URL publica por 7 dias)
      // Ideal para ver reportes sin necesidad de servidor propio
      target: 'temporary-public-storage',
    },
  },
};
