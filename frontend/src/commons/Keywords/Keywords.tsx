import React from "react";

import "./Keywords.scss";

interface KeywordsProps {
  text: string;
}

const Keywords = ({ text }: KeywordsProps) => {
  return <span className="keywordtext">{text}</span>;
};

export default Keywords;
