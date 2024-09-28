import React from "react";
import log from "../../assets/Disease/Carpal-Tunnel.png";
const Diseases = () => {
  return (
    <>
      <div className="flex item-center justify-center">
        <div>
          <img src={log} />
          <h1 className="text-[13px] text-[#505257] mt-[10px]">
            Carpal-Tunnel
          </h1>
        </div>
      </div>
    </>
  );
};

export default Diseases;
