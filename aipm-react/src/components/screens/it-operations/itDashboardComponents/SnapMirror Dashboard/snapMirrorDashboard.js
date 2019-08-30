import React, { Component } from 'react';
import './snapMirrorDashboard.css';
import Aux from '../../../../common-ui/Aux/Aux';


class snapmirrorDashboard extends Component {

    state = {
        replication: false
    }

    configFlies = ["R082.json", "R084.json", "R086.json", "R088.json", "R121.json", "R123.json", "R126.json", "R128.json"];
    configFlieList = this.configFlies.map(file => {
        return <div key={file} className="smfile smfile-white">{file}</div>
    });

    replicationDirection = () => {
       let rep = this.state.replication;
       this.setState({
           replication: !rep
       });
    }
    getContent = () => {
        let right = "smarrow smarrow-blue";
        let left = "smarrow smarrow-grey";
        if (!this.state.replication) {
            right = "smarrow smarrow-grey";
            left = "smarrow smarrow-blue";
        }
        let rep_buttons = (
            <Aux>
                <div className={right} onClick={this.replicationDirection}>arrow</div>
                <div className={left} onClick={this.replicationDirection}>arrow</div>
            </Aux>
        );
        return (
            <Aux>
                <div className="smlistContainer smlistContainer-grid1">
                    <div className="smfile smfile-grey">DA1</div>
                    {this.configFlieList}
                </div>
                <div className="smlistContainer-grid2">
                    {/* <div> */}
                    <div>Select Direction</div>
                    {rep_buttons}
                    {/* </div> */}
                </div>
                <div className="smlistContainer smlistContainer-grid3">
                    <div className="smfile smfile-grey">DA2</div>
                    {this.configFlieList}
                </div>
            </Aux>
        );
    }

    render() {
        let smdashboard = this.getContent();
        return (
            <div className="smDashboardContainer">
                {smdashboard}
            </div>
        );
    }
}

export default snapmirrorDashboard;