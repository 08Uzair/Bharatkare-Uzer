import React, { useEffect, useRef, useState } from "react";
import bg from "../../assets/bg2.webp";

const Section2 = () => {
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
    <div className="flex items-center justify-center flex-col">
      <div className="mt-[4rem] flex items-center justify-center w-[100%]">
        <img className="w-[75%]" src={bg} alt="background" />
      </div>
      <div className="w-[80%] flex items-center justify-center overflow-hidden mt-10 mb-[5rem]">
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
                <p className="text-[5rem] text-[#031b4e] font-black ml-7 mr-7">
                  +
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
