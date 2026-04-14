'use client';

import { GitHubCalendar } from "react-github-calendar";

export default function Contributions() {
  const username = "Sarthak-builds";

  return (
    <section id="contributions" className="py-8 mt-6 md:mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl text-neutral-900 dark:text-white">
          GitHub Contributions
        </h2>

        <div className="rounded-xl p-6 shadow-lg overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-1 md:px-8 w-full text-neutral-900 dark:text-white flex justify-center scale-95 md:scale-100">
          <div className="w-fit min-w-full md:min-w-0 no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <GitHubCalendar
              username={username}
              blockSize={13}
              blockMargin={4}
              fontSize={14}
              theme={{
                light: ['#ebedf0', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb'],
                dark: ['#161b22', '#1e3a8a', '#1d4ed8', '#2563eb', '#60a5fa'],
              }}
              style={{
                color: 'inherit',
              }}
            />
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          "A fresh start for 2026: Turning these tiles blue, one commit at a time."
        </p>
      </div>
    </section>
  );
}