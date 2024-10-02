import React, { useEffect, useRef, useState } from "react";

const Slider = ({ width }) => {
  const data = [
    "Urology",
    "Proctology",
    "Laparoscopy",
    "Aesthetic",
    "Urology",
    "Proctology",
    "Laparoscopy",
    "Aesthetic",
    "Urology",
    "Proctology",
    "Laparoscopy",
    "Aesthetic",
    "Urology",
    "Proctology",
    "Laparoscopy",
    "Aesthetic",
  ];
  const scrollRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const totalWidth = scrollRef.current.scrollWidth;
      setScrollWidth(totalWidth);
    }
  }, [data]);
  return (
    <>
      <div
        style={{ width }}
        className="flex items-center justify-center overflow-hidden mt-10 mb-[5rem]"
      >
        <div
          ref={scrollRef}
          className="flex animate-scroll"
          style={{ width: `${scrollWidth}px` }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center mr-10 w-auto"
            >
              <div className="text3D flex items-center">
                <p className="text-[5rem] text-[#031b4e] font-black">{item}</p>
              </div>
              <p className="text-[5rem] text-[#031b4e] font-black ml-7 mr-7">
                +
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
