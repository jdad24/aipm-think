import React, { Component } from 'react';
import Layout from '../../common-ui/Layout/layout';
import PersonaEnv from '../../common-ui/personaEnv/personaEnv';
import SystemStatus from './itDashboardComponents/systemStatus';
import StatisticsOEE from './itDashboardComponents/statisticsOEE';
import PlantHealth_ITO from './itDashboardComponents/plantHealth';
import ProdRate from './itDashboardComponents/productionRate';
import SnappMirror from './itDashboardComponents/snappMirror';
import ActivityLog from './itDashboardComponents/activityLog';
import Rollback from './itDashboardComponents/rollback';
import Modal from '../../common-ui/Modal/modal';
import RollbackPopup from './itDashboardComponents/rollbackPopup';
import Alerts from './itDashboardComponents/alerts';
import SnapmirrorDashboard from './itDashboardComponents/SnapMirror Dashboard/snapMirrorDashboard';
import axios from 'axios';
import https from 'https';
import './itOperations.css';
class itOperations extends Component {

    state = {
        initiateRollback_dashboard: false,
        ito_data: null,
        snapMirror: false,
        title: "visualInsights",
        sampleQ: [] 
    }

    initiateRollback_dashboardHandler = () => {
        console.log("rollback");
        this.setState({
            initiateRollback_dashboard: true
        });
    }

    cancelRollbackHandler = () => {
        console.log("rollback cancel");
        this.setState({
            initiateRollback_dashboard: false
        });
    }

    snapMirrorHandler = () => {
        this.setState({
            snapMirror: true
        });
    }

    goodDataHandler = () => {
        axios.get('https://aipm-gsc-nodered.mybluemix.net/netappDataFlow').then(response => {
            console.log(response);
        });
    }

    componentDidMount() {
        this.goodDataHandler();
        this.webSocketHandler();
        axios.get('https://aipm-gsc-nodered.mybluemix.net/sampleQuestions?persona='+this.state.title).then(response => {
            console.log(response);
            this.setState({
                sampleQ: response.data
            });
        });
    }

    backClickHandler = () => {
        this.setState({
            snapMirror: false
            // linkPath:"/vi"
        });
        console.log("backClickHandler");
    }


    wsCredentials = {
        "netapp": "wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc-netApp"
    }

    ws = null;
    isClosing = false;

    componentWillUnmount() {
        console.log("componentWillUnmount");
        this.isClosing = true;

        if (this.ws) {
            this.ws.close();
            console.log("YES! - componentWillUnmount");

        }
    }

    webSocketHandler = () => {
        let ws;
        let wsUri = this.wsCredentials.netapp;
        ws = new WebSocket(wsUri);
        this.ws = ws;
        ws.onmessage = (event) => {
            // parse the incoming message as a JSON object
            let msg = JSON.parse(event.data);
            console.log("Websocket msg");
            console.log(msg);
            this.setState({
                ito_data: msg
            });
        }

        ws.onopen = () => {
            console.log("connected");
        }

        ws.onclose = () => {
            console.log("------------>inside onclose");
            if (this.isClosing !== true) {
                this.webSocketHandler();
            }
        }
    }

    getPersonaEnv = () => {
        let headerInfo = {
            PersonaorPath: null,
            nav: null
        };

        if (this.state.snapMirror) {
            headerInfo.PersonaorPath = (
            <div className="repStatus">
                <div>
                <div className="dot" />
              </div>
              <div>
                <div className="repStatus_text">Replication Status:{" "}Active</div>
                <div className="repStatus_text">Replication Schedule: {" "}<b>every 5 minutes</b></div>
                </div>
            </div>);
            headerInfo.backClickHandler = this.backClickHandler;
        }else{
            headerInfo.PersonaorPath = <PersonaEnv name="Rhonda" />;
            headerInfo.nav = "/";
        }
        
        return headerInfo;
    }

    getMainContent = () => {
        let itoperations = <p>No data</p>

        if (this.state.snapMirror) {
            itoperations = <SnapmirrorDashboard />
        } else if (this.state.ito_data) {
                //console.log(this.state.ito_data);
                itoperations = (
                    <div className="itOperationsContainer">
                        <Modal
                            show={this.state.initiateRollback_dashboard}
                            modalClosed={this.cancelRollbackHandler}
                            styling="itoModal">
                            <RollbackPopup
                                initrollback={this.initiateRollback_dashboardHandler}
                                cancelRollback={this.cancelRollbackHandler}
                                goodData={this.goodDataHandler}
                            />
                        </Modal>
                        <SystemStatus sysStatus={this.state.ito_data.sysStatus} sysState={this.state.ito_data.sysState} />
                        <StatisticsOEE oee={this.state.ito_data.oee} />
                        <PlantHealth_ITO sysStatus={this.state.ito_data.sysStatus} plantHealth={this.state.ito_data.plantHealth} />
                        <ProdRate prodRate={this.state.ito_data.prodRate} />
                        <SnappMirror 
                        snapMirrorHandler={this.snapMirrorHandler} 
                        snappMirror={this.state.ito_data.snappMirror}
                        />
                        <ActivityLog activityLog={this.state.ito_data.activityLog} />
                        <Rollback
                            initrollback={this.initiateRollback_dashboardHandler}
                            lastRollback={this.state.ito_data.rollback}
                        //cancelRollback={this.cancelRollbackHandler}
                        />
                        <Alerts />
                    </div>

                );
            }



        return itoperations;
    }


    render() {
        let itoperations = this.getMainContent();
        let PersonaEnv = this.getPersonaEnv();
        let warn;
        if (this.state.ito_data) {
            warn = this.state.ito_data.sysStatus;
        }
        return (
            <Layout
                role="Operations Manager"
                screenTop={PersonaEnv.PersonaorPath}
                content={itoperations}
                backClickHandler = {PersonaEnv.backClickHandler}
                path={PersonaEnv.nav}
                warn={warn}
                sampleQ = {this.state.sampleQ}
            />
        );
    }
}

export default itOperations;