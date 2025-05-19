"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const UfoFlyer = () => {
  const [showUfo, setShowUfo] = useState(false);
  const [isMovingRight, setIsMovingRight] = useState(true);
  const [ufoY, setUfoY] = useState(0);

  useEffect(() => {
    const flyUfo = () => {
      // Flip direction
      setIsMovingRight((prev) => !prev);

      // Random vertical position (10vh to 70vh)
      setUfoY(Math.floor(Math.random() * 60) + 10);

      setShowUfo(true);

      setTimeout(() => {
        setShowUfo(false);
      }, 8000);
    };

    const interval = setInterval(flyUfo, 15000);
    flyUfo();

    return () => clearInterval(interval);
  }, []);

  if (!showUfo) return null;

  return (
    <motion.div
      className="fixed text-3xl select-none"
      initial={{
        x: isMovingRight ? "-100vw" : "100vw",
        y: `${ufoY}vh`,
      }}
      animate={{
        x: isMovingRight ? "100vw" : "-100vw",
      }}
      transition={{
        duration: 8,
        ease: "linear",
      }}
      style={{ pointerEvents: "none", zIndex: -1 }}
    >
      🛸
    </motion.div>
  );
};

export default UfoFlyer;
