import React from "react";

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
  return (
    <div className="skillsSection">
      <div className="skillsHeader">
        <div className="mySkills">MY SKILLS</div>
        <div className="skillsProse">
          Worked with <Keywords text="mainly frontend technologies" /> with the
          occasional backend technologies and design tools
        </div>
      </div>
      <div className="skillsBodyContainer">
        {array.map((skill, i) => (
          <div className="skillsBody" key={i}>
            <img src={skill.icon} alt="" />
            <div className="skillsType">{skill.type}</div>
            <div className="skillsTypeProse">{skill.prose}</div>
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
