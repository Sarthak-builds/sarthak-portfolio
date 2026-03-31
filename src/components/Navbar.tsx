"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiSun, FiMoon, FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import CommandPalette from "./ui/CommandPalette";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md bg-white/70 dark:bg-[#0a0a0a]/70 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 md:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:scale-105 transition-transform active:scale-95 cursor-pointer">
                <Image 
                  src="/assets/images/sarthak_mee.jpeg" 
                  alt="Logo" 
                  width={32} 
                  height={32} 
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/projects" className="hover:text-black dark:hover:text-white transition-colors">
                Projects
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-neutral-500 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
            >
              <FiSearch className="w-4 h-4" />
              <span className="text-xs font-medium">Search</span>
              <div className="hidden sm:flex gap-1">
                <span className="px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-[10px] shadow-sm">Ctrl</span>
                <span className="px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-[10px] shadow-sm">K</span>
              </div>
            </button>

            <div className="w-[1px] h-6 bg-zinc-200 dark:bg-zinc-800 mx-1" />

            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-neutral-600 dark:text-neutral-400 transition-colors active:scale-90"
              aria-label="Toggle Theme"
            >
              {currentTheme === "dark" ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
