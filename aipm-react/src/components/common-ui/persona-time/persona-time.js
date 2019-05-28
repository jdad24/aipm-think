import React from 'react';
import './persona-time.css';

const personatime = (props) => {

    return (
        <div className="Persona-time">
            <div>Good-morning {props.name}</div>
            <div>Local Time, Date</div>
            <div>Weather and Weather Event</div>
        </div>
    );

}

export default personatime;