import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Section1 = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </>
  );
};

export default Section1;
