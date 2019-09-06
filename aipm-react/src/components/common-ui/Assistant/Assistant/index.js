import React,{Component} from 'react';
import './assistant.css';

class Assistant extends Component{
    render(){
        return(
            <div 
            className="assistantContainer"
            style={{
                // transform: this.props.show ? 'translateX(-1px)' : 'translateX(0)',
                opacity: this.props.show ? '1' : '0'
            }}>
                <div className="assistantSidebar">icons</div>
                <div className="AssistantTop">Watson Manager Assistance</div>
                <div className="AssistantMid">Hi, I am the assistant!</div>
                <div className="AssistantBottom">Type something..</div>
            </div>
        );
    }
}

export default Assistant;
