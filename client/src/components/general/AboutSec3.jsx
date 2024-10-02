import React, { useState, useEffect, useRef } from "react";
import bg from "../../assets/bg3.webp";
import Button3 from "./Button3";
import Heading1 from "./Heading1";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const AboutSec3 = () => {
  const [containerWidth, setContainerWidth] = useState("80%"); // Initial width
  const [isInView, setIsInView] = useState(false); // Track if component is in view
  const sectionRef = useRef(null); // Reference to Section3 component

  useEffect(() => {
    const handleScroll = () => {
      if (isInView) {
        // Get the current scroll position
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight; // Get the viewport height

        // Calculate width based on scroll percentage (from 80% to 100%)
        const scrollPercentage = Math.min(scrollTop / viewportHeight, 1);
        const newWidth = 80 + scrollPercentage * 20; // 80% to 100%
        setContainerWidth(`${newWidth}%`);
      }
    };

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting); // Set isInView based on visibility
      });
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(observerCallback, {
      root: null, // Use viewport as the root
      threshold: 0.1, // Trigger when 10% of the component is visible
    });

    // Observe the Section3 component
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView]); // Depend on isInView state

  return (
    <div
      ref={sectionRef}
      className="mainScreen grid absolute top-[0px] rounded-tl-[30px] bg-[#3266c1] rounded-tr-[30px] transition-all duration-500  mx-auto mb-[8rem]"
      style={{ width: containerWidth }} // Set the width dynamically
    >
      <div></div>
      <div className="flex items-center justify-center  flex-col w-full p-[3rem]">
        <Button3 text="OUR SERVICES" />
        <Heading1 text=" We Provide Various Directions" />
        <div>
          <Tab2 />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutSec3;
