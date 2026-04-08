"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface CubesProps {
  gridSize?: number;
  maxAngle?: number;
  radius?: number;
  borderStyle?: string;
  faceColor?: string;
  rippleColor?: string;
  rippleSpeed?: number;
  autoAnimate?: boolean;
  rippleOnClick?: boolean;
}

const Cubes: React.FC<CubesProps> = ({
  gridSize = 8,
  maxAngle = 45,
  radius = 3,
  borderStyle = "1px solid #333",
  faceColor = "#111",
  rippleColor = "#fff",
  rippleSpeed = 1.5,
  autoAnimate = true,
  rippleOnClick = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cubesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reset rotation to isometric view
    gsap.set(cubesRef.current, {
      rotateX: 60,
      rotateZ: 45,
      transformStyle: "preserve-3d",
    });

    const triggerRipple = (index: number) => {
      // Calculate x, y of the clicked/triggered cube
      const col = index % gridSize;
      const row = Math.floor(index / gridSize);

      cubesRef.current.forEach((cube, i) => {
        if (!cube) return;
        const cRow = Math.floor(i / gridSize);
        const cCol = i % gridSize;
        // Distance from triggered cube
        const dist = Math.sqrt((cRow - row) ** 2 + (cCol - col) ** 2);

        gsap.to(cube, {
          z: 30,
          backgroundColor: rippleColor,
          duration: rippleSpeed * 0.2,
          delay: dist * 0.05,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
          onComplete: () => {
             gsap.to(cube, { backgroundColor: faceColor, duration: rippleSpeed * 0.2 });
          }
        });
      });
    };

    if (autoAnimate) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * (gridSize * gridSize));
        triggerRipple(randomIndex);
      }, 3000);
      return () => clearInterval(interval);
    }
    
    // Add click event listeners
    if (rippleOnClick) {
        cubesRef.current.forEach((cube, idx) => {
            if (cube) {
                cube.onclick = () => triggerRipple(idx);
            }
        });
    }
  }, [gridSize, rippleColor, faceColor, rippleSpeed, autoAnimate, rippleOnClick]);

  const cubes = Array.from({ length: gridSize * gridSize });

  return (
    <div 
        className="w-full h-full flex items-center justify-center overflow-hidden bg-transparent"
        ref={containerRef}
        style={{ perspective: 1000 }}
    >
      <div 
        className="relative grid"
        style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`,
            width: '100%',
            aspectRatio: '1 / 1',
            gap: '8px',
            transform: 'scale(1.2)'
        }}
      >
        {cubes.map((_, i) => (
          <div
            key={i}
            ref={(el) => { cubesRef.current[i] = el; }}
            className="w-full h-full transition-colors cursor-pointer"
            style={{
              backgroundColor: faceColor,
              border: borderStyle,
              borderRadius: `${radius}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Cubes;
