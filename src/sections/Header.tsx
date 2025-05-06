import { motion } from "framer-motion";
import { navLinks } from "../data/navLinks";
import { NavbarLink } from "../components/NavbarLink";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 bg-background"
    >
      <nav className="container flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-accent">TheFakeHamma</div>
        <div className="hidden md:flex gap-8">
          {navLinks
            .filter((link) => link.id !== "home")
            .map((link) => (
              <NavbarLink
                key={link.id}
                href={`#${link.id}`}
                label={link.label}
              />
            ))}
        </div>
      </nav>
    </motion.header>
  );
};
