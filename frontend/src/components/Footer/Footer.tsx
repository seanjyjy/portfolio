import React from "react";
import { useLocation } from "react-router-dom";

import { useWindowSize } from "@hooks";

import RoundedButton from "@commons/RoundedButton";

import { links } from "../../constants";

import "./Footer.scss";

const Footer = () => {
  const { width } = useWindowSize();
  const location = useLocation();

  const isContact = location.pathname === "/Contact";

  if (width == null) return null;

  return (
    <>
      {!isContact && (
        <div className="footer">
          <div>
            <div className="footerName">Sean Lum</div>
            <div className="footerProse">
              Striving to make a difference in others
            </div>
          </div>
          <div className="footerLinks">
            {links.map((l, i) => (
              <a
                href={l.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                <RoundedButton icon={l.logo} onClick={() => {}} />
              </a>
            ))}
          </div>
        </div>
      )}
      <div
        className="footerCopyRight"
        style={{
          transform: isContact
            ? "translateX(0px)"
            : width >= 778
            ? "translateX(-15px)"
            : "inherit",
        }}
      >
        © Copyright 2022
      </div>
    </>
  );
};

export default Footer;
