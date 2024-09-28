import React from "react";
import arr from "../../assets/arr.png";
const Button = ({ text }) => {
  return (
    <>
      <div className=" btnArr button bg-[#031b4e] text-white text-[13px] p-4 h-[6.5vh] flex item-center  cursor-pointer justify-center  rounded-full hover:bg-[#5aa7bd] focus:outline-none">
        {text}
        <div className="ml-2">
          <img className="" src={arr} />
          {/* <span class="material-symbols-outlined">north_east</span> */}
        </div>
      </div>
    </>
  );
};

export default Button;
