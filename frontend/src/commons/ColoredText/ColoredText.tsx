import React from "react";

import "./ColoredText.scss";

const ColoredText = ({ text, link }: { text: string; link?: string }) => {
  return (
    <a
      href={link}
      rel="noreferrer noopener"
      target="_blank"
      className="colored-text"
    >
      <div className={`rainbow rainbow_text_animated ${text.toLowerCase()}`}>
        {text}
      </div>
    </a>
  );
};

export default ColoredText;
