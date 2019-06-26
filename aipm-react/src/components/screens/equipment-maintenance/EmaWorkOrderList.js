import React, { Component } from "react";
import axios from "axios";
// import './PMDashboard.css';

class EmaWorkOrderList extends Component {
  //state is having properties:
  //1.) yaskawaData : This will store Yaskawa Torque, Temperatures and Position Values
  //2.) yaskawaHealth : This will store Yaskawa health Values
  //3.) kukaData : This will store Yaskawa Torque, Temperatures and Position Values
  //4.) kukaHealth : This is store Kuka health values
  //5.) replayData :
  //6.) replayHealth :

  state = {
    workOrders: []
  };

  constructor(props) {
    super(props);
  }

  getWorkOrders() {
    // debugger;
    axios
      .get("http://aipm-gsc-nodered.mybluemix.net/getWorkOrdersMaximo")
      .then(response => {
        // console.log("response:" + JSON.stringify(response));
        // console.log(response.data['rdfs:member'].length);
        // var objStatus = response.data['rdfs:member'][0]['spi:status'];
        // console.log(objStatus);

        let workOrders = response.data["rdfs:member"].map(element => {
          // console.log(element['spi:workorderid']);
          return element["spi:workorderid"] + ", ";
        });
        // debugger;
        this.setState({ workOrders: workOrders });
      });
  }

  componentDidMount() {
    this.getWorkOrders();
  }

  componentWillUnmount() {
    console.log("attempt to close");
  }

  render() {
    return (
      <div>
          {this.state.workOrders}
      </div>
    );
  }
}

export default EmaWorkOrderList;
