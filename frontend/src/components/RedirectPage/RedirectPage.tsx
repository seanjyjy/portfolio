import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { nearestUrl } from "@utils/Helper";
import { useInterval } from "@hooks";

import Robot from "../../images/robot.svg";

import "./RedirectPage.scss";

interface RedirectPageProps {
  specificRoute?: string;
}

const RedirectPage = ({ specificRoute }: RedirectPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const bestUrl = specificRoute ?? nearestUrl();
  const formattedBestUrl = "https://" + window.location.hostname + bestUrl;
  const [time, setTime] = useState(5);

  useInterval(
    () => {
      setTime((time) => {
        if (time - 1 === 0) {
          setTimeout(() => {
            navigate(specificRoute ?? bestUrl, { replace: true });
          }, 100);
        }
        return time - 1;
      });
    },
    time === 0 ? null : 1000
  );

  return (
    <div className="redirectPage">
      <div className="redirect">
        <div className="redirectText">
          <div className="redirectTextHeader">Whoops</div>
          <div className="redirectTextError">
            404. <span>That's an error</span>
          </div>
          <div className="redirectTextMessage">
            {`The request URL ${location.pathname} was not found on this server.`}
          </div>
          <div className="redirectTextResult">That's all we know</div>
          <div className="redirectTextLink">
            Redirecting back to the nearest possible URL{" "}
            <a href={bestUrl}>{formattedBestUrl}</a> in {time} ...
          </div>
        </div>
        <img src={Robot} alt="" />
      </div>
    </div>
  );
};

export default RedirectPage;
