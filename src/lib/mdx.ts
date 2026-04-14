import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { BlogPost } from '@/types';

const BLOGS_DIR = path.join(process.cwd(), 'content', 'blogs');

export function getAllBlogs(): BlogPost[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];

  const files = fs.readdirSync(BLOGS_DIR).filter((f) => f.endsWith('.mdx'));

  const blogs = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const raw = fs.readFileSync(path.join(BLOGS_DIR, file), 'utf-8');
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
      tags: (data.tags as string[]) ?? [],
      coverImage: data.coverImage as string | undefined,
      readingTime: stats.text,
    } satisfies BlogPost;
  });

  // Sort by date descending
  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogBySlug(
  slug: string
): Promise<{ meta: BlogPost; source: string } | null> {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  const meta: BlogPost = {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    tags: (data.tags as string[]) ?? [],
    coverImage: data.coverImage as string | undefined,
    readingTime: stats.text,
    content,
  };

  return { meta, source: content };
}
