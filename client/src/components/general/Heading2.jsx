import React from "react";
import { motion } from "framer-motion";

const Heading2 = ({ text, txtSize }) => {
  // Split the text into individual letters
  const letters = Array.from(text);

  // Container variant to control stagger effect
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  // Child variant for individual letter animation
  const child = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: [0, -10, 0],  // Jump effect
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex items-center justify-start mt-[2rem]">
      <span
        style={{ fontSize: `${txtSize}` }}
        className="text-[#031b4e] font-semibold "
      >
        {/* Container motion.div for the stagger effect */}
        <motion.div
          className="head2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Map over letters and wrap each in a motion.span */}
          {letters.map((letter, index) => (
            <motion.span key={index} variants={child} className="inline-block">
              {letter === " " ? "\u00A0" : letter}  {/* Handle spaces */}
            </motion.span>
          ))}
        </motion.div>
      </span>
    </div>
  );
};

export default Heading2;
