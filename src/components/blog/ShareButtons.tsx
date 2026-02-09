'use client';

import { Share2, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

interface ShareButtonsProps {
    title: string;
    slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
    const url = `https://yourportfolio.com/blog/${slug}`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url);
    };

    return (
        <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-[var(--color-foreground)] flex items-center gap-2">
                <Share2 size={16} />
                Share:
            </span>
            <div className="flex gap-2">
                <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)] hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all"
                    aria-label="Share on Twitter"
                >
                    <Twitter size={18} />
                </a>
                <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)] hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all"
                    aria-label="Share on LinkedIn"
                >
                    <Linkedin size={18} />
                </a>
                <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-lg bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all"
                    aria-label="Copy link"
                >
                    <LinkIcon size={18} />
                </button>
            </div>
        </div>
    );
}
