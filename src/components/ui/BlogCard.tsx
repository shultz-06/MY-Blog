import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogPost } from '@/data/blog';

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <article className="group card">
            {/* Category Badge */}
            <div className="mb-4">
                <span className="badge">{post.category}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                <Link href={`/blog/${post.slug}`}>
                    {post.title}
                </Link>
            </h3>

            {/* Excerpt */}
            <p className="text-[var(--color-foreground-muted)] text-sm mb-4 line-clamp-3">
                {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-[var(--color-foreground-muted)] mb-4">
                <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {formattedDate}
                </span>
                <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readingTime} min read
                </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)]"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Read More */}
            <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] group-hover:gap-2.5 transition-all"
            >
                Read More
                <ArrowRight size={16} />
            </Link>
        </article>
    );
}
