import React from "react";
import bg from "../../assets/bg8.jpg";
const StepsCard = () => {
  return (
    <>
      <div className="stepSection flex items-center justify-center flex-wrap mt-[4rem] w-[100%]">
        <div className="stepCard rounded-[25px] m-[1rem] w-[30%]  relative">
          <div className="rounded-[25px] w-[100%] ">
            <img alt="bg" className="cardClip rounded-[25px]" src={bg} />
            <span className="stepbox stepbox absolute top-[-5px] right-[-20px] text-[10px] bg-[#031b4e] text-[#fff] p-3 rounded-[50px]">
              Step: 1
            </span>
          </div>
          <div>
            <div className="text-[26px] text-[#031b4e] mt-[1rem] font-semibold">
              Make Appointment
            </div>
            <div className="mt-[1rem] leading-8 text-[#767f93]">
              If you need any Help in booking an appointment, please call Us
            </div>
          </div>
        </div>
        <div className="stepCard rounded-[25px] m-[1rem] w-[30%] ">
          <div className="rounded-[25px] w-[100%] relative">
            <img alt="bg" className="cardClip1 rounded-[25px]" src={bg} />
            <span className="stepbox absolute bottom-[-5px] right-[-20px] text-[10px] bg-[#031b4e] text-[#fff] p-3 rounded-[50px]">
              Step: 2
            </span>
          </div>
          <div>
            <div className="text-[26px] text-[#031b4e] mt-[1rem] font-semibold">
              Select Doctor
            </div>
            <div className="mt-[1rem] leading-8 text-[#767f93]">
              Select one from list and go through the doctor's profile and
              opined doctors
            </div>
          </div>
        </div>
        <div className="stepCard rounded-[25px] m-[1rem] w-[30%]  relative">
          <div className="rounded-[25px] w-[100%]">
            <img alt="bg" className="cardClip rounded-[25px]" src={bg} />
            <span className="stepbox absolute top-[-5px] right-[-20px] text-[10px] bg-[#031b4e] text-[#fff] p-3 rounded-[50px]">
              Step: 3
            </span>
          </div>
          <div>
            <div className="text-[26px] text-[#031b4e] mt-[1rem] font-semibold">
              Get Consultation
            </div>
            <div className="mt-[1rem] leading-8 text-[#767f93]">
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsCard;
