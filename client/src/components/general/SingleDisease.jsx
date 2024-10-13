import React, { useEffect } from "react";
import Button from "./Button";
import Heading2 from "../general/Heading2";
import model from "../../assets/model1.png";
import calc from "../../assets/calc.png";
import { NavLink, useLocation } from "react-router-dom";
import Form from "../custom/Form";
const SingleDisease = () => {
  // const [checkedSymptoms, setCheckedSymptoms] = useState({
  //   farsightedness: false,
  //   nearsightedness: false,
  //   squinting: false,
  // });
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const location = useLocation();
  const { slug, content, title } = location.state || {};
  console.log(slug);
  console.log(title);
  console.log(content);
  // console.log(posts);
  // const handleCheckboxChange = (symptom) => {
  //   setCheckedSymptoms((prev) => ({
  //     ...prev,
  //     [symptom]: !prev[symptom],
  //   }));
  // };
  const services = [
    {
      label: "Free Consultation",
      bgColor: "bg-red-100",
      icon: "💼",
      iconColor: "#ff000014",
    },
    {
      label: "Free Cab Facility",
      bgColor: "bg-yellow-100",
      icon: "🚖",
      iconColor: "#ff000014",
    },
    {
      label: "No Cost EMI",
      bgColor: "bg-blue-100",
      icon: "💳",
      iconColor: "#ff000014",
    },
    {
      label: "Support in Insurance Claim",
      bgColor: "bg-purple-100",
      icon: "☂️",
      iconColor: "#ff000014",
    },
    {
      label: "1-day Hospitalization",
      bgColor: "bg-pink-100",
      icon: "🏥",
      iconColor: "#ff000014",
    },
    {
      label: "1-day Hospitalization",
      bgColor: "bg-pink-100",
      icon: "🏥",
      iconColor: "#ff000014",
    },
    {
      label: "1-day Hospitalization",
      bgColor: "bg-pink-100",
      icon: "🏥",
      iconColor: "#ff000014",
    },
    {
      label: "1-day Hospitalization",
      bgColor: "bg-pink-100",
      icon: "🏥",
      iconColor: "#ff000014",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="singleDisease w-3/5 overflow-y-auto p-8">
        <div className="bg-[#fff] rounded-[25px] p-6 mb-8">
          <div className="flex items-start justify-start ">
            <div className="w-[100%]">
              <div>Home / {slug}</div>
              <Heading2
                txtSize="32px"
                text={`${title} - Safest Treatment & Highest Success Rate`}
              />
              <div className="text-[15px] text-[#031b4e] mb-[1.5rem]">
                <span
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {slug}
                </span>{" "}
                is a highly important and beneficial procedure for individuals
                with cataracts. If left untreated, cataracts can lead to several
                potential complications like vision impairment and a decline
                h-[4vh] w-[2px] in overall quality of life. Book a consultation
                today with Pristyn Care to undergo safe and effective {title} in
                India.
              </div>
              <NavLink to="/contact">
                <Button text="Call Now : 123-4567-890" />
              </NavLink>
            </div>
            <div className="singleModel  w-[100%]">
              <img src={model} />
            </div>
          </div>
          <div className="flex !items-center !justify-center !flex-wrap bg-[#eef7ff] rounded-[15px] !text-center mt-[2rem]">
            <div className="m-[1rem] ">
              <span className="font-semibold text-[24px] text-[#0071BC]">
                2M+
              </span>
              <p className="text-[18px] text-[#5C5C5C]">Happy Patients</p>
            </div>
            <div className="line  h-[4vh]"></div>
            <div className="m-[1rem] ml-[5rem]">
              <span className="font-semibold text-[24px] text-[#0071BC]">
                50+
              </span>
              <p className="text-[18px] text-[#5C5C5C]">Disease</p>
            </div>
            <div className="line h-[4vh] w-[2px]"></div>
            <div className="m-[1rem] ml-[5rem]">
              <span className="font-semibold text-[24px] text-[#0071BC]">
                700+
              </span>
              <p className="text-[18px] text-[#5C5C5C]">Hospitals</p>
            </div>
            <div className="line h-[4vh] w-[2px]"></div>
            <div className="m-[1rem] ml-[5rem]">
              <span className="font-semibold text-[24px] text-[#0071BC]">
                45+
              </span>
              <p className="text-[18px] text-[#5C5C5C]">Cities</p>
            </div>
          </div>
        </div>
        <div className="rounded-[25px] bg-[#fff] p-6 mt-[3rem] mb-[3rem]">
          <div className="scroll-container py-4">
            <div className="flex  space-x-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`flex  items-center justify-center w-60 h-24 p-4 rounded-xl shadow-md ${service.bgColor}`}
                >
                  <div
                    className={`text-4xl rounded-[50%] icon-p text-center flex items-center justify-center bg-[${service.iconColor}]`}
                  >
                    {service.icon}
                  </div>
                  <div className="text-center font-semibold text-[12px] p-[20px]">
                    {service.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" bg-[#fff] rounded-[25px] p-6 mb-[2rem]">
          <div className="flex flex-col items-center justify-center  ">
            <div className="bg-white rounded-lg w-full max-w-2xl p-6">
              <div className="flex items-center mb-4">
                <img src={calc} alt="Calculator" className="w-12 h-12 mr-4" />
                <h1 className="text-2xl font-semibold flex items-center justify-center">
                  <p
                    className="calcText1"
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {slug}- Cost-Calculator
                  </p>
                  <p className="calcText2 hidden text-[15px]">
                    Cost-Calculator
                  </p>
                </h1>
              </div>

              <p className="text-center text-blue-600 font-semibold mb-6">
                Fill details to get actual cost
              </p>

              <div className="calculator grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Patient Name"
                  className="p-3 border rounded-lg w-full border-gray-300"
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  Name="p-3 border rounded-lg w-full border-gray-300"
                />
                <div className="relative">
                  <select
                    className="p-3 border rounded-lg w-full border-gray-300 appearance-none"
                    defaultValue="Select City"
                  >
                    <option disabled>Select City</option>
                    <option>Pune</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                    <option>Noida</option>
                    <option>Jaipur</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-start">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                  Get actual cost
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="blogContainer h-auto rounded-[25px] list-disc bg-[#fff] p-[3.5rem] mt-[3rem] mb-[3rem]">
          <div className="blogtxt roboto leading-[40px]  text-[#6e778c] text-[16px] ">
            <h1 className="roboto">{title}</h1>
            <div
              className="roboto "
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>

      <div className="singleForm w-2/5 p-8">
        <div className="sticky top-8 bg-white p-8 rounded-lg shadow-md w-full">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default SingleDisease;
