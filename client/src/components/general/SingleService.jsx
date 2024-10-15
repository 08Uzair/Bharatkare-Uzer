import React, { useEffect } from "react";
import Button from "./Button";
import Heading2 from "../general/Heading2";
import bg1 from "../../assets/bg9.webp";
import model from "../../assets/model1.png";
import { NavLink } from "react-router-dom";
import Form from "../custom/Form";
import Button3 from "./Button3";
import CustomAccordion from "../custom/CustomAccordion";
import AboutCards from "./AboutCards";
import Doctors from "../custom/Doctors";
const SingleService = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const items = [
    {
      question: "What all should I carry for my first appointment?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How is the Emergency Department staffed?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "What if my patient does not have a matched sibling?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <div className="flex min-h-screen">
        <div className="singleDisease w-3/5 overflow-y-auto p-8">
          <div className="bg-[#fff] rounded-[25px] p-6 mb-8">
            <div className="flex items-start justify-start ">
              <div className="w-[100%]">
                <div>Home / Disease</div>
                <Heading2
                  txtSize="32px"
                  text={`Disease - Safest Treatment & Highest Success Rate`}
                />
                <div className="text-[15px] text-[#031b4e] mb-[1.5rem]">
                  <span
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    Disease
                  </span>{" "}
                  is a highly important and beneficial procedure for individuals
                  with cataracts. If left untreated, cataracts can lead to
                  several potential complications like vision impairment and a
                  decline in overall quality of life. Book a consultation today
                  with Pristyn Care to undergo safe and effective Disease in
                  India.
                </div>
                <NavLink to="/contact">
                  <div className="w-[80%]">
                    <Button text="Call Now " />
                  </div>
                </NavLink>
              </div>
              <div className="singleModel  w-[100%]">
                <img src={model} />
              </div>
            </div>
          </div>
        </div>
        <div className="singleForm w-2/5 p-8">
          <div className="bg-white p-8 rounded-lg shadow-md w-full">
            <Form />
          </div>
        </div>
      </div>

      <div className="aboutSec2 flex items-center justify-center">
        <img className="about-img1 rounded-[25px] w-[100%] m-12" src={bg1} />
        {/* <img
              className="about-img2 absolute  w-[100%] rounded-[25px]"
              src={bg2}
            /> */}
        <div className="p-[5px]">
          <Button3 text="Proctology" />
          <div className="abt-txt">
            <Heading2 txtSize="50px" text="What is Proctology?" />
            <div className="mt-[3rem] leading-8 text-[#767f93]">
              A trained medical professional specializing in diagnosing and
              treating proctological disorders is a Proctologist. Such a doctor
              is responsible for tasks like conducting proctological surgeries,
              monitoring the lifestyle and dietary habits of their patients,
              monitoring patients’ progress, and collaborating with other
              healthcare professionals to enhance their course of treatment.
              Medical professionals dealing with Proctocology can be classified
              as anal and rectal surgeons, gastrointestinal surgeons, colon and
              rectal specialists, and Proctology specialists. It is
              unquestionably essential to preserve your gut health with the best
              proctologist in India. Visit Bharat Kare today and get the
              guidance of the most affiliated medical professionals specializing
              in this field to get commendable knowledge about your gut health
              and the treatments you might require to resolve your existing
              proctological concerns.
              <Heading2
                txtSize="15px"
                text=" The Proctology treatments offered by Bharat Kare are:"
              />
              <li> Colorectal Surgery</li>
              <li>Pelvic Floor Reconstruction</li>
              <li>Haemorrhoidectomy</li>
              <li> Sclerotherapy</li>
              <li>Rubber Band Ligation</li>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8">
        <CustomAccordion items={items} />
        <Doctors />
      </div>
      <AboutCards />
    </>
  );
};

export default SingleService;
