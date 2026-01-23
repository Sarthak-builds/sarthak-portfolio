import type { ReactNode } from "react";
export interface ExperienceItem {
  id: string;
  logo: ReactNode;
  company: string;
  role: string;
  date: string;
  description: string;
  technologies: string; 
}
const FreelanceLogo = () => (
  <div className="w-10 h-10  border border-white/10 rounded-full flex items-center justify-center text-lg font-serif italic text-white/90 shrink-0">
    F
  </div>
);
export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    company: "AI Lipsync Video Automation Platform",
    role: "Freelance Frontend Developer",
    date: "Nov 2025",
    description: "Architected the frontend for an AI-powered lip-syncing SaaS. Engineered complex state management flows using Zustand to handle real-time audio visualization and video rendering cues. ",
    technologies: "React / Zustand / Motion / Axios / TypeScript",
    logo: <FreelanceLogo />, 
  },
];