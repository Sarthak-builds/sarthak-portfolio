import React from "react"
import Image from "next/image"

export interface ProjectCardProps {
    image?:string;
    githubLink?:string;
    liveLink?:string;
    stack?:string;
    description?:string;
    name?:string;
}

export const ProjectCard = ({image, name, liveLink, githubLink, stack, description}:ProjectCardProps) => {
return (
    <div className="hanken-grotesk space-y-1 border-white/6  ">
    <div className=" w-full min-h-62 relative aspect-video">
        <Image src='/assets/images/image.png' fill alt="project_image" className="object-fit rounded-xl"></Image>
    </div>
    <div className=" px-4 py-3 rounded-xl  hanken-grotesk ">
        <div className=" flex justify-between gap-2">
    <h1 className="text-white text-lg">Project Name</h1>
    <div className="flex gap-2">
    <div>live</div>
    <div>git</div>
    </div>
    </div>
    <p className="text-white/60 w-full text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.djhbdcjdc siciscic dcbdc dcjdbcjd cdjc i</p>
    <p className="text-xs mt-2">stack / stack / stack</p>
    </div>
    
    </div>
)
}