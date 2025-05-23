import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  slug,
}: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4 cursor-pointer"
    >
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
    </div>
  );
};
