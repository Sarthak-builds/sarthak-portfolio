import { getAllBlogs } from '@/lib/mdx';
import { BlogPost } from '@/types';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowUpRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on frontend development, product engineering, and building things that matter.',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group block border border-neutral-200 dark:border-white/8 rounded-2xl p-6 hover:border-neutral-400 dark:hover:border-white/20 transition-all duration-300 bg-neutral-50/50 dark:bg-white/2 hover:bg-white dark:hover:bg-white/4 relative overflow-hidden"
    >
      {/* subtle glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,161,237,0.06), transparent 70%)' }}
      />

      <div className="relative z-10">
        {/* Tags */}
        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-blue-500/8 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15 dark:border-blue-500/20 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="text-xl text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-snug mb-2 pr-8">
          {blog.title}
        </h2>

        {/* Arrow icon */}
        <ArrowUpRight
          size={18}
          className="absolute top-6 right-6 text-neutral-400 dark:text-white/30 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />

        {/* Description */}
        <p className="text-sm text-neutral-600 dark:text-white/55 leading-relaxed line-clamp-2 mb-5">
          {blog.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-white/35">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {formatDate(blog.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {blog.readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="max-w-4xl min-h-screen mx-auto px-4 md:px-10 pt-10 pb-20 relative z-10">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl text-neutral-900 dark:text-white mb-3">
          Writing
        </h1>
        <p className="text-neutral-600 dark:text-white/55 text-sm leading-relaxed max-w-lg">
          Occasionally I write about frontend development, product thinking, and the craft of building software. {blogs.length} post{blogs.length !== 1 ? 's' : ''} so far.
        </p>
      </div>

      {/* Blog list */}
      {blogs.length === 0 ? (
        <div className="text-center py-24 text-neutral-500 dark:text-white/30">
          No posts yet. Check back soon.
        </div>
      ) : (
        <div className="grid gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      )}

      {/* Footer note */}
      <p className="text-center text-xs text-neutral-400 dark:text-white/25 mt-16">
        All views expressed here are my own.
      </p>
    </div>
  );
}
