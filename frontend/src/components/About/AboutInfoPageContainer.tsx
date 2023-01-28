import React from "react";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "@hooks";

import WordArrowButton from "@commons/WordArrowButton";
import Keywords from "@commons/Keywords";

import type { aboutInfo } from "@types";
import { aboutInfo2 } from "../../constants";

import SEANIMG from "../../images/sean3.jpg";
import ARROWIMGBLUE from "../../images/thin-arrow-blue.svg";

import "./AboutInfoPageContainer.scss";

const AboutInfoPageRows = ({ header, info, imgSrc }: aboutInfo) => {
  return (
    <div className="aboutInfoPageRows">
      <div className="aboutInfoRowsHeader">
        <img src={imgSrc} alt={header} loading="lazy" />
        <h2>{header}</h2>
      </div>
      <p className="aboutInfoRowsInfo">{info}</p>
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
  const { ref: aboutInfoContainerRef, inView: aboutInfoContainerRefInView } =
    useInView({
      /* Optional options */
      threshold: 0.4,
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
      <section className="aboutInfoPageContainer">
        <h2
          className={`aboutInfo ${
            aboutRefInView ? "header-hidden" : "header-shown"
          }`}
          ref={aboutRef}
        >
          About
        </h2>
        <h1
          className={`aboutInfoFacts ${
            !aboutInfoFactsRefInView ? "header-hidden" : "header-shown"
          }`}
          ref={aboutInfoFactsRef}
        >
          Some <Keywords text="bytes of information" /> about myself
        </h1>
        <div className="aboutSeanPng">
          <img
            className="seanImg1"
            src=""
            alt="s"
            loading="lazy"
            height={943}
            width={1040}
          />
        </div>
        {aboutInfo2.map((info) => (
          <AboutInfoPageRows {...info} key={info.header} />
        ))}
      </section>
    );
  }

  return (
    <section className="aboutInfoPageContainer">
      <h2
        className={`aboutInfo ${!aboutRefInView ? "lr-hidden" : "lr-shown"}`}
        ref={aboutRef}
      >
        About
      </h2>
      <h1
        className={`aboutInfoFacts ${
          !aboutInfoFactsRefInView ? "lr-hidden" : "lr-shown"
        }`}
        ref={aboutInfoFactsRef}
      >
        Some <Keywords text="bytes of information" /> about myself
      </h1>
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
          <img src="" alt="s" loading="lazy" className="seanImg2" />
        </div>
      </div>
    </section>
  );
};

export default AboutInfoPageContainer;
