import React, { PureComponent } from 'react';
import './PMContainer.css';
import Gauge from 'react-svg-gauge';
import GraphContainer from './GraphContainer';
import PMTorqueTempContainer from './PMTorqueTempContainer';

class PMContainer extends PureComponent {

    state = {
        pmData: null,
        pmHealthData:null
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

        let pmData = <p>No Data </p>
        console.log(this.props);
        if (this.props.pmData && this.props.pmHealthData) {
            console.log(this.props.pmHealthData);
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