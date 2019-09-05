import React,{Component} from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import chatIcon from '../../../../assets/chat.svg';
import onlineIcon from '../../../../assets/online.svg';
import notificationIcon from '../../../../assets/notifications.svg';
import accountIcon from '../../../../assets/account.svg';
import helpIcon from '../../../../assets/help.svg';
import arrowIcon from '../../../../assets/arrow.svg';


class Header extends Component{

    getHeader = () => {
        let backButton;
        if (this.props.path) {
            backButton =
                <Link to={this.props.path}>
                    <div className="backIcon" >
                        <img src={arrowIcon} />
                    </div>
                </Link>
    
        } else {
            backButton =
            <div onClick={this.props.backClickHandler}>
                <div className="backIcon" >
                    <img src={arrowIcon} />
                </div>
            </div>
        }
    
        return backButton;
    
    }

    render(){
        let backButton = this.getHeader();
        return (
            <div className="Header">
                <div className="headerContents headerContentsLeft">
                    {backButton}
                    <div>{this.props.role}</div>
                </div>
                <div className="headerContents headerContentsRight">
                    <div className="chatIcon" onClick={this.props.chatHandler}>
                        <img src={chatIcon} />
                        <span></span>
                    </div>
                    <div><img src={notificationIcon} /></div>
                    <div><img src={accountIcon} /></div>
                    <div><img src={helpIcon} /></div>
                </div>
            </div>
        );
    }
}

export default Header;

