import { useState } from "react";
import Lightbox from "react-image-lightbox";

import type { LightBoxImage } from "@types";

import GTsvg from "../../images/gt.svg";

import "react-image-lightbox/style.css";
import "./LightBox.scss";

interface LightBoxProps {
  images: LightBoxImage[];
}

interface LightBoxArrowProps {
  placement: "left" | "right";
  onClick: () => void;
}

const LightBoxArrow = ({ placement, onClick }: LightBoxArrowProps) => {
  return (
    <div
      className={`lightBoxArrow ${placement}`}
      onClick={onClick}
      style={{
        transform: placement === "right" ? "rotate(0)" : "rotate(180deg)",
      }}
    >
      <div>
        <img src={GTsvg} alt="" />
      </div>
    </div>
  );
};

const LightBox2 = ({ images }: LightBoxProps) => {
  const [photoIdx, setPhotoIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const moveBack = () =>
    setPhotoIdx((idx) => (idx - 1 + images.length) % images.length);

  const moveFoward = () => setPhotoIdx((idx) => (idx + 1) % images.length);

  return (
    // maybe dont need to hide
    <>
      <div
        className="custom-lb"
        style={{ visibility: isOpen ? "hidden" : "visible" }}
      >
        <LightBoxArrow onClick={moveBack} placement="left" />
        <div onClick={() => setIsOpen(true)} className="lb-imgContainer">
          <img src={images[photoIdx].src} alt={images[photoIdx].caption} />
        </div>
        <LightBoxArrow onClick={moveFoward} placement="right" />
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIdx].src}
          nextSrc={images[(photoIdx + 1) % images.length].src}
          prevSrc={images[(photoIdx + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={moveBack}
          onMoveNextRequest={moveFoward}
          imageCaption={images[photoIdx].caption}
        />
      )}
    </>
  );
};

export default LightBox2;
