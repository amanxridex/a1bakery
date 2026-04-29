// ========================================
// A-ONE BAKERY - MAIN JAVASCRIPT
// Canada's Finest Bakery Chain
// ========================================

// Download Protection
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
    }
});

document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
    }
});

// Product Data
const products = [
    {
        id: 1,
        name: "Classic Sourdough",
        category: "bread",
        price: 8.99,
        image: "assets/newheader2.jpeg",
        description: "Our signature sourdough with a crispy crust and chewy interior. Fermented for 24 hours using our 50-year-old starter.",
        badge: "Best Seller",
        rating: 4.9,
        reviews: 234
    },
    {
        id: 2,
        name: "Butter Croissant",
        category: "pastry",
        price: 4.49,
        image: "assets/newheader2.jpeg",
        description: "Flaky, buttery layers of perfection. Made with 100% French butter and folded 27 times for ultimate flakiness.",
        badge: "Popular",
        rating: 4.8,
        reviews: 189
    },
    {
        id: 3,
        name: "Red Velvet Cake",
        category: "cake",
        price: 45.99,
        image: "assets/newheader2.jpeg",
        description: "Moist red velvet layers with cream cheese frosting. Perfect for celebrations and special occasions.",
        badge: "Top Rated",
        rating: 5.0,
        reviews: 156
    },
    {
        id: 4,
        name: "Chocolate Chip Cookie",
        category: "cookie",
        price: 3.99,
        image: "assets/newheader2.jpeg",
        description: "Gooey center with crispy edges, loaded with Belgian dark chocolate chunks and a hint of sea salt.",
        badge: null,
        rating: 4.7,
        reviews: 312
    },
    {
        id: 5,
        name: "Glazed Donut",
        category: "donut",
        price: 2.99,
        image: "assets/newheader2.jpeg",
        description: "Light and fluffy yeast donut with our signature vanilla glaze. A Canadian classic.",
        badge: "New",
        rating: 4.6,
        reviews: 278
    },
    {
        id: 6,
        name: "Apple Pie",
        category: "pie",
        price: 24.99,
        image: "assets/newheader2.jpeg",
        description: "Hand-peeled Ontario apples with cinnamon and nutmeg in a flaky all-butter crust.",
        badge: "Seasonal",
        rating: 4.8,
        reviews: 145
    },
    {
        id: 7,
        name: "Baguette Tradition",
        category: "bread",
        price: 5.99,
        image: "assets/newheader2.jpeg",
        description: "Authentic French baguette with a shattering crust and open crumb structure.",
        badge: null,
        rating: 4.7,
        reviews: 198
    },
    {
        id: 8,
        name: "Éclair au Chocolat",
        category: "pastry",
        price: 6.99,
        image: "assets/newheader2.jpeg",
        description: "Classic choux pastry filled with rich chocolate custard and topped with glossy ganache.",
        badge: "Chef's Pick",
        rating: 4.9,
        reviews: 167
    },
    {
        id: 9,
        name: "Wedding Cake (3-Tier)",
        category: "cake",
        price: 299.99,
        image: "assets/newheader2.jpeg",
        description: "Elegant 3-tier wedding cake with fondant finish and custom floral decorations.",
        badge: "Custom",
        rating: 5.0,
        reviews: 89
    },
    {
        id: 10,
        name: "Macaron Box (12pc)",
        category: "cookie",
        price: 24.99,
        image: "assets/newheader2.jpeg",
        description: "Assorted French macarons in 6 flavors: pistachio, raspberry, lemon, chocolate, vanilla, and coffee.",
        badge: "Gift Box",
        rating: 4.8,
        reviews: 234
    },
    {
        id: 11,
        name: "Boston Cream Donut",
        category: "donut",
        price: 3.49,
        image: "assets/newheader2.jpeg",
        description: "Filled with rich vanilla custard and topped with chocolate ganache. A Canadian favorite.",
        badge: null,
        rating: 4.7,
        reviews: 189
    },
    {
        id: 12,
        name: "Pumpkin Pie",
        category: "pie",
        price: 22.99,
        image: "assets/newheader2.jpeg",
        description: "Spiced pumpkin filling in our famous flaky crust. Perfect for Thanksgiving.",
        badge: "Seasonal",
        rating: 4.6,
        reviews: 134
    },
    {
        id: 13,
        name: "Ciabatta",
        category: "bread",
        price: 6.49,
        image: "assets/newheader2.jpeg",
        description: "Italian-style bread with a crispy crust and large, irregular holes inside.",
        badge: null,
        rating: 4.5,
        reviews: 112
    },
    {
        id: 14,
        name: "Pain au Chocolat",
        category: "pastry",
        price: 5.49,
        image: "assets/newheader2.jpeg",
        description: "Buttery croissant dough wrapped around two sticks of dark Belgian chocolate.",
        badge: "Popular",
        rating: 4.8,
        reviews: 245
    },
    {
        id: 15,
        name: "Cheesecake",
        category: "cake",
        price: 34.99,
        image: "assets/newheader2.jpeg",
        description: "New York style cheesecake with graham cracker crust and berry compote topping.",
        badge: null,
        rating: 4.7,
        reviews: 178
    },
    {
        id: 16,
        name: "Oatmeal Raisin",
        category: "cookie",
        price: 3.49,
        image: "assets/newheader2.jpeg",
        description: "Chewy oatmeal cookies with plump raisins and a hint of cinnamon.",
        badge: null,
        rating: 4.5,
        reviews: 156
    },
    {
        id: 17,
        name: "Maple Bacon Donut",
        category: "donut",
        price: 4.49,
        image: "assets/newheader2.jpeg",
        description: "Canadian maple glaze topped with crispy bacon bits. Sweet and savory perfection.",
        badge: "Canadian",
        rating: 4.9,
        reviews: 267
    },
    {
        id: 18,
        name: "Blueberry Pie",
        category: "pie",
        price: 23.99,
        image: "assets/newheader2.jpeg",
        description: "Bursting with wild Canadian blueberries in a lattice-top crust.",
        badge: null,
        rating: 4.7,
        reviews: 145
    }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('a1_cart')) || [];

