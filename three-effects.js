/* =========================================================
   REPNOXX 3D GRAPHICS - FULL 3D EXPERIENCE (three-effects.js)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    if (typeof THREE === "undefined") {
        console.warn("REPNOXX Warning: Three.js library failed to load. 3D visuals deactivated.");
        return;
    }
    init3DHeroScene();
    init3DGlobalBackground();
    initCard3DTilt();
    init3DScrollLinkedTransform();
    init3DFloatingElements();
});

/* =========================================================
   1. HERO 3D SCENE - FLOATING GEOMETRIC ELEMENTS
   ========================================================= */
function init3DHeroScene() {
    const canvas = document.getElementById("hero-3d-canvas");
    if (!canvas) return;

    const container = canvas.parentElement;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xFF6B1A, 0.6);
    dirLight2.position.set(-5, -5, 5);
    scene.add(dirLight2);

    const group = new THREE.Group();

    // Central premium dumbbell
    const handleMat = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        roughness: 0.15,
        metalness: 0.95
    });
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 8.5, 24), handleMat);
    handle.rotateZ(Math.PI / 2);
    group.add(handle);

    const plateMat = new THREE.MeshStandardMaterial({
        color: 0x1a1a2e,
        roughness: 0.4,
        metalness: 0.6
    });

    const plateSizes = [
        { r: 2.2, w: 0.6, dist: 2.4 },
        { r: 1.8, w: 0.6, dist: 3.1 },
        { r: 1.4, w: 0.6, dist: 3.8 }
    ];

    plateSizes.forEach(size => {
        [-1, 1].forEach(side => {
            const g = new THREE.CylinderGeometry(size.r, size.r, size.w, 24);
            g.rotateZ(Math.PI / 2);
            const m = new THREE.Mesh(g, plateMat);
            m.position.x = side * size.dist;
            group.add(m);
        });
    });

    const lockMat = new THREE.MeshStandardMaterial({
        color: 0xFF6B1A,
        roughness: 0.2,
        metalness: 0.85
    });
    [-1, 1].forEach(side => {
        const g = new THREE.CylinderGeometry(0.6, 0.6, 0.3, 16);
        g.rotateZ(Math.PI / 2);
        const m = new THREE.Mesh(g, lockMat);
        m.position.x = side * 4.3;
        group.add(m);
    });

    // Floating rings around dumbbell
    const ringMat = new THREE.MeshStandardMaterial({
        color: 0xFF6B1A,
        roughness: 0.3,
        metalness: 0.7,
        transparent: true,
        opacity: 0.25,
        wireframe: true
    });

    for (let i = 0; i < 3; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(3.5 + i * 0.8, 0.05, 8, 32), ringMat);
        ring.rotation.x = Math.PI / 3 + i * 0.3;
        ring.rotation.y = i * 0.5;
        ring.position.z = i * 0.5 - 0.5;
        group.add(ring);
    }

    scene.add(group);

    // Floating particles around hero
    const particleCount = 80;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
        pPos[i] = (Math.random() - 0.5) * 30;
        pPos[i+1] = (Math.random() - 0.5) * 20;
        pPos[i+2] = (Math.random() - 0.5) * 15 - 5;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
        color: 0xFF6B1A,
        size: 0.08,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeo, pMat);
    group.add(particles);

    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    });

    let time = 0;

    function animate() {
        requestAnimationFrame(animate);
        time += 0.01;

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        group.rotation.x = 0.15 + Math.sin(time * 0.3) * 0.08 + (targetY * 0.35);
        group.rotation.y = 0.5 + Math.sin(time * 0.2) * 0.1 + (targetX * 0.35);
        group.rotation.z = Math.sin(time * 0.15) * 0.05;

        // Animate rings
        group.children.forEach((child, i) => {
            if (child.geometry && child.geometry.type === "TorusGeometry") {
                child.rotation.z += 0.005;
                child.rotation.x += 0.003;
            }
        });

        renderer.render(scene, camera);
    }
    animate();

    const resize = () => {
        width = container.clientWidth;
        height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    };
    window.addEventListener("resize", resize);
    new ResizeObserver(resize).observe(container);
}

/* =========================================================
   2. GLOBAL 3D BACKGROUND - FLOATING GEOMETRIC UNIVERSE
   ========================================================= */
