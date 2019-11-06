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
import BlockChainListner from '../../common-ui/BlockchainListener/BlockchainListener';
import Confirm from '../../../assets/Confirm.mp4';
import uploadIcon from '../../../assets/upload.svg';
import Modal from '../../common-ui/Modal/modal';
// import * as pm from './rest-util';

import DocumentContext from "./DocumentContext/DocumentContext";
import rightArrow from "../../../assets/arrow_right_white.svg";
import LiveVideoText from './LiveVideoText/LiveVideoText';



class ProductionOptimization extends Component {

  state = {
    title: "procurementManager",
    sampleQ: [],
    steps: [],
    currentStep: "Order",
    po: null,
    blockChainContents: null,
    vidata_Graph: [
      { name: "good", value: 75 },
      { name: "bent", value: 15 },
      { name: "damaged", value: 5 },
      { name: "empty", value: 5 }
    ],
    dataQuality: null,
    expandSAPorGraph: false,
    expandMedia: false
  }

  Order = () => {
    this.setState({
      title: "procurementManager",
      sampleQ: [],
      steps: [],
      currentStep: "Order",
      po: null,
      blockChainContents: null
    });
    this.callApi('/api/queries/OemOrderSorted')
      .then(res => {
        console.log(res);
        let localProps = ["orderId", "status", "orderDate", "deliverBy"];
        let sap_oid_template = "450000";

        //.........Uncomment below Oct 14..........
        //if(sap_oid_template === res[0].orderId.substring(0,6) && res[0].status === "PLACED"){
        //.........Uncomment above Oct 14..........
        // if (sap_oid_template === res[0].orderId.substring(0, 6)) {
        let rows = localProps.map(field => {
          return ({ [field]: res[0][field] });
        });
        // console.log(rows);

        this.setState({
          po: res[0].orderId,
          blockChainContents: rows
        });
        // }

        //.........Uncomment below Oct 14..........
        // else{
        //   alert("Please create a new PO. Previous PO status is COMPLETE");
        //.........Uncomment above Oct 14..........

        //creating a random number > 5000 and < 10000 to match SAP PO pattern
        // let oid = sap_oid_template + Math.floor(5000 + Math.random() * 5000);
        // this.setState({
        //   po: oid
        // }, () => {
        //   console.log(this.state.po);
        // });

        //.........Uncomment below Oct 14..........
        // }
        //.........Uncomment above Oct 14..........
      })
      .catch(err => console.log(err));
  }

  placeOrder = (orderObj, masterOrderId) => {
    const url = '/api/PlaceOrder'
    let orderId = Math.random().toString(36).substr(2, 7);
    var localProps = ["masterOrderId", "orderId", "status", "orderDate", "deliverBy"];
    const newOrder = JSON.parse(JSON.stringify(orderObj));

    newOrder.orderId = orderId;
    if (masterOrderId) {
      newOrder.masterOrderId = masterOrderId;
    } else {
      delete newOrder.masterOrderId;
    }
    axios.post(url, {
      'obj': JSON.stringify(newOrder)
    },
      function (data, status, xhr) {
        this.logStatus(data, status, xhr);
      }).then(res => {
        //console.log(res.data);
        let subOrders = [];
        if (this.state.blockChainContents) {
          subOrders = this.state.blockChainContents;
        }
        //console.log(subOrders);
        let rows = localProps.map(field => {
          return ({ [field]: res.data[field] });
        });

        subOrders.push(rows);
        //console.log(subOrders);
        this.setState({
          blockChainContents: subOrders
        })
        return orderId;
      });

    return orderId;
  }

  PO_acknowledgement = (oid) => {

    // const url = "https://sinv-copilot.isl.edst.ibm.com:44390/sap/opu/odata/sap/ZDSS_PO_CONFIRMATION_SRV/POSet(Po='"+oid+"')?$format=json";
    // const url = "/PO_Acknowledgement?Po='" + oid + "'";4500001585



    const url = "/PO_Acknowledgement?Po=" + oid;
    axios.get(url);
    // $.ajax({
    //     async: false,
    //     url: url,
    //     type: "GET",
    //     //beforeSend: function(xhr){xhr.setRequestHeader("Authorization", "Basic SFRfREVNTzppYm1nc2M=")},
    //     //headers: { 'Authorization': 'Basic SFRfREVNTzppYm1nc2M=' },
    //     success: function (response) {
    //         console.log(response);
    //         myvidata = response;
    //         return response;
    //     }
    // });


  }

