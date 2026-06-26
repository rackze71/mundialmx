// ============ DATOS ACTUALIZADOS DEL MUNDIAL 2026 ============
const partidos = [
    // FASE DE GRUPOS (48 equipos, 12 grupos)
    { id: 1, fase: 'grupos', grupo: 'A', equipo1: 'México', equipo2: 'Sudáfrica', bandera1: '🇲🇽', bandera2: '🇿🇦', fecha: '2026-06-11', hora: '17:00', sede: 'Estadio Azteca', ciudad: 'Ciudad de México', pais: 'mexico', capacidad: 87000, precioVip: 35000, precioPremium: 22000, precioGeneral: 10000, destacado: true },
    { id: 2, fase: 'grupos', grupo: 'A', equipo1: 'Canadá', equipo2: 'Qatar', bandera1: '🇨🇦', bandera2: '🇶🇦', fecha: '2026-06-12', hora: '14:00', sede: 'BMO Field', ciudad: 'Toronto', pais: 'canada', capacidad: 45000, precioVip: 18000, precioPremium: 11000, precioGeneral: 5500, destacado: false },
    { id: 3, fase: 'grupos', grupo: 'B', equipo1: 'Argentina', equipo2: 'Panamá', bandera1: '🇦🇷', bandera2: '🇵🇦', fecha: '2026-06-13', hora: '20:00', sede: 'Estadio Akron', ciudad: 'Guadalajara', pais: 'mexico', capacidad: 49850, precioVip: 45000, precioPremium: 28000, precioGeneral: 15000, destacado: true },
    { id: 4, fase: 'grupos', grupo: 'C', equipo1: 'Brasil', equipo2: 'Serbia', bandera1: '🇧🇷', bandera2: '🇷🇸', fecha: '2026-06-14', hora: '19:00', sede: 'AT&T Stadium', ciudad: 'Dallas', pais: 'usa', capacidad: 80000, precioVip: 40000, precioPremium: 25000, precioGeneral: 12000, destacado: true },
    { id: 5, fase: 'grupos', grupo: 'D', equipo1: 'Francia', equipo2: 'Australia', bandera1: '🇫🇷', bandera2: '🇦🇺', fecha: '2026-06-15', hora: '17:00', sede: 'SoFi Stadium', ciudad: 'Los Ángeles', pais: 'usa', capacidad: 70000, precioVip: 38000, precioPremium: 23000, precioGeneral: 11000, destacado: false },
    { id: 6, fase: 'grupos', grupo: 'E', equipo1: 'España', equipo2: 'Costa Rica', bandera1: '🇪🇸', bandera2: '🇨🇷', fecha: '2026-06-16', hora: '16:00', sede: 'Estadio BBVA', ciudad: 'Monterrey', pais: 'mexico', capacidad: 53500, precioVip: 32000, precioPremium: 19000, precioGeneral: 9500, destacado: false },
    { id: 7, fase: 'grupos', grupo: 'F', equipo1: 'Alemania', equipo2: 'Japón', bandera1: '🇩🇪', bandera2: '🇯🇵', fecha: '2026-06-17', hora: '15:00', sede: 'MetLife Stadium', ciudad: 'Nueva Jersey', pais: 'usa', capacidad: 82500, precioVip: 35000, precioPremium: 21000, precioGeneral: 10500, destacado: false },
    { id: 8, fase: 'grupos', grupo: 'G', equipo1: 'Inglaterra', equipo2: 'Irán', bandera1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', bandera2: '🇮🇷', fecha: '2026-06-18', hora: '13:00', sede: 'BC Place', ciudad: 'Vancouver', pais: 'canada', capacidad: 54500, precioVip: 30000, precioPremium: 18000, precioGeneral: 9000, destacado: false },
    { id: 9, fase: 'grupos', grupo: 'H', equipo1: 'Portugal', equipo2: 'Ghana', bandera1: '🇵🇹', bandera2: '🇬🇭', fecha: '2026-06-19', hora: '18:00', sede: 'Estadio Akron', ciudad: 'Guadalajara', pais: 'mexico', capacidad: 49850, precioVip: 33000, precioPremium: 20000, precioGeneral: 10000, destacado: false },
    { id: 10, fase: 'grupos', grupo: 'A', equipo1: 'México', equipo2: 'Canadá', bandera1: '🇲🇽', bandera2: '🇨🇦', fecha: '2026-06-20', hora: '20:00', sede: 'Estadio Azteca', ciudad: 'Ciudad de México', pais: 'mexico', capacidad: 87000, precioVip: 42000, precioPremium: 26000, precioGeneral: 13000, destacado: true },
    { id: 11, fase: 'grupos', grupo: 'B', equipo1: 'Argentina', equipo2: 'México', bandera1: '🇦🇷', bandera2: '🇲🇽', fecha: '2026-06-22', hora: '20:00', sede: 'AT&T Stadium', ciudad: 'Dallas', pais: 'usa', capacidad: 80000, precioVip: 55000, precioPremium: 35000, precioGeneral: 18000, destacado: true },
    { id: 12, fase: 'grupos', grupo: 'C', equipo1: 'Brasil', equipo2: 'Suiza', bandera1: '🇧🇷', bandera2: '🇨🇭', fecha: '2026-06-23', hora: '16:00', sede: 'Estadio BBVA', ciudad: 'Monterrey', pais: 'mexico', capacidad: 53500, precioVip: 38000, precioPremium: 23000, precioGeneral: 11500, destacado: false },
    
    // OCTAVOS DE FINAL
    { id: 13, fase: 'octavos', grupo: 'Octavos 1', equipo1: '1°A', equipo2: '2°B', bandera1: '⚽', bandera2: '⚽', fecha: '2026-06-28', hora: '17:00', sede: 'Estadio Azteca', ciudad: 'Ciudad de México', pais: 'mexico', capacidad: 87000, precioVip: 45000, precioPremium: 28000, precioGeneral: 14000, destacado: false },
    { id: 14, fase: 'octavos', grupo: 'Octavos 2', equipo1: '1°C', equipo2: '2°D', bandera1: '⚽', bandera2: '⚽', fecha: '2026-06-29', hora: '20:00', sede: 'SoFi Stadium', ciudad: 'Los Ángeles', pais: 'usa', capacidad: 70000, precioVip: 45000, precioPremium: 28000, precioGeneral: 14000, destacado: false },
    { id: 15, fase: 'octavos', grupo: 'Octavos 3', equipo1: '1°E', equipo2: '2°F', bandera1: '⚽', bandera2: '⚽', fecha: '2026-06-30', hora: '19:00', sede: 'MetLife Stadium', ciudad: 'Nueva Jersey', pais: 'usa', capacidad: 82500, precioVip: 45000, precioPremium: 28000, precioGeneral: 14000, destacado: false },
    { id: 16, fase: 'octavos', grupo: 'Octavos 4', equipo1: '1°G', equipo2: '2°H', bandera1: '⚽', bandera2: '⚽', fecha: '2026-07-01', hora: '18:00', sede: 'Estadio Akron', ciudad: 'Guadalajara', pais: 'mexico', capacidad: 49850, precioVip: 45000, precioPremium: 28000, precioGeneral: 14000, destacado: false },
    
    // CUARTOS DE FINAL
    { id: 17, fase: 'cuartos', grupo: 'Cuartos 1', equipo1: 'Ganador O1', equipo2: 'Ganador O2', bandera1: '⚽', bandera2: '⚽', fecha: '2026-07-05', hora: '17:00', sede: 'Estadio Azteca', ciudad: 'Ciudad de México', pais: 'mexico', capacidad: 87000, precioVip: 60000, precioPremium: 38000, precioGeneral: 20000, destacado: true },
    { id: 18, fase: 'cuartos', grupo: 'Cuartos 2', equipo1: 'Ganador O3', equipo2: 'Ganador O4', bandera1: '⚽', bandera2: '⚽', fecha: '2026-07-06', hora: '20:00', sede: 'AT&T Stadium', ciudad: 'Dallas', pais: 'usa', capacidad: 80000, precioVip: 60000, precioPremium: 38000, precioGeneral: 20000, destacado: false },
    
    // SEMIFINALES
    { id: 19, fase: 'semifinales', grupo: 'Semifinal 1', equipo1: 'Ganador C1', equipo2: 'Ganador C2', bandera1: '⚽', bandera2: '⚽', fecha: '2026-07-10', hora: '20:00', sede: 'Estadio Azteca', ciudad: 'Ciudad de México', pais: 'mexico', capacidad: 87000, precioVip: 85000, precioPremium: 55000, precioGeneral: 30000, destacado: true },
    { id: 20, fase: 'semifinales', grupo: 'Semifinal 2', equipo1: 'Ganador C3', equipo2: 'Ganador C4', bandera1: '⚽', bandera2: '⚽', fecha: '2026-07-11', hora: '20:00', sede: 'MetLife Stadium', ciudad: 'Nueva Jersey', pais: 'usa', capacidad: 82500, precioVip: 85000, precioPremium: 55000, precioGeneral: 30000, destacado: false },
    
    // TERCER LUGAR
    { id: 21, fase: 'tercer', grupo: 'Tercer Lugar', equipo1: 'Perdedor SF1', equipo2: 'Perdedor SF2', bandera1: '⚽', bandera2: '⚽', fecha: '2026-07-18', hora: '17:00', sede: 'Hard Rock Stadium', ciudad: 'Miami', pais: 'usa', capacidad: 65000, precioVip: 50000, precioPremium: 32000, precioGeneral: 18000, destacado: false },
    
    // FINAL
    { id: 22, fase: 'final', grupo: 'Gran Final', equipo1: 'Ganador SF1', equipo2: 'Ganador SF2', bandera1: '🏆', bandera2: '🏆', fecha: '2026-07-19', hora: '20:00', sede: 'MetLife Stadium', ciudad: 'Nueva Jersey', pais: 'usa', capacidad: 82500, precioVip: 180000, precioPremium: 110000, precioGeneral: 65000, destacado: true }
];

// Sedes del Mundial 2026
const sedes = {
    mexico: [
        { nombre: 'Estadio Azteca', ciudad: 'Ciudad de México', capacidad: 87000, imagen: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600' },
        { nombre: 'Estadio Akron', ciudad: 'Guadalajara', capacidad: 49850, imagen: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600' },
        { nombre: 'Estadio BBVA', ciudad: 'Monterrey', capacidad: 53500, imagen: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600' }
    ],
    usa: [
        { nombre: 'MetLife Stadium', ciudad: 'Nueva Jersey', capacidad: 82500, imagen: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600' },
        { nombre: 'SoFi Stadium', ciudad: 'Los Ángeles', capacidad: 70000, imagen: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600' },
        { nombre: 'AT&T Stadium', ciudad: 'Dallas', capacidad: 80000, imagen: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600' },
        { nombre: 'Hard Rock Stadium', ciudad: 'Miami', capacidad: 65000, imagen: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600' },
        { nombre: 'NRG Stadium', ciudad: 'Houston', capacidad: 72000, imagen: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600' },
        { nombre: 'Mercedes-Benz Stadium', ciudad: 'Atlanta', capacidad: 71000, imagen: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600' },
        { nombre: 'Lumen Field', ciudad: 'Seattle', capacidad: 69000, imagen: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600' },
        { nombre: 'Lincoln Financial Field', ciudad: 'Filadelfia', capacidad: 69000, imagen: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600' },
        { nombre: 'Arrowhead Stadium', ciudad: 'Kansas City', capacidad: 76000, imagen: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600' },
        { nombre: "Levi's Stadium", ciudad: 'San Francisco', capacidad: 68500, imagen: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600' },
        { nombre: 'Gillette Stadium', ciudad: 'Boston', capacidad: 65000, imagen: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600' }
    ],
    canada: [
        { nombre: 'BMO Field', ciudad: 'Toronto', capacidad: 45000, imagen: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600' },
        { nombre: 'BC Place', ciudad: 'Vancouver', capacidad: 54500, imagen: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600' }
    ]
};

// Variables globales
let partidoActual = null;
let zonaSeleccionada = null;
let precioZona = 0;
let metodoPago = null;
let datosCompra = {};

// ============ COUNTDOWN ============
function iniciarCountdown() {
    const inicioMundial = new Date('2026-06-11T17:00:00').getTime();
    
    const actualizar = () => {
        const ahora = new Date().getTime();
        const diferencia = inicioMundial - ahora;
        
        if (diferencia < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(dias).padStart(2, '0');
        document.getElementById('hours').textContent = String(horas).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutos).padStart(2, '0');
        document.getElementById('seconds').textContent = String(segundos).padStart(2, '0');
    };
    
    actualizar();
    setInterval(actualizar, 1000);
}

// ============ RENDER PARTIDOS ============
function renderPartidosDestacadosHome() {
    const destacados = partidos.filter(p => p.destacado).slice(0, 6);
    const container = document.getElementById('featuredMatches');
    if (container) container.innerHTML = destacados.map(p => crearCardPartido(p)).join('');
}

function renderTodosLosPartidos(partidosAMostrar) {
    const container = document.getElementById('matchesList');
    if (!container) return;
    
    if (partidosAMostrar.length === 0) {
        container.innerHTML = '<div class="col-12 text-center py-5"><h3>No se encontraron partidos</h3></div>';
        document.getElementById('matchesCount').textContent = '0 partidos encontrados';
        return;
    }
    
    container.innerHTML = partidosAMostrar.map(p => crearCardPartido(p)).join('');
    document.getElementById('matchesCount').textContent = `${partidosAMostrar.length} partidos encontrados`;
}

function crearCardPartido(partido) {
    const fechaFormateada = formatearFecha(partido.fecha);
    const faseTexto = obtenerFaseTexto(partido.fase);
    const precioMinimo = partido.precioGeneral;
    
    return `
        <a href="compra.html?id=${partido.id}" class="match-card">
            <div class="match-header">
                <div class="match-phase">${faseTexto} - Grupo ${partido.grupo}</div>
                <div class="match-date">${fechaFormateada} • ${partido.hora}h</div>
            </div>
            <div class="match-body">
                <div class="match-teams">
                    <div class="team">
                        <div class="team-flag">${partido.bandera1}</div>
                        <div class="team-name">${partido.equipo1}</div>
                    </div>
                    <div class="match-vs">VS</div>
                    <div class="team">
                        <div class="team-flag">${partido.bandera2}</div>
                        <div class="team-name">${partido.equipo2}</div>
                    </div>
                </div>
                <div class="match-info">
                    <div class="match-stadium">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${partido.sede} • ${partido.ciudad}</span>
                    </div>
                    <div class="match-price">
                        $${precioMinimo.toLocaleString()}
                        <small>Desde</small>
                    </div>
                </div>
            </div>
        </a>
    `;
}

function formatearFecha(fecha) {
    const opciones = { weekday: 'short', day: 'numeric', month: 'short' };
    const fechaObj = new Date(fecha + 'T00:00:00');
    return fechaObj.toLocaleDateString('es-MX', opciones).toUpperCase();
}

function obtenerFaseTexto(fase) {
    const fases = {
        'grupos': 'Fase de Grupos',
        'octavos': 'Octavos de Final',
        'cuartos': 'Cuartos de Final',
        'semifinales': 'Semifinal',
        'tercer': 'Tercer Lugar',
        'final': '🏆 FINAL'
    };
    return fases[fase] || fase;
}

// ============ SEDES ============
function showVenue(pais) {
    document.querySelectorAll('.venue-tab').forEach(t => t.classList.remove('active'));
    event?.target?.classList?.add('active');
    
    const grid = document.getElementById('venuesGrid');
    if (!grid) return;
    
    grid.innerHTML = sedes[pais].map(s => `
        <div class="venue-card">
            <div class="venue-image" style="background-image: url('${s.imagen}')"></div>
            <div class="venue-info">
                <h5>${s.nombre}</h5>
                <p><i class="fas fa-map-marker-alt me-1"></i>${s.ciudad}</p>
                <span class="capacity"><i class="fas fa-users me-1"></i>${s.capacidad.toLocaleString()} asientos</span>
            </div>
        </div>
    `).join('');
}

// ============ FILTROS ============
function configurarFiltros() {
    document.getElementById('filterFase').addEventListener('change', aplicarFiltros);
    document.getElementById('filterSede').addEventListener('change', aplicarFiltros);
    document.getElementById('filterOrden').addEventListener('change', aplicarFiltros);
}

function aplicarFiltros() {
    const fase = document.getElementById('filterFase').value;
    const sede = document.getElementById('filterSede').value;
    const orden = document.getElementById('filterOrden').value;
    
    let filtrados = [...partidos];
    
    if (fase !== 'todas') filtrados = filtrados.filter(p => p.fase === fase);
    if (sede !== 'todas') filtrados = filtrados.filter(p => p.pais === sede);
    
    if (orden === 'fecha') filtrados.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    else if (orden === 'precio-asc') filtrados.sort((a, b) => a.precioGeneral - b.precioGeneral);
    else if (orden === 'precio-desc') filtrados.sort((a, b) => b.precioGeneral - a.precioGeneral);
    
    renderTodosLosPartidos(filtrados);
}

function clearFilters() {
    document.getElementById('filterFase').value = 'todas';
    document.getElementById('filterSede').value = 'todas';
    document.getElementById('filterOrden').value = 'fecha';
    renderTodosLosPartidos(partidos);
}

// ============ COMPRA - ZONAS ============
function cargarPartidoEnCompra() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    partidoActual = partidos.find(p => p.id === id);
    
    if (!partidoActual) {
        alert('Partido no encontrado');
        window.location.href = 'partidos.html';
        return;
    }
    
    // Guardar en sessionStorage
    sessionStorage.setItem('partidoActual', JSON.stringify(partidoActual));
    
    document.getElementById('matchTitle').textContent = `${partidoActual.equipo1} vs ${partidoActual.equipo2}`;
    document.getElementById('matchSubtitle').textContent = `${obtenerFaseTexto(partidoActual.fase)} • ${formatearFecha(partidoActual.fecha)} • ${partidoActual.hora}h`;
    
    document.getElementById('summaryMatch').textContent = `${partidoActual.equipo1} vs ${partidoActual.equipo2}`;
    document.getElementById('summaryDate').textContent = `${formatearFecha(partidoActual.fecha)} a las ${partidoActual.hora}h`;
    document.getElementById('summaryStadium').textContent = `${partidoActual.sede}, ${partidoActual.ciudad}`;
    
    // Actualizar precios en el mapa
    document.getElementById('price-general-norte').textContent = `$${partidoActual.precioGeneral.toLocaleString()}`;
    document.getElementById('price-general-sur').textContent = `$${partidoActual.precioGeneral.toLocaleString()}`;
    document.getElementById('price-premium-este').textContent = `$${partidoActual.precioPremium.toLocaleString()}`;
    document.getElementById('price-premium-oeste').textContent = `$${partidoActual.precioPremium.toLocaleString()}`;
    document.getElementById('price-vip').textContent = `$${partidoActual.precioVip.toLocaleString()}`;
}

function selectZone(element) {
    document.querySelectorAll('.zone').forEach(z => z.classList.remove('selected'));
    element.classList.add('selected');
    
    zonaSeleccionada = element.dataset.zone;
    
    // Determinar precio según zona
    if (zonaSeleccionada.includes('general')) precioZona = partidoActual.precioGeneral;
    else if (zonaSeleccionada.includes('premium')) precioZona = partidoActual.precioPremium;
    else if (zonaSeleccionada === 'vip') precioZona = partidoActual.precioVip;
    
    const nombresZona = {
        'general-norte': 'General Norte',
        'general-sur': 'General Sur',
        'premium-este': 'Premium Este',
        'premium-oeste': 'Premium Oeste',
        'vip': '⭐ VIP'
    };
    
    document.getElementById('summaryZone').textContent = nombresZona[zonaSeleccionada];
    document.getElementById('zoneInfo').innerHTML = `<i class="fas fa-check-circle me-2 text-success"></i><strong>${nombresZona[zonaSeleccionada]}</strong> seleccionada - $${precioZona.toLocaleString()} por boleto`;
    
    document.getElementById('btnCheckout').disabled = false;
    actualizarPrecio();
}

function actualizarPrecio() {
    if (!precioZona) return;
    
    const cantidad = parseInt(document.getElementById('ticketQuantity').value);
    const tipo = document.getElementById('ticketType').value;
    
    let descuento = 0;
    if (tipo === 'infantil') descuento = 0.50;
    else if (tipo === 'tercera') descuento = 0.30;
    else if (tipo === 'discapacidad') descuento = 0.40;
    
    const precioBase = precioZona;
    const precioConDescuento = precioBase * (1 - descuento);
    const subtotal = precioConDescuento * cantidad;
    const montoDescuento = (precioBase * descuento) * cantidad;
    const servicio = Math.round(subtotal * 0.05); // 5% servicio
    const total = subtotal + servicio;
    
    document.getElementById('pricePerTicket').textContent = `$${precioConDescuento.toLocaleString()}`;
    document.getElementById('ticketQty').textContent = cantidad;
    document.getElementById('discount').textContent = `-$${montoDescuento.toLocaleString()}`;
    document.getElementById('serviceFee').textContent = `$${servicio.toLocaleString()}`;
    document.getElementById('totalPrice').textContent = `$${total.toLocaleString()} MXN`;
    
    // Guardar para checkout
    datosCompra = {
        partido: partidoActual,
        zona: zonaSeleccionada,
        precioZona: precioZona,
        cantidad: cantidad,
        tipo: tipo,
        descuento: descuento,
        subtotal: subtotal,
        servicio: servicio,
        total: total
    };
    sessionStorage.setItem('datosCompra', JSON.stringify(datosCompra));
}

function irACompra() {
    if (!zonaSeleccionada) {
        alert('Selecciona una zona');
        return;
    }
    window.location.href = 'checkout.html';
}

// ============ CHECKOUT ============
function cargarCheckout() {
    const datos = JSON.parse(sessionStorage.getItem('datosCompra'));
    if (!datos) {
        alert('No hay datos de compra');
        window.location.href = 'partidos.html';
        return;
    }
    
    const orderDetails = document.getElementById('orderDetails');
    orderDetails.innerHTML = `
        <div style="border-bottom: 1px solid var(--border); padding-bottom: 15px; margin-bottom: 15px;">
            <strong>${datos.partido.equipo1} vs ${datos.partido.equipo2}</strong>
            <p style="color: var(--gray); font-size: 0.9rem; margin: 5px 0;">${formatearFecha(datos.partido.fecha)} - ${datos.partido.hora}h</p>
            <p style="color: var(--gray); font-size: 0.9rem; margin: 0;">${datos.partido.sede}</p>
        </div>
        <div style="margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>Zona:</span>
                <strong>${datos.zona.toUpperCase()}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>Boletos:</span>
                <span>${datos.cantidad}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>Tipo:</span>
                <span>${datos.tipo}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>Subtotal:</span>
                <span>$${datos.subtotal.toLocaleString()}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>Servicio:</span>
                <span>$${datos.servicio.toLocaleString()}</span>
            </div>
            <hr>
            <div style="display: flex; justify-content: space-between; font-size: 1.3rem;">
                <strong>Total:</strong>
                <strong style="color: var(--primary);">$${datos.total.toLocaleString()}</strong>
            </div>
        </div>
    `;
}

function nextStep(step) {
    if (step === 2) {
        const form = document.getElementById('buyerForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
    }
    
    document.querySelectorAll('.checkout-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step${step}`).classList.add('active');
    
    document.querySelectorAll('.step-item').forEach((s, i) => {
        s.classList.toggle('active', i < step);
    });
}

function selectPayment(metodo, element) {
    metodoPago = metodo;
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    element.classList.add('selected');
    
    const detalles = {
        'tarjeta': `
            <div class="mt-3">
                <div class="mb-3">
                    <label>Número de Tarjeta</label>
                    <input type="text" class="form-control" placeholder="1234 5678 9012 3456" maxlength="19" id="cardNumber">
                </div>
                <div class="row">
                    <div class="col-6 mb-3">
                        <label>Vencimiento</label>
                        <input type="text" class="form-control" placeholder="MM/AA" maxlength="5">
                    </div>
                    <div class="col-6 mb-3">
                        <label>CVV</label>
                        <input type="text" class="form-control" placeholder="123" maxlength="4">
                    </div>
                </div>
                <div class="mb-3">
                    <label>Nombre en la tarjeta</label>
                    <input type="text" class="form-control" placeholder="Como aparece en la tarjeta">
                </div>
            </div>
        `,
        'paypal': `
            <div class="mt-4 text-center p-4" style="background: var(--light); border-radius: 10px;">
                <i class="fab fa-paypal fa-4x text-primary mb-3"></i>
                <p>Serás redirigido a PayPal para completar el pago de forma segura.</p>
            </div>
        `,
        'oxxo': `
            <div class="mt-4">
                <div class="alert alert-info">
                    <i class="fas fa-store me-2"></i>
                    <strong>Pago en efectivo en Oxxo, 7-Eleven o Farmacias</strong>
                    <p class="mb-0 mt-2">Se generará una referencia para pagar en las próximas 48 horas. Tu boleto se activará al confirmar el pago.</p>
                </div>
            </div>
        `,
        'transferencia': `
            <div class="mt-4">
                <div class="alert alert-info">
                    <i class="fas fa-university me-2"></i>
                    <strong>Transferencia SPEI</strong>
                    <p class="mt-2 mb-1">CLABE: 012 345 678 901 234 56</p>
                    <p class="mb-0">Banco: BBVA México - A nombre de MundialMX S.A.</p>
                </div>
            </div>
        `
    };
    
    document.getElementById('paymentDetails').innerHTML = detalles[metodo];
}

function procesarPago() {
    if (!metodoPago) {
        alert('Selecciona un método de pago');
        return;
    }
    
    const btn = document.getElementById('btnPay');
    const textoOriginal = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Procesando...';
    
    setTimeout(() => {
        const datos = JSON.parse(sessionStorage.getItem('datosCompra'));
        const codigoBoleto = 'MMX-' + Math.random().toString(36).substring(2, 10).toUpperCase();
        
        const boleto = {
            codigo: codigoBoleto,
            partido: datos.partido,
            zona: datos.zona,
            cantidad: datos.cantidad,
            tipo: datos.tipo,
            comprador: {
                nombre: document.getElementById('buyerName').value,
                id: document.getElementById('buyerId').value,
                email: document.getElementById('buyerEmail').value,
                telefono: document.getElementById('buyerPhone').value
            },
            total: datos.total,
            metodoPago: metodoPago,
            fechaCompra: new Date().toISOString()
        };
        
        // Guardar
        let boletos = JSON.parse(localStorage.getItem('boletosMundialMX')) || [];
        boletos.push(boleto);
        localStorage.setItem('boletosMundialMX', JSON.stringify(boletos));
        
        mostrarConfirmacion(boleto);
        
        btn.disabled = false;
        btn.innerHTML = textoOriginal;
    }, 2500);
}

function mostrarConfirmacion(boleto) {
    document.querySelectorAll('.checkout-step').forEach(s => s.classList.remove('active'));
    document.getElementById('step3').classList.add('active');
    document.querySelectorAll('.step-item').forEach(s => s.classList.add('active'));
    
    const preview = document.getElementById('ticketPreview');
    preview.innerHTML = `
        <h5>🎫 Boleto ${boleto.codigo}</h5>
        <p><strong>${boleto.partido.equipo1} vs ${boleto.partido.equipo2}</strong></p>
        <p>${formatearFecha(boleto.partido.fecha)} - ${boleto.partido.hora}h</p>
        <p>${boleto.partido.sede}, ${boleto.partido.ciudad}</p>
        <p><strong>Zona:</strong> ${boleto.zona.toUpperCase()}</p>
        <p><strong>Cantidad:</strong> ${boleto.cantidad} boleto(s)</p>
        <p><strong>Total pagado:</strong> $${boleto.total.toLocaleString()} MXN</p>
        <div class="ticket-code">${boleto.codigo}</div>
        <div id="qrCode" style="margin: 20px auto; width: 150px; height: 150px;"></div>
    `;
    
    setTimeout(() => {
        new QRCode(document.getElementById('qrCode'), {
            text: boleto.codigo,
            width: 150,
            height: 150
        });
    }, 100);
}

// ============ MIS BOLETOS ============
function renderMisBoletos() {
    const boletos = JSON.parse(localStorage.getItem('boletosMundialMX')) || [];
    const container = document.getElementById('myTicketsList');
    
    if (boletos.length === 0) {
        container.innerHTML = `
            <div class="empty-tickets">
                <i class="fas fa-ticket-alt"></i>
                <p>No tienes boletos comprados</p>
                <a href="partidos.html" class="btn-primary">Ver Partidos Disponibles</a>
            </div>
        `;
        return;
    }
    
    container.innerHTML = boletos.map(boleto => `
        <div class="ticket-card">
            <div class="ticket-qr" id="qr-${boleto.codigo}"></div>
            <div class="ticket-info">
                <h4>${boleto.partido.equipo1} vs ${boleto.partido.equipo2}</h4>
                <p><i class="fas fa-calendar me-2"></i>${formatearFecha(boleto.partido.fecha)} - ${boleto.partido.hora}h</p>
                <p><i class="fas fa-map-marker-alt me-2"></i>${boleto.partido.sede}, ${boleto.partido.ciudad}</p>
                <p><i class="fas fa-chair me-2"></i>Zona ${boleto.zona.toUpperCase()} - ${boleto.cantidad} boleto(s)</p>
                <p><i class="fas fa-credit-card me-2"></i>Pagado con ${boleto.metodoPago}</p>
                <p class="ticket-code">${boleto.codigo}</p>
            </div>
        </div>
    `).join('');
    
    setTimeout(() => {
        boletos.forEach(boleto => {
            const qrDiv = document.getElementById(`qr-${boleto.codigo}`);
            if (qrDiv && qrDiv.innerHTML === '') {
                new QRCode(qrDiv, { text: boleto.codigo, width: 110, height: 110 });
            }
        });
    }, 100);
}

function downloadTicket() {
    alert('📥 Tu boleto se está descargando...\n\n(En un proyecto real, se generaría un PDF)');
}

function compartir() {
    if (navigator.share) {
        navigator.share({
            title: '¡Mis boletos del Mundial 2026!',
            text: 'Ya tengo mis boletos para el Mundial 2026 🏆⚽',
            url: window.location.href
        });
    } else {
        alert('🔗 ¡Comparte tu emoción del Mundial 2026!');
    }
}