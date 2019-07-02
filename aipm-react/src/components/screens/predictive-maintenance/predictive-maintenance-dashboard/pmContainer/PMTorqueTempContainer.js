import React, { PureComponent } from 'react';
import './PMContainer.css';
import Gauge from 'react-svg-gauge';
import GraphContainer from './GraphContainer';
import { throws } from 'assert';

class PMTorqueTempContainer extends PureComponent {

    state = {
        pmData: null
    }

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps = (props, state) => {

        return {
            pmData: props.pmData
        }




    }

    render() {
   //     debugger;

   let myColor = "#6BC764"; // green
   let myTorque = this.props.pmData[this.props.pmData.length - 1][this.props.torqueType];
   // console.log("myTorque: " + myTorque);
   if (myTorque > (.9*(this.props.ranges[this.props.torqueType][1]))) {
        myColor = "#FF2C2C";
   } else if (myTorque > (.8*(this.props.ranges[this.props.torqueType][1]))) {
       myColor = "#F7C700";
   } 

   let myClassName = this.props.containerName + " pmContainerGridRightRow"

        
        return (
            <div className={myClassName}>
                <div className="pmContainerCard pmContainerTorque">
                    <Gauge value={Math.round(this.props.pmData[this.props.pmData.length - 1][this.props.torqueType])} width={300} height={200}
                        min={this.props.ranges[this.props.torqueType][0]} max={this.props.ranges[this.props.torqueType][1]} color={myColor} label={this.props.label} 
                        valueLabelStyle={{fontSize:30}}
                        valueFormatter={value => `${Math.round(this.props.pmData[this.props.pmData.length - 1][this.props.torqueType])}`}/>
                </div>
                <div className="pmContainerCard pmContainerPosition">
                    <GraphContainer type={this.props.posDirection} data={this.props.pmData} ranges={this.props.ranges} />
                </div>
                <div className="pmContainerCard pmContainerTemperature">
                    <GraphContainer type={this.props.tempType} data={this.props.pmData} ranges={this.props.ranges} />
                </div>
            </div>

        )
    }
}

export default PMTorqueTempContainer;