  send_VIdata = (data) => {
    //const url = "/send_VIdata";
    // console.log("vidata from rest util",data);
    const vidata = JSON.stringify(data);

    //UNCOMMENT
    // $.post(url,vidata).done(function(response) {
    //     console.log(response);
    //    routeLot(sessionStorage.getItem('lid'), response);
    //   });
    //UNCOMMENT

    //adding for demo!!

    let resp = ['wait', 'accepted', 'rejected'];
    resp = {
      'good': 'accepted',
      'bad': 'rejected',
      'marginal': 'wait'
    };

    // let dindex = Math.floor(Math.random() * 3);
    this.routeLot(this.state.lid, resp[this.state.dataQuality]);
    // $.ajax({
    //     type: 'POST',
    //     url: url,
    //     data: myvidata
    // })
  }

  // function getLID(decision){

  //     routeLot(sessionStorage.getItem('lid'), decision);
  // }


  getVIdata = (dataQuality, dataIndex, masteroid) => {

    axios.get('https://aipm-gsc-nodered.mybluemix.net/vidata?dataQuality=' + this.state.dataQuality + '&dataIndex=-1').then(res => {
      const vidata = res.data.vidata;
      console.log(vidata);
      let vi = vidata.map(data => {
        return ({ [data.Timestamp]: data.Timestamp });
      });

      this.setState({
        blockChainContents: vi
      });
      this.package_and_send_VIdata(vidata, this.state.po);
      return res;
    }
    );
  }

  package_and_send_VIdata = (data, masteroid) => {
    //const moid = getSessionId();
    // const moid = "4500001622";
    const moid = this.state.po;
    console.log(masteroid.toString());
    //const moid = masteroid;

    // let vidata = {
    //     "record": [
    //         {
    //             "purchaseOrder": moid,
    //             "sampleId": "1",
    //             "result": "GOOD"
    //         },
    //         {
    //             "purchaseOrder": moid,
    //             "sampleId": "2",
    //             "result": "GOOD"
    //         }
    //     ]
    // }

    let vidata = {
      "record": []
    }

    for (let i = 0; i < data.length; i++) {
      let confidence = [];
      let type = [];
      let max_confidence;
      let max_type;
      let board_classifications = {};
      for (let j = 0; j < data[i]['detections'][0]['probableTypes'].length; j++) {
        // console.log(data[i]['detections'][0]['probableTypes'][j]['confidence']);
        // console.log(data[i]['detections'][0]['probableTypes'][j]['type']);
        confidence.push(parseInt(data[i]['detections'][0]['probableTypes'][j]['confidence']));
        type.push(data[i]['detections'][0]['probableTypes'][j]['type']);
        //board_classifications[data[i]['detections'][0]['probableTypes'][j]['type']] = data[i]['detections'][0]['probableTypes'][j]['confidence'];

      }
      // console.log("confidence", confidence);
      max_confidence = Math.max.apply(null, confidence);
      // console.log("max_confidence", max_confidence);
      max_type = type[confidence.indexOf(max_confidence)].toString().toUpperCase();
      // console.log("max_type", max_type);
      vidata["record"].push({
        "purchaseOrder": moid.toString(),
        "sampleId": (i + 1).toString(),
        "result": max_type
      });
    }
    console.log(vidata);
    this.send_VIdata(vidata);
  }

  placeOemOrder = () => {
    return this.placeOrder(this.oemOrderObj);
  }

  placeEmsOrder = (order, masterOrderId) => {
    return this.placeOrder(order, masterOrderId);
  }

