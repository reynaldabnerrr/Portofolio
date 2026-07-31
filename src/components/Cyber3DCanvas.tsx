import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Cyber3DCanvasProps {
  isLightMode?: boolean;
}

// Helper function to create text + icon textures dynamically for each cube face
function createTechFaceTexture(label: string, sublabel: string, colorHex: string, bgDark: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 512, 512);
    grad.addColorStop(0, bgDark);
    grad.addColorStop(1, "#040814");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Glowing border frame
    ctx.strokeStyle = colorHex;
    ctx.lineWidth = 16;
    ctx.strokeRect(16, 16, 480, 480);

    // Inner subtle grid lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 2;
    for (let i = 64; i < 512; i += 64) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 512);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(512, i);
      ctx.stroke();
    }

    // Corner tech markers
    ctx.fillStyle = colorHex;
    ctx.fillRect(24, 24, 32, 8);
    ctx.fillRect(24, 24, 8, 32);
    ctx.fillRect(456, 24, 32, 8);
    ctx.fillRect(480, 24, 8, 32);
    ctx.fillRect(24, 480, 32, 8);
    ctx.fillRect(24, 456, 8, 32);
    ctx.fillRect(456, 480, 32, 8);
    ctx.fillRect(480, 456, 8, 32);

    // Glowing main label text
    ctx.shadowColor = colorHex;
    ctx.shadowBlur = 25;
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 58px 'Outfit', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, 256, 220);

    // Sublabel badge text
    ctx.shadowBlur = 0;
    ctx.fillStyle = colorHex;
    ctx.font = "bold 28px 'JetBrains Mono', monospace";
    ctx.fillText(`[ ${sublabel} ]`, 256, 310);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function Cyber3DCanvas({ isLightMode = false }: Cyber3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, isLightMode ? 1.2 : 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 2.5);
    dirLight1.position.set(5, 5, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xec4899, 2);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    // 3. Create 6 Unique Tech Materials for Cube Faces
    const faceConfigs = [
      { label: "LARAVEL", sublabel: "BACKEND API", color: "#6366f1", bg: "#0f172a" },
      { label: "REACT 19", sublabel: "FRONTEND UI", color: "#06b6d4", bg: "#082f49" },
      { label: "FLUTTER", sublabel: "MOBILE DEV", color: "#3b82f6", bg: "#1e3a8a" },
      { label: "MYSQL", sublabel: "DATABASE", color: "#f59e0b", bg: "#451a03" },
      { label: "REST API", sublabel: "ARCHITECTURE", color: "#10b981", bg: "#064e3b" },
      { label: "CTF PLAYER", sublabel: "SECURITY HOBBY", color: "#ec4899", bg: "#831843" },
    ];

    const cubeMaterials = faceConfigs.map((cfg) => {
      const tex = createTechFaceTexture(cfg.label, cfg.sublabel, cfg.color, cfg.bg);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: isLightMode ? 0.9 : 0.95,
      });
    });

    // 4. Main Holographic 3D Cube
    const cubeGeometry = new THREE.BoxGeometry(2.3, 2.3, 2.3);
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterials);
    scene.add(cubeMesh);

    // Outer Wireframe Glow Frame around Cube
    const wireGeom = new THREE.BoxGeometry(2.45, 2.45, 2.45);
    const wireMat = new THREE.MeshBasicMaterial({
      color: isLightMode ? 0x4f46e5 : 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeom, wireMat);
    scene.add(wireMesh);

    // 5. Inner Glowing Core Sphere
    const coreGeom = new THREE.SphereGeometry(0.75, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: isLightMode ? 0x6366f1 : 0x00f0ff,
      emissive: isLightMode ? 0x4f46e5 : 0x00f0ff,
      emissiveIntensity: 0.8,
      roughness: 0.1,
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    scene.add(coreMesh);

    // 6. Dual Orbital Rings
    const ring1Geom = new THREE.TorusGeometry(2.9, 0.018, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: isLightMode ? 0x3b82f6 : 0x00f0ff,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(3.3, 0.012, 16, 90);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: isLightMode ? 0xec4899 : 0xf59e0b,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // 7. Floating Dust Particles
    const particleCount = 160;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 3.0 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: isLightMode ? 0x4f46e5 : 0x00f0ff,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
    });
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Mouse Parallax & Interactive Drag Rotation Physics
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = x * 0.0015;
      mouseY = y * 0.0015;

      if (isDragging) {
        const deltaMove = {
          x: e.clientX - previousMousePosition.x,
          y: e.clientY - previousMousePosition.y,
        };

        cubeMesh.rotation.y += deltaMove.x * 0.01;
        cubeMesh.rotation.x += deltaMove.y * 0.01;
        wireMesh.rotation.y += deltaMove.x * 0.01;
        wireMesh.rotation.x += deltaMove.y * 0.01;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (!isDragging) {
        cubeMesh.rotation.x += 0.005;
        cubeMesh.rotation.y += 0.008;

        wireMesh.rotation.x += 0.005;
        wireMesh.rotation.y += 0.008;
      }

      ring1.rotation.z += 0.006;
      ring2.rotation.x += 0.007;

      particleSystem.rotation.y += 0.002;

      // Parallax Scene Tilt
      scene.rotation.y = targetX * 0.8;
      scene.rotation.x = targetY * 0.8;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      cubeGeometry.dispose();
      cubeMaterials.forEach((m) => m.dispose());
      wireGeom.dispose();
      wireMat.dispose();
      coreGeom.dispose();
      coreMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [isLightMode]);

  return (
    <div
      ref={mountRef}
      className="w-full h-[400px] sm:h-[500px] relative flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing select-none"
    />
  );
}
