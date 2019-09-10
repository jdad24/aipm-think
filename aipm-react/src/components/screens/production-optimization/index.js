import React, { Component } from "react";
//import Header from '../../common-ui/persona-header/persona-header';
import PersonaEnv from "../../common-ui/personaEnv/personaEnv";
import Layout from "../../common-ui/Layout/layout";
import './index.css';
import poScreenShot from "../../../assets/productionOptimization.png";
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
    axios.get('https://aipm-gsc-nodered.mybluemix.net/sampleQuestions?persona='+this.state.title).then(response => {
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

      headerInfo.PersonaorPath = <PersonaEnv name="Paul" />;
      headerInfo.nav = "/";


    return headerInfo;
  };

  getPoContent = () => {
        let myContent = 
        <a href="https://prod.productionoptimization.ibm.com/#/"  target="_blank"><img src={poScreenShot} className="poContainerImg"></img></a>
        return myContent
    
  }

  render() {
    let PersonaEnv = this.getPersonaEnv();
    let poContent = this.getPoContent();

    return (
      <Layout
        role="Plant Manager"
        screenTop={PersonaEnv.PersonaorPath}
        content={poContent}
        backClickHandler={PersonaEnv.backClickHandler}
        path={PersonaEnv.nav}
        sampleQ = {this.state.sampleQ}
      />
    );
  }
}

export default ProductionOptimization;