  createLot = (orderId) => {
    const url = '/api/CreateLot'
    let lotId = Math.random().toString(36).substr(2, 8);

    this.lotObj.lotId = lotId;
    this.lotObj.orderId = orderId;
    this.lotObj.quantity = 100;

    axios.post(url, {
      'obj': JSON.stringify(this.lotObj)
    }, function (data, status, xhr) {
      this.logStatus(data, status, xhr);
    })
      .then(res => {
        let lid = res.data['lotId']
        this.callApi('/api/queries/LotByOrderId?orderId=' + this.state.po).then(res => {
          console.log(res);
          let localProps = ["orderId", "lotId", "quantity"];
          let rows = res.map(r => {
            let l = localProps.map(field => {
              return ({ [field]: r[field] });
            });
            return l;
          });

          this.setState({
            lid: lid,
            blockChainContents: rows
          });
        });
      });

    return lotId;
  }

  inspect = (lotId, orderId) => {
    const url = '/api/Inspect'
    let inspectionId = Math.random().toString(36).substr(2, 9);

    this.inspectionObj.inspectionId = inspectionId;
    this.inspectionObj.lotId = lotId;
    this.inspectionObj.orderId = orderId;
    this.inspectionObj.inspectionData = `Inspection data for lot: ${lotId}, the result is xxx`;

    axios.post(url, {
      'obj': JSON.stringify(this.inspectionObj)
    }, function (data, status, xhr) {
      this.logStatus(data, status, xhr);
    })
      .then(res => {
        let localProps = ["orderId", "lotId", "inspectionId"];
        console.log(res);
        let l = localProps.map(field => {
          return ({ [field]: res.data[field] });
        });
        this.setState({
          blockChainContents: l
        });
      });

    return inspectionId;
  }

  ship = (lotId, orderId, shipFrom, shipTo, item) => {
    const url = '/api/Ship'
    let shipmentId = Math.random().toString(36).substr(2, 8);

    this.shipmentObj.shipmentId = shipmentId;
    this.shipmentObj.lotId = lotId;
    this.shipmentObj.orderId = orderId;
    this.shipmentObj.shipDate = Date();

    this.shipmentObj.shipFrom = shipFrom;
    this.shipmentObj.shipTo = shipTo;
    this.shipmentObj.item = item;

    axios.post(url, {
      'obj': JSON.stringify(this.shipmentObj)
    }, function (data, status, xhr) {
      this.logStatus(data, status, xhr);
    })
      .then(res => {
        console.log("ship");
        console.log(res);
        // var localProps = ["orderId", "shipmentId", "lotId", "shipDate", "shipFrom", "shipTo"];
        var localProps = ["orderId", "shipmentId", "lotId", "shipDate"];
        let subOrders = [];
        if (this.state.blockChainContents) {
          subOrders = this.state.blockChainContents;
        }
        //console.log(subOrders);
        let rows = localProps.map(field => {
          return ({ [field]: res.data[field] });
        });

        subOrders.push(rows);

        console.log(subOrders);
        this.setState({
          blockChainContents: subOrders
        }, () => {
          console.log(this.state.blockChainContents);
        });
      });
    return shipmentId;
  }

  routeLot = (lotId, decision) => {
    const url = '/api/RouteLot';

    this.routeObj.lotId = lotId;
    // routeObj.lotId = "4500001622";

    switch (decision) {
      case 'accepted':
        this.routeObj.disposition = 'ACCEPTED';
        break;
      case 'wait':
        this.routeObj.disposition = 'PENDING';
        break;
      case 'rejected':
        this.routeObj.disposition = 'REJECTED';
        break;
      default:
        console.error('[rest-util]', 'Invalid decision, please use "ACCEPTED", "PENDING" or "REJECTED"');
        return;
    }

    console.log(this.routeObj);
    this.setState({
      disposition: this.routeObj.disposition
    });

    axios.post(url, {
      'obj': JSON.stringify(this.routeObj)
    }, function (data, status, xhr) {
      this.logStatus(data, status, xhr);
    }).then(res => {
      console.log(res);
    });
  }

  CompleteOrder = (orderId) => {
    const url = '/api/CompleteOrder'

    const orderObj = {
      "$class": "org.aim.operation.CompleteOrder",
      "orderId": orderId
    }

    axios.post(url, {
      'obj': JSON.stringify(orderObj)
    }, function (data, status, xhr) {
      this.logStatus(data, status, xhr);
    })
      .then(res => {
        console.log(res);
        let localProps = ["orderId", "status", "orderDate", "deliverBy"];
        let rows = localProps.map(r => {
          return ({ [r]: res.data[r] });
        });
        this.setState({
          blockChainContents: rows
        });
      });

  }

