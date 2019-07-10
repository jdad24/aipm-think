import React from "react";
import "./emaTable.css";
import Aux from '../../../common-ui/Aux/Aux';

const emaTable = props => {
  let th = props.header.map(element => {
    return <th className="EmaTh">{element}</th>;
  });
  let headertr = <tr>{th}</tr>;



  let WorkOrderstr;

  switch (props.tableType) {

    case "workOrders":
      WorkOrderstr = props.workOrders.map(element => {
        let wOtd = element.map(x => {
          if(x==="Approve"){
           let appr = <div className="ApproveButton" onClick={(e)=>props.setWorkOrderStatus(e,element[3], element[0])}><button>{x}</button></div>
           return <td className="EmaTd">{appr}</td>;
          }else{
            return <td onClick={(e) => props.getEMAresults(e, element[2])} className="EmaTd">{x}</td>;
          }
          });
        return <tr>{wOtd}</tr>;
      });
      break;

    case "emaResults":
      WorkOrderstr = props.workOrders.map(element => {
        
        let wOtd;
        let wOtd_desc;

         wOtd = element.map((e,i) => {
          if(i===4){
            return null;
          } else {
            return <td className="EmaTd">{e}</td>
          }
                
        });

        wOtd_desc = element.map((e,i) => {
          if(i===4){
            return <tr><td colSpan="4" className="EmaTd"><p>Description: {e}</p></td></tr>
          }   
  });

        return (
          <Aux>
            <tr>{wOtd}</tr>
            {wOtd_desc}
          </Aux>
        );
      });
      break;
  }
  //   let WorkOrderstr = _.map(props.workOrders, function(element) {
  //     let wOtd = _.map(element, function(e) {
  //       return <td>e</td>;
  //     });

  //     return <tr>{wOtd}</tr>;
  //   });

  let tableHeader = (
    <div>
      <table id="emaTableid" className="Ematable">
        <tbody>
          {headertr}
          {WorkOrderstr}
        </tbody>
      </table>
    </div>
  );

  return <div>{tableHeader}</div>;
};

export default emaTable;
