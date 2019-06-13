import React from 'react';
import './personaEnv.css';
import Aux from '../Aux/Aux';


const getDate = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let d = new Date();
    let cur_date = monthNames[d.getMonth()] + " " + d.getDate() + "th, " + d.getFullYear();

    return cur_date;
}

const personaEnv = (props) => {
    let cur_date = getDate();
    let avg_metrics = null;
    if(props.name === "Carla"){
        avg_metrics = (<Aux>
            <div className="topBottom">
                <div>Your Average Accuracy</div>
                <div>98%</div>
            </div>
                <div className="topBottom">
                    <div>Your Average Speed</div>
                    <div>34/min</div>
            </div>
            </Aux>);
    }
        
    return (
        <div className="personaEnv">
            <div className="topBottom">
                <div>Good-morning {props.name}</div>
                <div>{cur_date}</div>
            </div>
            <div className="personaWeather">
                <div>Thunderstorm</div>
                <div>Temperature 27</div>
                <div>Humidity 97%</div>
            </div>
            {avg_metrics}
        </div>
    );

}

export default personaEnv;