import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  // const [open, setOpen] = React.useState(false)
  // state for menu visibilty
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* Logo Section */}
          <div className=" text-2xl flex items-center gap-2 font-bold uppercase">
            <img src={logo}/>
          </div>
          {/* Menu Section */}
          <div className=" hidden md:block">
            <ul className="flex items-center gap-6 text-light">
              <li className="py-1 text-center">
                <Link to="/" className=" font-normal text-[16px]">
                  Home
                </Link>
              </li>
              <li className="py-1 text-center">
                <Link to="/ourPrograms" className=" font-normal text-[16px]">
                  Our Programs
                </Link>
              </li>
              <li className="py-1 text-center">
                <Link to="/about" className=" font-normal text-[16px]">
                  About
                </Link>
              </li>
              <li className="py-1 text-center">
                <Link to="/gallery" className=" font-normal text-[16px]">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          {/* Icon Section */}
          <div className="flex items-center gap-4">
            <button className=" font-normal bg-[rgba(19,168,113,1)] hover:bg-transparent text-white hover:text-[rgba(19,168,113,1)] hover: border-[rgba(19,168,113,1)] border-2 rounded-full px-6 py-2 duration-200 hidden md:block">
              Join Us
            </button>
          </div>
          {/* Mobile Hamburger Menu Section */}
          <div className=" md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
