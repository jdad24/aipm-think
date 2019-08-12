import React, { PureComponent } from "react";
import "./PMContainer.css";

import { throws } from "assert";

class PMAcousticInsightsContainer extends PureComponent {
  state = {
    aiState: null,
    aiCategory: null,
    aiConfidence: null
  };

  // constructor(props) {
  //     super(props);
  // }

  static getDerivedStateFromProps = (props, state) => {
    return {
      aiState: props.aiState,
      aiCategory: props.aiCategory,
      aiConfidence: props.aiConfidence
    };
  };

  render() {
    var myState = "State: " + this.state.aiState;
    var myCategory = "Category: " + this.state.aiCategory;
    var myConfidence = "Confidence: " + this.state.aiConfidence;

    return (
      <div className="pmContainerGridLeftMiddle2">
        <div className="pmAcousticInsightsTitle">Acoustic Insights</div>
        <br></br>
        <div className="pmAcousticInsightsText">{myState}</div>
        <div className="pmAcousticInsightsText">{myCategory}</div>
        <div className="pmAcousticInsightsText">{myConfidence}</div>
      </div>
    );
  }
}

export default PMAcousticInsightsContainer;
