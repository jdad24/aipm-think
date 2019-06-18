import React, { Component } from "react";
import { Link } from "react-router-dom";
import FlipCard from "../persona/card/Card";
import "./index.css";

class Persona extends Component {
  render() {
    return (
      <div className="parent">
        <div className="P1">
          <div>AI Powered Manufacturing with Watson IoT</div>
        </div>

        <div className="P2">
          <FlipCard />
        </div>
        <div className="P3">
          <h1>Watson IoT</h1>
        </div>
      </div>
    );
  }
}

export default Persona;
