"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { visualConfig } from "@/data";

function cssColor(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function AmbientScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const config = visualConfig.ambient3D;
    const mount = mountRef.current;
    if (!mount || !config.enabled) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
    camera.position.set(0, 0, 7.4);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !mobile,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, config.maxPixelRatio));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const world = new THREE.Group();
    scene.add(world);

    const accentMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#4ce6b3"),
      wireframe: true,
      transparent: true,
      opacity: config.orbOpacity,
      depthWrite: false,
    });
    const accentTwoMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#7aa7ff"),
      wireframe: true,
      transparent: true,
      opacity: config.orbOpacity * 0.82,
      depthWrite: false,
    });

    const leftGeometry = new THREE.IcosahedronGeometry(1.1, 1);
    const leftOrb = new THREE.Mesh(leftGeometry, accentMaterial);
    leftOrb.position.set(-3.45, 1.35, -0.9);
    world.add(leftOrb);

    const rightGeometry = new THREE.IcosahedronGeometry(0.88, 1);
    const rightOrb = new THREE.Mesh(rightGeometry, accentTwoMaterial);
    rightOrb.position.set(3.55, -1.6, -0.5);
    world.add(rightOrb);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#7aa7ff"),
      transparent: true,
      opacity: config.ringOpacity,
      depthWrite: false,
    });
    const ringGeometry = new THREE.TorusGeometry(1.62, 0.009, 6, 160);
    const leftRing = new THREE.Mesh(ringGeometry, ringMaterial);
    leftRing.position.copy(leftOrb.position);
    leftRing.rotation.set(Math.PI * 0.58, Math.PI * 0.18, 0);
    world.add(leftRing);

    const ringTwoMaterial = ringMaterial.clone();
    const ringTwoGeometry = new THREE.TorusGeometry(1.36, 0.008, 6, 150);
    const rightRing = new THREE.Mesh(ringTwoGeometry, ringTwoMaterial);
    rightRing.position.copy(rightOrb.position);
    rightRing.rotation.set(Math.PI * 0.22, Math.PI * 0.72, 0);
    world.add(rightRing);

    const count = mobile ? config.particleCountMobile : config.particleCountDesktop;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 12.5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8.5;
      positions[i * 3 + 2] = -2.4 + Math.random() * 3.2;
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
    world.add(particles);

    const pointer = { x: 0, y: 0 };
    const pointerTarget = { x: 0, y: 0 };
    let scrollTarget = 0;
    let scrollEase = 0;

    const onPointerMove = (event: PointerEvent) => {
      if (mobile || reducedMotion) return;
      pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      const viewport = Math.max(window.innerHeight, 1);
      scrollTarget = window.scrollY / viewport;
      const reveal = clamp((window.scrollY - viewport * 0.42) / (viewport * 0.62), 0, 1);
      mount.style.opacity = String(reveal * config.maxOpacity);
    };

    const updateColors = () => {
      const accent = cssColor("--accent", "#4ce6b3");
      const accentTwo = cssColor("--accent-2", "#7aa7ff");
      accentMaterial.color.set(accent);
      accentTwoMaterial.color.set(accentTwo);
      ringMaterial.color.set(accentTwo);
      ringTwoMaterial.color.set(accent);
      particlesMaterial.color.set(accentTwo);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("portfolio-theme-change", updateColors);
    updateColors();
    onScroll();

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
        pointer.x += (pointerTarget.x - pointer.x) * 0.025;
        pointer.y += (pointerTarget.y - pointer.y) * 0.025;
        scrollEase += (scrollTarget - scrollEase) * 0.03;

        leftOrb.rotation.x += config.rotationSpeed * 0.58;
        leftOrb.rotation.y += config.rotationSpeed;
        rightOrb.rotation.x -= config.rotationSpeed * 0.44;
        rightOrb.rotation.y -= config.rotationSpeed * 0.76;
        leftRing.rotation.z += config.rotationSpeed * 0.35;
        rightRing.rotation.z -= config.rotationSpeed * 0.28;
        particles.rotation.y += config.rotationSpeed * 0.04;

        world.rotation.z = Math.sin(scrollEase * 0.38) * 0.055;
        world.position.y = Math.sin(scrollEase * 0.55) * 0.16 - pointer.y * 0.05;
        world.position.x = pointer.x * 0.08;
      }

      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("portfolio-theme-change", updateColors);
      observer.disconnect();
      leftGeometry.dispose();
      rightGeometry.dispose();
      ringGeometry.dispose();
      ringTwoGeometry.dispose();
      accentMaterial.dispose();
      accentTwoMaterial.dispose();
      ringMaterial.dispose();
      ringTwoMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  if (!visualConfig.ambient3D.enabled) return null;

  return <div ref={mountRef} className="ambient-three-scene" aria-hidden="true" />;
}
