import React from "react";

import Skills from "./Skills";
import AboutInfoPageContainer from "./AboutInfoPageContainer";

import "./AboutInfo.scss";

const AboutInfo = () => {
  return (
    <div className="aboutInfoPage">
      <div id="aboutInfoAnchor" />
      <AboutInfoPageContainer />
      <Skills />
    </div>
  );
};

export default AboutInfo;
