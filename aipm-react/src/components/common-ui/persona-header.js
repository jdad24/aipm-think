import React from 'react';
import '../../styles/App.css';

const header = (props) => (
    <div className="Header">
        <div>arrow</div>
        <div>{props.role}</div>
    </div>
);

export default header;

