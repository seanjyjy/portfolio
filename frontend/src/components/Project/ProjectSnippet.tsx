import WordArrowButton from "@commons/WordArrowButton";
import { ProjectItemType } from "@types";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useWindowSize } from "@hooks";

import ARROWIMGBLUE from "../../images/thin-arrow-blue.svg";

import "./ProjectSnippet.scss";
import IconList from "@commons/IconList";
import { noDetails } from "./constants";

const ProjectSnippet = ({
  name,
  desc,
  webLink,
  stack,
  featureImg,
  npmLink,
  githubLink,
}: Partial<ProjectItemType>) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  function goToProject(project?: string) {
    if (project) navigate(project);
  }

  if (width == null) return null;

  return (
    <div className="projectSnippet">
      <div className="projectSnippet__imageContainer">
        <img src={featureImg} alt={name} />
      </div>
      <div className="projectSnippet__info">
        <div className="projectSnippet__name">{name}</div>
        <div className="projectSnippet__desc">{desc}</div>
        <div className="projectSnippet__controls">
          {Boolean(webLink) && (
            <a href={webLink} target="_blank" rel="noopener noreferrer">
              <WordArrowButton
                text="Website"
                onClick={() => {}}
                imgSrc={ARROWIMGBLUE}
              />
            </a>
          )}
          {Boolean(githubLink) && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <WordArrowButton
                text="Github"
                onClick={() => {}}
                imgSrc={ARROWIMGBLUE}
              />
            </a>
          )}
          {name && !noDetails.includes(name) && (
            <WordArrowButton
              text="Details"
              onClick={() => goToProject(name)}
              imgSrc={ARROWIMGBLUE}
            />
          )}
          {Boolean(npmLink) && (
            <a href={npmLink} target="_blank" rel="noopener noreferrer">
              <WordArrowButton
                text="Npm"
                onClick={() => {}}
                imgSrc={ARROWIMGBLUE}
              />
            </a>
          )}
        </div>
        <IconList iconList={stack!} />
      </div>
    </div>
  );
};

export default ProjectSnippet;
