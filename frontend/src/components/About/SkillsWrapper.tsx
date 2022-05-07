import React from "react";
import LazyLoad from "@commons/LazyLoad";

import "./Skills.scss";

const LazySkills = React.lazy(
  () => import(/* webpackChunkName: "Skills" */ "./Skills")
);

// wrapper class just to do lazy loading not so ideal but... ok
const SkillsWrapper = () => {
  return (
    <section className="skillsSection">
      <div id="skillsAnchor" />
      <LazyLoad
        Children={LazySkills}
        style={{ width: "100%", height: "100vh" }}
      />
    </section>
  );
};

export default SkillsWrapper;