function init3DGlobalBackground() {
    const canvas = document.getElementById("global-3d-bg");
    if (!canvas) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Layer 1: Small floating geometric shapes
    const shapes = [];
    const shapeColors = [0xFF6B1A, 0xFF8C42, 0xCC5500, 0xffffff];

    function createShape() {
        const type = Math.random();
        let geom;
        if (type < 0.3) geom = new THREE.IcosahedronGeometry(0.3 + Math.random() * 0.4, 0);
        else if (type < 0.6) geom = new THREE.OctahedronGeometry(0.3 + Math.random() * 0.4, 0);
        else if (type < 0.8) geom = new THREE.TorusGeometry(0.3 + Math.random() * 0.3, 0.08, 6, 12);
        else geom = new THREE.TetrahedronGeometry(0.3 + Math.random() * 0.4, 0);

        const mat = new THREE.MeshStandardMaterial({
            color: shapeColors[Math.floor(Math.random() * shapeColors.length)],
            roughness: 0.3,
            metalness: 0.7,
            transparent: true,
            opacity: 0.15 + Math.random() * 0.15
        });
        const mesh = new THREE.Mesh(geom, mat);
        
        mesh.position.x = (Math.random() - 0.5) * 100;
        mesh.position.y = (Math.random() - 0.5) * 100;
        mesh.position.z = (Math.random() - 0.5) * 40 - 10;
        
        const scale = 0.5 + Math.random() * 1.5;
        mesh.scale.set(scale, scale, scale);
        
        mesh.userData = {
            rotSpeed: { x: (Math.random() - 0.5) * 0.02, y: (Math.random() - 0.5) * 0.02, z: (Math.random() - 0.5) * 0.02 },
            floatSpeed: 0.2 + Math.random() * 0.5,
            floatPhase: Math.random() * Math.PI * 2,
            origY: mesh.position.y,
            origX: mesh.position.x,
            origZ: mesh.position.z
        };

        return mesh;
    }

    for (let i = 0; i < 60; i++) {
        const shape = createShape();
        scene.add(shape);
        shapes.push(shape);
    }

    // Layer 2: Main geometric primitives (larger, more visible)
    const largeShapes = [];
    const largeTypes = [
        () => new THREE.TorusGeometry(1.8, 0.04, 8, 32),
        () => new THREE.OctahedronGeometry(1.2, 0),
        () => new THREE.IcosahedronGeometry(1.0, 0),
        () => new THREE.TorusKnotGeometry(0.8, 0.3, 32, 8)
    ];

    for (let i = 0; i < 12; i++) {
        const geom = largeTypes[Math.floor(Math.random() * largeTypes.length)]();
        const mat = new THREE.MeshStandardMaterial({
            color: 0xFF6B1A,
            roughness: 0.2,
            metalness: 0.8,
            transparent: true,
            opacity: 0.08 + Math.random() * 0.08,
            wireframe: Math.random() > 0.5
        });
        const mesh = new THREE.Mesh(geom, mat);
        
        mesh.position.x = (Math.random() - 0.5) * 90;
        mesh.position.y = (Math.random() - 0.5) * 90;
        mesh.position.z = (Math.random() - 0.5) * 30 - 15;
        
        const s = 0.8 + Math.random() * 1.2;
        mesh.scale.set(s, s, s);
        
        mesh.userData = {
            rotSpeed: { x: (Math.random() - 0.5) * 0.008, y: (Math.random() - 0.5) * 0.008, z: (Math.random() - 0.5) * 0.008 },
            floatSpeed: 0.1 + Math.random() * 0.3,
            floatPhase: Math.random() * Math.PI * 2,
            origY: mesh.position.y,
            origX: mesh.position.x
        };

        scene.add(mesh);
        largeShapes.push(mesh);
    }

    // Layer 3: Connecting lines between nearby shapes
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = [];
    for (let i = 0; i < 40; i++) {
        const x = (Math.random() - 0.5) * 80;
        const y = (Math.random() - 0.5) * 80;
        const z = (Math.random() - 0.5) * 30;
        const x2 = x + (Math.random() - 0.5) * 20;
        const y2 = y + (Math.random() - 0.5) * 20;
        const z2 = z + (Math.random() - 0.5) * 15;
        linePositions.push(x, y, z, x2, y2, z2);
    }
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
        color: 0xFF6B1A,
        transparent: true,
        opacity: 0.04
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // Layer 4: Subtle star particles
    const starCount = 300;
    const sGeo = new THREE.BufferGeometry();
    const sPos = new THREE.Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
        sPos[i] = (Math.random() - 0.5) * 150;
        sPos[i+1] = (Math.random() - 0.5) * 150;
        sPos[i+2] = (Math.random() - 0.5) * 80;
    }
    sGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
    const sMat = new THREE.PointsMaterial({
        color: 0xFF6B1A,
        size: 0.15,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });
    const stars = new THREE.Points(sGeo, sMat);
    scene.add(stars);

    const clock = new THREE.Clock();
    let scrollY = window.scrollY;
    let mouseX = 0, mouseY = 0;

    window.addEventListener("scroll", () => { scrollY = window.scrollY; });
    window.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
        requestAnimationFrame(animate);
        const time = clock.getElapsedTime();

        // Animate small shapes
        shapes.forEach(shape => {
            const ud = shape.userData;
            shape.rotation.x += ud.rotSpeed.x;
            shape.rotation.y += ud.rotSpeed.y;
            shape.rotation.z += ud.rotSpeed.z;
            shape.position.y = ud.origY + Math.sin(time * ud.floatSpeed + ud.floatPhase) * 2;
            shape.position.x = ud.origX + Math.cos(time * ud.floatSpeed * 0.7 + ud.floatPhase) * 1.5;
        });

        // Animate large shapes
        largeShapes.forEach(shape => {
            const ud = shape.userData;
            shape.rotation.x += ud.rotSpeed.x;
            shape.rotation.y += ud.rotSpeed.y;
            shape.rotation.z += ud.rotSpeed.z;
            shape.position.y = ud.origY + Math.sin(time * ud.floatSpeed + ud.floatPhase) * 1.5;
        });

        // Camera drift
        const targetCamX = -mouseX * 4;
        const targetCamY = -scrollY * 0.015 - mouseY * 3;
        camera.position.x += (targetCamX - camera.position.x) * 0.02;
        camera.position.y += (targetCamY - camera.position.y) * 0.02;

        stars.rotation.y += 0.0001;
        lines.rotation.y += 0.00005;

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
        width = window.innerWidth;
        height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
}

