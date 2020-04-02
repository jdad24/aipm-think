import React from 'react';
import './TorqueContent.css';
import ProgressBar from '../ProgressBar/ProgressBar';

class TorqueContent extends React.Component {
    constructor(props){
        super(props)
        
        this.progress = null
    }

    
    componentDidUpdate() {
        var torquePlus = null;

        switch (this.props.title) {
            case 'S':
                    torquePlus = Number(this.props.torque) + 2000
                    console.log("Torque: " + torquePlus)
                
                    this.progress= torquePlus/4000 * 100
                    console.log("Progress: " + this.progress)
              
                break;
            case 'L':
                    torquePlus = Number(this.props.torque) + 7000
                

                    this.progress= torquePlus/14000 * 100
                    // console.log("Progress: " + this.progress)
              
                break;
            case 'U':
                    torquePlus = Number(this.props.torque) * 4000

                    this.progress= torquePlus/8000 * 100
                    // console.log("Progress: " + this.progress)
              
                break;
            case 'R':
                    torquePlus = Number(this.props.torque) + 2000

                    this.progress= torquePlus/4000 * 100
                    // console.log("Progress: " + this.progress)
              
                break;
            case 'B':
                    torquePlus = Number(this.props.torque) + 1000

                    this.progress= torquePlus/2000 * 100
                    // console.log("Progress: " + this.progress)
              
                break;
            case 'T':
                    torquePlus = Number(this.props.torque) + 1000

                    this.progress= torquePlus/2000 * 100
                    // console.log("Progress: " + this.progress)
              
                break;
            default:
                this.progress = 50

        }
    }

    render() {
        return (
            <div className="torque-container">
                <div className="torque-title">{this.props.title}</div>
                <div className="torque-score">{this.props.torque}</div>
                <div className="image-progressbar-container">
                    <img className="torque-image" src={this.props.image} />
                    <ProgressBar progress={this.progress} />
                </div>
            </div>
        )
    }
}

export default TorqueContent;