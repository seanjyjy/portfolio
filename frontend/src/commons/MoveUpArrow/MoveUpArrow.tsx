import React, { useEffect, useState } from "react";

import { throttle } from "../../utils/Helper";

import navArrow from "../../images/navArrow.svg";

import "./MoveUpArrow.scss";

const MoveUpArrow = () => {
  const [show, setIsShow] = useState(false);

  function scrollTop() {
    window.scrollTo(0, 0);
  }

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
      throttle((e: Event) => showOrHideButton(), 50)
    );

    return () =>
      window.removeEventListener(
        "scroll",
        throttle((e: Event) => showOrHideButton(), 50)
      );
  }, []);

  return (
    <div
      className="moveUpArrow"
      style={{ opacity: show ? 1 : 0 }}
      onClick={scrollTop}
    >
      <img src={navArrow} alt="" />
    </div>
  );
};

export default MoveUpArrow;
