import {
  Legend, PieChart, Pie, ResponsiveContainer, Cell, LabelList, Sector
} from 'recharts';

import React from 'react'
import "./DocumentContext.css"
import Aux from "../../../common-ui/Aux/Aux"


// const datas = [
//   { name: "Good", value: 2 },
//   { name: "Bad", value: 4 },
//   { name: "Moderate", value: 4 },
// ];

const DocumentContext = (props) => {
  var showTitle = true

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    // let text = <text x={cx} y="200" dy={8} textAnchor="middle" fill="#181717">Inspection Results</text> 
    return (
      <g>
      {/* {showTitle ? text: null}
      {showTitle ? (showTitle=false) : null} */}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          // outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          // outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#181717">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      </g>
    );
  };
  
  let backgroundImg = {
    backgroundImage: `url(${require('../../../../assets/' + props.currStep + '.png')})`,
    // backgroundImage: `url(${require('../../../../assets/M2.png')})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    backgroundSize: "100% 100%",
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
      <Aux>
      {/* <div className="InspectionResults">Inspection Results</div> */}
      <ResponsiveContainer width="100%" height="100%" margin={{ top: 5, right: 5, bottom: 5, left: 5 }} >
        <PieChart width={100} height={100} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <Legend verticalAlign="bottom" height="36" />
          <Pie label={renderActiveShape} labelLine={true} data={props.vidata} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="75%" fill="#8884d8" >
            {
              props.vidata.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </Aux>
    )

  }
  return <div className="DocumentContext"><div className="InspectionResults">InspectionResults</div>{content}</div>
}



export default DocumentContext;