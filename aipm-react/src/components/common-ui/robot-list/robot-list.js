import React from 'react';
import './robot-list.css';
import { Link } from "react-router-dom";

const robotList = (props) => {
    const robots = [
        { name: "Yaskawa", overview: " Yaskawa Overview" },
        { name: "Kuka", overview: " Kuka Overview" },
        { name: "Replay", overview: " Replay Overview" }
    ]

    let robotList = robots.map(r => {
        return (
            <div className="Robot" key={r.name}>
                <div>{r.name}</div>
                <div>{r.overview}</div>
                {/* <Link to="/pm"> */}
                    <button value={r.name} onClick={props.clickHandler}>Details</button>
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