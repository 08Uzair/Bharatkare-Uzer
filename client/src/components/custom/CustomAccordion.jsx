import React, { useState } from "react";

const CustomAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-[100%] mx-auto my-8 space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border rounded-[25px] overflow-hidden ${
            index === activeIndex ? "bg-blue-100" : "bg-white"
          }`}
        >
          <div
            className={`flex justify-between items-center p-[1.5rem] cursor-pointer ${
              index === activeIndex ? "bg-blue-500 text-white" : "bg-white"
            } rounded-t-lg`}
            onClick={() => handleToggle(index)}
          >
            <h2 className="font-medium">{`0${index + 1}. ${item.question}`}</h2>
            {index === activeIndex ? (
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            ) : (
              <span class="material-symbols-outlined">keyboard_arrow_up</span>
            )}
          </div>
          {index === activeIndex && (
            <div className="p-4 bg-blue-50">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
