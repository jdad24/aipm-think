import React, { Component } from 'react';
//import Header from '../../common-ui/persona-header/persona-header';
import PersonaEnv from '../../common-ui/personaEnv/personaEnv';
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

    getMainContent = () => {
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
                    <RobotList clickHandler={this.robotClickHandler} />
        }

        let PredictiveMaintenance = (<div className="PredicitiveMaintenance" >
                                    {pmContent}
                             </div>);

         return PredictiveMaintenance;
    }

    getPersonaEnv = () => {
        let PersonaorPath = "";

        if (this.state.pmDashboard) {
            PersonaorPath = <div style={{textAlign:"left"}}>
                            <p>Dashboard > {this.state.robotEnvironment}</p>
                            <h1>Robot Analytics and Data</h1>
                            </div>
                            
        } else {
            PersonaorPath = <PersonaEnv name = "Mark"  />
        }

        return PersonaorPath;
    }

    render() {

        let PredictiveMaintenance = this.getMainContent();
        let PersonaEnv = this.getPersonaEnv();
        return (

            <Layout
                role="Manufacturing Line Manager"
                screenTop = {PersonaEnv}
                content={PredictiveMaintenance}
            />

        );
    }
}

export default PredictiveMaintenance;
