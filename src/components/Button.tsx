interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
}

export const Button = ({
  label,
  variant = "primary",
  onClick,
  href,
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105";

  const variantStyles =
    variant === "primary"
      ? "bg-accent text-background hover:bg-teal-300 hover:text-black"
      : "border border-accent text-accent hover:bg-accent hover:text-background";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        target={href.startsWith("#") ? undefined : "_blank"}
        rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
        className={`${baseStyles} ${variantStyles}`}
      >
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      {label}
    </button>
  );
};
