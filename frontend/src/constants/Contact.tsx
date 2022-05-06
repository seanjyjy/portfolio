import LinkedInIcon from "../images/linkedin.svg";
import GithubIcon from "../images/github.svg";
import MediumIcon from "../images/medium.svg";

import GithubLogo from "../images/github-small.svg";
import LinkedInLogo from "../images/linkedin-small.svg";
import MediumLogo from "../images/medium-small.svg";

export const links = [
  {
    icon: (
      <img src={LinkedInIcon} style={{ width: "33px" }} alt="linkedin icon" />
    ),
    link: "https://www.linkedin.com/in/jyjy98/",
    name: "LinkedIn",
    text: "jyjy98",
    bgColor: "#ECEFFF",
    logo: LinkedInLogo,
  },
  {
    icon: <img src={GithubIcon} style={{ width: "33px" }} alt="github icon" />,
    link: "https://github.com/seanjyjy",
    name: "GitHub",
    text: "seanjyjy",
    bgColor: "#E4F2FF",
    logo: GithubLogo,
  },
  {
    icon: <img src={MediumIcon} style={{ width: "33px" }} alt="medium icon" />,
    link: "https://medium.com/@seanlumjy",
    name: "Medium",
    text: "Seanlumjy",
    bgColor: "#FFEDF7",
    logo: MediumLogo,
  },
];
