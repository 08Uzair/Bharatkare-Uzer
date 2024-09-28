import React from "react";
import icon1 from "../../assets/heart.png";
import icon2 from "../../assets/med.png";
import icon3 from "../../assets/bone.png";
import icon4 from "../../assets/virus.png";
import icon5 from "../../assets/chem.png";
import icon6 from "../../assets/brain.png";
import icon7 from "../../assets/hand.png";
import { NavLink } from "react-router-dom";

const Card4 = ({ selectedCategory }) => {
  const data = [
    {
      fname: "PROCTOLOGY",
      sname: "Proctology",
      category: "Proctology",
      content: "The medical professional doctors available in the clinic",
      icon: icon1,
    },
    {
      fname: "UROLOGY",
      sname: "Urology",
      category: "Urology",
      content: "The medical professional doctors available in the clinic",
      icon: icon2,
    },
    {
      fname: "AESTHETIC",
      sname: "Aesthetic",
      category: "Aesthetic",
      content: "The medical professional doctors available in the clinic",
      icon: icon3,
    },
    {
      fname: "LAPAROSCOPIC",
      sname: "Laparoscopic",
      category: "Laparoscopic",
      content: "The medical professional doctors available in the clinic",
      icon: icon4,
    },
    {
      fname: "VASCULAR",
      sname: "Vascular",
      category: "Vascular",
      content: "The medical professional doctors available in the clinic",
      icon: icon5,
    },
    {
      fname: "GYNECOLOGY",
      sname: "Gynecology",
      category: "Gynecology",
      content: "The medical professional doctors available in the clinic",
      icon: icon6,
    },
    {
      fname: "ENT",
      sname: "ENT",
      category: "ENT",
      content: "The medical professional doctors available in the clinic",
      icon: icon7,
    },
  ];

  // Filter data based on the selected category
  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center flex-col w-[100%]">
        {filteredData.map((item, index) => (
            <div
              key={index}
              className="w-full h-[402.4px] mb-[2rem] bg-[#adc3e8] cardClip1 hover:bg-[#fff] cursor-pointer p-[3rem]"
            >
          <NavLink to="/single">
              <h2 className="text-[#031b4e] text-[12px] font-semibold">
                {" "}
                <span className="text-[3rem] font-medium">.</span> {item.fname}
              </h2>
              <h2 className="text-[#031b4e] text-[2rem]">{item.sname}</h2>
              <p className="text-[#6e778c] text-[15px] mt-[1.5rem]">
                {item.content}
              </p>
              <img src={item.icon} alt={item.sname} />
          </NavLink>
            </div>
        ))}
      </div>
    </>
  );
};

export default Card4;
