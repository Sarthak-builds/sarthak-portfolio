"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiCode, FiBriefcase, FiLayers, FiGithub, FiX } from "react-icons/fi";

const items = [
  { id: "contributions", title: "GitHub Activity", icon: <FiGithub />, description: "Check my latest coding contributions" },
  { id: "experience", title: "Experience", icon: <FiBriefcase />, description: "View my professional work history" },
  { id: "stack", title: "Skills & Tech", icon: <FiLayers />, description: "Explore the tools and technologies I use" },
  { id: "projects", title: "Projects", icon: <FiCode />, description: "See the products I've built" },
];

export default function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 top-1/4 -translate-x-1/2 w-full max-w-lg z-[1001] p-4"
          >
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center px-4 py-3 border-b border-zinc-100 dark:border-zinc-800">
                <FiSearch className="text-zinc-400 mr-3" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What are you looking for?"
                  className="bg-transparent border-none outline-none flex-1 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-zinc-400"
                  onKeyDown={(e) => {
                    if (e.key === "Escape") onClose();
                    if (e.key === "Enter" && filteredItems.length > 0) {
                      handleSelect(filteredItems[0].id);
                    }
                  }}
                />
                <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                  <FiX />
                </button>
              </div>

              <div className="max-h-80 overflow-y-auto p-2 no-scrollbar">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id)}
                      className="w-full flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all text-left group"
                    >
                      <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-neutral-600 dark:text-zinc-400 group-hover:bg-white dark:group-hover:bg-black group-hover:shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</div>
                        <div className="text-xs text-neutral-500">{item.description}</div>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="text-center py-6 text-sm text-neutral-500">
                    No results found for "{query}"
                  </div>
                )}
              </div>

              <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800/50 flex justify-between items-center text-[10px] text-neutral-400">
                <div className="flex gap-3">
                  <span>Enter to select</span>
                  <span>Esc to close</span>
                </div>
                <div className="pixel-grid uppercase tracking-tighter">Sarthak Portfolio Search</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
