import React from 'react';
import "./BlockchainListener.css";

const BlockchainListener = (props) => {
    let rows = "no data";
    if (props.bcdata.length > 0) {
        rows = props.bcdata.map(n => {
            return <tr>{n[0]}: {n[1]}</tr>;
        });

    }
    return (
        <table>
            {rows}
        </table>
    );
}
export default BlockchainListener;