// src/components/About.jsx
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-16 bg-gray-950 text-white overflow-hidden"
    >
      {/* 🔹 Floating Blobs Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16 z-10 justify-center">
        
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <img
            src="/about.webp"
            alt="About Me"
            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border-4 border-amber-300"
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
            I am a <span className="font-semibold text-amber-300">Frontend Developer </span> 
            with a strong passion for creating interactive, dynamic, and scalable web applications.  
            My focus is always on writing clean, efficient, and maintainable code.  
          </p>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            With expertise in <span className="font-semibold text-amber-300">React, JavaScript, Node.js, and modern UI/UX design</span>, 
            I strive to build products that not only work flawlessly but also deliver an outstanding user experience.  
          </p>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            I believe in continuous learning, solving complex problems, and bringing ideas to life with creativity and innovation.
          </p>

          {/* Skills Badges */}
          <div className="pt-4 flex flex-wrap gap-3 justify-center md:justify-start">
            {["React", "JavaScript", "Node.js", "TailwindCSS", "SQL", "Git", "Express JS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-amber-500/10 text-amber-300 rounded-full text-sm font-medium shadow-sm hover:bg-emerald-500/20 transition"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
