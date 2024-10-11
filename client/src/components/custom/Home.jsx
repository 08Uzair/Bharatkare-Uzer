import React from "react";
import bg from "../../assets/model.webp";
import Button from "../general/Button";
import Form from "./Form";

const Home = () => {
  return (
    <div className="bg-blue-50 py-10 mt-[2rem] mb-[3rem]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold text-blue-900">
            Surgery Matlab BharatKare
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
          <div className="mt-6 w-[53%]">
            <a href="tel: +91 8377882115">
              <Button text="Call Us : +91 8377882115" />
            </a>
          </div>
          <p className="mt-4 text-gray-600">
            Book Appointments With Our Expert Doctors Near You
          </p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center">
              <span className="mr-3">✔</span>
              <span>Get consultation for 50+ diseases across India</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">✔</span>
              <span>
                In-person and online consultation with experienced doctors
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">✔</span>
              <span>
                Extensive medical assistance throughout your treatment
              </span>
            </li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="model w-[41%]">
          <img className="w-[100%]" src={bg} alt="Surgery illustration" />
        </div>

        {/* Right Section */}
        <div className="homeForm bg-white p-8 rounded-lg shadow-md w-[40%] ml-[5rem]">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
