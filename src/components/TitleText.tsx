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
  const [hasMounted, setHasMounted] = useState(false);
  const [showUsername, setShowUsername] = useState(false);
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    setHasMounted(true);
    setRandomSubtitle();

    const toUsernameTimeout = setTimeout(() => {
      setShowUsername(true);
      document.title = USERNAME;
    }, 2000);

    const toNameTimeout = setTimeout(() => {
      setShowUsername(false);
      document.title = NAME;
    }, 4000);

    return () => {
      clearTimeout(toUsernameTimeout);
      clearTimeout(toNameTimeout);
    };
  }, []);

  const setRandomSubtitle = () => {
    const next = Math.floor(Math.random() * SUBTITLES.length);
    setCurrentSubtitle(next);
  };

  const handleClick = () => {
    const newState = !showUsername;
    setShowUsername(newState);
    document.title = newState ? USERNAME : NAME;
    setRandomSubtitle();
  };

  if (!hasMounted) {
    return (
      <h1 className="text-white text-6xl font-black leading-none">
        {NAME}
      </h1>
    );
  }

  const displayedLetters = (showUsername ? USERNAME : NAME).split("");
  const previousText = showUsername ? NAME : USERNAME;
  const subtitleText = SUBTITLES[currentSubtitle];

  return (
    <div>
      <div
        onClick={handleClick}
        className="inline-flex text-white text-6xl font-black leading-none cursor-pointer items-center"
      >
        <AnimatePresence>
          {showUsername && (
            <motion.span
              key="@"
              className="text-[#fff] mr-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.5, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4 }}
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
          {displayedLetters.map((char, i) => {
            const previousChar = previousText[i];
            const isNew = char !== previousChar;

            const direction = showUsername ? -20 : 20; // up for username, down for name

            return (
              <AnimatePresence key={i} mode="wait">
                <motion.span
                  key={char + i + (showUsername ? "on" : "off")}
                  initial={isNew ? { y: direction, opacity: 0 } : false}
                  animate={{ y: 0, opacity: 1 }}
                  exit={isNew ? { y: -direction, opacity: 0 } : undefined}
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
    </div>
  );
};

export default TitleText;
