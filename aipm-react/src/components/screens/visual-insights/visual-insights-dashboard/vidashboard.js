import React, { Component } from 'react';
// import Aux from '../../../common-ui/Aux/Aux';
import ImgContainer from './viContainer/imgContainer';
import ScoreContainer from './viContainer/scoreContainer';
// import BasicCard from '../../../common-ui/BasicCard/basicCard';
// import { Client } from 'paho-mqtt';
import './vidashboard.css';

class viDashboard extends Component {

    state = {
        mqttClient: null,
        imgdata: [
            { slot: null, img: null },
            { slot: null, img: null },
            { slot: null, img: null },
            { slot: null, img: null }
        ],
        scoredata: [
            { slot: null, score: null },
            { slot: null, score: null },
            { slot: null, score: null },
            { slot: null, score: null }
        ]
    }

    // mqttCredentials = [
    //     {
    //         clientId: 'a:qjue4x:' + Math.random().toString(16).substr(2, 8),
    //         broker: "qjue4x.messaging.internetofthings.ibmcloud.com",
    //         subscribe: "iot-2/type/+/id/+/evt/+/fmt/json",
    //         username: "a-qjue4x-al7mm3hvo4",
    //         password: "+4B0N)ZGk@BVH1BFy9"

    //     },
    //     {
    //         clientId: 'a:xbyrsp:' + Math.random().toString(16).substr(2, 8),
    //         broker: "xbyrsp.messaging.internetofthings.ibmcloud.com",
    //         subscribe: "iot-2/type/+/id/+/evt/+/fmt/json",
    //         username: "a-xbyrsp-0rf3yixsqn",
    //         password: "2I+?sdkfxml_OR8SMR"

    //     }
    // ]
    //required if web sockets are different for different devices
    wsCredentials = {
        "yaskawa": "wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/yaskawa",
        "kuka": "wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/kuka",
        "replay": "wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc",
        "raisinReplay": "wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/raisinReplay"
    }


