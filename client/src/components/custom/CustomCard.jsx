import React from "react";
import Arrow from "../general/Arrow";
import arr from "../../assets/b-arrow.png";
const CustomCard = ({ txt1, txt2, txt3, txt4 }) => {
  return (
    <>
      <div className="arrbutton cardClip2 w-[100%]  h-[30vh] bg-[#fff] rounded-[25px] p-[1.5rem] m-[1rem] ">
        <div className="flex items-center justify-between">
          <span class="cont-icon material-symbols-outlined">{txt1}</span>
          <span>
            <Arrow clr="#f8f8f8" bg={arr} />
          </span>
        </div>
        <div className="txt2">{txt2}</div>
        <div className="txt3">{txt3}</div>
        <div className="text-[#6e778c]">{txt4}</div>
      </div>
    </>
  );
};

export default CustomCard;
