import React from "react";

import OverlayIcon from "@commons/OverlayIcon";

import type { IconDef } from "@types";

import "./IconList.scss";

const Icon = ({ icon, name, width, style }: IconDef) => {
  return (
    <OverlayIcon overlayText={name}>
      <img
        alt={name}
        src={icon}
        style={{ width: width, ...style }}
        className="icon-list-icon"
      />
    </OverlayIcon>
  );
};

interface IconListProps {
  iconList: IconDef[];
}

const IconList = ({ iconList }: IconListProps) => {
  return (
    <div className="icon-list">
      {iconList.map((item) => (
        <Icon
          icon={item.icon}
          name={item.name}
          width={item.width}
          key={item.name}
        />
      ))}
    </div>
  );
};

export default IconList;
