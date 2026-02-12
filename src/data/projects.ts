import { ProjectItemFragment } from "@/types/data";

export const projects: ProjectItemFragment[] = [
    {
        _id: "financial-analysis-project",
        _slug: "financial-analysis",
        _title: "Financial Analysis of Indian FMCG Sector",
        description: "Comprehensive financial analysis and valuation study of leading FMCG companies in India.",
        year: "2024",
        category: ["Research", "Finance"],
        media: {
            items: [
                {
                    media: {
                        __typename: "BlockImage",
                        url: "/images/projects/fmcg-analysis.jpg",
                        alt: "Financial Analysis Dashboard",
                        width: 1920,
                        height: 1080,
                        aspectRatio: "16/9",
                    },
                },
            ],
        },
    },
    {
        _id: "supply-chain-optimization",
        _slug: "supply-chain",
        _title: "Supply Chain Optimization Case Study",
        description: "Case study on optimizing supply chain operations for a manufacturing company.",
        year: "2024",
        category: ["Case Study", "Operations"],
        media: {
            items: [
                {
                    media: {
                        __typename: "BlockImage",
                        url: "/images/projects/supply-chain.jpg",
                        alt: "Supply Chain Process Map",
                        width: 1920,
                        height: 1080,
                        aspectRatio: "16/9",
                    },
                },
            ],
        },
    },
    {
        _id: "startup-business-plan",
        _slug: "startup-plan",
        _title: "Startup Business Plan",
        description: "Comprehensive business plan developed for a startup venture as part of entrepreneurship coursework.",
        year: "2024",
        category: ["Academic Project", "Strategy"],
        media: {
            items: [
                {
                    media: {
                        __typename: "BlockImage",
                        url: "/images/projects/business-plan.jpg",
                        alt: "Business Model Canvas",
                        width: 1920,
                        height: 1080,
                        aspectRatio: "16/9",
                    },
                },
            ],
        },
    },
    {
        _id: "investment-portfolio-analysis",
        _slug: "portfolio-analysis",
        _title: "Investment Portfolio Analysis",
        description: "Analysis of portfolio construction and risk-return optimization strategies.",
        year: "2024",
        category: ["Research", "Finance"],
        media: {
            items: [
                {
                    media: {
                        __typename: "BlockImage",
                        url: "/images/projects/portfolio.jpg",
                        alt: "Portfolio Analysis Charts",
                        width: 1920,
                        height: 1080,
                        aspectRatio: "16/9",
                    },
                },
            ],
        },
    },
    {
        _id: "operations-research-project",
        _slug: "operations-research",
        _title: "Operations Research - Optimization Model",
        description: "Linear programming model for production planning optimization.",
        year: "2024",
        category: ["Academic Project", "Operations"],
        media: {
            items: [
                {
                    media: {
                        __typename: "BlockImage",
                        url: "/images/projects/or-project.jpg",
                        alt: "Optimization Model",
                        width: 1920,
                        height: 1080,
                        aspectRatio: "16/9",
                    },
                },
            ],
        },
    },
];
