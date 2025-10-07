import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface SocialIconProps {
  type: "github" | "linkedin" | "email";
  url: string;
  ariaLabel?: string;
}

export const SocialIcon = ({ type, url, ariaLabel }: SocialIconProps) => {
  const icons = {
    github: <FaGithub size={24} />,
    linkedin: <FaLinkedin size={24} />,
    email: <FaEnvelope size={24} />,
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-accent transition-transform transform hover:scale-110"
      aria-label={ariaLabel || type}
    >
      {icons[type]}
    </a>
  );
};
