import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import bg from "../../assets/model.webp";
import Button from "../general/Button";
const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [disease, setDisease] = useState("");
  const [selectDisease, setSelectDisease] = useState();
  console.log(selectDisease);
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
  }, []);
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
      .get(
        "https://api.sheetbest.com/sheets/cb752eac-5b4d-44bc-9245-87aaf213129d"
      )
      .then((response) => {
        const existingPatients = response.data; // Adjust this based on your response structure
        const patientExists = existingPatients.some(
          (patient) => patient.Name === name
        );
        if (patientExists) {
          alert(`The booking for ${name} has already been done.`);
        } else {
          // If the patient does not exist, proceed with the submission
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
          toast.success("Booked Sucessfully");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching existing patients!", error);
      });
  };
  return (
    <>
      <div>
        <h2 className="txt-form text-xl font-semibold mb-4">
          Book Free Appointment
        </h2>
        <div className=" w-[41%] model1">
          <img className="w-[100%]" src={bg} alt="Surgery illustration" />
        </div>
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
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="number"
              required
              placeholder="e.g. +91-123-456-789"
              maxLength="10"
              onInput={(e) => {
                if (e.target.value.length > 10) {
                  e.target.value = e.target.value.slice(0, 10); // Limit to 10 digits
                }
              }}
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

              {selectDisease?.map((item, index) => {
                return (
                  <>
                    <option key={index} value={item.slug?.toUpperCase()}>
                      {item.slug?.toUpperCase()}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="form-btn w-[50%]">
            <button type="submit">
              <Button text="Book Now" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
