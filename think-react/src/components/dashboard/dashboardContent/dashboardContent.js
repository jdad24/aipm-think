import React, { Component } from 'react';
import './dashboardContent.css';
import Graph from '../../3DGraph/3DGraph';
import RobotHealth from '../../RobotHealth/RobotHealth';
import TorqueContent from '../../TorqueContent/TorqueContent';
import yellowRobot from '../../../Assets/robot-arm-yellow.png';
import orangeRobot from '../../../Assets/robot-arm-orange.png';
import asset2 from '../../../Assets/Asset2.png';
import asset3 from '../../../Assets/Asset3.png';
import asset4 from '../../../Assets/Asset4.png';
import asset5 from '../../../Assets/Asset5.png';
import asset6 from '../../../Assets/Asset6.png';
import asset7 from '../../../Assets/Asset7.png';
import asset8 from '../../../Assets/Asset8.png';


class DashboardContent extends Component {

    state = {
        sTorque: null,
        lTorque: null,
        uTorque: null,
        rTorque: null,
        bTorque: null,
        tTorque: null,
        xPos: null,
        yPos: null,
        zPos: null,
    }

    componentDidMount() {
        var mqtt = require('mqtt')
        var client = mqtt.connect('ws://test.mosquitto.org:8081')

        client.on('connect', (err) => {
            client.subscribe('telemetry', (err) => {
                if(!err) {
                    console.log("Subscribe Successful")
                }
            })
        })

        client.on('message', (topic, message) => {
            this.setState({
                healthScore: null,
                sTorque: null,
                lTorque: null,
                uTorque: null,
                rTorque: null,
                bTorque: null,
                tTorque: null,
                xPos: null,
                yPos: null,
                zPos: null,
            })
            console.log(message.toString())
            
        })

    }


    render() {
        return (
            // <p>this is also stupid</p> 
            // <p>what do u mean lol</p>
            <div className="contents-container">
                <div className="r1-row robot-col card-padding robot-name">Robot 1</div>
                <div className="r1-row robot-health card-padding card-color"><RobotHealth image={null}/></div>
                <div className="r1-row position card-padding card-color"><Graph /></div>
                <div className="j1-j2-j3-r1 j1-j4-col"><TorqueContent title="S" image={asset4} score={8.7}/></div>
                <div className="j1-j2-j3-r1 j2-j5-col"><TorqueContent title="L" image={asset3} score={8.7}/></div>
                <div className="j1-j2-j3-r1 j3-j6-col"><TorqueContent title="U" image={asset2} score={8.7}/></div>
                <div className="j4-j5-j6-r1 j1-j4-col"><TorqueContent title="R" image={asset6} score={8.7}/></div>
                <div className="j4-j5-j6-r1 j2-j5-col"><TorqueContent title="B" image={asset7} score={8.7}/></div>
                <div className="j4-j5-j6-r1 j3-j6-col"><TorqueContent title="T" image={asset8} score={8.7}/></div>
                <div className="gap-line"/>
                <div className="r2-row robot-col card-padding robot-name">Robot 2</div>
                <div className="r2-row robot-health card-padding card-color"><RobotHealth image={null}/></div>
                <div className="r2-row position card-padding card-color"><Graph /></div>
                <div className="j1-j2-j3-r2 j1-j4-col"><TorqueContent title="S" image={asset2} score={8.7}/></div>
                <div className="j1-j2-j3-r2 j2-j5-col"><TorqueContent title="L" image={asset3} score={8.7}/></div>
                <div className="j1-j2-j3-r2 j3-j6-col"><TorqueContent title="U" image={asset4} score={8.7}/></div>
                <div className="j4-j5-j6-r2 j1-j4-col"><TorqueContent title="R" image={asset6} score={8.7}/></div>
                <div className="j4-j5-j6-r2 j2-j5-col"><TorqueContent title="B" image={asset7} score={8.7}/></div>
                <div className="j4-j5-j6-r2 j3-j6-col"><TorqueContent title="T" image={asset8} score={8.7}/></div>
            </div>
        );
    }
}

export default DashboardContent;