// ========================================
// A-ONE BAKERY - HERO SLIDER LOGIC
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtns = document.querySelectorAll('.slider-arrow.prev');
    const nextBtns = document.querySelectorAll('.slider-arrow.next');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    let slideInterval;

    const heroSlider = document.querySelector('.hero-slider');

    function showSlide(index) {
        // Handle wrap-around
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        // Apply sliding transform
        if (heroSlider) {
            heroSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        
        // Update dots in ALL slides to stay in sync
        const allDots = document.querySelectorAll('.slider-dots');
        allDots.forEach(dotContainer => {
            const dotsInContainer = dotContainer.querySelectorAll('.dot');
            dotsInContainer.forEach((dot, i) => {
                if (i === currentSlide) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoSlide() {
        stopAutoSlide();
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        if (slideInterval) clearInterval(slideInterval);
    }

    // Event Listeners
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            nextSlide();
            startAutoSlide(); // Reset timer
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            prevSlide();
            startAutoSlide(); // Reset timer
        });
    });

    // Dots interaction
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Each dot container has the same number of dots
            // The index here is absolute across all containers, but we want the relative index
            const dotsInContainer = dot.parentElement.querySelectorAll('.dot');
            const relativeIndex = Array.from(dotsInContainer).indexOf(dot);
            showSlide(relativeIndex);
            startAutoSlide();
        });
    });

    // Initial Start
    startAutoSlide();

    // ========================================
    // CATEGORIES SLIDER (CAROUSEL)
    // ========================================
    const catSlider = document.getElementById('categoriesSlider');
    const prevCatBtn = document.getElementById('prevCat');
    const nextCatBtn = document.getElementById('nextCat');
    const wrapper = document.querySelector('.categories-slider-wrapper');

    if (catSlider && prevCatBtn && nextCatBtn) {
        const scrollAmount = 330; // Card width (300) + gap (30)

        nextCatBtn.addEventListener('click', () => {
            wrapper.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevCatBtn.addEventListener('click', () => {
            wrapper.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }
    // ========================================
    // FEATURED PRODUCTS SLIDER
    // ========================================
    const favSlider = document.getElementById('featuredSlider');
    const prevFavBtn = document.getElementById('prevFav');
    const nextFavBtn = document.getElementById('nextFav');
    const favWrapper = document.querySelector('.featured-slider-wrapper');

    if (favSlider && prevFavBtn && nextFavBtn) {
        const scrollAmount = 310; // Card width (280) + gap (30)

        nextFavBtn.addEventListener('click', () => {
            const isAtEnd = favWrapper.scrollLeft + favWrapper.offsetWidth >= favWrapper.scrollWidth - 10;
            if (isAtEnd) {
                favWrapper.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                favWrapper.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        });

        prevFavBtn.addEventListener('click', () => {
            const isAtStart = favWrapper.scrollLeft <= 10;
            if (isAtStart) {
                favWrapper.scrollTo({
                    left: favWrapper.scrollWidth,
                    behavior: 'smooth'
                });
            } else {
                favWrapper.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            }
        });
    }
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

// ========================================
// SECRET MENU FROSTED GLASS EFFECT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('frostedCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const section = document.getElementById('secretMenu');
    
    function resizeCanvas() {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
        fillFrostedGlass();
    }
    
    function fillFrostedGlass() {
        if (section.classList.contains('reveal-complete')) return;
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = 'rgba(245, 245, 245, 0.98)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    let isDrawing = false;
    let strokeCount = 0;
    const requiredStrokes = Math.min((canvas.width * canvas.height) / 10000, 100); // Dynamic threshold
    
    function getMousePos(e) {
        const rect = canvas.getBoundingClientRect();
        if (e.touches && e.touches.length > 0) {
            return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
        }
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    
    function scratch(e) {
        if (!isDrawing) return;
        if (e.cancelable) e.preventDefault();
        
        section.classList.add('wiping');
        
        const pos = getMousePos(e);
        ctx.globalCompositeOperation = 'destination-out';
        
        // Draw soft brush
        const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 80);
        gradient.addColorStop(0, 'rgba(0,0,0,1)');
        gradient.addColorStop(0.8, 'rgba(0,0,0,0.8)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 80, 0, Math.PI * 2);
        ctx.fill();
        
        strokeCount++;
        if (strokeCount > requiredStrokes) {
            completeReveal();
        }
    }
    
    function completeReveal() {
        isDrawing = false;
        section.classList.add('reveal-complete');
        canvas.removeEventListener('mousemove', scratch);
        canvas.removeEventListener('touchmove', scratch);
    }
    
    canvas.addEventListener('mousedown', (e) => { isDrawing = true; scratch(e); });
    canvas.addEventListener('touchstart', (e) => { isDrawing = true; scratch(e); }, { passive: false });
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('touchmove', scratch, { passive: false });
    canvas.addEventListener('mouseup', () => { isDrawing = false; });
    canvas.addEventListener('touchend', () => { isDrawing = false; });
    canvas.addEventListener('mouseleave', () => { isDrawing = false; });
});
