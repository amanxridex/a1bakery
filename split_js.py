import os
import re

js_content = open('js/index.js', 'r', encoding='utf-8').read()

# 1. Remove SPA routing logic
# We must remove the [data-page] click event listener and navigateToPage function
routing_pattern = re.compile(r'// Page routing.*?\}\);', re.DOTALL)
js_content = routing_pattern.sub('', js_content)

navigate_pattern = re.compile(r'function navigateToPage\(pageId\).*?\}\n', re.DOTALL)
js_content = navigate_pattern.sub('', js_content)

# Fix Category links from footer - they used to call navigateToPage
# We change them to just redirect to menu.html?filter=category
category_links_pattern = re.compile(r"// Category links from footer.*?\}\);\n    \}\);", re.DOTALL)
js_content = category_links_pattern.sub(r"""// Category links from footer
    document.querySelectorAll('[data-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            // Only redirect if we're not on menu.html
            if (!window.location.pathname.includes('menu.html')) {
                const filter = link.getAttribute('data-filter');
                window.location.href = 'menu.html?filter=' + filter;
            }
        });
    });""", js_content)
    
# Fix checkoutBtn click
checkout_btn_pattern = re.compile(r"checkoutBtn\.addEventListener\('click', \(\) => \{.*?navigateToPage\('checkout'\);\n    \}\);", re.DOTALL)
js_content = checkout_btn_pattern.sub(r"""checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!');
            return;
        }
        closeCartSidebar();
        window.location.href = 'checkout.html';
    });""", js_content)
    
# Fix placeOrderBtn click
place_order_btn_pattern = re.compile(r"placeOrderBtn\.addEventListener\('click', \(\) => \{.*?navigateToPage\('success'\);\n    \}\);", re.DOTALL)
js_content = place_order_btn_pattern.sub(r"""placeOrderBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!');
            return;
        }

        // Generate order number
        const orderNum = '#MB-' + Date.now().toString().slice(-6);
        localStorage.setItem('maison_last_order', orderNum);

        // Clear cart
        cart = [];
        saveCart();
        updateCart();

        window.location.href = 'success.html';
    });""", js_content)
    
# We need to run filterMenuProducts if there's a URL parameter when loading menu.html
init_pattern = re.compile(r'document\.addEventListener\(\'DOMContentLoaded\', \(\) => \{.*?\}\);', re.DOTALL)
js_content = init_pattern.sub(r"""document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    updateCart();
    initEventListeners();
    
    // Page specific initializations
    if (document.getElementById('heroParticles')) initParticles();
    if (document.getElementById('testimonialsSlider')) initTestimonials();
    if (document.querySelector('.stat-num')) initCounters();
    if (document.getElementById('featuredProducts')) renderFeaturedProducts();
    
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
    
    if (document.getElementById('orderNumber') && localStorage.getItem('maison_last_order')) {
        document.getElementById('orderNumber').textContent = localStorage.getItem('maison_last_order');
    }
});""", js_content)

# Now, write the global JS file.
with open('js/global.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
    
# Create empty placeholder files for the other JS files just to satisfy the `<script>` tags
# Since we refactored it to just run automatically based on DOM elements.
for name in ['index', 'menu', 'about', 'contact', 'checkout', 'success']:
    with open(f'js/{name}.js', 'w', encoding='utf-8') as f:
        f.write(f"// Page specific logic for {name}.html\n")

print("JS split and refactor completed successfully.")
