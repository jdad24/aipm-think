import React from 'react';
import'../assistant.css';

const watsonDialog = (props) => {
    return(
        <div className="dialog watsonDialog">
            <div className="watson">Watson</div>
            <div className="watsonChildren">{props.children}</div>
        </div>
    );
}

export default watsonDialog;