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
                <div>
                    {/* <span> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.5 -4.5 100 35"><path d="M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22z"/><path d="M15.87 30.5l-1.74-1 3.15-5.5h-6l4.85-8.5 1.74 1-3.15 5.5h6l-4.85 8.5z"/></svg> */}
                    {/* </span> */}
                    <span>Thunderstorm</span>
                </div>
                <div>Temperature 27</div>
                <div>Humidity 97%</div>
            </div>
            {avg_metrics}
        </div>
    );

}

export default personaEnv;