import { useState, useRef } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { navLinks } from "../data/navLinks";

const BUTTON_SIZE = 48;

export const MobileMenuButton = () => {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState({ x: "90%", y: "5%" });

  const buttonRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const toggleMenu = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;
      const xPercent = ((rect.left + rect.width / 2) / winWidth) * 100;
      const yPercent = ((rect.top + rect.height / 2) / winHeight) * 100;

      setOrigin({
        x: `${clamp(xPercent, 5, 95).toFixed(1)}%`,
        y: `${clamp(yPercent, 5, 95).toFixed(1)}%`,
      });
    }

    setOpen((prev) => !prev);
  };

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Draggable Button */}
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: window.innerWidth - BUTTON_SIZE,
          bottom: window.innerHeight - BUTTON_SIZE,
        }}
        style={{ x, y }}
        ref={buttonRef}
        className="md:hidden fixed top-4 right-4 z-50 cursor-grab active:cursor-grabbing"
      >
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="w-12 h-12 rounded-full border-2 border-accent bg-background text-accent flex items-center justify-center shadow-md hover:bg-accent hover:text-background transition-all"
        >
          {open ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
      </motion.div>

      {/* Expanding Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              clipPath: `circle(0% at ${origin.x} ${origin.y})`,
              opacity: 0,
            }}
            animate={{
              clipPath: `circle(150% at ${origin.x} ${origin.y})`,
              opacity: 1,
            }}
            exit={{
              clipPath: `circle(0% at ${origin.x} ${origin.y})`,
              opacity: 0,
            }}
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
