import React, { PureComponent } from 'react';
import microPhoneIcon from '../../../../assets/microphone.svg';
import settingsGrey from '../../../../assets/settings_grey.svg';
import lightningBolt from '../../../../assets/lightningBolt.svg';
import bulb from '../../../../assets/bulb.svg';
import note from '../../../../assets/note.svg';
import watson from '../../../../assets/watson.svg';

import './assistant.css';

class Assistant extends PureComponent {

    state={
        sampleQ: null
    }

    static getDerivedStateFromProps = (props, state) => {

        return {
            sampleQ: props.sampleQ
        }

    }

    getQuestions = () => {
        let sampleQs = "Loading sample questions.."
        if(this.state.sampleQ){
            sampleQs = this.state.sampleQ.map(s => {
                return <div key={s}>{s}</div>
            });
        }
        return sampleQs;
    }

    render() {

        let sampleQs = this.getQuestions();
        return (
            <div
                className="assistantContainer"
                style={{
                    // transform: this.props.show ? 'translateX(-1px)' : 'translateX(0)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <div className="assistantSidebar">
                    {/* <div><img src={watson} /></div> */}
                    <div><img src={note} /></div>
                    <div><img src={note} /></div>
                    <div><img src={note} /></div>
                    {/* <div><img src={bulb} /></div> */}
                    <div><img src={lightningBolt} /></div>
                    <div><img src={settingsGrey} /></div>
                </div>
                <div className="AssistantTop">Watson Manager Assistance</div>
                <div className="AssistantMid">{sampleQs}</div>
                <div className="AssistantBottom">
                    <input className="AssistantBottom_input" placeholder="Type something.." type="input" />
                    <div><img src={microPhoneIcon} /></div>
                </div>
            </div>
        );
    }
}

export default Assistant;
