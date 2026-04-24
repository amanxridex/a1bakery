// Hamburger Menu Logic
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });
}

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
}

// Close menu on link click
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Smooth Scrolling with Lenis
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Update ScrollTrigger when Lenis scrolls
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
});

gsap.ticker.lagSmoothing(0, 0);

// Global Toggle Actions for ScrollTrigger
// "play none none reverse" means: play on enter, reverse on leave back
const defaultToggleActions = "play none none reverse";

// 1. Hero Section
gsap.from(".hero-header-top h1 .word-wrap", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power4.out",
    delay: 0.1
});

gsap.from(".steam-icon-heading", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    delay: 0.8,
    ease: "back.out(1.7)"
});

gsap.from(".hero-subtitle, .hero-desc, .hero-btns", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.4
});

gsap.from(".hero-image", {
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.2
});

gsap.from(".cookie-doodle", {
    rotation: -45,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "back.out(1.7)"
});

// 2. Delight Section
gsap.from(".delight-image", {
    scrollTrigger: {
        trigger: ".delight-section",
        start: "top 80%",
        toggleActions: defaultToggleActions
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".delight-text h2, .featured-item-title, .featured-card, .delight-desc", {
    scrollTrigger: {
        trigger: ".delight-text",
        start: "top 80%",
        toggleActions: defaultToggleActions
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});

// 3. Products Section
gsap.from(".products-header h2, .pills-container .pill", {
    scrollTrigger: {
        trigger: ".products-section",
        start: "top 85%",
        toggleActions: defaultToggleActions
    },
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
});

gsap.from(".product-card", {
    scrollTrigger: {
        trigger: ".products-grid",
        start: "top 80%",
        toggleActions: defaultToggleActions
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
});

// 4. Art Section
gsap.from(".art-section", {
    scrollTrigger: {
        trigger: ".art-section",
        start: "top 80%",
        toggleActions: defaultToggleActions
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".art-content > *", {
    scrollTrigger: {
        trigger: ".art-content",
        start: "top 70%",
        toggleActions: defaultToggleActions
    },
    x: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

// 5. Special Section
gsap.from(".special-header > *", {
    scrollTrigger: {
        trigger: ".special-section",
        start: "top 80%",
        toggleActions: defaultToggleActions
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".special-card", {
    scrollTrigger: {
        trigger: ".special-grid",
        start: "top 70%",
        toggleActions: defaultToggleActions
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.2)"
});

// 6. Reviews Section
gsap.from(".reviews-container", {
    scrollTrigger: {
        trigger: ".reviews-section",
        start: "top 85%",
        toggleActions: defaultToggleActions
    },
    scale: 0.95,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".reviews-left > *, .rating-box, .review-tag", {
    scrollTrigger: {
        trigger: ".reviews-container",
        start: "top 70%",
        toggleActions: defaultToggleActions
    },
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
});

// 7. Footer Section
gsap.from(".site-footer > div", {
    scrollTrigger: {
        trigger: ".site-footer",
        start: "top 95%",
        toggleActions: defaultToggleActions
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});
