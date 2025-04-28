import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "./sections/Header";
import { Sidebar } from "./sections/Sidebar";

import { navLinks } from "./data/navLinks";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("home");
      if (!home) return;

      const homeHeight = home.offsetHeight;
      setIsHome(window.scrollY < homeHeight - 50);

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

  return (
    <div className="bg-background text-primary font-sans">
      <AnimatePresence mode="wait">
        {isHome ? (
          <Header key="header" />
        ) : (
          <Sidebar key="sidebar" activeSection={activeSection} />
        )}
      </AnimatePresence>

      <main className="pt-16">
        <section
          id="home"
          className="h-screen flex items-center justify-center"
        >
          <Hero />
        </section>
        <section
          id="about"
          className="h-screen flex items-center justify-center"
        >
          <About />
        </section>
        <section
          id="experience"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl">Experience Section</h1>
        </section>
        <section
          id="projects"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl">Projects Section</h1>
        </section>
        <section
          id="contact"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl">Contact Section</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
