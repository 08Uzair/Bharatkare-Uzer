import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import bg from "../../assets/bg6.webp";
import Button from "./Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState(""); // Updated state to city
  const [disease, setDisease] = useState("");
  const [email, setEmail] = useState("");
  const [selectDisease, setSelectDisease] = useState([]);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    // Fetch posts (diseases) from the API
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

    // Fetch the list of cities
    const fetchCities = async () => {
      // Sample list of cities (you can replace this with a real API call)
      const cities = [
        "Talegaon-dabhade",
        "Vadgaon-maval",
        "Dehu",
        "Khadkale",
        "Phoenix",
      ];
      setCityList(cities);
    };

    fetchPosts();
    fetchCities();
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Number: number,
      City: city, // Include city in form data
      Diseases: disease,
      Email: email,
      Status: "Pending", // Set initial status to "Pending"
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
          // If patient does not exist, proceed with form submission
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
              // Clear form fields after submission
              setName("");
              setNumber("");
              setCity("");
              setDisease("");
              setEmail("");
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
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="bg-white rounded-[25px] shadow-lg flex overflow-hidden w-full max-w-5xl">
        {/* Left Section: Image */}
        <div className="contactImg w-full md:w-1/2">
          <img src={bg} alt="Doctor" className="w-full h-full object-cover" />
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mt-[3rem] mb-[1rem]">
            <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full uppercase text-xs tracking-wide">
              Contact Us
            </button>
          </div>

          <h2 className=" cont-text text-[48px] leading-[60px]  font-medium text-[#031b4e] mb-6">
            Make an appointment
            <br />
            apply for treatments
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="inputField w-1/2 px-4 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="inputField w-1/2 px-4 py-2"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                maxLength="10"
                required
                onInput={(e) => {
                  if (e.target.value.length > 10) {
                    e.target.value = e.target.value.slice(0, 10); // Limit to 10 digits
                  }
                }}
              />
            </div>

            <div className="flex space-x-4">
              {/* City Dropdown */}
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="inputField w-1/2 px-4 py-2"
                required
              >
                <option value="">Select City</option>
                {cityList.map((cityItem, index) => (
                  <option key={index} value={cityItem}>
                    {cityItem}
                  </option>
                ))}
              </select>

              {/* Disease Dropdown */}
              <select
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                className="inputField w-1/2 px-4 py-2"
                required
              >
                <option value="">Select Disease</option>
                {selectDisease?.map((item, index) => (
                  <option key={index} value={item.slug?.toUpperCase()}>
                    {item.slug?.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email *"
                className="inputField w-full px-4 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="cont-btn w-[60%]">
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

export default ContactForm;
