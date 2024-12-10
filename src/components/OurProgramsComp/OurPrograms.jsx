import React from "react";
import HomelessImg from "../../assets/Homeless.png";
import OrphanImg from "../../assets/Orphans.png";
import WidowsImg from "../../assets/Widow.png";
import communityImg from "../../assets/Community.png";

const OurPrograms = () => {
  const datas = [
    {
      h2: "For the Homeless",
      para: "No one should face the world alone. For those without homes, we provide warm meals, safe shelter, and health services, fostering a sense of belonging and hope for a brighter tomorrow.",
      img: HomelessImg,
    },
    {
      h2: "For Orphans",
      para: "Our dedicated program for orphans focuses on providing not only nourishing meals but also emotional support and educational opportunities. We believe every child deserves a safe space to grow, learn, and experience the joys of childhood.",
      img: OrphanImg,
    },
    {
      h2: "For Widows & Widowers",
      para: "Losing a spouse is heartbreaking, and we’re here to ease the burden. Our program offers vital food assistance, job training, and companionship, helping widows and widowers rebuild and find comfort in the community.",
      img: WidowsImg,
    },
    {
      h2: "Community Outreach",
      para: "From nutrition workshops to local programs, our outreach efforts are designed to empower individuals to take control of their health and well-being, encouraging sustainable, positive change.",
      img: communityImg,
    },
  ];

  return (
    <>
      <div className=" sm:flex sm:items-center sm:justify-center">
        <h2 className=" text-left sm:text-center font-semibold text-[32px] mb-4">
          Our Programs
        </h2>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 px-6 lg:px-20 gap-4 sm:gap-8 py-10">
        {datas.map((data, index) => (
          <div key={index} className=" rounded-3xl border-2 border-[#EBF9F4]">
            <div className=" p-4">
              <h2 className=" font-semibold text-[18px] mb-4">{data.h2}</h2>
              <p className=" leading-7">{data.para}</p>
            </div>
            <div className=" w-full">
              <img
                src={data.img}
                className="w-full h-full object-cover filter grayscale rounded-b-3xl"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurPrograms;
