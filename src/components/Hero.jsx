import React from "react";
// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useState } from "react";

function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="home"
      className="relative min-h-screen gap-10 flex flex-col md:flex-row items-center justify-center px-6 md:px-12 overflow-hidden bg-gray-950 text-white"
    >
      {/* 🔹 Floating Blobs Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-60 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>


      {/* Left: Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="shrink-0 mb-8 md:mb-0 relative z-10"
      >
        <img
          src="/myphoto.jpeg"
          alt="Profile"
          className=" -rotate-20 w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-xl border-4 border-amber-300 backdrop-blur-lg"
        />
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:ml-12 text-center md:text-left relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Hi, I'm <span className="text-amber-300">Rohit Gupta</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          I’m a passionate{" "}
          <span className="font-semibold text-amber-300">
            Full Stack Developer
          </span>{" "}
          crafting modern, responsive, and user-friendly web applications.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <div className="relative inline-block ">{/* Main button */}</div>
          <a
            href="./Rohit_Gupta_Resume1.pdf"
            target="_blanck"
            className="px-6 py-2  bg-amber-400 text-white rounded-xl font-medium shadow-lg hover:bg-amber-600 transition"
          >
            Resume
          </a>
          <a
            href="#projects"
            onMouseEnter={() => setOpen(false)}
            className="px-6 py-2 border border-amber-400 text-amber-400 rounded-xl font-medium hover:bg-amber-400/20 transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}
export default Hero;
