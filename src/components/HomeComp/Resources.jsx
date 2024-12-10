import React from "react";
import resourcesImg from "../../assets/resources.png";

const Resources = () => {
  return (
    <div className=" mx-auto py-6 px-6 lg:px-20 ">
      <h2 className=" font-semibold text-[32px]">Resources</h2>
      <div className="w-full h-80 mt-4 lg:h-[28rem] mx-auto filter grayscale">
        <img
          src={resourcesImg}
          className=" w-full h-full object-cover rounded-2xl"
          alt=""
        />
      </div>
      <div className=" md:flex items-center justify-between md:mt-4 lg:mt-8">
        <p className=" my-4">
          Reports & Publications, stay informed on our work and impact through
          annual reports, newsletters, and detailed studies that showcase how
          your support has helped us grow
        </p>
        <div className="bg-[#F8F9FA] py-2 px-4 sm:px-2 md:py-0 border-2 border-[#EBF9F4] rounded-xl sm:rounded-full sm:flex sm:flex-row justify-between items-center w-full lg:w-3/4 md:mx-4 lg:mx-14 ">
          <input
            type="email"
            className=" text-black bg-[#F8F9FA] w-full text-left sm:w-72 placeholder-[#989EB3] outline-none"
            placeholder="Enter your email address"
          />
          <button className=" w-full sm:w-1/2 lg:w-[40%] 2xl:w-[25%] font-medium bg-[rgba(19,168,113,1)] text-white rounded-full py-2 duration-200 mt-4 sm:mt-1 mb-1 sm:mb-1 hover:bg-transparent hover:text-[rgba(19,168,113,1)] hover: border-[rgba(19,168,113,1)] border-2">
            Stay updated
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
