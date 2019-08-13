import React, { Component } from 'react';
import axios from 'axios';
import BasicCard from '../../../common-ui/BasicCard/basicCard';
import Aux from '../../../common-ui/Aux/Aux';
import './itDasboardComponents.css';

class ActivityLog extends Component {

    state = {
        sysStatus: null,
        activities: []
    }

    componentDidMount() {
        axios.get('https://aipm-gsc-nodered.mybluemix.net/getSysStatus').then(response => {
            console.log(response);
            this.setState({
                sysStatus: response.data.status,
                activities: response.data.activities
            });
        });
    }

    getMainContent = () => {
        console.log(this.state.sysStatus);
        let activities = this.state.activities.map(activity => {
            return <div>{activity}</div>
        });

        // let activities = <div>{this.state.activities[1]}</div>;

        let content =
            (<div className="sysStatusContainer">
                <div className="titleStatusContainer">
                    <div className="title">Activity Log</div>
                    <div className="status">{this.state.sysStatus}</div>
                </div>
                <div>{activities}</div>
            </div>);
        return content;
    }

    render() {
        let content = this.getMainContent();

        return (
            <BasicCard classname = "itCard">
                {content}
            </BasicCard>
        );
        // return (
        //     <Aux>
        //         <div>
        //             <div>System Status:</div>
        //             <div>{this.state.sysStatus}</div>
        //         </div>
        //         {content}
        //         {/* <div>{this.state.activities}</div> */}
        //     </Aux>
        // );
    }

}

export default ActivityLog;