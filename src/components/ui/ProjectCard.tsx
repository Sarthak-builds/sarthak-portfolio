import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "@/data/projects"; 

export const ProjectCard = ({ 
  title, 
  description, 
  liveUrl, 
  githubUrl, 
  tech = [], 
  image, 
  status 
}: Project) => {
    
  const isBuilding = status === "Building";
  const badgeColor = isBuilding 
    ? "bg-amber-500/10 text-amber-500 border-amber-500/20" 
    : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";

  return (
    <div className="group hanken-grotesk rounded-2xl overflow-hidden transition-colors duration-300">
      <div className="w-full relative aspect-video overflow-hidden">
        <div className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md ${badgeColor}`}>
          {status === "Building" ? "In Progress" : "Live"}
        </div>
        <div className="relative w-full h-full">
            <Image 
              src={image || '/assets/images/image.png'} 
              fill 
              alt={title} 
              className="object-center transition-transform rounded-t-2xl "
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
        </div>
      </div>
      <div className="px-5 py-4 space-y-3 bg-black">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl tracking-tight instrument-serif-regular-italic">{title}</h1>
          
          <div className="flex gap-3">
           <div className="flex gap-3">
            {liveUrl && (
              <Link href={liveUrl} target="_blank" className="text-white/40 hover:text-white transition-colors flex justify-center items-start gap-2 text-sm hanken-grotesk">
                 <FaExternalLinkAlt size={16} /> Live Preview
              </Link>
            )}
            {githubUrl ? (
                <Link href={githubUrl} target="_blank" className="text-white/40 hover:text-white transition-colors flex justify-center items-center gap-2 text-sm hanken-grotesk">
                    <FaGithub size={18} />
                    Repo URL
                </Link>
            ) : (
                <FaGithub size={18} className="text-white/10 cursor-not-allowed" />
            )}
          </div>
          </div>
        </div>

        <p className="text-white/60 w-full text-sm leading-relaxed line-clamp-2 hanken-grotesk">
            {description}
        </p>
        <p className="text-sm text-white/40 font-mono pt-2 instrument-serif-regular-italic">
            {tech?.join(" / ")}
        </p>
      </div>
    </div>
  );
};