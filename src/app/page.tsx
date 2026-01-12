import Contributions from "@/components/sections/Contributions"
import { Experience } from "@/components/sections/Experience"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Stack } from "@/components/sections/Stack"
export default function Home () {


  return (
    <div className=" max-w-5xl min-h-screen mx-auto px-10 text-white py-15">
      <Hero></Hero>
      <Stack></Stack>
      <Contributions></Contributions>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  )
}