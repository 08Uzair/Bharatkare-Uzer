import React, { useState } from "react";
import logo from "../../assets/logo.webp";
import Button from "../general/Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState("Select Location");
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const data = [
    { id: "/", name: "HOME" },
    { id: "/about", name: "ABOUT Us" },
    { id: "/", name: "SERVICES" },
    { id: "/contact", name: "CONTACT Us" },
  ];

  return (
    <nav className="pt-[3rem] pb-[1rem] sora">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="navOptions flex space-x-4 text-[12px] pl-[3rem]">
          {data.map((item) => (
            <React.Fragment key={item.id}>
              {item.name === "SERVICES" ? (
                // Dropdown for Services
                <div
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  // onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <NavLink
                    to={item.id}
                    className="text-[#031b4e] font-bold tracking-wide hover:text-[#3368c6] letter-spacing-[0.3px]"
                  >
                    {item.name}
                  </NavLink>

                  {servicesDropdownOpen && (
                    <div
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                      className="absolute mt-2 w-60 border-t-[5px] border-blue-700 bg-white text-[#031b4e] font-semibold rounded-lg shadow-lg z-10 "
                    >
                      <ul className="p-2 ">
                        <li
                          className="px-4 py-2 mb-[1rem]  rounded-lg cursor-pointer"
                          onMouseEnter={() => setServicesDropdownOpen(true)}
                        >
                          <NavLink
                            to="/service"
                            className="dropLine block w-full h-full flex items-center justify-start"
                          >
                            <div className=" line w-[0px] h-[1.5px] bg-blue-500 mr-[5px]"></div>{" "}
                            Proctology
                          </NavLink>
                        </li>
                        <li
                          className="px-4 py-2 mb-[1rem]  rounded-lg cursor-pointer"
                          onMouseEnter={() => setServicesDropdownOpen(true)}
                        >
                          <NavLink
                            to="/service"
                            className="dropLine block w-full h-full flex items-center justify-start"
                          >
                            <div className=" line w-[0px] h-[1.5px] bg-blue-500 mr-[5px]"></div>{" "}
                            Fistula
                          </NavLink>
                        </li>
                        <li
                          className="px-4 py-2 mb-[1rem]  rounded-lg cursor-pointer"
                          onMouseEnter={() => setServicesDropdownOpen(true)}
                        >
                          <NavLink
                            to="/service"
                            className="dropLine block w-full h-full flex items-center justify-start"
                          >
                            <div className=" line w-[0px] h-[1.5px] bg-blue-500 mr-[5px]"></div>{" "}
                            Fissure
                          </NavLink>
                        </li>
                        <li
                          className="px-4 py-2 mb-[1rem]  rounded-lg cursor-pointer"
                          onMouseEnter={() => setServicesDropdownOpen(true)}
                        >
                          <NavLink
                            to="/service"
                            className="dropLine block w-full h-full flex items-center justify-start"
                          >
                            <div className=" line w-[0px] h-[1.5px] bg-blue-500 mr-[5px]"></div>{" "}
                            Piles
                          </NavLink>
                        </li>
                        <li
                          className="px-4 py-2 mb-[1rem]  rounded-lg cursor-pointer"
                          onMouseEnter={() => setServicesDropdownOpen(true)}
                        >
                          <NavLink
                            to="/service"
                            className="dropLine block w-full h-full flex items-center justify-start"
                          >
                            <div className=" line w-[0px] h-[1.5px] bg-blue-500 mr-[5px]"></div>{" "}
                            Pilonidal Sinus
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                // Regular NavLink for other items
                <NavLink
                  to={item.id}
                  className="text-[#031b4e] font-bold tracking-wide hover:text-[#3368c6] letter-spacing-[0.3px]"
                >
                  {item.name}
                </NavLink>
              )}
              <span className="text-[#031b4e] font-semibold hover:text-[#3368c6]">
                •
              </span>
            </React.Fragment>
          ))}
        </div>
        <NavLink to="/">
          <div className="logo flex items-center ml-[3rem]">
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
            className="relative focus:outline-none cir cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="material-symbols-outlined">pin_drop</span>
          </div>

          {isOpen && (
            <ul className="absolute bg-white border border-gray-300 rounded-lg shadow-lg right-[5rem] mt-[16.5rem] w-64 max-h-60 overflow-y-auto transition-opacity duration-300 ease-in-out z-20">
              {[
                "Hyderabad",
                "Maharashtra",
                "Delhi",
                "Jaipur",
                "Tamil-Nadu",
                "Mumbai",
                "Banglore",
                "Karnataka",
              ].map((location, idx) => (
                <li
                  key={idx}
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer transition-all duration-200"
                  onClick={() => handleOptionClick(location)}
                >
                  {location}
                </li>
              ))}
            </ul>
          )}

          {/* Book an Appointment Button */}
          <div className="menuButton">
            <NavLink to="/contact">
              <Button text="BOOK AN APPOINTMENT" />
            </NavLink>
          </div>

          {/* Menu Button */}
          <span
            className="menu material-symbols-outlined cursor-pointer"
            onClick={toggleMenu}
          >
            menu
          </span>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-30 transition-transform transform translate-x-0">
          <div className="flex justify-end p-4">
            <span
              className="material-symbols-outlined cursor-pointer"
              onClick={toggleMenu}
            >
              close
            </span>
          </div>
          <ul className="flex flex-col items-start justify-center p-[2rem] space-y-4">
            {data.map((item) => (
              <li key={item.id} className="menuBtn w-full list-none">
                <NavLink
                  to={item.id}
                  className="text-[#000] font-normal tracking-wide letter-spacing-[0.3px] cursor-pointer mb-[1rem]"
                  onClick={toggleMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div>
            <select
              className="dropMenu w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">SELECT CITY</option>
              <option value="Talegaon-dabhade">Talegaon-dabhade</option>
              <option value="Vadgaon-maval">Vadgaon-maval</option>
              <option value="Dehu">Dehu</option>
              <option value="Khadkale">Khadkale</option>
            </select>
          </div>
          <div className="menuNumber">
            <a href="tel:+91 8377882115"> +91 8377882115</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
