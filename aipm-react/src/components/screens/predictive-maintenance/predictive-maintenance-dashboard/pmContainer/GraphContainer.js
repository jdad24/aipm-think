import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class GraphContainer extends PureComponent {
  state = {};

  render() {

    if (this.props.data === undefined)
      return <div></div>

    let data;
    let xDataKey;
    let dataKey;
    let minRange = 0;
    let maxRange = 100;

    switch (this.props.type) {
      case "tempUpper":
        xDataKey = "temp";
        dataKey = "Upper Temperature";
        minRange = this.props.ranges.tempUpper[0];
        maxRange = this.props.ranges.tempUpper[1];
        data = this.props.data.slice(0,10).map(element => {
          return ({ "temp": element.tempUpper, "Upper Temperature": element.tempUpper });
        });
        break;
      case "tempMiddle":
        xDataKey = "temp";
        dataKey = "Middle Temperature";
        minRange = this.props.ranges.tempMiddle[0];
        maxRange = this.props.ranges.tempMiddle[1];
        data = this.props.data.slice(0,10).map(element => {
          return ({ "temp": element.tempMiddle, "Middle Temperature": element.tempMiddle });
        });
        break;
      case "tempLower":
        xDataKey = "temp";
        dataKey = "Lower Temperature";
        minRange = this.props.ranges.tempLower[0];
        maxRange = this.props.ranges.tempLower[1];
        data = this.props.data.slice(0,10).map(element => {
          return ({ "temp": element.tempLower, "Lower Temperature": element.tempLower });
        });
        break;
      case "xPos":
        xDataKey = "xPos";
        dataKey = "X-Position";
        minRange = this.props.ranges.posUpper[0];
        maxRange = this.props.ranges.posUpper[1];
        data = this.props.data.slice(0,10).map(element => {
          return ({ "xPos": element.posUpper.toFixed(2), "X-Position": element.posUpper.toFixed(2) });
        });
        break;
      case "yPos":
        xDataKey = "yPos";
        dataKey = "Y-Position";
        minRange = this.props.ranges.posMiddle[0];
        maxRange = this.props.ranges.posMiddle[1];
        data = this.props.data.slice(0,10).map(element => {
          return ({ "yPos": element.posMiddle.toFixed(2), "Y-Position": element.posMiddle.toFixed(2) });
        });
        break;
      case "zPos":
        xDataKey = "zPos";
        dataKey = "Z-Position";
        minRange = this.props.ranges.posLower[0];
        maxRange = this.props.ranges.posLower[1];
        data = this.props.data.slice(0,10).map(element => {
          return ({ "zPos": element.posLower.toFixed(2), "Z-Position": element.posLower.toFixed(2) });
        });
        break;
    }

    return (
      <LineChart
        width={400}
        height={200}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis/> */}
        <YAxis dataKey={xDataKey} domain={[minRange, maxRange]}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}

export default GraphContainer;