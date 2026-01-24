"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
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
  const [isExpanded, setIsExpanded] = useState(false);

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
      <div className="px-5 py-4 space-y-3 bg-white dark:bg-black border-t border-neutral-100 dark:border-none">
        <div className="flex justify-between items-center">
          <h1 className="text-neutral-900 dark:text-white text-xl tracking-tight instrument-serif-regular-italic">{title}</h1>

          <div className="flex gap-3">
            <div className="flex gap-3">
              {liveUrl && (
                <Link href={liveUrl} target="_blank" className="text-neutral-500 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors flex justify-center items-start gap-2 text-sm hanken-grotesk">
                  <FaExternalLinkAlt size={16} /> <span className="hidden md:inline">Live Preview</span>
                </Link>
              )}
              {githubUrl ? (
                <Link href={githubUrl} target="_blank" className="text-neutral-500 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors flex justify-center items-center gap-2 text-sm hanken-grotesk">
                  <FaGithub size={18} />
                  <span className="hidden md:inline">Repo URL</span>
                </Link>
              ) : (
                <FaGithub size={18} className="text-neutral-300 dark:text-white/10 cursor-not-allowed" />
              )}
            </div>
          </div>
        </div>

        <div className="relative">
          <p className={`text-neutral-600 dark:text-white/60 w-full text-sm leading-relaxed hanken-grotesk ${isExpanded ? '' : 'line-clamp-2'}`}>
            {description}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-white/40 dark:text-white/40 mt-1 flex md:hidden items-center gap-1 hover:underline ml-auto"
          >
            {isExpanded ? (
              <>Show Less <FaChevronUp size={10} /></>
            ) : (
              <>Read More <FaChevronDown size={10} /></>
            )}
          </button>
        </div>
        <p className="text-sm text-neutral-400 dark:text-white/40 font-mono pt-2 instrument-serif-regular-italic">
          {tech?.join(" / ")}
        </p>
      </div>
    </div>
  );
};