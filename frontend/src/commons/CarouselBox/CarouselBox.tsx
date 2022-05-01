import React, { useCallback, useEffect, useRef, useState } from "react";
import { useInterval, useWindowSize } from "@hooks";

import { debounce } from "../../utils/Helper";

import "./CarouselBox.scss";

type DotsProps = {
  selected: boolean;
};

function Dot({ selected }: DotsProps) {
  return <div className={`carouselDot ${selected ? "on" : "off"}`} />;
}

type CarouselBoxProps<T> = {
  carouselItems: T[];
  renderItem: (item: T, index?: number) => React.ReactNode;
  itemsPerPage?: number; // default will be 3
};

const segmentArray = <T,>(data: T[], itemsPerPage: number): T[][] => {
  const arr: T[][] = [];
  let temp: T[] = [];
  for (let i = 0; i < data.length; i++) {
    temp.push(data[i]);
    if (temp.length === itemsPerPage) {
      arr.push(temp);
      temp = [];
    }
  }
  if (temp.length > 0) {
    arr.push(temp);
  }
  return arr;
};

const CarouselBox = <T,>({
  carouselItems,
  renderItem,
  itemsPerPage = 3,
}: CarouselBoxProps<T>) => {
  const { width } = useWindowSize();
  const prevWidth = useRef<number>();
  const boxRef = useRef<HTMLDivElement>(null);

  const [arr, setArr] = useState<T[][]>([]);
  const [leftBound, setLeftBound] = useState(0);
  const [rightBound, setRightBound] = useState(0);
  const [dist, setDist] = useState(0);
  const [resizing, setResizing] = useState(false);
  const [isView, setIsView] = useState(false);
  const [position, setPosition] = useState(0);
  const numDots = Math.ceil(carouselItems.length / itemsPerPage ?? 0);

  // 0 -> move right, 1 -> move left
  const [direction, setDirection] = useState(0);

  const shiftLeft = () => {
    if (!boxRef.current) return;
    const { clientWidth } = boxRef.current;

    setDist((dist) => {
      setPosition((pos) => pos - 1);
      if (dist + clientWidth > leftBound) {
        return leftBound;
      }

      return snapToGrid(dist + clientWidth);
    });
  };

  const shiftRight = () => {
    if (!boxRef.current) return;
    const { clientWidth } = boxRef.current;

    setDist((dist) => {
      setPosition((pos) => pos + 1);
      if (dist - clientWidth < rightBound) {
        return rightBound;
      }

      return snapToGrid(dist - clientWidth);
    });
  };

  const snapToGrid = (value: number) => {
    if (!boxRef.current) {
      return value;
    }
    const { clientWidth } = boxRef.current;
    const itemWidth = clientWidth / itemsPerPage;
    const ratio = -value / itemWidth;
    let idx = ratio % 1 > 0.5 ? Math.ceil(ratio) : Math.floor(ratio);
    idx =
      idx >= carouselItems.length
        ? carouselItems.length - 1
        : idx < 0
        ? 0
        : idx;
    return idx * -itemWidth;
  };

  useEffect(() => {
    if (!boxRef.current) {
      return;
    }
    const { clientWidth } = boxRef.current;
    setLeftBound(0);
    setRightBound(
      -(clientWidth / itemsPerPage) * (carouselItems.length - itemsPerPage)
    );
    prevWidth.current = width;
    setDist(snapToGrid);
  }, [itemsPerPage, carouselItems, width]);

  useEffect(() => {
    setArr(segmentArray(carouselItems, itemsPerPage));
  }, [itemsPerPage, carouselItems]);

  useInterval(
    () => {
      if (dist === leftBound && direction === 1) {
        setDirection(0);
        shiftRight();
        return;
      } else if (dist === rightBound && direction === 0) {
        setDirection(1);
        shiftLeft();
        return;
      }

      if (direction === 0) {
        shiftRight();
      } else {
        shiftLeft();
      }
    },
    carouselItems.length > itemsPerPage && !resizing && !isView ? 5000 : null
  );

  const resizeFalse = useCallback(() => {
    debounce(() => {
      setResizing(false);
    }, 1000)();
  }, []);

  useEffect(() => {
    setResizing(true);
    resizeFalse();
  }, [width]);

  const setViewTrue = () => setIsView(true);
  const setViewFalse = () => setIsView(false);

  return (
    <>
      <div
        className="carouselBox"
        ref={boxRef}
        onMouseEnter={setViewTrue}
        onMouseLeave={setViewFalse}
      >
        {arr.map((arr, index) => (
          <div
            id={`cb-${index}`}
            key={`cb-${index}`}
            style={{
              transform: `translateX(${dist}px)`,
              gridTemplateColumns: `repeat(${itemsPerPage},1fr)`,
              transitionDuration: `1s`,
              padding: `0 0px`,
            }}
            className="carouselBoxItems"
          >
            {arr.map((item, index) => {
              return <div key={`cb-${index}`}>{renderItem(item, index)}</div>;
            })}
          </div>
        ))}
      </div>
      <div className="carouselDots">
        {[...new Array(numDots)].map((_, i) => (
          <Dot key={i} selected={position === i} />
        ))}
      </div>
    </>
  );
};

export default CarouselBox;
