import React, { Component } from 'react';
import './layout.css';
import Header from './Header/header';
import SideBar from './SideBar/sideBar';
import ScreenContents from './ScreenContents/screenContents';
import ScreenTop from './ScreenTop/screenTop';
import Assistant from '../Assistant/Assistant';
import Aux from '../Aux/Aux';


class Layout extends Component {

    state = {
        showAssistant: false
    }

    chatClickHandler = () => {
        let show = this.state.showAssistant;
        this.setState({
            showAssistant: !show
        });
    }

    getWarnBar = () => {
        let w = {
            warnbar: "warnbar",
            warnText : null
        };

        if (this.props.warn == false) {
            w.warnbar = w.warnbar + " redwarnbar";
            w.warnText = "System critical Error Code:67282701 --- Configuration file not responding --- Check configuration -files in DA Level 1 Critical error.";
        }
        return w;
    }

    render() {

        let w = this.getWarnBar();
        return (
            <div className='layout'>
                <Header chatHandler={this.chatClickHandler} path={this.props.path} role={this.props.role} backClickHandler={this.props.backClickHandler} />
                <Assistant show={this.state.showAssistant}/>
                <SideBar />
                <div className={w.warnbar}>{w.warnText}</div>
                <ScreenTop>
                    {this.props.screenTop}
                </ScreenTop>
                <ScreenContents>
                    {this.props.content}
                </ScreenContents>
                <div className='rightBar'></div>
                <div className='footer'>Watson IoT</div>
            </div>
        );
    }
}

export default Layout;