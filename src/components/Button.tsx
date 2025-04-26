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
    "px-6 py-2 rounded-md font-medium transition-colors duration-300";

  const variantStyles =
    variant === "primary"
      ? "bg-accent text-background hover:bg-teal-300"
      : "border border-accent text-accent hover:bg-accent hover:text-background";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
