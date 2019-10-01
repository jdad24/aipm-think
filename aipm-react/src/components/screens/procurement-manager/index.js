import React, { Component } from "react";
import Aux from '../../common-ui/Aux/Aux';
//import Header from '../../common-ui/persona-header/persona-header';
import PersonaEnv from "../../common-ui/personaEnv/personaEnv";
import Layout from "../../common-ui/Layout/layout";
import './index.css';
import BlueCircle from '../../common-ui/BlueCircle/circle';
import BlueLine from '../../common-ui/BlueLine/line';
import procMgrScreenShot from "../../../assets/procurementManager.png";
import axios from 'axios';

class ProductionOptimization extends Component {

  state = {
    title: "procurementManager",
    sampleQ: []
  }
  
  backClickHandler = () => {
    this.setState({
      viDashboard: false,
      robotEnvironment: null
      // linkPath:"/vi"
    });
    console.log("backClickHandler");
  };

  componentDidMount = () => {
    axios.get('https://aipm-gsc-nodered.mybluemix.net/sampleQuestions?persona=' + this.state.title).then(response => {
      console.log(response);
      this.setState({
        sampleQ: response.data
      });
    });
  }

  getPersonaEnv = () => {
    let headerInfo = {
      PersonaorPath: null,
      nav: null,
      backClickHandler: null
    };

    headerInfo.PersonaorPath = <PersonaEnv name="Penelope" />;
    headerInfo.nav = "/";


    return headerInfo;
  };

  getProcMgrContent = () => {
    let steps = ["Order", "Confirm", "Source", "Assemble", "Inspect", "Ship", "Grade", "Accept", "Deliver"];

    let circleLine = (
      <div className="circleLine">
        <BlueCircle/>
        <BlueLine />
      </div>
    );

    let workflow = steps.map(s => {
      return(
        <div className="cirlceLineText">
          {circleLine}
        <div>{s}</div>
        </div>
        
      );
    });

    let myContent = (
      <div className="procurementContainer">
        <div className="workflowContainer">
          <div className="workflow">
            {workflow}
          {/* <Circle/>
          <Line /> */}
          </div>
        </div>
        <div className="documentContextContainer">documentContextContainer</div>
        <div className="blockchainListenerContainer">blockchainListenerContainer</div>
      </div>
    );
      // <a href="https://gscvidashboard.mybluemix.net" target="_blank"><img src={procMgrScreenShot} className="procMgrContainerImg"></img></a>
    return myContent

  }

  render() {
    let PersonaEnv = this.getPersonaEnv();
    let poContent = this.getProcMgrContent();

    return (
      <Layout
        role="Procurement Manager"
        screenTop={PersonaEnv.PersonaorPath}
        content={poContent}
        backClickHandler={PersonaEnv.backClickHandler}
        path={PersonaEnv.nav}
        sampleQ={this.state.sampleQ}
      />
    );
  }
}

export default ProductionOptimization;
