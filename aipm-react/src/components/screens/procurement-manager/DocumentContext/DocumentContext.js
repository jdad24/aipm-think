import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie,
  } from 'recharts';

  import React from 'react'


  const datas = [
      { name: "Good", value: 2 },
       { name: "Bad", value: 4 },
       { name: "Moderate", value: 4 },
    ];

  const DocumentContext = (props) => {
  
        


    
      var content = <img className="procurementImgs" src={require('../../../../assets/' + props.currStep + '.png')} />
      if(props.currStep=="Inspect") {
        content = (<PieChart width = {500} height = {500}>
              <Pie data={datas} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            </PieChart>)
        
      } 
      return content
    }

  

  export default DocumentContext;