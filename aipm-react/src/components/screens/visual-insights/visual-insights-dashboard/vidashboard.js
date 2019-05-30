import React, { Component } from 'react';
import Aux from '../../../common-ui/Aux/Aux';

class videtails extends Component {
    render(props) {
        let viImg = "url(data:image/jpeg;base64,"+this.props.imgMsg+")";
        return (
            <Aux>
                <div>{this.props.robot}</div>
                <div>image:
                    <img src={viImg}/>
                </div>
                <div>Score:
                    <div>{this.props.scoreMsg}</div>
                </div>
            </Aux>
        );
    }
}

export default videtails;