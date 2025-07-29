import React from "react";
import Web from "../../../public/video/web-search.mp4"
import Ecommers from "../../../public/video/e-commers-shopping.mp4"
import Contact from "../../../public/video/contact-working.mp4"
import Blog from "../../../public/video/socail-media.mp4"

export default function ProjectSection() {
  return (
    <section className="min-h-screen  bg-gray-100 text-black  py-12 md:py-20 px-4 flex flex-col items-center" id="work">
      <div className="w-full mb-3 max-w-7xl">
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl text-gray-900 font-extrabold text-center">
          My Projects
        </h2>
        <p className="text-gray-600 font-medium mb-8 sm:mb-12 text-center">
          Some of the work I've done recently
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Project 1 */}
          <ProjectCard
            videoSrc={Web}
            title="Personal Portfolio Website"
            description="Built with React and Tailwind CSS."
            liveDemoLink="#projects" 
            codeLink="https://github.com/tejasd4455"
          />

          {/* Project 2 */}
          <ProjectCard
            videoSrc= {Ecommers}
            title="E-Commerce Website"
            description="Built with React and Tailwind CSS."
            liveDemoLink="https://tejasd4455.github.io/UpTreand.github.io/"
            codeLink="https://github.com/tejasd4455"
          />

          {/* Project 3 */}
          <ProjectCard
            videoSrc={Contact}
            title="Contact Manager App"
            description="Built with React and Tailwind CSS."
            liveDemoLink="#projects"
            codeLink="https://github.com/tejasd4455"
          />

          {/* Project 4 */}
          <ProjectCard
            videoSrc={Blog}
            title="Developer Blog Website"
            description="Built with React and Tailwind CSS."
            liveDemoLink="#projects"
            codeLink="https://github.com/tejasd4455"
          />
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ videoSrc, title, description, liveDemoLink, codeLink }) => {
  return (
    <div className="ml-5 mr-5 bg-white rounded-3xl overflow-hidden border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col mx-2 sm:mx-0">
      <div className="relative aspect-video">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40" />
      </div>
      <div className="flex-grow p-5 sm:p-6 text-center bg-stone-100">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm sm:text-[0.95rem] mb-4">{description}</p>
        <div className="flex justify-center gap-3 sm:gap-4">
          <a
            href={liveDemoLink}
             target="_blank"
        rel="noopener noreferrer"

            className="bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full font-medium transition-colors duration-200"
          >
            Live Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-black text-white text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full font-medium transition-colors duration-200"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};
