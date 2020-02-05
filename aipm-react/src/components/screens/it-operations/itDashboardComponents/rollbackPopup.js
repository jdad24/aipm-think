import React, { Component } from 'react';
import RadioButton from '../../../common-ui/RadioButton/radioButton';
import Aux from '../../../common-ui/Aux/Aux';
import Textbox from '../../../common-ui/Textbox/textbox';
import './itDasboardComponents.css';
import Axios from 'axios';
import { thisTypeAnnotation } from '@babel/types';
import arrow_white from '../../../../assets/arrow_right_white.svg';

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
        console.log("I'M HERE!!");
        // Axios.get('https://aipm-gsc-nodered.mybluemix.net/getsnapshotsforline?line=' + chosenLine).then(response => {
            Axios.get('https://aipm-gsc-nodered.mybluemix.net/getsnapshots?line=' + chosenLine).then(response => {
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
        if(this.state.chosenLine&& this.state.chosenSnapshot){
            console.log("rollback initiated");
        this.setState({
            initiate_rollback_popup: true
        });
        }else{
            alert("Please choose the line and snapshot to initiate rollback");
        }
        
    }

    confirmRollbackHandler = () => {

        // if(!(this.state.chosenLine&& this.state.chosenSnapshot)){
        //     alert("Please choose line and snapshot");
        // }else{
            //axios post call
        Axios.get('https://aipm-gsc-nodered.mybluemix.net/restoreSnapshot?volume_name=' + this.state.chosenLine + '&snapshot_restore_name=' + this.state.chosenSnapshot).then(response => {
            console.log(response);
            this.props.goodData();
        });

        Axios.get('https://aipm-gsc-nodered.mybluemix.net/updateRollbackTime?snapshot_restore_name=' + this.state.chosenSnapshot).then(response => {
            console.log(response);
            this.props.goodData();
        });

        // }
        this.cancelRollbackHandler();
        this.props.cancelRollback();
    }

    cancelRollbackHandler = () => {
        this.setState({
            initiate_rollback_popup: false,
            snapshot_names: [],
            chosenSnapshot: null,
            chosenLine: null
        });

        this.props.cancelRollback();
    }

    splitChosenSnapshot = (csnapshot) => {
        // let csnapshot;
        let name = this.state.chosenSnapshot;
        let split_name = name.split(/[-./_/]+/);
        csnapshot.month = split_name[2];
        csnapshot.day = split_name[3];
        csnapshot.year = split_name[1];
        csnapshot.value = split_name[4];
        csnapshot.time = csnapshot.value[0] + csnapshot.value[1]+":"+csnapshot.value[2] + csnapshot.value[3]
        return csnapshot;
    }

    getMainContent = () => {
        // if(this.state.line_names.length>0){

        // }

        let popup_content;
        let popup_buttons;
        if (this.state.initiate_rollback_popup) {
            let csnapshot={
                month : "Month",
                day : "Day",
                year : "Year",
                value : "Time",
                time : "Time"
            };

            csnapshot = this.splitChosenSnapshot(csnapshot);

            popup_content = <div className="confirm_popup"><p>Are you sure you want to roll back to {csnapshot.month+"/"+csnapshot.day+"/"+csnapshot.year+" "+csnapshot.time}?</p></div>
            popup_buttons = (
                <div className="rollback_popup_init rollback_popup_init_popup">
                    <div className="confirm_popup_button confirm_popup_button-blue" onClick={this.confirmRollbackHandler} >Yes</div>
                    <div className="confirm_popup_button confirm_popup_button-black" onClick={this.cancelRollbackHandler}>No</div>
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

            let snapshots = <p>choose line for snapshots</p>;

            if (this.state.snapshot_names.length > 0) {
                snapshots = this.state.snapshot_names.map(s => {
                    return <div onClick={(e) => this.choosenSnapshotHandler(e, s)} key={s} className="snapshot">{s}</div>;
                });
            }

            let csnapshot={
                month : "Month",
                day : "Day",
                year : "Year",
                value : "Time",
                time : "Time"
            };

            if (this.state.chosenSnapshot) {
                csnapshot = this.splitChosenSnapshot(csnapshot);
                // let name = this.state.chosenSnapshot;
                // let split_name = name.split(/[-./_/]+/);
                // month = split_name[2];
                // day = split_name[3];
                // year = split_name[1];
                // value = split_name[4];
                // time = <div className="target_textbox">{value[0] + value[1]}:{value[2] + value[3]}</div>

            }

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
                                <div className="target_textbox">{csnapshot.month}</div>
                                <div className="target_textbox">{csnapshot.day}</div>

                            </div>

                            <div className="target_textbox">{csnapshot.year}</div>

                        </div>
                        <div className="target_date">
                            <div>Target Time</div>
                            <div className="target_textbox">{csnapshot.time}</div>

                        </div>
                    </div>
                    <div className="snapshotsContainer">
                        <div className="watson_suggests">Watson Suggests</div>
                        <div className="snapshot_names_list">{snapshots}</div>
                    </div>

                </div>
            </Aux>);

            popup_buttons = (
                <div className="rollback_popup_init rollback_popup_init_popup rollback_button_container" onClick={this.rollbackHandler}>
                    <div>Initiate Rollback</div>
                    <div><img src={arrow_white}/></div>
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