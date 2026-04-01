'use client';

import Image from "next/image"
import SpotifyBar from "../ui/SpotifyBar"
import SocialLinks from "../ui/SocialLinks"

export const Hero = () => {
  return (
    <div className="h-auto relative flex flex-col pt-4 w-full">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start relative z-10">

        {/* Left: Image (Photo Booth Style) and Social Links */}
        <div className="w-full md:w-[35%] flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center gap-4 w-full max-w-[280px]">
            <div className="bg-[#111111] p-2.5 rounded-xl shadow-2xl w-full transform -rotate-2 border border-neutral-800 group/image">
              <div className="flex items-center gap-2 px-2 pb-2 pt-1 border-b border-neutral-800 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                <span className="text-[10px] text-neutral-500 font-medium ml-2 tracking-wide">  📍Indore, India</span>
              </div>
              <div className="relative overflow-hidden rounded-lg min-h-[240px]">
                <Image 
                  src="/assets/images/sarthak_mee.jpeg" 
                  width={300} 
                  height={400} 
                  alt="Sarthak" 
                  priority 
                  className="w-full h-auto object-cover absolute inset-0 transition-opacity duration-700 opacity-100 group-hover/image:opacity-0" 
                />
                <Image 
                  src="/assets/images/sarthak_meee.jpeg" 
                  width={300} 
                  height={400} 
                  alt="Sarthak Hover" 
                  priority 
                  className="w-full h-auto object-cover absolute inset-0 transition-opacity duration-700 opacity-0 group-hover/image:opacity-100 scale-105" 
                />
              </div>
            </div>
            
            <div className="flex gap-4 py-3 px-3 items-center justify-center w-full mt-2">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Right: Text & Bio */}
        <div className="w-full md:w-[65%] flex flex-col gap-6 text-left md:pt-4">
          <h1 className="text-4xl md:text-5xl instrument-serif-regular text-white tracking-tight">
            Sarthak Shiroty, 21
          </h1>
          
          <div className="inter-tight text-neutral-300 text-[#a1a1aa] text-base md:text-base leading-relaxed flex flex-col gap-5">
            <p>
              Product-focused Engineer who ships fast. I turn ideas into polished products and obsess over the details that make software feel right. Breaking the internet to learn how it works.
            </p>
            
            <p>
              I build <span className="text-white font-medium">pixel-perfect UI</span> with a focus on refining the user experience. When I'm not coding: I'm usually reading, or geeking out over aviation mechanics.
            </p>
            <p className="flex flex-wrap items-center gap-2.5 mt-2">
              <span className="w-2 h-2 rounded-full bg-[#00f260] shadow-[0_0_8px_#00f260] inline-block shrink-0"></span>
              <span><span className="text-white font-medium">Open to Work:</span> Full-Time, Freelance, or Collabs.</span>
            </p>
          </div>
        </div>

      </div>

      {/* Spotify Status Bar */}
      <div className="relative mt-12 w-full max-w-[500px]">
        <SpotifyBar />
      </div>
    </div>
  )
}
