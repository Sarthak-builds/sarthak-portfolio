import type { ReactNode } from "react";
export interface ExperienceItem {
  id: string;
  logo: ReactNode;
  company: string;
  role: string;
  date: string;
  description: string | string[];
  technologies: string;
  link?: string;
}
const PFCclubLogo = () => (
  <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-lg font-serif italic text-white/90 shrink-0">
    P
  </div>
);

const FreelanceLogo = () => (
  <div className="w-10 h-10  border border-white/10 rounded-full flex items-center justify-center text-lg font-serif italic text-white/90 shrink-0">
    F
  </div>
);

export const experienceData: ExperienceItem[] = [
  {
    id: "pfc",
    company: "PFCclub",
    role: "Frontend Engineer Intern · Pune, India (Remote)",
    date: "Feb 2026 - Mar 2026",
    description: [
      "Integrated REST APIs from Postman collections into a clean, responsive dashboard UI",
      "Built core product sections: Workouts, AI-powered Diets, and Progress Logs",
      "Optimised component structure, reducing render overhead across the app",
      "Implemented OneSignal push notifications to improve user engagement and retention"
    ],
    technologies: "Nextjs / Typescript / Tanstack-Query / REST APIs / OneSignal",
    logo: <PFCclubLogo />,
  },
  {
    id: "1",
    company: "AI Lipsync Video Automation Platform",
    role: "Freelance Frontend Developer",
    date: "Nov 2025",
    description: [
      "Architected the frontend for an AI-powered lip-syncing SaaS.",
      "Used Zustand to handle real-time audio visualization and video rendering cues."
    ],
    technologies: "React / Zustand / Motion / Axios / TypeScript",
    logo: <FreelanceLogo />,
  },
];