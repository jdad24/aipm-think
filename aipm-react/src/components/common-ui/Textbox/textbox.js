import React from 'react';
import { tsPropertySignature } from '@babel/types';

const textbox = (props) => {
    return(
        <div className={props.style}>
            <input
            type="text"
            value={props.value}
            placeholder={props.label} />
        </div>
    );
}

export default textbox;