  failed = (message, body) => {
    console.log('error: ', message, ' body: ', body);
  }

  logStatus = (data, status, xhr) => {
    console.log('[rest-util]', '[placeOrder]', 'data:', data);
    console.log('[rest-util]', '[placeOrder]', 'status:', status);
    console.log('[rest-util]', '[placeOrder]', 'xhr:', xhr);
  }

  getDataQuality = () => {

    let dataQualityList = ['good', 'bad', 'marginal'];
    let dq = Math.floor(Math.random() * 3);
    let dataQuality = dataQualityList[dq];
    let vidata_graph = this.state.vidata_Graph;

    if (dataQuality === 'good') {
      vidata_graph = [
        { name: "good", value: 95 },
        { name: "bent", value: 3 },
        { name: "damaged", value: 1 },
        { name: "empty", value: 1 }
      ];
    }
    else if (dataQuality === 'bad') {
      vidata_graph = [
        { name: "good", value: 65 },
        { name: "bent", value: 10 },
        { name: "damaged", value: 20 },
        { name: "empty", value: 5 }
      ];
    }

    this.setState({
      blockChainContents: null,
      dataQuality: dataQuality,
      vidata_Graph: vidata_graph
    });

  }

  currentStepProcess = () => {
    console.log("currentStepProcess");
    switch (this.state.currentStep) {

      case "Order":
        this.Order();
        break;

      case "Confirm":
        this.setState({
          blockChainContents: null
        });
        this.callApi('PO_Acknowledgement?Po=' + 4500001782);
        console.log("Confirm");
        let orders = [this.emsOrderObj1, this.emsOrderObj2, this.emsOrderObj3, this.emsOrderObj4];

        for (let i = 0; i < 4; i++) {
          //console.log("pm order");
          this.placeEmsOrder(orders[i], this.state.po)
          // subOrder = pm.placeEmsOrder(orders[0], this.state.po)
          // .then(res => {
          //   console.log(res);
          // });


          // let props = ["masterOrderId", "orderId", "status", "orderDate", "deliverBy"];
        }

        break;

      case "Source":
        console.log(this.state.blockChainContents);
        let subOrders = this.state.blockChainContents;
        this.setState({
          blockChainContents: null
        });
        for (let j = 0; j < subOrders.length; j++) {
          let lotId = Math.random().toString(36).substr(2, 8);
          this.ship(lotId, subOrders[j][1]['orderId'], this.emsAddress, this.oemAddress, this.atx2920Item);
          console.log("order id : " + subOrders[j][1]['orderId']);
        }
        break;

      case "Assemble":
        this.setState({
          blockChainContents: null
        });
        let lid = this.createLot(this.state.po);
        break;

      case "Inspect":
        this.getDataQuality();
        this.inspect(this.state.lid, this.state.po);
        break;

      case "Ship":
        this.setState({
          blockChainContents: null
        });
        this.ship(this.state.lid, this.state.po, this.emsAddress, this.oemAddress, this.atx2920Item);
        break;

      case "Grade":
        this.setState({
          blockChainContents: null
        });
        this.getVIdata(null, null, this.state.po);

        //send info to SAP
        break;

      case "Accept":
        console.log("Accept");
        this.setState({
          blockChainContents: null
        });
        this.callApi('/api/queries/LotByOrderId?orderId=' + this.state.po).then(res => {
          console.log(res);
          let Disposition = ["PENDING", "ACCEPTED", "REJECTED"];
          let localProps = ["orderId", "lotId", "disposition", "quantity"];
          let rows = localProps.map(r => {
            if (r == "disposition") {
              return ({ [r]: this.state.disposition });
            } else {
              return ({ [r]: res[0][r] });
            }

          });
          this.setState({
            blockChainContents: rows
          });
        });
        break;

      case "Deliver":
        this.setState({
          blockChainContents: null
        });
        this.CompleteOrder(this.state.po);
        break;

    }
  }

