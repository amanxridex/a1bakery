// --- Scene Setup ---
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xF5F0EB); // Match site cream background

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// --- Lighting ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(10, 20, 10);
scene.add(dirLight);

// --- Assets ---
const textureLoader = new THREE.TextureLoader();
let mainCookie;
const chunks = [];
let isShattered = false;

// Load the cookie texture with error handling (for file:// protocol CORS issues)
textureLoader.load(
    './assets/cookie.png', 
    (texture) => {
        // Success
        initCookieAndStart(texture);
    },
    undefined,
    (err) => {
        // Error (likely CORS from opening directly without a server)
        console.error("Could not load cookie texture (CORS or missing file). Using fallback.", err);
        initCookieAndStart(null);
    }
);

function initCookieAndStart(texture) {
    // 1. Create the Main Cookie
    let cookieGeo, cookieMat;
    
    if (texture) {
        cookieGeo = new THREE.PlaneGeometry(10, 10);
        cookieMat = new THREE.MeshStandardMaterial({ 
            map: texture, 
            transparent: true,
            side: THREE.DoubleSide,
            roughness: 0.8,
            metalness: 0.1
        });
    } else {
        // Fallback brown circle if image fails to load
        cookieGeo = new THREE.CircleGeometry(5, 32);
        cookieMat = new THREE.MeshStandardMaterial({ 
            color: 0x8D6E63,
            side: THREE.DoubleSide,
            roughness: 0.9
        });
    }

    mainCookie = new THREE.Mesh(cookieGeo, cookieMat);
    mainCookie.position.z = -50; // Start far away
    scene.add(mainCookie);

    // 2. Pre-generate the Chunks (Crumbs/Pieces)
    const chunkColors = [0x5C4033, 0x3E2723, 0x8D6E63, 0x4E342E]; // Various brown cookie colors
    
    for (let i = 0; i < 60; i++) {
        // Randomize chunk geometry (spheres and boxes)
        let chunkGeo;
        const size = Math.random() * 0.4 + 0.1;
        if (Math.random() > 0.5) {
            chunkGeo = new THREE.BoxGeometry(size, size, size);
        } else {
            chunkGeo = new THREE.SphereGeometry(size, 4, 4); // Low poly spheres
        }
        
        const chunkMat = new THREE.MeshStandardMaterial({
            color: chunkColors[Math.floor(Math.random() * chunkColors.length)],
            roughness: 0.9,
            metalness: 0.1
        });
        
        const chunk = new THREE.Mesh(chunkGeo, chunkMat);
        
        // Hide initially
        chunk.visible = false;
        
        // Physics properties
        chunk.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 15, // x
            (Math.random() - 0.5) * 15, // y
            (Math.random() - 0.5) * 15 + 5 // z (pushing towards camera slightly)
        );
        chunk.rotationSpeed = new THREE.Vector3(
            Math.random() * 0.2,
            Math.random() * 0.2,
            Math.random() * 0.2
        );
        
        chunks.push(chunk);
        scene.add(chunk);
    }

    // Start Animation Sequence
    startSequence();
}

// --- Animation Sequence ---
function startSequence() {
    // Phase 1: Cookie flies in and spins
    gsap.to(mainCookie.position, {
        z: 8, // Bring close to camera
        duration: 1.8,
        ease: "power2.in",
        onComplete: triggerShatter
    });

    gsap.to(mainCookie.rotation, {
        z: Math.PI * 4, // Spin rapidly
        x: Math.PI / 4, // Slight tilt
        duration: 1.8,
        ease: "power2.in"
    });
}

function triggerShatter() {
    isShattered = true;
    
    // Hide main cookie
    mainCookie.visible = false;
    
    // Show and position chunks at the cookie's last location
    chunks.forEach(chunk => {
        chunk.position.copy(mainCookie.position);
        // Add a bit of random offset so they don't all spawn exactly at 0,0
        chunk.position.x += (Math.random() - 0.5) * 3;
        chunk.position.y += (Math.random() - 0.5) * 3;
        chunk.visible = true;
    });

    // Phase 3: Transition to main site after a short delay
    setTimeout(() => {
        const overlay = document.getElementById('fade-overlay');
        overlay.classList.add('fade-in');
        
        // Redirect after fade transition completes
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500); // 500ms matches the CSS transition time
        
    }, 1500); // Let the shatter play out for 1.5 seconds
}

// --- Render Loop ---
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta();

    if (isShattered) {
        // Update physics for chunks
        chunks.forEach(chunk => {
            // Apply velocity
            chunk.position.addScaledVector(chunk.velocity, delta);
            
            // Apply gravity (pulling down)
            chunk.velocity.y -= 15 * delta;
            
            // Apply rotation
            chunk.rotation.x += chunk.rotationSpeed.x;
            chunk.rotation.y += chunk.rotationSpeed.y;
            chunk.rotation.z += chunk.rotationSpeed.z;
        });
    }

    renderer.render(scene, camera);
}

animate();

// --- Resize Handler ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
