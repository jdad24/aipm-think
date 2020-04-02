import React from 'react';
import './TorqueContent.css';
import ProgressBar from '../ProgressBar/ProgressBar';

class TorqueContent extends React.Component {
    constructor(props){
        super(props)
        
        this.progress = null
        this.torquePlus = null
    }

    
    // componentWillUpdate() {
    //     this.torquePlus = null;

    //     switch (this.props.title) {
    //         case 'S':
    //                 this.torquePlus = Number(this.props.torque) + 2000
    //                 // console.log("Torque: " + torquePlus)
                
    //                 this.progress= this.torquePlus/4000 * 100
    //                 console.log("Progress: " + this.progress)
              
    //             break;
    //         case 'L':
    //                 this.torquePlus = Number(this.props.torque) + 7000
                

    //                 this.progress= this.torquePlus/14000 * 100
    //                 // console.log("Progress: " + this.progress)
              
    //             break;
    //         case 'U':
    //                 this.torquePlus = Number(this.props.torque) + 4000

    //                 this.progress= this.torquePlus/8000 * 100
    //                 // console.log("Progress: " + this.progress)
              
    //             break;
    //         case 'R':
    //                 this.torquePlus = Number(this.props.torque) + 2000

    //                 this.progress= this.torquePlus/4000 * 100
    //                 // console.log("Progress: " + this.progress)
              
    //             break;
    //         case 'B':
    //                 this.torquePlus = Number(this.props.torque) + 1000

    //                 this.progress = this.torquePlus/2000 * 100
    //                 // console.log("Progress: " + this.progress)
              
    //             break;
    //         case 'T':
    //                 this.torquePlus = Number(this.props.torque) + 1000

    //                 this.progress= this.torquePlus/2000 * 100
    //                 // console.log("Progress: " + this.progress)
              
    //             break;
    //         default:
    //             this.progress = 50

    //     }
    // }

    render() {
        this.torquePlus = null;

        switch (this.props.title) {
            case 'S':
                    this.torquePlus = Number(this.props.torque) + 2000
                    // console.log("Torque: " + torquePlus)
                
                    this.progress= this.torquePlus/4000 * 100
                    console.log("Progress: " + this.progress)
              
                break;
            case 'L':
                    this.torquePlus = Number(this.props.torque) + 7000
                

                    this.progress= this.torquePlus/14000 * 100
                    // console.log("Progress: " + this.progress)
              
                break;
            case 'U':
                    this.torquePlus = Number(this.props.torque) + 4000

                    this.progress= this.torquePlus/8000 * 100
                    // console.log("Progress: " + this.progress)
              
                break;
            case 'R':
                    this.torquePlus = Number(this.props.torque) + 2000

                    this.progress= this.torquePlus/4000 * 100
                    // console.log("Progress: " + this.progress)
              
                break;
            case 'B':
                    this.torquePlus = Number(this.props.torque) + 1000

                    this.progress = this.torquePlus/2000 * 100
                    // console.log("Progress: " + this.progress)
              
                break;
            case 'T':
                    this.torquePlus = Number(this.props.torque) + 1000

                    this.progress= this.torquePlus/2000 * 100
                    // console.log("Progress: " + this.progress)
              
                break;
            default:
                this.progress = 50

        }
        return (
            <div className="torque-container">
                <div className="torque-title">{this.props.title}</div>
                <div className="torque-score">{this.props.torque}</div>
                <div className="image-progressbar-container">
                    <img className="torque-image" src={this.props.image} />
                    <ProgressBar title={this.props.title} torque={this.props.torque} progress={this.progress} />
                </div>
            </div>
        )
    }
}

export default TorqueContent;