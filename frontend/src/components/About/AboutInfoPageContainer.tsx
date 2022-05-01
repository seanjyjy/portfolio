import React from "react";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "@hooks";

import WordArrowButton from "@commons/WordArrowButton";
import Keywords from "@commons/Keywords";

import type { aboutInfo } from "@types";
import { aboutInfo2 } from "../../constants";

import SEANIMG from "../../images/sean.jpg";
import SEANIMG2 from "../../images/sean.png";
import ARROWIMGBLUE from "../../images/thin-arrow-blue.svg";

import "./AboutInfoPageContainer.scss";

const AboutInfoPageRows = ({ header, info, imgSrc }: aboutInfo) => {
  return (
    <div className="aboutInfoPageRows">
      <div className="aboutInfoRowsHeader">
        <img src={imgSrc} alt={header} />
        <div>{header}</div>
      </div>
      <div className="aboutInfoRowsInfo">{info}</div>
    </div>
  );
};

const AboutInfoPageContainer = () => {
  const { width } = useWindowSize();
  const { ref: aboutRef, inView: aboutRefInView } = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: aboutInfoFactsRef, inView: aboutInfoFactsRefInView } = useInView(
    {
      /* Optional options */
      threshold: 0.3,
      triggerOnce: true,
    }
  );
  const {
    ref: aboutInfoContainerRef,
    inView: aboutInfoContainerRefInView,
  } = useInView({
    /* Optional options */
    threshold: 0.6,
    triggerOnce: true,
  });

  function scrollToSkills() {
    document.getElementById("skillsAnchor")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  if (width == null) return null;

  if (width < 960) {
    return (
      <div className="aboutInfoPageContainer">
        <div
          className={`aboutInfo ${
            aboutRefInView ? "header-hidden" : "header-shown"
          }`}
          ref={aboutRef}
        >
          About
        </div>
        <div
          className={`aboutInfoFacts ${
            !aboutInfoFactsRefInView ? "header-hidden" : "header-shown"
          }`}
          ref={aboutInfoFactsRef}
        >
          Some <Keywords text="bytes of information" /> about myself
        </div>
        <div className="aboutSeanPng">
          <div>
            <img src={SEANIMG} alt="sean lum" />
          </div>
        </div>
        {aboutInfo2.map((info) => (
          <AboutInfoPageRows {...info} key={info.header} />
        ))}
      </div>
    );
  }

  return (
    <div className="aboutInfoPageContainer">
      <div
        className={`aboutInfo ${!aboutRefInView ? "lr-hidden" : "lr-shown"}`}
        ref={aboutRef}
      >
        About
      </div>
      <div
        className={`aboutInfoFacts ${
          !aboutInfoFactsRefInView ? "lr-hidden" : "lr-shown"
        }`}
        ref={aboutInfoFactsRef}
      >
        Some <Keywords text="bytes of information" /> about myself
      </div>
      <div
        className={`aboutInfoPageContainer2 ${
          !aboutInfoContainerRefInView ? "td-hidden" : "td-shown"
        }`}
        ref={aboutInfoContainerRef}
      >
        <div className="aboutInfoPageInformation">
          {aboutInfo2.map((info) => (
            <AboutInfoPageRows {...info} key={info.header} />
          ))}
          <div className="aboutInfoToSkills">
            <WordArrowButton
              text="Check out Sean's skills"
              imgSrc={ARROWIMGBLUE}
              onClick={scrollToSkills}
            />
          </div>
        </div>
        <div className="aboutSeanPng">
          <div>
            <img src={SEANIMG2} alt="sean lum" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfoPageContainer;
