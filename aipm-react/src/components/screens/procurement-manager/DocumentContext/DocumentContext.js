import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, ResponsiveContainer, Cell, LabelList,
} from 'recharts';

import React from 'react'
import "./DocumentContext.css"


// const datas = [
//   { name: "Good", value: 2 },
//   { name: "Bad", value: 4 },
//   { name: "Moderate", value: 4 },
// ];

const DocumentContext = (props) => {
  let backgroundImg = {
    backgroundImage: `url(${require('../../../../assets/' + props.currStep + '.png')})`,
    // backgroundImage: `url(${require('../../../../assets/M2.png')})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    backgroundSize: "100%",
    backgroundPosition: "center top"
  }

  // let content = <div className="procurementImgs" style={{backgroundImage : `url(${require('../../../../assets/' + props.currStep + '.png')})`,width: "100%",
  // height: "100%"}}></div>
  let content = <div className="procurementImgs" style={backgroundImg}></div>

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  if (props.currStep == "Inspect") {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    content = (
      <ResponsiveContainer width="100%" height="100%" margin={{ top: 5, right: 5, bottom: 5, left: 5 }} >
        <PieChart width={100} height={100} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <Legend verticalAlign="bottom" height="36" />
          <Pie label={renderCustomizedLabel} labelLine={false} data={props.vidata} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="90%" fill="#8884d8" >
            {
              props.vidata.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    )

  }
  return <div className="DocumentContext">{content}</div>
}



export default DocumentContext;