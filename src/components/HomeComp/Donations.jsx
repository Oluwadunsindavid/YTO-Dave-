import React from "react";
import onlineImg from "../../assets/onlineDonation.png";
import inKindImg from "../../assets/inKindDonation.png";
import CorpGivingImg from "../../assets/corperateGiving.png";

const Donations = () => {
      const datas = [
        {
          h2: "Online Donation",
          para: "Give the gift of hope with a secure online donation. Your contributions directly support the lives of those we serve, providing food, shelter, and services that make a difference.",
          img: onlineImg,
        },
        {
          h2: "In-Kind Donations",
          para: "Consider donating food, clothing, or essential supplies. Every item helps provide warmth and dignity to individuals facing hardship.",
          img: inKindImg,
        },
        {
          h2: "Corporate Giving",
          para: "Businesses can make a profound impact by supporting our mission through donations, sponsorship, or volunteer programs. Together, we can create a stronger community.",
          img: CorpGivingImg,
        },
      ];

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 px-6 lg:px-20 gap-4 sm:gap-8 py-10">
      <div className=" sm:flex sm:items-center sm:justify-center">
        <h2 className=" text-center font-semibold text-[32px] mb-4">
          Donations
        </h2>
      </div>
      {datas.map((data, index) => (
        <div key={index} className=" rounded-3xl border-2 border-[#EBF9F4]">
          <div className=" p-4">
            <h2 className=" font-semibold text-[18px] mb-4">{data.h2}</h2>
            <p className=" leading-7">
             {data.para}
            </p>
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
      {/* <div className=" rounded-3xl border-2 border-[#EBF9F4]">
        <div className=" p-4">
          <h2 className=" font-semibold text-[18px] mb-4">Online Donation</h2>
          <p className=" leading-7">
            Give the gift of hope with a secure online donation. Your
            contributions directly support the lives of those we serve,
            providing food, shelter, and services that make a difference.
          </p>
        </div>
        <div className=" w-full">
          <img
            src={onlineImg}
            className="w-full h-full object-cover filter grayscale rounded-b-3xl"
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
};

export default Donations;
