// ── Hoteles base — links de afiliado Stay22 (quisqueyatravel) ───────────────
var STAY22 = 'https://www.stay22.com/allez/quisqueyatravel?destination=';

var HOTELES_BASE = {
  'punta-cana': {
    destino: 'Punta Cana',
    hoteles: [
      { nombre: 'Barcelo Bavaro Palace', precio: 'Desde $120/noche', puntuacion: '8.6 Excelente', imagen: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80', emoji: '🌴', link: STAY22 + 'punta-cana' },
      { nombre: 'Hard Rock Hotel & Casino Punta Cana', precio: 'Desde $145/noche', puntuacion: '8.4 Muy bueno', imagen: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&q=80', emoji: '🎸', link: STAY22 + 'punta-cana' },
      { nombre: 'Riu Palace Macao', precio: 'Desde $95/noche', puntuacion: '8.8 Excelente', imagen: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80', emoji: '🏖️', link: STAY22 + 'punta-cana' }
    ]
  },
  'santo-domingo': {
    destino: 'Santo Domingo',
    hoteles: [
      { nombre: 'Hotel Hodelpa Caribe Colonial', precio: 'Desde $55/noche', puntuacion: '8.2 Muy bueno', imagen: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=500&q=80', emoji: '🏛️', link: STAY22 + 'santo-domingo' },
      { nombre: 'Radisson Blu Hotel Santo Domingo', precio: 'Desde $80/noche', puntuacion: '8.5 Muy bueno', imagen: 'https://images.unsplash.com/photo-1551882547-ff40c4c79d4d?w=500&q=80', emoji: '🌆', link: STAY22 + 'santo-domingo' }
    ]
  },
  'puerto-plata': {
    destino: 'Puerto Plata',
    hoteles: [
      { nombre: 'Cofresi Palm Beach & Spa Resort', precio: 'Desde $65/noche', puntuacion: '7.9 Bueno', imagen: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&q=80', emoji: '⛰️', link: STAY22 + 'puerto-plata' },
      { nombre: 'Viva Wyndham V Heavens', precio: 'Desde $70/noche', puntuacion: '7.6 Bueno', imagen: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&q=80', emoji: '🌊', link: STAY22 + 'puerto-plata' }
    ]
  },
  'la-romana': {
    destino: 'La Romana',
    hoteles: [
      { nombre: 'Casa de Campo Resort & Villas', precio: 'Desde $130/noche', puntuacion: '9.1 Excepcional', imagen: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&q=80', emoji: '🎨', link: STAY22 + 'la-romana' },
      { nombre: 'Sunscape Casa del Mar', precio: 'Desde $85/noche', puntuacion: '8.3 Muy bueno', imagen: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80', emoji: '🌅', link: STAY22 + 'la-romana' }
    ]
  },
  'samana': {
    destino: 'Samana',
    hoteles: [
      { nombre: 'Grand Bahia Principe Cayacoa', precio: 'Desde $90/noche', puntuacion: '8.7 Excelente', imagen: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&q=80', emoji: '🐋', link: STAY22 + 'samana' },
      { nombre: 'Hotel Bahia Principe Grand Samana', precio: 'Desde $75/noche', puntuacion: '8.5 Muy bueno', imagen: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&q=80', emoji: '🌴', link: STAY22 + 'samana' }
    ]
  }
};

var hotelesData = JSON.parse(JSON.stringify(HOTELES_BASE));
var filtroActual = 'todos';

function extraerPrecio(precio) {
  if (!precio) return '$??';
  var match = precio.match(/\$[\d,.]+/);
  return match ? match[0] : precio.split(' ')[0];
}

function extraerPuntuacion(puntuacion) {
  if (!puntuacion) return '';
  var match = puntuacion.match(/\d+\.\d+|\d+/);
  return match ? match[0] : '';
}

function renderHoteles(filtro) {
  filtroActual = filtro;
  var grid = document.getElementById('hoteles-grid');
  if (!grid) return;

  document.querySelectorAll('.filtro-btn').forEach(function(btn) {
    var v = btn.getAttribute('onclick') || '';
    var activo = filtro === 'todos' ? v.indexOf("'todos'") > -1 : v.indexOf("'" + filtro + "'") > -1;
    btn.classList.toggle('activo', activo);
  });

  var lista = [];
  if (filtro === 'todos') {
    Object.values(hotelesData).forEach(function(d) {
      d.hoteles.forEach(function(h) { lista.push(Object.assign({}, h, { destino: d.destino })); });
    });
  } else {
    var dest = hotelesData[filtro];
    if (dest) lista = dest.hoteles.map(function(h) { return Object.assign({}, h, { destino: dest.destino }); });
  }

  if (lista.length === 0) {
    grid.innerHTML = '<div class="loading-msg">No hay hoteles para este destino. <a href="' + STAY22 + 'republica-dominicana" target="_blank" rel="noopener sponsored">Ver en Stay22</a></div>';
    return;
  }

  grid.innerHTML = lista.map(function(hotel) {
    var imgHtml = hotel.imagen
      ? '<img src="' + hotel.imagen + '" alt="' + hotel.nombre + '" loading="lazy">'
      : '<div class="hotel-img-placeholder">' + (hotel.emoji || '🏨') + '</div>';
    return '<div class="hotel-card">' +
      '<div class="hotel-img-wrap">' + imgHtml + '<span class="hotel-badge">📍 ' + (hotel.destino || '') + '</span></div>' +
      '<div class="hotel-body">' +
        '<h3>' + hotel.nombre + '</h3>' +
        '<div class="hotel-rating"><span class="stars">★★★★★</span> <span class="rating-num">' + extraerPuntuacion(hotel.puntuacion) + '</span> <span style="color:#888;font-size:0.8rem">' + hotel.puntuacion + '</span></div>' +
        '<div class="hotel-precio"><span class="precio-desde">Desde </span><span class="precio-num">' + extraerPrecio(hotel.precio) + '</span><span class="precio-noche"> / noche</span></div>' +
        '<a href="' + hotel.link + '" target="_blank" rel="noopener sponsored" class="btn-hotel">Ver disponibilidad →</a>' +
      '</div></div>';
  }).join('');
}

function filtrarHoteles(destino) {
  renderHoteles(destino);
  var seccion = document.getElementById('hoteles');
  if (seccion && window.scrollY > seccion.offsetTop - 100) return;
  if (seccion) seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', function() {
  renderHoteles('todos');
  fetch('data/hoteles.json')
    .then(function(r) { if (!r.ok) throw new Error('sin json'); return r.json(); })
    .then(function(data) {
      Object.keys(data).forEach(function(key) {
        if (data[key] && data[key].hoteles && data[key].hoteles.length > 0) hotelesData[key] = data[key];
      });
      renderHoteles(filtroActual);
    })
    .catch(function() {});

  var d = new Date();
  var el = document.getElementById('footer-update');
  if (el) el.textContent = 'Hoteles actualizados: ' + d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
});
