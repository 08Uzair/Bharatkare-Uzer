import React from "react";
import bg from "../../assets/model.webp";
import Button from "../general/Button";
const Home = () => {
  return (
    <div className="bg-blue-50 py-10 mt-[2rem] mb-[3rem]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold text-blue-900">
            Surgery Matlab Pristyn Care
          </h1>
          <div className="mt-4 flex space-x-8">
            <div>
              <p className="text-3xl font-bold text-blue-900">400 +</p>
              <p className="text-gray-600">DOCTORS</p>
            </div>
            <div className="line"></div>
            <div>
              <p className="text-3xl font-bold text-blue-900">50 +</p>
              <p className="text-gray-600">DISEASES</p>
            </div>
            <div className="line"></div>
            <div>
              <p className="text-3xl font-bold text-blue-900">45 +</p>
              <p className="text-gray-600">CITIES</p>
            </div>
          </div>
          <div className="mt-6 w-[45%]">
            <a href="tel: +91 8377882115">
              <Button text="Call Us : +91 8377882115" />
            </a>
          </div>
          <p className="mt-4 text-gray-600">
            Book Appointments With Our Expert Doctors Near You
          </p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center">
              <span className="mr-3">✔️</span>
              <span>Get consultation for 50+ diseases across India</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">✔️</span>
              <span>
                In-person and online consultation with experienced doctors
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">✔️</span>
              <span>
                Extensive medical assistance throughout your treatment
              </span>
            </li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="w-[41%]">
          <img className="w-[100%]" src={bg} />
        </div>

        {/* Right Section */}
        <div className=" homeForm bg-white p-8 rounded-lg shadow-md w-[40%] ml-[5rem]">
          <h2 className="text-xl font-semibold mb-4">Book Free Consultation</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Patient Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Mobile Number"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>Select City</option>
                <option>Talegaon-dabhade</option>
                <option>Vadgaon-maval</option>
                <option>Dehu</option>
                <option>Khadkale</option>
              </select>
            </div>
            <div>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>Select Disease</option>
                <option>Disease 1</option>
                <option>Disease 2</option>
                <option>Disease 3</option>
              </select>
            </div>
            <Button text="Book Now" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
