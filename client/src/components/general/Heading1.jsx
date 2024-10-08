import React from "react";
import { motion } from "framer-motion";

const Heading1 = ({ text }) => {
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
      y: [0, -15, 0], // Jump effect
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <h1 className="txt1 text-[48px] font-medium text-[#fff] leading-[60px] mt-[20px]">
      {/* Container motion.div for stagger effect */}
      <motion.div
        className="inline-block"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Map over letters and wrap each in a motion.span */}
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child} className="inline-block">
            {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
          </motion.span>
        ))}
      </motion.div>
    </h1>
  );
};

export default Heading1;
