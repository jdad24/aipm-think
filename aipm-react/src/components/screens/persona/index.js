import React, { Component } from "react";
import { Link } from "react-router-dom";

class Persona extends Component {
  render() {
    return (
      <div>
        <div>Person screen</div>
        <li>
          <Link to="/pm">
            <button>GO to PM</button>
          </Link>
        </li>
        <li>
          <Link to="/vi">
            <button>GO to VI</button>
          </Link>
        </li>
      </div>
    );
  }
}

export default Persona;
