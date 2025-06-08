class CatalogoApp {
    constructor() {
        this.searchTerm = "";
        this.carrito = [];

        this.productos = [
            {
                id: 1,
                name: "Leche entera La Serenísima",
                category: "Lácteos",
                price: 620,
                image: "https://acdn-us.mitiendanube.com/stores/093/780/products/serenisima-clasica-751-95fea92d1a27f8e9ab15710914346750-640-0.png",
                offer: true,
                description:
                    "Leche entera pasteurizada de alta calidad, rica en calcio y proteínas. Ideal para toda la familia.",
                brand: "La Serenísima",
                weight: "1 Litro",
                ingredients: ["Leche entera pasteurizada", "Vitaminas A y D"],
            },
            {
                id: 2,
                name: "Pan francés x 1kg",
                category: "Panificados",
                price: 450,
                image: "https://enrilemoine.com/wp-content/uploads/2024/06/pan-frances-by-enrilemoine-13.webp",
                description:
                    "Pan francés artesanal, crujiente por fuera y tierno por dentro. Horneado diariamente.",
                brand: "Panadería Local",
                weight: "1 Kg",
                ingredients: ["Harina de trigo", "Agua", "Sal", "Levadura"],
            },
            {
                id: 3,
                name: "Gaseosa Coca-Cola 1.5L",
                category: "Bebidas",
                price: 900,
                image: "https://acdn-us.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-08-25-at-10-58-511-ce2f1154472dd2632c16298999809869-640-0.jpeg",
                offer: true,
                description:
                    "La auténtica Coca-Cola con su sabor único e inconfundible. Perfecta para compartir.",
                brand: "Coca-Cola",
                weight: "1.5 Litros",
                ingredients: [
                    "Agua carbonatada",
                    "Azúcar",
                    "Concentrado de cola",
                    "Ácido fosfórico",
                    "Cafeína",
                ],
            },
            {
                id: 4,
                name: "Café Molido La Virginia",
                category: "Despensa",
                price: 12150,
                image: "https://jumboargentina.vtexassets.com/arquivos/ids/646156-1200-auto?v=637582880095270000&width=1200&height=auto&aspect=true",
                description:
                    "Café molido de primera calidad, tostado suave con aroma intenso. Ideal para desayunos y meriendas.",
                brand: "La Virginia",
                weight: "500g",
                ingredients: ["Café 100% puro molido"],
            },
            {
                id: 5,
                name: "Fideos Spaghetti Matarazzo",
                category: "Despensa",
                price: 380,
                image: "https://arjosimarprod.vtexassets.com/arquivos/ids/156663-1200-auto?v=637389710721870000&width=1200&height=auto&aspect=true",
                offer: true,
                description:
                    "Fideos spaghetti de sémola de trigo duro. Cocción perfecta en 8-10 minutos.",
                brand: "Matarazzo",
                weight: "500g",
                ingredients: ["Sémola de trigo duro", "Agua"],
            },
            {
                id: 6,
                name: "Puré de Tomate La Campagnola",
                category: "Conservas",
                price: 290,
                image: "https://jumboargentina.vtexassets.com/arquivos/ids/584764-1200-auto?v=637249362175770000&width=1200&height=auto&aspect=true",
                description:
                    "Puré de tomate natural, ideal para salsas, guisos y preparaciones caseras.",
                brand: "La Campagnola",
                weight: "520g",
                ingredients: ["Tomate", "Sal"],
            },
            {
                id: 7,
                name: "Arroz Largo Fino Gallo Oro",
                category: "Despensa",
                price: 520,
                image: "https://www.saica.com.ar/3725-large_default/gallo-arroz-largo-fino-seleccion-bolsa-1kg.jpg",
                description:
                    "Arroz largo fino de primera calidad, granos sueltos y perfecta cocción.",
                brand: "Gallo Oro",
                weight: "1kg",
                ingredients: ["Arroz largo fino"],
            },
            {
                id: 8,
                name: "Aceite de Girasol Natura",
                category: "Aceites",
                price: 680,
                image: "https://http2.mlstatic.com/D_NQ_NP_810197-MLA74176635823_012024-O.webp",
                offer: true,
                description:
                    "Aceite de girasol puro, ideal para cocinar y aderezar. Rico en vitamina E.",
                brand: "Natura",
                weight: "900ml",
                ingredients: ["Aceite de girasol refinado"],
            },
            {
                id: 9,
                name: "Yogur Natural Danone",
                category: "Lácteos",
                price: 420,
                image: "https://chedrauimx.vtexassets.com/arquivos/ids/49198560-1200-auto?v=638845940935630000&width=1200&height=auto&aspect=true",
                description:
                    "Yogur natural cremoso, fuente de calcio y probióticos. Sin conservantes artificiales.",
                brand: "Danone",
                weight: "500g",
                ingredients: ["Leche", "Fermentos lácticos"],
            },
            {
                id: 10,
                name: "Huevos Blancos x 6 unidades",
                category: "Frescos",
                price: 1850,
                image: "https://consol.coop.ar/web/image/product.product/7973/image_1024/Huevos%20Blanco%20econ%C3%B3mico%20Estuche%20x%206%20un?unique=67164eb",
                description:
                    "Huevos frescos de primera calidad, ricos en proteínas y vitaminas.",
                brand: "Granja Local",
                weight: "12 unidades",
                ingredients: ["Huevos de gallina"],
            },
            {
                id: 11,
                name: "Azúcar Ledesma",
                category: "Despensa",
                price: 990,
                image: "https://www.casa-segal.com/wp-content/uploads/2019/03/azucar-kilo-ledesma-reposteria-mendoza-casa-segal-1-600x600.jpg",
                description:
                    "Azúcar blanca refinada de primera calidad. Ideal para endulzar y repostería.",
                brand: "Ledesma",
                weight: "1kg",
                ingredients: ["Azúcar de caña refinada"],
            },
            {
                id: 12,
                name: "Agua Mineral Villa del Sur",
                category: "Bebidas",
                price: 180,
                image: "https://jumboargentina.vtexassets.com/arquivos/ids/620318-1200-auto?v=637466226602700000&width=1200&height=auto&aspect=true",
                description:
                    "Agua mineral natural sin gas, pura y cristalina de manantiales naturales.",
                brand: "Villa del Sur",
                weight: "2.25L",
                ingredients: ["Agua mineral natural"],
            },
            {
                id: 13,
                name: "Manteca La Paulina",
                category: "Lácteos",
                price: 1900,
                image: "https://elahorroonline.com.ar/wp-content/uploads/2025/01/MANTECA-200-01-600x600.jpg",
                offer: true,
                description:
                    "Manteca sin sal de primera calidad, cremosa y sabrosa. Perfecta para cocinar y untar.",
                brand: "La Paulina",
                weight: "200g",
                ingredients: ["Crema de leche", "Sal"],
            },
            {
                id: 14,
                name: "Atún al Natural La Campagnola",
                category: "Conservas",
                price: 3299,
                image: "https://arcorencasa.com/wp-content/uploads/2024/10/20241008-13136.webp",
                offer: true,
                description:
                    "Atún al natural en trozos, rico en proteínas y omega 3. Ideal para ensaladas.",
                brand: "La Campagnola",
                weight: "170g",
                ingredients: ["Atún", "Agua", "Sal"],
            },
            {
                id: 15,
                name: "Queso Cremoso Sancor",
                category: "Lácteos",
                price: 4713,
                image: "https://jumboargentina.vtexassets.com/arquivos/ids/187654-1200-auto?v=636383491016000000&width=1200&height=auto&aspect=true",
                description:
                    "Queso cremoso de textura suave y sabor delicado. Perfecto para sándwiches y tostadas.",
                brand: "Sancor",
                weight: "300g",
                ingredients: ["Leche", "Sal", "Cuajo", "Fermentos lácticos"],
            },
        ];

        this.ofertas = [
            {
                id: 101,
                nombre: "Leche",
                precioOriginal: 1400,
                precioOferta: 1100,
                imagen: "https://via.placeholder.com/200x150/fff3cd/856404?text=Leche+OFERTA",
            },
            {
                id: 102,
                nombre: "Yerba",
                precioOriginal: 2500,
                precioOferta: 2000,
                imagen: "https://via.placeholder.com/200x150/fff3cd/856404?text=Yerba+OFERTA",
            },
            {
                id: 103,
                nombre: "Pan",
                precioOriginal: 600,
                precioOferta: 450,
                imagen: "https://via.placeholder.com/200x150/fff3cd/856404?text=Pan+OFERTA",
            },
            {
                id: 104,
                nombre: "Queso",
                precioOriginal: 3000,
                precioOferta: 2400,
                imagen: "https://via.placeholder.com/200x150/fff3cd/856404?text=Queso+OFERTA",
            },
        ];

        this.init();
    }

    init() {
        this.renderProductos();
        this.renderOfertas();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Botón de búsqueda
        const searchBtn = document.getElementById("searchBtn");
        if (searchBtn) {
            searchBtn.addEventListener("click", () => {
                const searchModal = new bootstrap.Modal(document.getElementById("searchModal"));
                searchModal.show();
                setTimeout(() => {
                    const searchInput = document.getElementById("searchInput");
                    if (searchInput) searchInput.focus();
                }, 300);
            });
        }

        // Botón de carrito
        const cartBtn = document.getElementById("cartBtn");
        if (cartBtn) {
            cartBtn.addEventListener("click", () => {
                this.renderCartModal();
                const cartModal = new bootstrap.Modal(document.getElementById("cartModal"));
                cartModal.show();
            });
        }

        // Búsqueda en tiempo real
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this.renderSearchResults();
            });
        }
        
        // No necesitamos más event listeners para cerrar modales
        // Bootstrap maneja eso automáticamente con data-bs-dismiss="modal"
    }

    // Filtros y búsqueda
    getAllProducts() {
        return [...this.ofertas, ...this.productos];
    }

    filterProducts(products) {
        if (!this.searchTerm) return products;
        
        return products.filter((product) => {
            const nombre = product.name || product.nombre || '';
            const categoria = product.category || '';
            
            return nombre.toLowerCase().includes(this.searchTerm) || 
                   categoria.toLowerCase().includes(this.searchTerm);
        });
    }

    // Renderizado de resultados de búsqueda con Bootstrap
    renderSearchResults() {
        const resultsContainer = document.getElementById("searchResults");
        if (!resultsContainer) return;
        
        const searchTerm = this.searchTerm ? this.searchTerm.toLowerCase().trim() : '';

        if (!searchTerm) {
            resultsContainer.innerHTML = "";
            return;
        }

        const allProducts = [...this.productos]; 
        const filteredProducts = allProducts.filter(
            (product) => {
                const name = product.name ? product.name.toLowerCase() : '';
                const category = product.category ? product.category.toLowerCase() : '';
                return name.includes(searchTerm) || category.includes(searchTerm);
            }
        );

        if (filteredProducts.length === 0) {
            resultsContainer.innerHTML = `
                <div class="text-center py-4 text-muted">
                    <i data-lucide="search-x" width="32" height="32" class="mb-3"></i>
                    <p>No se encontraron productos para "${this.searchTerm}"</p>
                </div>
            `;
            lucide.createIcons();
            return;
        }

        resultsContainer.innerHTML = filteredProducts
            .map(
                (product) => `
                <div class="card mb-3" onclick="app.agregarAlCarrito(${JSON.stringify(
                    product
                ).replace(
                    /"/g,
                    "&quot;"
                )}); app.closeSearchModal();">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-4 col-md-3">
                                <img src="${product.image}" alt="${
                    product.name
                }" 
                                    class="img-fluid rounded object-fit-contain bg-light" 
                                    style="height: 60px; width: 100%;" onerror="app.handleImageError(this)"/>
                            </div>
                            <div class="col-8 col-md-9">
                                <h6 class="mb-1">${this.highlightSearchTerm(
                                    product.name
                                )}</h6>
                                <p class="text-muted small mb-1">${
                                    product.category
                                }</p>
                                <div>
                                    ${
                                        product.offer
                                            ? `<span class="text-decoration-line-through text-muted small me-2">$${
                                                  product.price +
                                                  Math.round(
                                                      product.price * 0.2
                                                  )
                                              }</span>
                                           <span class="fw-bold text-danger">$${
                                               product.price
                                           }</span>
                                           <span class="badge bg-warning text-dark ms-2">Oferta</span>`
                                            : `<span class="fw-bold">$${product.price}</span>`
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            )
            .join("");

        lucide.createIcons();
    }

    // Función para resaltar término de búsqueda
    highlightSearchTerm(text) {
        const regex = new RegExp(`(${this.searchTerm})`, "gi");
        return text.replace(
            regex,
            '<mark class="bg-warning text-dark">$1</mark>'
        );
    }

    // Renderizado de ofertas con Bootstrap
    renderOfertas() {
        const grid = document.getElementById("ofertasGrid");

        // Filtrar productos que están en oferta
        const productosEnOferta = this.productos.filter(
            (producto) => producto.offer
        );

        grid.innerHTML = productosEnOferta
            .map(
                (producto) => `
        <div class="col">
            <div class="card h-100 border-warning position-relative">
                <div class="position-absolute top-0 end-0 bg-warning text-dark p-2 m-2 rounded-pill fs-6">Oferta</div>
                <div class="card-img-container bg-light p-3" style="height: 200px;">
                    <img src="${producto.image}" alt="${producto.name}" 
                        class="card-img-top h-100 object-fit-contain" 
                        onerror="app.handleImageError(this)"/>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title producto-titulo">${producto.name}</h5>
                    <div class="my-2">
                        <p class="text-decoration-line-through text-muted mb-1">$${
                            producto.price + Math.round(producto.price * 0.2)
                        }</p>
                        <p class="fw-bold text-danger fs-5 mb-2">$${
                            producto.price
                        }</p>
                    </div>
                    <div class="card-buttons mt-auto">
                        <div class="d-flex gap-2">
                            <button class="btn btn-primary flex-grow-1" onclick="app.agregarAlCarrito(${JSON.stringify(
                                producto
                            ).replace(/"/g, "&quot;")})">
                                <i data-lucide="shopping-cart" class="me-1" width="18" height="18"></i>
                                Agregar
                            </button>
                            <button class="btn btn-outline-secondary" onclick="app.abrirModalProducto(${
                                producto.id
                            })">
                                <i data-lucide="info" width="18" height="18"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
            )
            .join("");

        // Reinicializar iconos después de actualizar el DOM
        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
    }

    // Renderizado de productos con Bootstrap
    renderProductos() {
        const grid = document.getElementById("productosGrid");

        grid.innerHTML = this.productos
            .map(
                (producto) => `
        <div class="col">
            <div class="card h-100 ${producto.offer ? "border-warning" : ""}">
                ${
                    producto.offer
                        ? '<div class="position-absolute top-0 end-0 bg-warning text-dark p-2 m-2 rounded-pill fs-6">Oferta</div>'
                        : ""
                }
                <div class="card-img-container bg-light p-3" style="height: 200px;">
                    <img src="${producto.image}" alt="${producto.name}" 
                        class="card-img-top h-100 object-fit-contain" 
                        onerror="app.handleImageError(this)"/>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title producto-titulo">${producto.name}</h5>
                    <div class="my-2">
                        ${
                            producto.offer
                                ? `<p class="text-decoration-line-through text-muted mb-1">$${
                                      producto.price +
                                      Math.round(producto.price * 0.2)
                                  }</p>
                               <p class="fw-bold text-danger fs-5 mb-2">$${
                                   producto.price
                               }</p>`
                                : `<p class="fw-bold fs-5 mb-2">$${producto.price}</p>`
                        }
                    </div>
                    <div class="card-buttons mt-auto">
                        <div class="d-flex gap-2">
                            <button class="btn btn-primary flex-grow-1" onclick="app.agregarAlCarrito(${JSON.stringify(
                                producto
                            ).replace(/"/g, "&quot;")})">
                                <i data-lucide="shopping-cart" class="me-1" width="18" height="18"></i>
                                Agregar
                            </button>
                            <button class="btn btn-outline-secondary" onclick="app.abrirModalProducto(${
                                producto.id
                            })">
                                <i data-lucide="info" width="18" height="18"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
            )
            .join("");

        // Reinicializar iconos después de actualizar el DOM
        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
    }

    // Gestión del carrito
    agregarAlCarrito(producto) {
        // Verificar si el producto es válido
        if (!producto || (!producto.id && !producto.nombre && !producto.name)) {
            console.error("Producto inválido", producto);
            return;
        }

        // Asegurar que el formato del producto sea consistente
        const productoNormalizado = {
            id: producto.id,
            nombre: producto.name || producto.nombre,
            precio: producto.price || producto.precio || producto.precioOferta,
            imagen: producto.image || producto.imagen,
            precioOriginal: producto.offer
                ? producto.price + Math.round(producto.price * 0.2)
                : null,
        };

        // Validación adicional
        if (!productoNormalizado.nombre || !productoNormalizado.precio) {
            console.error("Datos de producto incompletos", productoNormalizado);
            return;
        }

        // Buscar si el producto ya existe en el carrito
        const itemExistente = this.carrito.find(
            (item) => item.id === productoNormalizado.id
        );

        if (itemExistente) {
            // Si existe, aumentar la cantidad
            itemExistente.cantidad++;
            this.showAddToCartNotification(
                `¡Cantidad de ${productoNormalizado.nombre} actualizada!`
            );
        } else {
            // Si no existe, agregar con cantidad 1
            productoNormalizado.cantidad = 1;
            this.carrito.push(productoNormalizado);
            this.showAddToCartNotification(
                `${productoNormalizado.nombre} agregado al carrito`
            );
        }

        this.updateCartBadge();
    }

    agregarAlCarritoDesdeModal(producto) {
        this.agregarAlCarrito(producto);
        this.closeSearchModal();
    }

    cambiarCantidad(index, delta) {
        const item = this.carrito[index];

        // Aumentar o disminuir según el delta
        item.cantidad += delta;

        // Si la cantidad llega a 0 o menos, eliminar el producto
        if (item.cantidad <= 0) {
            this.carrito.splice(index, 1);
        }

        this.updateCartBadge();
        this.renderCartModal();
    }

    quitarDelCarrito(index) {
        this.carrito.splice(index, 1);
        this.updateCartBadge();
        this.renderCartModal();
    }

    updateCartBadge() {
        const badge = document.getElementById("cartBadge");
        const totalItems = this.carrito.reduce(
            (total, item) => total + item.cantidad,
            0
        );
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? "flex" : "none";
    }

    // Actualizar la función renderCartModal para cambiar el texto del botón
    renderCartModal() {
        const emptyCart = document.getElementById("emptyCart");
        const cartItems = document.getElementById("cartItems");
        const cartFooter = document.getElementById("cartFooter");
        const totalAmount = document.getElementById("totalAmount");
        const whatsappBtn = document.getElementById("whatsappBtn");
        
        // Verificar que todos los elementos existen
        if (!emptyCart || !cartItems || !cartFooter || !totalAmount || !whatsappBtn) {
            console.error("Elementos del carrito no encontrados en el DOM");
            return;
        }

        if (this.carrito.length === 0) {
            emptyCart.style.display = "block";
            cartItems.style.display = "none";
            cartFooter.style.display = "none";
            return;
        }

        emptyCart.style.display = "none";
        cartItems.style.display = "block";
        cartFooter.style.display = "block";

        cartItems.innerHTML = this.carrito
            .map(
                (item, index) => `
<div class="card mb-3">
    <div class="card-body">
        <div class="row align-items-center">
            <div class="col-3 col-md-2">
                <img src="${item.imagen}" alt="${item.nombre}" 
                    class="img-fluid rounded object-fit-contain bg-light" 
                    style="height: 70px; width: 100%;" onerror="app.handleImageError(this)"/>
            </div>
            <div class="col-5 col-md-6">
                <h6 class="mb-1">${item.nombre}</h6>
                <p class="text-muted small mb-1">$${item.precio} x ${item.cantidad}</p>
                <p class="fw-bold mb-0">Subtotal: $${(item.precio * item.cantidad).toFixed(0)}</p>
            </div>
            <div class="col-4 col-md-4">
                <div class="d-flex flex-column align-items-end">
                    <div class="btn-group btn-group-sm mb-2">
                        <button type="button" class="btn btn-outline-secondary" onclick="app.cambiarCantidad(${index}, -1)">
                            <i data-lucide="minus" width="16" height="16"></i>
                        </button>
                        <span class="btn btn-outline-secondary disabled">${item.cantidad}</span>
                        <button type="button" class="btn btn-outline-secondary" onclick="app.cambiarCantidad(${index}, 1)">
                            <i data-lucide="plus" width="16" height="16"></i>
                        </button>
                    </div>
                    <button type="button" class="btn btn-outline-danger btn-sm" onclick="app.quitarDelCarrito(${index})">
                        <i data-lucide="trash-2" width="16" height="16"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`
        )
        .join("");

    const total = this.calcularTotal();
    totalAmount.textContent = `$${total}`;

    // Actualizar el botón de WhatsApp
    whatsappBtn.innerHTML = `
<i data-lucide="message-circle" class="me-2"></i>
Comprar por WhatsApp
`;
    whatsappBtn.href = this.generarMensajeWhatsApp();
    whatsappBtn.className = "btn btn-success w-100";

    // Reinicializar iconos
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}

    // Función para calcular el total del carrito
    calcularTotal() {
        return this.carrito
            .reduce((total, item) => {
                return total + item.precio * item.cantidad;
            }, 0)
            .toFixed(0);
    }

    // Función para generar el mensaje de WhatsApp
    generarMensajeWhatsApp() {
        if (this.carrito.length === 0) return "#";

        const mensaje = encodeURIComponent(
            `¡Hola! Quiero realizar el siguiente pedido en Autoservicio Sagrado Corazón de Jesús:\n\n` +
                this.carrito
                    .map(
                        (item, index) =>
                            `${index + 1}. *${item.nombre}*\n` +
                            `   - Precio unitario: $${item.precio}\n` +
                            `   - Cantidad: ${item.cantidad}\n` +
                            `   - Subtotal: $${(
                                item.precio * item.cantidad
                            ).toFixed(0)}`
                    )
                    .join("\n\n") +
                `\n\n*TOTAL A PAGAR: $${this.calcularTotal()}*\n\n` +
                `Datos para la entrega:\n` +
                `• Nombre:\n` +
                `• Dirección:\n` +
                `• Método de pago:\n\n` +
                `¡Gracias!`
        );

        // Reemplaza este número por el número de WhatsApp del negocio
        const numeroWhatsApp = "5493517181975"; // Ejemplo de número argentino

        return `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    }

    // Función para mostrar notificación cuando se agrega un producto
    showAddToCartNotification(nombreProducto) {
        // Crear elemento de notificación
        const notification = document.createElement("div");
        notification.className = "add-to-cart-notification";
        notification.innerHTML = `
            <div class="notification-content">
                <i data-lucide="check-circle"></i>
                <span>¡${nombreProducto} agregado al carrito!</span>
            </div>
        `;

        // Agregar al DOM
        document.body.appendChild(notification);

        // Inicializar iconos
        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }

        // Mostrar con animación
        setTimeout(() => {
            notification.classList.add("show");
        }, 100);

        // Ocultar después de 3 segundos
        setTimeout(() => {
            notification.classList.remove("show");
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Función para manejar errores de carga de imágenes
    handleImageError(img) {
        img.onerror = null; // Evita recursión infinita
        img.src = "https://via.placeholder.com/150/f8f9fa/6c757d?text=Producto";
    }

    // Modal de producto con Bootstrap
    abrirModalProducto(id) {
        const producto = this.productos.find((p) => p.id === id);
        if (!producto) return;

        // Crear modal dinámicamente con Bootstrap
        const modalHTML = `
    <div class="modal fade" id="productoModal" tabindex="-1" aria-labelledby="productoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="productoModalLabel">${
                        producto.name
                    }</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="bg-light p-3 rounded mb-3">
                                <img src="${producto.image}" alt="${
            producto.name
        }" class="img-fluid object-fit-contain" 
                                    style="height: 300px; width: 100%;" onerror="app.handleImageError(this)"/>
                                ${
                                    producto.offer
                                        ? '<span class="position-absolute top-0 end-0 bg-warning text-dark p-2 m-3 rounded-pill">¡En oferta!</span>'
                                        : ""
                                }
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                ${
                                    producto.offer
                                        ? `<p class="text-decoration-line-through text-muted mb-1">$${
                                              producto.price +
                                              Math.round(producto.price * 0.2)
                                          }</p>
                                       <p class="fw-bold text-danger fs-4 mb-2">$${
                                           producto.price
                                       }</p>`
                                        : `<p class="fw-bold fs-4 mb-2">$${producto.price}</p>`
                                }
                            </div>
                            <div class="mb-3">
                                <h6>Descripción:</h6>
                                <p>${producto.description}</p>
                            </div>
                            <div class="mb-3">
                                <h6>Características:</h6>
                                <ul class="list-unstyled">
                                    <li><strong>Marca:</strong> ${
                                        producto.brand
                                    }</li>
                                    <li><strong>Peso:</strong> ${
                                        producto.weight
                                    }</li>
                                    <li><strong>Categoría:</strong> ${
                                        producto.category
                                    }</li>
                                </ul>
                            </div>
                            <div class="mb-3">
                                <h6>Ingredientes:</h6>
                                <p>${
                                    producto.ingredients
                                        ? producto.ingredients.join(", ")
                                        : "No disponible"
                                }</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" onclick="app.agregarAlCarrito(${JSON.stringify(
                        producto
                    ).replace(
                        /"/g,
                        "&quot;"
                    )}); bootstrap.Modal.getInstance(document.getElementById('productoModal')).hide();">
                        <i data-lucide="shopping-cart" class="me-1" width="18" height="18"></i>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;

        // Agregar el modal al body
        document.body.insertAdjacentHTML("beforeend", modalHTML);

        // Inicializar y mostrar el modal
        const productoModal = new bootstrap.Modal(
            document.getElementById("productoModal")
        );
        productoModal.show();

        // Evento para eliminar el modal del DOM cuando se cierre
        document
            .getElementById("productoModal")
            .addEventListener("hidden.bs.modal", function () {
                document.getElementById("productoModal").remove();
            });

        // Inicializar iconos
        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
    }
}

// Instanciar la aplicación una sola vez cuando el DOM esté listo
let app;

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        app = new CatalogoApp();
        window.app = app;
    });
} else {
    app = new CatalogoApp();
    window.app = app;
}
