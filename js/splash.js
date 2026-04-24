// --- Scene Setup ---
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xF5F0EB); // Match site cream background

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.appendChild(renderer.domElement);

// --- Lighting ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xfff0dd, 1.0); // Warm sunlight
dirLight.position.set(10, 20, 15);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 1024;
dirLight.shadow.mapSize.height = 1024;
scene.add(dirLight);

const pointLight = new THREE.PointLight(0xffa500, 0.6, 50); // Bakery warm glow
pointLight.position.set(0, 5, 10);
scene.add(pointLight);

// --- Procedural Noise Texture (for Bump Map) ---
function createNoiseTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const imgData = ctx.createImageData(512, 512);
    
    // Simple Perlin-ish noise approximation
    for (let i = 0; i < imgData.data.length; i += 4) {
        // Create slightly larger "clumps" of noise
        let x = (i / 4) % 512;
        let y = Math.floor((i / 4) / 512);
        let val = (Math.sin(x * 0.1) * Math.cos(y * 0.1) * 0.5 + 0.5) * 100 + Math.random() * 155;
        
        imgData.data[i] = val;
        imgData.data[i+1] = val;
        imgData.data[i+2] = val;
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}

const bumpTexture = createNoiseTexture();

// --- Materials ---
const doughMat = new THREE.MeshStandardMaterial({
    color: 0xcd853f, // Golden brown
    roughness: 0.8,
    metalness: 0.05,
    bumpMap: bumpTexture,
    bumpScale: 0.15
});

const chipMat = new THREE.MeshStandardMaterial({
    color: 0x2A1B18, // Dark chocolate
    roughness: 0.3,
    metalness: 0.1
});

// --- Geometry Setup ---
const radius = 5;
const depth = 1.0;
const extrudeSettings = {
    depth: depth,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.3,
    bevelThickness: 0.3
};

// 1. Create Main Solid Cookie
const circleShape = new THREE.Shape();
circleShape.absarc(0, 0, radius, 0, Math.PI * 2, false);
const solidGeo = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
// Center the geometry
solidGeo.translate(0, 0, -depth/2);

const mainCookie = new THREE.Mesh(solidGeo, doughMat);
mainCookie.castShadow = true;
mainCookie.receiveShadow = true;
scene.add(mainCookie);

// Function to add chocolate chips
function addChips(parentMesh, isSlice, startAngle, endAngle) {
    const numChips = isSlice ? 3 : 24;
    for(let i=0; i<numChips; i++) {
        let angle;
        if(isSlice) {
            angle = startAngle + 0.1 + Math.random() * (endAngle - startAngle - 0.2);
        } else {
            angle = Math.random() * Math.PI * 2;
        }
        
        let r = Math.random() * (radius - 0.8);
        
        let chipGeo = new THREE.SphereGeometry(Math.random() * 0.3 + 0.2, 8, 8);
        let chip = new THREE.Mesh(chipGeo, chipMat);
        
        // Randomly place on front or back face
        let zPos = (Math.random() > 0.5) ? (depth/2 + 0.2) : (-depth/2 - 0.2);
        chip.position.set(Math.cos(angle)*r, Math.sin(angle)*r, zPos);
        
        // Flatten slightly against the surface
        chip.scale.z = 0.5;
        chip.rotation.set(Math.random(), Math.random(), Math.random());
        
        parentMesh.add(chip);
    }
}

addChips(mainCookie, false);

// 2. Create the 8 Shatter Wedges
const shatterGroup = new THREE.Group();
const wedges = [];
const numSlices = 8;

for(let i=0; i<numSlices; i++) {
    let startAngle = (i / numSlices) * Math.PI * 2;
    let endAngle = ((i+1) / numSlices) * Math.PI * 2;
    
    let sliceShape = new THREE.Shape();
    sliceShape.moveTo(0, 0);
    sliceShape.absarc(0, 0, radius, startAngle, endAngle, false);
    sliceShape.lineTo(0, 0);
    
    let sliceGeo = new THREE.ExtrudeGeometry(sliceShape, extrudeSettings);
    sliceGeo.translate(0, 0, -depth/2);
    
    let wedge = new THREE.Mesh(sliceGeo, doughMat);
    wedge.castShadow = true;
    wedge.receiveShadow = true;
    
    addChips(wedge, true, startAngle, endAngle);
    
    // Physics properties
    let midAngle = (startAngle + endAngle) / 2;
    let radialDir = new THREE.Vector3(Math.cos(midAngle), Math.sin(midAngle), 0).normalize();
    
    wedge.explodeVelocity = radialDir.multiplyScalar(Math.random() * 15 + 15);
    wedge.explodeVelocity.z += (Math.random() * 10 + 5); // Fly forward
    
    wedge.rotationSpeed = new THREE.Vector3(
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4
    );
    
    shatterGroup.add(wedge);
    wedges.push(wedge);
}

// Hide shatter group initially
shatterGroup.visible = false;
scene.add(shatterGroup);

// Initial Positions
mainCookie.position.z = -60;
shatterGroup.position.z = -60;

// --- Animation Sequence ---
let isShattered = false;

function startSequence() {
    // Fly in
    gsap.to(mainCookie.position, {
        z: 6,
        duration: 2.2,
        ease: "power2.in",
        onComplete: triggerShatter
    });
    
    // Sync shatter group position
    gsap.to(shatterGroup.position, { z: 6, duration: 2.2, ease: "power2.in" });

    // Tumble
    gsap.to(mainCookie.rotation, {
        x: Math.PI * 2.5,
        y: Math.PI * 2.2,
        duration: 2.2,
        ease: "power2.in"
    });
    
    gsap.to(shatterGroup.rotation, {
        x: Math.PI * 2.5,
        y: Math.PI * 2.2,
        duration: 2.2,
        ease: "power2.in"
    });
}

startSequence();

function triggerShatter() {
    isShattered = true;
    
    // THE SWAP
    mainCookie.visible = false;
    shatterGroup.visible = true;
    
    // Transfer local wedge coordinates to world coordinates so they can explode independently
    const worldPositions = [];
    const worldQuaternions = [];

    wedges.forEach(wedge => {
        let worldPos = new THREE.Vector3();
        wedge.getWorldPosition(worldPos);
        worldPositions.push(worldPos);

        let worldQuat = new THREE.Quaternion();
        wedge.getWorldQuaternion(worldQuat);
        worldQuaternions.push(worldQuat);
    });

    // Remove group and add pieces directly to scene
    scene.remove(shatterGroup);

    wedges.forEach((wedge, i) => {
        scene.add(wedge);
        wedge.position.copy(worldPositions[i]);
        wedge.quaternion.copy(worldQuaternions[i]);
    });

    // Fade and redirect
    setTimeout(() => {
        const overlay = document.getElementById('fade-overlay');
        overlay.classList.add('fade-in');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500); 
    }, 1200);
}

// --- Render Loop ---
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta();

    if (isShattered) {
        wedges.forEach(wedge => {
            wedge.position.addScaledVector(wedge.explodeVelocity, delta);
            wedge.explodeVelocity.y -= 30 * delta; // Gravity
            
            wedge.rotation.x += wedge.rotationSpeed.x;
            wedge.rotation.y += wedge.rotationSpeed.y;
            wedge.rotation.z += wedge.rotationSpeed.z;
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
