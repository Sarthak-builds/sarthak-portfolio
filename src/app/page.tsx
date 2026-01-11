import Contributions from "@/components/sections/Contributions"
import { Hero } from "@/components/sections/Hero"
import { Stack } from "@/components/sections/Stack"
export default function Home () {


  return (
    <div className=" max-w-5xl min-h-screen mx-auto px-10 text-white">
      <Hero></Hero>
      <Stack></Stack>
      <Contributions></Contributions>
    </div>
  )
}