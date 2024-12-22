import React, { useState } from "react";
import Button from "./Button";
import bg from "../../assets/shop.webp"
const CheckOut = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "California",
    zipCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    // console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left side form */}
          <div className="col-span-2">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Email address"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-6">Billing Address</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="First name"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Address"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="w-full">
                  <label htmlFor="city" className="block text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="City"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="state" className="block text-gray-700 mb-2">
                    State
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Aurangabad">Aurangabad</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Jammu-Kashmir">Jammu-Kashmir</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Gujrat">Gujrat</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="w-full">
                  <label htmlFor="zipCode" className="block text-gray-700 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="ZIP Code"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Phone (optional)"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-6">Payment Options</h2>
              <div className="mb-6">
                <div className="border border-red-500 text-red-700 bg-red-100 p-4 rounded-lg">
                  <p>
                    There are no payment methods available. This may be an error
                    on our side. Please contact us if you need any help placing
                    your order.
                  </p>
                </div>
              </div>

              <div className="mt-[1rem] w-[80%]">
                <Button text="Add to Cart" />
              </div>
            </form>
          </div>

          {/* Right side - Order Summary */}
          <div className="col-span-1 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between items-center">
              <div>
                <img src={bg}/>
              </div>
                <p className="text-gray-700">Pressure Bladder</p>
                <span className="text-gray-500 line-through">$11.05</span>
                <span className="text-gray-900">$10.05</span>
              </div>
              <p className="text-gray-500 text-sm">
                This is an external product.
              </p>
            </div>
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-700">Subtotal</p>
                <span className="text-gray-900">$20.10</span>
              </div>
            </div>
            <div className="flex justify-between items-center font-bold text-lg">
              <p>Total</p>
              <span>$20.10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
