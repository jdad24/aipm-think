import React, { Component } from 'react';
import Header from '../../common-ui/persona-header/persona-header';
import PersonaTime from '../../common-ui/persona-time/persona-time';
import RobotList from '../../common-ui/robot-list/robot-list';
import Aux from '../../common-ui/Aux/Aux';
import PMDashboard from './predictive-maintenance-dashboard/PMDashboard';
import Layout from '../../common-ui/Layout/layout';
// import { Client } from './node_modules/paho-mqtt';
import './PM.css';


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
    }

    getContent = () => {
        const temp_style = {
            border: "1px solid green",
            padding: "10px",
            margin: "10px"
        }

        let pmContent = "";

        if (this.state.pmDashboard) {
            pmContent = <PMDashboard robot={this.state.robotEnvironment}/>
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

        let PredictiveMaintenance = (<div className="PredicitiveMaintenance" >
                                    {pmContent}
                             </div>);

         return PredictiveMaintenance;
    }

    render() {
        let PredictiveMaintenance = this.getContent();
        return (

            <Layout
                role="Line Manager Dashboard"
                content={PredictiveMaintenance}
            />

        );
    }
}

export default PredictiveMaintenance;
