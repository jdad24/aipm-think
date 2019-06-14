import React, { PureComponent } from 'react';
// import Aux from '../../../../common-ui/Aux/Aux';
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
            score =
                <div className="scoreContents">
                    {/* <div>iotTopic:  {this.state.score[0]}</div> */}
                    <div>Environment:  {this.state.score[0]}</div>
                    <div>Classification:  {this.state.score[1]}</div>
                    <div>Confidence:  {this.state.score[2]}</div>
                    <div>Slot:  {this.state.score[3]}</div>
                </div>
        }
        return score;
    }

    render() {
        return (
            <BasicCard classname="score-BasicCard">
                <div className="scoreContainer" >
                    {this.renderScore()}
                </div>
            </BasicCard>
        );
    }
}


export default ScoreContainer;