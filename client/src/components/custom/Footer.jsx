import React from "react";
import Progress from "./Progress";

const Footer = () => {
  return (
    <>
      <div className="text-[#fff] p-5 flex items-center justify-evenly w-[100%] h-[15vh] bg-[#031b4e]">
        <Progress />
        <div className="">
          <p>OUR MISSION</p>
        </div>
        <div>
          <span className="flex items-center justify-center">
            <div className="flex items-center justify-center mr-6">
              <span class="cir1 text-[#000000] material-symbols-outlined mr-3">
                phone_in_talk
              </span>
              <h1>+91 8377882115</h1>
            </div>
            <div className="flex items-center justify-center">
              <span class="cir1 text-[#000000] mr-3 material-symbols-outlined">
                mail
              </span>
              <h1>support @bharatkare.com</h1>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
