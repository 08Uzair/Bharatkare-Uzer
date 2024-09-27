import React from "react";

const Card1 = () => {
  return (
    <>
      <div>
        <div className="relative w-[22rem] bg-blue-500 text-white p-6 cardClip m-5">
          {/* Inverted border-radius using pseudo-elements */}
{/* 
          <div className="absolute top-[8.5rem] right-[rem] w-[5rem] h-[5rem] bg-[#f0f7fd] rounded-full">
            <span className="flex items-center justify-center h-full text-[2.1em]">
              <div className="w-[4rem] h-[4rem] text-center flex items-center justify-center bg-[#a1a1a1] rounded-full ">
                📅
              </div>
            </span>
          </div> */}
          <h2 className="text-[26px] font-semibold mb-4">Schedule Hours</h2>
          <hr className="border-t border-white/30 mb-4" />
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="leading-[4rem]">Monday – Friday</span>
              <span className="leading-[4rem]">08:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span className="leading-[4rem]">Saturday</span>
              <span className="leading-[4rem]">09:30 - 17:30</span>
            </div>
            <div className="flex justify-between">
              <span className="leading-[4rem]">Sunday</span>
              <span className="leading-[4rem]">09:00 - 15:30</span>
            </div>
          </div>
          <div className="mt-4 text-sm leading-9">24/7 Service Available</div>
        </div>
      </div>
    </>
  );
};

export default Card1;
