import React from "react";
import backgroundImage from "../../assets/About.png";

const About = () => {
  return (
    <div
      className="bg-center bg-cover p-6 lg:p-20 py-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-white max-w-[500px] p-6 rounded-xl">
        <h2 className=" font-semibold text-[32px] mb-2">About Us</h2>
        <h3 className=" font-semibold mb-2">Our Mission</h3>
        <p className=" mb-12">
          Our goal is simple yet powerful, to nurture and uplift vulnerable
          individuals in our communities by providing food, shelter, and support
          with kindness at the heart of everything we do.
        </p>
        <h3 className="font-semibold mb-2">Our Story</h3>
        <p>
          What began as a small group of people sharing meals with the homeless
          has grown into a community-driven organization dedicated to empowering
          orphans, widows, and those in need. With every step, we are inspired
          by the strength and resilience of those we serve.
        </p>
      </div>
    </div>
  );
};

export default About;
