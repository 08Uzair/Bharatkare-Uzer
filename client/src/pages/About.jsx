import React from "react";
import AboutCards from "../components/general/AboutCards";
import CustomWall from "../components/general/CustomWall";
import AboutSec2 from "../components/general/AboutSec2";
import AboutSec3 from "../components/general/AboutSec3";
import AboutSec4 from "../components/general/AboutSec4";

const About = () => {
  return (
    <>
      <CustomWall txt1="About Us" />
      <AboutCards />
      <AboutSec2 />
      <AboutSec4 />
      <AboutSec3 />
    </>
  );
};

export default About;
