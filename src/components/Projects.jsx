import React from "react";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Wanderlust Listing App",
    description:
      "Built a Full-Stack listing travel app to list, and review destinations with secure user auth and upload",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuc9AvofOK-RQXhJGl7phDYR-_kNYajPQUEg&s",
    link: "https://wanderlust-bgdj.onrender.com/wanderlust",
  },
  {
    id: 2,
    title: "Real-Time Video Conferencing Platform | MERN Stack",
    description:
      "Built a real-time video conferencing web app using MERN stack with WebRTC and Socket.io. Implemented secure meeting rooms, live audio/video communication, and real-time participant management. Designed a responsive UI for seamless cross-device user experience.",
    image: "https://t3.ftcdn.net/jpg/17/32/41/16/240_F_1732411679_r0zQO4dt4abksKauUZGXNgFNxljq4afa.jpg",
    link: "https://github.com/rohitgupta1938/Video-Conferencing-Platform",
  },
  {
    id: 3,
    title: "REST APIs",
    description:
      "Developed a REST API using Node.js and Express.js with full CRUD functionality. Integrated the application with a MySQL database, implemented routing and middleware, and tested endpoints to ensure reliable and efficient data handling.",
    image:
      "data:image/png;base64,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",
    link: "https://github.com/rohitgupta1938/REST-API2",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gray-950 text-white py-16 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 🔹 Floating Blobs Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-blob"></div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 relative z-10">
        My <span className="text-amber-400">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full relative z-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 w-full shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300 border border-amber-400/20"
          >
            <a href={project.link} target="_blank">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-contain p-2 rounded-2xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-amber-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0  bg-opacity-40 backdrop-blur-lg flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 text-white rounded-2xl max-w-lg w-full shadow-xl relative border border-amber-400/30 animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 bg-amber-300 hover:bg-gray-700 rounded-full p-2 text-white -rotate-45"
            >
              ✖
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-auto p-2 object-cover rounded-2xl"
            />
            <div className=" p-4">
              <h3 className="text-2xl pb-2 font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-amber-400">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
