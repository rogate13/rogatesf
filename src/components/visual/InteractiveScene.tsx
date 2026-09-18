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

    const group = new THREE.Group();
    group.position.x = mobile ? 0.5 : 0.35;
    scene.add(group);

    const innerGeometry = new THREE.IcosahedronGeometry(1.08, config.geometryDetail);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#4ce6b3"),
      transparent: true,
      opacity: 0.055,
      wireframe: false,
    });
    const inner = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(inner);

    const orbGeometry = new THREE.IcosahedronGeometry(1.48, config.geometryDetail);
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#4ce6b3"),
      wireframe: true,
      transparent: true,
      opacity: config.orbOpacity,
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    group.add(orb);

    const ringGeometry = new THREE.TorusGeometry(2.02, 0.014, 8, 220);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#7aa7ff"),
      transparent: true,
      opacity: config.ringOpacity,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI * 0.58;
    ring.rotation.y = Math.PI * 0.16;
    group.add(ring);

    const ringTwoGeometry = new THREE.TorusGeometry(1.74, 0.009, 8, 180);
    const ringTwoMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#4ce6b3"),
      transparent: true,
      opacity: config.ringOpacity * 0.65,
    });
    const ringTwo = new THREE.Mesh(ringTwoGeometry, ringTwoMaterial);
    ringTwo.rotation.x = Math.PI * 0.18;
    ringTwo.rotation.y = Math.PI * 0.7;
    group.add(ringTwo);

    const count = mobile ? config.particleCountMobile : config.particleCountDesktop;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.25 + Math.random() * 1.9;
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

    const satelliteGeometry = new THREE.SphereGeometry(0.045, 12, 12);
    const satelliteMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#7aa7ff"),
      transparent: true,
      opacity: 0.92,
    });
    const satellites: THREE.Mesh[] = [];
    for (let i = 0; i < config.satelliteCount; i += 1) {
      const node = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
      satellites.push(node);
      group.add(node);
    }

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let pulse = 0;
    let scrollTarget = 0;
    let scrollEase = 0;

    const onPointerMove = (event: PointerEvent) => {
      if (mobile || reducedMotion) return;
      target.x = (event.clientX / window.innerWidth - 0.5) * 2;
      target.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      scrollTarget = Math.min(Math.max(window.scrollY / Math.max(window.innerHeight, 1), 0), 1.25);
    };

    const onPointerDown = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!inside) return;
      pulse = 1;
      window.dispatchEvent(new CustomEvent("rogate-scene-interaction"));
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const updateColors = () => {
      const accent = cssColor("--accent", "#4ce6b3");
      const accentTwo = cssColor("--accent-2", "#7aa7ff");
      orbMaterial.color.set(accent);
      innerMaterial.color.set(accent);
      ringTwoMaterial.color.set(accent);
      ringMaterial.color.set(accentTwo);
      particlesMaterial.color.set(accentTwo);
      satelliteMaterial.color.set(accentTwo);
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
    const clock = new THREE.Clock();
    const render = () => {
      const elapsed = clock.getElapsedTime();

      if (!reducedMotion) {
        pointer.x += (target.x - pointer.x) * 0.035;
        pointer.y += (target.y - pointer.y) * 0.035;
        scrollEase += (scrollTarget - scrollEase) * 0.045;

        group.rotation.y += config.rotationSpeed;
        group.rotation.x += config.rotationSpeed * 0.34;
        group.rotation.y += pointer.x * config.pointerStrength * 0.0009;
        group.rotation.x += pointer.y * config.pointerStrength * 0.0007;

        group.position.x = (mobile ? 0.5 : 0.35) + pointer.x * 0.08;
        group.position.y = -pointer.y * 0.07 - scrollEase * 0.18;
        group.rotation.z = scrollEase * 0.13;
        const scrollScale = 1 - Math.min(scrollEase * 0.055, 0.075);
        group.scale.setScalar(scrollScale);

        ring.rotation.z -= config.rotationSpeed * 0.72;
        ringTwo.rotation.z += config.rotationSpeed * 0.55;
        particles.rotation.y -= config.rotationSpeed * 0.1;
        particles.rotation.x += config.rotationSpeed * 0.035;

        satellites.forEach((node, index) => {
          const phase = elapsed * (0.23 + index * 0.009) + (index / satellites.length) * Math.PI * 2;
          const radius = 1.86 + (index % 3) * 0.18;
          node.position.set(
            Math.cos(phase) * radius,
            Math.sin(phase * 1.27) * (1.25 + (index % 2) * 0.22),
            Math.sin(phase) * radius * 0.62,
          );
        });
      }

      pulse *= 0.91;
      const pulseScale = 1 + pulse * config.clickPulse;
      orb.scale.setScalar(pulseScale);
      inner.scale.setScalar(1 + pulse * config.clickPulse * 1.8);
      particlesMaterial.size = (mobile ? 0.018 : 0.022) + pulse * 0.012;

      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("portfolio-theme-change", updateColors);
      observer.disconnect();
      orbGeometry.dispose();
      orbMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      ringTwoGeometry.dispose();
      ringTwoMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      satelliteGeometry.dispose();
      satelliteMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  if (!visualConfig.hero3D.enabled) return null;

  return <div ref={mountRef} className="hero-three-scene" aria-hidden="true" />;
}
