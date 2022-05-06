import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useWindowSize } from "@hooks";

import Keywords from "@commons/Keywords";
import ProjectItem from "./ProjectItem";
import MouseSuggestionScroll from "@commons/MouseSuggestionScroll";
import RoundedButtonArrow from "@commons/RoundedButtonArrow";

import { allProjects } from "../../constants";
import ARROWIMG from "../../images/thin-arrow.svg";

import "./Project.scss";

const Project = () => {
  const location = useLocation();
  const { width } = useWindowSize();
  const [len, setLen] = useState(3);

  const isProjectOverallPage =
    location.pathname.toLowerCase() === "/Project".toLowerCase();

  const showMoreFn = () => {
    if (len < allProjects.length) setLen(len + 3);
  };

  const showLesserFn = () => {
    if (len - 3 > 0) setLen(len - 3);
  };

  if (width == null) return null;

  if (!isProjectOverallPage) {
    return <Outlet />;
  }

  const displayedProject = allProjects.slice(0, len);

  return (
    <>
      <Helmet>
        <title>Sean | Projects</title>
        <meta name="description" content="Sean Lum's past projects" />
      </Helmet>
      <div className="projectPage">
        <div className="projectContainer">
          <div className="myProject">MY PROJECTS</div>
          <div className="projectProse">
            I enjoy creating softwares that are{" "}
            <Keywords text="elegant, accessible and impactful." /> I hope my
            project will <Keywords text="make a difference for others." />
          </div>
          <div className="featuredProjects">FEATURED PROJECTS</div>
          {width >= 1025 && (
            <div id="mouseScrollContainer">
              <MouseSuggestionScroll />
            </div>
          )}
          {displayedProject.map((project) => (
            <ProjectItem {...project} key={project.name} />
          ))}
          <div className="showMoreLessContainer">
            {len < allProjects.length && (
              <RoundedButtonArrow
                icon={ARROWIMG}
                placement="bottom"
                text="Show more"
                onClick={showMoreFn}
              />
            )}
            {len > 3 && (
              <RoundedButtonArrow
                icon={ARROWIMG}
                placement="top"
                text="Show less"
                onClick={showLesserFn}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
