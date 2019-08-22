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
import axios from 'axios';
import https from 'https';
import './itOperations.css';
class itOperations extends Component {

    state = {
        initiateRollback_dashboard: false,
        ito_data: null
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

    goodDataHandler = () => {
        axios.get('https://aipm-gsc-nodered.mybluemix.net/netappDataFlow').then(response => {
            console.log(response);
        });
    }

    componentDidMount() {
        this.goodDataHandler();
        this.webSocketHandler();
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

        headerInfo.PersonaorPath = <PersonaEnv name="Rhonda" />;
        headerInfo.nav = "/";
        return headerInfo;
    }

    getMainContent = () => {
        let itoperations = <p>No data</p>

        if (this.state.ito_data) {
            console.log(this.state.ito_data.sysStatus);
            itoperations = (
                <div className="itOperationsContainer">
                    <Modal
                        show={this.state.initiateRollback_dashboard}
                        modalClosed={this.cancelRollbackHandler}>
                        <RollbackPopup
                            initrollback={this.initiateRollback_dashboardHandler}
                            cancelRollback={this.cancelRollbackHandler}
                            goodData = {this.goodDataHandler}
                        />
                    </Modal>
                    <SystemStatus sysStatus={this.state.ito_data.sysStatus} sysState={this.state.ito_data.sysState} />
                    <StatisticsOEE oee={this.state.ito_data.oee} />
                    <PlantHealth_ITO sysStatus={this.state.ito_data.sysStatus} plantHealth={this.state.ito_data.plantHealth} />
                    <ProdRate prodRate={this.state.ito_data.prodRate} />
                    <SnappMirror />
                    <ActivityLog activityLog={this.state.ito_data.activityLog} />
                    <Rollback
                        initrollback={this.initiateRollback_dashboardHandler}
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
                //backClickHandler = {PersonaEnv.backClickHandler}
                path={PersonaEnv.nav}
                warn={warn}
            />
        );
    }
}

export default itOperations;