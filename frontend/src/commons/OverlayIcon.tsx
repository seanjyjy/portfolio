import React from "react";
import { Popover } from "react-tiny-popover";

interface OverlayIconProps {
  children: React.ReactNode;
  overlayText: string;
}

const Overlay = (title: string) => {
  return (
    <p
      style={{
        color: "#7f8494",
        fontFamily: "Inter",
        fontSize: "0.8em",
        fontWeight: 500,
      }}
    >
      {title}
    </p>
  );
};

const OverlayIcon = ({ children, overlayText }: OverlayIconProps) => {
  const [overlayShow, setOverlayShow] = React.useState(false);

  const openOverlay = () => setOverlayShow(true);
  const closeOverlay = () => setOverlayShow(false);

  return (
    <div onMouseEnter={openOverlay} onMouseLeave={closeOverlay}>
      <Popover
        isOpen={overlayShow}
        positions={["bottom"]}
        content={Overlay(overlayText)}
      >
        <div>{children}</div>
      </Popover>
    </div>
  );
};

export default OverlayIcon;
