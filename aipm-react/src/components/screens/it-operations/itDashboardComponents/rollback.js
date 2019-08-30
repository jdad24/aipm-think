import React, { PureComponent } from 'react';
import axios from 'axios';
import BasicCard from '../../../common-ui/BasicCard/basicCard';
import Aux from '../../../common-ui/Aux/Aux';
import './itDasboardComponents.css';

class RollBack extends PureComponent {

    state = {
        lastRollback: []
    }

    // componentDidMount() {
    //     this.setState({
    //         lastRollback: this.props.lastRollback
    //     });
    // }

    static getDerivedStateFromProps = (props, state) => {
        return{
            lastRollback: props.lastRollback
        }
    }

    getMainContent = () => {
        console.log("lastrollback" + this.state.lastRollback);
        let lastrb = null;
        if(this.state.lastRollback){
            lastrb = this.state.lastRollback[0]+"/"+this.state.lastRollback[1]+"/"+this.state.lastRollback[2]+" "+ this.state.lastRollback[4];
        }
        let content =
            (<div className="sysStatusContainer">
                <div className="titleStatusContainer">
                    <div className="title">Rollback</div>
                    {/* <div className="status">last 6 hours</div> */}
                </div>
                <div className="smdefinition">
                    <div>Last Rollback {" "+lastrb}</div>
                    {/* <div>Last Rollback {this.state.lastRollback}</div> */}
                    <div  className="rollback_popup_init" onClick={this.props.initrollback}>
                    <div>Initiate rollback</div>
                    <div>arrow</div>
                    </div>
                    
                </div>
                
            </div>);
        return content;
    }

    render() {
        let content = this.getMainContent();

        return (
            <BasicCard classname="itCard">
                {content}
            </BasicCard>
        );
        // return (
        //     <Aux>
        //         <div>
        //             <div>System Status:</div>
        //             <div>{this.state.sysStatus}</div>
        //         </div>
        //         {content}
        //         {/* <div>{this.state.activities}</div> */}
        //     </Aux>
        // );
    }

}

export default RollBack;