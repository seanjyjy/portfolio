import React from "react";
import Typewriter from "typewriter-effect";

import "./Keywords.scss";

interface KeywordsProps {
  text: string;
  typewritter?: boolean;
}

const Keywords = ({ text, typewritter = false }: KeywordsProps) => {
  if (!typewritter) {
    return <span className="keywordtext">{text}</span>;
  }

  return (
    <Typewriter
      options={{ autoStart: true, loop: false, delay: 50 }}
      onInit={(typewriter) => {
        typewriter
          .typeString(text)
          .callFunction(function (state) {
            state.elements.cursor.style.display = "none";
          })
          .start();
      }}
    />
  );
};

export default Keywords;
