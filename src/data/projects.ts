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
    title: "LipSync AI",
    description: "An AI-powered video automation platform. Upload text/audio to generate synchronized lip movements on avatars. Features real-time rendering and Zustand state management.",
    tech: ["Next.js", "Zustand", "Motion", "Typescript"],
    liveUrl: "https://lipsync-rho.vercel.app/register",
    githubUrl: "https://github.com/Sarthak-builds/lipsync-frontend",
    image: "/assets/images/lipsync.png", 
    status: "Building",
  },
  {
    title: "WebLens",
    description: "A high-performance web analysis tool. Provides instant SEO metrics, accessibility scores, and performance insights. Analyzed 50+ websites with 3k+ views.",
    tech: ["React", "Tailwind", "Node.js", "Puppeteer"],
    liveUrl: "https://web-lens-insights.vercel.app/",
    githubUrl: "https://github.com/Sarthak-builds/WebLens",
    image: "/assets/images/weblens.png",
    status: "Live",
  },
  {
    title: "Portfolio-Forge",
    description: "Automated documentation generator for infrastructure as code. Parses Terraform/AWS CDK files to create readable visual graphs.",
    tech: ["Node.js", "Graphviz", "TypeScript"],
    githubUrl: "",
    image: "/assets/images/portfolio-forge.png",
    status: "Building",
  },
  {
    title: "BrainCloud",
    description: "Next-generation cloud storage solution integrating AI for smart file organization and semantic search. Currently developing the frontend architecture.",
    tech: ["Next.js", "AI SDK", "PostgreSQL", "AWS"],

    githubUrl: "https://github.com/Sarthak-builds/braincloud-frontend",
    image: "/assets/images/braincloud.png",
    status: "Building",
  },
  {
    title: "TufPlus",
    description: "An enhanced educational platform for coding interview preparation. Features progress tracking and spaced repetition algorithms.",
    tech: ["Next.js", "Prisma", "Postgres", "Redis"],
    liveUrl: "https://tufplus-zeta.vercel.app/",
    githubUrl: "https://github.com/Sarthak-builds/tufplus",
    image: "/assets/images/tufplus.png",
    status: "Live",
  },
  {
    title: "SwiftMind",
    description: "A rapid-ideation tool for developers. create mind maps and flowcharts via keyboard shortcuts. Optimized for speed and minimal friction.",
    tech: ["React", "ReactFlow", "Zustand"],
    liveUrl: "https://swiftmind-flame.vercel.app/",
    githubUrl: "https://github.com/Sarthak-builds/SwiftMind",
    image: "/assets/images/swiftmind.png",
    status: "Live",
  },
  
];
export const featuredProjects = [
    allProjectsData[0],
    allProjectsData[1], 
    allProjectsData[2], 
    allProjectsData[3], 
];

export const allProjects = allProjectsData;