import React from "react";
import Arrow from "./Arrow";
import arr from "../../assets/w-arrow.png";
const Button1 = ({ text }) => {
  return (
    <>
      <div className="arrbutton sec2Btn relative w-[65%] bg-[#031b4e]  text-white text-[13px] p-4 h-[8vh] flex items-center  cursor-pointer justify-center  rounded-full hover:bg-[#3368c6] ring-1 ring-white">
        {text}
        <Arrow clr="transparent" bg={arr} />
      </div>
    </>
  );
};

export default Button1;
