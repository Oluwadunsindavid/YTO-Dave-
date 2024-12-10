import React from "react";

const Gallery = () => {
  return (
    <div className=" px-6 lg:px-20 py-0">
      <h2 className=" font-semibold text-[32px] text-center">Gallery</h2>
      <p className=" text-center my-4">
        Browse through moments captured during our events and programs.
      </p>
      <div className=" space-y-4 mt-6 sm:space-y-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        <div className=" bg-[#F4CFE8] rounded-xl h-56"></div>
        <div className=" bg-[#F4CFE8] rounded-xl h-56"></div>
        <div className=" bg-[#F4CFE8] rounded-xl h-56"></div>
        <div className=" bg-[#F4CFE8] rounded-xl h-56"></div>
        <div className=" bg-[#F4CFE8] rounded-xl h-56"></div>
        <div className=" bg-[#F4CFE8] rounded-xl h-56"></div>
      </div>
      <p className=" text-center my-4">
        See first-hand stories, behind-the-scenes footage, and testimonials from
        those whose lives you’ve touched. Each video showcases the impact of our
        collective efforts.
      </p>
      <div className=" space-y-4 mt-6 sm:space-y-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        <div className=" bg-[#F4CFE8] rounded-xl h-52"></div>
        <div className=" bg-[#F4CFE8] rounded-xl h-52"></div>
        <div className=" bg-[#F4CFE8] rounded-xl h-52"></div>
        <div className=" bg-[#F4CFE8] rounded-xl h-52"></div>
        <div className=" bg-[#F4CFE8] rounded-xl h-52"></div>
        <div className=" bg-[#F4CFE8] rounded-xl h-52"></div>
      </div>
    </div>
  );
};

export default Gallery;
