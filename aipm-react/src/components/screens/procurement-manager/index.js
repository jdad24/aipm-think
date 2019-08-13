import React, { Component } from "react";
//import Header from '../../common-ui/persona-header/persona-header';
import PersonaEnv from "../../common-ui/personaEnv/personaEnv";
import Layout from "../../common-ui/Layout/layout";
import './index.css';
import procMgrScreenShot from "../../../assets/procurementManager.png";

class ProductionOptimization extends Component {
  backClickHandler = () => {
    this.setState({
      viDashboard: false,
      robotEnvironment: null
      // linkPath:"/vi"
    });
    console.log("backClickHandler");
  };

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
        let myContent = 
        <a href="https://gscvidashboard.mybluemix.net"  target="_blank"><img src={procMgrScreenShot} className="procMgrContainerImg"></img></a>
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
      />
    );
  }
}

export default ProductionOptimization;
