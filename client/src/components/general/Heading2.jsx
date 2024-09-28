import React from "react";

const Heading2 = ({text}) => {
  return (
    <>
      <div className="flex items-center  justify-start mt-[2rem] ">
        <span className="text-[36px] text-[#031b4e] font-semibold">
         {text}
        </span>
      </div>
    </>
  );
};

export default Heading2;
