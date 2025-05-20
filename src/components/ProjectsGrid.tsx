"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import projects from "@/data/projects";

const getInitialVisibleCount = () => {
  if (typeof window === "undefined") return 3;

  if (window.innerWidth >= 1024) return 9; // lg: 3 columns, 3 rows
  if (window.innerWidth >= 640) return 6;  // sm: 2 columns, 3 rows
  return 3;                                // 1 column
};

const ProjectsGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(getInitialVisibleCount);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    const handleResize = () => {
      const count = getInitialVisibleCount();
      setVisibleCount(count);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects = projects.slice(0, visibleCount);
  const hiddenProjects = projects.slice(visibleCount);

  useEffect(() => {
    if (containerRef.current) {
      setMaxHeight(showAll ? `${containerRef.current.scrollHeight}px` : "0px");
    }
  }, [showAll, visibleCount]);

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
              key={i + visibleCount}
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

      {projects.length > visibleCount && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-black font-bold text-sm mt-4 px-4 py-2 bg-white hover:bg-[#eee] rounded-md shadow-md cursor-pointer"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ProjectsGrid;
