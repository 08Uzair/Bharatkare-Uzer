import React from "react";

const Heading2 = ({text,txtSize}) => {
  return (
    <>
      <div className="flex items-center  justify-start mt-[2rem] ">
        <span style={{fontSize:`${txtSize}`}} className=" text-[#031b4e] font-semibold">
         {text}
        </span>
      </div>
    </>
  );
};

export default Heading2;
