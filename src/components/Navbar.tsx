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
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between text-sm tracking-wide text-white">
        
        {/* Logo */}
        <div className="font-semibold flex items-center text-lg">
          <img src="/assets/favicon.ico" width={20} className="mr-2" alt="favicon" />
          Sanjith
        </div>

        {/* Desktop navigation */}
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

        {/* Mobile dropdown */}
        <div className="md:hidden flex-1 flex justify-center w-full max-w-xs relative">
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex w-full justify-center items-center px-3 py-2 rounded-md border border-[#444] bg-[#222] text-white uppercase"
            >
              {active}
            </button>
          </div>

          <div
            className={clsx(
              "absolute -x-1/2 top-full mt-2 w-40 origin-top transform transition-all duration-200 ease-out z-10",
              dropdownOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            )}
            style={{ transformOrigin: "top center" }}
          >
            <div className="bg-[#111] border border-[#333] rounded-md shadow-md text-center">
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
          </div>
        </div>

        {/* Resume Button */}
        <div className="ml-4">
          <a
            href="/SanjithM_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-xl font-semibold"
          >
            Resume
            <CgFileDocument size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
