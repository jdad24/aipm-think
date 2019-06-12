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
                <div>
                <PMTorqueTempContainer pmData={this.props.pmData} torqueType="bTorque" tempType="bTemp" posDirection="xPos"/>
                <PMTorqueTempContainer pmData={this.props.pmData} torqueType="lTorque" tempType="lTemp" posDirection="yPos"/> 
                <PMTorqueTempContainer pmData={this.props.pmData} torqueType="rTorque" tempType="rTemp" posDirection="zPos"/> 
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