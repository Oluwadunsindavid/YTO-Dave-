import React from "react";
import Hero from "../components/HomeComp/Hero";
import Overview from "../components/HomeComp/Overview";
import Resources from "../components/HomeComp/Resources";
import Donations from "../components/HomeComp/Donations";
import ContactForm from "../components/HomeComp/ContactForm";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Overview/>
      <Resources/>
      <Donations/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default Homepage;
