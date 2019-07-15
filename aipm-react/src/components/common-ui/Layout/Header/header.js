import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import chatIcon from '../../../../assets/chat.svg';
import onlineIcon from '../../../../assets/online.svg';
import notificationIcon from '../../../../assets/notifications.svg';
import accountIcon from '../../../../assets/account.svg';
import helpIcon from '../../../../assets/help.svg';
import arrowIcon from '../../../../assets/arrow.svg';


const header = (props) => {
    let backButton;
    if (props.path) {
        backButton =
            <Link to={props.path}>
                <div className="backIcon" >
                    <img src={arrowIcon} />
                </div>
            </Link>

    } else {
        backButton =
        <div onClick={props.backClickHandler}>
            <div className="backIcon" >
                <img src={arrowIcon} />
            </div>
        </div>
    }

    return (
        <div className="Header">
            <div className="headerContents headerContentsLeft">
                {/* <div onClick={props.backClickHandler}> */}
                    {/* <Link to={props.path}> */}
                    {/* <Link to="/">
                    <div className="backIcon" >
                        <img src={arrowIcon} />
                    </div>
                    </Link> */}
                {/* </div> */}
                {backButton}
                <div>{props.role}</div>
            </div>
            <div className="headerContents headerContentsRight">
                <div className="chatIcon">
                    <img src={chatIcon} />
                    {/* <img src={onlineIcon} /> */}
                    <span></span>
                </div>
                <div><img src={notificationIcon} /></div>
                <div><img src={accountIcon} /></div>
                <div><img src={helpIcon} /></div>
            </div>
        </div>
    );

}

export default header;

