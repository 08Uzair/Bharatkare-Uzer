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
  //   {
  //     name: "ACL-Tear",
  //     img: d1,
  //   },
  //   {
  //     name: "Abortion",
  //     img: d2,
  //   },
  //   {
  //     name: "Adenoidectomy",
  //     img: d3,
  //   },
  //   {
  //     name: "Appendectomy",
  //     img: d4,
  //   },
  //   {
  //     name: "Breast-Augmentation",
  //     img: d5,
  //   },
  //   {
  //     name: "Breast-Lift",
  //     img: d6,
  //   },
  //   {
  //     name: "Breast-Lump",
  //     img: d7,
  //   },
  //   {
  //     name: "Breast-Reduction",
  //     img: d8,
  //   },
  //   {
  //     name: "Carpal-Tunnel",
  //     img: d9,
  //   },
  //   {
  //     name: "Deep-Vein-Thrombosis",
  //     img: d10,
  //   },
  //   {
  //     name: "Diabetic-Foot-Ulcers",
  //     img: d11,
  //   },
  //   {
  //     name: "Fess",
  //     img: d12,
  //   },
  //   {
  //     name: "Galstone",
  //     img: d13,
  //   },
  //   {
  //     name: "Gynecomastia",
  //     img: d14,
  //   },
  //   {
  //     name: "Hernia",
  //     img: d15,
  //   },
  //   {
  //     name: "Hip-Replacement",
  //     img: d16,
  //   },
  //   {
  //     name: "Hydrocelectomy",
  //     img: d17,
  //   },
  //   {
  //     name: "Hymenoplasty",
  //     img: d18,
  //   },
  //   {
  //     name: "Hysterectomy",
  //     img: d19,
  //   },
  //   {
  //     name: "IUI",
  //     img: d20,
  //   },
  //   {
  //     name: "Circumcision",
  //     img: d21,
  //   },
  //   {
  //     name: "Inguinal-Hernia",
  //     img: d22,
  //   },
  //   {
  //     name: "IVF",
  //     img: d23,
  //   },
  //   {
  //     name: "Knee-Replacement",
  //     img: d24,
  //   },
  //   {
  //     name: "Labiaplasty",
  //     img: d25,
  //   },
  //   {
  //     name: "Lasik",
  //     img: d26,
  //   },
  //   {
  //     name: "Lipoma",
  //     img: d27,
  //   },
  //   {
  //     name: "Liposuction",
  //     img: d28,
  //   },
  //   {
  //     name: "Mastoidectomy",
  //     img: d29,
  //   },
  //   {
  //     name: "Meniscus-Tear",
  //     img: d30,
  //   },
  //   {
  //     name: "MTP",
  //     img: d31,
  //   },
  //   {
  //     name: "Pilonidal-Sinus",
  //     img: d32,
  //   },
  //   {
  //     name: "Prostate-Enlargement",
  //     img: d33,
  //   },
  //   {
  //     name: "Rhinoplasty",
  //     img: d34,
  //   },
  //   {
  //     name: "SebaceousCyst",
  //     img: d35,
  //   },
  //   {
  //     name: "Septoplasty",
  //     img: d36,
  //   },
  //   {
  //     name: "Shoulder-Replacement",
  //     img: d37,
  //   },
  //   {
  //     name: "Shoulder-Dislocation",
  //     img: d38,
  //   },
  //   {
  //     name: "Spine-Surgery",
  //     img: d39,
  //   },
  //   {
  //     name: "Thyroidectomy",
  //     img: d40,
  //   },
  //   {
  //     name: "Tonsillectomy",
  //     img: d41,
  //   },
  //   {
  //     name: "Tympanoplasty",
  //     img: d42,
  //   },
  //   {
  //     name: "Umbilical-Hernia",
  //     img: d43,
  //   },
  //   {
  //     name: "Urology",
  //     img: d44,
  //   },
  //   {
  //     name: "Uterine-Fibroid",
  //     img: d45,
  //   },
  //   {
  //     name: "Vaginoplasty",
  //     img: d46,
  //   },
  //   {
  //     name: "Varicocele",
  //     img: d47,
  //   },
  //   {
  //     name: "ZSR Circumcision",
  //     img: d48,
  //   },
  //   {
  //     name: "Cataract",
  //     img: d49,
  //   },
  //   {
  //     name: "Ectopic-Pregnancy",
  //     img: d50,
  //   },
  //   {
  //     name: "Endometriosis",
  //     img: d51,
  //   },
  //   {
  //     name: "Fissure",
  //     img: d52,
  //   },
  //   {
  //     name: "Fistula",
  //     img: d53,
  //   },
  //   {
  //     name: "Laparoscopy",
  //     img: d54,
  //   },
  //   {
  //     name: "Piles",
  //     img: d55,
  //   },
  // ];

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
