import { ProjectCard } from "@/components/ui/ProjectCard"; 
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function AllProjectsPage() {
  return (
    <div className="max-w-5xl min-h-screen mx-auto px-10 text-white py-15 z-10 relative">
      <div className="mb-10 flex flex-col gap-4">
        <Link href="/" className="text-xl text-white/50 hover:text-white mb-2 border-2 rounded-lg max-w-fit p-1  ">
           <FaHome></FaHome>
        </Link>
        <h1 className="instrument-serif-regular text-4xl text-center ">A complete archive of my development work.</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}