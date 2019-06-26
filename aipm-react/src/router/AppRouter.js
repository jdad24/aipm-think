import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Persona from "../components/screens/persona";
import PredictiveMaintenance from "../components/screens/predictive-maintenance";
import VisualInsights from "../components/screens/visual-insights";
import EquipmentMaintenance from "../components/screens/equipment-maintenance";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Persona} />
          <Route path="/pm" component={PredictiveMaintenance} />
          <Route path="/vi" component={VisualInsights} />
          <Route path="/em" component={EquipmentMaintenance} />
          {/* <Route path="/contact" component={Contact} />
          <Route component={Notfound} /> */}
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
