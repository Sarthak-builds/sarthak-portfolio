"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { usePretext } from "@/hooks/usePretext";

export const FishCursor = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredLabel, setHoveredLabel] = useState("");
  
  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Position reference for rotation
  const lastX = React.useRef(0);

  // Spring config for smooth following
  const springConfig = { damping: 25, stiffness: 200, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  // Rotation based on movement direction
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - lastX.current;
      lastX.current = e.clientX;
      
      // Calculate rotation based on horizontal movement
      if (Math.abs(deltaX) > 1) {
        setRotation(deltaX > 0 ? 15 : -15);
      } else {
        setRotation(0);
      }

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Check for elements with data-fish-label
      const target = e.target as HTMLElement;
      const label = target.closest('[data-fish-label]')?.getAttribute('data-fish-label');
      if (label) {
        setHoveredLabel(label);
      } else {
        setHoveredLabel("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Use Pretext to calculate the size of the "water bubble"
  const pretextResult = usePretext(hoveredLabel || " ", {
    fontSize: "12px",
    fontFamily: "'Inter Tight', sans-serif",
    lineHeight: 18,
    maxWidth: 150,
  });

  if (!isMounted) return null;

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[9999]">
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="relative flex items-center gap-4"
      >
        {/* Fluid Circle Cursor */}
        <motion.div
          animate={{
            borderRadius: ["45% 55% 45% 55% / 45% 55% 45% 55%", "55% 45% 55% 45% / 55% 45% 55% 45%"],
            scale: [1, 1.1, 1],
            rotate: rotation,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          // Scale the cursor based on the measured height of the hovered label
          style={{
            // Base size plus a factor of the measured height (max 2x)
            scale: Math.min(2, 1 + pretextResult.height / 200),
          }}
          className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-400 shadow-lg shadow-blue-500/20"
        />

        {/* Water Drop Label - Resizing like Pretext suggests */}
        <AnimatePresence>
          {hoveredLabel && (
            <motion.div
              initial={{ scale: 0, opacity: 0, x: -20 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                x: 0,
                // Water wave effect
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 70%", "60% 40% 30% 70% / 50% 60% 30% 60%", "40% 60% 70% 30% / 40% 50% 60% 70%"]
              }}
              exit={{ scale: 0, opacity: 0, x: -20 }}
              transition={{
                borderRadius: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { type: "spring", damping: 12 }
              }}
              className="bg-blue-500/10 backdrop-blur-xl border border-blue-400/30 px-4 py-2 flex flex-col justify-center min-w-[60px]"
              style={{
                height: pretextResult.height + 20, // Pretext suggested height + padding
              }}
            >
            <motion.p 
              className="text-[11px] text-blue-100 font-medium tracking-wide border-b border-blue-400/20 pb-0.5 mb-0.5"
              animate={{
                letterSpacing: ["0.05em", "0.1em", "0.05em"],
                textShadow: ["0 0 0px #fff", "0 0 4px #fff", "0 0 0px #fff"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
                {hoveredLabel}
            </motion.p>
            <p className="text-[9px] text-blue-300 opacity-60 uppercase tracking-[0.2em] font-bold">
              PRETEXT MEASURED
            </p>
              
              {/* Subtle water reflection */}
              <div className="absolute top-1 left-2 w-full h-[1px] bg-white/20 blur-[1px]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Liquid Trail/Ripples */}
        <motion.div
          className="absolute inset-0 z-[-1]"
          animate={{
            scale: [1, 1.4],
            opacity: [0.4, 0],
          }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div className="w-12 h-12 rounded-full border border-blue-400/20" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FishCursor;
