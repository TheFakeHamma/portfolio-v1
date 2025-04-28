// src/sections/Contact.tsx

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export const Contact = () => {
  return (
    <section id="contact" className="container py-24 max-w-4xl mx-auto">
      {/* SEO Meta */}
      <Helmet>
        <title>Contact | Your Name</title>
        <meta
          name="description"
          content="Get in touch with me for collaborations, questions, or opportunities."
        />
      </Helmet>

      {/* Section Title */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold text-accent">Contact</h2>
        <p className="text-secondary text-lg">
          Feel free to reach out if you'd like to collaborate, ask questions, or
          just say hi!
        </p>
      </div>

      {/* Contact Form */}
      <motion.form
        className="flex flex-col gap-6 bg-[#112240] p-8 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-primary mb-2 text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="bg-[#0a192f] text-primary px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-primary mb-2 text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="bg-[#0a192f] text-primary px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            placeholder="your@email.com"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-primary mb-2 text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="bg-[#0a192f] text-primary px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            placeholder="Your message..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-teal-400 to-accent hover:from-accent hover:to-teal-400 text-background font-semibold py-3 rounded-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
        >
          Send Message
        </button>
      </motion.form>

      {/* Direct Email + Socials */}
      <motion.div
        className="text-center mt-12 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Your Email */}
        <p className="text-secondary text-sm">
          Or email me directly at{" "}
          <a
            href="mailto:test@email.com"
            className="text-accent hover:underline hover:text-teal-400 transition-all"
          >
            your@email.com
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl text-primary mt-4">
          <a
            href="https://github.com/github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-transform transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-transform transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
