import React, { PureComponent } from 'react';
import axios from 'axios';
import BasicCard from '../../../common-ui/BasicCard/basicCard';
import Aux from '../../../common-ui/Aux/Aux';
import Gauge from "react-svg-gauge";
// import {
//     LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
//   } from 'recharts';
import './itDasboardComponents.css';

class PlantHealth_ITO extends PureComponent {

    state = {
        pmHealthData: null,
        sysStatus: null
    }

    static getDerivedStateFromProps = (props, state) => {
        return {
            pmHealthData: props.plantHealth,
            sysStatus: props.sysStatus
        }

    }

    getMainContent = () => {
        // console.log(this.state.sysStatus);
        // let activities = this.state.activities.map(activity => {
        //     return <div>{activity}</div>
        // });

        // let activities = <div>{this.state.activities[1]}</div>;
        let color = '#E0AD4E';
        let labelColor = '#E0AD4E';

        if(this.state.sysStatus){
            color = '#4EE091';
            labelColor= '#61C101';
        }

        let valueLabelStyle = {
            fill: labelColor
        }

        let content =
            (<div className="sysStatusContainer">
                <div className="titleStatusContainer">
                    <div className="title">Plant Health</div>
                    {/* <div className="status">last 6 hours</div> */}
                    
                </div>
                <div className="ito_card_graph">
                <Gauge
                value={Math.round(this.state.pmHealthData)}
                width={300}
                height={180}
                color={color}
                label=""
               valueLabelStyle= {valueLabelStyle}
                min={0} 
                max={100}
              />
                </div>
            </div>);
        return content;
    }

    render() {
        let content = this.getMainContent();

        return (
            <BasicCard classname = "itCard">
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

export default PlantHealth_ITO;