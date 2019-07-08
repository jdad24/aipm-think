import React, { Component } from "react";
import EmaTable from "./common-table/emaTable";
import axios from "axios";

class EmaWorkOrderList extends Component {
  //state is having properties:
  //1.) yaskawaData : This will store Yaskawa Torque, Temperatures and Position Values
  //2.) yaskawaHealth : This will store Yaskawa health Values
  //3.) kukaData : This will store Yaskawa Torque, Temperatures and Position Values
  //4.) kukaHealth : This is store Kuka health values
  //5.) replayData :
  //6.) replayHealth :

  state = {
    workOrders: [],
    header: ["ID", "Time", "Description", "Status", "Location", "Action"],
    emaResults: false,
    workOrderList: false
  };

  constructor(props) {
    super(props);
  }

  getEMAresults = () => {
    axios.get("http://aipm-gsc-nodered.mybluemix.net/queryEMA?searchString=yaskawa%20robot%20high%20torque").then(
      response => {
        console.log("got EMA results");
        this.setState({
          emaResults: true,
          workOrderList: false
        });
      }
    );
  }

  getWorkOrders() {
    // debugger;
    //let header = ["ID","Time", "Description", "Status", "Location", "Action"];
    axios
      .get("http://aipm-gsc-nodered.mybluemix.net/getWorkOrdersMaximo")
      .then(response => {
        let workOrders = response.data["rdfs:member"].map(element => {
          // {
          //   spi:reportdate: "2019-06-24T14:11:34-04:00",
          //   spi:location: "GSC",
          //   spi:assetnum: "ROBOT003",   ROBOT002=kuka, ROBOT003=yaskawa
          //   _rowstamp: "63998529",
          //   spi:description: "Yaskawa Robot High Torque: torqueLower = 14700",
          //   spi:workorderid: 174308,
          //   spi:status_description: "Waiting on Approval",
          //   spi:wonum: "18524",
          //   rdf:about: "http://mx7vm/maxrest/oslc/os/mxwo/_QkVERk9SRC8xODUyNA--",
          //   spi:status: "WAPPR"  // also APPR, CLOSE
          //   },

          //commented now
          let workOrder = [
            // element["_rowstamp"],
            element["spi:workorderid"],
            element["spi:reportdate"],
            element["spi:description"],
            element["spi:status"],
            element["spi:location"],
            "button"
          ];

          return workOrder;
        });
        // debugger;
        this.setState({
          workOrders: workOrders,
          workOrderList: true,
          emaResults: false
        });
      });
  }

  componentDidMount() {
    this.getWorkOrders();
  }

  componentWillUnmount() {
    console.log("attempt to close");
  }

  verifyScreen = () => {
    let render_elm;
    if(this.state.emaResults==false && this.state.workOrderList == true ){
      console.log("work results");
      render_elm = <EmaTable getEMAresults={(e) => this.getEMAresults(e)} header={this.state.header} workOrders={this.state.workOrders} />
    }else if(this.state.emaResults==true && this.state.workOrderList == false ){
      console.log("ema results");
      render_elm = <p>ema results</p>
    }else{
      render_elm = <EmaTable getEMAresults={(e) => this.getEMAresults(e)} header={this.state.header} workOrders={this.state.workOrders} />

    }
    return render_elm;
  }

  render() {
    let emaElement = this.verifyScreen();
    return (
      //<EmaTable getEMAresults={(e) => this.getEMAresults(e)} header={this.state.header} workOrders={this.state.workOrders} />
      <div>{emaElement}</div>
    );
  }
}

export default EmaWorkOrderList;
