'use client';

export const UmamiCounter = () => {
  return (
    <div className="hanken-grotesk text-sm bg-neutral-900/60 backdrop-blur-md border border-neutral-800 text-neutral-400 px-4 py-2 rounded-full shadow-xl">
      You're the <span className="text-white font-medium" data-umami-event="visitor-count-view">2,451</span>st visitor
    </div>
  )
}
