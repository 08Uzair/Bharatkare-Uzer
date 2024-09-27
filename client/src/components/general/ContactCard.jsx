import React from "react";
import CustomCard from "../custom/CustomCard";

const ContactCard = () => {
  const data = [
    {
      txt1: "mail",
      txt2: "Mail us 24/7",
      txt3: "support@bharatkare.com",
    },
    {
      txt1: "phone_in_talk",
      txt2: "Call us 24/7",
      txt3: "Phone : (+91) 8377882115",
    },
    {
      txt1: "distance",
      txt2: "Our Locations",
      txt3: "BharatKare HQ,",
      txt4: " Sector 17 Gurgaon , 122003",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center felx-wrap mt-[4rem] mb-[4rem]">
        {data.map((item, index) => {
          return (
            <>
              <CustomCard
                txt1={item.txt1}
                txt2={item.txt2}
                txt3={item.txt3}
                txt4={item.txt4}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ContactCard;
