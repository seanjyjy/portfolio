import React from "react";

import { useWindowSize } from "@hooks";

import CarouselBox from "@commons/CarouselBox";
import TestimonialCard from "./TestimonialCard";

import { testimonials } from "../../../constants";
import { TestimonialInfo } from "@types";

import "./TestimonialPage.scss";

const TestimonialPage = () => {
  const { width } = useWindowSize();

  if (width == null) return null;

  return (
    <div className="testimonialPage">
      <div className="testimonialPageHeader">Testimonials</div>
      <div className="testimonialPageProse">
        See what others have to say about me
      </div>
      <CarouselBox
        itemsPerPage={width >= 1050 ? 3 : width >= 700 ? 2 : 1}
        carouselItems={testimonials}
        renderItem={(item: TestimonialInfo, i?: number) => (
          <TestimonialCard
            imgSrc={item.imgSrc}
            name={item.name}
            role={item.role}
            comments={item.comments}
            key={i}
          />
        )}
      />
    </div>
  );
};

export default TestimonialPage;
