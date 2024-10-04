import React, { useState } from "react";
import bg from "../../assets/model.webp";
import Button from "../general/Button";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [disease, setDisease] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Number: number,
      City: city,
      Diseases: disease,
      Status: "Pending", // Set initial status to "Pending"
    };

    // First, check if the patient already exists in the sheet
    axios
      .get("https://api.sheetbest.com/sheets/bae68d7c-51ae-4167-91dd-dc8e3a070d3e")
      .then((response) => {
        const existingPatients = response.data; // Adjust this based on your response structure
        const patientExists = existingPatients.some((patient) => patient.Name === name);

        if (patientExists) {
          alert(`The booking for ${name} has already been done.`);
        } else {
          // If the patient does not exist, proceed with the submission
          axios
            .post(
              "https://api.sheetbest.com/sheets/bae68d7c-51ae-4167-91dd-dc8e3a070d3e",
              data,
              {
                headers: {
                  "Authorization": "Bearer DBICfzNBmZodAJW$1@8mPdvVtyH51PzpUY3cEKT9r2IQqmnVKU6gjeXwV2q!U12N",
                },
              }
            )
            .then((response) => {
              console.log(response);

              // Clear form fields after submission
              setName("");
              setNumber("");
              setCity("");
              setDisease("");
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
    <div className="bg-blue-50 py-10 mt-[2rem] mb-[3rem]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold text-blue-900">
            Surgery Matlab BharatKare
          </h1>
          <div className="mt-4 flex space-x-8">
            <div>
              <p className="text-3xl font-bold text-blue-900">400 +</p>
              <p className="text-gray-600">DOCTORS</p>
            </div>
            <div className="line"></div>
            <div>
              <p className="text-3xl font-bold text-blue-900">50 +</p>
              <p className="text-gray-600">DISEASES</p>
            </div>
            <div className="line"></div>
            <div>
              <p className="text-3xl font-bold text-blue-900">45 +</p>
              <p className="text-gray-600">CITIES</p>
            </div>
          </div>
          <div className="mt-6 w-[53%]">
            <a href="tel: +91 8377882115">
              <Button text="Call Us : +91 8377882115" />
            </a>
          </div>
          <p className="mt-4 text-gray-600">
            Book Appointments With Our Expert Doctors Near You
          </p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center">
              <span className="mr-3">✔</span>
              <span>Get consultation for 50+ diseases across India</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">✔</span>
              <span>
                In-person and online consultation with experienced doctors
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">✔</span>
              <span>
                Extensive medical assistance throughout your treatment
              </span>
            </li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="w-[41%]">
          <img className="w-[100%]" src={bg} alt="Surgery illustration" />
        </div>

        {/* Right Section */}
        <div className="homeForm bg-white p-8 rounded-lg shadow-md w-[40%] ml-[5rem]">
          <h2 className="text-xl font-semibold mb-4">Book Free Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Patient Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="Mobile Number"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select City</option>
                <option value="Talegaon-dabhade">Talegaon-dabhade</option>
                <option value="Vadgaon-maval">Vadgaon-maval</option>
                <option value="Dehu">Dehu</option>
                <option value="Khadkale">Khadkale</option>
              </select>
            </div>
            <div>
              <select
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select Disease</option>
                <option value="Disease 1">Disease 1</option>
                <option value="Disease 2">Disease 2</option>
                <option value="Disease 3">Disease 3</option>
              </select>
            </div>

            <div className="w-[50%]">
              <button type="submit">
                <Button text="Book Now" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
