import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

export const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };

  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return (
      <div className="container py-24">
        <h1 className="text-4xl text-accent">Project not found</h1>
      </div>
    );
  }

  return (
    <section className="container py-24 max-w-6xl mx-auto">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="flex items-center gap-2 text-sm text-accent hover:text-teal-300 transition-colors mb-12"
      >
        <FaArrowLeft />
        Back to Projects
      </button>

      {/* Flex container */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Main content */}
        <motion.div
          className="flex-1 space-y-16"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h1 className="text-4xl font-bold text-accent flex items-center gap-4">
            {project.title}

            {/* Status Tag */}
            <span
              className={`text-xs font-semibold px-2 py-1 rounded ${
                project.status === "Completed"
                  ? "bg-green-700 text-green-300"
                  : project.status === "In Progress"
                  ? "bg-yellow-700 text-yellow-300"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {project.status}
            </span>
          </h1>

          {/* Overview */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary border-b border-border pb-2">
                Overview
              </h2>
              <p className="text-secondary leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {project.screenshots.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="rounded-lg border border-border"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary border-b border-border pb-2">
              Features
            </h2>
            <ul className="space-y-2 text-secondary">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary border-b border-border pb-2">
              Challenges
            </h2>
            <p className="text-secondary leading-relaxed">
              {project.challenges}
            </p>
          </div>

          {/* Learnings */}
          {project.learnings && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary border-b border-border pb-2">
                Learnings
              </h2>
              <p className="text-secondary leading-relaxed">
                {project.learnings}
              </p>
            </div>
          )}
        </motion.div>

        {/* Right: Sidebar */}
        <motion.div
          className="md:w-1/3 bg-[#112240] rounded-xl p-6 space-y-8 h-fit"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Logo */}
          {project.logo && (
            <img
              src={project.logo}
              alt="Project Logo"
              className="w-24 h-24 object-contain mx-auto mb-4"
            />
          )}

          {/* Technologies */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-primary">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#0a192f] text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-primary">Links</h2>
            <div className="flex flex-col gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center bg-[#0a192f] hover:bg-accent hover:text-background text-primary py-2 px-4 rounded transition-transform transform hover:scale-105 text-sm"
                >
                  <FaGithub />
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center bg-[#0a192f] hover:bg-accent hover:text-background text-primary py-2 px-4 rounded transition-transform transform hover:scale-105 text-sm"
                >
                  <FaExternalLinkAlt />
                  Live Site
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
