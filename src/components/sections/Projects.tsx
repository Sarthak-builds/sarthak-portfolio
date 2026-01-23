import { ProjectCard } from "../ui/ProjectCard";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

export const Projects = () => {
    return (
        <div className="w-full">
            <div className="flex items-center gap-3 mb-8 justify-start">
                <h1 className="instrument-serif-regular-italic text-2xl text-neutral-900 dark:text-white/90">
                    Proof of Work
                </h1>
                {/* <span className="text-white/40 hanken-grotesk text-lg">
                    — Featured Projects
                </span> */}
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
                    className="py-2 px-6 rounded-full border border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-white/70 hover:text-black dark:hover:text-white transition-all text-sm flex items-center gap-2 hover:border-neutral-400 dark:hover:border-white"
                >
                    More Projects <span className="scale-140"> ↗</span>
                    <span className="text-xs"></span>
                </Link>
            </div>
        </div>
    )
}