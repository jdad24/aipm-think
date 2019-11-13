import React from "react"
import "./CurrentBlock.css"

class CurrentBlock extends React.Component {

    render() {
        return (

            <div className="currentBlockContainer">
                <div className="procurementTitles bcTitles">Block Sequence</div>
                <div className="BorderDivider" />

                <div className="BlockLineContainer">
                    <div onClick={(e) => this.props.getBlock(e)} className="sapBlock">{this.props.sequence[0]["block"]}</div>
                    <div className="sapBlockLine"></div>
                    <div onClick={this.props.getBlock} className="sapBlock">{this.props.sequence[1]["block"]}</div>
                    <div className="sapBlockLine"></div>
                    <div onClick={this.props.getBlock} className="sapBlock">{this.props.sequence[2]["block"]}</div>
                </div>

                <div className="BlockLineContainer2">
                    <div onClick={this.props.getBlock} className="sapBlock2">{this.props.sequence[8]["block"]}</div>
                    <div className="sapBlockLineVertical1" />
                    <div className="NetworkTitle">Blockchain Network</div>
                    <div onClick={this.props.getBlock} className="sapBlock2">{this.props.sequence[3]["block"]}</div>
                    <div className="sapBlockLineVertical2" />
                </div>

                <div className="BlockLineContainer">
                    <div onClick={this.props.getBlock} className="sapBlock">{this.props.sequence[7]["block"]}</div>
                    <div className="sapBlockLine2"></div>
                    <div onClick={this.props.getBlock} className="sapBlock">{this.props.sequence[6]["block"]}</div>
                    <div className="sapBlockLine2"></div>
                    <div onClick={this.props.getBlock} className="sapBlock">{this.props.sequence[5]["block"]}</div>
                    <div className="sapBlockLine2"></div>
                    <div onClick={this.props.getBlock} className="sapBlock">{this.props.sequence[4]["block"]}</div>
                </div>
                <div></div>
                <div></div>
            </div>
        )
    }
}

export default CurrentBlock;