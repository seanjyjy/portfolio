import { useNavigate } from "react-router-dom";

import { useWindowSize } from "@hooks";

import IconList from "@commons/IconList";
import WordArrowButton from "@commons/WordArrowButton";

import type { ProjectItemType } from "types";

import ARROWIMGBLUE from "../../images/thin-arrow-blue.svg";

import "./ProjectItem.scss";
import Player from "@commons/Player";

const ProjectItem = ({
  name,
  desc,
  webLink,
  stack,
  logo,
  logosize,
  developmentUrl,
  productionUrl,
  index,
  largedesc,
}: ProjectItemType) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  function goToProject(project?: string) {
    if (project) navigate(project);
  }

  if (width == null) return null;

  const isDevelopment = process.env.NODE_ENV === "development";

  if (width <= 1025) {
    return (
      <div className="project-item">
        <div className="project-header">
          <img src={logo} alt="icon" style={{ width: logosize }} />
          <p>{name}</p>
        </div>
        <p className="project-description-large">{largedesc}</p>
        <p className="project-description">{desc}</p>
        <div className="project-button-container">
          <a href={webLink} target="_blank" rel="noopener noreferrer">
            <WordArrowButton
              text="Website"
              onClick={() => {}}
              imgSrc={ARROWIMGBLUE}
            />
          </a>
          <WordArrowButton
            text="Details"
            onClick={() => goToProject(name)}
            imgSrc={ARROWIMGBLUE}
          />
        </div>
        <div className="gif-styling">
          <Player url={isDevelopment ? developmentUrl : productionUrl} />
        </div>
        <div className="project-icon-holder">
          <IconList iconList={stack} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-item"
      style={{ flexDirection: index % 2 === 1 ? "row-reverse" : "row" }}
    >
      <div
        className="project-item-left"
        style={{
          marginRight: index % 2 === 0 ? "60px" : 0,
          flex: 1,
        }}
      >
        <div className="project-header">
          <img src={logo} alt="icon" style={{ width: logosize }} />
          <p>{name}</p>
        </div>
        <p className="project-description-large">{largedesc}</p>
        <p className="project-description">{desc}</p>
        <div className="project-button-container">
          <a href={webLink} target="_blank" rel="noopener noreferrer">
            <WordArrowButton
              text="Website"
              onClick={() => {}}
              imgSrc={ARROWIMGBLUE}
            />
          </a>
          <WordArrowButton
            text="Details"
            onClick={() => goToProject(name)}
            imgSrc={ARROWIMGBLUE}
          />
        </div>
        <div className="project-icon-holder">
          <IconList iconList={stack} />
        </div>
      </div>
      <div
        className="project-item-right"
        style={{
          marginRight: index % 2 === 1 ? "60px" : 0,
          flex: 1.3,
        }}
      >
        <div className="gif-styling">
          <Player url={isDevelopment ? developmentUrl : productionUrl} />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
