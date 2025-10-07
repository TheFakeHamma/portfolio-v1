// src/sections/About.tsx

// import { SectionTitle } from "../components/SectionTitle";

export const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "PostgreSQL",
  ];

  return (
    <section id="about" className="container py-24 max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-accent mb-16 text-center">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left Column: About Text */}
        <div className="basis-1/2 min-w-0 text-secondary space-y-5 leading-relaxed">
          <p>
            Hello! I'm Muhammad, a passionate web developer who enjoys building
            responsive and dynamic websites. My focus is on creating clean,
            accessible, and beautiful digital experiences for users.
          </p>

          <p>
            I started my journey by studying fullstack development and have
            continuously improved through personal and client projects. I love
            solving problems, optimizing performance, and always pushing my
            skills further.
          </p>

          <p>
            Outside of work, I enjoy gaming, creative projects, and learning new
            technologies that expand what I can build on the web.
          </p>
        </div>

        {/* Right Column: Profile Card */}
        <div className="basis-1/2 min-w-0 bg-[#112240] rounded-xl p-8 shadow-md text-secondary text-sm sm:text-base space-y-6">
          <p className="text-lg sm:text-xl font-semibold text-primary">
            Muhammad – Web Developer
          </p>

          <div className="flex items-start gap-2">
            <span className="text-accent pt-0.5">🧑‍💻</span>
            <p>
              <strong>Current:</strong> Fullstack Developer, Freelancer
            </p>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-accent pt-0.5">📍</span>
            <p>
              <strong>Location:</strong> Stockholm, Sweden
            </p>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-accent pt-0.5">✉️</span>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:your@email.com"
                className="text-primary hover:text-accent transition-colors"
              >
                your@email.com
              </a>
            </p>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-accent pt-1.5">🧠</span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#0a192f] text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
