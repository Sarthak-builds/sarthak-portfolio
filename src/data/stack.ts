import { 
  SiNextdotjs, SiReact, SiTailwindcss, SiFramer, SiGreensock, 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiShadcnui,
  SiNodedotjs, SiPrisma, SiPostgresql, SiMongodb, 
  SiAxios, SiPython, SiGit, SiGithub, SiPostman, SiCplusplus
} from 'react-icons/si'
import { FaStore } from 'react-icons/fa' 
import type { IconType } from 'react-icons'

export interface TechItem {
  name: string
  icon: IconType
  color: string
}

export const stack1: TechItem[] = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" }, 
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "#FFFFFF" },
  { name: "Framer Motion", icon: SiFramer, color: "#FFFFFF" },
  { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
];

export const stack2: TechItem[] = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" }, 
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Zustand", icon: FaStore, color: "#764ABC" }, 
  { name: "Axios", icon: SiAxios, color: "#5A29E4" },
  { name: "C++", icon: SiCplusplus, color: "#3776AB" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];