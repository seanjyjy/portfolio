import React from "react";

import { TestimonialInfo } from "@types";

import "./TestimonialCard.scss";

const TestimonialCard = ({ imgSrc, name, role, comments }: TestimonialInfo) => {
  return (
    <div className="testimonialCard">
      <div className="testimonialImg">
        <img src={imgSrc} alt="" />
      </div>
      <div className="testimonialName">{name}</div>
      <div className="testimonialRole">{role}</div>
      <div className="testimonialComments">{comments}</div>
    </div>
  );
};

export default TestimonialCard;
