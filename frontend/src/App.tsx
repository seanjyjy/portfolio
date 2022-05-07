import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Routes
import About from "@components/About";
// import Experience from "@components/Experience";
// import Project from "@components/Project";
// import Contact from "@components/Contact";
// import ProjectPage from "@components/Project/ProjectPage";

// Components
import ScrollToTop from "./ScrollToTop";
import MoveUpArrow from "@commons/MoveUpArrow";
// import RedirectPage from "@components/RedirectPage";
import Layout from "./Layout";
import LoadingAnimation from "@commons/LoadingAnimation";

const LazyExperience = React.lazy(async () => {
  const [component] = await Promise.all([
    import(/* webpackChunkName: "Experience" */ "@components/Experience"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);
  return component;
});

const LazyProject = React.lazy(async () => {
  const [component] = await Promise.all([
    import(/* webpackChunkName: "Project" */ "@components/Project"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);

  return component;
});
const LazyContact = React.lazy(async () => {
  const [component] = await Promise.all([
    import(/* webpackChunkName: "Contact" */ "@components/Contact"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);
  return component;
});

const LazyProjectPage = React.lazy(async () => {
  const [component] = await Promise.all([
    import(
      /* webpackChunkName: "Project Page" */ "@components/Project/ProjectPage"
    ),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);
  return component;
});

const LazyRedirectPage = React.lazy(async () => {
  const [component] = await Promise.all([
    import(/* webpackChunkName: "Redirect Page" */ "@components/RedirectPage"),
  ]);
  return component;
});

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route
            element={
              <Suspense fallback={<LoadingAnimation />}>
                <Layout />
              </Suspense>
            }
          >
            <Route path="/" element={<About />} />
            <Route path="About" element={<About />} />
            <Route path="Experience" element={<LazyExperience />} />
            <Route path="Project" element={<LazyProject />}>
              <Route
                path=":project"
                element={
                  <Suspense fallback={<LoadingAnimation />}>
                    <LazyProjectPage />
                  </Suspense>
                }
              />
            </Route>
            <Route path="Contact" element={<LazyContact />} />
          </Route>
          <Route
            path="redirect"
            element={
              <Suspense fallback={<LoadingAnimation />}>
                <LazyRedirectPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingAnimation />}>
                <LazyRedirectPage />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <MoveUpArrow />
    </Router>
  );
};

export default App;
