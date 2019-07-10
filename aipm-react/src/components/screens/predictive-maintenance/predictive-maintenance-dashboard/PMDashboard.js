import React, { Component } from 'react';
import PMContainer from './pmContainer/PMContainer';
import BasicCard from '../../../common-ui/BasicCard/basicCard'
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
    isClosing = false;

    // constructor(props) {
    //     super(props);
    // }

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

            axios.get("http://aipm-gsc-nodered.mybluemix.net/displayRanges").then((response) => {
                this.setState({ ranges: response.data[0] });
            });

            break;
        case "kuka":
            axios.get("http://aipm-gsc-nodered.mybluemix.net/kukaHistory").then((response) => {
                let kukaHistory = response.data.kukaHistory.map((element) => {
                    return JSON.parse(element);
                })
                this.setState({ pmData: kukaHistory });
            });

            axios.get("http://aipm-gsc-nodered.mybluemix.net/displayRanges").then((response) => {
                this.setState({ ranges: response.data[2] });
            });
            break;
        case "replay":
            axios.get("http://aipm-gsc-nodered.mybluemix.net/replayHistory").then((response) => {
                let replayHistory = response.data.replayHistory.map((element) => {
                    return JSON.parse(element);
                })
                this.setState({ pmData: replayHistory });
            });

            axios.get("http://aipm-gsc-nodered.mybluemix.net/displayRanges").then((response) => {
                this.setState({ ranges: response.data[1] });
            });
            break;
        }
    };

    componentWillUnmount() {
        console.log("attempt to close");
        this.isClosing = true;
        if (this.ws) {
            this.ws.close();
        }
    }
    myCount = 0;
    webSocketHandler = () => {
        let ws;
        let wsUri = this.wsCredentials[this.props.robot];
        ws = new WebSocket(wsUri);
        this.ws = ws;
        ws.onmessage = (event) => {
            let msg = JSON.parse(event.data);
            msg = msg.payload === undefined ? msg : msg.payload;
            this.myCount++;
            // console.log("inside onmessage: " + msg.msgType + " " + this.myCount);

            switch(msg.msgType){

            case "yaskawaTorqueTemp": 
            case "kukaTorqueTemp":
            case "kukaTorque":   
            let newPmData = [...this.state.pmData, msg];
            newPmData = newPmData.slice(newPmData.length - 10, newPmData.length);
                this.setState({
                    pmData: newPmData // [...newPmData , msg] // [...this.state.pmData, msg]
                });
            break;
            case "yaskawaRobotHealth":
            case "kukaRobotHealth": 
                this.setState({
                    pmHealthData: [...this.state.pmHealthData, msg.overallHealth]
                });
            break;
            }
        }
        
        ws.onopen = () => {
            console.log("connected");
        }

        ws.onclose = () => {
            console.log("------------->inside onclose");
            if (this.isClosing !== true) {
                this.webSocketHandler();
            }
        }

        ws.onerror = () => {
            console.log("on error");
            
        }
    }

    render() {

        let pmComponent = <PMContainer ranges={this.state.ranges} pmData={this.state.pmData} pmHealthData={this.state.pmHealthData} />;

        return (
                <BasicCard>
                    <div className="pmDataContainer">
                        {pmComponent}
                    </div>
                </BasicCard>
        );
    }
}

export default PMDashboard;