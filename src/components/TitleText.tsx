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
  const [showUsername, setShowUsername] = useState(false);
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [attentionDot, setAttentionDot] = useState(false);

  const handleClick = () => {
    setShowUsername((prev) => !prev);

    let next = Math.floor(Math.random() * SUBTITLES.length);
    if (next === currentSubtitle) {
      next = (currentSubtitle + 1) % SUBTITLES.length;
    }
    setCurrentSubtitle(next);

    setClicks((prev) => prev + 1);
    setAttentionDot(false);

    document.title = !showUsername ? USERNAME : NAME;
  };

  useEffect(() => {
    if (clicks > 0) return;

    const timer = setTimeout(() => {
      setAttentionDot(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [clicks]);

  const displayedLetters = showUsername ? USERNAME.split("") : NAME.split("");
  const subtitleText = SUBTITLES[currentSubtitle];

  return (
    <div>
      <div
        onClick={handleClick}
        className="inline-flex text-white text-6xl font-black text-white leading-none cursor-pointer items-center"
      >
        <AnimatePresence>
          {showUsername && (
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
          className={`relative inline-block ${showUsername ? "font-mono" : ""}`}
          style={{
            borderBottom: showUsername ? "none" : "4px solid white",
            paddingBottom: "3px",
            marginBottom: showUsername ? "4px" : "none",
          }}
        >
          {attentionDot && (
            <>
              <span className="absolute top-0 -right-2 h-2.5 w-2.5 rounded-full bg-red-500 opacity-75 animate-ping pointer-events-none" />
              <span className="absolute top-0 -right-2 h-2.5 w-2.5 rounded-full bg-red-500 pointer-events-none" />
            </>
          )}

          {displayedLetters.map((char, i) => {
            const previousChar = showUsername ? NAME[i] : USERNAME[i];
            const isNew = char !== previousChar;

            return (
              <AnimatePresence key={i} mode="wait">
                <motion.span
                  key={char + i + (showUsername ? "on" : "off")}
                  initial={isNew ? { y: -20, opacity: 0 } : false}
                  animate={{ y: 0, opacity: 1 }}
                  exit={isNew ? { y: 20, opacity: 0 } : undefined}
                  transition={{ duration: isNew ? 0.2 : 0 }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              </AnimatePresence>
            );
          })}
        </span>
      </div>

      <p className="mt-4 text-lg text-white drop-shadow-lg">{subtitleText}</p>

      {clicks > 5 && (
        <p className="mt-2 text-sm text-[#ccca] italic">
          (wow! you really are clicking that thang...)
        </p>
      )}
    </div>
  );
};

export default TitleText;
