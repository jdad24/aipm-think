import React, { PureComponent } from 'react';
// import Aux from '../../../../common-ui/Aux/Aux';
import BasicCard from '../../../../common-ui/BasicCard/basicCard';
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
                backgroundSize: "cover",
                backgroundPosition: "center"
            }

            viImg = <div style={imgs} ></div>
        }

        return viImg;
    }

    render() {

        return (
            <BasicCard classname="img-BasicCard">
            <div className="imgContainer background" >
                {this.renderImage()}
            </div>
            </BasicCard>
        );
    }
}


export default ImgContainer;