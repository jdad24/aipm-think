import React, { Component } from 'react';
import microPhoneIcon from '../../../../assets/microphone.svg';
import settingsGrey from '../../../../assets/settings_grey.svg';
import lightningBolt from '../../../../assets/lightningBolt.svg';
import bulb from '../../../../assets/bulb.svg';
import note from '../../../../assets/note.svg';
import axios from 'axios';
import watson from '../../../../assets/watson.svg';
import WatsonDialog from './Watson/watson';
import UserDialog from './User/user';
import Aux from '../../../common-ui/Aux/Aux';
import UpArrow from "../../../../assets/UpArrow.svg";
import './assistant.css';

import './assistant.css';

class Assistant extends Component {
    constructor(props) {
        super(props)

        this.ref = React.createRef()
    }

    state = {
        sampleQ: [],
        chosenSampleQ: "",
        dialog: []
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    scrollToBottom = () => {
        this.ref.current.scrollTop = this.ref.current.scrollHeight;
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.sampleQ != this.state.sampleQ) {
            this.setState({
                sampleQ: nextProps.sampleQ
            });
        }
    }

    getAssistanceResponse = (event) => {
        //console.log(event.target.value);
        if (!this.state.chosenSampleQ) {
            alert("Please ask a question");
        } else {
            axios.get('https://aipm-gsc-nodered.mybluemix.net/watsonAssistant?inputText=' + this.state.chosenSampleQ)
                .then(response => {
                    console.log(response);
                    let cur_dialog = this.state.dialog;
                    let cur_dialog_fragment;
                    if (response.data.output.generic[0].text) {
                        cur_dialog_fragment = {
                            userDialog: this.state.chosenSampleQ,
                            watsonDialog: response.data.output.generic[0].text
                        }
                    } else if (response.data.output.generic[0].header) {
                        if (response.data.output.generic[0].results.length == 0) {
                            cur_dialog_fragment = {
                                userDialog: this.state.chosenSampleQ,
                                watsonDialog: [response.data.output.generic[0].header]
                            }
                        } else {
                            var myString = "<a href={\"pdfDiscovery/" + response.data.output.generic[0].results[0].url + "}\" target=\"_blank\">" +
                            response.data.output.generic[0].results[0].url + "</a>";
                            cur_dialog_fragment = {
                                userDialog: this.state.chosenSampleQ,
                                watsonDialog: [response.data.output.generic[0].header,
                                // response.data.output.generic[0].results[0].url, 

                                "<p className='urlColor'><a href='pdfDiscovery/" + response.data.output.generic[0].results[0].url + "' target='_blank'>" +response.data.output.generic[0].results[0].url + "</a></p>",
                                
                                response.data.output.generic[0].results[0].highlight.text[0],

                                "<p className='urlColor'><a href='pdfDiscovery/" + response.data.output.generic[0].results[1].url + "' target='_blank'>" +response.data.output.generic[0].results[1].url + "</a></p>",
                                
                                response.data.output.generic[0].results[1].highlight.text[0],

                                "<p className='urlColor'><a href='pdfDiscovery/" + response.data.output.generic[0].results[2].url + "' target='_blank'>" +response.data.output.generic[0].results[2].url + "</a></p>",
                                
                                response.data.output.generic[0].results[2].highlight.text[0]]
                            }//title, url, text

                            // <a href={'pdfDiscovery/' + searchResults} target="_blank"><p dangerouslySetInnerHTML={this.createMarkup(searchResults)} 
                        }

                    }
                    cur_dialog.push(cur_dialog_fragment);
                    console.log("cur_dialog");
                    console.log(cur_dialog);
                    this.setState({
                        dialog: cur_dialog
                    });
                }
                );
            //debugger;
        }

    }

