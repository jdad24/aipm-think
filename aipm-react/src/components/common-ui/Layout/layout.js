import React from 'react';
import './layout.css';
import Header from './Header/header';
import SideBar from './SideBar/sideBar';
import ScreenContents from './ScreenContents/screenContents';
import ScreenTop from './ScreenTop/screenTop';
import Aux from '../Aux/Aux';

const layout = (props) => (
    <div className='layout'>
        <Header role={props.role} />
        <SideBar />
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

export default layout;