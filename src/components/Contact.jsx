// src/components/Contact.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-15 py-16 bg-gray-950 text-white"
    >
      
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      {/* <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div> */}
      <div className="relative z-10 max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold leading-snug">
            Get In <span className="text-amber-300">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Want to work together or just say hi?  
            I’d love to hear from you!  
            Connect with me through email or socials below 👇
          </p>

          {/* Contact Info */}
          <div className="space-y-3">
            <p className="flex items-center gap-3 ">
              <FaEnvelope className="text-amber-200 text-xl" /> rohitgupta1938@gmail.com
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <FaLinkedin className="text-amber-200 text-xl" /> linkedin.com/in/rohitgupta1938
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <FaGithub className="text-amber-200 text-xl" /> github.com/rohitgupta1938
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            <a
              href="mailto:rohitgupta1938@gmail.com"
              className="p-4 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition"
            >
              <FaEnvelope className="text-2xl text-amber-400" />
            </a>
            <a
              href="https://github.com/rohitgupta1938"
              target="_blank"
              className="p-4 rounded-full bg-amber-500/20 hover:bg-emerald-500/40 transition"
            >
              <FaGithub className="text-2xl text-amber-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohitgupta1938/"
              target="_blank"
              className="p-4 rounded-full bg-amber-500/20 hover:bg-amber-200/40 transition"
            >
              <FaLinkedin className="text-2xl text-amber-400" />
            </a>
            <a
              href="https://x.com/RohitGupta91485"
              target="_blank"
              className="p-4 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition"
            >
              <FaTwitter className="text-2xl text-amber-400" />
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
      action="https://formspree.io/f/xeolzzay"
      method="POST"
      className="bg-gray-900 rounded-2xl shadow-xl space-y-5 py-6"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-amber-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-amber-400"
      />
      <textarea
        name="message"
        rows="6"
        placeholder="Your Message"
        required
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-amber-400"
      ></textarea>
      <button
        type="submit"
        className="w-full py-3 bg-amber-500 hover:bg-amber-600 rounded-lg font-semibold shadow-lg transition"
      >
        Send Message
      </button>
    </form>
      </div>
    </section>
  );
}
