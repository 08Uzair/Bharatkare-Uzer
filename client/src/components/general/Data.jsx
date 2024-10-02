import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <div>
      <h2>Subcategories for Parent Category ID 99 </h2>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Data;
