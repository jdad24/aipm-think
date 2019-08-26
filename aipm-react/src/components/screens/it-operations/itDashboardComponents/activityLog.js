import React, { PureComponent } from 'react';
import axios from 'axios';
import BasicCard from '../../../common-ui/BasicCard/basicCard';
import Aux from '../../../common-ui/Aux/Aux';
import './itDasboardComponents.css';

class ActivityLog extends PureComponent {

    state = {
        activityLog: null
    }

    static getDerivedStateFromProps = (props, state) => {
        return {
            activityLog: props.activityLog
        }

    }

    getMainContent = () => {
        //console.log(this.state.sysStatus);

        let index = 0;
        let ito_list_style = "ito_list ito_list_border";
        let activities = this.state.activityLog.map(activity => {
            if(index == this.state.activityLog.length -1){
                ito_list_style = "ito_list";
            }
            index++;
            return <div className={ito_list_style} key={activity}>{activity}</div>
        });

        // let activities = this.state.activityLog.map(activity => {
        //     return <div className="ito_list" key={activity} >{activity}</div>
        // });

        // let activities = <div>{this.state.activities[1]}</div>;

        let content =
            (<div className="sysStatusContainer">
                <div className="titleStatusContainer">
                    <div className="title">Activity Log</div>
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