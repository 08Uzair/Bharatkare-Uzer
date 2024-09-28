import React from "react";
import CustomWall from "../components/general/CustomWall";

const Cart = () => {
  return (
    <>
      <CustomWall txt1="Cart" />
      <div className="grid1">
        <div></div>
        <div className="flex items-center justify-center flex-col">
          <span class="cart-icon material-symbols-outlined">
            sentiment_dissatisfied
          </span>
          <div className="text-[20px] text-[#031b4e] mt-[1rem] mb-[3rem] font-semibold">
            Your cart is currently empty!
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Cart;
