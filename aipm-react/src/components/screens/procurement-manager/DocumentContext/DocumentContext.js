import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, ResponsiveContainer, Cell,
} from 'recharts';

import React from 'react'
import "./DocumentContext.css"


const datas = [
  { name: "Good", value: 2 },
  { name: "Bad", value: 4 },
  { name: "Moderate", value: 4 },
];

const DocumentContext = (props) => {





  var content = <img className="procurementImgs" src={require('../../../../assets/' + props.currStep + '.png')} />
  // if(props.currStep=="Inspect") {
    const COLORS =  ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  content = (
    <ResponsiveContainer width="100%" height="100%" margin={{ top: 5, right: 5, bottom: 5, left: 5 }} >
      <PieChart width={100} height={100} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
        <Pie data={datas} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="90%" fill= "#8884d8" >
        {
            datas.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )

  // } 
  return <div className="DocumentContext">{content}</div>
}



export default DocumentContext;