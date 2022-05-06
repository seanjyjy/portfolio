import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// hooks
import { useWindowSize } from "@hooks";

// Components
import RoundedButton from "@commons/RoundedButton";

import { getScrollPercent, throttle } from "@utils/Helper";
import { links } from "../../constants";

import type { NavMenuTabsProps } from "./types";

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
  const [isMounted, setIsMounted] = useState(true);

  // this is to prevent multiple event listeners.
  useEffect(() => {
    setValuesBasedOnWidth();

    function mountDismountNavMenu() {
      let percent = getScrollPercent();
      if (percent > 0.8) {
        setIsMounted(false);
      } else {
        setIsMounted(true);
      }
    }

    window.addEventListener("resize", setValuesBasedOnWidth);
    window.addEventListener(
      "scroll",
      throttle((e: Event) => mountDismountNavMenu(), 10)
    );

    return () => {
      window.removeEventListener("resize", setValuesBasedOnWidth);
      window.removeEventListener(
        "scroll",
        throttle((e: Event) => mountDismountNavMenu(), 10)
      );
    };
  }, []);

  const handleClick = (href?: string) => {
    // when clicking on the link remove all defaults
    if (href) {
      setClick(false);
      navigate(href);
      return;
    }

    // all other cases
    setClick(!click);
  };

  const setValuesBasedOnWidth = () => {
    if (window.innerWidth >= 860) {
      setClick(false);
    }
  };

  if (width == null) return null;

  if (width < 860) {
    return (
      <>
        <nav className="nav">
          <div className="navContainer">
            <h1 className="title" onClick={() => handleClick("/")}>
              Sean Lum.
            </h1>
            <div className="hamburger" onClick={() => handleClick()}>
              <div className={`bar ${!click ? "" : "active"}`} />
            </div>
          </div>
        </nav>
        <div className={`dropdown-list ${!click ? "inactive" : "active"}`}>
          {tabs.map((tab) => (
            <p
              className="vertical-tab"
              onClick={() => handleClick(tab.href)}
              key={tab.href}
            >
              {tab.name}
            </p>
          ))}
        </div>
      </>
    );
  }

  return (
    <nav className={`nav ${isMounted ? "mounted" : "dismounted"}`}>
      <div className="navContainer">
        <h1 className="title" onClick={() => handleClick("/")}>
          Sean Lum.
        </h1>
        <div className="horizontal-tabs">
          {tabs.map((tab) => (
            <p
              key={tab.href}
              className="horizontal-tab"
              onClick={() => handleClick(tab.href)}
            >
              {tab.name}
            </p>
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
