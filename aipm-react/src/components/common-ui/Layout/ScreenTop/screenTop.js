import React from 'react';
import './screenTop.css';

const screenTop = (props) => {
    return(
        <div className='screenTop'>
            {/* <div className="redbar">red bar</div> */}
        {props.children}
        </div>
    );
}

export default screenTop;