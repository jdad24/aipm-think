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
import robotPic from '../../../Assets/gp7Blue.png';
import Aux from '../.././common-ui/Aux/Aux';


class DashboardContent extends Component {

    state = {
        healthScore01: null,
        healthScore02: null,
        torque01: [],
        torque02: [],
        xPos01: [],
        yPos01: [],
        zPos01: [],
        xPos02: [],
        yPos02: [],
        zPos02: [],
        mqttClient1: null,
        mqttClient2: null,
    }

    mqttCredentials = [
        {
            clientId: 'a:vrvzh6:' + Math.random().toString(16).substr(2, 8),
            broker: "vrvzh6.messaging.internetofthings.ibmcloud.com",
            subscribe: "iot-2/type/gsc-yaskawa-gw/id/gsc-yaskawa-tire01/evt/+/fmt/json",
            username: "a-vrvzh6-lmttnkzxht",
            password: "LRVitW+(soqXuZdJT!"
        },
        {
            clientId: 'a:vrvzh6:' + Math.random().toString(16).substr(2, 8),
            broker: "vrvzh6.messaging.internetofthings.ibmcloud.com",
            subscribe: "iot-2/type/gsc-yaskawa-gw/id/gsc-yaskawa-tire02/evt/+/fmt/json",
            username: "a-vrvzh6-lmttnkzxht",
            password: "LRVitW+(soqXuZdJT!"
        }
    ]

    componentDidMount() {
        this.mqttHandler();
    }

