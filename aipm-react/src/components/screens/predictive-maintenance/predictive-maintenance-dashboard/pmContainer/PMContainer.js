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

        // console.log("PMContainer", typeof(this.props.pmData));
        let pmData = <p>No Data </p>
        if (this.props.pmData) {
            // console.log(this.state.pmData);
            // console.log(this.state.pmData.bTemp);
            pmData =
                <div>
                <div className="pmContainer">
                <div className="pmDetails">
                <Gauge value={this.props.pmData[this.props.pmData.length-1].bTorque} width={300} height={200} color={"#959DFF"} label="Torque" />
                </div>
                <div className="pmDetails">
                <h1>{this.props.pmData[this.props.pmData.length-1].bTorque}</h1>Units
                </div>
                <div className="pmDetails">
                <GraphContainer type="bTemp" data={this.props.pmData} />
                </div>
                <div className="pmDetails">
                <GraphContainer type="xPos" data={this.props.pmData}/>
                </div>
                </div>
                <div className="pmContainer">
                <div className="pmDetails">
                <Gauge value={this.props.pmData[this.props.pmData.length-1].lTorque} width={300} height={200} color={"#959DFF"} label="Torque" />
                </div>
                <div className="pmDetails">
                <h1>{this.props.pmData[this.props.pmData.length-1].lTorque}</h1>Units
                </div>
                <div className="pmDetails">
                <GraphContainer type="lTemp" data={this.props.pmData}/>
                </div>
                <div className="pmDetails">
                <GraphContainer type="yPos" data={this.props.pmData}/>
                </div>
                </div>
                <div className="pmContainer">
                <div className="pmDetails">
                <Gauge value={this.props.pmData[this.props.pmData.length-1].rTorque} width={300} height={200} color={"#959DFF"} label="Torque" />
                </div>
                <div className="pmDetails">
                <h1>{this.props.pmData[this.props.pmData.length-1].rTorque}</h1>Units
                </div>
                <div className="pmDetails">
                <GraphContainer type="rTemp" data={this.props.pmData}/>
                </div>
                <div className="pmDetails">
                <GraphContainer type="zPos" data={this.props.pmData}/>
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