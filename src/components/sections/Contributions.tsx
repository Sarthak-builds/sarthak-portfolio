'use client';

import { GitHubCalendar } from "react-github-calendar";

export default function Contributions() {
  const username = "Sarthak-builds";

  return (
    <section id="contributions" className="mt-16 md:mt-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="dot-matrix text-2xl tracking-tighter text-neutral-900 dark:text-neutral-100 uppercase">
          GitHub Activity
        </h2>
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
          <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-800" />
          <span>Didn't code today</span>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-6 md:p-8 flex flex-col gap-6">
        <div className="overflow-x-auto no-scrollbar flex justify-center py-2">
          <div className="scale-90 md:scale-100 origin-center">
            <GitHubCalendar
              username={username}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              theme={{
                light: ['#f4f4f5', '#d1d5db', '#9ca3af', '#6b7280', '#374151'],
                dark: ['#161b22', '#1e3a8a', '#1d4ed8', '#2563eb', '#60a5fa'],
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-medium text-neutral-500 dark:text-neutral-500 border-t border-zinc-100 dark:border-zinc-800 pt-4">
          <span>206 activities in 2026</span>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-sm bg-zinc-100 dark:bg-[#161b22]" />
              <div className="w-2.5 h-2.5 rounded-sm bg-zinc-300 dark:bg-[#1e3a8a]" />
              <div className="w-2.5 h-2.5 rounded-sm bg-zinc-500 dark:bg-[#2563eb]" />
              <div className="w-2.5 h-2.5 rounded-sm bg-zinc-800 dark:bg-[#60a5fa]" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}