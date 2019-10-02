import React from 'react';
import './circle.css';
import './currentCircle.css';

const circle = (props) => {
    return <div className="circle">
        <div className="currentCircle" />
        {/* {props.children} */}
    </div>;
}

export default circle;