// DOM Elements
const navbar = document.getElementById('navbar');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobile = document.getElementById('closeMobile');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const checkoutBtn = document.getElementById('checkoutBtn');
const placeOrderBtn = document.getElementById('placeOrderBtn');

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    updateCart();
    initEventListeners();
    
    // Page specific initializations
    if (document.getElementById('heroParticles')) initParticles();
    if (document.getElementById('testimonialsSlider')) initTestimonials();
    if (document.querySelector('.stat-num')) initCounters();
    if (document.getElementById('featuredSlider')) renderFeaturedProducts();
    
    if (document.getElementById('menuProducts')) {
        const urlParams = new URLSearchParams(window.location.search);
        const filterParam = urlParams.get('filter');
        if (filterParam) {
            document.querySelectorAll('.menu-filters li').forEach(li => {
                li.classList.toggle('active', li.dataset.filter === filterParam);
            });
        }
        renderMenuProducts(filterParam || 'all');
        initScrollEffects();
    } else {
        initScrollEffects();
    }
    
    if (document.getElementById('orderNumber') && localStorage.getItem('a1_last_order')) {
        document.getElementById('orderNumber').textContent = localStorage.getItem('a1_last_order');
    }
});

// ========================================
// PARTICLES
// ========================================
function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 20 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        container.appendChild(particle);
    }
}

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Category links from footer
    document.querySelectorAll('[data-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            // Only redirect if we're not on menu.html
            if (!window.location.pathname.includes('menu.html')) {
                const filter = link.getAttribute('data-filter');
                window.location.href = 'menu.html?filter=' + filter;
            }
        });
    });
}




// ========================================
// SCROLL EFFECTS
// ========================================
function initScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-header, .category-card, .product-card, .team-card, .location-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ========================================
// TESTIMONIALS SLIDER
// ========================================
function initTestimonials() {
    const cards = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.getElementById('testimonialDots');
    let current = 0;

    // Create dots
    cards.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        current = index;
    }

    // Auto slide
    setInterval(() => {
        current = (current + 1) % cards.length;
        goToSlide(current);
    }, 5000);
}

// ========================================
// ANIMATED COUNTERS
// ========================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-num');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (target >= 100 ? '+' : 'M+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// ========================================
// PRODUCT RENDERING
// ========================================
function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="product-action-btn" onclick="quickView(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="product-action-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description.substring(0, 60)}...</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

