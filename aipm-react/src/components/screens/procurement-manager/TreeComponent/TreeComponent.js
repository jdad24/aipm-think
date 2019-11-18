import React from 'react';

const treeComponent = (props) => (

    // props.show?(
    // <div>
    //     {props.children}
    // </div>
    // ): <div></div>

    <div style={{ display: props.show ? 'block' : 'none'}}>
        {props.children}
    </div>
);
//e.target.nextSibling.style.display="none"
export default treeComponent;