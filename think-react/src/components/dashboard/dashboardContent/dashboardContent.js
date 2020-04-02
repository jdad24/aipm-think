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
import { Client } from 'paho-mqtt';


class DashboardContent extends Component {

    state = {
        sTorque: null,
        lTorque: null,
        uTorque: null,
        rTorque: null,
        bTorque: null,
        tTorque: null,
        xPos: [],
        yPos: [],
        zPos: [],
        mqttClient: null
    }

    mqttCredentials = [
        {
            clientId: 'a:vrvzh6:' + Math.random().toString(16).substr(2, 8),
            broker: "vrvzh6.messaging.internetofthings.ibmcloud.com",
            subscribe: "iot-2/type/gsc-yaskawa-gw/id/gsc-yaskawa-01/evt/update/fmt/json",
            username: "a-vrvzh6-lmttnkzxht",
            password: "LRVitW+(soqXuZdJT!"
        },
        {
            clientId: 'a:vrvzh6:' + Math.random().toString(16).substr(2, 8),
            broker: "vrvzh6.messaging.internetofthings.ibmcloud.com",
            subscribe: "iot-2/type/gsc-yaskawa-gw/id/gsc-yaskawa-01/evt/update/fmt/json",
            username: "a-vrvzh6-lmttnkzxht",
            password: "LRVitW+(soqXuZdJT!"
        }
    ]

    componentDidMount() {
        this.mqttHandler('gsc-yaskawa-tire01');

        // var mqtt = require('mqtt')
        // var client = mqtt.connect('wss://test.mosquitto.org:8081')

        // client.on('connect', (err) => {
        //     client.subscribe('telemetry', (err) => {
        //         if (!err) {
        //             console.log("Subscribe Successful")
        //         }
        //     })
        // })

        // client.on('message', (topic, message) => {
            // var json = JSON.parse(message)

            // this.setState({
            //     data: json,
            //     healthScore: null,
            //     sTorque: json.sTorque,
            //     lTorque: json.lTorque,
            //     uTorque: json.uTorque,
            //     rTorque: json.rTorque,
            //     bTorque: json.bTorque,
            //     tTorque: json.tTorque,
            //     xPos: [...this.state.xPos, json.xPos],
            //     yPos: [...this.state.yPos, json.yPos],
            //     zPos: [...this.state.zPos, json.zPos],
            // })
        //     console.log(json)

        // })

    }

