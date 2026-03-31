"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useSpring } from "framer-motion";
import { prepareWithSegments, layoutNextLine } from "@chenglou/pretext";

/**
 * FluidTextAvoidance
 * -----------------
 * Text flows around a circular gap centered on the mouse cursor.
 * Uses Pretext for accurate measurement and Framer Motion for smooth animation.
 */
interface FluidTextAvoidanceProps {
  /** The raw text to display */
  text: string;
  /** Font size (e.g. "16px") */
  fontSize?: string;
  /** Font family (e.g. "'Inter Tight', sans-serif") */
  fontFamily?: string;
  /** Line height in pixels */
  lineHeight?: number;
  /** Radius (in px) of the circular gap around the cursor */
  avoidanceRadius?: number;
}

export const FluidTextAvoidance: React.FC<FluidTextAvoidanceProps> = ({
  text,
  fontSize = "16px",
  fontFamily = "'Inter Tight', sans-serif",
  lineHeight = 24,
  avoidanceRadius = 80,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position inside the container (relative coordinates)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Prepare the text once – Pretext gives us an array of segments (words)
  const prepared = useMemo(() => {
    return prepareWithSegments(text, `${fontSize} ${fontFamily}`);
  }, [text, fontSize, fontFamily]);

  // Layout information for each line
  type LineInfo = {
    content: string;
    width: number;
    top: number;
    left: number;
  };
  const [lines, setLines] = useState<LineInfo[]>([]);

  // ---------------------------------------------------------------------------
  // Mouse tracking – attach listener to the container element.
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ---------------------------------------------------------------------------
  // Layout loop – runs on every animation frame. Uses Pretext's incremental API
  // to recompute line positions based on the current mouse location.
  // ---------------------------------------------------------------------------
  useEffect(() => {
    let animationFrame: number;
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const segments = prepared.segments; // words array

    const layout = () => {
      const newLines: LineInfo[] = [];
      let cursorY = 0;
      let segmentIndex = 0;

      while (segmentIndex < segments.length) {
        // Compute horizontal reduction based on circular gap.
        const lineCenterY = cursorY + lineHeight / 2;
        const dy = Math.abs(lineCenterY - mousePos.y);
        let reduction = 0;
        if (dy < avoidanceRadius) {
          // chord length of the circle intersecting this line
          const chord = 2 * Math.sqrt(avoidanceRadius * avoidanceRadius - dy * dy);
          reduction = chord;
        }
        const availableWidth = Math.max(30, containerWidth - reduction);

        const layoutResult = layoutNextLine(prepared, segmentIndex, availableWidth, lineHeight);
        if (!layoutResult) break; // safety check
        const { width, height, line, remainingSegments } = layoutResult;

        newLines.push({
          content: line,
          width,
          top: cursorY,
          left: 0,
        });

        cursorY += height;
        segmentIndex = remainingSegments;
      }

      setLines(newLines);
      animationFrame = requestAnimationFrame(layout);
    };

    animationFrame = requestAnimationFrame(layout);
    return () => cancelAnimationFrame(animationFrame);
  }, [prepared, mousePos, avoidanceRadius, lineHeight]);

  // ---------------------------------------------------------------------------
  // Framer‑Motion spring configuration for the floating feel.
  // ---------------------------------------------------------------------------
  const spring = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
  };

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ minHeight: "200px" }}
    >
      {/* Render each line as a motion.div – layout prop enables smooth re‑positioning */}
      {lines.map((line, i) => (
        <motion.div
          key={i}
          layout
          initial={false}
          style={{
            position: "absolute",
            top: line.top,
            left: line.left,
            width: line.width,
            whiteSpace: "pre-wrap",
            fontSize,
            fontFamily,
            lineHeight: `${lineHeight}px`,
            color: "var(--foreground)",
          }}
          transition={spring}
        >
          {line.content}
        </motion.div>
      ))}
    </div>
  );
};
