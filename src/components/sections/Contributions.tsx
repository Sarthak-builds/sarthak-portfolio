'use client';

import { GitHubCalendar } from "react-github-calendar";

export default function Contributions() {
  const username = "Sarthak-builds";

  return (
    <section id="contributions" className="py-8 mt-6 md:mt-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl instrument-serif-regular-italic text-white">
          GitHub Contributions
        </h2>

        {/* Scalable Container with Hidden Scrollbar */}
        <div className="rounded-xl p-6 shadow-lg overflow-hidden px-4 md:px-10 hanken-grotesk w-full md:w-auto text-white flex justify-center">
          {/* Inner wrapper ensures content width triggers scroll */}
          <div className="w-fit min-w-full md:min-w-0">
            <GitHubCalendar
              username={username}
              blockSize={13}
              blockMargin={4}
              fontSize={14}
              theme={{
                light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              style={{
                color: 'inherit',
              }}
            />
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          "A fresh start for 2026: Turning these tiles green, one commit at a time."
        </p>
      </div>
    </section>
  );
}