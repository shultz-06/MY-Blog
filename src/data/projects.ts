// Projects Data - Easy to customize
export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    category: string;
    featured: boolean;
    githubUrl?: string;
    liveUrl?: string;
    status: 'completed' | 'in-progress' | 'archived';
    startDate: string;
    endDate?: string;
}

export const projects: Project[] = [
    {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
        description: "Full-featured e-commerce platform with real-time inventory, payment processing, and analytics dashboard.",
        longDescription: `A comprehensive e-commerce solution built from scratch, featuring a React-based storefront, Node.js backend with microservices architecture, and real-time analytics.

Key features include:
- Real-time inventory management
- Stripe payment integration
- Admin dashboard with sales analytics
- Multi-vendor support
- Mobile-responsive design`,
        image: "/images/projects/ecommerce.jpg",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
        category: "Full Stack",
        featured: true,
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://ecommerce-demo.com",
        status: "completed",
        startDate: "2023-01",
        endDate: "2023-06",
    },
    {
        id: "ai-content-generator",
        title: "AI Content Generator",
        description: "AI-powered content generation tool using GPT-4 for marketing copy, blog posts, and social media content.",
        longDescription: `An innovative SaaS application that leverages OpenAI's GPT-4 to generate high-quality marketing content.

Features:
- Multiple content types (blog, social, ads)
- Brand voice customization
- Content scheduling and publishing
- Analytics and A/B testing
- Team collaboration`,
        image: "/images/projects/ai-content.jpg",
        technologies: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Tailwind CSS"],
        category: "AI/ML",
        featured: true,
        githubUrl: "https://github.com/yourusername/ai-content-generator",
        liveUrl: "https://ai-content-demo.com",
        status: "completed",
        startDate: "2023-03",
        endDate: "2023-08",
    },
    {
        id: "task-management-app",
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, Kanban boards, and team analytics.",
        longDescription: `A modern task management solution inspired by Trello and Asana, with real-time collaboration features.

Key features:
- Drag-and-drop Kanban boards
- Real-time collaboration with WebSockets
- Time tracking and reporting
- Integration with Slack and GitHub
- Mobile apps for iOS and Android`,
        image: "/images/projects/task-app.jpg",
        technologies: ["React", "TypeScript", "Firebase", "Socket.io", "React Native"],
        category: "Full Stack",
        featured: true,
        githubUrl: "https://github.com/yourusername/task-management",
        liveUrl: "https://tasks-demo.com",
        status: "completed",
        startDate: "2022-08",
        endDate: "2022-12",
    },
    {
        id: "fitness-tracker",
        title: "Fitness Tracker Pro",
        description: "Health and fitness tracking app with workout plans, nutrition logging, and progress visualization.",
        longDescription: `A comprehensive fitness application that helps users track their health journey.

Features:
- Custom workout plans
- Nutrition and calorie tracking
- Progress photos and measurements
- Integration with wearables
- Social challenges and leaderboards`,
        image: "/images/projects/fitness.jpg",
        technologies: ["React Native", "Node.js", "MongoDB", "HealthKit", "Google Fit"],
        category: "Mobile",
        featured: false,
        githubUrl: "https://github.com/yourusername/fitness-tracker",
        status: "completed",
        startDate: "2022-03",
        endDate: "2022-07",
    },
    {
        id: "portfolio-template",
        title: "Developer Portfolio Template",
        description: "Open-source portfolio template for developers with blog support, dark mode, and easy customization.",
        longDescription: `A beautiful, performant portfolio template that developers can use to showcase their work.

Features:
- MDX-based blog system
- Dark/light mode
- SEO optimized
- Easy customization via data files
- 95+ Lighthouse score`,
        image: "/images/projects/portfolio.jpg",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
        category: "Open Source",
        featured: false,
        githubUrl: "https://github.com/yourusername/portfolio-template",
        liveUrl: "https://yourportfolio.com",
        status: "completed",
        startDate: "2023-09",
        endDate: "2023-10",
    },
    {
        id: "chat-application",
        title: "Real-time Chat App",
        description: "End-to-end encrypted chat application with video calls, file sharing, and group messaging.",
        longDescription: `A secure messaging platform built with privacy in mind.

Features:
- End-to-end encryption
- Video and voice calls
- File sharing with encryption
- Group chats and channels
- Message reactions and threads`,
        image: "/images/projects/chat.jpg",
        technologies: ["React", "WebRTC", "Node.js", "Socket.io", "MongoDB"],
        category: "Full Stack",
        featured: false,
        githubUrl: "https://github.com/yourusername/chat-app",
        status: "in-progress",
        startDate: "2023-11",
    },
];

// Get featured projects
export const getFeaturedProjects = () => projects.filter(p => p.featured);

// Get projects by category
export const getProjectsByCategory = (category: string) =>
    category === 'All' ? projects : projects.filter(p => p.category === category);

// Get unique categories
export const getCategories = () => {
    const categories = ['All', ...new Set(projects.map(p => p.category))];
    return categories;
};

// Get project by ID
export const getProjectById = (id: string) => projects.find(p => p.id === id);
