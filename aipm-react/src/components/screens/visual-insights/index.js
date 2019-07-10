import React, { Component } from 'react';
//import Header from '../../common-ui/persona-header/persona-header';
import PersonaEnv from '../../common-ui/personaEnv/personaEnv';
import LineList from './lineList/lineList';
import Aux from '../../common-ui/Aux/Aux';
import VIdashboard from './visual-insights-dashboard/vidashboard';
import Layout from '../../common-ui/Layout/layout';
// import { Client } from 'paho-mqtt';
import './vi.css';

class VisualInsights extends Component {

    state = {
        viDashboard: false,
        robotEnvironment: null,
        linkPath:"/"
    }

    robotClickHandler = (event, value) => {
        this.setState({
            viDashboard: true,
            robotEnvironment: value,
            linkPath:"/pm"
        });
        console.log(value);
    }

    // backArrowHandler = () => {
    //     this.setState({
    //         viDashboard: false,
    //         robotEnvironment: null
    //     });
    // }

    getMainContent = () => {
        // const temp_style = {
        //     border: "1px solid green",
        //     padding: "10px",
        //     margin: "10px"
        // }

        let viContent = "";
        let PersonaorPath = "";

        // if (this.state.viDashboard) {
        //     // console.log("inside IF");
        //     // console.log(this.state.imgMsg);
        //     viContent =
        //         <VIdashboard robot={this.state.robotEnvironment} />
        // } else {
        //     viContent =
        //         <Aux>
        //             <div className="persona-section">
        //                 <PersonaTime name="Carla" />
        //                 <div style={temp_style}> Assigned to line 3 today</div>
        //             </div>
        //             <RobotList clickHandler={this.robotClickHandler} />
        //         </Aux>
        // }

        if (this.state.viDashboard) {
            // console.log("inside IF");
            // console.log(this.state.imgMsg);
           
            viContent =
                <VIdashboard robot={this.state.robotEnvironment} />
        } else {
            
            viContent =
                // <Aux>
                //     <div className="persona-section">
                //         <PersonaTime name="Carla" />
                //         <div style={temp_style}> Assigned to line 3 today</div>
                //     </div>
                <Aux>
                    <div className = "tabs">
                    <div className="cur_assignment">Current Assignments</div>
                    <div className="past_assignment">Past Assignments</div>
                    </div>
                    <LineList clickHandler={this.robotClickHandler} />
                </Aux>
                    
                // </Aux>
        }
        

        let visualInsights = (<div className="VisualInsights" >
                                    {viContent}
                             </div>);

        return visualInsights;
    }

    getPersonaEnv = () => {
        let PersonaorPath = "";

        if (this.state.viDashboard) {
            PersonaorPath = <div>Dashboard > {this.state.robotEnvironment}</div>
        } else {
            PersonaorPath = <PersonaEnv name = "Carla"  />
        }

        return PersonaorPath;
    }

    // getPath = () => {
    //     let linkPath = "/";

    //     if (this.state.viDashboard) {
    //         linkPath = "/vi"
    //     }
    //     console.log(linkPath);
    //     return linkPath;
    // }

    render() {

        let visualInsights = this.getMainContent();
        let PersonaEnv = this.getPersonaEnv();
        let linkPath = this.state.linkPath;
        console.log(linkPath);
        // let linkPath = this.getPath();
        return (
            <Layout
                role="Quality Assurance"
                screenTop = {PersonaEnv}
                content={visualInsights}
                path = {linkPath}
            />
        );
    }
}

export default VisualInsights;
