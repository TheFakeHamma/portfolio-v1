import { Button } from "../components/Button";
import { SocialIcon } from "../components/SocialIcon";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center sm:items-start gap-8 container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center sm:text-left"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-accent text-lg sm:text-xl font-mono tracking-wide"
      >
        // Code is my canvas. Terminal is home. Web is my world.
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-bold text-primary leading-tight"
      >
        Muhammad
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-semibold text-accent leading-tight"
      >
        I build things for the web.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-secondary text-base sm:text-lg"
      >
        I'm a full-stack developer crafting fast, clean, and powerful websites.
        Currently building side projects and sharpening my tools.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6"
      >
        <Button label="View Projects" href="#projects" variant="primary" />
        <div className="flex gap-4 sm:gap-6">
          <SocialIcon
            type="github"
            url="https://github.com/thefakehamma"
            ariaLabel="GitHub profile"
          />
          <SocialIcon
            type="linkedin"
            url="https://linkedin.com/in/thefakehamma"
            ariaLabel="LinkedIn profile"
          />
          <SocialIcon
            type="email"
            url="mailto:contact@thefakehamma.com"
            ariaLabel="Send email"
          />
        </div>
      </motion.div>
    </section>
  );
};
