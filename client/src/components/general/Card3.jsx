import React from "react";
import bg from "../../assets/bg1.jpg";
const Card3 = () => {
  return (
    <>
      <div>
        <div
          style={{
            background: `url(${bg}) center center / cover no-repeat`,
          }}
          className="relative w-[22rem] text-white p-6 cardClip m-5"
        >
          {/* Black overlay */}
          <div className=" cardClip absolute inset-0 bg-black opacity-60"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-[26px] font-semibold mb-4 text-white">
              Appointments
            </h2>
            <hr className="border-t border-white/30 mb-4" />
            <div className="space-y-2 text-white">
              <div className="flex justify-between">
                <span className="leading-[2rem] mt-[3rem] mb-[2rem]">
                  Emergency Medical Services, more commonly known as EMS, is a
                  system that responds
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-evenly text-white">
              <div>
                <span className="material-symbols-outlined text-[3rem] text-white">
                  headset_mic
                </span>
              </div>
              <div className="mt-4 mb-5">
                <h3>Emergency Cases</h3>
                <h1 className="text-[18px]">+91 8377882115</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
