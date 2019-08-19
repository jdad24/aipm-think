import React from 'react';
import BasicCard from '../../../common-ui/BasicCard/basicCard';
import './itDasboardComponents.css';

const alerts = () => {

    let alerts = ["Data Replication", "Network connectivity"];
    let index = 0;
    let ito_list_style = "dotStatus ito_list ito_list_border";
    let alert_list = alerts.map(alert => {
        if (index == alerts.length - 1) {
            ito_list_style = "dotStatus ito_list";
        }
        index++;
        // return <div className={ito_list_style} key={activity}>{activity}</div>
        return  <div key={alert}className={ito_list_style}>
        <div className="dot" />
        <div className="status">{alert}</div>
    </div>
    });

    return (
        <BasicCard classname="itCard">
            <div className="sysStatusContainer">
                <div className="titleStatusContainer">
                    <div className="title">Alerts</div>
                    {/* <div className="status">last 6 hours</div> */}
                </div>
                {alert_list}
                {/* <div className="dotStatus ito_list ito_list_border">
                    <div className="dot" />
                    <div className="status">Data Replication</div>
                </div>

                <div className="dotStatus ito_list">
                    <div className="dot" />
                    <div className="status">Network connectivity</div>
                </div> */}
                {/* <div>Data Replication</div> */}
                {/* <div>Network connectivity</div> */}
            </div>
        </BasicCard>
    );
}

export default alerts;