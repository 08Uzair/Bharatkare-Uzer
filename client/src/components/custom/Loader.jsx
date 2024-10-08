import React from "react";
import logo from "../../assets/logo1.png";
const Loaader = () => {
  return (
    <>
      <div className=" flex items-center justify-center w-[100%]">
        <img className="loaderAnimate" src={logo} />
      </div>
    </>
  );
};

export default Loaader;
