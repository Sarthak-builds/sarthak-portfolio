import Contributions from "@/components/sections/Contributions"
import { CTA } from "@/components/sections/CTA"
import { Experience } from "@/components/sections/Experience"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Stack } from "@/components/sections/Stack"
import SocialLink from "@/components/ui/SocialLinksHero"
import Link from "next/link"
export default function Home () {


  return (
    <div className=" max-w-5xl min-h-screen mx-auto px-10 text-white pt-10 pb-15 z-10 relative">
      
      <Hero></Hero>
      <Stack></Stack>
      <Contributions></Contributions>
      <Experience></Experience>
      <Projects></Projects>
      <CTA></CTA>
      <div className="text-white/30 text-center mt-16">
        Design & Developed by <Link   href="https://x.com/Sarthakbuilds"
  target="_blank"
  rel="noopener noreferrer" className="text-white hover:text-green-400"> Sarthakbuilds </Link>
© 2026. All rights reserved.
      </div>
    </div>
  )
}