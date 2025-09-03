// src/components/Skills.jsx
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      title: "Languages",
      items: ["C++", "Python", "C"],
    },
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind", "Bootstrap"],
    },
    {
      title: "Backend",
      items: ["NodeJS", "ExpressJS", "SQL", "MongoDB"],
    },
    {
      title: "Other",
      items: ["MySQL", "Data Structures", "OOPs"],
    },
    {
      title: "Tools",
      items: ["VS Code", "Git", "RapidAPI"],
    },
  ];

  return (
    <section id="skills" className="w-full bg-black py-20">
      <div className="px-6 md:px-20 max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-4xl font-bold text-white  mb-12">
          My <span className="text-amber-400">Skills</span>
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg border border-amber-400/20 hover:shadow-amber-400/30 hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-semibold text-amber-300 mb-4">{skill.title}</h2>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-amber-500/10 border border-amber-400/30 text-white rounded-full hover:bg-amber-500/20 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
