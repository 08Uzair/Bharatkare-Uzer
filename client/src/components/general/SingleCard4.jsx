import React from "react";
import CustomWall from "./CustomWall";
import bg from "../../assets/bg7.webp";
import Heading2 from "./Heading2";
import CheckMark from "./CheckMark";
import StepsCard from "./StepsCard";
import CustomAccordion from "../custom/CustomAccordion";

const SingleCard4 = () => {
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
      <CustomWall txt1="Aesthetic" txt2="Service" />
      <div className="flex items-center justify-center flex-col">
        <div
          className="w-[95%] h-[108vh] bg-cover bg-center rounded-[25px] mt-[4rem]"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      </div>
      <div className="grid1 mt-[2rem]">
        <div></div>
        <div>
          <Heading2 text=" Delivering world class medical care" />
          <div className="flex items-center justify-start roboto ">
            <span className="font-semibold text-[#3b6fc8] text-[4rem] mr-3">
              M
            </span>
            <span className="leading-9 text-[#767f93]">
              ain Hospitals or larger hospital systems may provide their own
              ambulance service as a service to the community, or where
              ambulance care is unreliable or chargeable. Many hospital-based
              EMS departments operate solely with their hospital
            </span>
          </div>
          <div className="mt-[3rem] leading-8 text-[#767f93]">
            The physicians will attempt to treat casualties at the scene and
            will only transport them to hospital if it is deemed necessary. If
            patients are transported to hospital, they are more likely to go
            straight to a ward rather than to an emergency department. Countries
            that use this model include Austria, France, Belgium, Luxembourg,
            Italy, Spain, Brazil and Chile.
          </div>
          <CheckMark />
          <Heading2 text="Online simple step for appointment" />
          <div className="mt-[3rem] leading-8 text-[#767f93]">
            The Anglo-American model is also known as , ambulances are staffed
            by paramedics and/or emergency medical technicians. , but not to the
            same level as a physician. In this model it is rare to find a
            physician actually Specialized medical training working routinely in
            ambulances.
          </div>
          <StepsCard />
          <Heading2 text="Frequently asked questions" />
          <div className="mt-[3rem] leading-8 text-[#767f93]">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            laboris nisi ut aliquip ex ea commodo consequat. fugiat nulla
            pariatur. Nemo enim ipsam voluptatem quia voluptas voluptatem.
          </div>

          <div className="min-h-screen bg-blue-50 p-8">
            <CustomAccordion items={items} />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SingleCard4;
