import React from "react"
import "./line.css"
import Aux from "../Aux/Aux"

const line  = () => {
    let gline = <div className="lineGrey"/>;
    return (
    <Aux>
        {gline}
        {gline}
        {gline}
        {gline}
        {gline}
    </Aux>
    );
}

export default line;