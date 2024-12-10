import React from "react";
import logo from "../../src/assets/Logo (1).svg";
import locationLogo from "../assets/locationLogo.svg";
import IGLogo from "../assets/IGVector.svg";
import FBLogo from "../assets/FBVector.svg";

const Footer = () => {
  return (
    <div className="p-6 lg:px-20 bg-[#073B28]">
      <section className=" md:flex justify-between items-center">
        <div className=" w-20 mx-auto md:mx-0">
          <img
            src={logo}
            className="w-full h-full object-cover filter grayscale"
            alt=""
          />
        </div>
        <section className="md:flex md:items-center md:justify-center md:gap-10">
          <div className="flex items-center justify-center gap-4 p-4">
            <div>
              <img src={locationLogo} alt="" />
            </div>
            <p className="text-white">Ibadan Nigeria</p>
          </div>
          <div className=" flex items-center justify-center gap-6 mb-6 md:mb-0">
            <p className="text-white">Follow us</p>
            <div className=" flex items-center justify-between gap-6">
              <a href="https://instagram.com">
                <img
                  src={IGLogo}
                  className=" w-full h-full object-cover "
                  alt=""
                />
              </a>
              <a href="https://facebook.com">
                <img
                  src={FBLogo}
                  className=" w-full h-full object-cover "
                  alt=""
                />
              </a>
            </div>
          </div>
        </section>
      </section>
      <p className="text-white text-center">
        Copyright © 2024 YTO All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
