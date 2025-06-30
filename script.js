class CatalogoApp {
    constructor() {
        this.searchTerm = "";
        this.carrito = [];
        this.favoritos = this.loadFavoritos();
        this.currentCategory = "todos";
        this.currentSort = "default";
        this.theme = localStorage.getItem('theme') || 'light';
        
        // Variables del carrusel
        this.currentSlide = 0;
        this.autoSlideInterval = null;
        this.isAutoSliding = true;

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
                image: "https://www.supermercadoseljamon.com/documents/10180/892067/17020012_G.jpg",
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
                offer: true,
                description:
                    "Queso cremoso de textura suave y sabor delicado. Perfecto para sándwiches y tostadas.",
                brand: "Sancor",
                weight: "300g",
                ingredients: ["Leche", "Sal", "Cuajo", "Fermentos lácticos"],
            },
            {
                id: 16,
                name: "Yerba Mate La Hoja",
                category: "Despensa",
                price: 2800,
                image: "https://distribuidoragabiluc.com/wp-content/uploads/2022/07/Sin-titulo-1-76.jpg",
                offer: true,
                description:
                    "Yerba mate La Hoja de primera calidad, con palo y suave al paladar. Ideal para mate tradicional.",
                brand: "La Hoja",
                weight: "1kg",
                ingredients: ["Yerba mate elaborada con palo"],
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
                imagen: "https://distribuidoragabiluc.com/wp-content/uploads/2022/07/Sin-titulo-1-76.jpg",
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
            {
                id: 105,
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

        this.init();
    }

    init() {
        // NO inicializar tema inmediatamente, esperar al DOM
        this.setupEventListeners();
        this.initCarousel();
        this.renderOfertas();
        this.renderProductos();
        this.loadCartFromStorage();
        this.updateCartCount();
        this.initAnimations();
        
        // Solo una llamada a initTheme después de que todo esté listo
        setTimeout(() => {
            this.initTheme();
        }, 300);
    }

    initTheme(attempts = 0) {
        const maxAttempts = 5; // Reducir a 5 intentos
        
        // Verificar que el DOM esté completamente listo
        if (document.readyState === 'loading') {
            // Si el DOM aún se está cargando, esperar
            setTimeout(() => this.initTheme(attempts), 100);
            return;
        }
        
        // Buscar elementos del tema
        const themeButton = document.getElementById('themeToggle');
        const themeIcon = document.querySelector('#themeToggle .theme-icon');
        
        if (!themeButton) {
            if (attempts < maxAttempts) {
                console.warn(`Botón de tema no encontrado, reintentando... (intento ${attempts + 1}/${maxAttempts})`);
                setTimeout(() => this.initTheme(attempts + 1), 200);
            } else {
                console.error('No se pudo encontrar el botón de tema después de múltiples intentos');
            }
            return;
        }

        // Aplicar el tema al documento
        document.documentElement.setAttribute('data-theme', this.theme);
        
        if (themeIcon && themeButton) {
            // Cambiar el icono basado en el tema actual
            const iconText = this.theme === 'dark' ? '🌙' : '☀️';
            themeIcon.textContent = iconText;
            
            // Actualizar el título del botón
            themeButton.setAttribute('title', 
                this.theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'
            );
            
            console.log(`Tema ${this.theme} aplicado correctamente con icono ${iconText}`);
        } else {
            if (attempts < maxAttempts) {
                console.warn(`Icono del tema no encontrado, reintentando... (intento ${attempts + 1}/${maxAttempts})`);
                setTimeout(() => this.initTheme(attempts + 1), 200);
            } else {
                console.error('No se pudieron encontrar los elementos del tema después de múltiples intentos');
                // Crear el icono si no existe
                if (themeButton && !themeIcon) {
                    const newIcon = document.createElement('span');
                    newIcon.className = 'theme-icon';
                    newIcon.textContent = this.theme === 'dark' ? '🌙' : '☀️';
                    themeButton.innerHTML = '';
                    themeButton.appendChild(newIcon);
                    
                    themeButton.setAttribute('title', 
                        this.theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'
                    );
                    
                    console.log('Icono de tema creado dinámicamente');
                }
            }
        }
    }

    toggleTheme() {
        const themeButton = document.getElementById('themeToggle');
        
        // Agregar animación de cambio
        if (themeButton) {
            themeButton.classList.add('changing');
            setTimeout(() => {
                themeButton.classList.remove('changing');
            }, 600);
        }
        
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        
        // Pequeño delay para que la animación se vea mejor
        setTimeout(() => {
            this.initTheme();
        }, 100);
        
        this.showToast(
            'Tema cambiado', 
            `Modo ${this.theme === 'dark' ? 'oscuro 🌙' : 'claro ☀️'} activado`
        );
    }

    loadFavoritos() {
        return JSON.parse(localStorage.getItem('favoritos')) || [];
    }

    saveFavoritos() {
        localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    }

    toggleFavorito(productId) {
        const index = this.favoritos.indexOf(productId);
        if (index > -1) {
            this.favoritos.splice(index, 1);
            this.showToast('Eliminado de favoritos', 'Producto removido de tu lista de favoritos');
        } else {
            this.favoritos.push(productId);
            this.showToast('Agregado a favoritos', 'Producto añadido a tu lista de favoritos');
        }
        this.saveFavoritos();
        this.updateFavoritesBadge();
        this.renderOfertas();
        this.renderProductos();
        this.updateFavoritesModalIfOpen();
        this.renderCarousel(); // Actualizar también el carrusel
    }

    showToast(title, message, type = 'success') {
        // Create toast container if it doesn't exist
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }

        // Create toast
        const toast = document.createElement('div');
        toast.className = 'toast toast-modern show';
        toast.innerHTML = `
            <div class="toast-header">
                <i data-lucide="${type === 'success' ? 'check' : 'info'}" width="16" height="16"></i>
                <strong class="me-auto ms-2">${title}</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        `;

        toastContainer.appendChild(toast);
        lucide.createIcons();

        // Auto remove after 3 seconds
        setTimeout(() => {
            toast.classList.add('hide');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    loadCartFromStorage() {
        const savedCart = localStorage.getItem('carrito');
        if (savedCart) {
            this.carrito = JSON.parse(savedCart);
            this.updateCartBadge();
        }
        // También inicializar el badge de favoritos
        this.updateFavoritesBadge();
    }

    saveCartToStorage() {
        localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }

    closeSearchModal() {
        const searchModal = bootstrap.Modal.getInstance(document.getElementById('searchModal'));
        if (searchModal) {
            searchModal.hide();
        }
    }

    setupEventListeners() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Category filters
        const categoryFilters = document.querySelectorAll('.filter-btn');
        categoryFilters.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all buttons
                categoryFilters.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                
                this.currentCategory = e.target.dataset.category;
                this.filterAndRenderProducts();
            });
        });

        // Sort dropdown
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.filterAndRenderProducts();
            });
        }

        // Botón de búsqueda
        const clearBtn = document.getElementById("clearDataBtn");
        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                localStorage.removeItem("cliente_nombre");
                localStorage.removeItem("cliente_direccion");
                document.getElementById("inputNombre").value = "";
                document.getElementById("inputDireccion").value = "";
            });
        }

        const searchBtn = document.getElementById("searchBtn");
        if (searchBtn) {
            searchBtn.addEventListener("click", () => {
                const searchModal = new bootstrap.Modal(
                    document.getElementById("searchModal")
                );
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
                const cartModal = new bootstrap.Modal(
                    document.getElementById("cartModal")
                );
                cartModal.show();
            });
        }

        // Botón de favoritos
        const favoritesBtn = document.getElementById("favoritesBtn");
        if (favoritesBtn) {
            // Remover cualquier event listener previo
            favoritesBtn.removeEventListener("click", this.favoritesClickHandler);
            
            // Crear el handler como una función bound
            this.favoritesClickHandler = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openFavoritesModal();
            };
            
            favoritesBtn.addEventListener("click", this.favoritesClickHandler);
        }

        // Búsqueda en tiempo real
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this.renderSearchResults();
            });
        }

        // Event listener para el modal de producto
        const productModal = document.getElementById("productModal");
        if (productModal) {
            productModal.addEventListener('hidden.bs.modal', () => {
                // Recrear iconos cuando se cierre el modal
                lucide.createIcons();
            });
        }

        // Event listeners del carrusel
        const carouselPrev = document.getElementById('carouselPrev');
        const carouselNext = document.getElementById('carouselNext');
        const autoIndicator = document.getElementById('autoIndicator');
        
        if (carouselPrev) {
            carouselPrev.addEventListener('click', () => this.prevSlide());
        }
        
        if (carouselNext) {
            carouselNext.addEventListener('click', () => this.nextSlide());
        }

        if (autoIndicator) {
            autoIndicator.addEventListener('click', () => this.toggleAutoSlide());
        }

        // Event listener para mostrar/ocultar información de Mercado Pago
        document.addEventListener('change', (e) => {
            if (e.target.name === 'metodoPago') {
                const mercadoPagoInfo = document.getElementById('mercadoPagoInfo');
                const mercadoPagoPayButton = document.getElementById('mercadoPagoPayButton');
                
                if (e.target.value === 'mercadopago') {
                    if (mercadoPagoInfo) mercadoPagoInfo.style.display = 'block';
                    if (mercadoPagoPayButton) mercadoPagoPayButton.style.display = 'block';
                } else {
                    if (mercadoPagoInfo) mercadoPagoInfo.style.display = 'none';
                    if (mercadoPagoPayButton) mercadoPagoPayButton.style.display = 'none';
                }
            }
        });

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
            const nombre = product.name || product.nombre || "";
            const categoria = product.category || "";

            return (
                nombre.toLowerCase().includes(this.searchTerm) ||
                categoria.toLowerCase().includes(this.searchTerm)
            );
        });
    }

    // Renderizado de resultados de búsqueda con Bootstrap
    renderSearchResults() {
        const resultsContainer = document.getElementById("searchResults");
        if (!resultsContainer) return;

        const searchTerm = this.searchTerm
            ? this.searchTerm.toLowerCase().trim()
            : "";

        if (!searchTerm) {
            resultsContainer.innerHTML = "";
            return;
        }

        const allProducts = [...this.productos];
        const filteredProducts = allProducts.filter((product) => {
            const name = product.name ? product.name.toLowerCase() : "";
            const category = product.category
                ? product.category.toLowerCase()
                : "";
            return name.includes(searchTerm) || category.includes(searchTerm);
        });

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
                ).replace(/"/g, "&quot;")}); app.closeSearchModal();">
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

    // Renderizado de productos moderno
    renderProducts() {
        // Show loading skeletons first
        this.showLoadingSkeletons();
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            const filteredProducts = this.getFilteredAndSortedProducts();
            const ofertasGrid = document.getElementById("ofertasGrid");
            const productosGrid = document.getElementById("productosGrid");

            if (ofertasGrid && productosGrid) {
                // Render offers
                const ofertas = filteredProducts.filter(producto => producto.offer);
                ofertasGrid.innerHTML = ofertas.map(producto => this.renderProductCard(producto)).join("");

                // Render all products
                productosGrid.innerHTML = filteredProducts.map(producto => this.renderProductCard(producto)).join("");

                // Recreate icons
                lucide.createIcons();
                
                // Initialize animations
                this.initAnimations();
            }
        }, 300);
    }

    // ====== MÉTODO DE FILTRADO Y RENDERIZADO ======
    filterAndRenderProducts() {
        // Show loading skeletons first
        this.showLoadingSkeletons();
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            const filteredProducts = this.getFilteredAndSortedProducts();
            const ofertasGrid = document.getElementById("ofertasGrid");
            const productosGrid = document.getElementById("productosGrid");

            if (ofertasGrid && productosGrid) {
                // Render offers
                const ofertas = filteredProducts.filter(producto => producto.offer);
                ofertasGrid.innerHTML = ofertas.map(producto => this.renderProductCard(producto)).join("");

                // Render all products
                productosGrid.innerHTML = filteredProducts.map(producto => this.renderProductCard(producto)).join("");

                // Recreate icons
                lucide.createIcons();
                
                // Initialize animations
                this.initAnimations();
            }
        }, 300);
    }

    renderOfertas() {
        const grid = document.getElementById("ofertasGrid");
        if (!grid) return;

        // Usar productos filtrados en lugar de todos los productos
        const filteredProducts = this.getFilteredAndSortedProducts();
        const productosEnOferta = filteredProducts.filter(producto => producto.offer);

        grid.innerHTML = productosEnOferta
            .map(producto => this.renderProductCard(producto))
            .join("");

        // Reinicializar iconos después de actualizar el DOM
        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
    }

    renderProductos() {
        const grid = document.getElementById("productosGrid");
        if (!grid) return;
        
        // Usar productos filtrados en lugar de todos los productos
        const filteredProducts = this.getFilteredAndSortedProducts();
        
        grid.innerHTML = filteredProducts
            .map(producto => this.renderProductCard(producto))
            .join("");

        // Reinicializar iconos después de actualizar el DOM
        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
    }

    getFilteredAndSortedProducts() {
        let filteredProducts = this.productos;

        // Filter by category
        if (this.currentCategory !== 'todos') {
            filteredProducts = filteredProducts.filter(producto => 
                producto.category === this.currentCategory
            );
        }

        // Filter by search term
        if (this.searchTerm) {
            filteredProducts = filteredProducts.filter(producto =>
                producto.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                producto.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                (producto.brand && producto.brand.toLowerCase().includes(this.searchTerm.toLowerCase()))
            );
        }

        // Sort products
        switch (this.currentSort) {
            case 'name-asc':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'price-asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'category':
                filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
                break;
        }

        return filteredProducts;
    }

    renderProductCard(producto) {
        const isFavorite = this.favoritos.includes(producto.id);
        
        return `
            <div class="col">
                <div class="card product-card h-100">
                    <div class="product-image-container">
                        <img src="${producto.image}" class="card-img-top product-image" alt="${producto.name}" 
                             onerror="this.src='https://via.placeholder.com/300x200/f8f9fa/6c757d?text=${encodeURIComponent(producto.name)}'">
                        
                        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="app.toggleFavorito(${producto.id})" title="Agregar a favoritos">
                            <i data-lucide="${isFavorite ? 'heart' : 'heart'}" width="18" height="18" ${isFavorite ? 'fill="currentColor"' : ''}></i>
                        </button>
                        
                        ${producto.offer ? '<div class="offer-badge">¡Oferta!</div>' : ''}
                    </div>
                    <div class="card-body">
                        <h5 class="product-title">${producto.name}</h5>
                        <p class="product-category">${producto.category}</p>
                        <p class="product-description">${producto.description}</p>
                        
                        <div class="price-section">
                            <div class="price-badge mb-3">$${producto.price.toLocaleString()}</div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-outline-primary" onclick="app.showProductModal(${producto.id})">
                                    <i data-lucide="eye" width="16" height="16" class="me-2"></i>
                                    Ver Producto
                                </button>
                                <button class="btn btn-add-cart" onclick="app.addToCart(${producto.id})">
                                    <i data-lucide="shopping-cart" width="16" height="16" class="me-2"></i>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    showLoadingSkeletons() {
        const skeletonCard = `
            <div class="col">
                <div class="card product-card h-100">
                    <div class="skeleton skeleton-card"></div>
                </div>
            </div>
        `;
        
        const ofertasGrid = document.getElementById("ofertasGrid");
        const productosGrid = document.getElementById("productosGrid");
        
        if (ofertasGrid) {
            ofertasGrid.innerHTML = Array(4).fill(skeletonCard).join("");
        }
        
        if (productosGrid) {
            productosGrid.innerHTML = Array(8).fill(skeletonCard).join("");
        }
    }

    initAnimations() {
        // Add animation classes to elements as they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        });

        // Observe product cards
        document.querySelectorAll('.product-card').forEach(card => {
            observer.observe(card);
        });
    }

    // Gestión del carrito moderno
    addToCart(productId) {
        const producto = this.productos.find(p => p.id === productId);
        if (producto) {
            this.agregarAlCarrito(producto);
        }
    }

    // Método original mantenido para compatibilidad
    agregarAlCarrito(producto) {
        // Si recibimos solo un ID, buscar el producto
        if (typeof producto === 'number') {
            producto = this.productos.find(p => p.id === producto);
            if (!producto) {
                console.error("Producto no encontrado con ID:", producto);
                return;
            }
        }

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
        this.updateFavoritesModalIfOpen();
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
        if (!badge) {
            console.error('❌ No se encontró el elemento cartBadge');
            return;
        }
        
        const totalItems = this.carrito.reduce(
            (total, item) => total + item.cantidad,
            0
        );
        
        badge.textContent = totalItems;
        
        if (totalItems > 0) {
            badge.style.display = "flex";
            badge.style.visibility = "visible";
            // Agregar animación de pulso
            badge.classList.add('updated');
            setTimeout(() => {
                badge.classList.remove('updated');
            }, 600);
        } else {
            badge.style.display = "none";
            badge.style.visibility = "hidden";
        }
    }

    updateFavoritesBadge() {
        const badge = document.getElementById("favoritesBadge");
        if (!badge) {
            console.error('❌ No se encontró el elemento favoritesBadge');
            return;
        }
        
        const totalFavorites = this.favoritos.length;
        
        badge.textContent = totalFavorites;
        
        if (totalFavorites > 0) {
            badge.style.display = "flex";
            badge.style.visibility = "visible";
            // Agregar animación de pulso
            badge.classList.add('updated');
            setTimeout(() => {
                badge.classList.remove('updated');
            }, 600);
        } else {
            badge.style.display = "none";
            badge.style.visibility = "hidden";
        }
    }

    // Alias para compatibilidad
    updateCartCount() {
        this.updateCartBadge();
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

        // Agregar botón "Vaciar carrito" en la parte superior
        cartItems.innerHTML = `
        <div class="d-flex justify-content-end mb-3">
            <button type="button" class="btn btn-outline-danger btn-sm" onclick="app.vaciarCarrito()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2 me-1"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                Vaciar carrito
            </button>
        </div>
        `;

        // Añadir los productos del carrito
        cartItems.innerHTML += this.carrito
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>
                        </button>
                        <span class="btn btn-outline-secondary disabled">${item.cantidad}</span>
                        <button type="button" class="btn btn-outline-secondary" onclick="app.cambiarCantidad(${index}, 1)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        </button>
                    </div>
                    <button type="button" class="btn btn-outline-danger btn-sm" onclick="app.quitarDelCarrito(${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`
            )
            .join("");

    // Actualizar el total
    const total = this.calcularTotal();
    totalAmount.textContent = `$${total}`;

    // Mostrar formulario de checkout y botones
    cartFooter.innerHTML = `
        <form id="checkoutForm">
            <div class="mb-3">
                <label for="inputNombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="inputNombre" placeholder="Tu nombre" required>
            </div>
            <div class="mb-3">
                <label for="inputDireccion" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="inputDireccion" placeholder="Tu dirección" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Método de entrega</label>
                <div class="d-flex gap-3">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="metodoEntrega" id="radioDelivery" value="delivery" checked>
                        <label class="form-check-label" for="radioDelivery">🚚 Delivery</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="metodoEntrega" id="radioRetiro" value="retiro">
                        <label class="form-check-label" for="radioRetiro">🛍️ Retiro en el local</label>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Método de pago</label>
                <div class="payment-options">
                    <div class="form-check payment-check">
                        <input class="form-check-input" type="radio" name="metodoPago" id="radioEfectivo" value="efectivo" checked>
                        <label class="form-check-label payment-label" for="radioEfectivo">
                            <span class="payment-icon">💵</span>
                            <span class="payment-text">
                                <strong>Efectivo</strong>
                                <small class="text-muted d-block">Pago al recibir</small>
                            </span>
                        </label>
                    </div>
                    <div class="form-check payment-check">
                        <input class="form-check-input" type="radio" name="metodoPago" id="radioTarjeta" value="tarjeta">
                        <label class="form-check-label payment-label" for="radioTarjeta">
                            <span class="payment-icon">💳</span>
                            <span class="payment-text">
                                <strong>Tarjeta</strong>
                                <small class="text-muted d-block">Crédito/Débito en local</small>
                            </span>
                        </label>
                    </div>
                    <div class="form-check payment-check">
                        <input class="form-check-input" type="radio" name="metodoPago" id="radioMercadoPago" value="mercadopago">
                        <label class="form-check-label payment-label" for="radioMercadoPago">
                            <span class="payment-icon mp-icon">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48aJbIfTmWFQpJRKmAyKIwdrWrq8H1MVf1g&s" 
                                     alt="Mercado Pago" 
                                     class="mp-logo"
                                     onerror="this.src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png'">
                            </span>
                            <span class="payment-text">
                                <strong>Mercado Pago</strong>
                                <small class="text-muted d-block">Pago online seguro</small>
                            </span>
                        </label>
                    </div>
                </div>
                <div id="mercadoPagoInfo" class="mt-3" style="display: none;">
                    <div class="alert alert-info">
                        <div class="d-flex align-items-center">
                            <i data-lucide="info" width="20" height="20" class="me-2"></i>
                            <div>
                                <strong>Pago con Mercado Pago</strong>
                                <p class="mb-0 small">Te enviaremos un link de pago seguro por WhatsApp para que completes tu compra online.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end align-items-center mb-3">
                <span class="me-2 fw-bold">Total:</span>
                <span class="fs-4 fw-bold" id="totalAmount">$${total}</span>
            </div>
            <div class="d-flex flex-column gap-2 mt-3">
                <button type="button" class="btn btn-success w-100" id="whatsappBtn" onclick="window.open(app.generarMensajeWhatsApp(), '_blank')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle me-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    Enviar pedido por WhatsApp
                </button>
                <div id="mercadoPagoPayButton" style="display: none;">
                    <button type="button" class="btn btn-primary w-100" onclick="app.abrirMercadoPago()">
                        <span class="me-2">💙</span>
                        Pagar con Mercado Pago
                    </button>
                    <small class="text-muted text-center d-block mt-2">O envía el pedido por WhatsApp para recibir el link de pago</small>
                </div>
                <button type="button" class="btn btn-outline-secondary" id="clearDataBtn" onclick="app.borrarDatosGuardados()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser me-2"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                    Borrar datos guardados
                </button>
            </div>
        </form>
    `;

    // Cargar datos del cliente guardados
    this.cargarDatosCliente();
}

    // Método para vaciar el carrito completo
    vaciarCarrito() {
        // Confirmar antes de vaciar
        if (confirm('¿Estás seguro que deseas vaciar el carrito?')) {
            this.carrito = [];
            this.updateCartBadge();
            this.renderCartModal();

            // Mostrar notificación
            this.showAddToCartNotification('Carrito vaciado correctamente');
        }
    }

    // Método para borrar los datos guardados del cliente
    borrarDatosGuardados() {
        localStorage.removeItem("cliente_nombre");
        localStorage.removeItem("cliente_direccion");
        localStorage.removeItem("cliente_pago");

        // Limpiar los campos del formulario
        const nombreInput = document.getElementById("inputNombre");
        const direccionInput = document.getElementById("inputDireccion");
        const efectivoInput = document.getElementById("radioEfectivo");

        if (nombreInput) nombreInput.value = "";
        if (direccionInput) direccionInput.value = "";
        if (efectivoInput) efectivoInput.checked = true; // Volver al default
        
        // Ocultar info de Mercado Pago si está visible
        const mercadoPagoInfo = document.getElementById("mercadoPagoInfo");
        const mercadoPagoPayButton = document.getElementById("mercadoPagoPayButton");
        if (mercadoPagoInfo) mercadoPagoInfo.style.display = "none";
        if (mercadoPagoPayButton) mercadoPagoPayButton.style.display = "none";

        // Mostrar notificación
        this.showAddToCartNotification('Datos guardados eliminados');
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

        const nombreInput = document.getElementById("inputNombre");
        const direccionInput = document.getElementById("inputDireccion");
        const metodoEntrega = document.querySelector(
            "input[name='metodoEntrega']:checked"
        );
        const metodoPago = document.querySelector(
            "input[name='metodoPago']:checked"
        );

        const nombre = nombreInput ? nombreInput.value.trim() : "";
        const direccion = direccionInput ? direccionInput.value.trim() : "";
        const entrega = metodoEntrega ? metodoEntrega.value : "";
        const pago = metodoPago ? metodoPago.value : "";

        if (!nombre || !direccion || !entrega || !pago) {
            alert(
                "Por favor completá todos los campos: nombre, dirección, método de entrega y método de pago."
            );
            return "#";
        }

        localStorage.setItem("cliente_nombre", nombre);
        localStorage.setItem("cliente_direccion", direccion);
        localStorage.setItem("cliente_entrega", entrega);
        localStorage.setItem("cliente_pago", pago);

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
                `• Nombre: ${nombre}\n` +
                `• Dirección: ${direccion}\n` +
                `• Método de entrega: ${
                    entrega === "delivery"
                        ? "🚚 Delivery a domicilio"
                        : "🛍️ Retiro en el local"
                }\n` +
                `• Método de pago: ${
                    pago === "efectivo"
                        ? "💵 Efectivo"
                        : pago === "tarjeta"
                        ? "💳 Tarjeta de crédito/débito"
                        : "💙 Mercado Pago (link de pago online)"
                }\n\n` +
                (pago === "mercadopago" 
                    ? `🔗 *Link de pago de Mercado Pago:*\n${this.generarLinkMercadoPago()}\n\n`
                    : ""
                ) +
                `¡Gracias!`
        );

        const numeroWhatsApp = "5493517181975";
        const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

        // Mostrar mensaje de confirmación
        this.showOrderConfirmation();

        // Abrir WhatsApp y vaciar carrito, cerrar modal
        setTimeout(() => {
            this.carrito = [];
            this.renderCartModal();
            this.updateCartBadge(); // Corregido: era actualizarBadgeCarrito
            const modal = bootstrap.Modal.getInstance(
                document.getElementById("cartModal")
            );
            if (modal) modal.hide();
        }, 1000);

        return url;
    }

    // Función para generar link de pago de Mercado Pago
    generarLinkMercadoPago() {
        const total = this.calcularTotal();
        const descripcion = `Autoservicio Sagrado Corazón de Jesús`;
        
        // En una implementación real, aquí llamarías a tu backend que:
        // 1. Crearía una preferencia de pago en Mercado Pago
        // 2. Devolvería el link de pago
        
        // Por ahora, creamos un link de ejemplo funcional
        const preference = {
            items: this.carrito.map(item => ({
                title: item.nombre,
                quantity: item.cantidad,
                currency_id: "ARS",
                unit_price: item.precio
            })),
            payer: {
                name: document.getElementById("inputNombre")?.value || "Cliente",
                email: "cliente@email.com" // En producción, pedirías el email
            },
            back_urls: {
                success: window.location.href,
                failure: window.location.href,
                pending: window.location.href
            },
            auto_return: "approved",
            payment_methods: {
                excluded_payment_types: [],
                installments: 12
            },
            statement_descriptor: "AUTOSERVICIO SCJ",
            external_reference: `ORDER_${Date.now()}`
        };
        
        // En desarrollo, devolvemos un link de ejemplo
        // Reemplaza este link con tu link real de Mercado Pago
        const linkId = Math.random().toString(36).substr(2, 9);
        
        // URL de ejemplo - en producción sería tu link real de MP
        return `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${linkId}`;
        
        // NOTA: Para implementar realmente Mercado Pago:
        // 1. Registrate en https://www.mercadopago.com.ar/developers
        // 2. Obtén tus credenciales (Access Token)
        // 3. Crea un endpoint en tu backend que use la API de MP
        // 4. Reemplaza esta función para llamar a tu backend
    }

    // Función para abrir directamente Mercado Pago
    abrirMercadoPago() {
        // Validar datos del formulario
        const nombreInput = document.getElementById("inputNombre");
        const direccionInput = document.getElementById("inputDireccion");
        const metodoEntrega = document.querySelector("input[name='metodoEntrega']:checked");

        const nombre = nombreInput ? nombreInput.value.trim() : "";
        const direccion = direccionInput ? direccionInput.value.trim() : "";
        const entrega = metodoEntrega ? metodoEntrega.value : "";

        if (!nombre || !direccion || !entrega) {
            alert("Por favor completá todos los campos antes de proceder al pago.");
            return;
        }

        // Guardar datos
        localStorage.setItem("cliente_nombre", nombre);
        localStorage.setItem("cliente_direccion", direccion);
        localStorage.setItem("cliente_entrega", entrega);
        localStorage.setItem("cliente_pago", "mercadopago");

        // Generar link de Mercado Pago y abrirlo
        const linkPago = this.generarLinkMercadoPago();
        
        // Mostrar confirmación
        this.showOrderConfirmation();
        
        // Abrir link de pago en nueva ventana
        window.open(linkPago, '_blank');
        
        // Vaciar carrito y cerrar modal después de un delay
        setTimeout(() => {
            this.carrito = [];
            this.renderCartModal();
            this.updateCartBadge();
            const modal = bootstrap.Modal.getInstance(document.getElementById("cartModal"));
            if (modal) modal.hide();
        }, 2000);
    }

    // Añadir este nuevo método para mostrar la confirmación
    showOrderConfirmation() {
        // Crear el elemento de confirmación
        const confirmationElement = document.createElement('div');
        confirmationElement.className = 'order-confirmation';
        confirmationElement.innerHTML = `
            <div class="order-confirmation-content">
                <i data-lucide="check-circle" width="48" height="48" class="text-success"></i>
                <h4>¡Pedido enviado!</h4>
                <p>Tu pedido está siendo procesado.</p>
            </div>
        `;

        // Agregar estilos inline para el elemento
        confirmationElement.style.position = 'fixed';
        confirmationElement.style.top = '50%';
        confirmationElement.style.left = '50%';
        confirmationElement.style.transform = 'translate(-50%, -50%)';
        confirmationElement.style.background = 'white';
        confirmationElement.style.padding = '2rem';
        confirmationElement.style.borderRadius = '0.5rem';
        confirmationElement.style.boxShadow = '0 0.5rem 1rem rgba(0,0,0,0.15)';
        confirmationElement.style.zIndex = '9999';
        confirmationElement.style.textAlign = 'center';
        confirmationElement.style.opacity = '0';
        confirmationElement.style.transition = 'opacity 0.3s ease';

        // Agregar al DOM
        document.body.appendChild(confirmationElement);

        // Inicializar iconos
        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }

        // Mostrar con animación
        setTimeout(() => {
            confirmationElement.style.opacity = '1';
        }, 10);

        // Ocultar después de 3 segundos
        setTimeout(() => {
            confirmationElement.style.opacity = '0';
            setTimeout(() => {
                // Eliminar elemento después de la transición
                if (confirmationElement.parentNode) {
                    confirmationElement.parentNode.removeChild(confirmationElement);
                }
            }, 300);
        }, 3000);
    }

    // Cargar datos del cliente al iniciar
    cargarDatosCliente() {
        const nombre = localStorage.getItem("cliente_nombre") || "";
        const direccion = localStorage.getItem("cliente_direccion") || "";
        const pago = localStorage.getItem("cliente_pago") || "efectivo";
        
        const nombreInput = document.getElementById("inputNombre");
        const direccionInput = document.getElementById("inputDireccion");
        const pagoInput = document.querySelector(`input[name="metodoPago"][value="${pago}"]`);

        if (nombreInput) nombreInput.value = nombre;
        if (direccionInput) direccionInput.value = direccion;
        if (pagoInput) pagoInput.checked = true;
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

    // ====== MODAL DE PRODUCTO ======
    showProductModal(productId) {
        const producto = this.productos.find(p => p.id === productId);
        if (!producto) {
            console.error('Producto no encontrado:', productId);
            return;
        }

        // Actualizar contenido del modal
        document.getElementById('productModalTitle').textContent = producto.name;
        document.getElementById('productModalCategory').textContent = producto.category;
        document.getElementById('productModalDescription').textContent = producto.description;
        document.getElementById('productModalPrice').textContent = `$${producto.price.toLocaleString()}`;
        
        const modalImage = document.getElementById('productModalImage');
        modalImage.src = producto.image;
        modalImage.alt = producto.name;
        
        // Configurar badge de oferta
        const offerBadge = document.getElementById('productModalOffer');
        if (producto.offer) {
            offerBadge.style.display = 'block';
            // Mostrar precio original si está en oferta
            const originalPrice = Math.round(producto.price * 1.2); // Precio original estimado
            const originalPriceElement = document.getElementById('productModalOriginalPrice');
            if (originalPriceElement) {
                originalPriceElement.textContent = `$${originalPrice.toLocaleString()}`;
                originalPriceElement.style.display = 'inline';
            }
        } else {
            offerBadge.style.display = 'none';
            const originalPriceElement = document.getElementById('productModalOriginalPrice');
            if (originalPriceElement) {
                originalPriceElement.style.display = 'none';
            }
        }

        // Configurar botón de favoritos
        const favoriteBtn = document.getElementById('favoriteModalBtn');
        const isFavorite = this.favoritos.includes(producto.id);
        favoriteBtn.classList.toggle('active', isFavorite);
        
        // Reiniciar cantidad a 1
        document.getElementById('productQuantity').value = 1;
        
        // Configurar eventos del modal
        this.setupProductModalEvents(producto);
        
        // Mostrar modal
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
        
        // Recrear iconos
        lucide.createIcons();
    }

    setupProductModalEvents(producto) {
        // Botones de cantidad
        const decreaseBtn = document.getElementById('decreaseQty');
        const increaseBtn = document.getElementById('increaseQty');
        const quantityInput = document.getElementById('productQuantity');

        // Limpiar eventos anteriores
        decreaseBtn.replaceWith(decreaseBtn.cloneNode(true));
        increaseBtn.replaceWith(increaseBtn.cloneNode(true));
        
        // Obtener referencias actualizadas
        const newDecreaseBtn = document.getElementById('decreaseQty');
        const newIncreaseBtn = document.getElementById('increaseQty');

        newDecreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        newIncreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
            }
        });

        // Botón de favoritos
        const favoriteBtn = document.getElementById('favoriteModalBtn');
        favoriteBtn.replaceWith(favoriteBtn.cloneNode(true));
        
        document.getElementById('favoriteModalBtn').addEventListener('click', () => {
            this.toggleFavorito(producto.id);
            const isFavorite = this.favoritos.includes(producto.id);
            document.getElementById('favoriteModalBtn').classList.toggle('active', isFavorite);
            lucide.createIcons();
        });

        // Botón agregar al carrito
        const addToCartBtn = document.getElementById('addToCartModalBtn');
        addToCartBtn.replaceWith(addToCartBtn.cloneNode(true));
        
        document.getElementById('addToCartModalBtn').addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            for (let i = 0; i < quantity; i++) {
                this.addToCart(producto.id);
            }
            
            // Cerrar modal después de agregar
            const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
            modal.hide();
            
            // Mostrar notificación
            this.showAddToCartNotification(`${quantity} ${producto.name}(s) agregado(s) al carrito`);
        });

        // Botón comprar ahora
        const buyNowBtn = document.getElementById('buyNowBtn');
        buyNowBtn.replaceWith(buyNowBtn.cloneNode(true));
        
        document.getElementById('buyNowBtn').addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            
            // Agregar al carrito
            for (let i = 0; i < quantity; i++) {
                this.addToCart(producto.id);
            }
            
            // Cerrar modal de producto
            const productModal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
            productModal.hide();
            
            // Abrir modal del carrito después de un breve delay
            setTimeout(() => {
                const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
                cartModal.show();
            }, 300);
            
            // Mostrar notificación
            this.showAddToCartNotification(`${quantity} ${producto.name}(s) agregado(s) al carrito`);
        });
    }

    openFavoritesModal() {
        try {
            this.renderFavoritesModal();
            
            const modalElement = document.getElementById("favoritesModal");
            if (!modalElement) {
                console.error("❌ No se encontró el elemento del modal de favoritos");
                return;
            }
            
            const favoritesModal = new bootstrap.Modal(modalElement);
            favoritesModal.show();
        } catch (error) {
            console.error("❌ Error al abrir modal de favoritos:", error);
        }
    }

    // ====== FUNCIONES PARA EL MODAL DE FAVORITOS ======
    renderFavoritesModal() {
        const emptyFavorites = document.getElementById("emptyFavorites");
        const favoritesItems = document.getElementById("favoritesItems");
        const favoritesCount = document.getElementById("favoritesCount");
        const exportBtn = document.getElementById("exportFavoritesBtn");
        const clearBtn = document.getElementById("clearFavoritesBtn");

        // Verificar que todos los elementos existen
        if (!emptyFavorites || !favoritesItems || !favoritesCount) {
            console.error("Elementos del modal de favoritos no encontrados en el DOM");
            return;
        }

        // Actualizar contador
        favoritesCount.textContent = this.favoritos.length;

        if (this.favoritos.length === 0) {
            emptyFavorites.style.display = "block";
            favoritesItems.style.display = "none";
        } else {
            emptyFavorites.style.display = "none";
            favoritesItems.style.display = "block";
            
            // Renderizar productos favoritos
            const favoritosProductos = this.productos.filter(producto => 
                this.favoritos.includes(producto.id)
            );
            
            favoritesItems.innerHTML = favoritosProductos.map(producto => 
                this.createProductCard(producto, true)
            ).join('');
        }

        // Event listeners para botones de exportar y limpiar
        if (exportBtn) {
            exportBtn.onclick = () => this.exportFavorites();
        }
        
        if (clearBtn) {
            clearBtn.onclick = () => this.clearAllFavorites();
        }

        // Recrear iconos de Lucide
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 100);
    }

    // Función para actualizar el modal de favoritos si está abierto
    updateFavoritesModalIfOpen() {
        const favoritesModal = document.getElementById('favoritesModal');
        if (favoritesModal && favoritesModal.classList.contains('show')) {
            this.renderFavoritesModal();
        }
    }

    exportFavorites() {
        if (this.favoritos.length === 0) {
            this.showToast('Sin favoritos', 'No tienes productos favoritos para exportar', 'warning');
            return;
        }

        const favoritosProductos = this.productos.filter(producto => 
            this.favoritos.includes(producto.id)
        );

        // Crear datos para exportar
        const exportData = {
            fecha: new Date().toLocaleDateString('es-ES'),
            totalProductos: favoritosProductos.length,
            productos: favoritosProductos.map(producto => ({
                id: producto.id,
                nombre: producto.name,
                categoria: producto.category,
                precio: producto.price,
                marca: producto.brand || 'Sin marca',
                descripcion: producto.description
            }))
        };

        // Crear archivo JSON
        const jsonString = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Crear enlace de descarga
        const link = document.createElement('a');
        link.href = url;
        link.download = `favoritos_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        this.showToast('Favoritos exportados', `Se descargó el archivo con ${favoritosProductos.length} productos`, 'success');
    }

    clearAllFavorites() {
        if (this.favoritos.length === 0) {
            this.showToast('Sin favoritos', 'No tienes productos favoritos para limpiar', 'warning');
            return;
        }

        if (confirm(`¿Estás seguro que deseas eliminar todos los ${this.favoritos.length} productos favoritos?`)) {
            this.favoritos = [];
            this.saveFavoritos();
            this.updateFavoritesBadge();
            this.renderFavoritesModal();
            this.renderOfertas();
            this.renderProductos();
            
            this.showToast('Favoritos limpiados', 'Se eliminaron todos los productos favoritos', 'success');
        }
    }

    // Función auxiliar para crear tarjetas de producto (reutilizable)
    createProductCard(producto, isInFavoritesModal = false) {
        const isFavorite = this.favoritos.includes(producto.id);
        const cardClass = isInFavoritesModal ? 'product-card h-100 animate-fade-in-scale favorites-card' : 'product-card h-100 animate-fade-in-scale';
        
        return `
            <div class="col-md-6 col-lg-4 mb-3">
                <div class="${cardClass}">
                    ${producto.offer ? '<div class="offer-badge">¡Oferta!</div>' : ''}
                    ${isInFavoritesModal ? '<div class="favorite-indicator"><i data-lucide="heart" width="16" height="16"></i></div>' : ''}
                    <div class="product-image-container">
                        <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                                onclick="app.toggleFavorito(${producto.id})" 
                                title="${isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}">
                            <i data-lucide="heart" width="16" height="16"></i>
                        </button>
                        <img src="${producto.image}" 
                             alt="${producto.name}" 
                             class="product-image"
                             onerror="this.src='https://via.placeholder.com/200x200/f8f9fa/dc3545?text=Sin+Imagen'">
                    </div>
                    <div class="card-body">
                        <div class="product-category">${producto.category}</div>
                        <h6 class="product-title">${producto.name}</h6>
                        <p class="product-description">${producto.description}</p>
                        <div class="price-section">
                            <div class="price-badge">$${producto.price}</div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-outline-primary" onclick="app.showProductModal(${producto.id})">
                                    <i data-lucide="eye" width="16" height="16" class="me-1"></i>
                                    Ver Producto
                                </button>
                                <button class="btn btn-add-cart" onclick="app.agregarAlCarrito(${producto.id})">
                                    <i data-lucide="shopping-cart" width="16" height="16" class="me-1"></i>
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // ====== FUNCIONES DEL CARRUSEL ======
    initCarousel() {
        this.renderCarousel();
        this.startAutoSlide();
        this.setupCarouselEventListeners();
        this.updateAutoIndicator();
    }

    renderCarousel() {
        const carousel = document.getElementById('offersCarousel');
        const indicators = document.getElementById('carouselIndicators');
        
        if (!carousel || !indicators) return;

        // Obtener productos en oferta
        const ofertas = this.productos.filter(producto => producto.offer);
        
        if (ofertas.length === 0) {
            carousel.innerHTML = '<div class="text-center p-4"><p class="text-muted">No hay ofertas disponibles</p></div>';
            indicators.innerHTML = '';
            return;
        }

        // Renderizar slides
        carousel.innerHTML = ofertas.map((producto, index) => {
            const isFavorite = this.favoritos.includes(producto.id);
            return `
                <div class="carousel-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
                    <div class="offer-badge">¡OFERTA!</div>
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                            onclick="app.toggleFavorito(${producto.id})" 
                            title="${isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}">
                        <i data-lucide="heart" width="16" height="16"></i>
                    </button>
                    <img src="${producto.image}" 
                         alt="${producto.name}" 
                         class="carousel-slide-image"
                         onerror="this.src='https://via.placeholder.com/280x180/f8f9fa/dc3545?text=Oferta'">
                    <div class="carousel-slide-content">
                        <div class="carousel-slide-category">${producto.category}</div>
                        <h5 class="carousel-slide-title">${producto.name}</h5>
                        <p class="carousel-slide-description">${producto.description}</p>
                        <div class="carousel-slide-price">$${producto.price.toLocaleString()}</div>
                        <div class="carousel-slide-actions">
                            <button class="btn btn-outline-primary btn-sm" onclick="app.showProductModal(${producto.id})">
                                <i data-lucide="eye" width="14" height="14" class="me-1"></i>
                                Ver Producto
                            </button>
                            <button class="btn btn-add-cart btn-sm" onclick="app.agregarAlCarrito(${producto.id})">
                                <i data-lucide="shopping-cart" width="14" height="14" class="me-1"></i>
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Renderizar indicadores
        indicators.innerHTML = ofertas.map((_, index) => 
            `<div class="carousel-indicator ${index === 0 ? 'active' : ''}" data-slide="${index}"></div>`
        ).join('');

        // Agregar event listeners a los indicadores
        indicators.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Inicializar posición
        this.updateCarouselPosition();
        
        // Recrear iconos
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 100);
    }

    updateCarouselPosition() {
        const carousel = document.getElementById('offersCarousel');
        if (!carousel) return;

        const slides = carousel.querySelectorAll('.carousel-slide');
        const slideWidth = 280 + 24; // width + gap
        const offset = -this.currentSlide * slideWidth;
        
        carousel.style.transform = `translateX(${offset}px)`;

        // Actualizar indicadores
        document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });

        // Actualizar botones de navegación
        const prevBtn = document.getElementById('carouselPrev');
        const nextBtn = document.getElementById('carouselNext');
        
        if (prevBtn) prevBtn.disabled = this.currentSlide === 0;
        if (nextBtn) nextBtn.disabled = this.currentSlide >= slides.length - this.getSlidesPerView();
    }

    getSlidesPerView() {
        const width = window.innerWidth;
        if (width < 480) return 1;
        if (width < 768) return 2;
        if (width < 1024) return 3;
        return 4;
    }

    nextSlide() {
        const totalSlides = document.querySelectorAll('.carousel-slide').length;
        const maxSlide = Math.max(0, totalSlides - this.getSlidesPerView());
        
        if (this.currentSlide < maxSlide) {
            this.currentSlide++;
            this.updateCarouselPosition();
            this.resetAutoSlide();
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateCarouselPosition();
            this.resetAutoSlide();
        }
    }

    goToSlide(index) {
        const totalSlides = document.querySelectorAll('.carousel-slide').length;
        const maxSlide = Math.max(0, totalSlides - this.getSlidesPerView());
        
        this.currentSlide = Math.min(index, maxSlide);
        this.updateCarouselPosition();
        this.resetAutoSlide();
    }

    startAutoSlide() {
        if (!this.isAutoSliding) return;
        
        this.autoSlideInterval = setInterval(() => {
            const totalSlides = document.querySelectorAll('.carousel-slide').length;
            const maxSlide = Math.max(0, totalSlides - this.getSlidesPerView());
            
            if (this.currentSlide < maxSlide) {
                this.nextSlide();
            } else {
                this.currentSlide = 0;
                this.updateCarouselPosition();
            }
        }, 7000); // Cambiar slide cada 7 segundos (más despacio)
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }

    resetAutoSlide() {
        this.stopAutoSlide();
        if (this.isAutoSliding) {
            setTimeout(() => this.startAutoSlide(), 3000); // Pausa más larga después de interacción
        }
    }

    setupCarouselEventListeners() {
        const carousel = document.getElementById('offersCarousel');
        if (!carousel) return;

        // Pausar auto-slide al hover
        carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
        carousel.addEventListener('mouseleave', () => {
            if (this.isAutoSliding) this.startAutoSlide();
        });

        // Responsive: actualizar al cambiar tamaño de ventana
        window.addEventListener('resize', () => {
            this.updateCarouselPosition();
        });

        // Touch/swipe support para móviles
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.stopAutoSlide();
        });

        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
            e.preventDefault();
        });

        carousel.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const diff = startX - currentX;
            const threshold = 50;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
            
            this.resetAutoSlide();
        });
    }

    toggleAutoSlide() {
        this.isAutoSliding = !this.isAutoSliding;
        
        if (this.isAutoSliding) {
            this.startAutoSlide();
        } else {
            this.stopAutoSlide();
        }
        
        this.updateAutoIndicator();
    }

    updateAutoIndicator() {
        const autoIndicator = document.getElementById('autoIndicator');
        if (!autoIndicator) return;

        const icon = autoIndicator.querySelector('i');
        const text = autoIndicator.childNodes[autoIndicator.childNodes.length - 1];
        
        if (this.isAutoSliding) {
            if (icon) icon.setAttribute('data-lucide', 'play');
            if (text) text.textContent = ' Auto';
            autoIndicator.style.backgroundColor = 'rgba(34, 197, 94, 0.8)';
        } else {
            if (icon) icon.setAttribute('data-lucide', 'pause');
            if (text) text.textContent = ' Pausa';
            autoIndicator.style.backgroundColor = 'rgba(239, 68, 68, 0.8)';
        }
        
        // Recrear iconos
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 10);
    }
}

// Instanciar la aplicación una sola vez cuando el DOM esté listo
let app;

// Función para inicializar la aplicación
function initializeApp() {
    // Evitar múltiples inicializaciones
    if (app) {
        console.log('Aplicación ya inicializada');
        return;
    }
    
    // Verificar que el DOM esté completamente listo
    if (!document.getElementById('themeToggle')) {
        // Si elementos críticos no están listos, esperar un poco más
        console.log('DOM no está listo, esperando...');
        setTimeout(initializeApp, 100);
        return;
    }

    console.log('Inicializando aplicación...');
    app = new CatalogoApp();
    window.app = app;
}

// Inicialización robusta
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp);
} else if (document.readyState === "interactive" || document.readyState === "complete") {
    // DOM ya está listo
    setTimeout(initializeApp, 10);
} else {
    // Fallback
    setTimeout(initializeApp, 100);
}

// Inicialización adicional cuando Lucide esté disponible
function ensureLucideReady() {
    if (typeof lucide !== 'undefined') {
        // Solo recrear iconos, no llamar initTheme para evitar bucles
        lucide.createIcons();
    } else {
        setTimeout(ensureLucideReady, 100);
    }
}

// Esperar a que Lucide esté disponible
setTimeout(ensureLucideReady, 200);
