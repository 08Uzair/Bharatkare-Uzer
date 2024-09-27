import React, { useState } from "react";
import bg1 from "../../assets/bg1.jpg";

// Tab data with content
const tabData = [
  {
    title: "Modern Treatment",
    content: "We are here to hear and heal you",
    description:
      "Bharatkare is a pioneering healthcare foundation dedicated to transforming India's unorganized medical sector. We provide advanced treatments at affordable rates, ensuring that patients receive top-tier care. Our mission is to bridge the gap in healthcare accessibility, offering innovative solutions and compassionate support to improve lives across the nation. Trust Bharatkare for quality, affordability, and a healthier tomorrow.",
    image: bg1,
    features: [
      "Best Advice",
      "Medical & Surgical Services",
      "Insurance Assistance",
      "Specialised Support Service",
      "Instant Operation & Appointment",
    ],
  },
  {
    title: "Success Of Treatment",
    content: "Story of successful treatments",
    description:
      "At Bharatkare, we take pride in our successful track record of providing advanced treatments. We've helped our patients to overcome complex medical challenges, offering high-quality care at affordable rates. Our success stories reflect our commitment to excellence and our dedication to transforming healthcare in India",
    image: bg1,
    features: [
      "Best Advice",
      "Medical & Surgical Services",
      "Insurance Assistance",
      "Specialised Support Service",
      "Instant Operation & Appointment",
    ],
  },
  {
    title: "Certified Doctors",
    content: "Expert Surgeons , Exceptional Care",
    description:
      "Bharatkare is home to a team of highly skilled and experienced surgeons committed to delivering the best outcomes. Our surgeons specialize in advanced procedures, ensuring every patient receives precise, compassionate care. With a focus on excellence, they are the cornerstone of our successful treatments",
    image: bg1,
    features: [
      "Best Advice",
      "Medical & Surgical Services",
      "Insurance Assistance",
      "Specialised Support Service",
      "Instant Operation & Appointment",
    ],
  },
  {
    title: "Medical Advice",
    content: "Guiding You to the better life",
    description:
      "At Bharatkare, our expert medical advisors are dedicated to helping you choose the perfect line of treatment. They carefully assess your unique medical needs, provide personalized recommendations, and ensure you make informed decisions. With their guidance, you can confidently navigate your healthcare journey.",
    image: bg1,
    features: [
      "Best Advice",
      "Medical & Surgical Services",
      "Insurance Assistance",
      "Specialised Support Service",
      "Instant Operation & Appointment",
    ],
  },
];

const MedicalTabs = () => {
  const [activeTab, setActiveTab] = useState(2); // Set the default tab to "Certified Doctors"

  return (
    <div className="p-5">
      {/* Container for the entire tab section */}
      <div className="bg-[#3368c6] text-white rounded-[30px] p-5">
        {/* Button Container */}
        <div className="flex h-[15%]">
          {tabData.map((content, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`tabBord w-1/4 h-full text-lg p-2 cursor-pointer border-none outline-none 
              ${
                activeTab === index
                  ? "bg-[#fff] text-black" // Blue shade for active tab
                  : "bg-[#3368c6] text-white"
              } `}
            >
              {content.title}
            </button>
          ))}
        </div>

        {/* Content Container */}
        <div className="flex items-center bg-white tabBox p-8">
          {/* Image Section */}
          <div className=" tabContent w-1/2">
            <img
              src={tabData[activeTab].image}
              alt={tabData[activeTab].title}
              className="rounded-[20px] shadow-lg"
            />
          </div>

          {/* Text Content Section */}
          <div className=" tabContent w-1/2 pl-8">
            <h2 className="text-3xl font-semibold text-[#3368c6] mb-4">
              {tabData[activeTab].content}
            </h2>
            <p className="text-gray-700 mb-4">
              {tabData[activeTab].description}
            </p>

            {/* Additional Features for "Certified Doctors" */}
            {tabData[activeTab].features && (
              <ul className="text-gray-600 space-y-2">
                {tabData[activeTab].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-[#3368c6] mr-2">✔️</span> {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalTabs;
