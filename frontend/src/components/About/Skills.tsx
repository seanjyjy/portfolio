import React from "react";
import { useInView } from "react-intersection-observer";

import Keywords from "@commons/Keywords";
import SkillsList from "./SkillsList";

import { frontend, backend, others } from "../../utils/Icons";
import WebIcon from "../../images/web.svg";
import DataBaseIcon from "../../images/database.svg";
import DesignIcon from "../../images/designIcon.svg";

import "./Skills.scss";

const array = [
  {
    type: "Frontend",
    prose:
      "I enjoy working with React, Sass, Typescript and Webpack. Below is a non-exhaustive list of frontend technolgies I have worked with.",
    skills: frontend,
    icon: WebIcon,
  },
  {
    type: "Backend",
    prose:
      "I enjoy working with NodeJS, Express and Postgres. Below is a non-exhaustive list of backend technologies that I have worked with.",
    skills: backend,
    icon: DataBaseIcon,
  },
  {
    type: "Design",
    prose:
      "I enjoy working with AdobeXD to prototype my designs and getting user feebacks to improve on the design.",
    skills: others,
    icon: DesignIcon,
  },
] as const;

const Skills = () => {
  const { ref: skillsRef, inView: skillsRefInView } = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="skillsSectionInner">
      <div
        className={`skillsHeader ${
          !skillsRefInView ? "lr-hidden" : "lr-shown"
        }`}
        ref={skillsRef}
      >
        <h4 className="mySkills">MY SKILLS</h4>
        <h1 className="skillsProse">
          Focused on <Keywords text="frontend technologies" /> with the
          occasional backend and design tools
        </h1>
      </div>
      <div
        className={`skillsBodyContainer ${
          !skillsRefInView ? "rl-hidden" : "rl-shown"
        }`}
      >
        {array.map((skill, i) => (
          <div className="skillsBody" key={i}>
            <div className="skillsBodyHeader">
              <img src={skill.icon} alt="skills icon" loading="lazy" />
              <h2 className="skillsType">{skill.type}</h2>
            </div>
            <p className="skillsTypeProse">{skill.prose}</p>
            <div className="skillsList">
              <SkillsList skills={skill.skills} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
