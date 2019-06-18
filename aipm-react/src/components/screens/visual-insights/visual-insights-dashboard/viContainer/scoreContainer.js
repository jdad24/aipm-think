import React, { PureComponent } from 'react';
import Aux from '../../../../common-ui/Aux/Aux';
import BasicCard from '../../../../common-ui/BasicCard/basicCard';
import './viContainer.css';

class ScoreContainer extends PureComponent {

    state = {
        slot: null,
        score: null
    }

    // constructor(props) {
    //     super(props);
    // }

    static getDerivedStateFromProps = (props, state) => {

        return {
            slot: props.slot,
            score: props.score
        }

    }

    renderScore = () => {
        let score = <p>No score </p>
        if (this.state.score) {
            let confidence_style =
                {
                    width: this.state.score[2] + '%',
                    backgroundColor: '#0062FF'
                };

            score =
                <div className="scoreContents">
                    {/* <div>iotTopic:  {this.state.score[0]}</div> */}
                    {/* <div>Environment:  {this.state.score[0]}</div> */}
                    <div>Item:  {this.state.score[0]}</div>
                    <div>Batch:  {this.state.score[0]}</div>
                    <div>Date:  {this.state.score[0]}</div>
                    <div>Time:  {this.state.score[0]}</div>
                    <div>Classification {" "+this.state.score[1]}</div>
                    <div className="confidenceContainer">
                        <div>
                            Confidence:{this.state.score[2]}
                        </div>
                        {/* <div className="confidenceBarContainer"> */}
                        <div className="confidenceBar">
                            <div style={confidence_style}></div>
                        </div>
                        {/* </div> */}
                    </div>
                    {/* <div>Slot:  {this.state.score[3]}</div> */}
                    <div>Is this correct?</div>
                </div>
        }
        return score;
    }

    renderValidation = () => {
        let validate = null;
        if (this.state.score) {
            validate =
                <Aux>
                    <div className="noButton">No</div>
                    <div className="yesButton">Yes</div>
                </Aux>
        }
        return validate;
    }

    render() {
        return (
            <div className="scoreValidateContainer">
                <BasicCard classname="score-BasicCard">
                    <div className="scoreContainer" >
                        {this.renderScore()}
                    </div>
                </BasicCard>
                <BasicCard classname="validateContainer">
                    {this.renderValidation()}
                </BasicCard>
            </div>
        );
    }
}


export default ScoreContainer;