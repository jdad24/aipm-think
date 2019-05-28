import React from 'react';
import './robot-list.css';

const robotList = () => {
    const robots = [
        { name: "Yaskawa", overview: " Yaskawa Overview" },
        { name: "Kuka", overview: " Kuka Overview" },
        { name: "Replay", overview: " Replay Overview" }
    ]

    let robotList = robots.map(r => {
        return (
            <div className="Robot">
                <div>{r.name}</div>
                <div>{r.overview}</div>
                <button>Details</button>
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