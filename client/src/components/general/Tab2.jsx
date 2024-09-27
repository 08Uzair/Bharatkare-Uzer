import React, { useState } from "react";
import bg1 from "../../assets/bg1.jpg";

const tabData = [
  {
    title: "Modern Treatment",
    description:
      "Bharatkare is dedicated to providing modern treatments that transform healthcare.",
    image: bg1,
  },
  {
    title: "Success Of Treatment",
    description:
      "Ensuring success through advanced treatments and personalized care.",
    image: bg1,
  },
  {
    title: "Certified Doctors",
    description:
      "Expert Surgeons, Exceptional Care. Our team is highly skilled and experienced.",
    image: bg1,
  },
  {
    title: "Medical Advice",
    description:
      "Providing trusted medical advice to guide you through your healthcare journey.",
    image: bg1,
  },
];

const MedicalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-[#3368c6] p-6 rounded-tl-[30px] rounded-tr-[30px] shadow-lg max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-evenly  pb-4">
          {tabData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-white font-semibold px-4 py-2 ${
                activeTab === index
                  ? "border-b-2 border-white"
                  : "hover:border-b-2 hover:border-gray-200"
              } transition-colors duration-300`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        {/* Content */}
        <div className="flex flex-col md:flex-row mt-8 items-center">
          <img
            src={tabData[activeTab].image}
            alt={tabData[activeTab].title}
            className="rounded-lg w-full md:w-1/2"
          />
          <div className="mt-4 md:mt-0 md:ml-8 text-white md:w-1/2">
            <h2 className="text-2xl font-bold">{tabData[activeTab].title}</h2>
            <p className="mt-4">{tabData[activeTab].description}</p>
            <ul className="mt-4 space-y-2">
              <li>✔ Best Advice</li>
              <li>✔ Insurance Assistance</li>
              <li>✔ Instant Operation & Appointment</li>
              <li>✔ Medical & Surgical Services</li>
              <li>✔ Specialised Support Service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalTabs;
