// import React, { Component } from "react";
// import EmaTable from "./common-table/emaTable";
// import axios from "axios";
// import Layout from '../../common-ui/Layout/layout';
// import PersonaEnv from '../../common-ui/personaEnv/personaEnv';

// class EmaWorkOrderList extends Component {
//   //state is having properties:
//   //1.) yaskawaData : This will store Yaskawa Torque, Temperatures and Position Values
//   //2.) yaskawaHealth : This will store Yaskawa health Values
//   //3.) kukaData : This will store Yaskawa Torque, Temperatures and Position Values
//   //4.) kukaHealth : This is store Kuka health values
//   //5.) replayData :
//   //6.) replayHealth :

//   state = {
//     workOrders: [],
//     header: ["ID", "Time", "Description", "Status", "Location", "Action"],
//     emaResults: false,
//     workOrderList: false,
//     emaResponse: [],
//     style: {cursor: "default"}
//   };

//   // constructor(props) {
//   //   super(props);
//   // }

//   repeatStringNumTimes = (str, num) => {
//     return str.repeat(num);
//   }

//   getEMAresults = (event, desc) => {
//     this.setState({
//       style: {cursor: "wait"}
//     });
//     axios.get("https://aipm-gsc-nodered.mybluemix.net/queryEMA?searchString=" + desc)
//       .then(response => {
//         console.log(desc);
//         console.log(response);
//         const baseDiscoveryScore = 90;

//         //response.data.results.length
//         let emaResponse = [];

//         for (let k = 0; k < response.data.results.length; k++) {
//           // var htmlContent = myresponse.results[k].html;
//           // var stars = "";

//           let resscore = baseDiscoveryScore + response.data.results[k]["result_metadata"]["score"];
//           resscore = resscore.toFixed(2);
//           let restitle = response.data.results[k]["extracted_metadata"]["title"];

//           let stars = 5;

//           if (k < 2) {
//             // console.log("k5 " + k);
//             stars = this.repeatStringNumTimes("★", 5);
//           } else if (k >= 2 && k < 5) {
//             // console.log("k4 " + k);
//             stars = this.repeatStringNumTimes("★", 4);
//           } else {
//             // console.log("k3 " + k);
//             stars = this.repeatStringNumTimes("★", 3);;
//           }
//           // let viewDoc = <a href = "html/ema/" + response.data.results[k].extracted_metadata.filename + target="_blank">View Doc</a>

//           let ema_res = [restitle, resscore, "url", stars, response.data.results[k].highlight.text];
//           //let ema_desc = [response.data.results[k].highlight.text];
//           emaResponse.push(ema_res);
//           // htmlelm += '<tr id="row' + k + '" class="table-row">'
//           //     + '<td id="title' + k + '" class="restitle">' + restitle + '</td>'
//           //     + '<td id="resscore' + k + '" >' + resscore + '</td>'
//           //     + '<td id="url' + k + '"><a href = "html/ema/' + myresponse.results[k].extracted_metadata.filename + '" target="_blank">View Doc</a></td>'
//           //     + '<td id="rating' + k + '" >' + stars + '</td>'
//           //     + '</tr>'
//           //     + '<tr id="toggler' + k + '" class="hidden">'
//           //     + '<td colspan="4" class = "tabledesc"><p><b>Description : </b>' + myresponse.results[k].highlight.text + '</p></td>'
//           //     + '</tr>';
//         }
//         this.setState({
//           emaResults: true,
//           workOrderList: false,
//           emaResponse: emaResponse,
//           header: ["Title", "Score", "URL", "Rating"],
//           style: {cursor: "default"}
//         });
//       });
//   }

//   getWorkOrders=()=> {
//     // debugger;
//     //let header = ["ID","Time", "Description", "Status", "Location", "Action"];
//     this.setState({
//       style: {cursor: "default"}
//     });
//     axios
//       .get("https://aipm-gsc-nodered.mybluemix.net/getWorkOrdersMaximo")
//       .then(response => {
//         let workOrders = response.data["rdfs:member"].map(element => {
//           // {
//           //   spi:reportdate: "2019-06-24T14:11:34-04:00",
//           //   spi:location: "GSC",
//           //   spi:assetnum: "ROBOT003",   ROBOT002=kuka, ROBOT003=yaskawa
//           //   _rowstamp: "63998529",
//           //   spi:description: "Yaskawa Robot High Torque: torqueLower = 14700",
//           //   spi:workorderid: 174308,
//           //   spi:status_description: "Waiting on Approval",
//           //   spi:wonum: "18524",
//           //   rdf:about: "http://mx7vm/maxrest/oslc/os/mxwo/_QkVERk9SRC8xODUyNA--",
//           //   spi:status: "WAPPR"  // also APPR, CLOSE
//           //   },

