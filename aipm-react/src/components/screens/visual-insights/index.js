import React, { Component } from 'react';
import Header from '../../common-ui/persona-header/persona-header';
import PersonaTime from '../../common-ui/persona-time/persona-time';
import RobotList from '../../common-ui/robot-list/robot-list';
import Aux from '../../common-ui/Aux/Aux';
import VIdashboard from './visual-insights-dashboard/vidashboard';
import { Client } from 'paho-mqtt';
import './vi.css';

class VisualInsights extends Component {

    state = {
        viDashboard: false,
        robotEnvironment: null,
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

        let viContent = "";

        if (this.state.viDashboard) {
            // console.log("inside IF");
            // console.log(this.state.imgMsg);
            viContent =
                <VIdashboard
                    robot={this.state.robotEnvironment}
                    // imgMsg={this.state.imgMsg}
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
