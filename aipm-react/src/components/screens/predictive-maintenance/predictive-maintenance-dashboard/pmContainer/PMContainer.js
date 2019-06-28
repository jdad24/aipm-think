import React, { PureComponent } from "react";
import "./PMContainer.css";
import Gauge from "react-svg-gauge";
import GraphContainer from "./GraphContainer";
import PMTorqueTempContainer from "./PMTorqueTempContainer";

class PMContainer extends PureComponent {
  state = {
    pmData: null,
    pmHealthData: null
  };

  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps = (props, state) => {
    return {
      pmData: props.pmData,
      pmHealthData: props.pmHealthData
    };
  };

  render() {
    // console.log(this.props.ranges, this.props.pmData);

    if (
      !this.props.ranges ||
      !this.props.pmData ||
      this.props.ranges.length === 0 ||
      this.props.pmData.length === 0
    )
      return (
        <div className="pmContainerRight">
          <div>NO DATA</div>
        </div>
      );

    let pmData = <p>No Data </p>;
    if (this.props.pmData && this.props.pmHealthData) {
      pmData = (
          <div className="pmContainerGrid">
          <div className="pmContainerGridHeader1 pmContainerHeaderTitle">
            MAHI Health
          </div>
          <div className="pmContainerGridHeaderTorque pmContainerHeaderTitle">
            Torque
          </div>
          <div className="pmContainerGridHeaderPosition pmContainerHeaderTitle">
            Position
          </div>
          <div className="pmContainerGridHeaderTemperature pmContainerHeaderTitle">
            Temperature
          </div>

          <div className="pmContainerGridLeft">
            <div className="pmContainerGridLeftUpper">
              <Gauge
                value={Math.round(
                  this.props.pmHealthData[this.props.pmHealthData.length - 1]
                )}
                width={300}
                height={200}
                color={"#6BC764"}
                label=""
              />
            </div>

            <div className="pmContainerGridLeftMiddle">details middle</div>
            <div className="pmContainerGridLeftLower">details lower</div>
          </div>
            <div className="pmContainerGridRight">
              <PMTorqueTempContainer
                ranges={this.props.ranges}
                pmData={this.props.pmData}
                label="upper"
                torqueType="torqueUpper"
                tempType="tempUpper"
                posDirection="xPos"
                containerName="pmContainerGridRightUpper"
              />
              <PMTorqueTempContainer
                ranges={this.props.ranges}
                pmData={this.props.pmData}
                label="middle"
                torqueType="torqueMiddle"
                tempType="tempMiddle"
                posDirection="yPos"
                containerName="pmContainerGridRightMiddle"
              />
              <PMTorqueTempContainer
                ranges={this.props.ranges}
                pmData={this.props.pmData}
                label="lower"
                torqueType="torqueLower"
                tempType="tempLower"
                posDirection="zPos"
                containerName="pmContainerGridRightLower"
              />
            </div>
            </div>
      );
    }

    return <div>{pmData}</div>;
  }
}

export default PMContainer;
