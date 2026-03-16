'use client';

import Image from "next/image"
import GuitarString from "../ui/GuitarString"
import { FaEnvelope } from "react-icons/fa"
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiCoffee } from "react-icons/fi"
import Link from "next/link"

export const Hero = () => {
  return (
    <div className="h-auto relative flex flex-col pt-4 w-full">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start relative z-10">

        {/* Left: Image (Photo Booth Style) */}
        <div className="w-full md:w-[35%] flex justify-center md:justify-start">
          <div className="bg-[#111111] p-2.5 rounded-xl shadow-2xl w-full max-w-[280px] transform -rotate-2 border border-neutral-800">
            <div className="flex items-center gap-2 px-2 pb-2 pt-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              <span className="text-[10px] text-neutral-500 font-medium ml-2 tracking-wide">Photo Booth</span>
            </div>
            <Image 
              src="/assets/images/sarthak_mee.jpeg" 
              width={300} 
              height={400} 
              alt="Sarthak" 
              priority 
              className="w-full h-auto rounded-lg object-cover grayscale-0" 
            />
          </div>
        </div>

        {/* Right: Text & Bio */}
        <div className="w-full md:w-[65%] flex flex-col gap-6 text-left md:pt-4">
          <h1 className="text-4xl md:text-5xl instrument-serif-regular text-white tracking-tight">
            Sarthak Shiroty, 21
          </h1>
          
          <div className="inter-tight text-neutral-300 text-[#a1a1aa] text-base md:text-lg leading-relaxed flex flex-col gap-5">
            <p>
              Product-focused Engineer who ships fast. I turn ideas into polished products and obsess over the details that make software feel right.
            </p>
            <p>
              Self-taught <span className="text-white font-medium">Web developer.</span> Breaking the internet to learn how it works.
            </p>
            <p>
              I build <span className="text-white font-medium">pixel-perfect UI</span> with a focus on refining the user experience. When I'm not coding: I'm usually reading, or geeking out over aviation mechanics.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Center: Open to Work + Get in Touch */}
      <div className="mt-16 sm:mt-24 flex flex-col items-center justify-center gap-6 w-full z-10 relative">
        
        {/* Open to Work Status */}
        <div className="flex items-center gap-2.5 text-neutral-300 inter-tight text-base w-full justify-center">
          <div className="w-2 h-2 rounded-full bg-[#00f260] shadow-[0_0_8px_#00f260]"></div>
          <p><span className="text-white font-medium">Open to Work:</span> Full-Time, Freelance, or Collabs.</p>
        </div>

        {/* Contact Links (Full Width, Centered, No BG) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 w-full text-neutral-400">
          <div className="flex items-center gap-6">
            <Link href="https://x.com/Sarthakbuilds" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><FiTwitter className="w-5 h-5" /><span className="text-sm hidden sm:inline">Twitter</span></Link>
            <Link href="https://github.com/Sarthak-builds" target="_blank" className="hover:text-green-400 transition-colors flex items-center gap-2"><FiGithub className="w-5 h-5" /><span className="text-sm hidden sm:inline">GitHub</span></Link>
            <Link href="https://in.linkedin.com/in/sarthak-shiroty-8240bb357" target="_blank" className="hover:text-blue-400 transition-colors flex items-center gap-2"><FiLinkedin className="w-5 h-5" /><span className="text-sm hidden sm:inline">LinkedIn</span></Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=sarthakshiroty20@gmail.com" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><FiMail className="w-5 h-5" /><span className="text-sm hidden sm:inline">Email</span></Link>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-neutral-400 inter-tight">
            <div className="flex items-center gap-2">
              <span className="text-[#f43f5e] text-lg leading-none">📍</span> 
              <span>Indore, India</span>
            </div>
          </div>
        </div>

      </div>

      {/* Separator String */}
      <div className="relative mt-16 md:mt-24 w-full">
        <GuitarString />
      </div>
    </div>
  )
}