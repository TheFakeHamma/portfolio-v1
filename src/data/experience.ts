export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  year: string;
  description: string;
  technologies: string[];
  logo?: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "IKEA",
    role: "Studio Host & Order Coach",
    period: "2022 - 2023",
    year: "2022",
    description:
      "Led studio hosting, quality checked kitchen and storage orders.",
    technologies: ["CRM Systems", "Order Systems", "Leadership"],
    logo: "/logos/ikea-logo.png",
  },
  {
    company: "IKEA",
    role: "Kitchen Designer",
    period: "2020 - 2022",
    year: "2020",
    description:
      "Designed and planned kitchens specializing in maximizing small spaces.",
    technologies: ["Planning Tools", "Customer Service", "Project Management"],
    logo: "/logos/ikea-logo.png",
  },

  {
    company: "IKEA",
    role: "Support Commercial Super User",
    period: "2023 - Present",
    year: "2023",
    description:
      "Facilitating training, improving selling tools usage across Sweden.",
    technologies: ["Selling Tools", "Training", "Feedback Systems"],
    logo: "/logos/ikea-logo.png",
  },
];
