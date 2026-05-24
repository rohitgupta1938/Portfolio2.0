import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gray-950 text-white py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center relative z-10">
        Let's <span className="text-amber-400">Connect</span>
      </h2>

      {/* Background Blobs */}
      <div className="absolute -top-20 -left-20 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 pt-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold leading-snug">
            Open for{" "}
            <span className="text-amber-300">
              Full Stack Opportunities
            </span>
          </h2>

          <p className="text-gray-300">
            Noida, Uttar Pradesh <br />
            201310, India
          </p>

          {/* Phone */}
          <div className="flex justify-center md:justify-start items-center gap-3 text-gray-300">
            <FaPhoneAlt className="text-amber-400" />
            <span>+91-7761861278</span>
          </div>

          {/* Email */}
          <div className="flex justify-center md:justify-start items-center gap-3 text-gray-300">
            <FaEnvelope className="text-amber-400" />
            <span>rohitgupta.fullstack@gmail.com</span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap">
            <a
              href="https://github.com/rohitgupta1938"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition"
            >
              <FaGithub className="text-2xl text-amber-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/rohitgupta1938"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition"
            >
              <FaLinkedin className="text-2xl text-amber-400" />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition"
            >
              <FaInstagram className="text-2xl text-amber-400" />
            </a>

            <a
              href="mailto:rohitgupta.fullstack@gmail.com"
              className="p-3 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition"
            >
              <FaEnvelope className="text-2xl text-amber-400" />
            </a>

            <a
              href="https://x.com/RohitGupta91485"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition"
            >
              <FaTwitter className="text-2xl text-amber-400" />
            </a>
          </div>
        </div>

        {/* Right Side Card */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-amber-400">
            Full Stack Developer
          </h3>

          <p className="text-gray-300 leading-7">
            Passionate about building scalable web applications
            using MERN Stack and modern technologies.
            Currently exploring AI, LLMs, and creating
            impactful digital experiences.
          </p>

          <a
            href="mailto:rohitgupta.fullstack@gmail.com"
            className="inline-block mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-lg font-semibold transition"
          >
            Hire Me
          </a>
        </div>

      </div>
    </section>
  );
}