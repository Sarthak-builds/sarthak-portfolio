
import Image from "next/image"
import GuitarString from "../ui/GuitarString"
import SocialLinksHero from "../ui/SocialLinksHero"
import { FaEnvelope } from "react-icons/fa"
import SocialLinks from "../ui/SocialLinks"
import StatusLine from "../ui/statusLine"

export const Hero = () => {

  return (
    <div className=" h-auto md:max-h-120 mt-5 md:mt-12 relative flex flex-col  pt-4 px-4 md:px-12 ">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start">
        {/* Border element - now visible on mobile (user requested) */}
        <div className="min-w-45 min-h-45 absolute top-4 -rotate-5 border-amber-100 border-2 rounded-lg special-gothic block"></div>

        {/* Image and Interaction Section - Side-by-side on mobile */}
        <div className="min-h-50 min-w-50 flex flex-row md:flex-col items-center gap-4 md:gap-0 z-10 w-full md:w-auto justify-center md:justify-start">
          <Image src="/assets/images/sarthak_mee.jpeg" width={180} height={250} alt="Sarthak" className=" shadow-white/50 rounded-3xl w-32 md:w-[180px] h-auto" />

          <div className="relative group flex flex-col items-start md:items-center justify-center w-fit mx-auto my-2 md:mx-auto">

            <div className="text-sm md:text-base mt-0 md:mt-2 instrument-serif-regular font-light italic text-white md:right-10 flex items-center gap-2">
              Get in Touch <i className="ri-arrow-down-s-fill md:hidden"></i>
            </div>
            <div className="hidden md:block text-4xl duration-200 group-hover:rotate-180 cursor-pointer absolute top-5 ">
              <i className="ri-arrow-down-s-fill z-50"></i>

            </div>

            {/* Mobile Socials - Visible & Side by Side on Mobile */}
            <div className="flex md:hidden flex-col items-start mt-2 scale-90 origin-top-left">
              <div className="bg-white/5 text-sm px-3 py-3 rounded-lg shadow-lg whitespace-nowrap flex gap-2 flex-col">
                {/* Simplified socials for mobile side-by-side to save space */}
                <SocialLinks></SocialLinks>
                <div className="mt-1 flex flex-col justify-center hanken-grotesk text-xs text-white/80">
                  <p>📍 Indore</p>
                </div>
              </div>
            </div>

            {/* Desktop Socials - Hover */}
            <div className="absolute top-12 hidden md:flex flex-col items-center invisible opacity-0 group-hover:visible group-hover:opacity-100 scale-y-50 group-hover:scale-y-100 origin-top ease-in-out transition-all duration-200 z-50 scale-x-50 group-hover:scale-x-100">
              <div className="bg-white/5 text-sm px-4 py-4 rounded-lg shadow-lg whitespace-nowrap flex gap-3 scale-80 flex-col">
                <SocialLinks></SocialLinks>
                <div className="mt-2 flex flex-col justify-center hanken-grotesk text-lg">
                  <p>📍 Indore, India</p>
                  <p className="flex justify-center items-center gap-2"><FaEnvelope></FaEnvelope>sarthakshiroty20@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col w-full gap-4 text-left">
          <div className="text-white">
            <h1 className=" text-3xl md:text-4xl instrument-serif-regular-italic italic">Hi, I'm Sarthak Shiroty</h1>
            <div className="text-white/50 hanken-grotesk text-xs md:text-sm w-full py-1">21 • Engineer • Web Developer • Tech Brother and Builder</div>
          </div>

          <div className="text-white/60 hanken-grotesk leading-7 md:leading-8 text-sm md:text-base px-0">
            I am a <span className="text-white">product-focused engineer</span> who build<span className="text-white"> pixel-perfect UI</span>  with a focus on refining the user experience. <br>
            </br>Self-taught <span className="text-white"> Web developer, driven by designer’s intuition.</span> breaking the internet to learn how it works. Currently building an AI lip-syncing platform.
            <br></br>
            <span className="text-white">When I’m not coding: </span>I’m usually deep down a YouTube video, reading, or geeking out over aviation mechanics.
            <br></br>
            <div className="flex justify-start">
              <StatusLine></StatusLine>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-10 md:mt-0">
        <GuitarString />
      </div>
    </div>
  )
}