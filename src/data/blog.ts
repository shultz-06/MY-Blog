// Blog Posts / Articles / Poems Data
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
        slug: "importance-of-financial-literacy",
        title: "The Importance of Financial Literacy in Today's World",
        excerpt: "Why understanding finance is crucial for everyone, not just business professionals. A perspective on building financial awareness.",
        content: `# The Importance of Financial Literacy in Today's World

Financial literacy is no longer optional—it's essential. In an era of complex investment products, rising costs, and economic uncertainty, understanding money matters more than ever.

## Why Financial Literacy Matters

Whether you're a student, professional, or homemaker, having a basic understanding of finance helps you:
- Make informed decisions about savings and investments
- Avoid debt traps and manage loans wisely
- Plan for major life goals like education, home, and retirement
- Understand the economy and its impact on your life

## Building Financial Awareness

Start small. Learn about budgeting, understand compound interest, explore mutual funds. The journey of a thousand miles begins with a single step.

## Conclusion

Financial literacy empowers individuals to take control of their future. It's time we made it a priority in our education and daily lives.`,
        publishedAt: "2024-12-01",
        author: "Shilpa Pujar",
        coverImage: "/images/blog/financial-literacy.jpg",
        category: "Article",
        tags: ["Finance", "Education", "Personal Finance", "Awareness"],
        readingTime: 5,
        featured: true,
    },
    {
        slug: "lessons-from-mba-journey",
        title: "Lessons from My MBA Journey: More Than Just Academics",
        excerpt: "Reflections on the MBA experience—the learning, the challenges, and the growth that happens beyond the classroom.",
        content: `# Lessons from My MBA Journey

Pursuing an MBA is more than attending classes and passing exams. It's a transformative experience that shapes how you think, work, and lead.

## Beyond the Textbooks

The real learning happens in:
- Group projects and late-night discussions
- Case competitions and presentations
- Networking with diverse minds
- Stepping out of your comfort zone

## Key Takeaways

1. **Embrace discomfort** - Growth happens when you're challenged
2. **Collaborate** - The best ideas come from teams, not individuals
3. **Stay curious** - Keep asking questions, keep learning
4. **Balance is key** - Academics, activities, and self-care all matter

## The Journey Continues

MBA is not a destination—it's a foundation. The real test begins when we apply these lessons in the real world.`,
        publishedAt: "2024-11-15",
        author: "Shilpa Pujar",
        coverImage: "/images/blog/mba-journey.jpg",
        category: "Article",
        tags: ["MBA", "Education", "Personal Growth", "Career"],
        readingTime: 6,
        featured: true,
    },
    {
        slug: "poem-dreams-and-deadlines",
        title: "Dreams and Deadlines",
        excerpt: "A poem about the beautiful chaos of chasing dreams while meeting life's demands.",
        content: `# Dreams and Deadlines

*A poem*

Between the pages of textbooks and timelines,
Lives a heart full of stories untold.
We chase the grades, we meet the deadlines,
But within us, dreams unfold.

---

The morning coffee, cold again,
As spreadsheets blur before our eyes.
Yet somewhere between loss and gain,
We learn to fall, and still to rise.

---

For every deadline that we meet,
A dream quietly takes its form.
In the chaos, we find our beat,
In the storm, we become the storm.

---

So here's to the dreamers with tired eyes,
To the believers who still dare.
The deadlines will come, the sun will rise,
And our dreams? They're already there.`,
        publishedAt: "2024-10-20",
        author: "Shilpa Pujar",
        coverImage: "/images/blog/poems.jpg",
        category: "Poetry",
        tags: ["Poetry", "Dreams", "Life", "Inspiration"],
        readingTime: 2,
        featured: true,
    },
    {
        slug: "understanding-supply-chain-disruptions",
        title: "Understanding Supply Chain Disruptions: Lessons from Recent Events",
        excerpt: "An exploration of how global events have reshaped supply chain thinking and what businesses can learn from disruptions.",
        content: `# Understanding Supply Chain Disruptions

The past few years have taught us that supply chains are more fragile than we thought. From the pandemic to geopolitical tensions, disruptions have become the new normal.

## What We've Learned

- **Diversification is crucial** - Single-source dependency is risky
- **Visibility matters** - Real-time tracking and transparency are essential
- **Flexibility over efficiency** - Building buffers and alternatives pays off
- **Local sourcing** - Reducing dependence on distant suppliers

## The Way Forward

Resilient supply chains require investment in technology, relationships, and strategic planning. It's not just about cost—it's about continuity.

## Conclusion

The companies that thrive will be those that adapt, anticipate, and build supply chains designed for uncertainty.`,
        publishedAt: "2024-09-10",
        author: "Shilpa Pujar",
        coverImage: "/images/blog/supply-chain.jpg",
        category: "Article",
        tags: ["Supply Chain", "Operations", "Business", "Strategy"],
        readingTime: 7,
        featured: false,
    },
    {
        slug: "poem-silent-strength",
        title: "Silent Strength",
        excerpt: "A poem celebrating the quiet resilience that carries us through difficult times.",
        content: `# Silent Strength

*A poem*

Not all strength roars like thunder,
Some strength is soft, like rain.
It doesn't tear the world asunder,
It quietly heals the pain.

---

In the silence of the midnight hour,
When hope feels far away,
There blooms an unseen flower—
Strength that helps us stay.

---

It's found in small acts of kindness,
In the courage to begin again,
In walking through the blindness,
In embracing joy and pain.

---

So when life feels too heavy to bear,
Remember what you've been through.
Your silent strength is always there,
And it will carry you.`,
        publishedAt: "2024-08-05",
        author: "Shilpa Pujar",
        coverImage: "/images/blog/strength.jpg",
        category: "Poetry",
        tags: ["Poetry", "Strength", "Resilience", "Life"],
        readingTime: 2,
        featured: false,
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
