import React, { Component } from "react";

import axios from "axios";
import BasicCard from "../../common-ui/BasicCard/basicCard";
import PersonaEnv from "../../common-ui/personaEnv/personaEnv";
import Layout from "../../common-ui/Layout/layout";

import EmaWorkOrderList from "./EmaWorkOrderList";
import { notEqual } from "assert";

class EquipmentMaintenance extends Component {
  state = {
    workOrders: null
  };

  getPersonaEnv = () => {
    let PersonaorPath = "";

    PersonaorPath = <PersonaEnv name="Joe" />;

    return PersonaorPath;
  };

  render() {
    let emaComponent = <EmaWorkOrderList />;
    let PersonaEnv = this.getPersonaEnv();

    return (
      <Layout
        role="Plant Technician"
        // screenTop={PersonaEnv}
        content={emaComponent}
      />
    );
  }
}

export default EquipmentMaintenance;
