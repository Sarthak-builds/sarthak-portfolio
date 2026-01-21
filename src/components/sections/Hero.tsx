
import Image from "next/image"
import GuitarString from "../ui/GuitarString"
import SocialLinksHero from "../ui/SocialLinksHero"
import { FaEnvelope } from "react-icons/fa"
import SocialLinks from "../ui/SocialLinks"

export const Hero = () => {

    return (
        <div className=" max-h-120 mt-12 relative flex flex-col  pt-4 px-12 ">
            <div className="flex gap-12">
             <div className="min-w-45 min-h-45 absolute top-4 -rotate-5 border-amber-100 border-2 rounded-lg special-gothic"></div>
           <div className="min-h-50 min-w-50">
            <Image src="/assets/images/sarthak_mee.jpeg" width={180} height={250} alt="Sarthak" className=" shadow-white/50 rounded-3xl "/>
            <div className="relative group flex flex-col items-center justify-center w-fit mx-auto my-2">
              
               <div className="text-base mt-2 instrument-serif-regular font-light  italic text-white right-10">
               Get in Touch</div>
                <div className="text-4xl duration-200 group-hover:rotate-180 cursor-pointer absolute top-5 ">
    <i className="ri-arrow-down-s-fill z-50"></i>
    
  </div>
  <div className="absolute top-12 flex flex-col items-center invisible opacity-0 group-hover:visible group-hover:opacity-100 scale-y-50 group-hover:scale-y-100 origin-top ease-in-out transition-all duration-200 z-50 scale-x-50 group-hover:scale-x-100">
    <div className="bg-white/1 text-sm px-4 py-4 rounded-lg shadow-lg whitespace-nowrap flex gap-3 scale-80 flex-col">
     {/* <SocialLinksHero></SocialLinksHero> */}
     <SocialLinks></SocialLinks>
     <div className="mt-2 flex flex-col justify-center hanken-grotesk text-lg">
                <p>📍 Indore, India</p>
                <p className="flex justify-center items-center gap-2"><FaEnvelope></FaEnvelope>sarthakshiroty20@gmail.com</p>
              </div>
    </div>
  </div>
            </div>
           
          </div> 
            <div className="flex flex-col w-full gap-4">
            <div className="text-white">
            <h1 className=" text-4xl instrument-serif-regular-italic italic">Hi, I'm Sarthak Shiroty</h1>
            <div className="text-white/50 hanken-grotesk text-sm w-full py-1">21 • Engineer • Web Developer • Tech Brother and Builder</div>
            </div>
            
            <p className="text-white/60 hanken-grotesk leading-8">
                I am a <span className="text-white">product-focused engineer</span> who prioritizes shipping functional software. <br></br>
                I build<span className="text-white"> pixel-perfect web apps</span>  with a focus on refining the user experience. My recent FE project, <span className="text-white">WebLens,</span> validated this approach by attracting over<span className="text-white"> 3,000 views and processing 20+ websites.</span> Currently engineering an AI lip-syncing platform.
                <br></br>
                <span className="text-white">When I’m not coding: </span>I’m usually deep down a YouTube video, reading, or geeking out over aviation mechanics.
                <br></br> 
                <span className="text-white"><span className="text-green-400 px-1 text-lg">•</span>Open to Work:</span> Full-Time, Freelance, or Collabs.
               
            </p>
            </div>
            </div>
            <div className="relative">
        <GuitarString />
      </div>
        </div>
    )
}