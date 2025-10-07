import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./sections/Header";
import { Sidebar } from "./sections/Sidebar";
import { useEffect, useState } from "react";
import { navLinks } from "./data/navLinks";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { ProjectDetails } from "./sections/ProjectDetails";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { AnimatedBackground } from "./components/AnimatedBackground";

function App() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("home");
      if (!home) return;

      setIsHome(window.scrollY < 10);

      let currentSection = "home";

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = link.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isProjectPage = location.pathname.startsWith("/projects");

  useEffect(() => {
    if (location.state?.scrollToProjects) {
      const section = document.getElementById("projects");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-background text-primary font-sans relative">
      {/* Background matrix effect */}
      <AnimatedBackground />

      {/* Glass dark layer over animation for contrast */}
      <div className="fixed inset-0 bg-[#0a192f]/5 z-10 pointer-events-none" />

      {/* Header / Sidebar */}
      <AnimatePresence mode="wait">
        {!isProjectPage && isHome ? (
          <Header key="header" />
        ) : !isProjectPage && !isHome ? (
          <Sidebar key="sidebar" activeSection={activeSection} />
        ) : null}
      </AnimatePresence>

      {/* Page content */}
      <Routes>
        <Route
          path="/"
          element={
            <main className="pt-16 lg:pl-28 xl:pl-36 relative z-20">
              <section
                id="home"
                className="min-h-screen flex items-center justify-center"
              >
                <Hero />
              </section>
              <section
                id="about"
                className="min-h-screen flex items-center justify-center"
              >
                <About />
              </section>
              <section
                id="projects"
                className="min-h-screen flex items-center justify-center"
              >
                <Projects />
              </section>
              <section
                id="experience"
                className="min-h-screen flex items-center justify-center"
              >
                <Experience />
              </section>
              <section
                id="contact"
                className="min-h-screen flex items-center justify-center"
              >
                <Contact />
              </section>
            </main>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
