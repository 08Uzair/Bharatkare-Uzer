import React from "react";
import bg1 from "../../assets/bg9.webp";
import bg2 from "../../assets/bg10.webp";
import Button3 from "./Button3";
import Heading2 from "./Heading2";
import Button from "./Button";
import Slider from "../custom/Slider";
const AboutSec2 = () => {
  return (
    <>
      <div className="grid1  mt-[2rem]">
        <div></div>
        <div className="flex  justify-evenly">
          <div className="w-[100%]">
            <img className="rounded-[25px]" src={bg1} />
            <img
              className="relative bottom-[18rem] left-[14rem] rounded-[25px]"
              src={bg2}
            />
          </div>
          <div className="pl-[18rem]">
            <Button3 text="ABOUT US" />

            <Heading2
              txtSize="50px"
              text="Start your healthy life today with us"
            />
            <div className="mt-[3rem] leading-8 text-[#767f93]">
              Health professionals use a wide range of instruments to diagnose
              and treat a disease or other condition, to prevent a worsening of
              symptoms, to replace a damaged part — such as a hip or a knee —
              and so on.
            </div>
            <div className="text-[#3368c6] text-[20px] font-semibold flex items-start  flex-col ">
              <div className="flex items-center justify-center">
                <div className="mt-[2rem] mr-[1rem]">01.</div>
                <Heading2 txtSize="20px" text="Branches Across The World 25+" />
              </div>
              <div className="flex items-center justify-center">
                <div className="mt-[2rem] mr-[1rem]">02.</div>
                <Heading2 txtSize="20px" text="2.9K+ Parcel Believed By Team" />
              </div>
            </div>
            <div className="w-[40%] mt-6">
              <Button text="KNOW MORE" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Slider />
    </>
  );
};

export default AboutSec2;
