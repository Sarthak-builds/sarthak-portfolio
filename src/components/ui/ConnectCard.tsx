"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ConnectCardProps {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  children: React.ReactNode;
}

export default function ConnectCard({ name, username, bio, avatar, children }: ConnectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-72 h-44 z-[1000] rounded-xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black"
          >
            {/* Split Background */}
            <div className="absolute inset-0 flex flex-col">
              <div className="h-[45%] bg-zinc-50 dark:bg-zinc-100 flex items-center justify-center">
                <span className="dot-matrix text-lg font-bold tracking-widest text-black/80">
                  BREAK YOUR LIMITS
                </span>
                {/* Cat sticker/icon on the right */}
                <span className="absolute right-4 top-10 text-xl hidden dark:block">🐱</span>
              </div>
              <div className="h-[55%] bg-black" />
            </div>

            {/* Avatar - Floating on the split line */}
            <div className="absolute top-[45%] left-6 -translate-y-1/2">
              <div className="w-16 h-16 rounded-full border-4 border-black dark:border-black overflow-hidden bg-white">
                <Image 
                  src={avatar} 
                  alt={name} 
                  width={64} 
                  height={64} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Follow Button */}
            <div className="absolute right-4 top-[55%] -translate-y-1/2">
              <button className="px-3 py-1 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors">
                Follow
              </button>
            </div>

            {/* Profile Info */}
            <div className="absolute bottom-4 left-6 text-white text-left">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold">{name}</span>
                <span className="text-blue-400 text-xs text-[10px]">✅</span>
              </div>
              <div className="text-[10px] text-zinc-400">@{username}</div>
              <div className="text-[10px] mt-2 leading-tight max-w-[200px]">
                {bio}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
