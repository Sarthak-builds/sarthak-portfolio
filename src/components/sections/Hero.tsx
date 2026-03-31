import Image from "next/image"
import GuitarString from "../ui/GuitarString"
import Link from "next/link"
import { FaGithub, FaXTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa6"
import ProfilePopover from "../ui/ProfilePopover"

export const Hero = () => {
  return (
    <div className="h-auto relative flex flex-col pt-4 w-full">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start relative z-10">

        {/* Left: Image (Photo Booth Style) */}
        <div className="w-full md:w-[35%] flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center gap-6 w-full max-w-[280px]">
            <div className="bg-[#111111] dark:bg-zinc-900 p-2.5 rounded-xl shadow-2xl w-full transform -rotate-2 border border-zinc-200 dark:border-zinc-800 transition-all">
              <div className="flex items-center gap-2 px-2 pb-2 pt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                <span className="text-[10px] text-neutral-500 font-medium ml-2 tracking-wide uppercase font-mono">📍Indore, IN</span>
              </div>
              <Image 
                src="/assets/images/sarthak_mee.jpeg" 
                width={300} 
                height={400} 
                alt="Sarthak" 
                priority 
                className="w-full h-auto rounded-lg object-cover grayscale-[0.2] hover:grayscale-0 transition-all" 
              />
            </div>

            {/* Social Links & Mail below image */}
            <div className="flex flex-col items-center md:items-start gap-4 w-full px-2">
              <div className="flex items-center gap-6">
                <ProfilePopover imageSrc="/assets/images/github_profile.png">
                  <Link href="https://github.com/Sarthak-builds" target="_blank" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-all">
                    <FaGithub className="w-5 h-5" />
                  </Link>
                </ProfilePopover>

                <ProfilePopover imageSrc="/assets/images/twitter_profile.png">
                  <Link href="https://x.com/Sarthakbuilds" target="_blank" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-all">
                    <FaXTwitter className="w-5 h-5" />
                  </Link>
                </ProfilePopover>

                <Link href="#" className="text-neutral-300 dark:text-neutral-700 pointer-events-none cursor-not-allowed">
                  <FaLinkedin className="w-5 h-5" />
                </Link>
              </div>

              <a 
                href="mailto:sarthakshiroty20@gmail.com" 
                className="flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-neutral-800 dark:text-zinc-500 dark:hover:text-zinc-200 transition-colors group"
              >
                <FaEnvelope className="w-3 h-3" />
                <span>sarthakshiroty20@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Text & Bio */}
        <div className="w-full md:w-[65%] flex flex-col gap-6 text-left md:pt-4">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Sarthak Shiroty, 21
          </h1>
          
          <div className="inter-tight text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-relaxed flex flex-col gap-6">
            <p>
              Product-focused Engineer who ships fast. I turn ideas into polished products and obsess over the details that make software feel right.
            </p>
            <p>
              Self-taught <span className="text-neutral-900 dark:text-white font-medium underline decoration-neutral-200 dark:decoration-neutral-800 underline-offset-4">Web developer.</span> Breaking the internet to learn how it works.
            </p>
            <p>
              I build <span className="text-neutral-900 dark:text-white font-medium underline decoration-neutral-200 dark:decoration-neutral-800 underline-offset-4">pixel-perfect UI</span> with a focus on refining the user experience. When I'm not coding: I'm reading, or geeking out over aviation mechanics.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 mt-2">
              <span className="w-2 h-2 rounded-full bg-[#00f260] shadow-[0_0_8px_#10b981] inline-block shrink-0 animate-pulse"></span>
              <span className="text-sm"><span className="text-neutral-900 dark:text-white font-medium uppercase tracking-wider text-[10px] mr-1">Status:</span> Open to Work: Full-Time, Freelance, or Collabs.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Separator String */}
      <div className="relative mt-8 w-full">
        <GuitarString />
      </div>
    </div>
  )
}