import React, { PureComponent } from 'react';
// import Aux from '../../../../common-ui/Aux/Aux';
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
            score = <div>Score:
            <div>iotTopic:  {this.state.score[0]}</div>
                <div>robotEnvironment:  {this.state.score[0]}</div>
                <div>mySpeakingClassification:  {this.state.score[1]}</div>
                <div>myConfidence:  {this.state.score[2]}</div>
                <div>mySlot:  {this.state.score[3]}</div>
            </div>
        }
        return score;
    }

    render() {
        return (
            <div className="scoreContainer" >
                {this.renderScore()}
            </div>
        );
    }
}


export default ScoreContainer;