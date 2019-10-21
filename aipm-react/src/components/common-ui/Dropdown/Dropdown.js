import React from 'react'
import './Dropdown.css'
import lightningBolt from '../../../assets/lightningBolt.svg'
import lightningBoltBlue from '../../../assets/lightningBoltBlue.svg';

class Dropdown extends React.Component {
    constructor(props) {
        super(props)


        this.questions = this.props.questions


        this.state = {
            displayDrop: false,
            lightningBlue: false,
            width: "30px",
            opacity: "0",
            font: "1.6px"
        }


    }

    

  render() {
      return (
        <div className="DropdownContainer"> 
        <div className="icon">
            {this.state.lightningBlue ? <img src={lightningBoltBlue} onClick={() => this.setState({lightningBlue: !this.state.lightningBlue, width: "30px", opacity: "0", font: "1.6px"})}/> 
            : <img src={lightningBolt} onClick={() => this.setState({lightningBlue: !this.state.lightningBlue, width: "300px", opacity: "1", font: "16px"})}/>} 
            {/* {this.props.children }  */}
        </div>
        <div className="dropdown-elements" style={{width: this.state.width, opacity: this.state.opacity, fontSize: this.state.font}} onClick={() => this.setState({lightningBlue: !this.state.lightningBlue, width: "30px", opacity: "0", font: "1.6px"})}>{this.questions()}</div>
             {/* {this.state.lightningBlue ? (this.setState({width: "300px"}), this.display="initial"): (this.state.width = "30px", this.display="none") } */}
        </div>    
      )
  }
}

export default Dropdown