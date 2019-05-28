import React, { Component } from 'react';
import Header from '../../common-ui/persona-header';
import PersonaTime from '../../common-ui/persona-time';
import RobotList from '../../common-ui/robot-list';
import './vi.css';

class VisualInsights extends Component {
    
    render() {
        const temp_style = {
            border: "1px solid green",
            padding: "10px",
             margin: "10px"
        }

        return (

            <div className="VisualInsights" >
                <Header role="Line Manager Dashboard" />
                <div className="persona-section">
                    <PersonaTime name="Carla" />
                    <div style={temp_style}> Assigned to line 3 today</div>
                </div>
                {/* <div className="RobotList">
                    <div>gm Carla</div>
                    <div>QA</div>
                </div> */}
                <RobotList />
            </div>

        );
    }
}

export default VisualInsights;
