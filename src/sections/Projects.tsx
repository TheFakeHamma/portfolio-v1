import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <section id="projects" className="container py-24 max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-accent mb-16 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            slug={project.slug}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
};
