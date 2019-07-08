import React from "react";
import "./emaTable.css";

const emaTable = props => {
  let th = props.header.map(element => {
    return <th className="EmaTh">{element}</th>;
  });
  let headertr = <tr>{th}</tr>;

  let WorkOrderstr = props.workOrders.map(element => {
    let wOtd = element.map(e => {
      return <td className="EmaTd">{e}</td>;
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
      <table className="Ematable">
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
