import React from 'react';
import './robot-list.css';
import BasicCard from '../BasicCard/basicCard';
// import { Link } from "react-router-dom";

const robotList = (props) => {
    const robots = [
        { device: "yaskawa", overview: " Yaskawa Overview" },
        { device: "kuka", overview: " Kuka Overview" },
        { device: "replay", overview: " Replay Overview" }
    ]

    let robotList = robots.map(r => {
        return (
            <BasicCard key={r.device}>
            <div className="Robot">
                <div>{r.device}</div>
                <div>{r.overview}</div>
                {/* <Link to="/pm"> */}
                    <button value={r.device} onClick={props.clickHandler}>Details</button>
                {/* </Link> */}
                {/* <button onClick={props.onclick}>Details</button> */}
            </div>
            </BasicCard>
        );
    })

    return (
        <div className="Robot-list">
            {robotList}
        </div>
    );
}

export default robotList;