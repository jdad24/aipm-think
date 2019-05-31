import React, { Component } from 'react';
import Header from '../../common-ui/persona-header/persona-header';
import PersonaTime from '../../common-ui/persona-time/persona-time';
import RobotList from '../../common-ui/robot-list/robot-list';
import Aux from '../../common-ui/Aux/Aux';
import VIdashboard from './visual-insights-dashboard/vidashboard';
import './vi.css';

class VisualInsights extends Component {

    // loadVI = () => {

    // }
    state = {
        viDashboard: false,
        robotEnvironment: null,
        imgMsg: null,
        scoreMsg: null
    }

    webSocketHandler = () => {
        let ws;
        let wsUri = "wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc";
        console.log("connect: ", wsUri);
        ws = new WebSocket(wsUri);

        ws.onmessage = (event) => {
            // parse the incoming message as a JSON object
            let msg = JSON.parse(event.data);
            if (this.state.viDashboard === true && (this.state.robotEnvironment === msg.payload.robotEnvironment)) {
                if (msg.payload.type === "image") {
                    console.log("ws image msg.payload.robotEnvironment=" + msg.payload.robotEnvironment);
                    let roboImg = msg.payload.image.toString()
                    this.setState({
                        imgMsg: roboImg
                    });
                }
            }
        }

        ws.onopen = () => {
            console.log("connected");
        }
        ws.onclose = () => {
            setTimeout(this.webSocketHandler, 3000);
        }
    }

    robotClickHandler = (event) => {
        this.setState({
            viDashboard: true,
            robotEnvironment: event.target.value
        });
        console.log(event.target.value);
    }

    // MQTThandler = () => {
    //     let mqttClient;
    //     let mqttClient2;

    //     const myMQTT = () => {
    //         // debugger;
    //         // robot: g:qjue4x:kukagw:lbr1 to 169.45.2.20:1883
    //         let clientId = 'a:qjue4x:' + Math.random().toString(16).substr(2, 8);
    //         console.log("clientId: " + clientId);
    //         // Create a client instance
    //         mqttClient = new Paho.MQTT.Client(
    //             "qjue4x.messaging.internetofthings.ibmcloud.com",
    //             1883,
    //             clientId);

    //         // set callback handlers
    //         mqttClient.onConnectionLost = onConnectionLost;
    //         mqttClient.onMessageArrived = onMessageArrived1;

    //         // connect the client
    //         mqttClient.connect({
    //             onSuccess: onConnect1,
    //             onFailure: onFailure,
    //             userName: "a-qjue4x-al7mm3hvo4",   // apikey
    //             password: "+4B0N)ZGk@BVH1BFy9"
    //         }); // apitoken

    //     }

    //     const myMQTT2 = () => {
    //         // debugger;
    //         // robot: g:qjue4x:kukagw:lbr1 to 169.45.2.20:1883
    //         let clientId = 'a:xbyrsp:' + Math.random().toString(16).substr(2, 8);
    //         console.log("clientId: " + clientId);
    //         // Create a client instance
    //         mqttClient2 = new Paho.MQTT.Client(
    //             "xbyrsp.messaging.internetofthings.ibmcloud.com",
    //             1883,
    //             clientId);

    //         // set callback handlers
    //         mqttClient2.onConnectionLost = onConnectionLost;
    //         mqttClient2.onMessageArrived = onMessageArrived2;

    //         // connect the client
    //         mqttClient2.connect({
    //             onSuccess: onConnect2,
    //             onFailure: onFailure,
    //             userName: "a-xbyrsp-0rf3yixsqn",   // apikey
    //             password: "2I+?sdkfxml_OR8SMR"
    //         }); // apitoken

    //     }

    //     // called when the client connects
    //     const onConnect1 = () => {
    //         // Once a connection has been made, make a subscription and send a message.
    //         console.log("onConnect1");
    //         mqttClient.subscribe("iot-2/type/+/id/+/evt/+/fmt/json");
    //         // mqttClient.subscribe("iot-2/type/kukagw/id/lbr1/evt/torque/fmt/json");
    //     }

