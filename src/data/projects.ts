export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  challenges: string;
  learnings: string;
  tags: string[];
  logo?: string;
  screenshots?: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "Completed" | "In Progress" | "Planned"; // ✨ NEW
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "My personal portfolio built with React, Vite, and TailwindCSS.",
    longDescription: "This project showcases my web development skills...",
    features: [
      "Responsive design",
      "Dynamic navigation",
      "Framer Motion page transitions",
    ],
    challenges: "Ensuring smooth animations across route transitions.",
    learnings: "Improved my React and animation skills.",
    tags: ["React", "TypeScript", "TailwindCSS"],
    logo: "/logos/portfolio-logo.png",
    screenshots: [
      "/screenshots/portfolio-1.png",
      "/screenshots/portfolio-2.png",
    ],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio.com",
    status: "In Progress", // ✨
  },
];
