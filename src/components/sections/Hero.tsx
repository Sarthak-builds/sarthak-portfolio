import Image from "next/image"
import GuitarString from "../ui/GuitarString"

export const Hero = () => {

    return (
        <div className=" min-h-90 mt-12 relative flex flex-col  py-4  px-12 ">
            <div className="flex gap-12">
             <div className="min-w-45 min-h-45 absolute top-4 -rotate-5 border-amber-100 border-2 rounded-lg special-gothic"></div>
           <div className="min-h-50 min-w-50"><Image src="/assets/images/sarthak_mee.jpeg" width={180} height={250} alt="Sarthak" className=" shadow-white/50 rounded-3xl "/></div> 
            <div className="flex flex-col w-full gap-4">
            <div className="text-white">
            <h1 className=" text-4xl instrument-serif-regular-italic">Hi, I'm Sarthak Shiroty</h1>
            <div className="text-white/50 hanken-grotesk text-sm w-full py-1">21 • Engineer  • Tech Brother and Builder</div>
            </div>
            
            <p className="text-white/60 hanken-grotesk leading-7">
                I build <span className=" text-white">pixel perfect web apps</span> with a focus on shipping fast and refining the user experience. I specialize in <span></span> Next.js, recently validating my UI skills with WebLens—a tool that attracted 3,000+ views and processed 50+ websites. I care less about technology debates and more about delivering software that feels right and works flawlessly.

Currently, I’m engineering a complex lip-syncing platform from the ground up. I am now looking for internship opportunities or freelance work where I can apply this product-first mindset to solve real problems.
            </p>
            </div>
            </div>
            <div className="relative">
        <GuitarString />
      </div>
        </div>
    )
}