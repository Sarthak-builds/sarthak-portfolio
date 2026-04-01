"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
  message?: string;
}

const SpotifyBar = () => {
    const [data, setData] = useState<SpotifyData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/now-playing");
                const json = await res.json();
                setData(json);
            } catch (e) {
                console.error("Spotify fetch error", e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 10000); // refresh every 10s
        return () => clearInterval(interval);
    }, []);

    if (loading) return (
        <div className="h-6 w-full bg-neutral-900/40 rounded animate-pulse" />
    );

    if (!data || (!data.title && !data.message)) {
        return (
             <div className="flex items-center gap-2 text-neutral-500 text-sm hanken-grotesk px-2 opacity-50">
                <FaSpotify className="w-4 h-4" />
                <span>Not listening to anything right now</span>
            </div>
        );
    }
    
    if (data.message === "No credentials") {
         return (
             <div className="flex items-center gap-2 text-amber-500/60 text-xs hanken-grotesk px-2 italic">
                <FaSpotify className="w-4 h-4" />
                <span>Spotify credentials needed for real-time tracking</span>
            </div>
        );
    }

    return (
        <a 
            href={data.songUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 py-2 px-3 rounded-full bg-[#1DB954]/5 border border-[#1DB954]/20 hover:bg-[#1DB954]/10 hover:border-[#1DB954]/40 transition-all duration-300 w-full"
        >
            <div className="flex items-center gap-3 overflow-hidden">
                <div className="relative w-8 h-8 flex-shrink-0">
                    <Image 
                        src={data.albumImageUrl || "/assets/images/image.png"} 
                        alt="Album art" 
                        fill 
                        className={`rounded-full object-cover shadow-lg transition-all duration-500 ${data.isPlaying ? 'animate-spin-slow' : 'grayscale-[50%] opacity-70 group-hover:grayscale-0 group-hover:opacity-100'}`}
                    />
                    {data.isPlaying && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#1DB954] rounded-full border-2 border-black flex items-center justify-center">
                            <div className="w-1 h-1 bg-white rounded-full animate-ping" />
                        </div>
                    )}
                </div>
                
                <div className="flex flex-col overflow-hidden">
                   <div className="flex items-center gap-1.5 overflow-hidden">
                        <span className="text-[10px] font-bold text-[#1DB954] uppercase tracking-widest whitespace-nowrap">
                            {data.isPlaying ? 'Currently Jamming to' : 'Last Played'}
                        </span>
                        {data.isPlaying && (
                            <div className="flex gap-0.5 items-end h-2 pb-0.5">
                                <div className="w-0.5 h-1 bg-[#1DB954] animate-music-bar-1" />
                                <div className="w-0.5 h-2 bg-[#1DB954] animate-music-bar-2" />
                                <div className="w-0.5 h-1.5 bg-[#1DB954] animate-music-bar-3" />
                            </div>
                        )}
                   </div>
                   <div className="flex items-center gap-1 overflow-hidden">
                        <span className="text-white font-medium text-sm truncate max-w-[200px] md:max-w-none">
                            {data.title}
                        </span>
                        <span className="text-neutral-500 text-xs px-1">•</span>
                        <span className="text-neutral-400 text-xs truncate italic">
                            {data.artist}
                        </span>
                   </div>
                </div>
            </div>
            
            <FaSpotify className="w-5 h-5 text-[#1DB954] group-hover:scale-110 transition-transform" />
            
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                @keyframes music-bar-1 { 0%, 100% { height: 4px; } 50% { height: 10px; } }
                @keyframes music-bar-2 { 0%, 100% { height: 8px; } 50% { height: 4px; } }
                @keyframes music-bar-3 { 0%, 100% { height: 6px; } 50% { height: 12px; } }
                .animate-music-bar-1 { animation: music-bar-1 0.8s ease-in-out infinite; }
                .animate-music-bar-2 { animation: music-bar-2 0.7s ease-in-out infinite; }
                .animate-music-bar-3 { animation: music-bar-3 0.9s ease-in-out infinite; }
            `}</style>
        </a>
    );
};

export default SpotifyBar;
