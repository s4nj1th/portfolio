"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { CgFileDocument } from "react-icons/cg";

const sections = ["home", "projects", "skills"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-sm tracking-wide text-white">
        <div className="font-semibold flex"><img src="/assets/favicon.ico" width={20} className="ml-2 mr-4"></img>Sanjith</div>

        <div className="hidden md:flex gap-4 uppercase">
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

        <div className="md:hidden flex-1 flex justify-center w-full max-w-xs relative">
          <div className="">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex w-full justify-center items-center px-3 py-2 rounded-md border border-[#444] bg-[#222] text-white uppercase"
            >
              {active}
            </button>
          </div>

          {dropdownOpen && (
            <div className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 text-center bg-[#111] border border-[#333] rounded-md shadow-md z-10">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setDropdownOpen(false)}
                  className={clsx(
                    "block px-4 py-2 text-sm uppercase tracking-wide transition-colors",
                    active === section
                      ? "bg-white text-black font-bold"
                      : "text-[#fff6] hover:text-white"
                  )}
                >
                  {section}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="ml-4">
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
