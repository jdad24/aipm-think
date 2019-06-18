import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import charIcon from '../../../../assets/chat.svg';

const header = (props) => (
    <div className="Header">
        <Link to="/">
            <div>
                <button>arrow</button>
            </div>
        </Link>
        <div>{props.role}</div>
        <div>
            <img src={charIcon}/> 
        </div>
    </div>
);

export default header;

