import React, { useState, useEffect } from "react";
import model from "../../assets/model1.png";
import Button from "../general/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home1 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [disease, setDisease] = useState("");
  const [selectDisease, setSelectDisease] = useState([]);

  // Fetch the diseases (posts) from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://bharatkare.com/wp-json/wp/v2/posts?categories=99"
        );
        setSelectDisease(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
    handleOpen();
  }, []);
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Number: number,
      City: city,
      Diseases: disease,
      Status: "Pending",
    };

    // Check if the patient already exists
    axios
      .get(
        "https://api.sheetbest.com/sheets/cb752eac-5b4d-44bc-9245-87aaf213129d"
      )
      .then((response) => {
        const existingPatients = response.data;
        const patientExists = existingPatients.some(
          (patient) => patient.Name === name
        );

        if (patientExists) {
          alert(`The booking for ${name} has already been done.`);
        } else {
          // If patient doesn't exist, proceed with submission
          axios
            .post(
              "https://api.sheetbest.com/sheets/cb752eac-5b4d-44bc-9245-87aaf213129d",
              data,
              {
                headers: {
                  Authorization:
                    "Bearer 3ilm@8_nceYh!86rPX4@z0q7kcXyMBSD0KRLBbr%obNiTE-dEZYNV$L1Z@necPUT",
                },
              }
            )
            .then((response) => {
              // console.log(response);

              // Clear form fields
              setName("");
              setNumber("");
              setCity("");
              setDisease("");

              // Navigate after successful booking
              setOpen(false);
              toast.success("Booked Successfully");
            })
            .catch((error) => {
              console.error("There was an error submitting the form!", error);
            });
        }
      })
      .catch((error) => {
        console.error("There was an error fetching existing patients!", error);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-[#f0f7fd]">
      {/* Left Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-[3rem] font-bold text-[#7bad64]">
          <h1 className="herotxt1 text-[6.1rem]">
            <span className="text-[#1e1b1c]">BHARAT</span>
            <span className="text-[#55a3c3]">KARE</span>
          </h1>

          <h2 className="herotxt2">BHAROSA BHARAT KA</h2>
        </h1>
        <p className="text-gray-600 mt-4">
          Good health is the state of mental, physical, and social well-being
          and it does not just mean absence of diseases.
        </p>

        <div className=" homebtn mt-8 w-[40%]">
          <button onClick={handleOpen}>
            <Button text=" BOOK AN APPOINTMENT" />
          </button>
        </div>

        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 z-[11111]">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <div className="relative">
                <h4 className="text-xl font-semibold text-blue-gray-900">
                  Book Free Appointment
                </h4>
                <p className="mt-1 text-gray-600">Surgery Matlab BharatKare</p>

                <button
                  className="absolute right-3 top-3 text-gray-600 hover:text-gray-800"
                  onClick={handleOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mt-4 space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-blue-gray-700">
                      Patient Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Patient Name"
                      className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex gap-4">
                    {/* Number */}
                    <div className="w-full">
                      <label className="block text-sm font-medium text-blue-gray-700">
                        Number
                      </label>
                      <input
                        value={number}
                        className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        onChange={(e) => setNumber(e.target.value)}
                        type="number"
                        placeholder="e.g. +91-123-456-789"
                        maxLength="10"
                        onInput={(e) => {
                          if (e.target.value.length > 10) {
                            e.target.value = e.target.value.slice(0, 10); // Limit to 10 digits
                          }
                        }}
                      />
                    </div>

                    {/* Weight */}
                    <div className="w-full">
                      <label className="block text-sm font-medium text-blue-gray-700">
                        Weight
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 250"
                        className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        maxLength="3"
                        onInput={(e) => {
                          if (e.target.value.length > 3) {
                            e.target.value = e.target.value.slice(0, 3); // Limit to 3 digits
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-blue-gray-700">
                      City
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                    >
                      <option value="">Select City</option>
                      <option value="Talegaon-dabhade">Talegaon-dabhade</option>
                      <option value="Vadgaon-maval">Vadgaon-maval</option>
                      <option value="Dehu">Dehu</option>
                      <option value="Khadkale">Khadkale</option>
                    </select>
                  </div>

                  {/* Disease */}
                  <div>
                    <label className="block text-sm font-medium text-blue-gray-700">
                      Disease
                    </label>
                    <select
                      value={disease}
                      onChange={(e) => setDisease(e.target.value)}
                      className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                    >
                      <option>Select Disease</option>
                      {selectDisease?.map((item, index) => (
                        <option key={index} value={item.slug?.toUpperCase()}>
                          {item.slug?.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Right Section */}

      <div className="lg:w-1/2 relative flex items-center justify-center righSec">
        {/* Background Circles */}
        <div className="absolute top-[-2rem] left-[4rem] w-[33rem] h-[33rem] bg-[#031948]  rounded-full clip-circle-gray"></div>
        <div className="absolute top-[-1rem] left-[20rem] w-[20rem] h-[20rem] bg-[#eff6fc] border-[#031948] border-[1rem] rounded-full clip-circle-blue"></div>

        {/* Cards */}
        <div className="absolute top-[1rem] left-[3rem] bg-white p-4 rounded-lg shadow-lg mb-4 ">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-[0.7rem] flex items-center justify-center text-center rounded-full">
              <span className="text-[#fff] material-symbols-outlined">
                search
              </span>
            </div>
            <div>
              <h3 className="font-semibold">Well Qualified Doctors</h3>
              <p className="text-sm text-gray-500">Treat with care</p>
            </div>
          </div>
        </div>

        <div className="absolute top-[16rem] left-[1rem] bg-white p-4 rounded-lg shadow-lg  z-[111]">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-[0.7rem] flex items-center justify-center text-center rounded-full">
              <span className="text-[#fff] material-symbols-outlined">
                description
              </span>
            </div>
            <div>
              <h3 className="font-semibold">Book an appointment</h3>
              <p className="text-sm text-gray-500">Online appointment</p>
            </div>
          </div>
        </div>
        {/* Doctors Image */}
        <div className="relative z-10">
          <img src={model} alt="Doctors" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Home1;
