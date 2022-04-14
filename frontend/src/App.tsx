import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Routes
import About from "@components/About";
import Experience from "@components/Experience";
import Project from "@components/Project";
import Contact from "@components/Contact";
import ProjectPage from "@components/Project/ProjectPage";

// Components
import NavMenu from "@components/NavMenu";
import Footer from "@components/Footer";
import ScrollToTop from "./ScrollToTop";
import MoveUpArrow from "@commons/MoveUpArrow";

// TODO: Include react-lazy with suspense when all is done :)
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <NavMenu />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="About" element={<About />} />
          <Route path="Experience" element={<Experience />} />
          <Route path="Project" element={<Project />}>
            <Route path=":project" element={<ProjectPage />} />
          </Route>
          <Route path="Contact" element={<Contact />} />
          {/* TODO: perhaps can auto redirect back to "/" */}
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
        <Footer />
      </div>
      <MoveUpArrow />
    </Router>
  );
};

export default App;
