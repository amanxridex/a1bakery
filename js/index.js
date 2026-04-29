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
// PASTEL GRID SCROLL REVEAL EFFECT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('secretMenu');
    const pastelGrid = document.getElementById('pastelGrid');
    const instruction = document.getElementById('scrollInstruction');
    if (!section || !pastelGrid) return;
    
    const boxes = Array.from(pastelGrid.querySelectorAll('.pastel-box'));
    
    window.addEventListener('scroll', () => {
        const rect = section.getBoundingClientRect();
        
        let progress = 0;
        const scrollDistance = section.offsetHeight - window.innerHeight;
        
        if (rect.top <= 0) {
            progress = Math.abs(rect.top) / scrollDistance;
        }
        
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        
        if (instruction) {
            instruction.style.opacity = progress > 0.05 ? '0' : '1';
        }
        
        if (progress > 0.8) {
            section.classList.add('reveal-complete');
        } else {
            section.classList.remove('reveal-complete');
        }
        
        boxes.forEach((box, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            
            const dirX = col - 1;
            const dirY = row - 1;
            
            let moveX = dirX * progress * 150;
            let moveY = dirY * progress * 150;
            
            if (dirX === 0 && dirY === 0) {
                moveX = 0;
                moveY = progress * 200;
            }
            
            const scale = 1 + (progress * 2);
            
            box.style.transform = `translate(${moveX}%, ${moveY}%) scale(${scale})`;
            
            if (progress > 0.95) {
                box.style.opacity = '0';
                pastelGrid.style.pointerEvents = 'none';
            } else {
                box.style.opacity = '1';
                pastelGrid.style.pointerEvents = 'auto';
            }
        });
    });
});