/* =========================================================
   3. CARD 3D PARALLAX MOUSE TILT
   ========================================================= */
function initCard3DTilt() {
    document.addEventListener("mousemove", (e) => {
        if (!e.target || typeof e.target.closest !== "function") return;
        const card = e.target.closest(".card, .workout-ex-card, .diet-meal-card, .hero-banner");
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPercent = (mouseX / rect.width) - 0.5;
        const yPercent = (mouseY / rect.height) - 0.5;

        const tiltX = -(yPercent * 12).toFixed(2);
        const tiltY = (xPercent * 12).toFixed(2);

        card.style.setProperty("--rotate-x", `${tiltX}deg`);
        card.style.setProperty("--rotate-y", `${tiltY}deg`);
    });

    document.addEventListener("mouseout", (e) => {
        if (!e.target || typeof e.target.closest !== "function") return;
        const card = e.target.closest(".card, .workout-ex-card, .diet-meal-card, .hero-banner");
        if (card && (!e.relatedTarget || !card.contains(e.relatedTarget))) {
            card.style.setProperty("--rotate-x", "0deg");
            card.style.setProperty("--rotate-y", "0deg");
        }
    });
}

/* =========================================================
   4. 3D SCROLL-REVEAL TRANSFORM
   ========================================================= */
function init3DScrollLinkedTransform() {
    const cards = document.querySelectorAll(".card, .workout-ex-card, .diet-meal-card, .hero-banner, .guide-card");

    function update() {
        const vpCenter = window.innerHeight / 2;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const dist = cardCenter - vpCenter;
            const maxDist = window.innerHeight / 2 + rect.height;
            const progress = dist / maxDist;

            if (rect.bottom > -50 && rect.top < window.innerHeight + 50) {
                const rotX = progress * -18;
                const transZ = -Math.abs(progress) * 100;
                const opacity = 1 - Math.abs(progress) * 0.45;

                card.style.setProperty("--scroll-rotate-x", `${rotX.toFixed(2)}deg`);
                card.style.setProperty("--scroll-translate-z", `${transZ.toFixed(2)}px`);
                card.style.opacity = `${Math.max(opacity, 0.45).toFixed(2)}`;
            } else {
                card.style.opacity = "0";
            }
        });

        requestAnimationFrame(update);
    }
    update();
}

/* =========================================================
   5. 3D FLOATING ELEMENTS ON UI (RINGS AROUND BUTTONS)
   ========================================================= */
function init3DFloatingElements() {
    // Add subtle 3D shadow elevation to buttons
    document.querySelectorAll(".glow-btn, .submit-btn, .nav-btn.active").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "perspective(600px) translateZ(15px) translateY(-2px)";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "perspective(600px) translateZ(0px) translateY(0px)";
        });
    });
}
