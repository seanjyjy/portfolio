import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

// TODO: Include react-lazy with suspense when all is done :)
const App = () => {
  return (
    <Router>
      <Routes>
        <>
          <Route path="/" element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
          {/* TODO: perhaps can auto redirect back to "/" */}
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </>
      </Routes>
    </Router>
  );
};

export default App;
