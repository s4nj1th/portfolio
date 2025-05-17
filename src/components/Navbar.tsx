"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const sections = ["home", "projects", "experience", "skills", "contact"];

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
    <nav className="fixed top-0 left-0 w-full bg-[#111c] backdrop-blur-md z-50 shadow border-b border-[#333]">
      <div className="flex justify-center gap-4 py-3 text-sm uppercase tracking-wide text-white">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={clsx(
              "transition-colors p-2 rounded-md",
              active === section ? "text-black hover:text-black font-[999] bg-white" : "hover:text-white text-[#fff6]"
            )}
          >
            {section}
          </a>
        ))}
      </div>
    </nav>
  );
}