//           //commented now
//           //let appr_button = <button className="appr_button">Approve</button>;
//           let workOrder = [
//             // element["_rowstamp"],
//             element["spi:workorderid"],
//             element["spi:reportdate"],
//             element["spi:description"],
//             element["spi:status"],
//             element["spi:location"],
//             "button"
//           ];

//           return workOrder;
//         });
//         // debugger;
//         this.setState({
//           workOrders: workOrders,
//           workOrderList: true,
//           emaResults: false,
//           header: ["ID", "Time", "Description", "Status", "Location", "Action"]
//         });
//       });
//   }

//   backClickHandler = () => {
//     this.getWorkOrders();
//     console.log("backClickHandler");
// }

//   componentDidMount() {
//     this.getWorkOrders();
//   }

//   componentWillUnmount() {
//     console.log("attempt to close");
//   }

//   setWorkOrderStatus = (event,woStatus,wid) => {
//     let newstatus;
//     if (woStatus === "WAPPR") {
//         newstatus = "APPR";
//     } else {
//         newstatus = "CLOSE"
//     }
//     axios.get("http://aipm-gsc-nodered.mybluemix.net/setStatusWorkOrder?wid="+wid+"&newstatus="+newstatus)
//     .then( response=> {
//       console.log("calling getWorkOrders");
//       this.getWorkOrders();
//     }
//     );

//   }

//   getMainContent = () => {
//     let render_elm;
//     if (this.state.emaResults === false && this.state.workOrderList === true) {
//       console.log("work results");
//       render_elm = <EmaTable
//         tableType="workOrders"
//         getEMAresults={this.getEMAresults}
//         header={this.state.header}
//         workOrders={this.state.workOrders}
//         setWorkOrderStatus={this.setWorkOrderStatus}
//         cursor = {this.state.style}
//       />
//     } else if (this.state.emaResults === true && this.state.workOrderList === false) {
//       console.log("ema results");
//       render_elm = <EmaTable
//         tableType="emaResults"
//         header={this.state.header}
//         workOrders={this.state.emaResponse}
//         cursor = {this.state.style}
//       />
//     } else {
//       render_elm = <EmaTable
//         tableType="workOrders"
//         getEMAresults={this.getEMAresults}
//         header={this.state.header}
//         workOrders={this.state.workOrders}
//         cursor = {this.state.style}
//       />

//     }
//     return render_elm;
//   }

//   getPersonaEnv = () => {
//     // let PersonaorPath = "";
//     let headerInfo = {
//         PersonaorPath: null,
//         nav: null,
//         backClickHandler: null
//     };

//     if (this.state.emaResults) {
//         headerInfo.PersonaorPath = <div style={{textAlign:"left"}}>
//                         <p>Dashboard > {this.state.robotEnvironment}</p>
//                         <h1>EMA Results</h1>
//                         </div>

//         headerInfo.backClickHandler = this.backClickHandler;
                        
//     } else {
//         headerInfo.PersonaorPath = <PersonaEnv name = "Joe"  />
//         headerInfo.nav = "/";
//     }

//     return headerInfo;
// }

//   render() {
//     // let emaElement = this.verifyScreen();
//     // return (
//     //   //<EmaTable getEMAresults={(e) => this.getEMAresults(e)} header={this.state.header} workOrders={this.state.workOrders} />
//     //   <div>{emaElement}</div>
//     // );

//     let emaElement = this.getMainContent();
//         let PersonaEnv = this.getPersonaEnv();
//         return (

//             <Layout
//                 role="Manufacturing Line Manager"
//                 screenTop = {PersonaEnv.PersonaorPath}
//                 content={emaElement}
//                 backClickHandler = {PersonaEnv.backClickHandler}
//                 path = {PersonaEnv.nav}
//             />

//         );
//   }
// }

// export default EmaWorkOrderList;
