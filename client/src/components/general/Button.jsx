import React from "react";

const Button = ({text}) => {
  return (
    <>
      <div className="button bg-[#031b4e] text-white text-[13px] p-4 h-[6.5vh] flex item-center  cursor-pointer justify-center  rounded-full hover:bg-[#5aa7bd] focus:outline-none">
       {text}
        <div className="ml-2">
          {" "}
          <span class="material-symbols-outlined">north_east</span>
        </div>
      </div>
    </>
  );
};

export default Button;
