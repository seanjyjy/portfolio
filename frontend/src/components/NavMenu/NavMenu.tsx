import { useState, useEffect, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// hooks
import { useWindowSize } from "@hooks";

// Components
import RoundedButton from "@commons/RoundedButton";

import { getScrollPercent, throttle } from "@utils/Helper";
import { links } from "../../constants";

import type { NavMenuTabsProps } from "./types";

import "./NavMenu.scss";

const tabs: NavMenuTabsProps[] = [
  { href: "/About", name: "About", uuid: "about-key-special" },
  { href: "/Experience", name: "Experience", uuid: "experience-key-special" },
  { href: "/Project", name: "Project", uuid: "project-key-special" },
  { href: "/Contact", name: "Contact", uuid: "contact-key-special" },
  {
    href: "https://blog.seanlumjy.com/",
    name: "Blog",
    uuid: "blog-key-special",
  },
];

const NavMenu = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const { pathname } = useLocation();
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

  const toggleClick = () => setClick(!click);

  const handleClick = (href?: string) => {
    // when clicking on the link remove all defaults
    if (href) {
      setClick(false);
      navigate(href);
      return;
    }

    // all other cases
    toggleClick();
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
            <Fragment key={tab.uuid}>
              {tab.name !== "Blog" ? (
                <p
                  className="vertical-tab"
                  onClick={() => handleClick(tab.href)}
                >
                  {tab.name}
                </p>
              ) : (
                <a
                  className="vertical-tab"
                  onClick={() => setClick(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={tab.href}
                >
                  {tab.name}
                </a>
              )}
            </Fragment>
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
            <Fragment key={tab.uuid}>
              {tab.name !== "Blog" ? (
                <p
                  className={`horizontal-tab ${
                    (pathname === tab.href ||
                      (pathname === "/" && tab.href === "/About")) &&
                    "tab-current"
                  }`}
                  onClick={() => handleClick(tab.href)}
                >
                  {tab.name}
                </p>
              ) : (
                <a
                  className={`horizontal-tab ${
                    pathname === tab.href && "tab-current"
                  }`}
                  onClick={() => setClick(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={tab.href}
                >
                  {tab.name}
                </a>
              )}
            </Fragment>
          ))}
        </div>
        <div className="socials">
          {links.map((l) => (
            <a
              href={l.link}
              target="_blank"
              rel="noopener noreferrer"
              key={l.link}
            >
              <RoundedButton icon={l.logo} onClick={() => {}} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
