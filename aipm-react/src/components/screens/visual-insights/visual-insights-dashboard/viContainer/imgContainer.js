import React, { PureComponent } from 'react';
// import Aux from '../../../../common-ui/Aux/Aux';
import './viContainer.css';

class ImgContainer extends PureComponent {

    state = {
        slot: null,
        img: null

    }

    // constructor(props) {
    //     super(props);
    // }

    static getDerivedStateFromProps = (props, state) => {
        return {
            slot: props.slot,
            img: props.img
        }

    }

    renderImage = () => {
        let viImg = <p>No image </p>
        let imgs = null;

        if (this.state.img) {
            let viImgStyle = "url(data:image/jpeg;base64," + this.state.img + ")";
            imgs = {
                backgroundImage: viImgStyle,
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundPosition: "center"
            }

            viImg = <div style={imgs} >image: </div>
        }

        return viImg;
    }

    render() {

        return (
            <div className="imgContainer" >
                {this.renderImage()}
            </div>
        );
    }
}


export default ImgContainer;