interface NavbarLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
}

export const NavbarLink = ({ href, label, isActive }: NavbarLinkProps) => {
  return (
    <a
      href={href}
      className={`text-primary hover:text-accent transition-colors duration-300 ${
        isActive ? "text-teal-400" : ""
      }`}
    >
      {isActive ? `- ${label}` : label}
    </a>
  );
};
