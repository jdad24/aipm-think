import React from 'react';
import BasicCard from '../../../common-ui/BasicCard/basicCard';
import nextButton from '../../../../assets/nextButton.png';
import './lineList.css';

const lineList = (props) => {
    
    const assignments = [
        {line: 3, name: "kuka", imgSrc: "img", imgNum: 138},
        {line: 7, name: "yaskawa", imgSrc: "img", imgNum: 76},
        {line: 2, name: "replay", imgSrc: "img", imgNum: 1982}
    ];

    let line_list = assignments.map(a => {
        return(
            <BasicCard classname="lineList-BasicCard" key={a.name}>
                <div className="line_contents">
                <div>Re-Inspection</div>
                <div className="line">Line{" "+a.line}</div>
                <div>{a.name}</div>
                <div>{a.imgSrc}</div>
                <div className="spanStyle">
                    <span className="spanWidth">{a.imgNum+" "} Images</span>
                    <span className="spanWidth spanRight">
                        <div  onClick={(e)=> props.clickHandler(e, a.name)}>
                        <img src={nextButton} />
                        </div>
                        {/* <button value={a.name} onClick={props.clickHandler}> */}
                        {/* <img value={a.name} onClick={props.clickHandler} src={nextButton} /> */}
                        {/* </button> */}
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