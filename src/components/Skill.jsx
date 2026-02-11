import React from "react";
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
      items: ["NodeJS", "ExpressJS", "Authentication","MongoDB Atlas"],
    },
    {
      title: "Database",
      items: ["MySQL", "MongoDB"],
    },
    {
      title: "Other",
      items: ["SQL", "Data Structures", "OOPs","JWT"],
    },
    {
      title: "Tools",
      items: ["Git/Github", "Cloudinary", "VS Code", "Postman"],
    },
  ];

  return (
    <section id="skills" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-950 py-20 px-6 md:px-12 overflow-hidden">

      {/* 🔹 Floating Blobs Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-6xl">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My <span className="text-amber-400">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className=" gap-col-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg border border-amber-400/20 hover:shadow-amber-400/30 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-amber-300 mb-4">{skill.title}</h3>
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
