import React from 'react'
import './RobotHealth.css'

class RobotHealth extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="health-container">
                <div className="title">Robot Health</div>
                <div className="score">8.7</div>
                Image
           
            </div>
        )
    }
}

export default RobotHealth;