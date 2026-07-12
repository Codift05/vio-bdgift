"use client";

import { useEffect, useRef } from "react";

export const FilmGrainOverlay = () => {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px'
      }}
    />
  );
};

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; size: number; speedY: number; opacity: number; life: number; maxLife: number }[] = [];
    let animationFrameId: number;
    let resizeObserver: ResizeObserver;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      // Significantly reduce particles on mobile to improve performance
      const particleCount = window.innerWidth < 768 ? 15 : 40; 
      particles = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedY: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      }));
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#D6B36A";

      particles.forEach((p, i) => {
        p.y -= p.speedY;
        p.life++;
        
        // Fading in and out
        const currentOpacity = Math.sin((p.life / p.maxLife) * Math.PI) * p.opacity;
        
        ctx.globalAlpha = Math.max(0, currentOpacity);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Reset particle when it goes out or dies
        if (p.y < 0 || p.life > p.maxLife) {
          particles[i] = {
            ...p,
            y: canvas.height + 10,
            x: Math.random() * canvas.width,
            life: 0,
            maxLife: Math.random() * 200 + 100,
          };
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    initCanvas();
    drawParticles();

    let lastWidth = window.innerWidth;
    let lastHeight = window.innerHeight;

    // Use resize observer with debounce/threshold to prevent Safari bottom bar jump lags
    resizeObserver = new ResizeObserver(() => {
      if (Math.abs(window.innerWidth - lastWidth) > 50 || Math.abs(window.innerHeight - lastHeight) > 150) {
        lastWidth = window.innerWidth;
        lastHeight = window.innerHeight;
        initCanvas();
      }
    });
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen"
    />
  );
};
