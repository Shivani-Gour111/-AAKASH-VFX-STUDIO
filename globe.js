// --- THREE.JS GLOBE WITH THIN LINES, AUTOMATIC ROTATION & RADIANT PURPLE DOTS ---

let scene, camera, renderer, globeGroup;
const container = document.getElementById('webgl-container');

function initGlobe() {
    if (!container) return;

    // 1. Scene Setup
    scene = new THREE.Scene();

    // 2. Camera Setup
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 22; 

    // 3. Renderer Setup
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    globeGroup = new THREE.Group();

    // 4. Low-Poly Geometry Size
    const radius = 8.4;
    const geometry = new THREE.IcosahedronGeometry(radius, 2); 

    // 5. Thinner Lines with Color #092934
    const lineMaterial = new THREE.MeshBasicMaterial({
        color: 0x092934,
        wireframe: true,
        transparent: true,
        opacity: 0.35
    });

    const wireframeMesh = new THREE.Mesh(geometry, lineMaterial);
    globeGroup.add(wireframeMesh);

    // 6. Floating Dots Layer - EXACT IMAGE MATCH NEON PURPLE
    const particleCount = 250;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = radius * (0.82 + Math.random() * 0.35); 

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
        color: 0x795FFF,      // Bright Neon Purple (Jo aapki image me chamak raha hai)
        size: 0.06,           // Perfect tiny sharp dots
        transparent: true,
        opacity: 0.85         // Dark background par perfectly visible rahega
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    globeGroup.add(particleSystem);

    scene.add(globeGroup);

    // Interaction & Resize Listeners
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);

    animate();
}

let mouseX = 0, mouseY = 0;
function onMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.0002;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.0002;
}

function onWindowResize() {
    if (!container) return;
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

// 7. Continuous Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Constant Continuous Rotation
    globeGroup.rotation.y += 0.0022;
    globeGroup.rotation.x += 0.0007;

    // Subtle Mouse parallax
    globeGroup.rotation.y += mouseX * 0.05;
    globeGroup.rotation.x += mouseY * 0.05;

    renderer.render(scene, camera);
}

window.addEventListener('load', initGlobe);