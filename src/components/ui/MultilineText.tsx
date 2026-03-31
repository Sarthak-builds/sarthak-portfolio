"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePretext } from "@/hooks/usePretext";

interface MultilineTextProps {
  text: string;
  maxLines: number;
  lineHeight: number;
  fontSize: string;
  fontFamily: string;
  className?: string;
  showMoreLabel?: React.ReactNode;
  showLessLabel?: React.ReactNode;
}

export const MultilineText: React.FC<MultilineTextProps> = ({
  text,
  maxLines,
  lineHeight,
  fontSize,
  fontFamily,
  className = "",
  showMoreLabel = "Read More",
  showLessLabel = "Show Less",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update width on resize
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const res = usePretext(text, {
    fontSize,
    fontFamily,
    lineHeight,
    maxWidth: containerWidth,
  });

  const needsExpansion = res.lineCount > maxLines;
  const totalHeight = res.height;
  const collapsedHeight = maxLines * lineHeight;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div 
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ 
          maxHeight: isExpanded ? totalHeight : (needsExpansion ? collapsedHeight : 'none'),
          // We use line-clamp as a fallback but pretext gives us the definitive answer
        }}
      >
        <p className={!isExpanded && needsExpansion ? "line-clamp-2" : ""}>
          {text}
        </p>
      </div>
      
      {needsExpansion && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-neutral-400 dark:text-white/40 mt-1 flex items-center gap-1 hover:underline cursor-pointer focus:outline-none"
        >
          {isExpanded ? showLessLabel : showMoreLabel}
        </button>
      )}
    </div>
  );
};
