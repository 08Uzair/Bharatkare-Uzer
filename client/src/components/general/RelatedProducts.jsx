import React from "react";
import { NavLink } from "react-router-dom";
import bg from "../../assets/shop.webp";
import Button from "./Button";
const data = [
  {
    productName: "Pressure Bladder",
    originalPrice: 11.05,
    currentPrice: 10.05,
    rating: 4.0,
    totalRatings: 1,
  },
  {
    productName: "Stethoscope",
    originalPrice: 18.0,
    currentPrice: 18.0,
    rating: 4.0,
    totalRatings: 1,
  },
  {
    productName: "Sanitary Mask",
    originalPrice: 20.0,
    currentPrice: 18.0,
    rating: 4.0,
    totalRatings: 1,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-[1rem]">
      <h2 className="text-xl font-semibold">{product.productName}</h2>
      <div>
        <img className="cursor-pointer rounded-[25px]" src={bg} />
      </div>
      <div className="mt-2">
        <span className="text-gray-500 line-through">
          ${product.originalPrice.toFixed(2)}
        </span>
        <span className="text-green-600 text-lg font-bold ml-2">
          ${product.currentPrice.toFixed(2)}
        </span>
      </div>
      <div className="flex items-center mt-2">
        <div className="text-yellow-500 text-sm">{`⭐ ${product.rating}`}</div>
        <div className="ml-2 text-gray-500 text-sm">{`(${product.totalRatings} customer rating)`}</div>
      </div>
      <div className="mt-[1rem] w-[48%]">
        <Button text="Add to Cart" />
      </div>
    </div>
  );
};

const RelatedProducts = () => {
  return (
    <div className=" flex items-center justify-center mb-[2rem]">
      {data.map((product, index) => (
        <NavLink to="/singleProduct">
          <ProductCard key={index} product={product} />
        </NavLink>
      ))}
    </div>
  );
};

export default RelatedProducts;
