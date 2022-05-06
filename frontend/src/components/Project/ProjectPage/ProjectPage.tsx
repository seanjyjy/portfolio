import React from "react";
import { Navigate, Route, useParams } from "react-router-dom";

import IconList from "@commons/IconList";
import LightBox from "@commons/LightBox/LightBox";
import Player from "@commons/Player";

import { projects, allProjects } from "../../../constants";
import { projectObj } from "../../../constants";

import "./ProjectPage.scss";

const ProjectPage = () => {
  const { project: projectName } = useParams();
  const project = projectName ?? "";

  if (!Boolean(projects.find((listedProject) => listedProject === project))) {
    return <Navigate to={"redirect"} />;
  }

  // confirm to have found it
  const projectInfo = allProjects.find((p) => p.name === project)!;
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <div className="projectPagePage">
      <div className="projectPageContainer">
        <h3 className="projectPageName">{projectInfo.name}</h3>
        <h2 className="projectPageProse">{projectInfo.prose}</h2>
        <div className="projectGoal">
          <h2 className="projectPageGoal">Background</h2>
          <p className="projectPageGoalText">{projectInfo.desc}</p>
        </div>
        <h3 className="projectPageTeammates">Team</h3>
        <div className="projectPageTeammatesContainer">
          {projectInfo.team?.map((name) => (
            <p key={name}>{name}</p>
          ))}
        </div>
        <h3 className="projectPageStack">Tech Stack</h3>
        <div className="projectPageStackContainer">
          <IconList iconList={projectInfo.stack} />
        </div>
        <h3 className="projectPageProduct">Highlight</h3>
        <div className="projectHighlight">
          <Player
            url={
              isDevelopment
                ? projectInfo.developmentUrl
                : projectInfo.productionUrl
            }
            index={1900}
          />
        </div>
        <h3 className="projectPageProduct">Product</h3>
        <div className="projectPageImageContainer">
          <LightBox images={projectObj[projectInfo.name]} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
