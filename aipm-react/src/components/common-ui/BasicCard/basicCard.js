import React from 'react';
import './basicCard.css';

const basicCard = (props) => (
    <div className="basicCard">
    {props.children}
    </div>
);

export default basicCard;