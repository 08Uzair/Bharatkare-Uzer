import React from "react";
import Button3 from "./Button3";
import Heading2 from "./Heading2";
import Button from "./Button";
import icon1 from "../../assets/heart.png";
import icon2 from "../../assets/med.png";
import icon3 from "../../assets/bone.png";
import icon4 from "../../assets/virus.png";
import icon5 from "../../assets/chem.png";
import bg1 from "../../assets/bg8.jpg";
import bg2 from "../../assets/bg9.webp";
import bg3 from "../../assets/bg10.webp";
import bg4 from "../../assets/bg11.jpg";
import bg5 from "../../assets/bg1.jpg";
import Arrow from "./Arrow";
import bg from "../../assets/b-arrow.png";
const AboutSec4 = () => {
  const data = [
    {
      fname: "PROCTOLOGY",
      sname: "Proctology",
      category: "Proctology",
      content: "The medical professional doctors available in the clinic",
      icon: icon1,
      bg: bg1,
    },
    {
      fname: "UROLOGY",
      sname: "Urology",
      category: "Urology",
      content: "The medical professional doctors available in the clinic",
      icon: icon2,
      bg: bg2,
    },
    {
      fname: "AESTHETIC",
      sname: "Aesthetic",
      category: "Aesthetic",
      content: "The medical professional doctors available in the clinic",
      icon: icon3,
      bg: bg3,
    },
    {
      fname: "LAPAROSCOPIC",
      sname: "Laparoscopic",
      category: "Laparoscopic",
      content: "The medical professional doctors available in the clinic",
      icon: icon4,
      bg: bg4,
    },
    {
      fname: "VASCULAR",
      sname: "Vascular",
      category: "Vascular",
      content: "The medical professional doctors available in the clinic",
      icon: icon5,
      bg: bg5,
    },
  ];
  return (
    <div className="mb-[10rem]">
      {/* Main Container */}
      <div className="aboutSec4 container mx-auto mt-12 flex  justify-between">
        {/* Left Box */}
        <div className="para1 w-[50%] p-[10rem] h-[80vh] sticky top-9">
          <div className="flex flex-col items-start justify-center h-full">
            <Button3 text="MOTIVATION" />
            <Heading2
              txtSize="3.5rem"
              text="Department of a medical health care"
            />
            <div className="mt-[3rem] leading-8 text-[#767f93]">
              The healthcare arena there was a felt need of developing new as
              well as upgrading the existing functioning and processes,
              consequently develop an institution supported with necessary
            </div>
            <div className="mt-[2rem]">
              <Button text="READ MORE" />
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="aboutSec4-box ">
          {/* Replace these divs with images and text as needed */}
          {data?.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="aboutService-img arrbutton para2 cursor-pointer cardClip1 bg-white rounded-[30px] p-6 shadow-lg flex relative overflow-hidden mb-[1.5rem] "
                >
                  {/* Left Side Image */}
                  <div className="">
                    <img
                      src={item.bg}
                      alt="Medical Robot"
                      className="w-[100%] h-[40vh]  rounded-[25px]"
                    />
                  </div>

                  {/* Right Side Content */}
                  <div className=" p-3 flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex flex-col items-start ">
                      <div className="flex items-center">
                        <div className="flex items-start flex-col ">
                          <div>
                            <h2 className="text-[15px] text-[#3367c4]">
                              {item.sname}
                            </h2>
                          </div>
                          <div className="relative top-[-1rem]">
                            <Heading2 txtSize="25px" text={item.fname} />
                          </div>
                        </div>
                        {/* <div className="w-[100%] m-[1rem]">
                          <img className="iconImg" src={item.icon} />
                        </div> */}
                      </div>
                    </div>

                    {/* Description */}
                    <p className=" text-gray-500 mt-4">
                      The medical professional doctors...
                    </p>

                    {/* Rounded Arrow Button */}
                    <Arrow clr="#fff" bg={bg} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutSec4;
