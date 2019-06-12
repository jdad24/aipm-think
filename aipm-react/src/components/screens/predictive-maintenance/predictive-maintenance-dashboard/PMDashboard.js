import React, { Component } from 'react';
import PMContainer from './pmcontainer/PMContainer';
import axios from 'axios';
import './PMDashboard.css';

class PMDashboard extends Component {

    //state is having properties:
    //1.) yaskawaData : This will store Yaskawa Torque, Temperatures and Position Values
    //2.) yaskawaHealth : This will store Yaskawa health Values
    //3.) kukaData : This will store Yaskawa Torque, Temperatures and Position Values
    //4.) kukaHealth : This is store Kuka health values
    //5.) replayData :
    //6.) replayHealth :

    state = {
        pmHealthData:[0]
    };

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
        switch(this.props.robot){
            
        case "yaskawa": 
            axios.get("http://aipm-gsc-nodered.mybluemix.net/yaskawaHistory").then((response) => {
                let yaskawaHistory = response.data.yaskawaHistory.map((element) => {
                    // console.log(JSON.parse(element));
                    return JSON.parse(element);
                })
                this.setState({ pmData: yaskawaHistory });
            });
            break;
        case "kuka":
            axios.get("http://aipm-gsc-nodered.mybluemix.net/kukaHistory").then((response) => {
                let kukaHistory = response.data.kukaHistory.map((element) => {
                    return JSON.parse(element);
                })
                this.setState({ pmData: kukaHistory });
            });
            break;
        case "replay":
            //has to be completed
            break;
        }
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

            switch(msg.msgType){

            case "yaskawaTorqueTemp": 
            case "kukaTorqueTemp":
                this.setState({
                    pmData: [...this.state.pmData, msg]
                });
            break;
                case "yaskawaRobotHealth":
                case "kukaRobotHealth": 
                // console.log("10",msg.health.values[0][10]);
                this.setState({
                    pmHealthData: [...this.state.pmHealthData, msg.health.values[0][10]]
                });
            break;

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

        let pmComponent = <PMContainer pmData={this.state.pmData} pmHealthData={this.state.pmHealthData} />;

        return (
            <div className="container">
                <div className="card">
                    <div><h1>{this.props.robot}</h1></div>
                    <div className="pmDataContainer">
                    </div>
                    <div className="pmDataContainer">
                        {pmComponent}
                    </div>
                </div>
            </div>
        );
    }
}

export default PMDashboard;