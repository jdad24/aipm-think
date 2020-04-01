import React from 'react'
import './RobotHealth.css'

class RobotHealth extends React.Component {
    
    render() {
        return (
            <div className="health-container">
                <div className="title">Robot Health</div>
                <div className="score">98.7</div>
                <div >
                    <img className="image" src={this.props.image}/>
                </div>
            </div>
        )
    }
}

export default RobotHealth;