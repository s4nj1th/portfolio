"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAME = "Sanjith";
const USERNAME = "s4nj1th";

const SUBTITLES = [
  "I build things that matter.",
  "A CS student crafting real projects.",
  "Writing code with purpose and passion.",
  "Developing solutions that make sense.",
  "Fueled by caffeine and compilers.",
  "Projects, but with purpose.",
  "Sensible by design, functional by default.",
];

const TitleText = () => {
  const [active, setActive] = useState(false);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [showShadow, setShowShadow] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);

    let nextIndex = Math.floor(Math.random() * SUBTITLES.length);
    if (nextIndex === subtitleIndex) {
      nextIndex = (subtitleIndex + 1) % SUBTITLES.length;
    }
    setSubtitleIndex(nextIndex);

    setClickCount((prev) => prev + 1);
    setShowShadow(false); // remove blinking effect on click

    document.title = !active ? USERNAME : NAME;
  };

  useEffect(() => {
    if (clickCount > 0) return;

    const timer = setTimeout(() => {
      setShowShadow(true);
    }, 10000); // start after 30s

    return () => clearTimeout(timer);
  }, [clickCount]);

  const letters = active ? USERNAME.split("") : NAME.split("");
  const subtitle = SUBTITLES[subtitleIndex];

  return (
    <div>
      <div
        onClick={handleClick}
        className={`inline-flex text-white text-6xl font-black leading-none cursor-pointer items-center ${
          showShadow ? "animate-[blink-shadow_5s_infinite]" : ""
        }`}
      >
        <AnimatePresence>
          {active && (
            <motion.span
              key="@"
              className="text-[#fff4] mr-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              @
            </motion.span>
          )}
        </AnimatePresence>

        <span
          className={active ? "font-mono" : ""}
          style={{
            borderBottom: active ? "none" : "4px solid white",
            display: "inline-block",
            paddingBottom: "3px",
          }}
        >
          {letters.map((char, i) => {
            const prevChar = active ? NAME[i] : USERNAME[i];
            const isDifferent = char !== prevChar;

            return (
              <AnimatePresence key={i} mode="wait">
                <motion.span
                  key={char + i + (active ? "on" : "off")}
                  initial={isDifferent ? { y: -20, opacity: 0 } : false}
                  animate={{ y: 0, opacity: 1 }}
                  exit={isDifferent ? { y: 20, opacity: 0 } : false}
                  transition={{ duration: isDifferent ? 0.2 : 0 }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              </AnimatePresence>
            );
          })}
        </span>
      </div>

      <p className="mt-4 text-lg text-white drop-shadow-lg">{subtitle}</p>

      {clickCount > 5 && (
        <p className="mt-2 text-sm text-[#ccca] italic">
          (wow! you really are clicking that thang...)
        </p>
      )}
    </div>
  );
};

export default TitleText;
