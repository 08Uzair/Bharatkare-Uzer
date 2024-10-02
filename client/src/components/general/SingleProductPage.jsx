import React, { useState } from "react";
import bg from "../../assets/shop.webp";
import CustomWall from "./CustomWall";
import SingleProductTabs from "./SingleProductTabs";
import RelatedProducts from "./RelatedProducts";
import Button from "./Button";
const SingleProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      <div className="mb-[4rem]">
        <CustomWall txt1="SHOP" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4 fr 1fr",
        }}
        className="min-h-screen bg-blue-50 py-10"
      >
        <div></div>
        <div>
          {" "}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
            <div className="w-[450px] bg-white p-5 rounded-lg shadow-md flex items-center justify-center">
              <img src={bg} alt="Product" />
            </div>

            {/* Right side: Product Details */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              {/* Product Name */}
              <h1 className="text-3xl font-semibold text-gray-900">
                Pressure Bladder
              </h1>

              {/* Rating */}
              <div className="flex items-center mt-3">
                <div className="text-yellow-500">★★★★☆</div>
                <p className="ml-2 text-sm text-gray-500">
                  (1 customer review)
                </p>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-center space-x-4">
                <p className="text-xl line-through text-gray-400">$11.05</p>
                <p className="text-2xl font-bold text-blue-600">$10.05</p>
              </div>

              {/* Short description */}
              <p className="mt-4 text-gray-700">This is an external product.</p>

              {/* Quantity Selector */}
              <div className="mt-7 flex items-center space-x-4">
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="w-12 p-[10px] border border-gray-300 text-center rounded-md"
                />
                <div className="mt-[1rem] w-[40%]">
                  <Button text="Add to Cart" />
                </div>
              </div>

              {/* SKU and Category */}
              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  SKU: <span className="font-medium">wp-pennant</span>
                </p>
                <p className="text-sm text-gray-500">
                  Category:{" "}
                  <span className="font-medium text-blue-600">Accessories</span>
                </p>
              </div>
            </div>
          </div>
          {/* Tabs for Description and Reviews */}
          <div className="m-[8rem]">
            <SingleProductTabs />
          </div>
          <div>
            <RelatedProducts />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SingleProductPage;
