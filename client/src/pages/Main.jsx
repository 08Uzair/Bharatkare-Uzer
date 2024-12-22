import React, { useState, useEffect } from "react";
import Section1 from "../components/general/Section1";
import Section2 from "../components/general/Section2";
import Section3 from "../components/general/Section3";
import Subscribe from "../components/general/Subscribe";
import Diseases from "../components/general/Diseases";
import Home1 from "../components/custom/Home1";

const Main = () => {
  return (
    <>
      <Home1 />
      <Diseases />
      <Section1 />
      <Section2 />
      <Section3 />
      <Subscribe />
    </>
  );
};

export default Main;
