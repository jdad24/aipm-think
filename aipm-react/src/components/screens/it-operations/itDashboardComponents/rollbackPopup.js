import React, { Component } from 'react';
import RadioButton from '../../../common-ui/RadioButton/radioButton';
import Aux from '../../../common-ui/Aux/Aux';
import Textbox from '../../../common-ui/Textbox/textbox';
import './itDasboardComponents.css';
import Axios from 'axios';

class RollbackPopup extends Component {

    state = {
        line_names: [],
        snapshot_names: [],
        chosenSnapshot: null,
        chosenLine: null,
        initiate_rollback_popup: false
    }

    componentDidMount() {
        Axios.get('https://aipm-gsc-nodered.mybluemix.net/getLines').then(response => {
            console.log("myrollback");
            console.log(response.data.line_names);
            this.setState({
                line_names: response.data.line_names
            });
        });
    }

    chooseLineHandler = (event, value) => {
        let chosenLine = value;
        // console.log(chosenLine);
        this.setState({
            chosenLine: chosenLine
        });

        Axios.get('https://aipm-gsc-nodered.mybluemix.net/getsnapshotsforline?line=' + chosenLine).then(response => {
            console.log(response.data.snapshot_name);
            this.setState({
                snapshot_names: response.data.snapshot_name
            });
        });
    }

    choosenSnapshotHandler = (event, value) => {
        let chosenSnapshot = value;
        console.log(chosenSnapshot);
        this.setState({
            chosenSnapshot: chosenSnapshot
        });
    }

    rollbackHandler = () => {
        console.log("rollback initiated");
        this.setState({
            initiate_rollback_popup: true
        });
    }

    confirmRollbackHandler=() => {
        //axios post call
        Axios.get('https://aipm-gsc-nodered.mybluemix.net/restoreSnapshot?volume_name='+this.state.chosenLine+'&snapshot_restore_name='+this.state.chosenSnapshot).then(response => {
            console.log(response);
            this.props.goodData();
        });
        this.cancelRollbackHandler();
        this.props.cancelRollback();
    }

    cancelRollbackHandler =() => {
        this.setState({
            initiate_rollback_popup: false,
            snapshot_names: [],
            chosenSnapshot: null,
            chosenLine: null
        });

        this.props.cancelRollback();
    }

    getMainContent = () => {
        // if(this.state.line_names.length>0){

        // }

        let popup_content;
        let popup_buttons;
        if (this.state.initiate_rollback_popup) {
            popup_content = <p>confirm rollback</p>
            popup_buttons = (
                <div className="rollback_popup_init">
                    <div onClick={this.confirmRollbackHandler} >Yes</div>
                    <div onClick={this.cancelRollbackHandler}>No</div>
                </div>
            );
        } else {
            let lines = this.state.line_names.map(l => {
                return (
                    <div key={l} className='rb_line'>
                        <div>{l}</div>
                        <div>
                            <RadioButton value={l} chooseLineHandler={(e) => this.chooseLineHandler(e, l)} />
                        </div>
                    </div>
                );
            });
    
            let snapshots = <p>choose Line for snapshots</p>;
    
            if (this.state.snapshot_names.length > 0) {
                snapshots = this.state.snapshot_names.map(s => {
                    return <div onClick={(e) => this.choosenSnapshotHandler(e, s)} key={s} className="snapshot">{s}</div>;
                });
            }
    
            let month = "Month";
            let day = "Day";
            let year = "Year";
            let value = "value"

            popup_content = (<Aux>
                <div className='select_line_container'>
                    <div className="select_line_container_items">
                        <p>select line ></p>
                    </div>
                    <div className="select_line_container_items lines_rb_container">
                        {lines}
                    </div>
                </div>
                <div className='target_watson_container'>
                    <div className='target_container'>
                        <div className="target_date">
                            <div>Target Date</div>
                            <div className="target_month_day">
                                <div className="target_textbox">{month}</div>
                                <div className="target_textbox">{day}</div>

                            </div>

                            <div className="target_textbox">{year}</div>

                        </div>
                        <div className="target_date">
                            <div>Target Time</div>
                            <div className="target_textbox"></div>

                        </div>
                    </div>
                    <div className="snapshotsContainer">
                        <div className="watson_suggests">Watson Suggests</div>
                        <div className="snapshot_names_list">{snapshots}</div>
                    </div>

                </div>
            </Aux>);

            popup_buttons=(
                <div className="rollback_popup_init" onClick={this.rollbackHandler}>
                    <div>Initiate Rollback</div>
                    <div>arrow</div>
                </div>
            );

        }

        let content = (
            <div className="rollback_modal">
                <div className="rollback_title">Rollback</div>
                {popup_content}
                {popup_buttons}
                {/* <Checkbox /> */}
            </div>
        );

        return content;

    }

    render() {

        let content = this.getMainContent();

        return (
            <Aux>
                {content}
            </Aux>
        );
    }
}

export default RollbackPopup;