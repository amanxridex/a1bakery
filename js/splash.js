// ========================================
// A1 BAKERY - SPLASH SCREEN LOGIC
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const video = document.getElementById('splash-video');
    const logo = document.getElementById('splash-logo');
    const body = document.body;

    if (!splash) return;

    // Initialize: Lock scroll
    window.scrollTo(0, 0);
    body.style.overflow = 'hidden';

    // Phase 1: After 3 seconds, fade video and reveal logo
    setTimeout(() => {
        splash.classList.add('splash-fade-video');
        splash.classList.add('splash-show-logo');
    }, 3000);

    // Phase 2: After 5 seconds total, hide splash and show website
    setTimeout(() => {
        splash.classList.add('splash-hidden');
        body.classList.remove('splash-active');
        body.style.overflow = 'auto';
        
        // Clean up: Remove splash from DOM after transition
        setTimeout(() => {
            splash.remove();
        }, 1000);
    }, 5000);
});
