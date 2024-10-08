import React, { useState } from "react";
import logo from "../../assets/logo.webp";
import Button from "../general/Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const data = [
    { id: "/", name: "HOME" },
    { id: "/about", name: "ABOUT Us" },
    { id: "/contact", name: "CONTACT Us" },
  ];

  const citiesData = [
    "Hyderabad",
    "Banglore",
    "Mumbai",
    "Pune",
    "Delhi",
    "Maharashtra",
    "Tamil Nadu",
    "Jaipur",
  ];
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <nav className="pt-[3rem] pb-[1rem] sora">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="navOptions flex space-x-4 text-[12px] pl-[3rem]">
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <NavLink
                to={item.id}
                className="text-[#031b4e] font-bold tracking-wide hover:text-[#3368c6] letter-spacing-[0.3px]"
              >
                {item.name}
              </NavLink>
              <span className="text-[#031b4e] font-semibold hover:text-[#3368c6]">
                •
              </span>
            </React.Fragment>
          ))}
        </div>
        <NavLink to="/">
          <div className="logo flex items-center ml-[10rem]">
            <img src={logo} alt="Logo" className="w-[55%]" />
          </div>
        </NavLink>

        <div className="flex items-center space-x-4">
          <div className="contact flex items-center space-x-2 phone">
            <div className="cir1">
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
            <span className="text-[#031b4e] cursor-pointer font-semibold hover:text-[#3368c6] letter-spacing-[0.3px]">
              <a href="tel:+91 8377882115"> +91 8377882115</a>
            </span>
          </div>

          {/* Search Icon */}
          <div className="cir" onClick={toggleSearch}>
            <span className="material-symbols-outlined">search</span>
          </div>

          {/* Search Bar */}
          {searchVisible && (
            <div className="searchBar absolute top-16 right-0 bg-white p-4 shadow-lg">
              <span
                onClick={toggleSearch}
                className="searchCross material-symbols-outlined"
              >
                close
              </span>
              <input
                type="text"
                placeholder="Search ..."
                className="border border-gray-300 inputSearch p-2"
              />
              <span className="searchIcon material-symbols-outlined">
                search
              </span>
            </div>
          )}

          {/* Location Icon */}
          <div
            className="relative focus:outline-none cir"
            onClick={toggleSidebar}
          >
            <span className="material-symbols-outlined">pin_drop</span>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 w-[30%] h-full bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto hide-scrollbar ${
              sidebarVisible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-[#031b4e] font-bold">Location Details</h2>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={toggleSidebar}
              >
                close
              </span>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-center outline-none">
                <input
                  style={{ border: "2px solid " }}
                  className="p-2 rounded-[10px] m-3"
                />
              </div>

              <div>
                <div className="text-center">Popular Cities</div>
                <div className="flex items-center justify-center flex-wrap">
                  {citiesData.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        boxShadow:
                          " 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                      }}
                      className="flex items-center justify-center flex-col rounded-[15px] cursor-pointer m-[2rem] w-[8rem] text-center h-[20vh] bg-[#fff]"
                    >
                      <div
                        style={{
                          boxShadow:
                            " 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                        }}
                        className="rounded-[50%] mt-[1rem] p-[3rem] bg-[#fff] m-[1rem]"
                      ></div>
                      <div className="text-[#031b4e] mb-[0.5rem]">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Overlay (Blur Effect) */}
          {sidebarVisible && (
            <div
              className="fixed w-full inset-0 bg-black bg-opacity-40 backdrop-blur-[20px] z-40"
              onClick={toggleSidebar} // Clicking the overlay will close the sidebar
            ></div>
          )}

          {/* Book an Appointment Button */}
          <div className="menuButton">
            <NavLink to="/contact">
              <Button text="BOOK AN APPOINTMENT" />
            </NavLink>
          </div>
          <span className="menu material-symbols-outlined">menu</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
