import { navLinks } from "../data/navLinks";
import { NavbarLink } from "../components/NavbarLink";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background">
      <nav className="container flex items-center justify-between h-16">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-accent">
          Muhammad
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <NavbarLink key={link.id} href={`#${link.id}`} label={link.label} />
          ))}
        </div>
      </nav>
    </header>
  );
};
