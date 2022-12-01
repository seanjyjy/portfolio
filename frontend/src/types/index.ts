import React from "react";

export interface ProjectItemType {
  name: string;
  desc: string;
  webLink?: string;
  stack: IconDef[];
  logo?: string;
  logosize?: string;
  index: number;
  largedesc?: string;
  url?: string; // youtube url
  prose?: React.ReactNode;
  team?: string[];
  githubLink?: string;
  productionUrl?: string;
  developmentUrl?: string;
  featureImg?: string;
  npmLink?: string;
}

export interface IconDef {
  icon: string;
  name: string;
  width: string;
  style?: {};
}

export interface ExperienceObjProps {
  title: string;
  role?: string;
  role2?: string;
  date: string;
  vision?: string;
  details?: string[];
  stack?: IconDef[];
  gif?: string;
  link?: string;
}

export interface LightBoxImage {
  src: string;
  thumbnail?: string | undefined;
  caption?: string | undefined;
  width?: number | undefined;
  height?: string | number | undefined;
}

export interface skillsInfo {
  title: string;
  img: string;
}

export interface aboutInfo {
  header: string;
  info: string;
  imgSrc: string;
}

export interface TestimonialInfo {
  imgSrc?: string;
  name?: string;
  role?: string;
  comments?: string;
}
