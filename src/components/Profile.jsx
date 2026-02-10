import React from "react"
// src/components/Profile.jsx
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

function Profile() {
  return (
    <section
      id="profile"
      className="relative  bg-gray-950 text-white min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-12  overflow-hidden"
    >
      {/* 🔹 Floating Blobs Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-60 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content Grid */}
      <div>
        <div className="text-4xl md:text-5xl font-bold mb-16 z-10 text-center"
        >
          My <span className=" text-amber-300">Profile</span>

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full relative z-10">
          {/* Left Side - Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/60 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-800 flex flex-col items-center lg:items-start"
          >
            <img
              src="/myphoto.jpeg"
              alt="Profile"
              className="w-44 h-44 object-cover rounded-full shadow-lg border-4 border-amber-400"
            />
            <h3 className="text-2xl font-semibold mt-4">Rohit Gupta</h3>
            <p className="text-gray-300 mt-3 text-center lg:text-left">
              I’m a{" "}
              <span className="text-amber-300 font-semibold">
                Full Stack Developer
              </span>{" "}
              skilled in React, Node.js, Express, MongoDB and problem solving. Passionate about
              building creative & impactful digital experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mt-6">
              {[
                {
                  icon: <FaGithub className="text-2xl" />,
                  url: "https://github.com/rohitgupta1938",
                },
                {
                  icon: <FaLinkedin className="text-2xl" />,
                  url: "https://www.linkedin.com/in/rohitgupta1938/",
                },
                {
                  icon: <FaTwitter className="text-2xl" />,
                  url: "https://twitter.com/RohitGupta91485",
                },
                {
                  icon: <FaEnvelope className="text-2xl" />,
                  url: "mailto:rohitgupta1938@gmail.com",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition text-amber-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Platforms & Certificates */}
          <div className="flex flex-col gap-8">
            {/* Coding Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900/60 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-semibold mb-6 text-amber-400">
                Coding Platforms
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "LeetCode", url: "https://leetcode.com/u/rohitgupta1938/" },
                  { name: "GFG", url: "https://www.geeksforgeeks.org/user/rohitgupfjfu/" },
                  { name: "Coding Ninjas", url: "https://www.naukri.com/code360/profile/b0beb250-da70-45d1-8d9c-cc0e011340eb" },
                  { name: "Hackerrank", url: "https://www.hackerrank.com/profile/rohitgupta1938" },
                ].map((platform, i) => (
                  <a
                    key={i}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-900/60 border border-amber-400/20 p-4 rounded-lg text-center hover:bg-amber-500/20 transition font-semibold text-amber-300"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900/60 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-semibold mb-6 text-amber-400">
                Certificates
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Basic Python Certification", link: "https://media.geeksforgeeks.org/courses/certificates/f29dd13ead84890d896c03716e687c6e.pdf" },
                  { name: " React JS Development ", link: "https://media.geeksforgeeks.org/courses/certificates/9912438264721bd0fe7121dbe8b04cb5.pdf" },
                ].map((cert, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-amber-400" />
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:underline"
                    >
                      {cert.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
