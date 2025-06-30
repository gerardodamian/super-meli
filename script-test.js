// Script simplificado para debug
console.log('🚀 Script simplificado cargado');

// Productos de prueba
const productosTest = [
    {
        id: 1,
        name: "Leche La Serenísima",
        category: "Lácteos",
        price: 620,
        image: "https://acdn-us.mitiendanube.com/stores/093/780/products/serenisima-clasica-751-95fea92d1a27f8e9ab15710914346750-640-0.png",
        offer: true,
        description: "Leche entera pasteurizada de alta calidad"
    },
    {
        id: 2,
        name: "Pan francés",
        category: "Panificados",
        price: 450,
        image: "https://enrilemoine.com/wp-content/uploads/2024/06/pan-frances-by-enrilemoine-13.webp",
        offer: false,
        description: "Pan francés artesanal"
    }
];

// Función simple para renderizar
function renderTest() {
    console.log('📦 Renderizando productos de prueba...');
    
    const ofertasGrid = document.getElementById("ofertasGrid");
    const productosGrid = document.getElementById("productosGrid");
    
    if (!ofertasGrid || !productosGrid) {
        console.error('❌ Grids no encontrados');
        return;
    }
    
    // Render ofertas
    const ofertas = productosTest.filter(p => p.offer);
    ofertasGrid.innerHTML = ofertas.map(producto => `
        <div class="col">
            <div class="card">
                <img src="${producto.image}" class="card-img-top" alt="${producto.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${producto.name}</h5>
                    <p class="card-text">${producto.description}</p>
                    <p class="text-success fw-bold">$${producto.price}</p>
                    <button class="btn btn-primary">Agregar</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Render todos los productos
    productosGrid.innerHTML = productosTest.map(producto => `
        <div class="col">
            <div class="card">
                <img src="${producto.image}" class="card-img-top" alt="${producto.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${producto.name}</h5>
                    <p class="card-text">${producto.description}</p>
                    <p class="fw-bold">$${producto.price}</p>
                    <button class="btn btn-primary">Agregar</button>
                </div>
            </div>
        </div>
    `).join('');
    
    console.log('✅ Productos renderizados');
}

// Función para cambiar tema
function toggleTheme() {
    console.log('🎨 Cambiando tema...');
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Actualizar icono
    const themeIcon = document.querySelector('#themeToggle i');
    if (themeIcon) {
        themeIcon.setAttribute('data-lucide', newTheme === 'dark' ? 'moon' : 'sun');
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    
    console.log('✅ Tema cambiado a:', newTheme);
}

// Inicialización
function initTest() {
    console.log('🏗️ Inicializando app de prueba...');
    
    // Configurar tema inicial
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Event listeners
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        console.log('✅ Event listener de tema configurado');
    }
    
    // Renderizar productos
    renderTest();
    
    // Inicializar iconos
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
        console.log('✅ Iconos de Lucide inicializados');
    }
    
    console.log('🎉 App de prueba inicializada correctamente');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTest);
} else {
    initTest();
}

// Exponer funciones globalmente para debug
window.renderTest = renderTest;
window.toggleTheme = toggleTheme;
window.productosTest = productosTest;
