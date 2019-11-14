import React from "react"
import "./CurrentBlock.css"

class CurrentBlock extends React.Component {

    
        
    

    render() {
        return (

            <div className="currentBlockContainer">
                <div className="procurementTitles bcTitles">Sequence</div>
                <div className="BorderDivider" />
                
                <div className="BlockLineContainer">
                    <div onClick={(e) => this.props.getBlock(e)} id="one" className="sapBlock">{this.props.blockNumbers[0]}</div>
                    <div className="sapLine oneTwo"></div>
                    <div className="sapLineVertical oneFour"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="two" className="sapBlock">{this.props.blockNumbers[1]}</div>
                    <div className="sapLine twoThree"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="three" className="sapBlock">{this.props.blockNumbers[2]}</div>
                    <div className="sapLineVertical threeFive"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="four" className="sapBlock">{this.props.blockNumbers[8]}</div>
                    <div className="sapLineVertical fourSix"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="five" className="sapBlock">{this.props.blockNumbers[3]}</div>
                    <div className="sapLineVertical fiveNine"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="six" className="sapBlock">{this.props.blockNumbers[7]}</div>
                    <div className="sapLine sixSeven"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="seven" className="sapBlock">{this.props.blockNumbers[6]}</div>        
                    <div className="sapLine sevenEight"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="eight" className="sapBlock">{this.props.blockNumbers[5]}</div>
                    <div className="sapLine eightNine"></div>
                    <div onClick={(e) => this.props.getBlock(e)}  id="nine" className="sapBlock">{this.props.blockNumbers[4]}</div>
                   
                    <div className="NetworkTitle">Blockchain Network</div>
                     
                </div> 
          
            </div>
        )
    }
}

export default CurrentBlock;