"use client";

import { useState } from "react";
import skillCats from "@/data/skills";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";

type Skill = {
  name: string;
  bgColor: string;
  icon: string;
};

const isLight = (hex: string): boolean => {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 186;
};

const getAllSkills = (): Skill[] => {
  const all: Skill[] = [];
  Object.values(skillCats).forEach((skills) => {
    all.push(...skills);
  });
  return Array.from(new Set(all.map((s) => s.name))).map(
    (name) => all.find((s) => s.name === name)!
  );
};

const getCategorySkills = (category: string): Set<string> => {
  return new Set(
    skillCats[category as keyof typeof skillCats].map((s) => s.name)
  );
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categoryNames = Object.keys(skillCats);
  const allSkills = getAllSkills();
  const highlightedSkills = activeCategory
    ? getCategorySkills(activeCategory)
    : null;

  const handleCategoryClick = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="bg-[#1118] text-white rounded-[12px] p-10 border border-[#222] shadow-lg">
      <h2 className="text-5xl font-bold mb-6 text-center">Skills</h2>

      {/* Category nav */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categoryNames.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-3 py-1 rounded-[6px] font-semibold border transition-all duration-300 cursor-pointer
              ${
                activeCategory === category
                  ? "bg-white hover:bg-[#eee] text-black border-white"
                  : "bg-[#111] hover:bg-[#222] border-[#444] text-white hover:border-white/50"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills badges */}
      <div className="flex flex-wrap justify-center gap-3 w-[80%] min-w-[100px] m-auto">
        {allSkills.map((skill) => {
          const Icon =
            SiIcons[skill.icon as keyof typeof SiIcons] ||
            VscIcons[skill.icon as keyof typeof VscIcons] ||
            FaIcons[skill.icon as keyof typeof FaIcons];
          const isDimmed =
            activeCategory && !highlightedSkills?.has(skill.name);

          return (
            <span
              key={skill.name}
              className={`text-white text-sm font-semibold px-3 py-1 rounded-sm shadow flex items-center gap-2 transition-opacity duration-300 ${
                isDimmed ? "opacity-40 hover:opacity-70" : "opacity-100"
              }`}
              style={{
                backgroundColor: skill.bgColor,
                color: isLight(skill.bgColor) ? "#000" : "#fff",
              }}
            >
              {Icon && <Icon size={16} />}
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
