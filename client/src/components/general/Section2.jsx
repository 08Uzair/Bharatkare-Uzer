import React from "react";
import bg from "../../assets/bg2.webp";
import Slider from "../custom/Slider";

const Section2 = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="mt-[4rem] flex items-center justify-center w-[100%]">
        <img className="w-[75%] secImg" src={bg} alt="background" />
      </div>

      <Slider width="80%" />
    </div>
  );
};

export default Section2;
