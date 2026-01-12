import { ProjectCard } from "../ui/ProjectCard"


export const Projects = ( ) => {

    return (
        <div className="w-full py-10">
            <h1 className="instrument-serif-regular  text-2xl "> Proof of Work <span className="text-white/60 text-xl"> - Featured Projects</span></h1>
            <div className="my-4">
             <ol className="grid gap-8 md:grid-cols-2 space-y-2">
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
             </ol>
            </div>
            <div className="w-full flex justify-end px-4 hanken-grotesk">
                <button className="py-1 px-3 rounded-lg border text-sm">All Projects</button>
            </div>
        </div>
    )
}