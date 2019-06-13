import React, { Component } from 'react';
//import Header from '../../common-ui/persona-header/persona-header';
import PersonaEnv from '../../common-ui/personaEnv/personaEnv';
import RobotList from '../../common-ui/robot-list/robot-list';
import Aux from '../../common-ui/Aux/Aux';
import VIdashboard from './visual-insights-dashboard/vidashboard';
import Layout from '../../common-ui/Layout/layout';
// import { Client } from 'paho-mqtt';
// import './vi.css';

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

    // backArrowHandler = () => {
    //     this.setState({
    //         viDashboard: false,
    //         robotEnvironment: null
    //     });
    // }

    getMainContent = () => {
        const temp_style = {
            border: "1px solid green",
            padding: "10px",
            margin: "10px"
        }

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
                    <RobotList clickHandler={this.robotClickHandler} />
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
            PersonaorPath = <div>Path</div>
        } else {
            PersonaorPath = <PersonaEnv name = "Carla"  />
        }

        return PersonaorPath;
    }

    render() {

        let visualInsights = this.getMainContent();
        let PersonaEnv = this.getPersonaEnv();

        return (

            <Layout
                role="Quality Assurance Manager Dashboard"
                screenTop = {PersonaEnv}
                content={visualInsights}
            />



        );
    }
}

export default VisualInsights;
