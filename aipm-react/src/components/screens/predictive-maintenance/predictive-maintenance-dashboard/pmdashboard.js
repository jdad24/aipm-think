import React, { Component } from 'react';
import PMContainer from './pmContainer/PMContainer';
import axios from 'axios';
import './pmdashboard.css';

class PMDashboard extends Component {

    //state is having properties:
    //1.) yaskawaData : This will store Yaskawa Torque, Temperatures and Position Values
    //2.) yaskawaHealth : This will store Yaskawa health Values
    //3.) kukaData : This will store Yaskawa Torque, Temperatures and Position Values
    //4.) kukaHealth : This is store Kuka health values
    //5.) replayData :
    //6.) replayHealth :

    state = {};

    wsCredentials = {
        "yaskawa": "wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/yaskawa",
        "kuka": "wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/kuka",
        "replay": "wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc"
    }

    ws = null;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.webSocketHandler();
        axios.get("http://aipm-gsc-nodered.mybluemix.net/yaskawaHistory").then((response) => {
            let yaskawaHistory = response.data.yaskawaHistory.map((element) => {
                return JSON.parse(element);
            })
            this.setState({ yaskawaData: yaskawaHistory });
        });
    };

    componentWillUnmount() {
        if (this.ws) {
            this.ws.close();
        }
    }

    webSocketHandler = () => {
        let ws;
        let wsUri = this.wsCredentials[this.props.robot];
        ws = new WebSocket(wsUri);
        this.ws = ws;
        ws.onmessage = (event) => {

            let msg = JSON.parse(event.data);
            if (msg.msgType === "yaskawaTorqueTemp") {

                this.setState({
                    pmData: [...this.state.pmData, msg]
                });
            } else if (msg.msgType = "yaskawaRobotHealth") {

            }
        }

        ws.onopen = () => {
            console.log("connected");
        }
        ws.onclose = () => {
            setTimeout(this.webSocketHandler, 3000);
        }
    }

    render() {

        let pmComponent = <PMContainer pmData={this.state.pmData} />;

        return (
            <div className="container">
                <div className="card">
                    {/* <div className="dashboardContainer"> */}
                    <div>{this.props.robot}</div>
                    <div className="pmDataContainer">
                        {/* {imgComponent} */}
                    </div>
                    <div className="pmDataContainer">
                        {pmComponent}
                    </div>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default PMDashboard;