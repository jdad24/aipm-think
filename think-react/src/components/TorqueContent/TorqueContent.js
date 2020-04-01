import React from 'react';
import './TorqueContent.css';
import ProgressBar from '../ProgressBar/ProgressBar';

class TorqueContent extends React.Component {

    render() {
        return (
            <div className="torque-container">
                <div className="torque-title">{this.props.title}</div>
                <div className="torque-score">{this.props.torque}</div>
                <div className="image-progressbar-container">
                    <img className="torque-image" src={this.props.image} />
                    <ProgressBar/>
                </div>
            </div>
        )
    }
}

export default TorqueContent;