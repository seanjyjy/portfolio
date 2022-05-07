import { useWindowSize } from "@hooks";

import OverlayIcon from "@commons/OverlayIcon";
import ColoredText from "@commons/ColoredText";

import type { ExperienceObjProps, IconDef } from "@types";

import "./ExperienceCard.scss";

const Icon = ({ icon, name, width, style }: IconDef) => {
  return (
    <OverlayIcon overlayText={name}>
      <img
        alt={name}
        src={icon}
        style={{ width: width, ...style }}
        className="icon-list-icon"
        loading="lazy"
      />
    </OverlayIcon>
  );
};

const ExperienceCard = ({
  title,
  role,
  role2,
  details,
  date,
  stack,
  vision,
  gif,
}: ExperienceObjProps) => {
  const { width } = useWindowSize();

  if (width == null) return null;

  return (
    <div className="exp-container" key={title}>
      <div className="exp-title">
        <div className={`exp-title-2 ${width >= 535 ? "" : "spaced"}`}>
          {`${width >= 535 ? role : role2} ${width >= 535 ? "⤐" : ""}`}
          {gif ? (
            <img src={gif} alt="coding" className="exp-gif" loading="lazy" />
          ) : (
            <ColoredText text={title} />
          )}
        </div>
      </div>
      <div className="exp-date">{date}</div>
      <div className="exp-mission">{vision}</div>
      <div>
        {details?.map((detail, i) => (
          <div key={i} className="exp-contribution">
            {detail}
          </div>
        ))}
      </div>
      <div>
        {stack && (
          <>
            <div className="exp-tech-stack">Tech Stack</div>
            <div className="exp-tech-stack-holder">
              {stack?.map((skill) => (
                <Icon
                  style={{ margin: "10px" }}
                  icon={skill.icon}
                  name={skill.name}
                  width={skill.width}
                  key={skill.name}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
