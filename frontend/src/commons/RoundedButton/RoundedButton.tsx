import React from "react";

import "./RoundedButton.scss";

interface RoundedButtonProps {
  icon: string;
  onClick: () => void;
}

const RoundedButton = ({ icon, onClick }: RoundedButtonProps) => {
  return (
    <div className="roundedButton" onClick={onClick}>
      <img src={icon} alt="rounded button" />
    </div>
  );
};

export default RoundedButton;
