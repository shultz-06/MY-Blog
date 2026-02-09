import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts, getPostBySlug, getRecentPosts } from '@/data/blog';
import { BlogCard } from '@/components/ui';
import { ShareButtons } from '@/components/blog/ShareButtons';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.publishedAt,
            authors: [post.author],
            tags: post.tags,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const relatedPosts = getRecentPosts(3).filter(p => p.slug !== post.slug).slice(0, 2);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section bg-gradient-to-b from-[var(--color-background-alt)] to-[var(--color-background)]">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        {/* Back link */}
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] transition-colors mb-8"
                        >
                            <ArrowLeft size={18} />
                            Back to Blog
                        </Link>

                        {/* Category */}
                        <span className="badge mb-4">{post.category}</span>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-foreground-muted)]">
                            <span className="flex items-center gap-2">
                                <User size={16} />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={16} />
                                {formattedDate}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={16} />
                                {post.readingTime} min read
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section pt-8">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Main Content */}
                        <article className="lg:col-span-3">
                            <div className="card">
                                {/* Featured Image Placeholder */}
                                <div className="h-64 -mx-6 -mt-6 mb-8 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)] rounded-t-lg flex items-center justify-center">
                                    <span className="text-6xl opacity-50">📝</span>
                                </div>

                                {/* Content */}
                                <div className="prose max-w-none">
                                    {post.content.split('\n\n').map((paragraph, index) => {
                                        // Check if it's a heading
                                        if (paragraph.startsWith('# ')) {
                                            return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>;
                                        }
                                        if (paragraph.startsWith('## ')) {
                                            return <h2 key={index} className="text-2xl font-bold mt-6 mb-3" id={paragraph.slice(3).toLowerCase().replace(/\s+/g, '-')}>{paragraph.slice(3)}</h2>;
                                        }
                                        if (paragraph.startsWith('### ')) {
                                            return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{paragraph.slice(4)}</h3>;
                                        }
                                        // Check if it's a code block
                                        if (paragraph.startsWith('```')) {
                                            const lines = paragraph.split('\n');
                                            const language = lines[0].slice(3);
                                            const code = lines.slice(1, -1).join('\n');
                                            return (
                                                <pre key={index} className="my-4">
                                                    <code className={`language-${language}`}>{code}</code>
                                                </pre>
                                            );
                                        }
                                        // Regular paragraph
                                        return <p key={index} className="text-[var(--color-foreground-muted)] leading-relaxed mb-4">{paragraph}</p>;
                                    })}
                                </div>

                                {/* Tags */}
                                <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <Link
                                                key={tag}
                                                href={`/blog?tag=${tag}`}
                                                className="text-sm px-3 py-1.5 rounded-full bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)] hover:bg-[var(--color-border)] transition-colors"
                                            >
                                                #{tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Share */}
                                <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                                    <ShareButtons title={post.title} slug={post.slug} />
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="card sticky top-28">
                                {/* Table of Contents */}
                                <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
                                <nav className="space-y-2 text-sm">
                                    {post.content.split('\n').filter(line => line.startsWith('## ')).map((heading, index) => {
                                        const text = heading.slice(3);
                                        const id = text.toLowerCase().replace(/\s+/g, '-');
                                        return (
                                            <a
                                                key={index}
                                                href={`#${id}`}
                                                className="block text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] transition-colors"
                                            >
                                                {text}
                                            </a>
                                        );
                                    })}
                                </nav>

                                <hr className="my-6 border-[var(--color-border)]" />

                                {/* Author */}
                                <h3 className="text-lg font-semibold mb-4">Author</h3>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold">
                                        {post.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="font-medium text-[var(--color-foreground)]">{post.author}</p>
                                        <p className="text-sm text-[var(--color-foreground-muted)]">Full Stack Developer</p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <BlogCard key={relatedPost.slug} post={relatedPost} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