function renderFeaturedProducts() {
    const container = document.getElementById('featuredSlider');
    if (!container) return;

    const featured = products.slice(0, 6);
    container.innerHTML = featured.map(createProductCard).join('');
}

function renderMenuProducts(filter = 'all', maxPrice = 50, sort = 'popular') {
    const container = document.getElementById('menuProducts');
    if (!container) return;

    let filtered = products.filter(p => {
        const matchCategory = filter === 'all' || p.category === filter;
        const matchPrice = p.price <= maxPrice;
        return matchCategory && matchPrice;
    });

    // Sort
    switch (sort) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filtered.sort((a, b) => b.id - a.id);
            break;
        default:
            filtered.sort((a, b) => b.reviews - a.reviews);
    }

    document.getElementById('menuCount').textContent = `Showing ${filtered.length} items`;
    container.innerHTML = filtered.map(createProductCard).join('');
}

// ========================================
// MENU FILTERS
// ========================================
function filterMenuProducts() {
    const activeFilter = document.querySelector('.menu-filters li.active')?.dataset.filter || 'all';
    const maxPrice = document.getElementById('priceRange')?.value || 50;
    const sort = document.getElementById('sortSelect')?.value || 'popular';
    renderMenuProducts(activeFilter, maxPrice, sort);
}

// ========================================
// QUICK VIEW MODAL
// ========================================
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalBody.innerHTML = `
        <div class="modal-img">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-info">
            <span class="product-category">${product.category}</span>
            <h2>${product.name}</h2>
            <div class="modal-price">$${product.price.toFixed(2)}</div>
            <p>${product.description}</p>
            <div class="modal-meta">
                <div class="modal-meta-item">
                    <i class="fas fa-star"></i>
                    <span>${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="modal-meta-item">
                    <i class="fas fa-fire"></i>
                    <span>Fresh baked daily</span>
                </div>
                <div class="modal-meta-item">
                    <i class="fas fa-leaf"></i>
                    <span>Organic ingredients</span>
                </div>
            </div>
            <div class="modal-qty">
                <label>Quantity:</label>
                <div class="cart-item-actions">
                    <button class="qty-btn" onclick="this.nextElementSibling.value = Math.max(1, parseInt(this.nextElementSibling.value) - 1)">-</button>
                    <input type="number" value="1" min="1" id="modalQty" style="width: 50px; text-align: center; border: none; font-weight: 600;">
                    <button class="qty-btn" onclick="this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1">+</button>
                </div>
            </div>
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id}, parseInt(document.getElementById('modalQty').value)); closeModal();">
                    <i class="fas fa-shopping-bag"></i>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    `;

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// CART FUNCTIONS
// ========================================
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    saveCart();
    updateCart();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCart();
        }
    }
}

function saveCart() {
    localStorage.setItem('a1_cart', JSON.stringify(cart));
}

function updateCart() {
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
                <span>Add some delicious items!</span>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;

    // Update checkout
    updateCheckout();
}

