'use client';

import { motion, useScroll } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-[2px] bg-neutral-200/80 z-[99999]"
      style={{ 
        scaleX: scrollYProgress,
        transformOrigin: "0%",
        originX: 0
      }}
    />
  );
};
