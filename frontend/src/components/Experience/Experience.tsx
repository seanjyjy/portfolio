import React from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";

import ExperienceCard from "./ExperienceCard";
import Keywords from "@commons/Keywords";
import WordArrowButton from "@commons/WordArrowButton";

import ARROWIMGBLUE from "../../images/thin-arrow-blue.svg";
import coding from "../../images/programming.svg";
import METAIMG from "../../images/meta.svg";
import BDIMG from "../../images/bytedance.svg";
import BubbleImg from "../../images/bubble.svg";

import { experiences } from "../../constants";

import "./Experience.scss";

const Experience = () => {
  const { ref: experienceRef, inView: experienceInView } = useInView({
    /* Optional options */
    threshold: 1,
    triggerOnce: true,
  });

  function scrollToSep() {
    document.getElementById("pastExpAnchor")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <Helmet>
        <title>Sean | Experience</title>
        <meta name="description" content="Sean Lum's Job Experience" />
      </Helmet>
      <main style={{ position: "relative" }}>
        <div className="experiencePage">
          <div id="experienceAnchor" />
          <section className="experienceContainerWider">
            <h2
              className={`myExperience ${
                !experienceInView ? "lr-hidden" : "lr-shown"
              }`}
              ref={experienceRef}
            >
              MY WORK EXPERIENCE
            </h2>
            <h1
              className={`experienceProse ${
                !experienceInView ? "lr-hidden" : "lr-shown"
              }`}
            >
              Worked in fast-paced companies to push{" "}
              <Keywords
                text={
                  "top quality product and useful tools for real-world impact."
                }
              />{" "}
              I experiment with interesting technologies and build useful
              toolings.
            </h1>
            <div className="expCurrent">
              <div className={`expCurrentImgHolder`}>
                <img src={coding} alt="coding" loading="lazy" />
              </div>
              <div
                className={`expCurrentRoleText ${
                  !experienceInView ? "td-hidden" : "td-shown"
                }`}
              >
                <h2 className="expCurrentText">
                  Incoming Software Engineer Intern
                </h2>
                <div className="expCurrentRole">
                  <img src={BDIMG} alt="byedance" loading="lazy" />
                  ByteDance
                </div>
                <p className="expCurrentGoal">
                  Enable people to enjoy content powered by technology. We
                  inform, entertain, and inspire people across language,
                  culture, and geography.
                </p>
                <div className="seeMoreExp">
                  <WordArrowButton
                    text="See past experiences"
                    imgSrc={ARROWIMGBLUE}
                    onClick={scrollToSep}
                  />
                </div>
              </div>
            </div>
            <div className="expSepContainer">
              <div className="expSep" />
            </div>
          </section>
          <section className="experienceContainer">
            <div className="pastExp">
              <div id="pastExpAnchor" />
              {experiences.map((experience) => (
                <ExperienceCard {...experience} key={experience.date} />
              ))}
            </div>
          </section>
        </div>
        <img
          src={BubbleImg}
          alt="floating bubble"
          className="experienceBubble"
        />
      </main>
    </>
  );
};

export default Experience;