function updateCheckout() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutTax = document.getElementById('checkoutTax');
    const checkoutTotal = document.getElementById('checkoutTotal');

    if (!checkoutItems) return;

    if (cart.length === 0) {
        checkoutItems.innerHTML = '<p style="color: var(--gray); text-align: center;">Your cart is empty</p>';
    } else {
        checkoutItems.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <span>${item.name} x${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.13;
    const total = subtotal + tax;

    if (checkoutSubtotal) checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (checkoutTax) checkoutTax.textContent = `$${tax.toFixed(2)}`;
    if (checkoutTotal) checkoutTotal.textContent = `$${total.toFixed(2)}`;
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
function initEventListeners() {
    // Cart sidebar
    cartBtn?.addEventListener('click', () => {
        cartSidebar?.classList.add('active');
        cartOverlay?.classList.add('active');
    });

    closeCart?.addEventListener('click', closeCartSidebar);
    cartOverlay?.addEventListener('click', closeCartSidebar);

    function closeCartSidebar() {
        cartSidebar?.classList.remove('active');
        cartOverlay?.classList.remove('active');
    }

    // Search
    searchBtn?.addEventListener('click', () => {
        searchOverlay?.classList.add('active');
        searchInput?.focus();
    });

    closeSearch?.addEventListener('click', () => {
        searchOverlay?.classList.remove('active');
        if (searchResults) searchResults.innerHTML = '';
        if (searchInput) searchInput.value = '';
    });

    searchInput?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            if (searchResults) searchResults.innerHTML = '';
            return;
        }

        const matches = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );

        searchResults.innerHTML = matches.map(p => `
            <div class="search-result-item" onclick="quickView(${p.id}); document.getElementById('searchOverlay').classList.remove('active');">
                <img src="${p.image}" alt="${p.name}">
                <div>
                    <h4 style="color: white; margin-bottom: 4px;">${p.name}</h4>
                    <p style="color: var(--primary); font-weight: 600;">$${p.price.toFixed(2)}</p>
                </div>
            </div>
        `).join('');
    });

    // Mobile menu
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu?.classList.add('active');
    });

    closeMobile?.addEventListener('click', () => {
        mobileMenu?.classList.remove('active');
    });

    // Modal
    modalClose?.addEventListener('click', closeModal);
    productModal?.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal();
    });

    // Menu filters
    document.querySelectorAll('.menu-filters li').forEach(li => {
        li.addEventListener('click', () => {
            document.querySelectorAll('.menu-filters li').forEach(l => l.classList.remove('active'));
            li.classList.add('active');
            filterMenuProducts();
        });
    });

    // Price range
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            document.getElementById('priceValue').textContent = `$${e.target.value}`;
            filterMenuProducts();
        });
    }

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', filterMenuProducts);
    }

    // Checkout
    checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!');
            return;
        }
        closeCartSidebar();
        window.location.href = 'checkout.html';
    });

    placeOrderBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!');
            return;
        }

        // Generate order number
        const orderNum = '#A1-' + Date.now().toString().slice(-6);
        localStorage.setItem('a1_last_order', orderNum);

        // Clear cart
        cart = [];
        saveCart();
        updateCart();

        window.location.href = 'success.html';
    });

    // Payment methods
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', () => {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
            method.classList.add('active');
        });
    });

    // Forms
    document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thank you for subscribing!');
        e.target.reset();
    });

    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Message sent successfully!');
        e.target.reset();
    });

    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            navigateToPage('menu');
            setTimeout(() => {
                document.querySelectorAll('.menu-filters li').forEach(li => {
                    li.classList.toggle('active', li.dataset.filter === category);
                });
                filterMenuProducts();
            }, 100);
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            searchOverlay.classList.remove('active');
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========================================
// FOOTER INTERACTIVE ICONS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const footerGrid = document.getElementById('footerInteractiveGrid');
    const icons = document.querySelectorAll('.interactive-icon-wrapper');
    
    if (!footerGrid || icons.length === 0) return;

    // 1. Pop out when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Staggered pop-in animation
                icons.forEach((icon, index) => {
                    setTimeout(() => {
                        icon.classList.add('popped');
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(footerGrid);

    // 2. Dodge the cursor
    footerGrid.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        icons.forEach(icon => {
            if (!icon.classList.contains('popped')) return;

            const rect = icon.getBoundingClientRect();
            // Calculate center of the icon
            const iconX = rect.left + rect.width / 2;
            const iconY = rect.top + rect.height / 2;

            const distX = mouseX - iconX;
            const distY = mouseY - iconY;
            const distance = Math.sqrt(distX * distX + distY * distY);

            // If mouse is within 150px, dodge away
            const interactionRadius = 150;
            if (distance < interactionRadius && distance > 0) {
                const force = (interactionRadius - distance) / interactionRadius; 
                const maxPush = 100;
                
                const pushX = -(distX / distance) * maxPush * force;
                const pushY = -(distY / distance) * maxPush * force;

                icon.style.setProperty('--tx', `${pushX}px`);
                icon.style.setProperty('--ty', `${pushY}px`);
            } else {
                icon.style.setProperty('--tx', `0px`);
                icon.style.setProperty('--ty', `0px`);
            }
        });
    });

    // Reset when mouse leaves grid
    footerGrid.addEventListener('mouseleave', () => {
        icons.forEach(icon => {
            icon.style.setProperty('--tx', `0px`);
            icon.style.setProperty('--ty', `0px`);
        });
    });
});

