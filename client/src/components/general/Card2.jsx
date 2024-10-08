import React from "react";
import Button1 from "./Button1";

const Card2 = () => {
  return (
    <>
      <div>
        <div className="relative w-[22rem] bg-[#031b4e] text-white p-6 cardClip m-5">
          <h2 className="text-[26px] font-semibold mb-4">Our Location</h2>
          <hr className="border-t border-white/30 mb-4" />
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="leading-[2rem] mt-[3rem] mb-[2rem]">
                Search our locations to find the one nearest you Get the answers
                and assurance you deserve with accuracy you can trust.
              </span>
            </div>
          </div>
          <div className=" mt-4 mb-5 text-sm leading-9">
            <Button1  text={"GET DIRECTION"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
