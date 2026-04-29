// ========================================
// A-ONE BAKERY - MENU PAGE JAVASCRIPT
// Independent | No Global Dependencies
// ========================================

// Product Data
const products = [
    {
        id: 1,
        name: "Classic Sourdough",
        category: "bread",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1589367920969-ab8e050bdda4?auto=format&fit=crop&q=80&w=800",
        description: "Our signature sourdough with a crispy crust and chewy interior. Fermented for 24 hours using our 29-year-old starter.",
        badge: "Best Seller",
        badgeType: "popular",
        rating: 4.9,
        reviews: 234
    },
    {
        id: 2,
        name: "Butter Croissant",
        category: "pastry",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=800",
        description: "Flaky, buttery layers of perfection. Made with 100% French butter and folded 27 times for ultimate flakiness.",
        badge: "Popular",
        badgeType: "popular",
        rating: 4.8,
        reviews: 189
    },
    {
        id: 3,
        name: "Red Velvet Cake",
        category: "cake",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&q=80&w=800",
        description: "Moist red velvet layers with cream cheese frosting. Perfect for celebrations and special occasions.",
        badge: "Top Rated",
        badgeType: "popular",
        rating: 5.0,
        reviews: 156
    },
    {
        id: 4,
        name: "Chocolate Chip Cookie",
        category: "cookie",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800",
        description: "Gooey center with crispy edges, loaded with Belgian dark chocolate chunks and a hint of sea salt.",
        badge: null,
        badgeType: null,
        rating: 4.7,
        reviews: 312
    },
    {
        id: 5,
        name: "Glazed Donut",
        category: "donut",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
        description: "Light and fluffy yeast donut with our signature vanilla glaze. A Canadian classic.",
        badge: "New",
        badgeType: "new",
        rating: 4.6,
        reviews: 278
    },
    {
        id: 6,
        name: "Apple Pie",
        category: "pie",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&q=80&w=800",
        description: "Hand-peeled Ontario apples with cinnamon and nutmeg in a flaky all-butter crust.",
        badge: "Seasonal",
        badgeType: "new",
        rating: 4.8,
        reviews: 145
    },
    {
        id: 7,
        name: "Baguette Tradition",
        category: "bread",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1597079910443-60c43fc4f729?auto=format&fit=crop&q=80&w=800",
        description: "Authentic French baguette with a shattering crust and open crumb structure.",
        badge: null,
        badgeType: null,
        rating: 4.7,
        reviews: 198
    },
    {
        id: 8,
        name: "Éclair au Chocolat",
        category: "pastry",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80&w=800",
        description: "Classic choux pastry filled with rich chocolate custard and topped with glossy ganache.",
        badge: "Chef's Pick",
        badgeType: "popular",
        rating: 4.9,
        reviews: 167
    },
    {
        id: 9,
        name: "Wedding Cake (3-Tier)",
        category: "cake",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800",
        description: "Elegant 3-tier wedding cake with fondant finish and custom floral decorations.",
        badge: "Custom",
        badgeType: "new",
        rating: 5.0,
        reviews: 89
    },
    {
        id: 10,
        name: "Macaron Box (12pc)",
        category: "cookie",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800",
        description: "Assorted French macarons in 6 flavors: pistachio, raspberry, lemon, chocolate, vanilla, and coffee.",
        badge: "Gift Box",
        badgeType: "popular",
        rating: 4.8,
        reviews: 234
    },
    {
        id: 11,
        name: "Boston Cream Donut",
        category: "donut",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?auto=format&fit=crop&q=80&w=800",
        description: "Filled with rich vanilla custard and topped with chocolate ganache. A Canadian favorite.",
        badge: null,
        badgeType: null,
        rating: 4.7,
        reviews: 189
    },
    {
        id: 12,
        name: "Pumpkin Pie",
        category: "pie",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?auto=format&fit=crop&q=80&w=800",
        description: "Spiced pumpkin filling in our famous flaky crust. Perfect for Thanksgiving.",
        badge: "Seasonal",
        badgeType: "new",
        rating: 4.6,
        reviews: 134
    },
    {
        id: 13,
        name: "Ciabatta",
        category: "bread",
        price: 6.49,
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800",
        description: "Italian-style bread with a crispy crust and large, irregular holes inside.",
        badge: null,
        badgeType: null,
        rating: 4.5,
        reviews: 112
    },
    {
        id: 14,
        name: "Pain au Chocolat",
        category: "pastry",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=800",
        description: "Buttery croissant dough wrapped around two sticks of dark Belgian chocolate.",
        badge: "Popular",
        badgeType: "popular",
        rating: 4.8,
        reviews: 245
    },
    {
        id: 15,
        name: "Cheesecake",
        category: "cake",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800",
        description: "New York style cheesecake with graham cracker crust and berry compote topping.",
        badge: null,
        badgeType: null,
        rating: 4.7,
        reviews: 178
    },
    {
        id: 16,
        name: "Oatmeal Raisin",
        category: "cookie",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=800",
        description: "Chewy oatmeal cookies with plump raisins and a hint of cinnamon.",
        badge: null,
        badgeType: null,
        rating: 4.5,
        reviews: 156
    },
    {
        id: 17,
        name: "Maple Bacon Donut",
        category: "donut",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1552072805-2a9039d00e85?auto=format&fit=crop&q=80&w=800",
        description: "Canadian maple glaze topped with crispy bacon bits. Sweet and savory perfection.",
        badge: "Canadian",
        badgeType: "popular",
        rating: 4.9,
        reviews: 267
    },
    {
        id: 18,
        name: "Blueberry Pie",
        category: "pie",
        price: 23.99,
        image: "https://images.unsplash.com/photo-1601000938259-9e9200199226?auto=format&fit=crop&q=80&w=800",
        description: "Bursting with wild Canadian blueberries in a lattice-top crust.",
        badge: null,
        badgeType: null,
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
const cartItemsContainer = document.getElementById('cartItems');
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

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initEventListeners();
    updateCart();

    // Check URL params for filter
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');

    if (filterParam) {
        document.querySelectorAll('.cat-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.filter === filterParam);
        });
        renderProducts(filterParam);
    } else {
        renderProducts('all');
    }
});

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
}

