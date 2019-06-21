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
        
        return (
            <div className="pmContainerRight">
                <div className="pmDetails">
                    <Gauge value={Math.round(this.props.pmData[this.props.pmData.length - 1][this.props.torqueType])} width={300} height={200}
                        min={this.props.ranges[this.props.torqueType][0]} max={this.props.ranges[this.props.torqueType][1]} color={"#959DFF"} label="Torque" />
                </div>
                <div className="pmDetails">
                    <h1>{Math.floor(this.props.pmData[this.props.pmData.length - 1][this.props.torqueType])}</h1>Units
                </div>
                <div className="pmDetails">
                    <GraphContainer type={this.props.posDirection} data={this.props.pmData} />
                </div>
                <div className="pmDetails">
                    <GraphContainer type={this.props.tempType} data={this.props.pmData} />
                </div>
            </div>

        )
    }
}

export default PMTorqueTempContainer;