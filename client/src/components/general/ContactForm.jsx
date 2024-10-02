import React from "react";
import bg from "../../assets/bg6.webp";
import Button from "./Button";
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
                className=" inputField w-1/2 px-4 py-2 "
              />
              <input
                type="email"
                placeholder="Your Email *"
                className=" inputField w-1/2 px-4 py-2 "
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="tel"
                placeholder="Your Phone *"
                className="inputField w-1/2 px-4 py-2 "
              />
              <input
                type="text"
                placeholder="Subject"
                className="inputField w-1/2 px-4 py-2 "
              />
            </div>
            <textarea
              placeholder="Message"
              className="inputField w-full px-4 py-2 "
              rows="4"
            ></textarea>
            <div className="w-[50%]">
              <Button text="Submit Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
