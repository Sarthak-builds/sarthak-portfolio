'use client';

import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function GuitarString() {
  const path = useMotionValue("");
  const yPoint = useSpring(50, {
    stiffness: 300,
    damping: 15,
    mass: 1
  });
  const xPoint = useMotionValue(50);
  const d = useTransform([xPoint, yPoint], ([x, y]) => {
    return `M0 50 Q${x} ${y} 100 50`;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const relativeX = ((clientX - left) / width) * 100;
    const relativeY = ((clientY - top) / height) * 100;
    xPoint.set(relativeX);
    yPoint.set(relativeY);
  };

  const handleMouseLeave = () => {
    yPoint.set(50);
    xPoint.set(50);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // Prevent scrolling strictly while string is being successfully engaged? 
    // Usually preventing default here is needed to stop scroll, but might annoy user.
    // Let's try to just capture the movement without preventing default for now, 
    // or maybe prevent default if it's strictly horizontal?
    // The current logic doesn't prevent default. 
    // However, for a "string" effect, usually we want to grab it.
    // But this overlay is BIG (h-60). Blocking scroll on h-60 is bad.
    // I will simply allow the default behavior (scroll) but also update the string.
    // It might look a bit weird if page scrolls AND string moves, but better than broken scroll.

    // Actually, often these effects use `e.touches[0]`.
    const { clientX, clientY } = e.touches[0];
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const relativeX = ((clientX - left) / width) * 100;
    const relativeY = ((clientY - top) / height) * 100;
    xPoint.set(relativeX);
    yPoint.set(relativeY);
  };

  const handleTouchEnd = () => {
    yPoint.set(50);
    xPoint.set(50);
  };

  useEffect(() => {
    path.set("M0 50 Q50 50 100 50");
  }, [path]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      /* onTouchCancel is also good practice */
      onTouchCancel={handleTouchEnd}
      className=" absolute -top-5 flex h-60 w-full flex-col justify-center cursor-crosshair "
    >
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d={d}
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          className="stroke-blue-400"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

    </div>
  );
}