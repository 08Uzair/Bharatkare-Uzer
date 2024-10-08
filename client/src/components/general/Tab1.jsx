import React, { useState } from "react";
import Card4 from "./Card4";

const Tab1 = () => {
  // Define all categories
  const categories = [
    "All",
    "Aesthetic",
    "ENT",
    "Gynecology",
    "Laparoscopic",
    "Opthalmology",
    "Proctology",
    "Urology",
    "Vascular",
  ];

  // State to keep track of selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-5 flex items-center justify-center flex-wrap ">
      {/* Toggle Buttons */}
      <div className="tabs-btn mb-[4rem]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 m-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#031b4e] text-white"
                : " text-[#031b4e]"
            } hover:text-white`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content based on selected category */}
      <Card4 selectedCategory={selectedCategory} />
    </div>
  );
};

export default Tab1;
