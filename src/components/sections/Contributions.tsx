'use client';

import { GitHubCalendar } from "react-github-calendar";

export default function Contributions() {
  const username = "Sarthak-builds";

  return (
    <section id="contributions" className="py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl mb-4 instrument-serif-regular-italic">
          GitHub Contributions
        </h2>

        <div className=" rounded-xl p-6 shadow-lg overflow-x-auto 
          no-scrollbar px-10">
          <GitHubCalendar
            username={username}
            // Optional props - customize as you like
            blockSize={14}          // Size of each square (default 12)
            blockMargin={5}         // Space between squares
            fontSize={12}
            theme={{
              light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'], // Light mode colors
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'], // Dark mode colors
            }}
            hideColorLegend        // Optional: remove the color explanation legend
            hideMonthLabels        // Optional: cleaner look
            style={{
              color: 'inherit',    // Inherits your site's text color
            }}
          />
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          Last 1 year of contributions • Updated automatically
        </p>
      </div>
    </section>
  );
}