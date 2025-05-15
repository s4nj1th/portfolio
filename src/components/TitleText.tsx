"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TITLES = [
  "Creative Developer",
  "Frontend Engineer",
  "UI/UX Enthusiast",
  "Web Animator",
  "React Magician",
];

const SWITCH_INTERVAL = 3000; // 3 seconds

const TitleText = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, SWITCH_INTERVAL);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  return (
    <div className="text-right text-white text-6xl font-[999] h-35 relative overflow-hidden drop-shadow-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={TITLES[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="absolute right-0"
        >
          {TITLES[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TitleText;
