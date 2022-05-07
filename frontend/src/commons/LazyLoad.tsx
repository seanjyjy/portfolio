import React, { Suspense, useRef } from "react";
import { useIntersectionObserver } from "@hooks";

import LoadingAnimation from "./LoadingAnimation";

type LazyLoadProps = {
  Children: React.LazyExoticComponent<() => JSX.Element | null>;
};

const LazyLoad = ({ Children }: LazyLoadProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isVisible = useIntersectionObserver(ref);
  const style: React.CSSProperties = isVisible
    ? { width: "100vw", height: "fit-content" }
    : { width: "100vw", height: "100vh" };

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
