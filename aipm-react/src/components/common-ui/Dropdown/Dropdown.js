import React from 'react'
import './Dropdown.css'
import lightningBolt from '../../../assets/lightningBolt.svg'
import lightningBoltBlue from '../../../assets/lightningBoltBlue.svg';

class Dropdown extends React.Component {
    constructor(props) {
        super(props)


        this.questions = this.props.questions

        this.showDrop = this.showDrop.bind(this)
        this.hideDrop = this.hideDrop.bind(this)

        this.state = {
            displayDrop: false,
            lightningBlue: false,
            width: "30px",
            opacity: "0",
            font: "1.6px"
        }


    }

    showDrop() {
        // event.preventDefault()
        this.setState({
            displayDrop: true
        }, 
        // () => {document.addEventListener('click', this.hideDrop)}
        )
    }


    hideDrop() {
        this.setState({
            displayDrop: false
        }, 
        // () => {document.removeEventListener('click', this.hideDrop)}
        )
    }


    

  render() {
      return (
        <div> 
        <div className="icon" tabIndex="1" onClick={() => this.setState({
            displayDrop: !this.state.displayDrop
        })}>
            {this.state.lightningBlue ? <img src={lightningBoltBlue} onClick={() => this.setState({lightningBlue: !this.state.lightningBlue, width: "30px", opacity: "0", font: "1.6px"})}/> 
            : <img src={lightningBolt} onClick={() => this.setState({lightningBlue: !this.state.lightningBlue, width: "300px", opacity: "1", font: "16px"})}/>} 
            {/* {this.props.children }  */}
        </div>
        <div className="dropdown-elements" style={{width: this.state.width, opacity: this.state.opacity, fontSize: this.state.font}}>{this.state.lightningBlue ? this.questions(): null}</div>
             {/* {this.state.lightningBlue ? (this.setState({width: "300px"}), this.display="initial"): (this.state.width = "30px", this.display="none") } */}
    </div>    
      )
  }
}

export default Dropdown