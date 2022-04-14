import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// hooks
import { useWindowSize } from "@hooks";

// Components
import RoundedButton from "@commons/RoundedButton";

import { links } from "../../constants";

import { NavMenuTabsProps } from "./types";

import "./NavMenu.scss";

const tabs: NavMenuTabsProps[] = [
  { href: "/About", name: "About", onClick: () => {} },
  { href: "/Experience", name: "Experience", onClick: () => {} },
  { href: "/Project", name: "Project", onClick: () => {} },
  { href: "/Contact", name: "Contact", onClick: () => {} },
];

const NavMenu = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  // this is to prevent multiple event listeners.
  useEffect(() => {
    setValuesBasedOnWidth();
    window.addEventListener("resize", setValuesBasedOnWidth);

    return () => window.removeEventListener("resize", setValuesBasedOnWidth);
  }, []);

  const clearFullScreen = () => {
    document.body.style.position = "";
    document.body.style.overflowY = "";
    document.body.style.height = "";
  };

  const handleClick = (href?: string) => {
    // when clicking on the link remove all defaults
    if (href) {
      setClick(false);
      clearFullScreen();
      navigate(href);
      return;
    }

    // all other cases
    setClick(!click);
    if ((width ?? 0) < 860) {
      if (!click) {
        document.body.style.position = "fixed";
        document.body.style.height = "100vh";
        document.body.style.overflowY = "hidden";
      } else {
        clearFullScreen();
      }
    }
  };

  const setValuesBasedOnWidth = () => {
    if (window.innerWidth >= 860) {
      setClick(false);
    } else {
      clearFullScreen();
    }
  };

  if (width == null) return null;

  if (width < 860) {
    return (
      <>
        <nav className="nav">
          <div className="navContainer">
            <div className="title" onClick={() => handleClick("/About")}>
              Sean Lum
            </div>
            <div className="hamburger" onClick={() => handleClick()}>
              <div className={`bar ${!click ? "" : "active"}`} />
            </div>
          </div>
        </nav>
        <div className={`dropdown-list ${!click ? "" : "active"}`}>
          {tabs.map((tab) => (
            <div
              className="vertical-tab"
              onClick={() => handleClick(tab.href)}
              key={tab.href}
            >
              {tab.name}
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <nav className="nav">
      <div className="navContainer">
        <div className="title" onClick={() => handleClick("/About")}>
          Sean Lum
        </div>
        <div className="horizontal-tabs">
          {tabs.map((tab) => (
            <div
              key={tab.href}
              className="horizontal-tab"
              onClick={() => handleClick(tab.href)}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className="socials">
          {links.map((l, i) => (
            <a href={l.link} target="_blank" rel="noopener noreferrer" key={i}>
              <RoundedButton icon={l.logo} onClick={() => {}} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
