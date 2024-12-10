import React from "react";
import About from "../components/AboutComp/About";
import Leadership from "../components/AboutComp/Leadership";
import Resources from "../components/HomeComp/Resources";
import Footer from "../components/Footer";

const Aboutpage = () => {
  return (
    <div>
      <About />
      <Leadership/>
      <Resources/>
      <Footer/>
    </div>
  );
};

export default Aboutpage;