    //     const onConnect2 = () => {
    //         // Once a connection has been made, make a subscription and send a message.
    //         console.log("onConnect2");
    //         mqttClient2.subscribe("iot-2/type/+/id/+/evt/+/fmt/json");
    //         // mqttClient.subscribe("iot-2/type/kukagw/id/lbr1/evt/torque/fmt/json");
    //     }

    //     const onFailure = (responseObject) => {
    //         // Once a connection has been made, make a subscription and send a message.
    //         console.log("onFailure" + JSON.stringify(responseObject));
    //     }

    //     // called when the client loses its connection
    //     const onConnectionLost = (responseObject) => {
    //         if (responseObject.errorCode !== 0) {
    //             console.log("onConnectionLost:" + responseObject.errorMessage);
    //         }
    //     }

    //     const onMessageArrived1 = (message)=> {
    //         console.log("inside onMessage 1");
    //         onMessageArrivedCommon(message);
    //     }

    //    const onMessageArrived2 = (message) => {
    //         console.log("inside onMessage 2");
    //         onMessageArrivedCommon(message);
    //     }

    //     // called when a message arrives
    //    const onMessageArrivedCommon = (message) => {
    //         debugger;

    //         console.log("IoT received:" + message._getDestinationName());
    //         // console.log("IoT onMessageArrived:" + message.payloadString);

    //         let myTopic = message._getDestinationName();
    //         let parsedTopic = myTopic.split("/");
    //         let deviceType = parsedTopic[2];
    //         let deviceId = parsedTopic[4];
    //         let cmdEvt = parsedTopic[5];
    //         let valueCmdEvt = parsedTopic[6];
    //         let textJson = parsedTopic[8];  // format = text or json
    //         // console.log("text Json: " + textJson + myTopic);
    //         // for time being, ignore the text messages
    //         if (textJson === "json") {


    //             let myPayload = JSON.parse(message.payloadString);

    //             if (valueCmdEvt === "score") {
    //                 // document.getElementById('iotTopic1b').innerHTML = "topic: " + message._getDestinationName();
    //                 // document.getElementById('iotTopic' + mySlot + 'b').innerHTML = "topic: " + deviceId;
    //                 // document.getElementById('robotEnvironment' + mySlot + 'b').innerHTML = "source: " + deviceId;
    //                 // document.getElementById('mySpeakingClassification' + mySlot).innerHTML = "speaking: " + myPayload.speakingClassification;
    //                 // document.getElementById('myConfidence' + mySlot).innerHTML = "confidence: " + myPayload.confidence;
    //                 // document.getElementById('mySlot' + mySlot).innerHTML = "slot: " + myPayload.slot;

    //             }
    //         }
    //         // debugger;
    //     }
    // }


    render() {
        const temp_style = {
            border: "1px solid green",
            padding: "10px",
            margin: "10px"
        }
        this.webSocketHandler();
        // this.MQTThandler();

        let viContent = "";

        if (this.state.viDashboard) {
            console.log("inside IF");
            console.log(this.state.imgMsg);
            viContent =
                <VIdashboard
                    robot={this.state.robotEnvironment}
                    imgMsg={this.state.imgMsg}
                // scoreMsg = {this.state.scoreMsg} 
                />
        } else {
            viContent =
                <Aux>
                    <div className="persona-section">
                        <PersonaTime name="Carla" />
                        <div style={temp_style}> Assigned to line 3 today</div>
                    </div>
                    <RobotList clickHandler={this.robotClickHandler} />
                </Aux>
        }

        return (

            <div className="VisualInsights" >
                <Header role="Line Manager Dashboard" />
                {viContent}
                {/* <div className="RobotList">
                    <div>gm Carla</div>
                    <div>QA</div>
                </div> */}
                {/* <RobotList onclick={this.loadVI}/> */}
            </div>

        );
    }
}

export default VisualInsights;
