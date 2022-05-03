import React from "react";
import { Helmet } from "react-helmet";

import AboutPage from "./AboutPage";
import AboutInfo from "./AboutInfo";
import TestimonialPage from "./Testimonial";

import "./About.scss";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Some information about Sean." />
      </Helmet>
      <div className="about">
        <AboutPage />
        <AboutInfo />
        <TestimonialPage />
      </div>
    </>
  );
};

export default About;
