import React, { Suspense, useRef } from "react";
import { useIntersectionObserver } from "@hooks";

import LoadingAnimation from "./LoadingAnimation";

type LazyLoadProps = {
  Children: React.LazyExoticComponent<() => JSX.Element | null>;
  style?: React.CSSProperties;
};

const LazyLoad = ({ Children, style }: LazyLoadProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section ref={ref} style={style}>
      {isVisible && (
        <Suspense fallback={<LoadingAnimation />}>
          <Children />
        </Suspense>
      )}
    </section>
  );
};

export default LazyLoad;
