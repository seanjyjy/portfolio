import React from "react";

import WordArrowButton from "@commons/WordArrowButton";
import Keywords from "@commons/Keywords";

import LandingImg from "../../images/landingPageImg.svg";
import ARROWIMGBLUE from "../../images/thin-arrow-blue.svg";
import BubbleImg from "../../images/bubble.svg";

import "./About.scss";

const AboutPage = () => {
  function scrollToAbout() {
    document.getElementById("aboutInfoAnchor")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="about-page">
      <div className="aboutContainer">
        <div className="aboutIntroduction">
          <h1 className="aboutProse">
            Hi I'm Sean, a{" "}
            <Keywords
              text="frontend engineer & aspiring full stack engineer."
              typewritter={true}
            />
          </h1>
          <h5 className="aboutProseMini">
            {" "}
            I enjoy creating softwares that benefits others. Also, I enjoy
            dabbling with new concepts regarding both Frontend and Backend
            development and write some blogs.
          </h5>
          <div className="learnMore">
            <WordArrowButton
              text="Learn more about Sean"
              imgSrc={ARROWIMGBLUE}
              onClick={scrollToAbout}
            />
          </div>
        </div>
        <div className="aboutImg">
          <img src={LandingImg} alt="sean lum" />
        </div>
      </div>
      <div className="about-object3" />
      <div className="about-object4" />
      <div className="about-object5" />
      <img src={BubbleImg} alt="bubble floating" className="aboutBubble" />
    </section>
  );
};

export default AboutPage;
