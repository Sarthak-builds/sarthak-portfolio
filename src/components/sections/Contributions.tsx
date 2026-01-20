'use client';

import { GitHubCalendar } from "react-github-calendar";

export default function Contributions() {
  const username = "Sarthak-builds";

  return (
    <section id="contributions" className="py-16 my-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl mb-4 instrument-serif-regular-italic">
          GitHub Contributions
        </h2>

        <div className=" rounded-xl p-6 shadow-lg overflow-x-auto no-scrollbar px-10 border-2 border-white/60 hanken-grotesk">
          <GitHubCalendar
            username={username}

            blockSize={12} 
            blockMargin={4}  
            fontSize={12}
            theme={{
              light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'], 
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'], 
            }}
            style={{
              color: 'inherit',
            }}
          />
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
         A fresh start for 2026: Turning these tiles green, one commit at a time.
        </p>
      </div>
    </section>
  );
}