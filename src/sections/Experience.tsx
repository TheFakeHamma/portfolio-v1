import { experience } from "../data/experience";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section id="experience" className="container py-24 max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-accent mb-16 text-center">
        Experience
      </h2>

      <div className="flex flex-col gap-12">
        {[...experience]
          .sort((a, b) => Number(b.year) - Number(a.year))
          .map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#112240] p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Logo */}
              {item.logo && (
                <img
                  src={item.logo}
                  alt={`${item.company} Logo`}
                  className="w-20 h-20 object-contain"
                />
              )}

              {/* Content */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-2xl font-semibold text-primary">
                    {item.role}
                  </h3>
                  <span className="text-xs bg-background text-secondary font-semibold px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>

                <p className="text-sm text-secondary">
                  {item.company} &bull; {item.period}
                </p>

                <p className="text-secondary leading-relaxed">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#0a192f] text-primary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};
