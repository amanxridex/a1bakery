// ========================================
// A1 BAKERY - HERO SLIDER LOGIC
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
});

