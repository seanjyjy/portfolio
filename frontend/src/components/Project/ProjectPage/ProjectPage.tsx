import React from "react";
import { useParams } from "react-router-dom";

import IconList from "@commons/IconList";
import LightBox from "@commons/LightBox/LightBox";

import { projects, allProjects } from "../../../constants";
import { projectObj } from "../../../constants";

import "./ProjectPage.scss";
import Player from "@commons/Player";

const ProjectPage = () => {
  const { project: projectName } = useParams();
  const project = projectName ?? "";

  if (!Boolean(projects.find((listedProject) => listedProject === project))) {
    // TODO: redirect
    return <div>No such project!</div>;
  }

  // confirm to have found it
  const projectInfo = allProjects.find((p) => p.name === project)!;
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <div className="projectPagePage">
      <div className="projectPageContainer">
        <div className="projectPageName">{projectInfo.name}</div>
        <div className="projectPageProse">{projectInfo.prose}</div>
        <div className="projectGoal">
          <div className="projectPageGoal">Background</div>
          <div className="projectPageGoalText">{projectInfo.desc}</div>
        </div>
        <div className="projectPageTeammates">Team</div>
        <div className="projectPageTeammatesContainer">
          {projectInfo.team?.map((name) => (
            <div key={name}>{name}</div>
          ))}
        </div>
        <div className="projectPageStack">Tech Stack</div>
        <div className="projectPageStackContainer">
          <IconList iconList={projectInfo.stack} />
        </div>
        <div className="projectPageProduct">Highlight</div>
        <div className="projectHighlight">
          <Player
            url={
              isDevelopment
                ? projectInfo.developmentUrl
                : projectInfo.productionUrl
            }
          />
        </div>
        <div className="projectPageProduct">Product</div>
        <div className="projectPageImageContainer">
          <LightBox images={projectObj[projectInfo.name]} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
