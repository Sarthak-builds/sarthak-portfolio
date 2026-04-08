"use client";

import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

interface QuoteData {
  quote: string;
  author: string;
}

const QuoteBar = () => {
    const [data, setData] = useState<QuoteData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const res = await fetch("https://dummyjson.com/quotes/random");
                const json = await res.json();
                setData({ quote: json.quote, author: json.author });
            } catch (e) {
                console.error("Quote fetch error", e);
                // Fallback quote if fetch fails
                setData({
                    quote: "The only way to do great work is to love what you do.",
                    author: "Steve Jobs"
                });
            } finally {
                setLoading(false);
            }
        };

        fetchQuote();
    }, []);

    if (loading) return (
        <div className="h-[140px] w-full bg-[#111111]/30 rounded-xl animate-pulse" />
    );

    if (!data) return null;

    return (
        <div className="relative w-full bg-transparent rounded-xl p-6 md:p-8 overflow-hidden flex flex-col justify-center group">
            {/* The faded background Quote Icon */}
            <FaQuoteLeft className="absolute top-2 -left-2 w-32 h-32 md:w-40 md:h-40 text-white/[0.04] rotate-[-5deg] transform-gpu transition-transform duration-700 group-hover:scale-105 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-4">
                <p className="font-mono text-neutral-300/90 text-base md:text-lg italic leading-relaxed tracking-wide">
                    "{data.quote}"
                </p>
                <div className="text-right w-full mt-2">
                    <span className="font-mono text-neutral-500/80 text-sm md:text-base italic">
                        — {data.author}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default QuoteBar;
