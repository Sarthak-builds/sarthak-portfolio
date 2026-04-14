'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, Briefcase, PenLine } from 'lucide-react';
import { CommandMenu } from './CommandMenu';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Work', href: '#experience', icon: Briefcase },
  { name: 'Blogs', href: '/blogs', icon: PenLine },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-auto px-4 ${isScrolled ? 'top-4' : 'top-6'}`}>
        <div className="flex items-center gap-2 p-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-2xl transition-colors duration-300">
          <div className="flex items-center px-1">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2.5 transition-colors rounded-full block relative ${
                    pathname === item.href 
                      ? 'text-white' 
                      : 'text-[#909092] hover:text-white'
                  }`}
                >
                  <item.icon size={19} className="relative z-10" />
                  {pathname === item.href && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-white/5 rounded-full z-0"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-[10px] font-medium tracking-wider uppercase text-white pointer-events-none whitespace-nowrap z-[60]"
                    >
                      {item.name}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/10 border-r border-b border-white/10 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-white/10 mx-1" />

          <button
            onClick={() => setIsCommandMenuOpen(true)}
            className="group flex items-center gap-2 px-3 py-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-all text-[#909092] hover:text-white"
          >
            <Search size={14} />
            <div className="hidden md:flex items-center gap-1 text-[10px] uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
              <span className="px-1.5 py-0.5 rounded border border-white/20 bg-black/50">Ctrl</span>
              <span className="px-1.5 py-0.5 rounded border border-white/20 bg-black/50">K</span>
            </div>
          </button>

         
        </div>
      </nav>

      <CommandMenu isOpen={isCommandMenuOpen} setIsOpen={setIsCommandMenuOpen} />
    </>
  );
};
