import { ReactNode } from "react";

export interface ExperienceCardProps {
    id?: string | number;
    logo?: ReactNode | string;
    company: string;
    role: string;
    date: string;
    description: string | string[];
    technologies?: string;
    link?: string;
    isFirst?: boolean;
    isLast?: boolean;
}

export interface Project {
    title: string;
    description: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
    image: string;
    status: "Live" | "Building" | "MVP";
}

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    coverImage?: string;
    readingTime: string;
    content?: string;
}
