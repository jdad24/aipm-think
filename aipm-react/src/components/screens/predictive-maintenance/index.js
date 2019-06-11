import React, { Component } from 'react';
import Header from '../../common-ui/persona-header/persona-header';
import PersonaTime from '../../common-ui/persona-time/persona-time';
import RobotList from '../../common-ui/robot-list/robot-list';
import Aux from '../../common-ui/Aux/Aux';
import PMdashboard from './predictive-maintenance-dashboard/pmdashboard';
// import { Client } from './node_modules/paho-mqtt';
import './pm.css';

class PredictiveMaintenance extends Component {

    state = {
        pmDashboard: false,
        robotEnvironment: null,
    }

    robotClickHandler = (event) => {
        this.setState({
            pmDashboard: true,
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

        let pmContent = "";

        if (this.state.pmDashboard) {
            // console.log("inside IF");
            // console.log(this.state.imgMsg);
            pmContent =
                <PMdashboard
                    robot={this.state.robotEnvironment}
                    // imgMsg={this.state.imgMsg}
                // scoreMsg = {this.state.scoreMsg} 
                />
        } else {
            pmContent =
                <Aux>
                    <div className="persona-section">
                        <PersonaTime name="Carla" />
                        <div style={temp_style}> Assigned to line 3 today</div>
                    </div>
                    <RobotList clickHandler={this.robotClickHandler} />
                </Aux>
        }

        return (

            <div className="PredicitiveMaintenance" >
                <Header role="Line Manager Dashboard" />
                {pmContent}
                {/* <div className="RobotList">
                    <div>gm Carla</div>
                    <div>QA</div>
                </div> */}
                {/* <RobotList onclick={this.loadVI}/> */}
            </div>

        );
    }
}

export default PredictiveMaintenance;
