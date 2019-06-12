import React, { PureComponent } from 'react';
import './PMContainer.css';
import Gauge from 'react-svg-gauge';
import GraphContainer from './GraphContainer';
import PMTorqueTempContainer from './PMTorqueTempContainer';

class PMContainer extends PureComponent {

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

        let pmData = <p>No Data </p>
        if (this.props.pmData) {
            pmData =
                <div className="pmContainer">
                    <div className="pmContainerLeft">
                        <div className="pmContainerRight">
                        <Gauge value={this.props.pmData[this.props.pmData.length - 1]["torqueUpper"]} width={300} height={200} color={"#959DFF"} label="Torque" />
                        </div>
                        <div className="pmContainerRight">Details</div>
                        <div className="pmContainerRight">Details</div>
                    </div>
                    <div>
                        <PMTorqueTempContainer pmData={this.props.pmData} torqueType="torqueUpper" tempType="tempUpper" posDirection="xPos" />
                        <PMTorqueTempContainer pmData={this.props.pmData} torqueType="torqueMiddle" tempType="tempMiddle" posDirection="yPos" />
                        <PMTorqueTempContainer pmData={this.props.pmData} torqueType="torqueLower" tempType="tempLower" posDirection="zPos" />
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