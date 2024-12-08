import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";
import toast from "react-hot-toast";

const Projects = () => {
  return (
    <div
      id="projects"
      className="text-white flex flex-col items-center justify-center px-4 md:px-20 py-20 min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-2 relative">Projects</h2>
      <div className="w-28 h-1 bg-[#E04300] mb-10 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-[380px] h-[201px]">
              <Image
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#E04300] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-2">
                <span className="font-bold">Description:</span>{" "}
                {project.description}
              </p>
              <p className="text-gray-300 mb-4">
                <span className="font-bold">Stack:</span> {project.stack}
              </p>
              <div className="flex gap-4">
                {project.github ? (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-[#E04300] px-4 py-2 rounded-md hover:bg-[#c03800] transition-colors"
                  >
                    GitHub
                  </Link>
                ) : (
                  <button
                    onClick={() => toast.error("No repository available")}
                    className="text-white bg-[#E04300] px-4 py-2 rounded-md hover:bg-[#c03800] transition-colors"
                  >
                    GitHub
                  </button>
                )}

                {project.github ? (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white border border-[#E04300] px-4 py-2 rounded-md hover:bg-[#E04300] transition-colors"
                  >
                    Live Demo
                  </Link>
                ) : (
                  <button
                    onClick={() => toast.error("No live demo available")}
                    className="text-white border border-[#E04300] px-4 py-2 rounded-md hover:bg-[#E04300] transition-colors"
                  >
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
