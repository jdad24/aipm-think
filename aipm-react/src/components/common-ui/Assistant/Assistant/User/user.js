import React from 'react';
import '../assistant.css';

const userDialog = (props) => {
    return(
        <div className="dialog userDialog">
            <div className="user">{props.name}</div>
            <div>{props.children}</div>
        </div>
    );
}

export default userDialog;