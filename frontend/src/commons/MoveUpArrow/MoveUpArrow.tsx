import React, { useEffect, useState } from "react";

import { getScrollPercent, throttle } from "../../utils/Helper";

import navArrow from "../../images/navArrow.svg";

import "./MoveUpArrow.scss";

const MoveUpArrow = () => {
  const [show, setIsShow] = useState(false);

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
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
      <img src={navArrow} alt="go back to top arrow" />
    </div>
  );
};

export default MoveUpArrow;
