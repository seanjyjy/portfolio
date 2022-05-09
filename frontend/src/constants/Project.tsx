import {
  reactIcon,
  firebaseIcon,
  javascriptIcon,
  nodeJsIcon,
  adobeXdIcon,
  cssIcon,
  expoIcon,
  javaIcon,
  gradleIcon,
  typescriptIcon,
  graphqlIcon,
  figmaIcon,
  charkraUiIcon,
  tailwindIcon,
  reduxIcon,
  remixIcon,
  hljsIcon,
} from "../utils/Icons";

import modulefuturelogo from "../images/ModuleFutureLogo.png";
import sortalgologo from "../images/sortalgologo.png";
import facebooklogo from "../images/facebook.svg";
import internhunterlogo from "../images/InternHunter.png";
import nusforumslogo from "../images/NUSForums.svg";
import chatroomlogo from "../images/chatroomicon.svg";
import snowflakelogo from "../images/snowflake.svg";

import Keywords from "@commons/Keywords";

import type { ProjectItemType } from "@types";

export const allProjects: ProjectItemType[] = [
  {
    name: "Blog",
    desc:
      "This blog is for me to write about interesting projects I have done, tools that I have created and interesting concepts about Web Development I have learnt. Check out this blog!",
    webLink: "https://blog.seanlumjy.com/",
    stack: [reactIcon, typescriptIcon, remixIcon, tailwindIcon, hljsIcon],
    logo: snowflakelogo,
    logosize: "1.8em",
    url: "https://www.youtube.com/watch?v=4dC2wt1UAS4",
    developmentUrl:
      "https://res.cloudinary.com/dhxecnaor/video/upload/v1652083992/BlogPV_y3kf33.mp4",
    productionUrl:
      "https://res.cloudinary.com/drqnfuqm1/video/upload/v1652084347/BlogPV_e9gdmx.mp4",
    index: 0,
    largedesc: "Personalize Blog",
  },
  {
    name: "NUSForum",
    desc:
      "The project was inspired from the lack of standardised platform for different modules for NUS students to freely ask questions and also some modules use totalyl different platforms which can be hard to keep track. Thus, NUSForums provides a single platform that supports all modules. Also, it promotes community based support whereby students and teaching team can answer anonymously.",
    webLink: "https://nusforums-2a1c8.web.app/",
    githubLink: "https://github.com/NUSForums/nusforums",
    stack: [
      reactIcon,
      reduxIcon,
      typescriptIcon,
      tailwindIcon,
      firebaseIcon,
      figmaIcon,
    ],
    logo: nusforumslogo,
    logosize: "2.5em",
    url: "https://www.youtube.com/watch?v=X7iiDDLitrA",
    developmentUrl:
      "https://res.cloudinary.com/dhxecnaor/video/upload/v1649841344/NUSForumPV_diis6m.mp4",
    productionUrl:
      "https://res.cloudinary.com/drqnfuqm1/video/upload/v1649875101/NUSForumPV_m2eaa8.mp4",
    index: 1,
    largedesc: "Community based forum",
    prose: (
      <div>
        Designed to provide a <Keywords text="centralized" /> and{" "}
        <Keywords text="community web based forum" /> for all modules in NUS for
        students to freely discuss and ask questions.
      </div>
    ),
    team: ["Sean Lum", "Lim Jin Hao", "Keane Chan"],
  },
  {
    name: "SortAlgo",
    desc:
      "This project was inspired due to the lack of visual context that are often taught by in schools. We have ten common algorithms and we plan to improve on it. Each algorithms have a step by step explanation as well as play, pause, repeat features.",
    webLink: "https://algosort.netlify.app/",
    githubLink: "https://github.com/December-software-project/sort-algo",
    stack: [reactIcon, javascriptIcon, cssIcon, adobeXdIcon],
    logo: sortalgologo,
    logosize: "2.5em",
    url: "https://www.youtube.com/watch?v=X7iiDDLitrA",
    developmentUrl:
      "https://res.cloudinary.com/dhxecnaor/video/upload/v1649837395/SortAlgoPV_nilxrf.mp4",
    productionUrl:
      "https://res.cloudinary.com/drqnfuqm1/video/upload/v1649874993/SortAlgoPV_wnd4lg.mp4",
    index: 2,
    largedesc: "Interactive algorithm visualizer",
    prose: (
      <div>
        Improve students' understanding of common algorithms through{" "}
        <Keywords text="interactive visual aids." />
      </div>
    ),
    team: ["Sean Lum", "Ashley Lau", "Keane Chan"],
  },
  {
    name: "ModuleFuture",
    desc:
      "ModuleFuture is designed for NUS students to plan and track their modules. It has features such as multiple plans as well as even allowing the students to plan ahead to see the expected GPA and number of modules cleared.",
    webLink:
      "https://play.google.com/store/apps/details?id=com.modulefuture2019.ModuleFuture",
    githubLink: "https://github.com/seanjyjy/ModuleFuture",
    stack: [
      reactIcon,
      javascriptIcon,
      firebaseIcon,
      nodeJsIcon,
      cssIcon,
      adobeXdIcon,
      expoIcon,
    ],
    logo: modulefuturelogo,
    logosize: "4em",
    url: "https://www.youtube.com/watch?v=sqWDVRd5qqU&ab_channel=JYjy",
    developmentUrl:
      "https://res.cloudinary.com/dhxecnaor/video/upload/v1649841742/ModuleFuture_Promotional_Video_wprmw1.mp4",
    productionUrl:
      "https://res.cloudinary.com/drqnfuqm1/video/upload/v1649874995/ModuleFuture_Promotional_Video_njawfo.mp4",
    index: 3,
    largedesc: "Native mobile app for planning",
    prose: (
      <div>
        Designed to upgrade students' module planning experience by allowing
        them to <Keywords text="simulate various plans for all semesters." />
      </div>
    ),
    team: ["Sean Lum", "Keane Chan"],
  },
  {
    name: "Chatroom",
    desc:
      "Chatroom for everyone and literally everyone to mingle and talk to one another. It is a single chatroom which connects everyone. Get chatting with people around the world now!",
    webLink: "https://chatroom-ql.netlify.app/",
    githubLink: "https://github.com/seanjyjy/chatroom-fe",
    stack: [
      reactIcon,
      typescriptIcon,
      javascriptIcon,
      graphqlIcon,
      nodeJsIcon,
      charkraUiIcon,
      figmaIcon,
    ],
    logo: chatroomlogo,
    logosize: "2.4em",
    url: "https://www.youtube.com/watch?v=gvlZw66hxqM",
    developmentUrl:
      "https://res.cloudinary.com/dhxecnaor/video/upload/v1649872331/ChatroomPV_zmbhcl.mp4",
    productionUrl:
      "https://res.cloudinary.com/drqnfuqm1/video/upload/v1649874993/ChatroomPV_b8trez.mp4",
    index: 4,
    largedesc: "Real-time Chatroom",
    prose: "Communication is never difficult anymore.",
    team: ["Sean Lum"],
  },
  {
    name: "FacebookClone",
    desc:
      "Facebook-clone is a desktop website which clones the functionality and design of the Facebook Dark Theme website. It is integrated with making a post functionality.",
    webLink: "https://fb-clone-seanjyjy.netlify.app/",
    githubLink: "https://github.com/seanjyjy/fb-clone",
    stack: [reactIcon, javascriptIcon, firebaseIcon, nodeJsIcon, cssIcon],
    logo: facebooklogo,
    logosize: "2em",
    url: "https://www.youtube.com/watch?v=0CDBSEvKf0U",
    developmentUrl:
      "https://res.cloudinary.com/dhxecnaor/video/upload/v1649873760/FBClonePV_ujvalw.mp4",
    productionUrl:
      "https://res.cloudinary.com/drqnfuqm1/video/upload/v1649874993/FBClonePV_khmyny.mp4",
    index: 5,
    largedesc: "Cloning facebook website",
    prose: "Mimics the looks of Facebook website.",
    team: ["Sean Lum"],
  },
  {
    name: "InternHunter",
    desc:
      "InternHunter is built for students to manage and track their internship planning as well as application. It it designed and built for fast-typist via the command line interface (CLI) to record and track their internships and personal resume details. It comes with a sleek UI design as well.",
    webLink: "https://github.com/AY2021S1-CS2103T-T15-4/tp/releases/tag/v1.4",
    githubLink: "https://github.com/AY2021S1-CS2103T-T15-4/tp",
    stack: [javaIcon, cssIcon, gradleIcon, adobeXdIcon],
    logo: internhunterlogo,
    logosize: "2.2em",
    url: "https://www.youtube.com/watch?v=r5HGvB9GsS0",
    developmentUrl:
      "https://res.cloudinary.com/dhxecnaor/video/upload/v1649874443/InternHunterPV_vejmqi.mp4",
    productionUrl:
      "https://res.cloudinary.com/drqnfuqm1/video/upload/v1649874993/InternHunterPV_e1nokp.mp4",
    index: 6,
    largedesc: "Internship management app",
    prose: (
      <div>
        Designed for fast-typist to track and manage their internship{" "}
        <Keywords text="plans effectively and easily" /> via the command line.
      </div>
    ),
    team: ["Sean Lum", "Keane Chan", "Shawn Ng", "Isaac Tham", "Fidella"],
  },
];

export const projects = allProjects.map((proj) => proj.name);
