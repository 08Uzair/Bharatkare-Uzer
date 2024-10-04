import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Diseases = () => {
  const [showMore, setShowMore] = useState(true);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(data);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://bharatkare.com/wp-json/wp/v2/posts?categories=99"
        );
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const filteredData = showMore ? data?.slice(0, 9) : data || [];
  console.log(filteredData);

  const handelNavigate = (slug, content, title) => {
    navigate(`/disease/${slug}`, {
      state: {
        slug: slug,
        title: title,
        content: content,
      },
    });
  };
  return (
    <>
      <div className="flex items-center justify-center items-center flex-col">
        <div className="flex items-center justify-center flex-wrap text-center mr-[8rem] ml-[8rem]">
          {filteredData?.map((item, index) => {
            return (
              <>
                <button
                  onClick={() =>
                    handelNavigate(
                      item.slug,
                      item.content.rendered,
                      item.title.rendered
                    )
                  }
                >
                  <div className="m-4 text-center " key={index}>
                    <img
                      className="p-1 bg-[#fff] rounded-[15px]"
                      src={
                        item.content.rendered?.split('src="')[1].split('"')[0]
                      }
                    />
                    <div className=" w-[82%] text-center ">
                      <h1 className=" mt-3 text-[10px] text-[#505257] text-center">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                </button>
              </>
            );
          })}
        </div>
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="mt-[1rem] mb-[2rem]"
        >
          {showMore ? <Button text="VIEW MORE" /> : <Button text="VIEW LESS" />}
        </button>
      </div>
    </>
  );
};

export default Diseases;
