import React from "react";

const Home = () => {
  return (
    <div className="bg-blue-50 py-10">
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
            <div>
              <p className="text-3xl font-bold text-blue-900">50 +</p>
              <p className="text-gray-600">DISEASES</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">45 +</p>
              <p className="text-gray-600">CITIES</p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="tel: +91 8377882115"
              className="bg-blue-700 text-white py-3 px-6 rounded-lg inline-block text-lg font-semibold"
            >
              Call Us : +91 8377882115
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

        {/* Right Section */}
        <div className=" homeForm bg-white p-8 rounded-lg shadow-md w-[100%] ml-[5rem]">
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
                type="text"
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
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
