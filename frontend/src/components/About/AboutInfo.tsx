import React from "react";

import Skills from "./Skills";
import AboutInfoPageContainer from "./AboutInfoPageContainer";

import "./AboutInfo.scss";

const AboutInfo = () => {
  return (
    <section className="aboutInfoPage">
      <div id="aboutInfoAnchor" />
      <AboutInfoPageContainer />
      <Skills />
    </section>
  );
};

export default AboutInfo;
