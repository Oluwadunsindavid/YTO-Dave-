import React from "react";
import volImg from "../../assets/healthicons_coronary-care-unit-outline.svg";
import funImg from "../../assets/healthicons_eco-care-outline.svg"
import SponImg from "../../assets/healthicons_world-care-outline.svg"

const Volunteer = () => {
  const datas = [
    {
      img: volImg,
      h2: "Volunteer Opportunites",
      para: "    Becoming a volunteer is more than just giving time it’s about giving hope. We welcome people from all walks of life to join us in roles that match their skills and passions.",
    },
    {
      img: funImg,
      h2: "Fundraising Events",
      para: "    Becoming a volunteer is more than just giving time it’s about giving hope. We welcome people from all walks of life to join us in roles that match their skills and passions.",
    },
    {
      img: SponImg,
      h2: "Sponsor a Program",
      para: "    Becoming a volunteer is more than just giving time it’s about giving hope. We welcome people from all walks of life to join us in roles that match their skills and passions.",
    },
  ];

  return (
    <div className="px-6 lg:px-20 py-0">
      <div className=" bg-[#EBF9F4] sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 rounded-2xl space-y-4 sm:space-y-0 p-4 sm:p-6">
        {datas.map((data, index) => (
          <div key={index} className=" bg-white rounded-2xl p-3">
            <div className="w-14">
              <img src={data.img} className="w-full h-full object-cover" alt="" />
            </div>
            <h2 className=" text-left font-semibold text-[18px] text-[#13A871] mb-4">
              {data.h2}
            </h2>
            <div>
              <p>
                {data.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
