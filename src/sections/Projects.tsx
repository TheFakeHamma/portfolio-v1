import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <section id="projects" className="container py-24 max-w-6xl mx-auto">
      <SectionTitle title="Projects" />

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
