import React from 'react';
import './persona-header.css';

const header = (props) => (
    <div className="Header">
        <div>arrow</div>
        <div>{props.role}</div>
    </div>
);

export default header;