    ws = null;
    isClosing = false;

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.webSocketHandler();
        //this.mqttHandler(this.props.robot);
    };

    componentWillUnmount() {
        console.log("componentWillUnmount");
        this.isClosing = true;

        if (this.ws) {
            this.ws.close();
            console.log("YES! - componentWillUnmount");

        }
    }

    webSocketHandler = () => {
        let ws;
        let wsUri = this.wsCredentials[this.props.robot];
        ws = new WebSocket(wsUri);
        this.ws = ws;
        ws.onmessage = (event) => {
            // parse the incoming message as a JSON object
            let msg = JSON.parse(event.data);
            // console.log(msg);
            // if (msg.msgType === undefined) {
            //     msg = msg.payload;
            //     console.log("msg.msgType undefined");
            // } else {
            //     console.log("msg.msgType: " + msg.msgType);
            // }

            // console.log("props: " + this.props.robot + " msg: ");
            // console.log(msg);
           // if ((msg.msgType !== "yaskawaTorqueTemp") && (msg.msgType !== "yaskawaRobotHealth")) {
                //debugger;

                if (msg.msgType === "image" && msg.robotSource === this.props.robot) {
                    let slot = msg.slot;

                    // console.log("ws image msg.payload.robotEnvironment=" + msg.robotSource);
                    let roboImg = msg.image.toString();
                    let imgdata = this.state.imgdata;
                    imgdata[slot - 1].slot = slot;
                    imgdata[slot - 1].img = roboImg;

                    this.setState({
                        imgdata: imgdata
                    }, () => {
                        console.log("viIMAGE - Parent - " + slot);
                        console.log(this.state);
                    });
                }


                //below line is required only if ws socket is the same        
                // if (this.props.robot === msg.payload.robotEnvironment) {
                else if (msg.type === "scoring" && msg.robotSource === this.props.robot) {
                    // console.log("Score MSG");
                    // console.log(msg);
                    
                    let d = new Date();
                    let score = [msg.robotSource, msg.speakingClassification, msg.confidence, msg.slot, msg.batch, msg.date, d.toLocaleTimeString()];
                    console.log("SCORE");
                    console.log(score);
                    let cur_scoredata = this.state.scoredata;
                    cur_scoredata[msg.slot - 1].score = score;
                    cur_scoredata[msg.slot - 1].slot = msg.slot;

                    this.setState({
                        scoredata: cur_scoredata
                    });

                    // // let myTopic = message.destinationName;
                    // // let parsedTopic = myTopic.split("/");
                    // let deviceId = parsedTopic[4];
                    // let valueCmdEvt = parsedTopic[6];
                    // let textJson = parsedTopic[8];

                    // if (textJson === "json") {
                    //     let iotPayload = JSON.parse(message.payloadString);

                    //     if (valueCmdEvt === "score") {
                    //         let score = [deviceId, iotPayload.speakingClassification, iotPayload.confidence, iotPayload.slot];
                    //         let cur_scoredata = this.state.scoredata;
                    //         cur_scoredata[iotPayload.slot - 1].score = score;
                    //         cur_scoredata[iotPayload.slot - 1].slot = iotPayload.slot;

                    //         this.setState({
                    //             scoredata: cur_scoredata
                    //         });

                    //     }
                    // }

                }
            // }
            // }

        }

        ws.onopen = () => {
            console.log("connected");
        }

        ws.onclose = () => {
            console.log("------------>inside onclose");
            if (this.isClosing !== true) {
                this.webSocketHandler();
            }
        }
        // ws.onclose = () => {
        //     setTimeout(this.webSocketHandler, 3000);
        // }
    }

    // mqttHandler = (device) => {

    //     let mqtt_clientId = null;
    //     let mqtt_broker = null;
    //     let mqtt_username = null;
    //     let mqtt_password = null;



    //     switch (device) {
    //         case 'yaskawa001':
    //             mqtt_clientId = this.mqttCredentials[0].clientId;
    //             mqtt_broker = this.mqttCredentials[0].broker;
    //             mqtt_username = this.mqttCredentials[0].username;
    //             mqtt_password = this.mqttCredentials[0].password;
    //             // debugger;
    //             break;

    //         case 'kuka001':
    //             mqtt_clientId = this.mqttCredentials[1].clientId;
    //             mqtt_broker = this.mqttCredentials[1].broker;
    //             mqtt_username = this.mqttCredentials[1].username;
    //             mqtt_password = this.mqttCredentials[1].password;
    //             // console.log("switch - device -" + device);
    //             break;

    //         case 'replay':
    //             mqtt_clientId = this.mqttCredentials[0].clientId;
    //             mqtt_broker = this.mqttCredentials[0].broker;
    //             mqtt_username = this.mqttCredentials[0].username;
    //             mqtt_password = this.mqttCredentials[0].password;
    //             // console.log("switch - device -" + device);
    //             break;

    //         // case 'default': 
    //         // mqtt_clientId = this.mqttCredentials[0].clientId;
    //         // mqtt_broker = this.mqttCredentials[0].broker;
    //         // mqtt_username = this.mqttCredentials[0].username;
    //         // mqtt_password = this.mqttCredentials[0].password;

    //     }
    //     // Create a client instance
    //     let mqtt_client = new Client(mqtt_broker, 1883, mqtt_clientId);

    //     // set callback handlers
    //     mqtt_client.onConnectionLost = this.onConnectionLost;
    //     mqtt_client.onMessageArrived = this.onMessageArrived;

    //     this.setState({
    //         mqttClient: mqtt_client
    //     }, () => {
    //         this.state.mqttClient.connect({
    //             onSuccess: this.onConnect,
    //             onFailure: this.onFailure,
    //             userName: mqtt_username,   // apikey
    //             password: mqtt_password
    //         })
    //     })

    // }

    // // called when the client loses its connection
    // onConnectionLost = (responseObject) => {
    //     if (responseObject.errorCode !== 0) {
    //         console.log("onConnectionLost:" + responseObject.errorMessage);
    //     }
    // }

    // onMessageArrived = (message) => {
    //     console.log("inside onMessage 2");
    //     this.onMessageArrivedCommon(message);
    // }

    // onConnect = (props) => {
    //     // Once a connection has been made, make a subscription and send a message.
    //     let subscribeString = null;
    //     switch (this.props.robot) {
    //         case 'yaskawa001':
    //             subscribeString = this.mqttCredentials[0].subscribe;
    //             console.log("switch - subscribe -" + this.props.robot);
    //             break;

    //         case 'kuka001':
    //             subscribeString = this.mqttCredentials[0].subscribe;
    //             console.log("switch - subscribe -" + this.props.robot);
    //             break;

    //         case 'replay':
    //             subscribeString = this.mqttCredentials[0].subscribe;
    //             console.log("switch - subscribe -" + this.props.robot);
    //             break;
    //     }
    //     console.log("onConnect");
    //     this.state.mqttClient.subscribe(subscribeString);
    // }

    // onFailure = (responseObject) => {
    //     // Once a connection has been made, make a subscription and send a message.
    //     console.log("onFailure" + JSON.stringify(responseObject));
    // }

    // // called when a message arrives
    // onMessageArrivedCommon = (message) => {

    //     let myTopic = message.destinationName;
    //     let parsedTopic = myTopic.split("/");
    //     let deviceId = parsedTopic[4];
    //     let valueCmdEvt = parsedTopic[6];
    //     let textJson = parsedTopic[8];

    //     if (textJson === "json") {
    //         let iotPayload = JSON.parse(message.payloadString);
    //         console.log("wholedata",valueCmdEvt,iotPayload);

    //         if (valueCmdEvt === "score") {
    //             let score = [deviceId, iotPayload.speakingClassification, iotPayload.confidence, iotPayload.slot];
    //             let cur_scoredata = this.state.scoredata;
    //             cur_scoredata[iotPayload.slot - 1].score = score;
    //             cur_scoredata[iotPayload.slot - 1].slot = iotPayload.slot;

    //             this.setState({
    //                 scoredata: cur_scoredata
    //             });

    //         }
    //     }

    // }

    getImgComponent = () => {
        let imgComponent = this.state.imgdata.map((s, i) => {

            return (<ImgContainer
                img={s.img}
                slot={s.slot}
                key={i} />);
        });

        return imgComponent;
    }

    getScoreComponent = () => {
        let scoreComponent = this.state.scoredata.map((s, i) => {

            return (
                <ScoreContainer
                    slot={s.slot}
                    score={s.score}
                    key={i} />
            );
        });

        return scoreComponent;
    }

    render(props) {

        let imgComponent = this.getImgComponent();

        let scoreComponent = this.getScoreComponent();

        return (
            <div className="dashboardContainer">
                {/* <div>{this.props.robot}</div> */}
                <div className="imgScoreContainer">
                    {imgComponent}
                </div>
                <div className="imgScoreContainer">
                    {scoreComponent}
                </div>
            </div>
        );
    }
}

export default viDashboard;