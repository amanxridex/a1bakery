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
// PASTEL GRID SCROLL REVEAL EFFECT
// ========================================
document.addEventListener(\'DOMContentLoaded\', () => {
    const section = document.getElementById(\'secretMenu\');
    const pastelGrid = document.getElementById(\'pastelGrid\');
    const instruction = document.getElementById(\'scrollInstruction\');
    if (!section || !pastelGrid) return;
    
    const boxes = Array.from(pastelGrid.querySelectorAll(\'\.pastel-box\'));
    
    window.addEventListener(\'scroll\', () => {
        const rect = section.getBoundingClientRect();
        // Calculate progress: 0 when top of section hits top of viewport, 1 when bottom hits top of viewport
        // Since section is 250vh and sticky container is 100vh, we have 150vh of scroll distance.
        
        let progress = 0;
        const scrollDistance = section.offsetHeight - window.innerHeight;
        
        if (rect.top <= 0) {
            progress = Math.abs(rect.top) / scrollDistance;
        }
        
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        
        // Hide instruction early on
        if (instruction) {
            instruction.style.opacity = progress > 0.05 ? \'0\' : \'1\';
        }
        
        // Reveal complete class for text
        if (progress > 0.8) {
            section.classList.add(\'reveal-complete\');
        } else {
            section.classList.remove(\'reveal-complete\');
        }
        
        // Animate boxes
        boxes.forEach((box, index) => {
            // Calculate direction to fly out
            const row = Math.floor(index / 3); // 0, 1, 2
            const col = index % 3; // 0, 1, 2
            
            // Normalize to -1, 0, 1 from center
            const dirX = col - 1;
            const dirY = row - 1;
            
            // If center box (0,0), it scales up massively or flies straight towards camera
            // Let\'s push center box up and scale it
            let moveX = dirX * progress * 150; // percentage to move
            let moveY = dirY * progress * 150;
            
            if (dirX === 0 && dirY === 0) {
                moveX = 0;
                moveY = progress * 200;
            }
            
            // Scale up as they move apart to ensure screen is covered initially and they expand
            const scale = 1 + (progress * 2);
            
            // Apply transform
            box.style.transform = \	ranslate(\%, \%) scale(\)\;
            
            // Fade them out at the very end to ensure they don\'t block clicks
            if (progress > 0.95) {
                box.style.opacity = \'0\';
                pastelGrid.style.pointerEvents = \'none\';
            } else {
                box.style.opacity = \'1\';
                pastelGrid.style.pointerEvents = \'auto\';
            }
        });
    });
});
