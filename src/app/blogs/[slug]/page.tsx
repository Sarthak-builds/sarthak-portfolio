import { getBlogBySlug, getAllBlogs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ViewTracker from '@/components/ui/ViewTracker';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: blog.meta.title,
    description: blog.meta.description,
    openGraph: {
      title: blog.meta.title,
      description: blog.meta.description,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  const { meta, source } = blog;

  return (
    <div className="max-w-4xl min-h-screen mx-auto px-4 md:px-10 pt-10 pb-24 relative z-10">
      {/* Back nav */}
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 mb-10 group"
      >
        <ArrowLeft
          size={14}
          className="transition-transform duration-200 group-hover:-translate-x-1"
        />
        Back to writing
      </Link>

      {/* Article header */}
      <header className="mb-10">
        {/* Tags */}
        {meta.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-blue-500/8 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15 dark:border-blue-500/20 font-medium"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-3xl md:text-4xl text-neutral-900 dark:text-white leading-tight mb-4">
          {meta.title}
        </h1>

        <p className="text-neutral-500 dark:text-white/50 text-base leading-relaxed mb-6 max-w-2xl">
          {meta.description}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-white/40 pb-8 border-b border-neutral-200 dark:border-white/8">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {formatDate(meta.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {meta.readingTime}
          </span>
          <ViewTracker slug={slug} />
        </div>
      </header>

      {/* MDX Content */}
      <article className="blog-prose">
        <MDXRemote source={source} />
      </article>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-white/8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 group"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          Back to all posts
        </Link>
      </div>
    </div>
  );
}
