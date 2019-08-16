import React, { PureComponent } from 'react';
import axios from 'axios';
import BasicCard from '../../../common-ui/BasicCard/basicCard';
import Aux from '../../../common-ui/Aux/Aux';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import './itDasboardComponents.css';

class StatisticsOEE extends PureComponent {

    state = {
        oee: [15,12,17,15,20]
    }

    static getDerivedStateFromProps = (props, state) => {
        return {
            oee: props.oee
        }

    }

    getMainContent = () => {
        // console.log(this.state.sysStatus);
        // let activities = this.state.activities.map(activity => {
        //     return <div>{activity}</div>
        // });

        // let activities = <div>{this.state.activities[1]}</div>;
        let data = this.state.oee.slice(0,6).map(element => {
            return ({ "yPos": element, "Y-Position": element });
          });

        let content =
            (<div className="sysStatusContainer">
                <div className="titleStatusContainer">
                    <div className="title">Statistics OEE</div>
                    <div className="status">last 6 hours</div>
                </div>
                <div>
                    <LineChart
                        width={300}
                        height={200}
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        {/* <XAxis/> */}
                        <YAxis dataKey="OEE" domain={[5, 25]} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="OEE" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
            </div>);
        return content;
    }

    render() {
        let content = this.getMainContent();

        return (
            <BasicCard classname="itCard">
                {content}
            </BasicCard>
        );
        // return (
        //     <Aux>
        //         <div>
        //             <div>System Status:</div>
        //             <div>{this.state.sysStatus}</div>
        //         </div>
        //         {content}
        //         {/* <div>{this.state.activities}</div> */}
        //     </Aux>
        // );
    }

}

export default StatisticsOEE;