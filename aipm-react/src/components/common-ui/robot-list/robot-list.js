import React from 'react';
import './robot-list.css';
import { Link } from "react-router-dom";

const robotList = (props) => {
    const robots = [
        { device: "Yaskawa001", overview: " Yaskawa Overview" },
        { device: "Kuka-lbr", overview: " Kuka Overview" },
        { device: "Replay", overview: " Replay Overview" }
    ]

    let robotList = robots.map(r => {
        return (
            <div className="Robot" key={r.device}>
                <div>{r.device}</div>
                <div>{r.overview}</div>
                {/* <Link to="/pm"> */}
                    <button value={r.device} onClick={props.clickHandler}>Details</button>
                {/* </Link> */}
                {/* <button onClick={props.onclick}>Details</button> */}
            </div>
        );
    })

    return (
        <div className="Robot-list">
            {robotList}
        </div>
    );
}

export default robotList;