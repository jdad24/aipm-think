import React from 'react';
import './basicCard.css';

const basicCard = (props) => {
    let style = props.classname + " basicCard";
return (
    <div className={style}>
    {props.children}
    </div>
);
}


export default basicCard;