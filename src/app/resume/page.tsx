import React from 'react';
import Link from 'next/link';
import { HiDownload, HiArrowLeft } from 'react-icons/hi';

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-[#f7f7f5] dark:bg-black text-neutral-900 dark:text-white p-4 md:p-8 flex flex-col items-center transition-colors duration-300">
            {/* Header / Actions */}
            <div className="w-full max-w-4xl flex justify-between items-center mb-8">
                <Link 
                    href="/" 
                    className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    <HiArrowLeft /> Back to Home
                </Link>
                
                <a 
                    href="/assets/images/Resume.webp" 
                    download="Sarthak_Shiroty_Resume.png"
                    className="flex items-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-2 px-6 rounded-full transition-all hover:scale-105 active:scale-95"
                >
                    <HiDownload /> Download Resume
                </a>
            </div>

            {/* Resume Viewer */}
            <div className="w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-2xl transition-colors duration-300">
                <div className="relative w-full aspect-[1/1.414]">
                    <img 
                        src="/assets/images/Resume.webp" 
                        alt="Sarthak Shiroty Resume" 
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Footer space */}
            <div className="mt-12 text-neutral-500 dark:text-neutral-600 text-sm">
                Sarthak Shiroty • Portfolio 2026
            </div>
        </div>
    );
}
