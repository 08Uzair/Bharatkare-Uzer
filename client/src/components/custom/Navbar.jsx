import React from "react";
import logo from "../../assets/logo.webp";
const Navbar = () => {
  const data = ["HOME", "ABOUT Us", "CONTACT US"];
  return (
    <nav className=" pt-[3rem] pb-[1rem] sora">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-4 text-[12px]  pl-[3rem] ">
          {data.map((item) => {
            return (
              <>
                <a
                  href="#"
                  className="text-[#031b4e] font-bold tracking-wide hover:text-[#3368c6] letter-spacing-[0.3px]"
                >
                  {item}
                </a>
                <span className="text-[#031b4e] font-semibold hover:text-[##3368c6]">
                  •
                </span>
              </>
            );
          })}
        </div>

        <div className="flex items-center ml-[13rem]">
          <img src={logo} alt="Logo" className="w-[55%]" />
        </div>

        <div className="flex items-center space-x-4">
          {/* Phone Icon and Number */}
          <div className="flex items-center space-x-2 phone">
            <div className=" cir1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#031b4e"
              >
                <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
            </div>

            <span className="text-[#031b4e] cursor-pointer font-semibold hover:text-[##3368c6] letter-spacing-[0.3px]">
              +91 8377882115
            </span>
          </div>

          {/* Search Icon */}
          <div className="cir">
            <span class="material-symbols-outlined">search</span>
          </div>

          {/* Cart Icon */}
          <div className="relative focus:outline-none cir">
            <span class="material-symbols-outlined">local_mall</span>
            {/* Cart count */}
            <span className="absolute top-[-0.2rem] -right-2 bg-black text-white text-xs rounded-full p-[4px]">
              0
            </span>
          </div>

          {/* Book an Appointment Button */}
          <div className="bg-[#031b4e] text-white text-[13px] p-4 h-[6.5vh] flex item-center  cursor-pointer justify-center  rounded-full hover:bg-[#5aa7bd] focus:outline-none">
            BOOK AN APPOINTMENT
            <div className="ml-2">
              {" "}
              <span class="material-symbols-outlined">north_east</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
