import React from 'react';
import './layout.css';
import Header from '../persona-header/persona-header';
import SideBar from '../SideBar/sideBar';
import ScreenContents from '../ScreenContents/screenContents';
import Aux from '../Aux/Aux';

const layout = (props) => (
    <div className='layout'>
        <Header role={props.role}/>
        <SideBar />
        <ScreenContents>
            {props.content}
        </ScreenContents>
        <div className='rightBar'>rightBar</div>
        <div className='footer'>Watson IoT</div>
    </div>
);

export default layout;