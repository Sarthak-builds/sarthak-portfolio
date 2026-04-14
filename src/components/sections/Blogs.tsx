import { getAllBlogs } from '@/lib/mdx';
import { BlogPost } from '@/types';
import Link from 'next/link';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function BlogPreviewCard({ blog }: { blog: BlogPost }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex flex-col gap-2 border border-neutral-200 dark:border-white/8 rounded-xl p-5 hover:border-neutral-400 dark:hover:border-white/20 transition-all duration-300 bg-neutral-50/50 dark:bg-white/2 hover:bg-white dark:hover:bg-white/[0.04] relative overflow-hidden"
    >
      {/* hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,161,237,0.07), transparent 80%)' }}
      />

      <div className="relative z-10 flex flex-col gap-2">
        {/* Tags */}
        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {blog.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-blue-500/8 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-snug">
            {blog.title}
          </h2>
          <ArrowUpRight
            size={16}
            className="shrink-0 mt-0.5 text-neutral-400 dark:text-white/25 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-600 dark:text-white/50 line-clamp-2 leading-relaxed">
          {blog.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-neutral-400 dark:text-white/30 mt-1">
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {formatDate(blog.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {blog.readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}

export const Blogs = () => {
  const blogs = getAllBlogs().slice(0, 3);

  if (blogs.length === 0) return null;

  return (
    <div id="blogs" className="w-full md:mt-12 mt-8">
      <div className="flex items-center gap-3 mb-8 justify-start">
        <h1 className="text-neutral-900 dark:text-white">
          Writing
        </h1>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        {blogs.map((blog) => (
          <BlogPreviewCard key={blog.slug} blog={blog} />
        ))}
      </div>

      <div className="w-full flex justify-center mt-10">
        <Link
          href="/blogs"
          className="py-2 px-6 rounded-full border border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-white/70 hover:text-black dark:hover:text-white transition-all text-sm flex items-center gap-2 hover:border-neutral-400 dark:hover:border-white"
        >
          All Posts <span className="scale-140">↗</span>
        </Link>
      </div>
    </div>
  );
};
