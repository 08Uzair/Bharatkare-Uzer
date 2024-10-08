import React from "react";

const CheckMark = () => {
  const data = [
    "That extremely painful or again is there anyone",
    " Indignation and dislike men who are so beguiled",
    "Desires these cases are perfectly simple easy distinguish.",
    " That extremely painful or again that is there anyone.",
    " Starchy foods are a key food group in healthy eating",
    " People are sleeping much less than they did in the past",
    " Don’t smoke or use drugs, and only drink in moderation",
    " Your body is full of trillions of bacteria, viruses and fungi",
  ];
  return (
    <>
      <div className="checOut flex items-center justify-evenly text-start mt-[4rem]">
        <div>
          {data?.slice(0, 4).map((item) => {
            return (
              <>
                <div className="flex items-center justify-start">
                  <span class=" text-blue-700 text-[1.7rem] material-symbols-outlined">
                    check
                  </span>
                  <div className="m-4"> {item}</div>
                  <br />
                </div>
              </>
            );
          })}
        </div>
        <div>
          {data?.slice(4, 8).map((item) => {
            return (
              <>
                <div className="flex items-center justify-start">
                  <span class=" text-blue-700 text-[1.7rem] material-symbols-outlined">
                    check
                  </span>
                  <div className="m-4"> {item}</div>
                  <br />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CheckMark;
