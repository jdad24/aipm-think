import React from "react"
import "./CurrentBlock.css"

class CurrentBlock extends React.Component {

    render() {
        return (

            <div className="currentBlockContainer">
                <div className="procurementTitles bcTitles">Block Sequence</div>
                <div className="BorderDivider" />

                <div className="BlockLineContainer">
                    <div className="sapBlock"></div>
                    <div className="sapBlockLine"></div>
                    <div className="sapBlock"></div>
                    <div className="sapBlockLine"></div>
                    <div className="sapBlock"></div>
                </div>

                <div className="BlockLineContainer2">
                    <div className="sapBlock2"></div>
                    <div className="sapBlockLineVertical1" />
                    <div className="NetworkTitle">Blockchain Network</div>
                    <div className="sapBlock2"></div>
                    <div className="sapBlockLineVertical2" />
                </div>

                <div className="BlockLineContainer">
                    <div className="sapBlock"></div>
                    <div className="sapBlockLine2"></div>
                    <div className="sapBlock"></div>
                    <div className="sapBlockLine2"></div>
                    <div className="sapBlock"></div>
                    <div className="sapBlockLine2"></div>
                    <div className="sapBlock"></div>
                </div>
                <div></div>
                <div></div>
            </div>
        )
    }
}

export default CurrentBlock;