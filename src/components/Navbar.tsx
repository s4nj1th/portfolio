"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { CgFileDocument } from "react-icons/cg";

const sections = ["home", "projects", "skills"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0.1,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111c] backdrop-blur-md border-b border-[#333] shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-sm uppercase tracking-wide text-white">
        
        <div className="font-semibold text-white">Sanjith</div>

        <div className="hidden md:flex gap-4 justify-center flex-1">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={clsx(
                "transition-colors p-2 rounded-md",
                active === section
                  ? "text-black bg-white font-bold"
                  : "text-[#fff6] hover:text-white"
              )}
            >
              {section}
            </a>
          ))}
        </div>

        <div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-xl font-semibold"
          >
            <CgFileDocument size={20} />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
