import React from "react";

import "./RoundedButtonArrow.scss";

interface RoundedButtonArrowProps {
  isReverse?: boolean;
  icon: string;
  text: string;
  placement: "left" | "right" | "bottom" | "top";
  onClick: () => void;
}

function rotateAmount(placement: string) {
  if (placement === "right") {
    return 0;
  } else if (placement === "left") {
    return 180;
  } else if (placement === "bottom") {
    return 90;
  } else if (placement === "top") {
    return 270;
  }
}

const RoundedButtonArrow = ({
  isReverse = false,
  icon,
  text,
  placement,
  onClick,
}: RoundedButtonArrowProps) => {
  return (
    <div className="roundedeButtonArrowButton" onClick={onClick}>
      {!isReverse ? (
        <>
          <div
            className="roundedButtonArrow"
            style={{
              transform: `rotate(${rotateAmount(placement)}deg)`,
              marginRight: "10px",
            }}
          >
            <img src={icon} alt="rounded button arrow" />
          </div>
          <div>{text}</div>
        </>
      ) : (
        <>
          <div style={{ marginRight: "10px" }}>{text}</div>
          <div
            className="roundedButtonArrow"
            style={{
              transform: `rotate(${rotateAmount(placement)}deg)`,
            }}
          >
            <img src={icon} alt="rounded button arrow" />
          </div>
        </>
      )}
    </div>
  );
};

export default RoundedButtonArrow;
