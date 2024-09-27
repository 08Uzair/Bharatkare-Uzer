import React, { useState } from "react";

const TransparentTabs = () => {
  const [activeTab, setActiveTab] = useState("html");

  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <div className="max-w-[40rem] mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200">
        {data.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`flex-1 text-center p-3 text-sm font-medium transition-colors ${
              activeTab === tab.value
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Body */}
      <div className="p-4">
        {data.map(
          (tab) =>
            activeTab === tab.value && (
              <div key={tab.value} className="text-gray-700">
                {tab.desc}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TransparentTabs;
