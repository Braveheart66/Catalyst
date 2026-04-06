"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  drift: number;
  tint: "primary" | "secondary";
};

const PARTICLE_COUNT = 56;

type CanvasTheme = {
  background: string;
  primary: [number, number, number];
  secondary: [number, number, number];
  alphaBase: number;
  alphaScale: number;
};

function getThemePalette(): CanvasTheme {
  const isDark = document.documentElement.classList.contains("dark");

  if (isDark) {
    return {
      background: "#0A0A0F",
      primary: [124, 58, 237],
      secondary: [244, 244, 245],
      alphaBase: 0.03,
      alphaScale: 0.12,
    };
  }

  return {
    background: "#FFFFFF",
    primary: [124, 58, 237],
    secondary: [148, 163, 184],
    alphaBase: 0.018,
    alphaScale: 0.07,
  };
}

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createDebouncedResize(callback: () => void, waitMs: number) {
  let timeoutId: number | undefined;

  return () => {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(callback, waitMs);
  };
}

export function HeroParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let rafId = 0;
    let width = 0;
    let height = 0;
    let devicePixelRatio = 1;
    let themePalette = getThemePalette();

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: 0,
      y: 0,
      z: 0,
      vx: 0,
      vy: 0,
      drift: 0,
      tint: Math.random() > 0.72 ? "secondary" : "primary",
    }));

    const resetParticle = (particle: Particle, randomX: boolean) => {
      particle.x = randomX ? random(0, width) : random(-40, -8);
      particle.y = random(0, height);
      particle.z = random(0.2, 1);
      particle.vx = random(0.08, 0.22) * (0.45 + particle.z);
      particle.vy = random(-0.08, 0.08) * (0.35 + particle.z);
      particle.drift = random(-0.04, 0.04);
    };

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      for (const particle of particles) {
        resetParticle(particle, true);
      }
    };

    const debouncedResize = createDebouncedResize(resizeCanvas, 120);
    const themeObserver = new MutationObserver(() => {
      themePalette = getThemePalette();
    });

    const render = () => {
      context.fillStyle = themePalette.background;
      context.fillRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy + particle.drift * Math.sin(particle.x * 0.01);

        if (particle.x > width + 45 || particle.y < -35 || particle.y > height + 35) {
          resetParticle(particle, false);
        }

        // Use z-depth to scale size and opacity for a subtle depth illusion.
        const radius = 0.7 + particle.z * 2.15;
        const alpha = themePalette.alphaBase + particle.z * themePalette.alphaScale;
        const rgb = particle.tint === "secondary" ? themePalette.secondary : themePalette.primary;

        context.beginPath();
        context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha.toFixed(3)})`;
        context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        context.fill();
      }

      rafId = window.requestAnimationFrame(render);
    };

    resizeCanvas();
    rafId = window.requestAnimationFrame(render);

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    window.addEventListener("resize", debouncedResize, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      themeObserver.disconnect();
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particle-canvas" aria-hidden="true" />;
}