  getResponse = (props) => {
    console.log(props);
  }

  callApi = async (url) => {
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
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
  }

  getInitialWorkflowState = () => {
    axios.get('https://aipm-gsc-nodered.mybluemix.net/initialWorkflowState').then(response => {
      // let stateSteps = response.data.map(s => {
      //   return s.name;
      // });
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
        currentStep: currStep
      }, () => {
        this.currentStepProcess();
      });
    }


  }

  toggleMedia = () => {
    let prev = this.state.expandMedia;
    this.setState({
      expandMedia: !prev
    });
  }

  toggleSAPorGraph = () => {
    let prev = this.state.expandSAPorGraph;
    this.setState({
      expandSAPorGraph: !prev
    });
  }

  minimizeMedia = () => {
    this.setState({
      expand: false
    });
  }

  maximizeMedia = () => {
    this.setState({
      expand: true
    });
  }

  getProcMgrContent = () => {
    let myContent = "no data";
    //Uncomment bellow code to replace screenshot................
    let complete = <CircleCheck />;
    let current = <BlueCircle />;
    let incomplete = <GreyCircle />;
    let stepState = {
      "0": incomplete,
      "1": complete,
      "2": current
    }
    let greyLine = <GreyLine />;
    let blueLine = <BlueLine />;

    let lineColor = {
      "0": greyLine,
      "1": blueLine,
      "2": greyLine
    }

    if (this.state.steps.length) {

      let stepsLen = this.state.steps.length;
      let currStep = this.state.currentStep;
      let workflow = this.state.steps.map((s, i) => {
        let circleLine = (
          <Aux>
            {stepState[s.state]}
            {lineColor[s.state]}
          </Aux>
        );

        if (stepsLen == (i + 1)) {
          circleLine = (
            <Aux>
              {stepState[s.state]}
            </Aux>
          );
        }
        return (
          <div key={s.name} className="step" >
            <div className="circleLine">
              {circleLine}
            </div>
            <div className="stepName">{s.name}</div>
          </div>
        );
      });

      let blockChainContents = [];
      if (this.state.blockChainContents) {
        //console.log(this.state.blockChainContents);
        // let data =[];
        blockChainContents = this.state.blockChainContents.map(rows => {

          // console.log(typeof rows);
          if (rows.length > 0) {
            // let bcContents = rows.map(r => {
            //   return ([Object.keys(r), Object.values(r)]);
            // });
            // return bcContents;
            let bcContents = rows.map(r => {
              return (
                <div className="bcContents" key={Object.values(r)}>
                  <div>{Object.keys(r)} :</div>
                  <div>{Object.values(r)}</div>
                </div>
              );
            });
            return (
              <Aux >
                {bcContents}
              </Aux>
            );
          } else {
            return (
              //return ([Object.keys(rows), Object.values(rows)]);
              <div className="bcContents" key={Object.values(rows)}>
                <div>{Object.keys(rows)} :</div>
                <div>{Object.values(rows)}</div>
              </div>
            );
          }
        });
      }
      let mediaVideo = (
        <video
          src={Confirm}
          autoPlay={true}
          loop
          muted
          preload="true"
          width="100%"
          height="auto"
          controls
        >
        </video>
      );

      let docContext = <DocumentContext currStep={this.state.currentStep} vidata={this.state.vidata_Graph} />;
      myContent = (
        <div className="procurementContainer">
          <Modal
            show={this.state.expandSAPorGraph}
            modalClosed={this.toggleSAPorGraph}>
            {/* <div>media</div> */}
            {docContext}

            {/* <DocumentContext currStep={this.state.currentStep} vidata={this.state.vidata_Graph} /> */}

          </Modal>
          <Modal
            show={this.state.expandMedia}
            modalClosed={this.toggleMedia}>
            <div className="modalMediaContainer">{mediaVideo}</div>
          </Modal>
          <div className="workflowContainer">
            <div className="workflow">
              {workflow}
            </div>
          </div>
          <div className="procurementContent">
            <div className="documentContextContainer">
              <div className=" procurementTitles titlesContainer">
                <div>Document Context</div>
                <div onClick={this.toggleSAPorGraph}><img src={uploadIcon} /></div>
              </div>
              {docContext}
              {/* <img className="procurementImgs" src={require('../../../assets/' + currStep + '.png')} /> */}
              {/* <DocumentContext currStep={this.state.currentStep} vidata={this.state.vidata_Graph} /> */}
            </div>
            <div className="mediaContainer">
              {/* <div className="bcTitles">Live Video</div> */}
              <div className="procurementTitles titlesContainer">
                <div>Live Video</div>
                <div onClick={this.toggleMedia}><img src={uploadIcon} /></div>
              </div>
              <div className="videoTextContainer">
                {mediaVideo}
                <LiveVideoText currStep={this.state.currentStep} />
              </div>

            </div>
            <div className="blockchainListenerContainer">
              <div className="procurementTitles bcTitles" id="blockchainInfo">Blockchain Listener</div>
              {blockChainContents}
            </div>
            <div className="currentBlockContainer">
              <div className="procurementTitles bcTitles">Current Block</div>
            </div>
            <div className="blockchainbutton" onClick={this.nextHandler}>
              <div>Next</div>
              <img src={rightArrow} className="rightArrow" />
            </div>
          </div>
          {/* <div className="documentContextContainer">
            <img className="procurementImgs" src={require('../../../assets/' + currStep + '.png')} />
          </div>
          <div className="mediaContainer">
            <video
            src={Confirm} 
            autoPlay={true}
            loop
            muted
            preload="true"
            width="700px"
            height="500px"
            controls
            >
            </video>
          </div>
          <div className="blockchainListenerContainer">{blockChainContents}</div> */}
          {/* diff code */}
          {/* <div className="blockchainListenerContainer">
            <BlockChainListner bcdata={blockChainContents} />
          </div> */}
          {/* diff code */}
          {/* <div className="nextButtonContainer">
            <button className="blockchainbutton" onClick={this.nextHandler}>Next</button>
          </div> */}
        </div>
      );
    }
    //Uncomment above code to replace screenshot................

    //Comment bellow code to replace screenshot................
    //myContent = <a href="https://gscvidashboard.mybluemix.net" target="_blank"><img src={procMgrScreenShot} className="procMgrContainerImg"></img></a>
    //Comment above code to replace screenshot................

    return myContent;

  }

  oemAddress = {
    "$class": "org.aim.operation.Address",
    "name": "Penelope M",
    "street1": "1177 S Belt Line Rd",
    "city": "COPPELL",
    "state": "TX",
    "country": "US",
    "postcode": "75019-4652"
  }

  oemBillingAddress = {
    "$class": "org.aim.operation.Address",
    "name": "Audrey P",
    "street1": "1000 BELLEVIEW ST",
    "city": "DALLAS",
    "state": "TX",
    "country": "US",
    "postcode": "75215-1833"
  }

  oemShippingAddress = {
    "$class": "org.aim.operation.Address",
    "name": "Receiving",
    "street1": "4849 ALPHA RD",
    "city": "DALLAS",
    "state": "TX",
    "country": "US",
    "postcode": "75244-4608"
  }

  emsAddress = {
    "$class": "org.aim.operation.Address",
    "name": "Sam S",
    "street1": "343 HILTON AVE",
    "city": "BILOXI",
    "state": "MS",
    "country": "US",
    "postcode": "39531-2103"
  }

  supplierAddress1 = {
    "$class": "org.aim.operation.Address",
    "name": "Supplier1",
    "street1": "1138 PERRY HILL RD",
    "city": "MONTGOMERY",
    "state": "AL",
    "country": "US",
    "postcode": "36109-5221"
  }

  supplierAddress2 = {
    "$class": "org.aim.operation.Address",
    "name": "Supplier2",
    "street1": "10110 CEDAREDGE DR",
    "city": "HOUSTON",
    "state": "TX",
    "country": "US",
    "postcode": "77064-5461"
  }

  supplierAddress3 = {
    "$class": "org.aim.operation.Address",
    "name": "Supplier3",
    "street1": "9835 VALLEY RANCH PKWY W",
    "city": "IRVING",
    "state": "TX",
    "country": "US",
    "postcode": "75063-4679"
  }

  supplierAddress4 = {
    "$class": "org.aim.operation.Address",
    "name": "Supplier4",
    "street1": "6330 WEST LOOP S",
    "city": "BELLAIRE",
    "state": "TX",
    "country": "US",
    "postcode": "77401-2928"
  }

  atx2920Item = {
    "$class": "org.aim.operation.Item",
    "model": "ATX2920",
    "description": "TurboJet Motherboard",
    "quantity": "100",
    "unitPrice": 970,
    "currency": "USD"
  };

  cpuItem = {
    "$class": "org.aim.operation.Item",
    "model": "CPU",
    "description": "Central Processing Unit",
    "quantity": "100",
    "unitPrice": 188,
    "currency": "USD"
  };

  gpuItem = {
    "$class": "org.aim.operation.Item",
    "model": "GPU",
    "description": "Graphics Processing Unit",
    "quantity": "100",
    "unitPrice": 249,
    "currency": "USD"
  };

  northbridgeItem = {
    "$class": "org.aim.operation.Item",
    "model": "NORTHBRIDGE",
    "description": "One of the two chips in the core logic chipset architecture on a PC motherboard",
    "quantity": "100",
    "unitPrice": 16.89,
    "currency": "USD"
  };

  southbridgeItem = {
    "$class": "org.aim.operation.Item",
    "model": "SOUTHBRIDGE",
    "description": "One of the two chips in the core logic chipset architecture on a PC motherboard",
    "quantity": "100",
    "unitPrice": 26.03,
    "currency": "USD"
  };

  oemOrderObj = {
    "$class": "org.aim.operation.PlaceOrder",
    "orderId": "AEIO-09-24-18",
    "item": this.atx2920Item,
    "supplierAddress": this.emsAddress,
    "billTo": this.oemBillingAddress,
    "shipTo": this.oemShippingAddress
  };

  emsOrderObj1 = {
    "$class": "org.aim.operation.PlaceOrder",
    "orderId": "SUB1-09-24-18",
    "item": this.cpuItem,
    "supplierAddress": this.supplierAddress1,
    "billTo": this.emsAddress,
    "shipTo": this.emsAddress
  };

  emsOrderObj2 = {
    "$class": "org.aim.operation.PlaceOrder",
    "orderId": "SUB2-09-24-18",
    "item": this.gpuItem,
    "supplierAddress": this.supplierAddress2,
    "billTo": this.emsAddress,
    "shipTo": this.emsAddress
  };

  emsOrderObj3 = {
    "$class": "org.aim.operation.PlaceOrder",
    "orderId": "SUB3-09-24-18",
    "item": this.northbridgeItem,
    "supplierAddress": this.supplierAddress3,
    "billTo": this.emsAddress,
    "shipTo": this.emsAddress
  };

  emsOrderObj4 = {
    "$class": "org.aim.operation.PlaceOrder",
    "orderId": "SUB4-09-24-18",
    "item": this.southbridgeItem,
    "supplierAddress": this.supplierAddress4,
    "billTo": this.emsAddress,
    "shipTo": this.emsAddress
  };

  lotObj = {
    "$class": "org.aim.operation.CreateLot",
    "lotId": "081402",
    "orderId": "AEIO-09-24-18",
    "quantity": 100
  };

  inspectionObj = {
    "$class": "org.aim.operation.Inspect",
    "inspectionId": "Est cupidatat non.",
    "lotId": "081402",
    "orderId": "AEIO-09-24-18",
    "inspectionData": "In quis ex voluptate."
  };

  shipmentObj = {
    "$class": "org.aim.operation.Ship",
    "shipmentId": "0767292973",
    "orderId": "AEIO-09-24-18",
    "lotId": "081402",
    "shipDate": "2018-09-25T22:44:07.171Z",
    "shipFrom": this.emsAddress,
    "shipTo": this.oemAddress,
    "item": this.atx2920Item
  };

  routeObj = {
    "$class": "org.aim.operation.RouteLot",
    "lotId": "someLotId",
    "disposition": "ACCEPTED",
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

