'use client';

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const ROWS = 10;
const COLS = 40; // This will be the logical grid
const TOTAL_CELLS = ROWS * COLS;

export default function InteractiveGrid() {
  const [activeCells, setActiveCells] = useState<Set<number>>(new Set());
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<number>(0);

  // Fetch initial state and poll for updates
  const fetchState = useCallback(async () => {
    try {
      const res = await fetch('/api/grid');
      const data = await res.json();
      if (data.cells) {
        setActiveCells(new Set(data.cells));
        setLastUpdated(Date.now());
      }
    } catch (error) {
      console.error('Failed to fetch grid state:', error);
    }
  }, []);

  useEffect(() => {
    fetchState();
    const interval = setInterval(fetchState, 5000); // Poll every 5 seconds
    return () => clearInterval(interval);
  }, [fetchState]);

  const toggleCell = async (index: number) => {
    // Optimistic update
    setActiveCells((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });

    try {
      setIsSyncing(true);
      const res = await fetch('/api/grid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index }),
      });
      const data = await res.json();
      if (data.cells) {
        setActiveCells(new Set(data.cells));
      }
    } catch (error) {
      console.error('Failed to sync cell:', error);
      // Revert optimization on failure
      fetchState();
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 pt-8">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">
            Communal Canvas &bull; Live
          </span>
        </div>
        <div className="text-[10px] text-neutral-600 uppercase tracking-[0.1em] font-medium">
          {activeCells.size} active cells
        </div>
      </div>

      <div className="relative group">
        {/* Decorative background glow */}
        {/* <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div> */}
        
        <div 
          className="relative grid gap-x-2 gap-y-1.5 justify-center overflow-x-auto no-scrollbar py-4 px-2"
          style={{ 
            gridTemplateColumns: `repeat(${COLS}, minmax(14px, 1fr))`,
            width: '100%'
          }}
        >
          {Array.from({ length: TOTAL_CELLS }).map((_, i) => {
            const isActive = activeCells.has(i);
            return (
              <motion.button
                key={i}
                whileHover={{ 
                  scale: 1.3, 
                  zIndex: 10,
                  transition: { duration: 0.1 }
                }}
                whileTap={{ scale: 0.8 }}
                onClick={() => toggleCell(i)}
                className={cn(
                  "w-3.5 h-3.5 md:w-5 md:h-5 rounded-[3px] transition-all duration-500 ease-out",
                  isActive 
                    ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)] border-transparent" 
                    : "bg-neutral-900/40 hover:bg-neutral-800/60 border border-neutral-800/50"
                )}
                initial={false}
                layout
              />
            );
          })}
        </div>
      </div>

      <div className="text-center">
        <p className="text-[11px] text-neutral-600 italic tracking-wide">
          Click the boxes to toggle them. Your edits are seen by everyone in real-time.
        </p>
      </div>
    </div>
  );
}
