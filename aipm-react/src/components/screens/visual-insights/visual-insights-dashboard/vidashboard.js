import React, { Component } from 'react';
import Aux from '../../../common-ui/Aux/Aux';

class videtails extends Component {
    render(props) {
        // console.log();
        // console.log();
        let viImg = "url(data:image/jpeg;base64,"+this.props.imgMsg+")";
        let mystyle = {
            backgroundImage: viImg,
            backgroundRepeat: "no-repeat"
        }
        return (
            <Aux>
                <div>{this.props.robot}</div>
                {/* <div>image:{viImg} */}
                <div style={mystyle}>image:
                    {/* <img src={viImg}/> */}
                </div>
                <div>Score:
                    {/* <div>{this.props.scoreMsg}</div> */}
                </div>
            </Aux>
        );
    }
}

export default videtails;