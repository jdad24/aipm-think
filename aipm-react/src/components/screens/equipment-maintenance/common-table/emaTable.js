import React from "react";
import "./emaTable.css";

const emaTable = props => {
  let th = props.header.map(element => {
    return <th>{element}</th>;
  });
  let headertr = <tr>{th}</tr>;

  let WorkOrderstr = props.workOrders.map(element => {
    let wOtd = element.map(e => {
      return <td>{e}</td>;
    });
    return <tr>{wOtd}</tr>;
  });

  //   let WorkOrderstr = _.map(props.workOrders, function(element) {
  //     let wOtd = _.map(element, function(e) {
  //       return <td>e</td>;
  //     });

  //     return <tr>{wOtd}</tr>;
  //   });

  let tableHeader = (
    <div>
      <table border="1px solid black">
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
