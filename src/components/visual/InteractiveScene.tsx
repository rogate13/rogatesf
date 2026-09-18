"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { visualConfig } from "@/data";

function cssColor(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

export function InteractiveScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const config = visualConfig.hero3D;
    const mount = mountRef.current;
    if (!mount || !config.enabled) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 5.4);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !mobile, powerPreference: "high-performance" });
    } catch {
      return;
    }
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, config.maxPixelRatio));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const orbGeometry = new THREE.IcosahedronGeometry(1.46, config.geometryDetail);
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#4ce6b3"),
      wireframe: true,
      transparent: true,
      opacity: config.orbOpacity,
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    group.add(orb);

    const ringGeometry = new THREE.TorusGeometry(2.02, 0.015, 8, 180);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#7aa7ff"),
      transparent: true,
      opacity: config.ringOpacity,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI * 0.58;
    ring.rotation.y = Math.PI * 0.16;
    group.add(ring);

    const count = mobile ? config.particleCountMobile : config.particleCountDesktop;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.25 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#7aa7ff"),
      size: mobile ? 0.018 : 0.022,
      transparent: true,
      opacity: config.particlesOpacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    group.add(particles);

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      if (mobile || reducedMotion) return;
      target.x = (event.clientX / window.innerWidth - 0.5) * 2;
      target.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const updateColors = () => {
      orbMaterial.color.set(cssColor("--accent", "#4ce6b3"));
      ringMaterial.color.set(cssColor("--accent-2", "#7aa7ff"));
      particlesMaterial.color.set(cssColor("--accent-2", "#7aa7ff"));
    };
    updateColors();
    window.addEventListener("portfolio-theme-change", updateColors);

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    let frame = 0;
    const render = () => {
      if (!reducedMotion) {
        pointer.x += (target.x - pointer.x) * 0.035;
        pointer.y += (target.y - pointer.y) * 0.035;
        group.rotation.y += config.rotationSpeed;
        group.rotation.x += config.rotationSpeed * 0.38;
        group.rotation.y += pointer.x * config.pointerStrength * 0.0009;
        group.rotation.x += pointer.y * config.pointerStrength * 0.0007;
        ring.rotation.z -= config.rotationSpeed * 0.7;
        particles.rotation.y -= config.rotationSpeed * 0.12;
      }
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("portfolio-theme-change", updateColors);
      observer.disconnect();
      orbGeometry.dispose();
      orbMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  if (!visualConfig.hero3D.enabled) return null;

  return <div ref={mountRef} className="hero-three-scene" aria-hidden="true" />;
}
