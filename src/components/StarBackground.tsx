"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";

const StarBackground = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    let P5Constructor: typeof p5;

    const loadSketch = async () => {
      const p5Module = await import("p5"); // Dynamic import
      P5Constructor = p5Module.default;

      if (!sketchRef.current) return;

      const sketch = (p: p5) => {
        let starFieldWidth: number;
        let starFieldHeight: number;

        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight);
          p.noStroke();
          starFieldWidth = p.windowWidth;
          starFieldHeight = p.windowHeight;

          p.background(10);

          const density = 0.0004;
          const totalStars = Math.floor(starFieldWidth * starFieldHeight * density);

          for (let i = 0; i < totalStars; i++) {
            const x = p.random(0, starFieldWidth);
            const y = p.random(0, starFieldHeight);
            const size = p.random(1, 2);
            const alpha = p.random(150, 255);
            p.fill(255, 255, 255, alpha);
            p.ellipse(x, y, size);
          }
        };

        p.draw = () => {
          // Static background
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
          p.background(10);

          const density = 0.0004;
          const totalStars = Math.floor(p.width * p.height * density);
          for (let i = 0; i < totalStars; i++) {
            const x = p.random(0, p.width);
            const y = p.random(0, p.height);
            const size = p.random(1, 2);
            const alpha = p.random(150, 255);
            p.fill(255, 255, 255, alpha);
            p.ellipse(x, y, size);
          }
        };
      };

      p5Instance.current = new P5Constructor(sketch, sketchRef.current!);
    };

    loadSketch();

    return () => {
      p5Instance.current?.remove();
    };
  }, []);

  return (
    <div
      ref={sketchRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};

export default StarBackground;
