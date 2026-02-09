// Blog Posts Data
export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    publishedAt: string;
    updatedAt?: string;
    author: string;
    coverImage: string;
    category: string;
    tags: string[];
    readingTime: number;
    featured: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "building-scalable-react-apps",
        title: "Building Scalable React Applications: Best Practices for 2024",
        excerpt: "Learn the essential patterns and practices for building React applications that scale. From state management to code splitting, we cover everything you need to know.",
        content: `# Building Scalable React Applications

When it comes to building React applications that can grow with your business, there are several key patterns and practices you need to follow...

## State Management

One of the most critical decisions in any React application is how you manage state. For large applications, I recommend using a combination of:

- **React Query** for server state
- **Zustand** or **Jotai** for client state
- **React Context** for theme and authentication

\`\`\`typescript
import { create } from 'zustand';

interface Store {
  count: number;
  increment: () => void;
}

export const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
\`\`\`

## Code Splitting

Next.js makes code splitting easy with dynamic imports...

## Conclusion

Building scalable React applications requires thoughtful architecture decisions from the start.`,
        publishedAt: "2024-01-15",
        author: "Your Name",
        coverImage: "/images/blog/react-scalable.jpg",
        category: "React",
        tags: ["React", "TypeScript", "Architecture", "Best Practices"],
        readingTime: 8,
        featured: true,
    },
    {
        slug: "nextjs-15-features",
        title: "What's New in Next.js 15: A Complete Overview",
        excerpt: "Explore the exciting new features in Next.js 15, including Server Actions improvements, better caching, and enhanced developer experience.",
        content: `# What's New in Next.js 15

Next.js 15 brings significant improvements to the developer experience and performance...

## Server Actions Improvements

Server Actions are now even more powerful with better error handling and streaming support.

## Enhanced Caching

The new caching mechanisms provide more granular control over how your data is cached...

## Conclusion

Next.js 15 continues to push the boundaries of what's possible with React.`,
        publishedAt: "2024-01-10",
        author: "Your Name",
        coverImage: "/images/blog/nextjs-15.jpg",
        category: "Next.js",
        tags: ["Next.js", "React", "Performance", "Web Development"],
        readingTime: 6,
        featured: true,
    },
    {
        slug: "typescript-advanced-patterns",
        title: "Advanced TypeScript Patterns Every Developer Should Know",
        excerpt: "Master advanced TypeScript patterns including conditional types, mapped types, and template literal types to write more robust code.",
        content: `# Advanced TypeScript Patterns

TypeScript offers powerful type system features that can help you write safer, more maintainable code...

## Conditional Types

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;
\`\`\`

## Mapped Types

Transform existing types into new types with mapped types...

## Conclusion

These advanced patterns will level up your TypeScript skills.`,
        publishedAt: "2024-01-05",
        author: "Your Name",
        coverImage: "/images/blog/typescript.jpg",
        category: "TypeScript",
        tags: ["TypeScript", "JavaScript", "Best Practices"],
        readingTime: 10,
        featured: false,
    },
    {
        slug: "docker-for-developers",
        title: "Docker for Web Developers: A Practical Guide",
        excerpt: "Learn how to containerize your web applications with Docker. From basics to production-ready setups.",
        content: `# Docker for Web Developers

Docker has become an essential tool for modern web development...

## Getting Started

\`\`\`dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
\`\`\`

## Conclusion

Docker simplifies deployment and ensures consistency across environments.`,
        publishedAt: "2023-12-20",
        author: "Your Name",
        coverImage: "/images/blog/docker.jpg",
        category: "DevOps",
        tags: ["Docker", "DevOps", "Containers", "Deployment"],
        readingTime: 12,
        featured: false,
    },
    {
        slug: "tailwind-css-tips",
        title: "10 Tailwind CSS Tips That Will Change How You Write CSS",
        excerpt: "Discover powerful Tailwind CSS techniques to speed up your development and create more maintainable styles.",
        content: `# 10 Tailwind CSS Tips

Tailwind CSS has revolutionized how we write CSS. Here are 10 tips to level up your Tailwind game...

## 1. Use the @apply directive wisely

## 2. Leverage arbitrary values

## Conclusion

These tips will help you become more productive with Tailwind CSS.`,
        publishedAt: "2023-12-15",
        author: "Your Name",
        coverImage: "/images/blog/tailwind.jpg",
        category: "CSS",
        tags: ["Tailwind CSS", "CSS", "Frontend", "Design"],
        readingTime: 5,
        featured: true,
    },
];

// Helper functions
export const getFeaturedPosts = () => blogPosts.filter(p => p.featured);

export const getPostsByCategory = (category: string) =>
    category === 'All' ? blogPosts : blogPosts.filter(p => p.category === category);

export const getPostsByTag = (tag: string) =>
    blogPosts.filter(p => p.tags.includes(tag));

export const getPostBySlug = (slug: string) =>
    blogPosts.find(p => p.slug === slug);

export const getCategories = () => {
    const categories = ['All', ...new Set(blogPosts.map(p => p.category))];
    return categories;
};

export const getAllTags = () => {
    const tags = new Set<string>();
    blogPosts.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
};

export const getRecentPosts = (count: number = 3) =>
    [...blogPosts]
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, count);

export const searchPosts = (query: string) => {
    const lowerQuery = query.toLowerCase();
    return blogPosts.filter(
        p =>
            p.title.toLowerCase().includes(lowerQuery) ||
            p.excerpt.toLowerCase().includes(lowerQuery) ||
            p.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );
};
