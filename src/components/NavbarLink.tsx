interface NavbarLinkProps {
    href: string;
    label: string;
  }
  
  export const NavbarLink = ({ href, label }: NavbarLinkProps) => {
    return (
      <a
        href={href}
        className="text-primary hover:text-teal-400 transition duration-300"
      >
        {label}
      </a>
    );
  };
  