    getSampleQText = (event, text) => {
        // console.log(text);
        // this.setState({
        //     chosenSampleQ: text
        // });

        if (!text) {
            console.log(event.target.value);
            this.setState({
                chosenSampleQ: event.target.value
            });
        } else {
            console.log(text);
            this.setState({
                chosenSampleQ: text
            });
        }


    }

    getQuestions = () => {
        let sampleQs = "Loading sample questions.."
        var count = 0

        if (this.state.sampleQ) {
            sampleQs = this.state.sampleQ.map(s => {
                return <div onClick={(e) => this.getSampleQText(e, s)} className="question" key={s}>{s}</div>
            });
        }
        return sampleQs;
    }

    createMarkup = (e) => {
        return { __html: e };
    }

    getDialog = () => {
        let index = 0;
        let dialog = this.state.dialog.map(d => {
            let search;

            var count = -2 //Counter to handle URL link. Link code runs every 3 times in map function
            if (Array.isArray(d.watsonDialog)) {

                search = d.watsonDialog.map((searchResults, i) => {
                    console.log(searchResults);
                    count++
                    return (
                        <WatsonDialog>
                            {/* {count%3==0 ? <a href={'../../../../pdfDiscovery/' + searchResults} target="_blank"><p dangerouslySetInnerHTML={this.createMarkup(searchResults)} /> </a>
                            : <p dangerouslySetInnerHTML={this.createMarkup(searchResults)} />}  */}
                             <p dangerouslySetInnerHTML={this.createMarkup(searchResults)} />
                            {/* {<p>{searchResults}</p>} */}
                        </WatsonDialog>
                    );
                });

                console.log(search);
            } else {
                search = (
                    <WatsonDialog>
                        <p>{d.watsonDialog}</p>
                        {/* {sampleQs} */}
                    </WatsonDialog>
                );
                //console.log(search);
            }
            return (
                <Aux key={index++}>
                    <UserDialog
                        name="User">
                        <p>{d.userDialog}</p>
                    </UserDialog>
                    {/* <WatsonDialog> */}
                    {search}
                    {/* {sampleQs} */}
                    {/* </WatsonDialog> */}
                </Aux>
            );
        });

        return dialog;
    }

    getFirstDialog = () => {
        let sampleQs = this.getQuestions();
        let firstDialog =
            (<WatsonDialog>
                <p>Hello, how may I help you?</p>
                {sampleQs}
            </WatsonDialog>);
        return firstDialog;
    }

    render() {
        let firstDialog = this.getFirstDialog();
        let dialog = this.getDialog();

        return (
            <div
                className="assistantContainer"
                style={{ opacity: this.props.show ? '1' : '0' }}>
                <div className="assistantSidebar">
                    {/* <div><img src={watson} /></div> */}
                    <div><img src={note} /></div>
                    <div><img src={note} /></div>
                    <div><img src={note} /></div>
                    {/* <div><img src={bulb} /></div> */}
                    <div><img src={lightningBolt} /></div>
                    <div><img src={settingsGrey} /></div>
                </div>
                <div className="AssistantTop">Watson Manager Assistant</div>
                <div className="AssistantMid" ref={this.ref}>
                    {firstDialog}
                    {dialog}
                </div>
                <div className="AssistantBottom">
                    <input onChange={(e) => this.getSampleQText(e)} placeholder="Type something.." className="AssistantBottom_input" type="input" value={this.state.chosenSampleQ} />
                    {/* <div onChange={(e) => this.getAssistanceResponse(e)} className="AssistantBottom_input" contentEditable="true" type="input">{this.state.chosenSampleQ}</div> */}
                    <div onClick={(e) => this.getAssistanceResponse(e)}><p className="upArrow">&#x2191;</p></div>
                    {/* // <div onClick={(e) => { this.getAssistanceResponse(e) }} style={{ textAlign: "right" }} ><img style={{ marginLeft: "325px" }} src={UpArrow} width="50%" height="50%" /></div> */}
                </div>
            </div>
        );
    }
}

export default Assistant;
