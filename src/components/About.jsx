// src/components/About.jsx
import { motion } from "framer-motion";
import React from "react"
function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex  flex-col md:flex-row items-center justify-center py-24 px-6 md:px-12 bg-gray-950 text-white overflow-hidden"
    >
      {/* 🔹 Floating Blobs Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content Wrapper */}
      <div className="relative w-full  flex flex-col md:flex-row items-center min-md: gap-8  z-10 justify-evenly">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shrink-0 mt-6 sm:mt-8 md:mt-12 lg:mt-0"
        >
          <img
            src="/about.webp"
            alt="About Me"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-xl border-4 border-amber-300"
          />
        </motion.div>


        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            About <span className="text-amber-300">Me</span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            I am a <span className="font-semibold text-amber-300">Full Stack Developer </span>
            with a strong passion for creating interactive, dynamic, and scalable web applications.
            My focus is always on writing clean, efficient, and maintainable code.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            With expertise in <span className="font-semibold text-amber-300">React, JavaScript, Node.js, Express, MongoDB and modern Tools</span>,
            I strive to build products that not only work flawlessly but also deliver an outstanding user experience.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            I believe in Continuous learner of new technologies, strategies and tools to develop whimsical ideas.
          </p>

          {/* Skills Badges */}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
