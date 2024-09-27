import React from "react";
import bg from "../../assets/bg6.webp";
const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="bg-white rounded-[25px] shadow-lg flex overflow-hidden w-full max-w-5xl">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2">
          <img src={bg} alt="Doctor" className="w-full h-full object-cover" />
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mt-[3rem] mb-[1rem]">
            <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full uppercase text-xs tracking-wide">
              Contact Us
            </button>
          </div>

          <h2 className="text-[48px] leading-[60px]  font-medium text-[#031b4e] mb-6">
            Make an appointment
            <br />
            apply for treatments
          </h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="tel"
                placeholder="Your Phone *"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-md flex items-center justify-center space-x-2"
            >
              <span>Submit Now</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
