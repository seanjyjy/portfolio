import React, { useEffect, useState } from "react";

import { throttle } from "../../utils/Helper";

import navArrow from "../../images/navArrow.svg";

import "./MoveUpArrow.scss";

const MoveUpArrow = () => {
  const [show, setIsShow] = useState(false);

  useEffect(() => {
    function getScrollPercent() {
      var h = document.documentElement,
        b = document.body;
      return (
        ((h.scrollTop || b.scrollTop) /
          ((h.scrollHeight || b.scrollHeight) - h.clientHeight)) *
        100
      );
    }

    function showOrHideButton() {
      let percent = getScrollPercent();
      console.log(percent);
      if (percent > 50) {
        // Show button
        setIsShow(true);
      } else {
        // Hide button
        setIsShow(false);
      }
    }

    window.addEventListener(
      "scroll",
      throttle((e: Event) => showOrHideButton())
    );

    return () =>
      window.removeEventListener(
        "scroll",
        throttle((e: Event) => showOrHideButton())
      );
  }, []);

  return (
    <div className="moveUpArrow" style={{ opacity: show ? 1 : 0 }}>
      <img src={navArrow} alt="" />
    </div>
  );
};

export default MoveUpArrow;
