import React from "react";

import WordArrowButton from "@commons/WordArrowButton";
import Keywords from "@commons/Keywords";

import SEANIMG from "../../images/sean.jpg";
import ARROWIMGBLUE from "../../images/thin-arrow-blue.svg";
import { info } from "../../constants";

import "./About.scss";

const AboutPage = () => {
  function scrollToSkills() {
    document.getElementById("aboutInfoAnchor")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="about-page">
      <div className="aboutContainer">
        <div className="aboutContainerStyle">
          <div id="sean-img-holder">
            <div className="seanImgBg" />
            <img src={SEANIMG} alt="Sean Lum" />
          </div>
          <div className="aboutRightContainer">
            <div className="aboutProse">
              Hi I'm Sean, a{" "}
              <Keywords
                text={"frontend engineer & aspiring full stack engineer."}
              />{" "}
              I love to create softwares that benefits others
            </div>
            <div className="aboutMe">
              {info.map((item) => (
                <div key={item.header}>
                  <h3>{item.header}</h3>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
            <div className="learnMore">
              <WordArrowButton
                text="Learn more about Sean"
                imgSrc={ARROWIMGBLUE}
                onClick={scrollToSkills}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
