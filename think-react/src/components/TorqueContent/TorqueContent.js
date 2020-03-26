import React from 'react';
import './TorqueContent.css'

class TorqueContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="torque-container">
                <div className="torque-title">{this.props.title}</div>
                <div className="torque-score">{this.props.score}</div>
                <div>Image</div>
            </div>
        )
    }
}

export default TorqueContent;