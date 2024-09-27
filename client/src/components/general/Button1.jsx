import React from "react";

const Button1 = ({ text }) => {
  return (
    <>
      <div className="w-[65%] bg-[#031b4e] text-white text-[13px] p-4 h-[7.5vh] flex item-center  cursor-pointer justify-center  rounded-full hover:bg-[#3368c6] ring-1 ring-white">
        {text}
        <div className="ml-2">
          {" "}
          <span class="material-symbols-outlined">north_east</span>
        </div>
      </div>
    </>
  );
};

export default Button1;
