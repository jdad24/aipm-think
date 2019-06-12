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

    switch (this.props.type) {
      case "tempUpper":
        xDataKey = "temp";
        dataKey = "Temperatue";
        data = this.props.data.map(element => {
          return ({ "temp": element.tempUpper, "Temperatue": element.tempUpper });
        });
        break;
      case "tempMiddle":
        xDataKey = "temp";
        dataKey = "Temperatue";
        data = this.props.data.map(element => {
          return ({ "temp": element.tempMiddle, "Temperatue": element.tempMiddle });
        });
        break;
      case "tempLower":
        xDataKey = "temp";
        dataKey = "Temperatue";
        data = this.props.data.map(element => {
          return ({ "temp": element.tempLower, "Temperatue": element.tempLower });
        });
        break;
      case "xPos":
        xDataKey = "xPos";
        dataKey = "X-Position";
        data = this.props.data.map(element => {
          return ({ "xPos": element.posUpper, "X-Position": element.posUpper });
        });
        break;
      case "yPos":
        xDataKey = "yPos";
        dataKey = "Y-Position";
        data = this.props.data.map(element => {
          return ({ "yPos": element.posMiddle, "Y-Position": element.posMiddle });
        });
        break;
      case "zPos":
        xDataKey = "zPos";
        dataKey = "Z-Position";
        data = this.props.data.map(element => {
          return ({ "zPos": element.posLower, "Z-Position": element.posLower });
        });
        break;
    }

    return (
      <LineChart
        width={300}
        height={200}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xDataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}

export default GraphContainer;