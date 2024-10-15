import React from "react";
import Heading2 from "../general/Heading2";
import dr1 from "../../assets/dr1.png";
import dr2 from "../../assets/dr2.png";
import dr3 from "../../assets/dr3.png";
const Doctors = () => {
  const data = [
    {
      drImage: dr1,
      txt1: "Dr. Vikram Vasuniya",
      txt2: "General Surgeon",
    },
    {
      drImage: dr2,
      txt1: "Dr. Ankit Patel",
      txt2: "General Surgeon",
    },
    {
      drImage: dr3,
      txt1: "Dr. Ashish Sachdeva",
      txt2: "General Surgeon",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center text-center flex-col  ">
        <Heading2 txtSize="2rem" text="Our Specialists" />
        <div className="flex items-center justify-center text-center flex-wrap">
          {data.map((item, index) => {
            return (
              <>
                <div className="flex items-center justify-center text-center flex-col m-[4rem]">
                  <img className="mb-[1.5rem]" src={item.drImage} />
                  <h1 className="text-[20px] text-[#031b4e] font-semibold mb-[1rem]">
                    {item.txt1}
                  </h1>
                  <h2 className="font-normal text-[16px] text-[#031b4e] ">
                    {item.txt2}
                  </h2>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Doctors;
