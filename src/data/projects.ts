export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  status: "Live" | "Building" | "MVP";
}

const allProjectsData: Project[] = [
  {
    title: "WebLens",
    description: "A real-time web analysis and insights platform providing an interface for visualizing web-based data.",
    tech: ["React", "Tailwind CSS", "Redux", "Motion", "Insights API"],
    liveUrl: "https://web-lens-insights.vercel.app/",
    githubUrl: "https://github.com/Sarthak-builds/WebLens",
    image: "/assets/images/weblens.png",
    status: "Live",
  },
  {
    title: "LipSync AI",
    description: "An AI-powered lip-sync tool designed for audio-to-video alignment with a modern UI.",
    tech: ["React", "ShadcnUI", "TypeScript", "Tailwind CSS", "Zustand", "Motion"],
    liveUrl: "https://lipsync-rho.vercel.app/register",
    githubUrl: "https://github.com/Sarthak-builds/lipsync-frontend",
    image: "/assets/images/lipsync.png",
    status: "Building",
  },
  {
    title: "Portfolio-Forge",
    description: "A leaderboard platform for rating and reviewing portfolios.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "",
    image: "/assets/images/portfolio-forge.png",
    status: "Building",
  },
  {
    title: "SwiftMind",
    description: "High-performance landing page for a rapid-ideation tool.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://swiftmind-flame.vercel.app/",
    githubUrl: "https://github.com/Sarthak-builds/SwiftMind",
    image: "/assets/images/swiftmind.png",
    status: "Live",
  },
  {
    title: "TufPlus",
    description: "Redesigned landing page for TUF with enhanced interactions.",
    tech: ["React", "Tailwind CSS", "Motion"],
    liveUrl: "https://tufplus-zeta.vercel.app/",
    githubUrl: "https://github.com/Sarthak-builds/tufplus",
    image: "/assets/images/tufplus.png",
    status: "Live",
  },
  {
    title: "BrainCloud",
    description: "'Second Brain' app with RAG for chatting with bookmarks.",
    tech: ["Nextjs", "Typescript", "TailwindCSS", "MongoDB", "Express"],
    githubUrl: "",
    image: "/assets/images/braincloud.png",
    status: "Building",
  },
];
export const featuredProjects = [
  allProjectsData[0],
  allProjectsData[1],
  allProjectsData[2],
  allProjectsData[3],
];

export const allProjects = allProjectsData;