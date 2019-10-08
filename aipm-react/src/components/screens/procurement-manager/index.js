import React, { Component } from "react";
import Aux from '../../common-ui/Aux/Aux';
import PersonaEnv from "../../common-ui/personaEnv/personaEnv";
import Layout from "../../common-ui/Layout/layout";
import './index.css';
import BlueCircle from '../../common-ui/BlueCircle/circle';
import BlueLine from '../../common-ui/BlueLine/line';
import CircleCheck from "../../common-ui/CircleCheck/circleCheck"
import GreyCircle from '../../common-ui/GreyCircle/circle';
import GreyLine from '../../common-ui/GreyLine/line';
import procMgrScreenShot from "../../../assets/procurementManager.png";
import axios from 'axios';

class ProductionOptimization extends Component {

  state = {
    title: "procurementManager",
    sampleQ: [],
    steps: [], 
    currentStep : "Order",
    po: null
  }

  callApi = async (url) => {
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

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

    this.getInitialWorkflowState();
    this.Order();
    //url = restUrl + '/api/queries/OrderById?orderId=' + orderId;
    // this.callApi('/api/hello')
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => console.log(err));
  }

  Order = () => {
    this.callApi('/api/queries/OemOrderSorted')
      .then(res => {
        console.log(res[0].orderId);
        let sap_oid_template = "450000";
        if(sap_oid_template === res[0].orderId.substring(0,6)){
          this.setState({
            po: res[0].orderId
          });
        }else{
          //creating a random number > 5000 and < 10000 to match SAP PO pattern
          let oid = sap_oid_template + Math.floor(5000 + Math.random() * 5000);
          this.setState({
            po: oid
          }, () => {
            console.log(this.state.po);
          });
        }
      })
      .catch(err => console.log(err));
  }

  getInitialWorkflowState = () => {
    axios.get('https://aipm-gsc-nodered.mybluemix.net/initialWorkflowState').then(response => {
      this.setState({
        steps: response.data
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

  nextHandler = () => {
    //alert("in next handler");
    let s = this.state.steps;
    let updateFlag = false;
    let currStep = this.state.currentStep;

    if (s[s.length - 1].state === "2") {
      this.getInitialWorkflowState();
    } else {
      for (let i = 0; i < s.length; i++) {
        if (s[i].state === "2" && !updateFlag) {
          s[i].state = "1";
          s[i + 1].state = "2";
          updateFlag = true;
          currStep = s[i + 1].name;
          // break;
        }
      }

      this.setState({
        steps: s,
        currentStep : currStep
      }, () => {
        //console.log(this.state.currentStep);

      });

      //console.log("this.state.currentStep", this.state.currentStep);
    }


  }

  getProcMgrContent = () => {
    let myContent = "no data";
    //Uncomment bellow code to replace screenshot................
    // let complete = <CircleCheck />;
    // let current = <BlueCircle />;
    // let incomplete = <GreyCircle />;
    // let stepState = {
    //   "0": incomplete,
    //   "1": complete,
    //   "2": current
    // }
    // let greyLine = <GreyLine />;
    // let blueLine = <BlueLine />;

    // let lineColor = {
    //   "0": greyLine,
    //   "1": blueLine,
    //   "2": greyLine
    // }

    // // let localState = this.state.stepState;
    // // let localLineColor = this.state.lineColor;
    // if (this.state.steps.length) {

    //   let stepsLen = this.state.steps.length;
    //   let currStep = this.state.currentStep;
    //   //console.log("currStep", currStep);
    //   let workflow = this.state.steps.map((s, i) => {
    //     let circleLine = (
    //       <Aux>
    //         {stepState[s.state]}
    //         {lineColor[s.state]}
    //       </Aux>
    //     );

    //     if (stepsLen == (i + 1)) {
    //       circleLine = (
    //         <Aux>
    //           {stepState[s.state]}
    //         </Aux>
    //       );
    //     }
    //     return (
    //       <div key={s.name} className="step" >
    //         <div className="circleLine">
    //           {circleLine}
    //           {/* <BlueLine /> */}
    //         </div>
    //         <div className="stepName">{s.name}</div>
    //       </div>
    //     );
    //   });

    //   myContent = (
    //     <div className="procurementContainer">
    //       <div className="workflowContainer">
    //         <div className="workflow">
    //           {workflow}
    //           {/* <Circle/>
    //         <Line /> */}
    //         </div>
    //       </div>
    //       <div className="documentContextContainer">
    //         <img className="procurementImgs" src={require('../../../assets/' + currStep + '.png')} />
    //         {/* <img src={require('../../../assets/Accept.png')}/> */}
    //       </div>
    //       <div className="blockchainListenerContainer">blockchainListenerContainer</div>
    //       <div className="nextButtonContainer">
    //         <button onClick={this.nextHandler}>Next</button>
    //       </div>
    //     </div>
    //   );
    // }
    //Uncomment above code to replace screenshot................
    
    //Comment bellow code to replace screenshot................
    myContent = <a href="https://gscvidashboard.mybluemix.net" target="_blank"><img src={procMgrScreenShot} className="procMgrContainerImg"></img></a>
    //Comment above code to replace screenshot................
    
    return myContent ; 

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
