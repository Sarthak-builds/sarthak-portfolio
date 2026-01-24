import Contributions from "@/components/sections/Contributions"
import { CTA } from "@/components/sections/CTA"
import { Experience } from "@/components/sections/Experience"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Stack } from "@/components/sections/Stack"
import SocialLink from "@/components/ui/SocialLinksHero"
import Link from "next/link"
export default function Home() {


  return (
    <div className=" max-w-5xl min-h-screen mx-auto px-4 md:px-10 pt-10 pb-15 z-10 relative">

      <Hero></Hero>
      <Stack></Stack>
      <Contributions></Contributions>
      <Experience></Experience>
      <Projects></Projects>
      <CTA></CTA>
      <div className=" text-sm text-neutral-500 dark:text-white/30 text-center mt-16 pb-8 md:pb-0">
        Design & Developed by <Link href="https://x.com/Sarthakbuilds"
          target="_blank"
          rel="noopener noreferrer" className="text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-green-400"> Sarthakbuilds </Link>
        <span className="block md:inline">© 2026. All rights reserved.</span>
      </div>
    </div>
  )
}