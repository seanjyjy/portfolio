import React from "react";

import Skills from "./Skills";

import type { aboutInfo } from "@types";
import { aboutInfo2 } from "../../constants";

import "./AboutInfo.scss";

const AboutInfoCards = ({ header, info, imgSrc, info2 }: aboutInfo) => {
  return (
    <div className="aboutCard">
      <div className="aboutHeader">
        <img src={imgSrc} alt="" />
        <div>{header}</div>
      </div>
      <div className="aboutInfoText">{info}</div>
    </div>
  );
};

const AboutInfo = () => {
  return (
    <div className="aboutInfoPage">
      <div id="aboutInfoAnchor" />
      <div className="aboutInfoPageContainer">
        <div className="aboutInfo">About</div>
        <div className="aboutInfoFacts">
          Some bytes of information about myself
        </div>
        <div className="aboutInfoCards">
          {aboutInfo2.map((info) => (
            <AboutInfoCards {...info} key={info.header} />
          ))}
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default AboutInfo;
