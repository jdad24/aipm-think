import React, { Component } from 'react';
import Header from '../../common-ui/persona-header/persona-header';
import PersonaTime from '../../common-ui/persona-time/persona-time';
import RobotList from '../../common-ui/robot-list/robot-list';
import Aux from '../../common-ui/Aux/Aux';
import VIdetails from './visual-insights-details/videtails';
import './vi.css';

class VisualInsights extends Component {

    // loadVI = () => {

    // }
    state = {
        viDetails: false,
        robot: null
    }

    robotClickHandler = (event) => {
        this.setState({
            viDetails: true,
            robot: event.target.value
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

        if (this.state.viDetails) {
            viContent = <VIdetails robot={this.state.robot} />
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
