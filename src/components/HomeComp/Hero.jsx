import React from "react";
import big from "../../assets/bigChild.jpg";
import medium from "../../assets/smallChildLefft.jpg";
import small from "../../assets/twoChildren.jpg";

const HomePage = () => {
  return (
    <div className="bg-[#f0fdf4] flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col lg:flex-row items-center px-6 lg:px-20 py-10">
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col items-start">
          <p className="font-bold text-[42px]">
            Every act of kindness has the{" "}
            <span className=" bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              power to heal
            </span>
          </p>
          <p className="mt-4 text-gray-600">
            Join us in uplifting orphans, widows, and the homeless through
            compassionate support.
          </p>
          <button className=" font-medium bg-[rgba(19,168,113,1)] text-white rounded-full px-6 py-2 duration-200 my-6 hover:bg-transparent hover:text-[rgba(19,168,113,1)] hover: border-[rgba(19,168,113,1)] border-2">
            Join Us
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative mt-10 lg:mt-0">
          {/* Slant Lines */}
          <div className="absolute w-full h-full top-10 -left-110">
            {/* Web View: Two slant lines */}
            <div className="hidden sm:flex justify-center items-center rotate-[147deg] absolute bottom-48 -right-[40rem] lg:rotate-[150deg] lg:top-40 lg:-left-32">
              <div
                className="bg-gradient-to-r from-[#BBD4F2] to-[#BBD4F2] sm:from-[#BDE6D7] sm:to-[#BBD4F2]"
                style={{
                  width: "1000px",
                  height: "60px",
                  clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)", // Defines the trapezium shape
                }}
              ></div>
            </div>

            <div className="hidden sm:flex justify-center items-center rotate-[147deg] absolute bottom-48 -right-[28rem] lg:rotate-[150deg] lg:top-40 lg:-left-96">
              <div
                className="bg-gradient-to-r from-[#BBD4F2] to-[#BBD4F2] sm:from-[#BDE6D7] sm:to-[#BBD4F2]"
                style={{
                  width: "1000px",
                  height: "60px",
                  clipPath: "polygon(0% 0%, 89% 0%, 100% 100%, 0% 100%)", // Defines the trapezium shape
                }}
              ></div>
            </div>

            {/* Mobile View: One slant line */}
            <div className=" sm:hidden flex justify-center items-center rotate-[148deg] absolute bottom-24 -right-72">
              <div
                className="bg-gradient-to-r from-[#BBD4F2] to-[#BBD4F2] sm:from-[#BDE6D7] sm:to-[#BBD4F2]"
                style={{
                  width: "500px",
                  height: "60px",
                  clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)", // Defines the trapezium shape
                }}
              ></div>
            </div>
          </div>

          {/* Main Circle */}
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 md:w-96 md:h-96 xl:w-[26rem] xl:h-[26rem] mx-auto rounded-full border-8 border-transparent bg-gradient-to-r bg-white from-blue-200 to-green-200 overflow-hidden">
            <img
              src={big} // Replace with actual image path
              alt="Smiling Child"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Smaller Circles */}
          <div
            className="absolute -bottom-4 -left-2 
  md:bottom-0 md:left-0 
  xl:bottom-2 xl:left-14 
  ixl:left-36 ixl:bottom-0 
  duration-200 ease-in-out 
  w-28 h-28 lg:w-32 lg:h-32 
  rounded-full border-4 border-transparent 
  bg-gradient-to-r bg-white from-blue-200 to-green-200 overflow-hidden"
          >
            <img
              src={medium} // Replace with actual image path
              alt="Small Circle"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="absolute top-12 -right-14 md:top-14 md:-right-12 lg:top-16 lg:-right-4 lg:w-28 lg:h-28 xl:top-20 xl:right-4 ixl:top-32 ixl:right-20 w-24 h-24 rounded-full border-4 border-transparent bg-gradient-to-r bg-white from-blue-200 to-green-200 overflow-hidden">
            <img
              src={small} // Replace with actual image path
              alt="Small Circle 2"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
