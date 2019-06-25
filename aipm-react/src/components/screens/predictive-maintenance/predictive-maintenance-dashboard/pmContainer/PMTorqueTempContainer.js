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

   let myColor = "green"; // green
   let myTorque = this.props.pmData[this.props.pmData.length - 1][this.props.torqueType];
   // console.log("myTorque: " + myTorque);
   if (myTorque < (.8*(this.props.ranges[this.props.torqueType][1]))) {
        myColor = "green";
   } else if (myTorque < (.9*(this.props.ranges[this.props.torqueType][1]))) {
       myColor = "yellow";
   } else {
       myColor = "red";
   }

        
        return (
            <div className="pmContainerRight">
                <div className="pmDetails">
                    <Gauge value={Math.round(this.props.pmData[this.props.pmData.length - 1][this.props.torqueType])} width={300} height={200}
                        min={this.props.ranges[this.props.torqueType][0]} max={this.props.ranges[this.props.torqueType][1]} color={myColor} label="" 
                        valueFormatter={value => `${''}`}/>
                </div>
                <div className="pmDetails">
                    <h1>{Math.floor(this.props.pmData[this.props.pmData.length - 1][this.props.torqueType])}</h1>Units
                </div>
                <div className="pmDetails">
                    <GraphContainer type={this.props.posDirection} data={this.props.pmData} ranges={this.props.ranges} />
                </div>
                <div className="pmDetails">
                    <GraphContainer type={this.props.tempType} data={this.props.pmData} ranges={this.props.ranges} />
                </div>
            </div>

        )
    }
}

export default PMTorqueTempContainer;