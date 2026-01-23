'use client';

import Image from "next/image"
import GuitarString from "../ui/GuitarString"
import SocialLinksHero from "../ui/SocialLinksHero"
import { FaEnvelope } from "react-icons/fa"
import SocialLinks from "../ui/SocialLinks"
import StatusLine from "../ui/statusLine"

export const Hero = () => {
  return (
    <div className=" h-auto md:max-h-120 mt-5 md:mt-12 relative flex flex-col pt-4 px-4 md:px-12 ">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start relative z-10">

        {/* Image and Socials Column */}
        <div className="flex flex-col items-center gap-6 md:gap-4 z-10 w-full md:w-auto">

          {/* Image Container with Border */}
          <div className="relative w-fit">
            {/* Decorative Border */}
            <div className="absolute inset-0 -rotate-6 rounded-3xl border-2 border-amber-500 dark:border-amber-100 special-gothic pointer-events-none scale-108"></div>

            <Image src="/assets/images/sarthak_mee.jpeg" width={180} height={250} alt="Sarthak" className="relative shadow-lg rounded-3xl w-48 md:w-[250px] h-auto object-cover z-10" />
          </div>

          <div className="relative group flex flex-col items-center justify-center w-fit">

            <div className="hidden md:flex text-sm md:text-base mt-2 hanken-grotesk text-neutral-800 dark:text-white items-center gap-2 cursor-default relative backdrop-blur-sm bg-white/80 dark:bg-black/40 md:bg-transparent px-2 rounded-md">
              Get in Touch <i className="ri-arrow-down-s-fill md:hidden"></i>
            </div>

            <div className="hidden md:block text-4xl duration-200 group-hover:rotate-180 cursor-pointer absolute top-5 text-neutral-800 dark:text-white">
              <i className="ri-arrow-down-s-fill z-50"></i>
            </div>

            {/* Mobile Socials (Always Visible) */}
            <div className="md:hidden flex flex-col items-center mt-2 ">
              <div className="bg-white/80 dark:bg-white/5 text-sm px-8 py-3 rounded-xl shadow-lg whitespace-nowrap flex gap-1 flex-col backdrop-blur-md border border-neutral-100 dark:border-white/10">
                <SocialLinks></SocialLinks>
                <div className="mt-2 text-sm text-neutral-700 dark:text-white/80 flex items-center justify-center gap-2">
                  <FaEnvelope className="text-neutral-900 dark:text-white" /> sarthakshiroty20@gmail.com
                </div>
                <div className="mt-1 flex flex-col justify-center items-center hanken-grotesk text-sm text-neutral-500 dark:text-white/50">
                  <p>📍 Indore, India</p>
                </div>
              </div>
            </div>

            {/* Desktop Hover Socials */}
            <div className="absolute top-12 hidden md:flex flex-col items-center invisible opacity-0 group-hover:visible group-hover:opacity-100 scale-y-50 group-hover:scale-y-100 origin-top ease-in-out transition-all duration-200 z-50 scale-x-50 group-hover:scale-x-100">
              <div className="bg-neutral-100 dark:bg-white/5 text-sm px-4 py-4 rounded-lg shadow-lg whitespace-nowrap flex gap-3 scale-80 flex-col backdrop-blur-md border border-neutral-200 dark:border-white/10">
                <SocialLinks></SocialLinks>
                <div className="mt-2 flex flex-col justify-center hanken-grotesk text-lg text-neutral-800 dark:text-white">
                  <p>📍 Indore, India</p>
                  <p className="flex justify-center items-center gap-2"><FaEnvelope></FaEnvelope>sarthakshiroty20@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col w-full gap-4 text-left md:text-left">
          <div className="text-neutral-900 dark:text-white">
            <h1 className=" text-3xl md:text-4xl instrument-serif-regular-italic italic">Hi, I'm Sarthak Shiroty</h1>
            <div className="text-neutral-500 dark:text-white/50 hanken-grotesk text-xs md:text-sm w-full py-1">21 • Engineer • Web Developer • Tech Brother and Builder</div>
          </div>

          <div className="text-neutral-600 dark:text-white/60 hanken-grotesk leading-7 md:leading-8 text-base md:text-base px-0">
            I am a <span className="text-neutral-900 dark:text-white font-medium">product-focused engineer</span> who build<span className="text-neutral-900 dark:text-white font-medium"> pixel-perfect UI</span>  with a focus on refining the user experience. <br>
            </br>Self-taught <span className="text-neutral-900 dark:text-white font-medium"> Web developer, driven by designer’s intuition.</span> breaking the internet to learn how it works. Currently building portfolio-forge to understand backend.
            <br></br>
            <span className="text-neutral-900 dark:text-white font-medium">When I’m not coding: </span>I’m usually deep down a YouTube video, reading, or geeking out over aviation mechanics.
            <br></br>
            <div className="flex justify-center md:justify-start">
              <StatusLine></StatusLine>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-16 md:mt-0">
        <GuitarString />
      </div>
    </div>
  )
}