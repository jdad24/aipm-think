import React from 'react';
import './circle.css';

const circle = (props) => {
    return <div className="circle blueCircle circleDimension">
        <div className="currentCircle circle" />
        {/* {props.children} */}
    </div>;
}

export default circle;