import React from "react";
import "./robot-list.css";
import BasicCard from "../BasicCard/basicCard";
import r1 from "../../../assets/r1.png";
import r2 from "../../../assets/r2.png";
import r3 from "../../../assets/r3.png";
// import { Link } from "react-router-dom";

const robotList = props => {
  const robots = [
    {
      device: "yaskawa",
      headerText: "Yaskawa",
      overview: "Health Score",
      score: "94.5%",
      status: "Online",
      imgUrl: r1
    },
    {
      device: "kuka",
      headerText: "Kuka",
      overview: "Health Score",
      score: "93.7%",
      status: "Online",
      imgUrl: r2
    },
    {
      device: "replay",
      headerText: "Replay",
      overview: "Health Score",
      score: "88.4%",
      status: "Online",
      imgUrl: r3
    }
  ];

  let robotList = robots.map(r => {
    return (
      <BasicCard classname="robot-list-basicCard" key={r.device}>
        <div className="Robot">
          <div className="titleDiv">{r.headerText}</div>
          <div className="circular--landscape">
            <img src={r.imgUrl} />
          </div>
          <div className="Text">{r.overview}</div>
          <div className="healthScore">{r.score}</div>
          <div className="textdetails">
            <div className="Text textWidth">
              <div className="dotStatus">
                <div className="dot" />
                <div>{r.status}</div>
              </div>
            </div>
            <div className="textWidth">
              <button value={r.device} onClick={props.clickHandler}>
                Details
              </button>
            </div>
          </div>
          {/* </Link> */}
          {/* <button onClick={props.onclick}>Details</button> */}
        </div>
      </BasicCard>
    );
  });

  return <div className="Robot-list">{robotList}</div>;
};

export default robotList;
