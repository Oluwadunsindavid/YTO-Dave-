import React from "react";
import OurPrograms from "../components/OurProgramsComp/OurPrograms";
import Volunteer from "../components/OurProgramsComp/Volunteer";
import Overview from "../components/HomeComp/Overview";
import Leadership from "../components/AboutComp/Leadership";
import Footer from "../components/Footer";

const OurProgramsPage = () => {
  return (
    <div>
      <OurPrograms />
      <Volunteer />
      <Overview />
      <Leadership />
      <Footer />
    </div>
  );
};

export default OurProgramsPage;
