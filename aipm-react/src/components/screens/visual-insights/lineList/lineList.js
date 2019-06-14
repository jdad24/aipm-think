import React from 'react';
import BasicCard from '../../../common-ui/BasicCard/basicCard';
import './lineList.css';

const lineList = (props) => {
    
    const assignments = [
        {line: 3, name: "kuka", imgSrc: "img", imgNum: 138},
        {line: 3, name: "yaskawa", imgSrc: "img", imgNum: 76},
        {line: 3, name: "replay", imgSrc: "img", imgNum: 1982}
    ];

    let line_list = assignments.map(a => {
        return(
            <BasicCard classname="myBasicCard">
                <div className="line_contents">
                <div>Re-Inspection</div>
                <div className="line">Line{" "+a.line}</div>
                <div>{a.name}</div>
                <div>{a.imgSrc}</div>
                <div>
                    <span>{a.imgNum+" "} Images</span>
                    <span>
                        <button value={a.name} onClick={props.clickHandler}>arrow</button>
                    </span>
                </div>
                </div>
            </BasicCard>
        );
    });

    return (
        <div className = "lineList">
            {line_list}
        </div>
    );
}

export default lineList;