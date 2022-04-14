import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components Routes
import About from "@components/About";
// import Experience from "@components/Experience";
// import Project from "@components/Project";
// import Contact from "@components/Contact";
import ProjectPage from "@components/Project/ProjectPage";

// Components
import ScrollToTop from "./ScrollToTop";
import MoveUpArrow from "@commons/MoveUpArrow";
import RedirectPage from "@components/RedirectPage";
import Layout from "./Layout";
import LoadingAnimation from "@commons/LoadingAnimation";

const LazyExperience = React.lazy(async () => {
  const [component] = await Promise.all([
    import("@components/Experience"),
    new Promise((resolve) => setTimeout(resolve, 700)),
  ]);
  return component;
});

const LazyProject = React.lazy(async () => {
  const [component] = await Promise.all([
    import("@components/Project"),
    new Promise((resolve) => setTimeout(resolve, 700)),
  ]);

  return component;
});
const LazyContact = React.lazy(async () => {
  const [component] = await Promise.all([
    import("@components/Contact"),
    new Promise((resolve) => setTimeout(resolve, 700)),
  ]);
  return component;
});

// TODO: Include react-lazy with suspense when all is done :)
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/">
            <Route path="" element={<Navigate to="/About" />} />
            <Route
              element={
                <Suspense fallback={<LoadingAnimation />}>
                  <Layout />
                </Suspense>
              }
            >
              <Route path="About" element={<About />} />
              <Route path="Experience" element={<LazyExperience />} />
              <Route path="Project" element={<LazyProject />}>
                <Route path=":project" element={<ProjectPage />} />
              </Route>
              <Route path="Contact" element={<LazyContact />} />
            </Route>
            <Route path="redirect" element={<RedirectPage />} />
            <Route path="*" element={<RedirectPage />} />
          </Route>
        </Routes>
      </div>
      <MoveUpArrow />
    </Router>
  );
};

export default App;
