// src/sections/Contact.tsx

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null
  );

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          setStatusType("success");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setStatusMessage("Failed to send message. Please try again later.");
          setStatusType("error");
        }
      );
  };

  return (
    <section id="contact" className="container py-24 max-w-6xl mx-auto pt-2">
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

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Warm Message + Social Links */}
        <motion.div
          className="flex flex-col justify-start items-center md:items-start gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Warm Heartfelt Message */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">Let's Connect 🌟</h3>
            <p className="text-secondary">
              Whether you have a question, want to start a project, or just want
              to say hi, my inbox is always open. I'll try my best to get back
              to you as soon as possible!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-3xl text-primary">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-transform transform hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-transform transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Direct Email */}
          <p className="text-secondary text-sm">
            Or email me directly at{" "}
            <a
              href="mailto:your@email.com"
              className="text-accent hover:underline hover:text-teal-400 transition-all"
            >
              your@email.com
            </a>
          </p>
        </motion.div>
        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 bg-[#112240] p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`text-center text-sm font-semibold ${
                statusType === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {statusMessage}
            </div>
          )}
        </motion.form>

        
      </div>
    </section>
  );
};
