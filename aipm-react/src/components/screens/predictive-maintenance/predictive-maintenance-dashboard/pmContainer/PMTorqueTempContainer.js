import React, { PureComponent } from 'react';
import './PMContainer.css';
import Gauge from 'react-svg-gauge';
import GraphContainer from './GraphContainer';

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
                    <Gauge value={this.props.pmData[this.props.pmData.length - 1][this.props.torqueType].toFixed(0)} width={300} height={200} min={0} max={10000} color={"#959DFF"} label="Torque" />
                </div>
                <div className="pmDetails">
                    <h1>{Math.floor(this.props.pmData[this.props.pmData.length - 1][this.props.torqueType])}</h1>Units
                </div>
                <div className="pmDetails">
                    <GraphContainer type={this.props.tempType} data={this.props.pmData} />
                </div>
                <div className="pmDetails">
                    <GraphContainer type={this.props.posDirection} data={this.props.pmData} />
                </div>
            </div>

        )
    }
}

export default PMTorqueTempContainer;