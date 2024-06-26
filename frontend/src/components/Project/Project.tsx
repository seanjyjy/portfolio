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
import ProjectSnippet from "./ProjectSnippet";

const Project = () => {
  const location = useLocation();
  const { width } = useWindowSize();
  const [len, setLen] = useState(6);

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

  const displayedProject = allProjects.slice(0, 3);
  const otherProject = allProjects.slice(3, len);

  return (
    <>
      <Helmet>
        <title>Sean | Projects</title>
        <meta name="description" content="Sean Lum's past projects" />
      </Helmet>
      <main className="projectPage">
        <section className="projectContainer">
          <h2 className="myProject">MY PROJECTS</h2>
          <h1 className="projectProse">
            I enjoy creating softwares that are{" "}
            <Keywords text="elegant, accessible and impactful." /> I hope my
            project will <Keywords text="make a difference for others." />
          </h1>
          <h3 className="featuredProjects">FEATURED PROJECTS</h3>
          {width >= 1025 && (
            <div id="mouseScrollContainer">
              <MouseSuggestionScroll />
            </div>
          )}
          {displayedProject.map((project) => (
            <ProjectItem {...project} key={project.name} />
          ))}
          <h3 className="featuredProjects">OTHER PROJECTS</h3>
          <div className="projectSnippetGrid">
            {otherProject.map((project) => (
              <ProjectSnippet {...project} key={project.name} />
            ))}
          </div>
          <section className="showMoreLessContainer">
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
          </section>
        </section>
      </main>
    </>
  );
};

export default Project;
