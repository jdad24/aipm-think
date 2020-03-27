import React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="progress-bar-background">
                <div className="torque-progress"/>
            </div>
        )
    }
}

export default ProgressBar;