import React from "react";
import Section1 from "../components/general/Section1";
import Section2 from "../components/general/Section2";
import Section3 from "../components/general/Section3";
import Footer from "../components/custom/Footer";
import Subscribe from "../components/general/Subscribe";
import Home from "../components/custom/Home";

const Main = () => {
  return (
    <>
    <Home/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Main;
