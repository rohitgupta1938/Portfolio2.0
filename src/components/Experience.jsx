import React from "react";
// src/components/Profile.jsx
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

function Profile() {
  return (
    <section
      id="experience"
      className="relative  bg-gray-950 text-white min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-12  overflow-hidden"
    >
      {/* 🔹 Floating Blobs Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-60 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content Grid */}
      <div>
        <div className="text-4xl md:text-5xl font-bold mb-8 z-10 text-center">
          <span className=" text-amber-300">Experience</span>
        </div>
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/60 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-6 text-amber-400">
            Experience
          </h3>

          <div className="border-l-4 border-amber-400 pl-5">
            <h4 className="text-xl font-semibold text-white">
              MERN Stack Intern
            </h4>

            <p className="text-amber-300 text-sm mt-1">
              Detagenix Pvt. Ltd. | Remote | Currently Working
            </p>

            <p className="text-gray-300 mt-4 leading-relaxed">
              Developing and maintaining full-stack web applications using
              MongoDB, Express.js, React.js, and Node.js while ensuring
              responsive design and seamless user experience. Building and
              integrating RESTful APIs to enable dynamic functionality and
              efficient frontend-backend communication. Working on reusable
              components, authentication systems, and database operations to
              improve application scalability and performance. Collaborating
              with the development team to debug issues, optimize workflows, and
              deliver user-friendly solutions using modern development practices
              and Git/GitHub version control.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Profile;
