import Contributions from "@/components/sections/Contributions"
import { CTA } from "@/components/sections/CTA"
import { Experience } from "@/components/sections/Experience"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Stack } from "@/components/sections/Stack"
import SocialLink from "@/components/ui/SocialLinksHero"
import { ScrollProgress } from "@/components/ui/ScrollProgress"
import { UmamiCounter } from "@/components/ui/UmamiCounter"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-4xl min-h-screen mx-auto px-4 md:px-10 pt-10 pb-15 z-10 relative">
      <ScrollProgress />
      
      <Hero></Hero>
       <Experience></Experience>
      <Stack></Stack>
      <Projects></Projects>
      <Contributions></Contributions>
     
      
      <div className="flex justify-center w-full mt-10 mb-2">
        <UmamiCounter />
      </div>

      <CTA></CTA>
      <div className="text-sm text-neutral-500 dark:text-white/30 text-center mt-16 pb-8 md:pb-0">
        Design & Developed by <Link href="https://x.com/Sarthakbuilds"
          target="_blank"
          rel="noopener noreferrer" className="text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-green-400"> Sarthakbuilds </Link>
        <span className="block md:inline">© 2026. All rights reserved.</span>
      </div>
    </div>
  )
}