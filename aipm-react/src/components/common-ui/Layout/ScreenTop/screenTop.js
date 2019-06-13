import React from 'react';
import './screenTop.css';

const screenTop = (props) => {
    return(
        <div className='screenTop'>
        {props.children}
        </div>
    );
}

export default screenTop;