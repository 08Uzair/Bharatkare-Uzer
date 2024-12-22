import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Arrow from "./Arrow";
import arr from "../../assets/w-arrow.png";
import axios from "axios";
const Card4 = ({ selectedCategory }) => {
  const [data, setData] = useState([]);
  // console.log(data);

  useEffect(() => {
    axios
      .get("https://bharatkare.com/wp-json/wp/v2/posts?categories=139")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the subcategories!", error);
      });
  }, []);

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.title.rendered === selectedCategory);
  const navigate = useNavigate();
  const handelNavigate = (slug, content, title) => {
    navigate(`/services/${slug}`, {
      state: {
        slug: slug,
        title: title,
        content: content,
      },
    });
  };
  return (
    <div className="card4Box flex flex-wrap items-center justify-center flex-col w-[85%]">
      {filteredData.map((item, index) => (
        <button
          onClick={() =>
            handelNavigate(
              item.slug,
              item.content.rendered,
              item.title.rendered
            )
          }
          className="w-[100%] text-start flex items-center justify-center flex-col"
        >
          <div
            key={index}
            className="arrbutton  w-full h-[402.4px] mb-[2rem] bg-[#adc3e8] cardClip1 hover:bg-[#fff] cursor-pointer p-[3rem]"
          >
            <div className="mb-[-2rem]">
              <Arrow clr="#3266c1" bg={arr} />
            </div>
            <h2 className="text-[#031b4e] text-[12px] font-semibold">
              {" "}
              <span className="text-[3rem] font-medium">.</span>{" "}
              {item.title.rendered}
            </h2>
            <h2 className="text-[#031b4e] text-[2rem]">
              {item.title.rendered}
            </h2>
            <p className="text-[#6e778c] text-[15px] mt-[1.5rem]">
              our Services The medical professional doctors available in the
              clinic
            </p>
              <img
              className="smallIcon"
                src={item.content.rendered?.split('src="')[1]?.split('"')[0]}
                alt={item.sname}
              />
          </div>
        </button>
      ))}
    </div>
  );
};

export default Card4;
