'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sun, Moon, Command } from 'lucide-react';
import { CommandMenu } from './CommandMenu';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '#experience' },
  { name: 'Resume', href: '/resume' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandMenuOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-auto px-4 ${isScrolled ? 'top-4' : 'top-6'}`}>
        <div className="flex items-center gap-2 p-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-2xl">
          <div className="flex items-center px-2">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-full block ${
                    pathname === item.href 
                      ? 'text-white' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>

                <AnimatePresence>
                  {item.name === 'Resume' && hoveredItem === 'Resume' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-4 z-[60] pointer-events-none"
                    >
                      <div className="relative group/resume">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg blur-lg" />
                        <div className="relative w-56 h-52 md:w-64 md:h-80 overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl">
                          <img
                            src="/assets/images/Resume.webp"
                            alt="Resume Preview"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10" />
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white/80 font-medium whitespace-nowrap uppercase tracking-widest">
                            Preview
                          </div>
                        </div>
                        {/* Arrow */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-t border-l border-white/10 rotate-45" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-white/10 mx-1" />

          <button
            onClick={() => setIsCommandMenuOpen(true)}
            className="group flex items-center gap-2 px-3 py-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-all text-neutral-400 hover:text-white"
          >
            <Search size={14} />
            <div className="hidden md:flex items-center gap-1 text-[10px] uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
              <span className="px-1.5 py-0.5 rounded border border-white/20 bg-black/50">Ctrl</span>
              <span className="px-1.5 py-0.5 rounded border border-white/20 bg-black/50">K</span>
            </div>
          </button>

          {/* <button className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
            <Sun size={18} />
          </button> */}
        </div>
      </nav>

      <CommandMenu isOpen={isCommandMenuOpen} setIsOpen={setIsCommandMenuOpen} />
    </>
  );
};
