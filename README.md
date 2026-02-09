# Personal Portfolio & Blog Website

A modern, responsive, SEO-friendly personal portfolio and blog built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

### Core Features
- 🏠 **Home Page** - Hero section, featured projects, latest blogs, CTA
- 👤 **About Page** - Bio, skills visualization, experience timeline, education, certifications
- 💼 **Projects Page** - Filterable project cards with tech stacks and links
- 📝 **Blog** - Searchable blog with categories, tags, and pagination
- 📄 **Resume** - Timeline view, skills summary, and PDF download
- 📧 **Contact** - Validated contact form with social links

### Design & UX
- 🌓 **Dark/Light Mode** - System preference detection with manual toggle
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- ♿ **Accessible** - WCAG compliant with proper contrast and focus states
- 🎨 **Modern Animations** - Smooth transitions and micro-interactions
- 🎯 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, sitemap-ready

### Technical
- ⚡ **Fast Performance** - Optimized for Core Web Vitals
- 🔧 **TypeScript** - Full type safety throughout the codebase
- 📦 **Easy Customization** - All content in data files for easy updates
- 🔌 **PWA Ready** - Service worker and manifest included

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository (or copy files)
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with theme
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About page
│   │   ├── projects/           # Projects page
│   │   ├── blog/               # Blog listing & post pages
│   │   ├── resume/             # Resume page
│   │   └── contact/            # Contact page
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── ui/                 # Reusable UI components
│   │   └── Providers.tsx       # Theme provider
│   ├── data/                   # 📝 CUSTOMIZE THESE FILES
│   │   ├── personalInfo.ts     # Your info, skills, experience
│   │   ├── projects.ts         # Your projects
│   │   └── blog.ts             # Blog posts
│   └── styles/
│       └── globals.css         # Global styles & design tokens
├── public/
│   ├── images/                 # Static images
│   └── resume.pdf              # Your resume PDF
└── package.json
```

## 🎨 Customization Guide

### 1. Personal Information
Edit `src/data/personalInfo.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  tagline: "Your tagline...",
  email: "your@email.com",
  // ... more fields
};
```

### 2. Projects
Edit `src/data/projects.ts`:
```typescript
export const projects = [
  {
    id: "project-slug",
    title: "Project Title",
    description: "Short description",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    // ... more fields
  },
];
```

### 3. Blog Posts
Edit `src/data/blog.ts`:
```typescript
export const blogPosts = [
  {
    slug: "post-slug",
    title: "Post Title",
    excerpt: "Short excerpt...",
    content: `Full markdown content...`,
    tags: ["React", "TypeScript"],
    // ... more fields
  },
];
```

### 4. Colors & Theme
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  /* ... more colors */
}
```

### 5. Social Links
Update links in `src/data/personalInfo.ts`:
```typescript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
}
```

### 6. Add Your Resume
Replace `public/resume.pdf` with your own resume file.

### 7. Add Your Photo
Add profile image to `public/images/profile.jpg` and update `personalInfo.profileImage`.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Connect to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Self-Hosted

```bash
npm run build
npm start
```

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔒 Security

- Form validation on both client and server
- Proper HTML escaping
- HTTPS ready
- No sensitive data exposed

## 📝 License

MIT License - Feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [next-themes](https://github.com/pacocoursey/next-themes)

---

Made with ❤️ using Next.js
