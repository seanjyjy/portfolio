import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
// import { useInView } from "react-intersection-observer";

import LoadingAnimation from "@commons/LoadingAnimation";
import ErrorBoundary from "@commons/ErrorBoundary/ErrorBoundary";

import PLAYIMG from "../../images/play.svg";
import PAUSEIMG from "../../images/pause.svg";

import "./Player.scss";

interface PlayerProps {
  url?: string;
  index: number;
}

const Player = ({ url, index }: PlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | undefined>();
  const timelineRef = useRef<HTMLElement | undefined>();
  const timelineRefBg = useRef<HTMLElement | undefined>();
  // const { ref: eleRef, inView } = useInView({
  //   /* Optional options */
  //   threshold: 0.8,
  //   triggerOnce: true,
  // });

  function handleBar(video: HTMLVideoElement, bar: HTMLElement) {
    let width = video.currentTime / video.duration;
    bar.style.width = width * 100 + "%";
    if (video.ended) {
      setIsPlaying(false);
    }
  }

  function clickOnProgress(
    e: MouseEvent,
    progress: HTMLElement,
    video: HTMLVideoElement
  ) {
    const x = progress.getBoundingClientRect().x;
    const ratio = (e.pageX - x) / (progress.getBoundingClientRect().right - x);

    video.currentTime = (ratio * video.duration) | 0;
  }

  const ref = useCallback(async (node: any) => {
    if (node) {
      let videoParent = document.querySelector(
        `#react-player-${index}`
      ) as HTMLElement;
      await new Promise((resolve) => setTimeout(resolve, 1500));
      videoRef.current = videoParent.children[0] as HTMLVideoElement;
      timelineRef.current = document.querySelector(
        `div.player-control-timeline.index-${index}`
      ) as HTMLElement;

      timelineRefBg.current = document.querySelector(
        `div.player-control-timeline-bg.index-${index}`
      ) as HTMLElement;

      if (videoRef.current && timelineRef.current) {
        videoRef.current.addEventListener("timeupdate", () =>
          handleBar(videoRef.current!, timelineRef.current!)
        );

        if (timelineRefBg.current) {
          timelineRefBg.current.addEventListener("click", (e) =>
            clickOnProgress(e, timelineRefBg.current!, videoRef.current!)
          );
        }
      }
    }
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const onReady = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const videoRefInstance = videoRef.current;
    const timelineRefBgInstance = timelineRefBg.current;
    const timelineRefInstance = timelineRef.current;

    return () => {
      if (videoRefInstance != null && timelineRefInstance != null)
        videoRefInstance.removeEventListener("timeupdate", () =>
          handleBar(videoRefInstance, timelineRefInstance)
        );
      if (timelineRefBgInstance != null && videoRefInstance != null)
        timelineRefBgInstance.removeEventListener("click", (e) =>
          clickOnProgress(e, timelineRefBgInstance, videoRefInstance)
        );
    };
  }, []);

  // useEffect(() => {
  //   if (inView && !isPlaying) {
  //     setTimeout(() => {
  //       setIsPlaying(true);
  //     }, 3000);
  //   }
  // }, [inView]);

  return (
    <ErrorBoundary>
      <div className="macbook-wrapper">
        <div className="macbook-header">
          <div className="header-dot r-1" />
          <div className="header-dot y-2" />
          <div className="header-dot g-3" />
        </div>
        <div className="player-wrapper" id="player-wrapper">
          {url !== "" && isLoading && <LoadingAnimation />}
          {url !== "" && (
            <>
              <div>
                <ReactPlayer
                  playing={isPlaying}
                  id={`react-player-${index}`}
                  ref={ref}
                  onReady={onReady}
                  url={url}
                  className={`react-player ${isLoading && "rp-loading"}`}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="player-controls">
                <button onClick={handleClick}>
                  <img src={!isPlaying ? PLAYIMG : PAUSEIMG} alt="" />
                </button>
                <div className={`player-control-timeline-bg index-${index}`}>
                  <div className={`player-control-timeline index-${index}`} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Player;
