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
            console.log("ws received:" + msg);
            console.log("ws msg.payload.slot:" + msg.payload.slot);

            // Process different message either image or scoring //

            if (this.state.viDashboard === true && (this.state.robotEnvironment === msg.payload.robotEnvironment)) {
                // if(this.state.robotEnvironment === msg.payload.robotEnvironment){

                if (msg.payload.type === "image") {
                    // console.log("ws image msg.payload.type: " + msg.payload.type);
                    // console.log("ws image msg.payload.slot=" + msg.payload.slot);
                    // console.log("ws image msg.payload.robotEnvironment=" + msg.payload.robotEnvironment);

                    // if (msg.payload.robotEnvironment === "yaskawa001") {
                    //     // myimgslot = "1";
                    // } else if (msg.payload.robotEnvironment === "replay") {
                    //     // myimgslot = "3";
                    // }
                    this.setState({
                        imgMsg: msg.payload.image.toString()
                    });
                }
                // if score, update other div elements
                if (msg.payload.type === "scoring") {
                    console.log(msg.payload.speakingClassification);
                    this.setState({
                        scoreMsg: msg.payload.speakingClassification
                    });

                }
                // }

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

    render() {
        const temp_style = {
            border: "1px solid green",
            padding: "10px",
            margin: "10px"
        }
        this.webSocketHandler();

        let viContent = "";

        if (this.state.viDashboard) {
            viContent =
                <VIdashboard
                    robot={this.state.robotEnvironment}
                    imgMsg = {this.state.imgMsg}
                    scoreMsg = {this.state.scoreMsg} />
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
