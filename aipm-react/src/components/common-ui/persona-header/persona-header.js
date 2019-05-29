import React from 'react';
import './persona-header.css';
import { Link } from 'react-router-dom';

const header = (props) => (
    <div className="Header">
        <Link to="/">
            <div>
                <button>arrow</button>
            </div>
        </Link>
        <div>{props.role}</div>
    </div>
);

export default header;

