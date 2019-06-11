import React, { PureComponent } from 'react';
import Aux from '../../../../common-ui/Aux/Aux';
import './pmContainer.css';
import Gauge from 'react-svg-gauge';
import GraphContainer from './GraphContainer';

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
        if (this.state.pmData) {
            // console.log(this.state.pmData.bTemp);
            pmData =
                <div>
                <div className="pmContainer">
                <div className="pmDetails">
                <Gauge value={this.state.pmData.bTemp} width={300} height={200} color={"#959DFF"} label="Temperature" />
                </div>
                <div className="pmDetails">
                <h1>{this.state.pmData.bTemp}</h1>
                </div>
                <div className="pmDetails">
                <GraphContainer/>
                </div>
                </div>
                <div className="pmContainer">
                <div className="pmDetails">
                <Gauge value={this.state.pmData.lTemp} width={300} height={200} color={"#959DFF"} label="Temperature" />
                </div>
                <div className="pmDetails">
                <h1>{this.state.pmData.lTemp}</h1>
                </div>
                <div className="pmDetails">
                <GraphContainer/>
                </div>
                </div>
                <div className="pmContainer">
                <div className="pmDetails">
                <Gauge value={this.state.pmData.rTemp} width={300} height={200} color={"#959DFF"} label="Temperature" />
                </div>
                <div className="pmDetails">
                <h1>{this.state.pmData.rTemp}</h1>
                </div>
                <div className="pmDetails">
                <GraphContainer/>
                </div>
                </div>
                {/* <div className="pmContainer">
                <p>lTemp:  {this.state.pmData.lTemp}</p>
                <p>lTorque:  {this.state.pmData.lTorque}</p>
                </div>
                <div className="pmContainer">
                <p>rTemp:  {this.state.pmData.rTemp}</p>
                <p>rTorque:  {this.state.pmData.rTorque}</p>
                </div>
                <div className="pmContainer">
                <p>sTemp:  {this.state.pmData.sTemp}</p>
                <p>sTorque:  {this.state.pmData.sTorque}</p>
                </div>
                <div className="pmContainer">
                <p>tTemp:  {this.state.pmData.tTemp}</p>
                <p>tTorque:  {this.state.pmData.tTorque}</p>
                </div>
                <div className="pmContainer">
                <p>uTemp:  {this.state.pmData.uTemp}</p>
                <p>uTorque:  {this.state.pmData.uTorque}</p>
                </div> */}
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