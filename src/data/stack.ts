export interface TechCategory {
  category: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Prisma", "PostgreSQL"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "Vercel", "VS Code", "Figma", "Linear"]
  }
];