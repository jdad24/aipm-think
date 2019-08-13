import React, {Component } from 'react';
import Layout from '../../common-ui/Layout/layout';
import PersonaEnv from '../../common-ui/personaEnv/personaEnv';
import SystemStatus from './itDashboardComponents/systemStatus';
import StatisticsOEE from './itDashboardComponents/statisticsOEE';
import PlantHealth_ITO from './itDashboardComponents/plantHealth';
import ProdRate from './itDashboardComponents/productionRate';
import SnappMirror from './itDashboardComponents/snappMirror';
import ActivityLog from './itDashboardComponents/activityLog';
import Rollback from './itDashboardComponents/rollback';

import axios from 'axios';
import https from 'https';
import './itOperations.css';
class itOperations extends Component {

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

        let itoContent = "";

        // axios.get('https://52.116.20.100/api/storage/volumes').then(response => {
        //     console.log(response);
        // });
        // const agent = new https.Agent({  
        //     rejectUnauthorized: false
        //   });

        // axios({
        //     url: 'https://52.116.20.100/api/storage/volumes',
        //     method: 'get',
        //     httpsAgent: agent,
        //     headers: {
        //         "Authorization": "Basic YWRtaW46TmV0QHBwMTIzIQ=="
        //     }
        // }).then();

       // itoContent = (<p>IT Operations Content</p>);

        let itoperations = (
            <div className="itOperationsContainer">
                <SystemStatus />
                <StatisticsOEE />
                <PlantHealth_ITO />
                <ProdRate />
                <SnappMirror />
                <ActivityLog />
                <Rollback />
            </div>
        
        );

         return itoperations;
    }


    render() {
        let itoperations = this.getMainContent();
        let PersonaEnv = this.getPersonaEnv();
        return (
            <Layout
                role="Operations Manager"
                screenTop={PersonaEnv.PersonaorPath}
                content={itoperations}
                //backClickHandler = {PersonaEnv.backClickHandler}
                path={PersonaEnv.nav}
            />
        );
    }
}

export default itOperations;