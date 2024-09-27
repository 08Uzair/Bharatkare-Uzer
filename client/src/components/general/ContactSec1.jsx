import React from "react";
import bg1 from "../../assets/bg5.jpg"; // Importing the image

const ContactSec1 = ({txt1}) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div
          className="relative h-[80vh] w-[96%] rounded-[30px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          {/* Content of the section */}
          <div className="relative z-10 flex items-center justify-start p-[5rem] h-full ">
            <div>
              <h1 className=" text-[4rem] text-[#031b4e]">{txt1}</h1>
              <h4 className=" text-[1rem] text-[#031b4e]">
                BharatKare / {txt1}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSec1;
