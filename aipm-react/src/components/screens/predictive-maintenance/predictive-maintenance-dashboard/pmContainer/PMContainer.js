import React, { PureComponent } from 'react';
import './PMContainer.css';
import Gauge from 'react-svg-gauge';
import GraphContainer from './GraphContainer';
import PMTorqueTempContainer from './PMTorqueTempContainer';

class PMContainer extends PureComponent {

    state = {
        pmData: null,
        pmHealthData: null
    }

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps = (props, state) => {

        return {
            pmData: props.pmData,
            pmHealthData: props.pmHealthData
        }

    }

    render() {

        console.log(this.props.ranges, this.props.pmData);

        if (!this.props.ranges || !this.props.pmData || this.props.ranges.length === 0 || this.props.pmData.length === 0)
            return (
                <div className="pmContainerRight">
                    <div>NO DATA</div>
                </div>
            );

        let pmData = <p>No Data </p>
        if (this.props.pmData && this.props.pmHealthData) {
            pmData =
                <div className="pmContainer">
                    <div className="pmContainerLeft">
                        <div className="pmContainerRight">
                            <Gauge value={Math.round(this.props.pmHealthData[this.props.pmHealthData.length - 1])} width={300} height={200} color={"#959DFF"} label="Health" />
                        </div>
                        <div className="pmContainerRight">Details</div>
                        <div className="pmContainerRight">Details</div>
                    </div>
                    <div>
                        <div className="headers">
                        <div>Torque</div>
                        <div>Postion</div>
                        <div>Temperature</div>
                        </div>
                        <PMTorqueTempContainer ranges={this.props.ranges} pmData={this.props.pmData} torqueType="torqueUpper" tempType="tempUpper" posDirection="xPos" />
                        <PMTorqueTempContainer ranges={this.props.ranges} pmData={this.props.pmData} torqueType="torqueMiddle" tempType="tempMiddle" posDirection="yPos" />
                        <PMTorqueTempContainer ranges={this.props.ranges} pmData={this.props.pmData} torqueType="torqueLower" tempType="tempLower" posDirection="zPos" />
                    </div>
                </div>

        }

        return (
            <div >
                {pmData}
            </div>
        );
    }
}


export default PMContainer;