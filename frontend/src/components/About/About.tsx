import React from "react";

import AboutPage from "./AboutPage";
import AboutInfo from "./AboutInfo";
import TestimonialPage from "./Testimonial";

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <AboutPage />
      <AboutInfo />
      <TestimonialPage />
    </div>
  );
};

export default About;
