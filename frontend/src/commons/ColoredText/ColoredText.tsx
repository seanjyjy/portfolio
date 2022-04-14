import React from "react";

import "./ColoredText.scss";

const ColoredText = ({ text }: { text: string }) => {
  return (
    <div className={`rainbow rainbow_text_animated ${text.toLowerCase()}`}>
      {text}
    </div>
  );
};

export default ColoredText;
