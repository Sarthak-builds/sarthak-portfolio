'use client';

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

interface ViewTrackerProps {
  slug: string;
}

export default function ViewTracker({ slug }: ViewTrackerProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const storageKey = `viewed_blog_${slug}`;
    const hasViewed = localStorage.getItem(storageKey);

    if (!hasViewed) {
      // First visit — increment
      fetch(`/api/views/${slug}`, { method: 'POST' })
        .then((r) => r.json())
        .then((data: { views: number }) => {
          setViews(data.views);
          localStorage.setItem(storageKey, '1');
        })
        .catch(console.error);
    } else {
      // Already viewed — just read
      fetch(`/api/views/${slug}`)
        .then((r) => r.json())
        .then((data: { views: number }) => setViews(data.views))
        .catch(console.error);
    }
  }, [slug]);

  if (views === null) return null;

  return (
    <span className="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-white/40">
      <Eye size={14} />
      {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
    </span>
  );
}
