import React from "react";
import founderImg from "../../assets/Founder.png";
import rebeImg from "../../assets/Rebe.png";
import SarahImg from "../../assets/Sarah.png";
import MikeImg from "../../assets/Mike.png";
import VicImg from "../../assets/Vic.png"

const Leadership = () => {
  const teamMembers = [
    {
      name: "Samuel Abam",
      role: "Founder",
      image: founderImg,
    },
    {
      name: "Rebecca Opuogbo",
      role: "Volunteer",
      image: rebeImg,
    },
    {
      name: "Sarah Otokini",
      role: "Volunteer",
      image: SarahImg,
    },
    {
      name: "Michael Timipre",
      role: "Volunteer",
      image: MikeImg,
    },
    {
      name: "Victoria Bozimo",
      role: "Volunteer",
      image: VicImg,
    },
  ];

  return (
    <div className=" px-6 lg:px-20 py-10">
      <h1 className="text-left md:text-center font-semibold text-[32px]">
        Leadership Team
      </h1>
      <div className="max-w-8xl mx-auto py-2">
        <h2 className="text-center mb-8">
          Meet the passionate people behind the mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <img
              src={teamMembers[0].image}
              alt={teamMembers[0].name}
              className="w-full h-full object-cover filter grayscale rounded-lg"
            />
            <h3 className="mt-4 text-lg font-normal">{teamMembers[0].name}</h3>
            <p className="text-[14px] font-semibold">{teamMembers[0].role}</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            {teamMembers.slice(1).map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-60 h-60 lg:w-72 xl:w-full object-cover filter grayscale rounded-lg"
                />
                <h3 className="mt-4 text-lg font-normal">{member.name}</h3>
                <p className="text-[14px] font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Partners section */}
      <h2 className=" font-semibold text-center mt-6">Partners</h2>
      <p className=" text-center">
        We are grateful to our partners—local businesses, nutrition companies,
        and individual supporters—whose collaboration fuels our ability to bring
        nutritious meals and hope to our community.
      </p>
    </div>
  );
};

export default Leadership;
