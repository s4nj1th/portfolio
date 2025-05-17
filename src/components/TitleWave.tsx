"use client";

import { useRef, useEffect } from "react";
import { FaArrowRotateRight } from "react-icons/fa6";

const generateColorPalette = (baseHue: number) => {
  const saturation = 80;
  const lightnessLevels = [45, 55, 65, 75, 85];

  return lightnessLevels.map((lightness, i) => {
    const hue = (baseHue + i * 10) % 360;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  });
};

type WaveLayer = {
  color: string;
  offsetY: number;
  targetY: number;
  progress: number;
  delay: number;
  frequency: number;
  amplitude: number;
};

const TitleWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const colors = useRef<string[]>([]);
  const waveLayers = useRef<WaveLayer[]>([]);
  const animationRef = useRef<number | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const dims = useRef({ width: 0, height: 0 });

  const baseHue = useRef(Math.floor(Math.random() * 360));
  const wall = useRef({
    color: "",
    progress: 0,
    delay: 1600,
    targetWidth: 0,
  });

  const initLayers = (height: number, width: number) => {
    const layerCount = 5;
    const spacing = (height * 0.7) / (layerCount + 1);

    colors.current = generateColorPalette(baseHue.current);

    waveLayers.current = colors.current.map((color, index) => ({
      color,
      offsetY: height + 100,
      targetY: spacing * (index + 1),
      progress: 0,
      delay: index * 300,
      frequency: 0.008 + Math.random() * 0.012,
      amplitude: 6 + Math.random() * 12,
    }));

    let wallWidth = 125 + 30;
    if (width > 1000) {
      wallWidth = width * 0.3 + 30;
    }

    wall.current = {
      color: colors.current[colors.current.length - 1],
      progress: 0,
      delay: 1600,
      targetWidth: wallWidth,
    };
  };

  const draw = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    const bgColor = `hsl(${baseHue.current}, 80%, 10%)`;
    const fadeDuration = 1000; // 1 second
    const opacity = Math.min(time / fadeDuration, 1);

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = `rgba(0,0,0,0)`; // clear to transparent
    ctx.fillRect(0, 0, width, height);

    waveLayers.current.forEach((layer, index) => {
      if (time < layer.delay) return;

      const elapsed = time - layer.delay;
      const duration = 800;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);

      layer.offsetY =
        layer.targetY + (height + 100 - layer.targetY) * (1 - eased);

      ctx.beginPath();
      ctx.moveTo(0, layer.offsetY);

      const segmentWidth = 20;
      for (let x = 0; x <= width + segmentWidth; x += segmentWidth) {
        const y =
          Math.sin(x * layer.frequency + index) * layer.amplitude +
          layer.offsetY;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width + 50, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      ctx.fillStyle = layer.color;
      ctx.fill();
    });

    if (time > wall.current.delay) {
      const elapsed = time - wall.current.delay;
      const duration = 800;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);

      const wallWidth = wall.current.targetWidth * eased;

      ctx.fillStyle = wall.current.color;
      ctx.fillRect(width - wallWidth, 0, wallWidth, height);
    }
  };

  const startAnimation = () => {
    const ctx = ctxRef.current;
    const { width, height } = dims.current;
    if (!ctx) return;

    let start = performance.now();

    const animate = (now: number) => {
      const time = now - start;
      draw(ctx, width, height, time);

      const animatingWaves = waveLayers.current.some(
        (layer) => layer.offsetY > layer.targetY + 1
      );

      const animatingWall = time < wall.current.delay + 800;

      if (animatingWaves || animatingWall || time < 1000) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        draw(ctx, width, height, Infinity);
        animationRef.current = null;
      }
    };

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
  };

  const reset = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const { width, height } = dims.current;
    baseHue.current = Math.floor(Math.random() * 360);
    initLayers(height, width);
    startAnimation();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = container.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    ctxRef.current = ctx;
    dims.current = { width, height };

    initLayers(height, width);
    startAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative rounded-[8px] overflow-hidden z-0"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <button
        onClick={reset}
        className="absolute bottom-4 right-4 z-30 text-white px-3 py-1 text-sm rounded-md hover:shadow hover:bg-gray-90 cursor-pointer"
      >
        <FaArrowRotateRight />
      </button>
    </div>
  );
};

export default TitleWave;
