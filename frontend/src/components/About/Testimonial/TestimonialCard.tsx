import React from "react";

import { TestimonialInfo } from "@types";

import "./TestimonialCard.scss";

const TestimonialCard = ({ imgSrc, name, role, comments }: TestimonialInfo) => {
  return (
    <div className="testimonialCard">
      <div className="testimonialImg">
        <img src={imgSrc} alt="testimonial author's image" loading="lazy" />
      </div>
      <h3 className="testimonialName">{name}</h3>
      <h5 className="testimonialRole">{role}</h5>
      <p className="testimonialComments">{comments}</p>
    </div>
  );
};

export default TestimonialCard;
