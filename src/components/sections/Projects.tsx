import { ProjectCard } from "../ui/ProjectCard";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

export const Projects = () => {
    return (
        <div className="w-full ">
            <div className="flex items-center gap-3 mb-8">
                <h1 className="instrument-serif-regular-italic text-2xl text-white/90">
                    Proof of Work
                </h1>
                <span className="text-white/40 hanken-grotesk text-sm">
                    — Featured Projects
                </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {featuredProjects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        {...project} 
                    />
                ))}
            </div>
            <div className="w-full flex justify-center mt-10 hanken-grotesk">
                <Link 
                    href="/projects" 
                    className="py-2 px-6 rounded-full border border-white/10  text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm flex items-center gap-2"
                >
                    More Projects ↗ 
                    <span className="text-xs"></span>
                </Link>
            </div>
        </div>
    )
}