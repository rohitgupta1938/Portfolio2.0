import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Currency Converter",
    description:
      "A web application that allows users to convert currencies in real-time with support for multiple currencies and live exchange rates.",
    image: "/src/assets/currencyC.webp",
  },
  {
    id: 2,
    title: "Password Generator",
    description:
      "Implemented a secure password generator with customizable length, character types, and copy-to-clipboard functionality.",
    image: "/src/assets/passwordGen.webp",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A web application that provides real-time weather updates, forecasts, and location-based temperature with a clean and interactive UI.",
    image: "/src/assets/WeatherC.webp",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase skills, projects, and achievements with stylish UI/UX.",
    image: "portfolio.webp",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gray-950 text-white py-16 px-6 flex flex-col items-center overflow-hidden"
    >
      {/* 🔹 Floating Blobs Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-blob"></div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">
        My <span className="text-amber-400">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl relative z-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-900 shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300 border border-amber-400/20"
          >
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
              className="absolute top-3 right-3 bg-amber-300 hover:bg-gray-700 rounded-full p-2 text-white"
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
