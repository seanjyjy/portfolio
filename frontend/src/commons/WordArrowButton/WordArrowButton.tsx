import React from "react";

import "./WordArrowButton.scss";

interface WordArrowButtonProps {
  text: string;
  imgSrc: string;
  onClick: () => void;
}

const WordArrowButton = ({ text, imgSrc, onClick }: WordArrowButtonProps) => {
  return (
    <div className="wordArrowButton" onClick={onClick}>
      {text} <img src={imgSrc} alt="word arrow button" />
    </div>
  );
};

export default WordArrowButton;
