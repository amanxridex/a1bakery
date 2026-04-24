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

// Smooth Scrolling with Lenis (Desktop Only)
let lenis;
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 1024;

if (!isMobileDevice) {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        infinite: false,
    });

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0, 0);
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

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

// Throw in the TASTY tag
gsap.from(".hero-tag.tasty", {
    x: -200,
    y: -200,
    rotation: -270,
    scale: 0,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(2)",
    delay: 0.6
});

// Throw in the CRUNCHY tag
gsap.from(".hero-tag.crunchy", {
    x: 200,
    y: 200,
    rotation: 270,
    scale: 0,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(2)",
    delay: 0.8
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

// 8. Custom GSAP Cursor
const cursor = document.querySelector('.custom-cursor');

if (cursor) {
    // QuickSetter is much more performant for mouse movement tracking
    const xTo = gsap.quickTo(cursor, "x", {duration: 0.4, ease: "power3"});
    const yTo = gsap.quickTo(cursor, "y", {duration: 0.4, ease: "power3"});

    window.addEventListener('mousemove', (e) => {
        // Show cursor on first move
        if (gsap.getProperty(cursor, "opacity") === 0) {
            gsap.to(cursor, { opacity: 1, duration: 0.3 });
        }
        
        // Use quickTo for buttery smooth trailing
        xTo(e.clientX - 20); // Center the 40px cursor
        yTo(e.clientY - 20);
    });

    // Hover effects on interactable elements
    const hoverElements = document.querySelectorAll('a, button, input, .product-card, .pill, .review-tag, .hamburger, .cart-btn, .menu-close, .has-dropdown');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 1.5,
                rotation: 15,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });
        
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Click animation (Cookie Break Effect)
    window.addEventListener('mousedown', (e) => {
        const isMobile = window.getComputedStyle(cursor).display === 'none';

        if (isMobile) {
            // Mobile: Spawn a temporary cookie just to break it since there's no cursor
            const tempCookie = document.createElement('div');
            tempCookie.innerText = '🍪';
            tempCookie.style.position = 'fixed';
            tempCookie.style.left = e.clientX + 'px';
            tempCookie.style.top = e.clientY + 'px';
            tempCookie.style.fontSize = '50px';
            tempCookie.style.pointerEvents = 'none';
            tempCookie.style.zIndex = 99999;
            tempCookie.style.transform = 'translate(-50%, -50%)';
            document.body.appendChild(tempCookie);

            gsap.to(tempCookie, {
                scale: 0,
                rotation: -20,
                duration: 0.1,
                onComplete: () => tempCookie.remove()
            });
        } else {
            // Desktop: Shrink the main cookie cursor to simulate breaking
            gsap.to(cursor, {
                scale: 0,
                rotation: -20,
                duration: 0.1
            });
        }

        // Spawn crumbs
        for (let i = 0; i < 8; i++) {
            const crumb = document.createElement('div');
            // Randomly pick a crumb character
            const crumbs = ['🟤', '🤎', '✨', '•'];
            crumb.innerText = crumbs[Math.floor(Math.random() * crumbs.length)];
            crumb.style.position = 'fixed';
            crumb.style.left = e.clientX + 'px';
            crumb.style.top = e.clientY + 'px';
            crumb.style.fontSize = (12 + Math.random() * 12) + 'px';
            crumb.style.pointerEvents = 'none';
            crumb.style.zIndex = 99999;
            crumb.style.transform = 'translate(-50%, -50%)';
            document.body.appendChild(crumb);

            // Animate crumb flying outwards
            const angle = (Math.PI * 2 / 8) * i + (Math.random() * 0.5);
            const distance = 40 + Math.random() * 50;
            
            gsap.to(crumb, {
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance + 30, // Gravity
                rotation: Math.random() * 360,
                opacity: 0,
                duration: 0.5 + Math.random() * 0.4,
                ease: "power3.out",
                onComplete: () => crumb.remove()
            });
        }
    });

    window.addEventListener('mouseup', () => {
        const isMobile = window.getComputedStyle(cursor).display === 'none';
        
        if (!isMobile) {
            // Regenerate the desktop cookie
            gsap.to(cursor, {
                scale: 1.2, // Bounce back slightly larger
                rotation: 0,
                duration: 0.3,
                ease: "back.out(2)"
            });
            
            // Return to normal
            gsap.to(cursor, {
                scale: 1,
                delay: 0.3,
                duration: 0.2
            });
        }
    });
}

// Global Link Interception for Cookie Break Delay
// This ensures that when a user clicks a link, the page waits for the animation to finish before loading.
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetUrl = link.getAttribute('href');
        const target = link.getAttribute('target');

        // Only delay real links that navigate to another page (ignore hash links, email, phone)
        if (targetUrl && targetUrl !== '#' && !targetUrl.startsWith('#') && target !== '_blank' && !targetUrl.startsWith('mailto:') && !targetUrl.startsWith('tel:')) {
            e.preventDefault();
            
            // Wait 500ms for the GSAP crumb explosion to play out before loading the next page
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        }
    });
});
