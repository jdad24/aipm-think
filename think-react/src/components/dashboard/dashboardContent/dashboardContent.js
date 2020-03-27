import React, { Component } from 'react';
import './dashboardContent.css';
import Graph from '../../3DGraph/3DGraph';
import RobotHealth from '../../RobotHealth/RobotHealth';
import TorqueContent from '../../TorqueContent/TorqueContent'

class DashboardContent extends Component {
    render() {
        return (
            // <p>this is also stupid</p> 
            // <p>what do u mean lol</p>
            <div className="contents-container">
                <div className="r1-row robot-col card-padding robot-name">Robot 1</div>
                <div className="r1-row robot-health card-padding card-color"><RobotHealth/></div>
                <div className="r1-row position card-padding card-color">
                    <Graph />
                </div>
                <div className="j1-j2-j3-r1 j1-j4-col"><TorqueContent title="S" score={8.7}/></div>
                <div className="j1-j2-j3-r1 j2-j5-col"><TorqueContent title="L" score={8.7}/></div>
                <div className="j1-j2-j3-r1 j3-j6-col"><TorqueContent title="R" score={8.7}/></div>
                <div className="j4-j5-j6-r1 j1-j4-col"><TorqueContent title="B" score={8.7}/></div>
                <div className="j4-j5-j6-r1 j2-j5-col"><TorqueContent title="T" score={8.7}/></div>
                <div className="j4-j5-j6-r1 j3-j6-col"><TorqueContent title="U" score={8.7}/></div>
                <div className="gap-line"></div>
                <div className="r2-row robot-col card-padding robot-name">Robot 2</div>
                <div className="r2-row robot-health card-padding card-color"><RobotHealth/></div>
                <div className="r2-row position card-padding card-color"><Graph /></div>
                <div className="j1-j2-j3-r2 j1-j4-col"><TorqueContent title="S" score={8.7}/></div>
                <div className="j1-j2-j3-r2 j2-j5-col"><TorqueContent title="L" score={8.7}/></div>
                <div className="j1-j2-j3-r2 j3-j6-col"><TorqueContent title="R" score={8.7}/></div>
                <div className="j4-j5-j6-r2 j1-j4-col"><TorqueContent title="B" score={8.7}/></div>
                <div className="j4-j5-j6-r2 j2-j5-col"><TorqueContent title="T" score={8.7}/></div>
                <div className="j4-j5-j6-r2 j3-j6-col"><TorqueContent title="U" score={8.7}/></div>
            </div>
        );
    }
}

export default DashboardContent;