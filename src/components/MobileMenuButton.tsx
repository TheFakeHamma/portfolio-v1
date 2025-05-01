import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { navLinks } from "../data/navLinks";

export const MobileMenuButton = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="bg-accent text-background p-2 rounded-md shadow-md hover:bg-teal-400 transition-all"
        >
          {open ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>

      {/* Water Bloom Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={containerRef}
            initial={{ clipPath: "circle(0% at 90% 5%)", opacity: 0 }}
            animate={{ clipPath: "circle(150% at 90% 5%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 90% 5%)", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#0a192f] z-40 flex flex-col items-center justify-center gap-8 text-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                className="text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
