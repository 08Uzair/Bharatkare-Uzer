import React, { useState } from "react";
import d1 from "../../assets/Diseases/ACL_Tear.png";
import d2 from "../../assets/Diseases/Abortion.png";
import d3 from "../../assets/Diseases/Adenoidectomy.png";
import d4 from "../../assets/Diseases/Appendectomy.png";
import d5 from "../../assets/Diseases/BreastAugmentation.png";
import d6 from "../../assets/Diseases/BreastLift.png";
import d7 from "../../assets/Diseases/BreastLump.png";
import d8 from "../../assets/Diseases/BreastReduction.png";
import d9 from "../../assets/Diseases/Carpal-Tunnel.png";
import d10 from "../../assets/Diseases/DeepVeinThrombosis.png";
import d11 from "../../assets/Diseases/DiabeticFootUlcers.png";
import d12 from "../../assets/Diseases/Fess.png";
import d13 from "../../assets/Diseases/Galstone.png";
import d14 from "../../assets/Diseases/Gynecosmatia.png";
import d15 from "../../assets/Diseases/Hernia.png";
import d16 from "../../assets/Diseases/Hip-Replacement.png";
import d17 from "../../assets/Diseases/Hydrocelectomy.png";
import d18 from "../../assets/Diseases/Hymenoplasty.png";
import d19 from "../../assets/Diseases/Hysterectomy.png";
import d20 from "../../assets/Diseases/IUI.png";
import d21 from "../../assets/Diseases/Icons-Circumcision.png";
import d22 from "../../assets/Diseases/InguinalHernia.png";
import d23 from "../../assets/Diseases/Ivf.png";
import d24 from "../../assets/Diseases/Knee-Replacement.png";
import d25 from "../../assets/Diseases/Labiaplasty.png";
import d26 from "../../assets/Diseases/Lasik3.png";
import d27 from "../../assets/Diseases/Lipoma.png";
import d28 from "../../assets/Diseases/Liposuction.png";
import d29 from "../../assets/Diseases/Mastoidectomy.png";
import d30 from "../../assets/Diseases/Meniscus-Tear.png";
import d31 from "../../assets/Diseases/Mtp.png";
import d32 from "../../assets/Diseases/PilonidalSinus.png";
import d33 from "../../assets/Diseases/ProstateEnlargement.png";
import d34 from "../../assets/Diseases/Rhinoplasty.png";
import d35 from "../../assets/Diseases/SebaceousCyst.png";
import d36 from "../../assets/Diseases/Septoplasty.png";
import d37 from "../../assets/Diseases/Shoulder-Replacement.png";
import d38 from "../../assets/Diseases/ShoulderDislocation.png";
import d39 from "../../assets/Diseases/SpineSurgery.png";
import d40 from "../../assets/Diseases/Thyroidectomy.png";
import d41 from "../../assets/Diseases/Tonsillectomy.png";
import d42 from "../../assets/Diseases/Tympanoplasty.png";
import d43 from "../../assets/Diseases/UmbilicalHernia.png";
import d44 from "../../assets/Diseases/Urology.png";
import d45 from "../../assets/Diseases/UterineFibroid.png";
import d46 from "../../assets/Diseases/Vaginoplasty.png";
import d47 from "../../assets/Diseases/Varicocele.png";
import d48 from "../../assets/Diseases/ZsrCircumcision.png";
import d49 from "../../assets/Diseases/cataract.png";
import d50 from "../../assets/Diseases/ectopicpregnancy.png";
import d51 from "../../assets/Diseases/endometriosis.png";
import d52 from "../../assets/Diseases/fissure.png";
import d53 from "../../assets/Diseases/fistula.png";
import d54 from "../../assets/Diseases/laparo.png";
import d55 from "../../assets/Diseases/piles.png";
import Button from "./Button";
import { NavLink } from "react-router-dom";
const Diseases = () => {
  const [showMore, setShowMore] = useState(true);
  const data = [
    {
      name: "ACL-Tear",
      img: d1,
    },
    {
      name: "Abortion",
      img: d2,
    },
    {
      name: "Adenoidectomy",
      img: d3,
    },
    {
      name: "Appendectomy",
      img: d4,
    },
    {
      name: "Breast-Augmentation",
      img: d5,
    },
    {
      name: "Breast-Lift",
      img: d6,
    },
    {
      name: "Breast-Lump",
      img: d7,
    },
    {
      name: "Breast-Reduction",
      img: d8,
    },
    {
      name: "Carpal-Tunnel",
      img: d9,
    },
    {
      name: "Deep-Vein-Thrombosis",
      img: d10,
    },
    {
      name: "Diabetic-Foot-Ulcers",
      img: d11,
    },
    {
      name: "Fess",
      img: d12,
    },
    {
      name: "Galstone",
      img: d13,
    },
    {
      name: "Gynecomastia",
      img: d14,
    },
    {
      name: "Hernia",
      img: d15,
    },
    {
      name: "Hip-Replacement",
      img: d16,
    },
    {
      name: "Hydrocelectomy",
      img: d17,
    },
    {
      name: "Hymenoplasty",
      img: d18,
    },
    {
      name: "Hysterectomy",
      img: d19,
    },
    {
      name: "IUI",
      img: d20,
    },
    {
      name: "Circumcision",
      img: d21,
    },
    {
      name: "Inguinal-Hernia",
      img: d22,
    },
    {
      name: "IVF",
      img: d23,
    },
    {
      name: "Knee-Replacement",
      img: d24,
    },
    {
      name: "Labiaplasty",
      img: d25,
    },
    {
      name: "Lasik",
      img: d26,
    },
    {
      name: "Lipoma",
      img: d27,
    },
    {
      name: "Liposuction",
      img: d28,
    },
    {
      name: "Mastoidectomy",
      img: d29,
    },
    {
      name: "Meniscus-Tear",
      img: d30,
    },
    {
      name: "MTP",
      img: d31,
    },
    {
      name: "Pilonidal-Sinus",
      img: d32,
    },
    {
      name: "Prostate-Enlargement",
      img: d33,
    },
    {
      name: "Rhinoplasty",
      img: d34,
    },
    {
      name: "SebaceousCyst",
      img: d35,
    },
    {
      name: "Septoplasty",
      img: d36,
    },
    {
      name: "Shoulder-Replacement",
      img: d37,
    },
    {
      name: "Shoulder-Dislocation",
      img: d38,
    },
    {
      name: "Spine-Surgery",
      img: d39,
    },
    {
      name: "Thyroidectomy",
      img: d40,
    },
    {
      name: "Tonsillectomy",
      img: d41,
    },
    {
      name: "Tympanoplasty",
      img: d42,
    },
    {
      name: "Umbilical-Hernia",
      img: d43,
    },
    {
      name: "Urology",
      img: d44,
    },
    {
      name: "Uterine-Fibroid",
      img: d45,
    },
    {
      name: "Vaginoplasty",
      img: d46,
    },
    {
      name: "Varicocele",
      img: d47,
    },
    {
      name: "ZSR Circumcision",
      img: d48,
    },
    {
      name: "Cataract",
      img: d49,
    },
    {
      name: "Ectopic-Pregnancy",
      img: d50,
    },
    {
      name: "Endometriosis",
      img: d51,
    },
    {
      name: "Fissure",
      img: d52,
    },
    {
      name: "Fistula",
      img: d53,
    },
    {
      name: "Laparoscopy",
      img: d54,
    },
    {
      name: "Piles",
      img: d55,
    },
  ];
  const filteredData = showMore ? data.slice(0, 9) : data || [];
  return (
    <>
      <div className="flex items-center justify-center items-center flex-col">
        <div className="flex items-center justify-center flex-wrap text-center mr-[8rem] ml-[8rem]">
          {filteredData.map((item, index) => {
            return (
              <>
                <NavLink to="/singleDisease">
                  <div className="m-4 text-center " key={index}>
                    <img
                      className="p-1 bg-[#fff] rounded-[15px]"
                      src={item.img}
                    />
                    <div className=" w-[82%] text-center ">
                      <h1 className=" mt-3 text-[10px] text-[#505257] text-center">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                </NavLink>
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
