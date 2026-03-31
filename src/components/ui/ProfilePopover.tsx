"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ProfilePopoverProps {
  imageSrc: string;
  children: React.ReactNode;
}

export default function ProfilePopover({ imageSrc, children }: ProfilePopoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative z-[2000]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="absolute bottom-full mb-6 left-1/2 -translate-x-1/2 z-[3000] w-[320px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black/90 backdrop-blur-xl pointer-events-none"
          >
            <div className="p-1.5">
              <img 
                src={imageSrc} 
                alt="Profile Preview" 
                className="w-full h-auto rounded-xl shadow-inner border border-zinc-100 dark:border-zinc-900"
              />
            </div>
            
            {/* Added a subtle blue accent line at bottom */}
            <div className="h-1 w-full bg-blue-500/30 blur-[1px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
