import React from "react";
import donateImg from "../../assets/donate.png";
import volunteerImg from "../../assets/volunteer.png";
import contactImg from "../../assets/contactUs.png";

const Overview = () => {
  const datas = [
    {
      h2: "Donate",
      img: donateImg,
      para: "Make a difference today by contributing to our mission.",
    },
    {
      h2: "Volunteer",
      img: volunteerImg,
      para: "Give your time and heart to help those in need.",
    },
    {
      h2: "Contact Us",
      img: contactImg,
      para: "Reach out with questions or just to say hello!",
    },
  ];

  return (
    <div className="bg-[#f0fdf4] pb-2">
      {/* Overview Section */}
      <section className="w-full px-6 lg:px-20 py-10">
        <h2 className="text-3xl font-semibold text-black">Overview</h2>
        <p className="mt-4 text-gray-600">
          Our NGO is here to create a community where everyone has access to the
          essentials they deserve: nutritious meals, safe shelter, and a loving
          support network. Through your help, we bring hope and care to those
          who need it most.
        </p>
        <button className="font-medium hover:bg-[rgba(19,168,113,1)] hover:text-white rounded-full px-6 py-2 duration-200 my-6 bg-transparent text-[rgba(19,168,113,1)] border-[rgba(19,168,113,1)] border-2">
          Learn more
        </button>
      </section>
      {/* Images Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-4 items-center px-6 lg:px-20 mb-12">
        {datas.map((data, index) => (
          <section className="flex justify-center items-center">
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 w-80 lg:w-full"
            >
              <h2 className="text-center text-2xl font-semibold mb-2">
                {data.h2}
              </h2>
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                {/* Image */}
                <img
                  src={data.img}
                  alt="Donate"
                  className="w-full h-full object-cover filter grayscale border-2 border-[#ebf9f4] rounded-lg"
                />
                {/* Green Gradient Overlay with Text */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#EBF9F4] via-white/50 to-transparent">
                  <p className="text-center text-black font-normal mt-40 p-2">
                    {data.para}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>
    </div>
  );
};

export default Overview;
