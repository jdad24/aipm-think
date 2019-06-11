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
      case "bTemp":
        xDataKey = "temp";
        dataKey = "Temperatue";
        data = this.props.data.map(element => {
          let temp = element;
          return ({ "temp": temp.bTemp, "Temperatue": Number(temp.bTemp) });
        });
        break;
      case "lTemp":
        xDataKey = "temp";
        dataKey = "Temperatue";
        data = this.props.data.map(element => {
          let temp = element;
          return ({ "temp": temp.lTemp, "Temperatue": Number(temp.lTemp) });
        });
        break;
      case "rTemp":
        xDataKey = "temp";
        dataKey = "Temperatue";
        data = this.props.data.map(element => {
          let temp = element;
          return ({ "temp": temp.rTemp, "Temperatue": Number(temp.rTemp) });
        });
        break;
      case "xPos":
        xDataKey = "xPos";
        dataKey = "X-Position";
        data = this.props.data.map(element => {
          let pos = element;
          return ({ "xPos": pos.xPos, "X-Position": Number(pos.xPos) });
        });
        break;
      case "yPos":
        xDataKey = "yPos";
        dataKey = "Y-Position";
        data = this.props.data.map(element => {
          let pos = element;
          return ({ "yPos": pos.yPos, "Y-Position": Number(pos.yPos) });
        });
        break;
      case "zPos":
        xDataKey = "zPos";
        dataKey = "Z-Position";
        data = this.props.data.map(element => {
          let pos = element;
          return ({ "zPos": pos.zPos, "Z-Position": Number(pos.xPos) });
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