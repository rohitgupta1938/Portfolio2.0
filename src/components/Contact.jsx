import React from "react";
// src/components/Contact.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
     className="relative min-h-screen bg-gray-950 text-white py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center relative z-10 hidden md:block">
        Send Me a <span className="text-amber-400">Message</span>
      </h2>

      {/* 🔹 Background Blobs */}
      <div className="absolute -top-20 -left-20 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 pt-5 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* 🔹 Left Side */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-3xl font-bold leading-snug sm:text-base">
            Getting in <span className="text-amber-300 ">touch is easy!</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base ">
            Greater Noida, Uttar Pradesh <br /> 201310 India
          </p>
          <p className="text-gray-300 text-sm sm:text-base ">
            7761861278
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            rohitgupta1938@gmail.com
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mt-6 flex-wrap">
            <a
              href="https://github.com/rohitgupta1938"
              target="_blank"
              className="p-2 sm:p-3 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition"
            >
              <FaGithub className="text-lg sm:text-xl md:text-2xl text-amber-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohitgupta1938"
              target="_blank"
              className="p-2 sm:p-3 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition"
            >
              <FaLinkedin className="text-lg sm:text-xl md:text-2xl text-amber-400" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              className="p-2 sm:p-3 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition"
            >
              <FaInstagram className="text-lg sm:text-xl md:text-2xl text-amber-400" />
            </a>
            <a
              href="mailto:rohitgupta1938@gmail.com"
              className="p-2 sm:p-3 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition"
            >
              <FaEnvelope className="text-lg sm:text-xl md:text-2xl text-amber-400" />
            </a>
            <a
              href="https://x.com/RohitGupta91485"
              target="_blank"
              className="p-2 sm:p-3 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition"
            >
              <FaTwitter className="text-lg sm:text-xl md:text-2xl text-amber-400" />
            </a>
          </div>
        </div>

        {/* 🔹 Right Side - Form */}
        <h2 className="text-4xl font-bold text-center relative z-10 m-5 mt-7 block sm:hidden">
        Send Me a <span className="text-amber-400">Message</span>
      </h2>
         <form
          action="https://formspree.io/f/xeolzzay"
          method="POST"
          className="bg-gray-900 rounded-2xl mt-5 shadow-xl space-y-4 sm:space-y-5 p-4 sm:p-6 md:p-8 border border-gray-800"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm sm:text-base focus:outline-none focus:border-amber-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm sm:text-base focus:outline-none focus:border-amber-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm sm:text-base focus:outline-none focus:border-amber-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-amber-500 hover:bg-amber-600 rounded-lg font-semibold shadow-lg transition text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}