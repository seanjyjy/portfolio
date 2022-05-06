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
        <title>Sean Lum's portfolio website</title>
        <meta
          name="description"
          content="Hi I'm Sean Lum. I am an aspiring frontend engineer who is looking to grow and collaborate with others."
        />
      </Helmet>
      <main className="about">
        <AboutPage />
        <AboutInfo />
        <TestimonialPage />
      </main>
    </>
  );
};

export default About;
