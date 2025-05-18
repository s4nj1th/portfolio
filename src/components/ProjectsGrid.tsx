"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import projects from "@/data/projects";

const ProjectsGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const visibleProjects = projects.slice(0, 3);
  const hiddenProjects = projects.slice(3);

  useEffect(() => {
    if (containerRef.current) {
      setMaxHeight(showAll ? `${containerRef.current.scrollHeight}px` : "0px");
    }
  }, [showAll]);

  return (
    <div className="bg-[#1118] border-[#222] border rounded-[12px] shadow-lg p-10 flex flex-col items-center gap-6">
      <h1 className="text-5xl font-black text-center">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {visibleProjects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl overflow-hidden bg-[#111] hover:bg-[#222] border border-[#333] hover:border-white/20 shadow-md hover:shadow-lg transition-all w-full max-w-sm"
          >
            <div className="z-0 relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="z-10 p-4 bg-[#111] group-hover:bg-[#222]">
              <h3 className="text-lg font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-[#aaa]">{project.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Hidden projects wrapper with slide animation */}
      <div
        ref={containerRef}
        className="transition-[max-height] duration-500 ease-in-out overflow-hidden w-full"
        style={{ maxHeight }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-6">
          {hiddenProjects.map((project, i) => (
            <a
              key={i + 3}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden bg-[#111] hover:bg-[#222] border border-[#333] hover:border-white/20 shadow hover:shadow-lg transition-all w-full max-w-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-[#aaa]">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="text-black font-bold text-sm mt-4 px-4 py-2 bg-white hover:bg-[#eee] rounded-md shadow-md cursor-pointer"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ProjectsGrid;
