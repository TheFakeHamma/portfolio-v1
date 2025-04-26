interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4">
      <div>
        <h3 className="text-2xl font-bold text-accent mb-2">{title}</h3>
        <p className="text-secondary">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs bg-[#0a192f] px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            GitHub
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            Live Site
          </a>
        )}
      </div>
    </div>
  );
};
