import React from 'react';
import './modal.css';
import Aux from '../Aux/Aux';
import Backdrop from '../Backdrop/backdrop';
const modal = (props) => {
    let styling = "Modal "+ props.styling;
    // alert(styling);
    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div
                className={styling}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {/* <div>modal</div> */}
                {props.children}
            </div>
        </Aux>
    
    );
}

export default modal;