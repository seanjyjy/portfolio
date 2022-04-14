import React from "react";

import ExperienceCard from "./ExperienceCard";
import Keywords from "@commons/Keywords";
import WordArrowButton from "@commons/WordArrowButton";

import ARROWIMGBLUE from "../../images/thin-arrow-blue.svg";
import TempCoding from "../../images/temp-coding.jpeg";

import { experiences } from "../../constants";

import "./Experience.scss";

const Experience = () => {
  function scrollToSep() {
    document.getElementById("pastExpAnchor")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="experiencePage">
      <div id="experienceAnchor" />
      <div className="experienceContainerWider">
        <div className="myExperience">MY WORK EXPERIENCE</div>
        <div className="experienceProse">
          Worked in fast-paced companies to push{" "}
          <Keywords
            text={
              "top quality product and worked on extraordinary projects for real-world impact."
            }
          />{" "}
          I experiment with interesting technologies and build useful toolings.
        </div>
        <div className="expCurrent">
          <div className="expCurrentImgHolder">
            <img src={TempCoding} alt="" />
          </div>
          <div>
            <div className="expCurrentText">
              Incoming Enterprise Engineer Intern
            </div>
            <div className="expCurrentRole">Meta</div>
            <div className="expCurrentGoal">
              Empower the world with what we build. Make the world more open and
              connected. My goal is to continue working on interesting, useful
              and ground breaking projects to make an impact on others.
            </div>
            <div className="expShouldShow">
              <div className="expCurrentText">
                Upcoming Software Engineer Intern
              </div>
              <div className="expCurrentRole">ByteDance</div>
              <div className="expCurrentGoal">
                Enable people to enjoy content powered by technology. We inform,
                entertain, and inspire people across language, culture, and
                geography.
              </div>
            </div>
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
      </div>
      <div className="experienceContainer">
        <div className="pastExp">
          <div id="pastExpAnchor" />
          {experiences.map((experience) => (
            <ExperienceCard {...experience} key={experience.date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
