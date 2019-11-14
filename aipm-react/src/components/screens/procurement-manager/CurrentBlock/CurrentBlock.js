import React from "react"
import "./CurrentBlock.css"

class CurrentBlock extends React.Component {

    render() {
        return (

            <div className="currentBlockContainer">
                <div className="procurementTitles bcTitles">Sequence</div>
                <div className="BorderDivider" />
                
                <div className="BlockLineContainer">
                    <div onClick={(e) => this.props.getBlock(e)} id="one" className="sapBlock">{this.props.sequence[0]["block"]}</div>
                    <div className="sapLine oneTwo"></div>
                    <div className="sapLineVertical oneFour"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="two" className="sapBlock">{this.props.sequence[1]["block"]}</div>
                    <div className="sapLine twoThree"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="three" className="sapBlock">{this.props.sequence[2]["block"]}</div>
                    <div className="sapLineVertical threeFive"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="four" className="sapBlock">{this.props.sequence[8]["block"]}</div>
                    <div className="sapLineVertical fourSix"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="five" className="sapBlock">{this.props.sequence[3]["block"]}</div>
                    <div className="sapLineVertical fiveNine"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="six" className="sapBlock">{this.props.sequence[7]["block"]}</div>
                    <div className="sapLine sixSeven"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="seven" className="sapBlock">{this.props.sequence[6]["block"]}</div>        
                    <div className="sapLine sevenEight"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="eight" className="sapBlock">{this.props.sequence[5]["block"]}</div>
                    <div className="sapLine eightNine"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="nine" className="sapBlock">{this.props.sequence[4]["block"]}</div>
                   
                    <div className="NetworkTitle">Blockchain Network</div>
                     
                </div> 
          
            </div>
        )
    }
}

export default CurrentBlock;