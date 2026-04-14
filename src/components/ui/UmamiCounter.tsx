'use client';
import React, { useEffect, useState } from 'react';

export const UmamiCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Increment and fetch count
    fetch('https://api.counterapi.dev/v1/sarthak-portfolio/visitors/up')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => setCount(2451)); // Fallback
  }, []);

  return (
    <div className="text-sm bg-neutral-900/60 backdrop-blur-md border border-neutral-800 text-neutral-400 px-4 py-2 rounded-full shadow-xl">
      You're the <span className="text-white font-medium font-pixel-grid" data-umami-event="visitor-count-view">
        {count ? count.toLocaleString() : '...'}
      </span> th visitor
    </div>
  )
}