// ========================================
// PRODUCT RENDERING
// ========================================
function createProductCard(product, index) {
    const badgeClass = product.badgeType === 'new' ? 'badge-new' : 
                       product.badgeType === 'popular' ? 'badge-popular' : '';
    
    const categoryEmojis = {
        bread: '🥖',
        pastry: '🥐',
        cake: '🍰',
        cookie: '🍪',
        donut: '🍩',
        pie: '🥧'
    };

    return `
        <div class="product-card" data-id="${product.id}" style="animation-delay: ${index * 0.05}s">
            ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="product-action-btn" onclick="quickView(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="product-action-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">
                    <span>${categoryEmojis[product.category] || '🧁'}</span>
                    ${product.category}
                </span>
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description.substring(0, 70)}...</p>
                <div class="product-footer">
                    <span class="product-price">
                        <span class="price-currency">$</span>${product.price.toFixed(2)}
                    </span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderProducts(filter = 'all', maxPrice = 50, sort = 'popular') {
    const container = document.getElementById('menuProducts');
    const emptyState = document.getElementById('emptyProducts');
    const countBadge = document.getElementById('menuCountBadge');

    if (!container) return;

    let filtered = products.filter(p => {
        const matchCategory = filter === 'all' || p.category === filter;
        const matchPrice = p.price <= maxPrice;
        return matchCategory && matchPrice;
    });

    // Sort
    switch(sort) {
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

    // Update count
    const menuCountEl = document.getElementById('menuCount');
    if (menuCountEl) {
        menuCountEl.textContent = filter === 'all' ? 'Showing all items' : `Showing ${filtered.length} ${filter}(s)`;
    }
    if (countBadge) countBadge.textContent = filtered.length;

    if (filtered.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        container.innerHTML = filtered.map((p, i) => createProductCard(p, i)).join('');
    }
}

function filterByCategory(category) {
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === category);
    });
    const maxPrice = document.getElementById('priceRange')?.value || 50;
    const sort = document.getElementById('sortSelect')?.value || 'popular';
    renderProducts(category, maxPrice, sort);
    
    // Scroll to products
    document.querySelector('.menu-content-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetFilters() {
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === 'all');
    });
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const sortSelect = document.getElementById('sortSelect');
    
    if (priceRange) priceRange.value = 50;
    if (priceValue) priceValue.textContent = '$50';
    if (sortSelect) sortSelect.value = 'popular';
    
    renderProducts('all');
}

// ========================================
// QUICK VIEW MODAL
// ========================================
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const categoryEmojis = {
        bread: '🥖', pastry: '🥐', cake: '🍰',
        cookie: '🍪', donut: '🍩', pie: '🥧'
    };

    if (modalBody) {
        modalBody.innerHTML = `
            <div class="modal-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-info">
                <span class="product-category">
                    <span>${categoryEmojis[product.category] || '🧁'}</span>
                    ${product.category}
                </span>
                <h2>${product.name}</h2>
                <div class="modal-price">$${product.price.toFixed(2)}</div>
                <p>${product.description}</p>
                <div class="modal-meta">
                    <div class="modal-meta-item">
                        <i class="fas fa-star"></i>
                        <span>Rating: ${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-truck"></i>
                        <span>Local Pickup & Delivery Available</span>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal();">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }

    productModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    productModal?.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// CART LOGIC
// ========================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
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

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
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
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-emoji">🧺</div>
                <p>Your cart is empty</p>
                <span>Add some delicious items!</span>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${(item.price * item.quantity).toFixed(2)}</p>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
    
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = count;
}

// ========================================
// UTILS
// ========================================
function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

function initEventListeners() {
    // Tabs
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            filterByCategory(tab.dataset.filter);
        });
    });

    // Price Range
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = `$${e.target.value}`;
            const activeFilter = document.querySelector('.cat-tab.active')?.dataset.filter || 'all';
            const sort = document.getElementById('sortSelect')?.value || 'popular';
            renderProducts(activeFilter, e.target.value, sort);
        });
    }

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const activeFilter = document.querySelector('.cat-tab.active')?.dataset.filter || 'all';
            const maxPrice = document.getElementById('priceRange')?.value || 50;
            renderProducts(activeFilter, maxPrice, e.target.value);
        });
    }

    // Search
    searchBtn?.addEventListener('click', () => searchOverlay?.classList.add('active'));
    closeSearch?.addEventListener('click', () => searchOverlay?.classList.remove('active'));
    
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

        if (searchResults) {
            searchResults.innerHTML = matches.map(p => `
                <div class="search-result-item" onclick="quickView(${p.id}); document.getElementById('searchOverlay').classList.remove('active');">
                    <img src="${p.image}" alt="${p.name}">
                    <div>
                        <h4>${p.name}</h4>
                        <p>$${p.price.toFixed(2)}</p>
                    </div>
                </div>
            `).join('');
        }
    });

    // Cart
    cartBtn?.addEventListener('click', () => {
        cartSidebar?.classList.add('active');
        cartOverlay?.classList.add('active');
    });

    const closeCartElements = [closeCart, cartOverlay];
    closeCartElements.forEach(el => {
        el?.addEventListener('click', () => {
            cartSidebar?.classList.remove('active');
            cartOverlay?.classList.remove('active');
        });
    });

    // Modal
    modalClose?.addEventListener('click', closeModal);
    productModal?.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal();
    });

    // Mobile Menu
    mobileMenuBtn?.addEventListener('click', () => mobileMenu?.classList.add('active'));
    closeMobile?.addEventListener('click', () => mobileMenu?.classList.remove('active'));

    // Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('🧁 Welcome to the family! Check your inbox soon.');
        e.target.reset();
    });

    // Checkout
    checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!');
            return;
        }
        window.location.href = 'checkout.html';
    });
}
