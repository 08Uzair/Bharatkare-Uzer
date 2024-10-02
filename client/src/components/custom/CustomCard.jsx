import React from "react";
import Arrow from "../general/Arrow";
import arr from "../../assets/b-arrow.png";
const CustomCard = ({ txt1, txt2, txt3, txt4 }) => {
  return (
    <>
      <div className="arrbutton cardClip2 w-[23%]  h-[35vh] bg-[#fff] rounded-[25px] p-[2rem] m-[2rem] ">
        <span class="cont-icon material-symbols-outlined">{txt1}</span>
        <div className="txt2">{txt2}</div>
        <div className="txt3">{txt3}</div>
        <div className="text-[#6e778c]">{txt4}</div>
      </div>
      <div className="arrBtn arrbutton ">
        <Arrow clr="#fff" bg={arr} />
      </div>
    </>
  );
};

export default CustomCard;
