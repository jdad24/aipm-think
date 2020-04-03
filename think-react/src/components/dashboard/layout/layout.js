import React, { Component } from 'react';
// import ScreenContents from './ScreenContents/screenContents';
import DashboardContent from '../dashboardContent/dashboardContent';
import './layout.css';

class Layout extends Component {
    render() {
        // console.log(this.props.content);
        return (
            <div className="layout-grid">
                <div className="header">IBM</div>
                <div className="below-header"></div>
                <div className="left-col">
                    {/* <DashboardContent />  */}
                </div>
                <div className="main-content">
                    <DashboardContent />
                    {/* <ScreenContents>
                        {this.props.content}
                    </ScreenContents> */}

                </div>
                <div className="right-col"></div>
                <div className="footer"></div>
            </div>
        );
    }
}

export default Layout;