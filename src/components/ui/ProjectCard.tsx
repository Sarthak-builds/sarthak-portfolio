import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// Make sure your Project interface in @/data/projects defines tech as string[]
import { Project } from "@/data/projects"; 

export const ProjectCard = ({ 
  title, 
  description, 
  liveUrl, 
  githubUrl, 
  tech = [], // <--- FIX 1: Default value prevents "undefined" errors
  image, 
  status 
}: Project) => {
    
  const isBuilding = status === "Building";
  const badgeColor = isBuilding 
    ? "bg-amber-500/10 text-amber-500 border-amber-500/20" 
    : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";

  return (
    <div className="group hanken-grotesk border border-white/5 bg-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors duration-300">
      
      {/* IMAGE CONTAINER */}
      <div className="w-full relative aspect-video overflow-hidden">
        {/* Badge */}
        <div className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md ${badgeColor}`}>
          {status === "Building" ? "In Progress" : "Live"}
        </div>
        
        {/* Image */}
        <div className="relative w-full h-full">
            <Image 
              src={image || '/assets/images/image.png'} 
              fill 
              alt={title} 
              // FIX 2: 'object-cover' ensures it fills the box without stretching
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark overlay that fades out on hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="px-5 py-4 space-y-3">
        <div className="flex justify-between items-start">
          <h1 className="text-white text-lg font-medium tracking-tight">{title}</h1>
          
          <div className="flex gap-3">
           <div className="flex gap-3">
            {/* 2. CONDITIONAL RENDERING: Only render if valid string exists */}
            {liveUrl && (
              <Link href={liveUrl} target="_blank" className="text-white/40 hover:text-white transition-colors">
                 <FaExternalLinkAlt size={16} />
              </Link>
            )}
            
            {/* 3. SAFETY CHECK: Prevents the crash if githubUrl is missing */}
            {githubUrl ? (
                <Link href={githubUrl} target="_blank" className="text-white/40 hover:text-white transition-colors">
                    <FaGithub size={18} />
                </Link>
            ) : (
                // Optional: Render a disabled icon if no link is found
                <FaGithub size={18} className="text-white/10 cursor-not-allowed" />
            )}
          </div>
          </div>
        </div>

        <p className="text-white/60 w-full text-sm leading-relaxed line-clamp-2">
            {description}
        </p>
        <p className="text-xs text-white/40 font-mono pt-2">
            {tech?.join(" / ")}
        </p>
      </div>
    </div>
  );
};