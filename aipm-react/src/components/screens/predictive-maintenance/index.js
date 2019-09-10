import React, { Component } from 'react';
//import Header from '../../common-ui/persona-header/persona-header';
import PersonaEnv from '../../common-ui/personaEnv/personaEnv';
import RobotList from '../../common-ui/robot-list/robot-list';
import Aux from '../../common-ui/Aux/Aux';
import PMDashboard from './predictive-maintenance-dashboard/PMDashboard';
import Layout from '../../common-ui/Layout/layout';
import axios from 'axios';
// import { Client } from './node_modules/paho-mqtt';
import './PM.css';


class PredictiveMaintenance extends Component {

    state = {
        pmDashboard: false,
        robotEnvironment: null,
        title: "predictiveMaintenance",
        sampleQ: [] 
    }

    componentDidMount = () => {
        axios.get('https://aipm-gsc-nodered.mybluemix.net/sampleQuestions?persona='+this.state.title).then(response => {
            console.log(response);
            this.setState({
                sampleQ: response.data
            });
        });
    }

    robotClickHandler = (event, value) => {
        this.setState({
            pmDashboard: true,
            robotEnvironment: value
        });
    }

    backClickHandler = () => {
        this.setState({
            pmDashboard: false,
            robotEnvironment: null,
            // linkPath:"/vi"
        });
        console.log("backClickHandler");
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
        // let PersonaorPath = "";
        let headerInfo = {
            PersonaorPath: null,
            nav: null,
            backClickHandler: null
        };

        if (this.state.pmDashboard) {
            headerInfo.PersonaorPath = <div style={{textAlign:"left"}}>
                            <p>Dashboard > {this.state.robotEnvironment}</p>
                            <h1>Robot Analytics and Data</h1>
                            </div>

            headerInfo.backClickHandler = this.backClickHandler;
                            
        } else {
            headerInfo.PersonaorPath = <PersonaEnv name = "Mark"  />
            headerInfo.nav = "/";
        }

        return headerInfo;
    }

    render() {

        let PredictiveMaintenance = this.getMainContent();
        let PersonaEnv = this.getPersonaEnv();
        return (

            <Layout
                role="Manufacturing Line Manager"
                screenTop = {PersonaEnv.PersonaorPath}
                content={PredictiveMaintenance}
                backClickHandler = {PersonaEnv.backClickHandler}
                path = {PersonaEnv.nav}
                sampleQ = {this.state.sampleQ}
            />

        );
    }
}

export default PredictiveMaintenance;
