import React from "react";

import OverlayIcon from "@commons/OverlayIcon";

import type { skillsInfo } from "@types";

import "./Skills.scss";

interface SkillsListProps {
  skills: skillsInfo[];
}

const SkillsList = ({ skills }: SkillsListProps) => {
  return (
    <div className="skillsList">
      {skills.map((item) => (
        <React.Fragment key={item.title}>
          <OverlayIcon overlayText={item.title}>
            <img src={item.img} alt="icon overlay image" loading="lazy" />
          </OverlayIcon>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SkillsList;
