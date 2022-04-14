import { aboutInfo } from "@types";
import WebInterest from "../images/computer-blue.svg";
import GoalIcon from "../images/goal.svg";
import EducationIcon from "../images/education.svg";

interface infoArray {
  header: string;
  info: string;
}

export const info: infoArray[] = [
  {
    header: "What am i up to now?",
    info:
      "Currently, I am studying and in my spare time, I will dabble with new concepts regarding Frontend development and write some blogs on Medium. I am also looking to grow my skills in backend development to be a full stack engineer. Feel free to contact me for collaborations.",
  },
];

export const aboutInfo2: aboutInfo[] = [
  {
    header: "Education",
    info:
      "Currently I am a penultimate student studying computer science at the National University of Singapore (NUS) and I am specializing in Software Engineering as well as Database Systems.",
    imgSrc: EducationIcon,
    info2: "",
  },
  {
    header: "Interest",
    info:
      "I enjoy making applications that are elegant and easy to use. Currently my focus is on Front-end development, both web and mobile applications. I am also trying to learn some backend development and I hope to be a Full-Stack developer one day. I love playing MOBA and strategic games as well.",
    imgSrc: WebInterest,
    info2: "",
  },
  {
    header: "Goal",
    info:
      "My future goals is to be able to create more softwares that benefits others and participate in more OSS projects. Also I wish to be a mentor in a future and also to have an opportunity and skills to lead and guide a team of developers.",
    imgSrc: GoalIcon,
    info2: "",
  },
];