    mqttHandler = (device) => {
        let mqtt_clientId = null;
        let mqtt_broker = null;
        let mqtt_username = null;
        let mqtt_password = null;
        switch (device) {
            case 'gsc-yaskawa-tire01':
                mqtt_clientId = this.mqttCredentials[0].clientId;
                mqtt_broker = this.mqttCredentials[0].broker;
                mqtt_username = this.mqttCredentials[0].username;
                mqtt_password = this.mqttCredentials[0].password;
                // debugger;
                break;
            case 'gsc-yaskawa-tire02':
                mqtt_clientId = this.mqttCredentials[1].clientId;
                mqtt_broker = this.mqttCredentials[1].broker;
                mqtt_username = this.mqttCredentials[1].username;
                mqtt_password = this.mqttCredentials[1].password;
                // console.log("switch - device -" + device);
                break;
            // case 'default': 
            // mqtt_clientId = this.mqttCredentials[0].clientId;
            // mqtt_broker = this.mqttCredentials[0].broker;
            // mqtt_username = this.mqttCredentials[0].username;
            // mqtt_password = this.mqttCredentials[0].password;
        }
        // Create a client instance
        let mqtt_client = new Client(mqtt_broker, 8883, mqtt_clientId);
        // set callback handlers
        mqtt_client.onConnectionLost = this.onConnectionLost;
        mqtt_client.onMessageArrived = this.onMessageArrived;
        this.setState({
            mqttClient: mqtt_client
        }, () => {
            // this.client.connect({onSuccess:this.onConnect.bind(this)});
            this.state.mqttClient.connect({
                onSuccess: this.onConnect.bind(this),
                onFailure: this.onFailure,
                userName: mqtt_username,   // apikey
                password: mqtt_password,
                useSSL: true,
            })
        })
    }
    // called when the client loses its connection
    onConnectionLost = (responseObject) => {
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" + responseObject.errorMessage);
        }
    }
    onMessageArrived = (message) => {
        console.log("inside onMessage 2");
        this.onMessageArrivedCommon(message);
    }
    onConnect = (props) => {
        // Once a connection has been made, make a subscription and send a message.
        let subscribeString = null;
        switch ('gsc-yaskawa-tire01') {
            case 'gsc-yaskawa-tire01':
                subscribeString = this.mqttCredentials[0].subscribe;
                console.log("switch - subscribe -" + "gsc-yaskawa-tire01");
                break;
            case 'gsc-yaskawa-tire02':
                subscribeString = this.mqttCredentials[0].subscribe;
                console.log("switch - subscribe -" + "gsc-yaskawa-tire02");
                break;
        }
        console.log("onConnect");
        this.state.mqttClient.subscribe(subscribeString);
    }
    onFailure = (responseObject) => {
        // Once a connection has been made, make a subscription and send a message.
        console.log("onFailure" + JSON.stringify(responseObject));
    }
    // called when a message arrives
    onMessageArrivedCommon = (message) => {
        let myTopic = message.destinationName;
        let parsedTopic = myTopic.split("/");
        let deviceId = parsedTopic[4];
        let valueCmdEvt = parsedTopic[6];
        let textJson = parsedTopic[8];
        if (textJson === "json") {
            let json = JSON.parse(message.payloadString);
            console.log("wholedata",valueCmdEvt,json);

            this.setState({
                data: json,
                healthScore: null,
                sTorque: json.sTorque,
                lTorque: json.lTorque,
                uTorque: json.uTorque,
                rTorque: json.rTorque,
                bTorque: json.bTorque,
                tTorque: json.tTorque,
                xPos: [...this.state.xPos, json.xPos],
                yPos: [...this.state.yPos, json.yPos],
                zPos: [...this.state.zPos, json.zPos],
            })

            // if (valueCmdEvt === "score") {
            //     let score = [deviceId, iotPayload.speakingClassification, iotPayload.confidence, iotPayload.slot];
            //     let cur_scoredata = this.state.scoredata;
            //     cur_scoredata[iotPayload.slot - 1].score = score;
            //     cur_scoredata[iotPayload.slot - 1].slot = iotPayload.slot;
            //     this.setState({
            //         scoredata: cur_scoredata
            //     });
            // }
        }
    }


    render() {
        return (
            // <p>this is also stupid</p> 
            // <p>what do u mean lol</p>
            <div className="contents-container">
                <div className="r1-row robot-col card-padding robot-name">Robot 1</div>
                <div className="r1-row robot-health card-padding card-color"><RobotHealth image={null} /></div>
                <div className="r1-row position card-padding card-color">
                    <Graph
                        xPos={this.state.xPos}
                        yPos={this.state.yPos}
                        zPos={this.state.zPos}
                    />
                </div>
                <div className="j1-j2-j3-r1 j1-j4-col"><TorqueContent torque={this.state.sTorque} title="S" image={asset4} score={98.7} /></div>
                <div className="j1-j2-j3-r1 j2-j5-col"><TorqueContent torque={this.state.lTorque} title="L" image={asset3} score={98.7} /></div>
                <div className="j1-j2-j3-r1 j3-j6-col"><TorqueContent torque={this.state.uTorque} title="U" image={asset2} score={98.7} /></div>
                <div className="j4-j5-j6-r1 j1-j4-col"><TorqueContent torque={this.state.rTorque} title="R" image={asset6} score={98.7} /></div>
                <div className="j4-j5-j6-r1 j2-j5-col"><TorqueContent torque={this.state.bTorque} title="B" image={asset7} score={98.7} /></div>
                <div className="j4-j5-j6-r1 j3-j6-col"><TorqueContent torque={this.state.tTorque} title="T" image={asset8} score={98.7} /></div>
                <div className="gap-line" />
                <div className="r2-row robot-col card-padding robot-name">Robot 2</div>
                <div className="r2-row robot-health card-padding card-color"><RobotHealth image={null} /></div>
                <div className="r2-row position card-padding card-color">
                    <Graph
                        xPos={this.state.xPos}
                        yPos={this.state.yPos}
                        zPos={this.state.zPos}
                    />
                </div>
                <div className="j1-j2-j3-r2 j1-j4-col"><TorqueContent torque={this.state.sTorque} title="S" image={asset2} score={98.7} /></div>
                <div className="j1-j2-j3-r2 j2-j5-col"><TorqueContent torque={this.state.lTorque} title="L" image={asset3} score={98.7} /></div>
                <div className="j1-j2-j3-r2 j3-j6-col"><TorqueContent torque={this.state.uTorque} title="U" image={asset4} score={98.7} /></div>
                <div className="j4-j5-j6-r2 j1-j4-col"><TorqueContent torque={this.state.rTorque} title="R" image={asset6} score={98.7} /></div>
                <div className="j4-j5-j6-r2 j2-j5-col"><TorqueContent torque={this.state.bTorque} title="B" image={asset7} score={98.7} /></div>
                <div className="j4-j5-j6-r2 j3-j6-col"><TorqueContent torque={this.state.tTorque} title="T" image={asset8} score={98.7} /></div>
            </div>
        );
    }
}

export default DashboardContent;