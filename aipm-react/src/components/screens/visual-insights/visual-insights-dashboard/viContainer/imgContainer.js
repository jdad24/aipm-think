import React, { PureComponent } from 'react';
import Aux from '../../../../common-ui/Aux/Aux';
import './viContainer.css';

class ImgContainer extends PureComponent {

    state = {
        slot: null,
        img: null

    }

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps = (props, state) => {
        return {
            slot: props.slot,
            img: props.img
        }

    }

    render() {

        let viImg = "url(data:image/jpeg;base64," + this.state.img + ")";
        let imgs = {
            backgroundImage: viImg,
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            backgroundSize: "contain",
            backgroundPosition: "center"
        }


        return (
            <div className="imgContainer" >
                <div style={imgs} >image: </div>
            </div>
        );
    }
}


export default ImgContainer;