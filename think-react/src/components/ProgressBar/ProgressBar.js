import React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {

    render() {
        return (
            <div className="progress-bar-background">
                <div style={{width: this.props.progress + '%'}} className="torque-progress"/>
            </div>
        )
    }
}

export default ProgressBar;