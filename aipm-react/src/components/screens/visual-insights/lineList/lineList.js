import React from 'react';
import BasicCard from '../../../common-ui/BasicCard/basicCard';
import nextButton from '../../../../assets/nextButton.png';
import r1 from "../../../../assets/r1.png";
import r2 from "../../../../assets/r2.png";
import r3 from "../../../../assets/r3.png";
import './lineList.css';


const lineList = (props) => {
    
    const assignments = [
        {line: 3, name: "yaskawa", imgSrc: r1, imgNum: 138},
        {line: 7, name: "kuka", imgSrc: r2, imgNum: 76},
        {line: 2, name: "replay", imgSrc: r3, imgNum: 1982},
        {line: 4, name: "raisinReplay", imgSrc: r3, imgNum: 1982}
    ];
const imgStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "100%"
}
    let line_list = assignments.map(a => {
        return(
            <BasicCard classname="lineList-BasicCard" key={a.name}>
                <div className="line_contents">
                <div>Re-Inspection</div>
                <div className="line">Line{" "+a.line}</div>
                <div>{a.name}</div>
                <div className="lineListImg">
                    <img style={imgStyle} src={a.imgSrc} />
                </div>
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