    mqttHandler = () => {
        let mqtt_clientId1 = null;
        let mqtt_broker1 = null;
        let mqtt_username1 = null;
        let mqtt_password1 = null;
        let mqtt_clientId2 = null;
        let mqtt_broker2 = null;
        let mqtt_username2 = null;
        let mqtt_password2 = null;


        mqtt_clientId1 = this.mqttCredentials[0].clientId;
        mqtt_broker1 = this.mqttCredentials[0].broker;
        mqtt_username1 = this.mqttCredentials[0].username;
        mqtt_password1 = this.mqttCredentials[0].password;
        // debugger;

        mqtt_clientId2 = this.mqttCredentials[1].clientId;
        mqtt_broker2 = this.mqttCredentials[1].broker;
        mqtt_username2 = this.mqttCredentials[1].username;
        mqtt_password2 = this.mqttCredentials[1].password;
        // console.log("switch - device -" + device);


        // Create a client instance
        let mqtt_client1 = new Client(mqtt_broker1, 8883, mqtt_clientId1);
        let mqtt_client2 = new Client(mqtt_broker2, 8883, mqtt_clientId2);
        // set callback handlers
        mqtt_client1.onConnectionLost = this.onConnectionLost;
        mqtt_client1.onMessageArrived = this.onMessageArrived_tire01;
        mqtt_client2.onConnectionLost = this.onConnectionLost;
        mqtt_client2.onMessageArrived = this.onMessageArrived_tire02;
        this.setState({
            mqttClient1: mqtt_client1,
            mqttClient2: mqtt_client2
        }, () => {
            // this.client.connect({onSuccess:this.onConnect.bind(this)});
            this.state.mqttClient1.connect({
                onSuccess: this.onConnect1.bind(this),
                onFailure: this.onFailure,
                userName: mqtt_username1,   // apikey
                password: mqtt_password1,
                useSSL: true,
            })

            this.state.mqttClient2.connect({
                onSuccess: this.onConnect2.bind(this),
                onFailure: this.onFailure,
                userName: mqtt_username2,   // apikey
                password: mqtt_password2,
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
    // onMessageArrived = (message) => {
    //     console.log("inside onMessage 2");
    //     this.onMessageArrivedCommon(message);
    // }
    onConnect1 = () => {
        // Once a connection has been made, make a subscription and send a message.
        let subscribeString = null;
        subscribeString = this.mqttCredentials[0].subscribe;
        console.log("subscribe -" + "gsc-yaskawa-tire01");
        this.state.mqttClient1.subscribe(subscribeString);
    }
    onConnect2 = () => {
        // Once a connection has been made, make a subscription and send a message.
        let subscribeString = null;
        subscribeString = this.mqttCredentials[1].subscribe;
        console.log("subscribe -" + "gsc-yaskawa-tire02");
        this.state.mqttClient2.subscribe(subscribeString);
        // this.state.mqttClient2.subscribe(subscribeString);
    }

    onFailure = (responseObject) => {
        // Once a connection has been made, make a subscription and send a message.
        console.log("onFailure" + JSON.stringify(responseObject));
    }
    // called when a message arrives
    onMessageArrived_tire01 = (message) => {
        let myTopic = message.destinationName;
        let parsedTopic = myTopic.split("/");
        let deviceId = parsedTopic[4];
        let valueCmdEvt = parsedTopic[6];
        let textJson = parsedTopic[8];

        var health;

        if (textJson === "json") {
            let json = JSON.parse(message.payloadString);
            console.log("TIRE01", valueCmdEvt, json);
            // console.log("TOPIC - ", JSON.parse(message.destinationName));
            if(valueCmdEvt=="health") {
                health = json['LP-FAILURE'] * 100
                health = health.toFixed(1)
                this.setState({
                    healthScore01: health
                })
            } else if(valueCmdEvt=="update") {
                let torque= [json.sTorque,json.lTorque,json.uTorque,json.rTorque,json.bTorque,json.tTorque];
           
            this.setState({
                data: json,
                torque01: torque,
                xPos01: [...this.state.xPos01, json.xPos],
                yPos01: [...this.state.yPos01, json.yPos],
                zPos01: [...this.state.zPos01, json.zPos],
            })
                
            }

        }
    }

    onMessageArrived_tire02 = (message) => {
        let myTopic = message.destinationName;
        let parsedTopic = myTopic.split("/");
        let deviceId = parsedTopic[4];
        let valueCmdEvt = parsedTopic[6];
        let textJson = parsedTopic[8];

        var health;

        if (textJson === "json") {
            let json = JSON.parse(message.payloadString);
            console.log("TIRE02", valueCmdEvt, json);
            // console.log("TOPIC - ", JSON.parse(message.destinationName));
            if(valueCmdEvt=="health") {
                health = json['LP-FAILURE'] * 100
                health = health.toFixed(1)
                this.setState({
                    healthScore02: health
                })
            } else if(valueCmdEvt=="update") {
                let torque= [json.sTorque,json.lTorque,json.uTorque,json.rTorque,json.bTorque,json.tTorque];
           
            this.setState({
                data: json,
                torque02: torque,
                xPos02: [...this.state.xPos02, json.xPos],
                yPos02: [...this.state.yPos02, json.yPos],
                zPos02: [...this.state.zPos02, json.zPos],
            })
                
            }

        }
    }

    getMainContent = () => {
        let mainContent = <div>No data</div>
        if (this.state.xPos01 && this.state.torque01 ) {
            mainContent = (
                <div className="contents-container">
                <div className="r1-row robot-col card-padding robot-name">Palletizer</div>
                <div className="r1-row robot-health card-padding card-color"><RobotHealth score={this.state.healthScore01} image={robotPic} /></div>
                <div className="r1-row position card-padding card-color">
                    <Graph
                        xPos={this.state.xPos01}
                        yPos={this.state.yPos01}
                        zPos={this.state.zPos01}
                    />
                </div>
                <div className="j1-j2-j3-r1 j1-j4-col"><TorqueContent robot="Palletizer" torque={this.state.torque01[0]} title="S" image={asset4} score={98.7} /></div>
                <div className="j1-j2-j3-r1 j2-j5-col"><TorqueContent robot="Palletizer" torque={this.state.torque01[1]} title="L" image={asset3} score={98.7} /></div>
                <div className="j1-j2-j3-r1 j3-j6-col"><TorqueContent robot="Palletizer" torque={this.state.torque01[2]} title="U" image={asset2} score={98.7} /></div>
                <div className="j4-j5-j6-r1 j1-j4-col"><TorqueContent robot="Palletizer" torque={this.state.torque01[3]} title="R" image={asset6} score={98.7} /></div>
                <div className="j4-j5-j6-r1 j2-j5-col"><TorqueContent robot="Palletizer" torque={this.state.torque01[4]} title="B" image={asset7} score={98.7} /></div>
                <div className="j4-j5-j6-r1 j3-j6-col"><TorqueContent robot="Palletizer" torque={this.state.torque01[5]} title="T" image={asset8} score={98.7} /></div>
                <div className="gap-line">
                    <div className="gap-div gap-div1" />
                    <div className="gap-div" />
                </div>
                <div className="r2-row robot-col card-padding robot-name">Depalletizer</div>
                <div className="r2-row robot-health card-padding card-color"><RobotHealth score={this.state.healthScore02} image={robotPic} /></div>
                <div className="r2-row position card-padding card-color">
                    <Graph
                        xPos={this.state.xPos02}
                        yPos={this.state.yPos02}
                        zPos={this.state.zPos02}
                    />
                </div>
                <div className="j1-j2-j3-r2 j1-j4-col"><TorqueContent robot="Depalletizer" torque={this.state.torque02[0]} title="S" image={asset4} score={98.7} /></div>
                <div className="j1-j2-j3-r2 j2-j5-col"><TorqueContent robot="Depalletizer" torque={this.state.torque02[1]} title="L" image={asset3} score={98.7} /></div>
                <div className="j1-j2-j3-r2 j3-j6-col"><TorqueContent robot="Depalletizer" torque={this.state.torque02[2]} title="U" image={asset2} score={98.7} /></div>
                <div className="j4-j5-j6-r2 j1-j4-col"><TorqueContent robot="Depalletizer" torque={this.state.torque02[3]} title="R" image={asset6} score={98.7} /></div>
                <div className="j4-j5-j6-r2 j2-j5-col"><TorqueContent robot="Depalletizer" torque={this.state.torque02[4]} title="B" image={asset7} score={98.7} /></div>
                <div className="j4-j5-j6-r2 j3-j6-col"><TorqueContent robot="Depalletizer" torque={this.state.torque02[5]} title="T" image={asset8} score={98.7} /></div>
            </div>
            );
        }

        return mainContent;
    }
    


    render() {

        let dashboardContent = this.getMainContent();

        return (
            // <p>this is also stupid</p> 
            // <p>what do u mean lol</p>
            <Aux>{dashboardContent}</Aux>
            
        );
    }
}

export default DashboardContent;
