'use client';

import { useState } from 'react';
import { Search, Filter, Tag } from 'lucide-react';
import { BlogCard } from '@/components/ui';
import { blogPosts, getCategories, getAllTags, searchPosts } from '@/data/blog';

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const categories = getCategories();
    const allTags = getAllTags();

    let filteredPosts = blogPosts;

    // Apply search filter
    if (searchQuery) {
        filteredPosts = searchPosts(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
        filteredPosts = filteredPosts.filter(p => p.category === selectedCategory);
    }

    // Apply tag filter
    if (selectedTag) {
        filteredPosts = filteredPosts.filter(p => p.tags.includes(selectedTag));
    }

    // Sort by date
    filteredPosts = [...filteredPosts].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section bg-gradient-to-b from-[var(--color-background-alt)] to-[var(--color-background)]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="gradient-text">Blog</span>
                        </h1>
                        <p className="text-lg text-[var(--color-foreground-muted)] mb-8">
                            Thoughts on development, technology, architecture, and career growth
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-foreground-muted)]" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-6 border-b border-[var(--color-border)]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                        {/* Category Filter */}
                        <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0">
                            <span className="text-[var(--color-foreground-muted)] flex items-center gap-2 flex-shrink-0 text-sm">
                                <Filter size={16} />
                                Category:
                            </span>
                            <div className="flex gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setSelectedTag(null);
                                        }}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === category
                                                ? 'bg-[var(--color-primary)] text-white'
                                                : 'bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)] hover:bg-[var(--color-border)]'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tag Filter */}
                        {selectedTag && (
                            <div className="flex items-center gap-2">
                                <Tag size={16} className="text-[var(--color-foreground-muted)]" />
                                <span className="px-3 py-1.5 rounded-lg text-sm font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center gap-2">
                                    #{selectedTag}
                                    <button
                                        onClick={() => setSelectedTag(null)}
                                        className="hover:text-[var(--color-foreground)]"
                                    >
                                        ×
                                    </button>
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {filteredPosts.length > 0 ? (
                                <div className="grid md:grid-cols-2 gap-6">
                                    {filteredPosts.map((post) => (
                                        <BlogCard key={post.slug} post={post} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-[var(--color-foreground-muted)]">
                                        No articles found. Try adjusting your filters.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="card sticky top-28">
                                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {allTags.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                                            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${selectedTag === tag
                                                    ? 'bg-[var(--color-accent)] text-white'
                                                    : 'bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)] hover:bg-[var(--color-border)]'
                                                }`}
                                        >
                                            #{tag}
                                        </button>
                                    ))}
                                </div>

                                <hr className="my-6 border-[var(--color-border)]" />

                                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                                <p className="text-sm text-[var(--color-foreground-muted)] mb-4">
                                    Subscribe to get notified about new articles and updates.
                                </p>
                                <form className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-2 rounded-lg bg-[var(--color-background-alt)] border border-[var(--color-border)] text-sm text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full btn btn-primary text-sm"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
