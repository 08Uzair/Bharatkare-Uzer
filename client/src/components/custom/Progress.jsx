import React, { useState, useEffect } from "react";

const Progress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / windowHeight) * 100;

    setScrollProgress(scrolled);
    setIsVisible(scrollTop > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Top progress bar (optional) */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-width duration-200"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {isVisible && (
        <button
          className="fixed bottom-4 right-4 flex justify-center items-center p-3 bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-100 transition duration-200"
          onClick={scrollToTop}
        >
          {/* SVG for the circular progress */}
          <svg className="w-12 h-12" viewBox="0 0 40 40">
            <circle
              className="text-gray-300"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="18"
              cx="20"
              cy="20"
            />
            <circle
              className="text-blue-500"
              strokeWidth="4"
              strokeDasharray="113.097" // Circumference of the circle
              strokeDashoffset={113.097 - (113.097 * scrollProgress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="18"
              cx="20"
              cy="20"
            />
          </svg>
          <span className="absolute text-[2.5rem] material-symbols-outlined">stat_1</span>
        </button>
      )}
    </>
  );
};

export default Progress;
