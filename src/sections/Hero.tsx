import { Button } from "../components/Button";
import { SocialIcon } from "../components/SocialIcon";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-start gap-8 container px-4 sm:px-6 lg:px-8"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-accent text-lg sm:text-xl"
      >
        Hi, my name is
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
        className="text-3xl sm:text-4xl font-semibold text-secondary leading-tight"
      >
        I build things for the web.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-secondary text-base sm:text-lg"
      >
        I'm a web developer focused on building (and occasionally designing)
        exceptional digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex items-center gap-8 mt-6"
      >
        <Button label="View Projects" href="#projects" variant="primary" />
        <div className="flex gap-6">
          <SocialIcon type="github" url="https://github.com/thefakehamma" />
          <SocialIcon
            type="linkedin"
            url="https://linkedin.com/in/thefakehamma"
          />
          <SocialIcon type="email" url="mailto:contact@thefakehamma.com" />
        </div>
      </motion.div>
    </section>
  );
};
