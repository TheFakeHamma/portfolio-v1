import { motion } from "framer-motion";
import { navLinks } from "../data/navLinks";
import { NavbarLink } from "../components/NavbarLink";

interface SidebarProps {
  activeSection: string;
}

export const Sidebar = ({ activeSection }: SidebarProps) => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="hidden lg:fixed lg:flex flex-col items-start gap-6 top-1/4 left-6 lg:left-10 xl:left-16 z-50"

    >
      {navLinks.map((link) => (
        <NavbarLink
          key={link.id}
          href={`#${link.id}`}
          label={link.label.toUpperCase()}
          isActive={activeSection === link.id}
        />
      ))}
    </motion.aside>
  );
};
