import React from 'react';
import './layout.css';
import Header from './Header/header';
import SideBar from './SideBar/sideBar';
import ScreenContents from './ScreenContents/screenContents';
import ScreenTop from './ScreenTop/screenTop';
import Aux from '../Aux/Aux';

const layout = (props) => {
    let warnbar = "warnbar";
    let warnText;
    if(props.warn==false){
        warnbar = warnbar+" redwarnbar";
        warnText = "System critical Error Code:67282701 --- Configuration file not responding --- Check configuration -files in DA Level 1 Critical error.";
    }
    return(
        <div className='layout'>
            <Header path={props.path} role={props.role} backClickHandler={props.backClickHandler}/>
            <SideBar />
            <div className={warnbar}>{warnText}</div>
            <ScreenTop>
                {props.screenTop}
            </ScreenTop>
            <ScreenContents>
                {props.content}
            </ScreenContents>
            <div className='rightBar'></div>
            <div className='footer'>Watson IoT</div>
        </div>
    );
}

export default layout;