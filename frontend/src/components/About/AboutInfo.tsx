import React from "react";
import LazyLoad from "@commons/LazyLoad";
import SkillsWrapper from "./SkillsWrapper";
import "./AboutInfo.scss";

const LazyAboutInfoPageContainer = React.lazy(
  () =>
    import(
      /* webpackChunkName: "AboutInfoPageContainer" */ "./AboutInfoPageContainer"
    )
);

const AboutInfo = () => {
  return (
    <>
      <section className="aboutInfoPage">
        <div id="aboutInfoAnchor" />
        <LazyLoad
          Children={LazyAboutInfoPageContainer}
          style={{ height: "100vh", width: "100vw" }}
        />
      </section>
      <SkillsWrapper />
    </>
  );
};

export default AboutInfo;
