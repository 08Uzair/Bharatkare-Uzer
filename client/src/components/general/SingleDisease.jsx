import React, { useState } from "react";
import Button from "./Button";
import Heading2 from "../general/Heading2";
import model from "../../assets/model.webp";
import calc from "../../assets/calc.png";
const SingleDisease = () => {
  const [checkedSymptoms, setCheckedSymptoms] = useState({
    farsightedness: false,
    nearsightedness: false,
    squinting: false,
  });

  const handleCheckboxChange = (symptom) => {
    setCheckedSymptoms((prev) => ({
      ...prev,
      [symptom]: !prev[symptom],
    }));
  };
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
      <div className="w-3/5 overflow-y-auto p-8">
        <div className="bg-[#fff] rounded-[25px] p-6 mb-8">
          <div className="flex items-start justify-start ">
            <div className="w-[100%]">
              <div>Home / </div>
              <Heading2
                txtSize="32px"
                text="Cataract Surgery - Safest Treatment & Highest Success Rate"
              />
              <div className="text-[15px] text-[#031b4e] mb-[1.5rem]">
                Cataract surgery is a highly important and beneficial procedure
                for individuals with cataracts. If left untreated, cataracts can
                lead to several potential complications like vision impairment
                and a decline h-[4vh] w-[2px] in overall quality of life. Book a
                consultation today with Pristyn Care to undergo safe and
                effective cataract surgery in India.
              </div>
              <Button text="Call Now : 123-4567-890" />
            </div>
            <div className="w-[100%]">
              <img src={model} />
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#fff] rounded-[10px] text-center mt-[2rem]">
            <div className="m-[1rem] bg-[#eef7ff] ">
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
        <div className=" bg-[#fff] rounded-[25px] p-6 mb-8">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Best Eye Doctor for LASIK surgery in India
            </h1>

            <div className="flex items-center mb-6 w-full justify-center">
              <input
                type="text"
                placeholder="Pimpri-chinchwad"
                className="w-96 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex space-x-4 mb-8">
              {["Delhi", "Gurgaon", "Noida", "Ahmedabad", "Bangalore"].map(
                (city) => (
                  <button
                    key={city}
                    className="bg-white border border-blue-500 text-blue-500 py-2 px-4 rounded-lg"
                  >
                    {city}
                  </button>
                )
              )}
            </div>

            <div className="border rounded-lg  p-6 w-[40rem]">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Doctor"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">
                    Dr. Chanchal Gadodiya
                  </h2>
                  <p className="text-gray-600">
                    MS, DNB, FICO, MRCS, Fellow Paediatric Opth and Strabismus
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-lg text-gray-700">
                  <span className="line-through text-gray-500">₹1000</span>
                  <span className="ml-2 text-green-600 font-semibold">
                    FREE Consultation
                  </span>
                </p>
              </div>

              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-lg">&#9733;</span>
                <p className="ml-2 text-gray-700">4.5/5</p>
                <span className="ml-4 text-gray-600">11+ Years</span>
              </div>

              <p className="text-gray-600 mb-4">Pristyn Care Clinic, Pune</p>

              <div className="flex justify-between items-center mb-4">
                <button className="text-blue-500">
                  Contact Us : 7353-242-666
                </button>
                <Button text="Book Free Appointment" />
              </div>

              <button className="border bg-[#3367c4] border-gray-300 text-[#fff] py-2 px-4 rounded-lg w-full">
                View All Doctors
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-[#fff] rounded-[25px] p-6 mb-[2rem]">
          <div className="flex flex-col items-center justify-center  ">
            <div className="bg-white rounded-lg w-full max-w-2xl p-6">
              <div className="flex items-center mb-4">
                <img src={calc} alt="Calculator" className="w-12 h-12 mr-4" />
                <h1 className="text-2xl font-semibold">
                  Lasik Eye Surgery Cost Calculator
                </h1>
              </div>

              <p className="text-center text-blue-600 font-semibold mb-6">
                Fill details to get actual cost
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Patient Name"
                  className="p-3 border rounded-lg w-full border-gray-300"
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="p-3 border rounded-lg w-full border-gray-300"
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

              <div className="flex justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                  Get actual cost
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] rounded-[25px] p-6">
          <div className="flex flex-col items-center justify-center mt-8  bg-[#fff] p-6 rounded-lg ">
            <h2 className="text-xl font-semibold text-blue-600 mb-6">
              Are you going through any of these symptoms?
            </h2>

            <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center items-start md:items-center">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={checkedSymptoms.farsightedness}
                  onChange={() => handleCheckboxChange("farsightedness")}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>Blurry appearance of far objects [Farsightedness]</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={checkedSymptoms.nearsightedness}
                  onChange={() => handleCheckboxChange("nearsightedness")}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>Blurry appearance of near objects [Nearsightedness]</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={checkedSymptoms.squinting}
                  onChange={() => handleCheckboxChange("squinting")}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>Squinting or eye strain</span>
              </label>
            </div>

            <button
              disabled
              className="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg cursor-not-allowed"
            >
              Consult with our Experts
            </button>
          </div>
        </div>
        <div className="h-[150vh] rounded-[25px] bg-[#fff] p-6 mt-[3rem] mb-[3rem]">
          Scrollable Div 2
        </div>
      </div>

      <div className="w-2/5 p-8">
        <div className="sticky top-8 bg-white p-8 rounded-lg shadow-md w-full">
          <h2 className="text-xl font-semibold mb-4">Book Free Consultation</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Patient Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Mobile Number"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>Select City</option>
                <option>Talegaon-dabhade</option>
                <option>Vadgaon-maval</option>
                <option>Dehu</option>
                <option>Khadkale</option>
              </select>
            </div>
            <div>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>Select Disease</option>
                <option>Disease 1</option>
                <option>Disease 2</option>
                <option>Disease 3</option>
              </select>
            </div>
            <div className="w-full">
              <Button text="Book Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleDisease;
