import React from "react";
import bg1 from "../../assets/bg4.jpg";
import bg2 from "../../assets/benzen.jpeg";
const Subscribe = () => {
  return (
    <>
      <div className=" w-[100%]  bg-[#fff] flex items-center justify-center flex-wrap subSec mt-[10rem] mb-[10rem]">
        <div
          className="subBox relative  w-[37%] h-[50vh] rounded-[20px] m-[2rem] bg-cover bg-center p-6"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-[20px]"></div>

          {/* Content */}
          <div className="relative top-[-1.2rem] flex items-start justify-center flex-col h-[50vh]">
            <div className="btn1">BHARATKARE</div>
            <p className="subBox-txt text-[#fff] text-[42px] font-medium mt-2">
              Ready to start learn? <br />
              Make an appointment now!
            </p>
          </div>
        </div>
        <div
          className="subBox relative w-[37%] h-[50vh] rounded-[20px] m-[2rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="absolute inset-0 bg-[#3368c6] opacity-95 rounded-[20px]">
            <div className=" p-[4rem] flex items-center justify-center h-[50vh] flex-col">
              <div>
                <div className="flex items-center justify-center">
                  <span class="sub-icon material-symbols-outlined">
                    notifications_active
                  </span>
                  <div className="subBox-txt text-[32px] text-[#fff] font-semibold m-5">
                    Subscribe to our newsletter
                  </div>
                </div>
              </div>
              <div className="subInput">
                <input
                  placeholder="Your Email Address"
                  className="inputText1"
                />
                <button className="btn2">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
