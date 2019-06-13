import React from 'react';
import './screenContents.css';

const screenContents = (props) => (
    <div className="screenContents">
    {props.children}
    </div>
);

export default screenContents;