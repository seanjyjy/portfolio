import React from "react";

import "./UtilityIcons.scss";

interface UtilityIconsProps {
  name: string;
  icon: JSX.Element;
  bgColor: string;
}

const UtilityIcons = ({ icon, name, bgColor }: UtilityIconsProps) => {
  return (
    <div title={name} className="util-icons" style={{ background: bgColor }}>
      {icon}
    </div>
  );
};

export default UtilityIcons;
