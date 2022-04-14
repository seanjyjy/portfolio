import {
  reactIcon,
  cssIcon,
  javaIcon,
  gradleIcon,
  typescriptIcon,
  sassIcon,
  reduxIcon,
  rxjsIcon,
  reduxObservable,
  reactqueryIcon,
  expressIcon,
  cypressIcon,
  webpackIcon,
  vueIcon,
} from "../utils/Icons";

import type { ExperienceObjProps } from "@types";

import FaceBookGif from "../images/facebook.gif";

export const experiences: ExperienceObjProps[] = [
  // {
  //   title: "Meta",
  //   date: "May 2022 - Aug 2022",
  //   role: "Enterprise Engineer Intern",
  //   role2: "EE Intern",
  //   gif: FaceBookGif,
  // },
  {
    title: "Shopee",
    role: "Software Engineer Intern",
    role2: "SWE Intern",
    date: "Aug 2021 - Dec 2021",
    vision:
      "We believe online shopping should be accessible, easy and enjoyable.",
    details: [
      "⪼	Developed an event management web app using React, Sass, Webpack, Redux, Redux-Thunk, React-testing library, Express.",
      "⪼	Enhanced and worked on an internal API tool to intercept APIs calls and mock data for the intercepted APIs and transfer the data from DevTools to an indicator to improve developers experience to know which APIs are currently intercepted.",
      "⪼  Implemented and revamped end-to-end tests for multiple pages using Cypress and introduce multiple locale testing.",
      "⪼  Developed scripts for developers to speed up their initial developments by generating the necessary configurations.",
      "⪼  Worked on client-facing checkout features as well as seller-facing finance features",
    ],
    stack: [
      typescriptIcon,
      reactIcon,
      reduxIcon,
      expressIcon,
      webpackIcon,
      cypressIcon,
      vueIcon,
      sassIcon,
    ],
  },
  {
    title: "Motional",
    role: "Software Engineer Intern",
    role2: "SWE Intern",
    date: "May 2021 - Aug 2021",
    vision:
      "We're making driverless vehicles a safe, reliable, and accessible reality",
    details: [
      "⪼	Spearheaded the launch of new website to facilitate extraction and reading data that is being produced by the autonomous vehicles.",
      "⪼	Improved the accessibility of the Redux store by redesigning the structure of the Redux Store by normalizing the data.",
      "⪼  Redesigned the API query to utilize React-Query instead to speed up the APIs and add a layer of caching to speed up future fetching.",
    ],
    stack: [
      typescriptIcon,
      reactIcon,
      reduxIcon,
      reactqueryIcon,
      rxjsIcon,
      reduxObservable,
      sassIcon,
    ],
  },
  {
    title: "NUS",
    role: "Software Engineer",
    role2: "SWE",
    date: "Jan 2021 - Jul 2021",
    details: [
      "⪼ Contributor for the main team for an open-source software website that is being used by over 500 NUS students per semester.",
      "⪼ Conducted and coordinated code and design documentation reviews as well as reviewing pull request from other members.",
    ],
    stack: [javaIcon, cssIcon, gradleIcon],
  },
];
