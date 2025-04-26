import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface SocialIconProps {
  type: "github" | "linkedin" | "email";
  url: string;
}

export const SocialIcon = ({ type, url }: SocialIconProps) => {
  const renderIcon = () => {
    switch (type) {
      case "github":
        return <FaGithub size={24} />;
      case "linkedin":
        return <FaLinkedin size={24} />;
      case "email":
        return <FaEnvelope size={24} />;
      default:
        return null;
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-accent transition-colors duration-300"
    >
      {renderIcon()}
    </a>
  );
};
