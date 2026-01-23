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
    description: "A real-time web analysis and insights platform providing a modern interface for exploring and visualizing web-based data.",
    tech: ["React", "Tailwind CSS", "Redux", "Motion", "Insights API"],
    liveUrl: "https://web-lens-insights.vercel.app/",
    githubUrl: "https://github.com/Sarthak-builds/WebLens",
    image: "/assets/images/weblens.png",
    status: "Live",
  },
  {
    title: "LipSync AI",
    description: "An AI-powered lip-synchronization frontend application designed for seamless audio-to-video alignment with a modern, responsive UI.",
    tech: ["React", "ShadcnUI", "TypeScript", "Tailwind CSS", "Zustand", "Motion"],
    liveUrl: "https://lipsync-rho.vercel.app/register",
    githubUrl: "https://github.com/Sarthak-builds/lipsync-frontend",
    image: "/assets/images/lipsync.png",
    status: "Building",
  },
  {
    title: "Portfolio-Forge",
    description: "A leaderboard and portfolio review platform where users can rate, comment, and view others' portfolios to climb the ranks.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"], 
    githubUrl: "",
    image: "/assets/images/portfolio-forge.png",
    status: "Building",
  },
  {
    title: "SwiftMind",
    description: "A high-performance landing page for a rapid-ideation tool, optimized for speed and mental agility with smooth animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://swiftmind-flame.vercel.app/",
    githubUrl: "https://github.com/Sarthak-builds/SwiftMind",
    image: "/assets/images/swiftmind.png",
    status: "Live",
  },
  {
    title: "TufPlus",
    description: "A redesigned landing page for TUF (Take U Forward), providing an enhanced educational platform with smooth user interactions.",
    tech: ["React", "Tailwind CSS", "Motion"],
    liveUrl: "https://tufplus-zeta.vercel.app/",
    githubUrl: "https://github.com/Sarthak-builds/tufplus",
    image: "/assets/images/tufplus.png",
    status: "Live",
  },
  {
    title: "BrainCloud",
    description: "A 'Second Brain' application with RAG system for chatting with bookmarks and links. Features a full MERN backend integration.",
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