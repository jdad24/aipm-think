import React, { Component } from 'react';
import microPhoneIcon from '../../../../assets/microphone.svg';
import settingsGrey from '../../../../assets/settings_grey.svg';
import lightningBolt from '../../../../assets/lightningBolt.svg';
import lightningBoltBlue from '../../../../assets/lightningBoltBlue.svg';
import bulb from '../../../../assets/idea.svg';
import note from '../../../../assets/note.svg';
import axios from 'axios';
import watson from '../../../../assets/watson.svg';
import WatsonDialog from './Watson/watson';
import UserDialog from './User/user';
import Aux from '../../../common-ui/Aux/Aux';
import mute from '../../../../assets/mute.svg';
import expand from '../../../../assets/expand.svg';
import UpArrow from "../../../../assets/up-arrow.svg";
import Dropdown from '../../Dropdown/Dropdown'
import './assistant.css';
import HorizontalRectangle from '../../HorizontalRectangle/HorizontalRectangle'


class Assistant extends Component {
    constructor(props) {
        super(props)

        this.ref = React.createRef()

        this.getQuestions = this.getQuestions.bind(this)
    }

    state = {
        sampleQ: [],
        chosenSampleQ: "",
        chosenInputText: "",
        dialog: [],
        tabFocus: {
            watson: false,
            note: false,
            bulb: false,
            clear: false,
        },
        lightningBlue: false,
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

                                "<p className='urlColor'><a href='pdfDiscovery/" + response.data.output.generic[0].results[0].url + "' target='_blank'>" + response.data.output.generic[0].results[0].url + "</a></p>",

                                response.data.output.generic[0].results[0].highlight.text[0],

                                "<p className='urlColor'><a href='pdfDiscovery/" + response.data.output.generic[0].results[1].url + "' target='_blank'>" + response.data.output.generic[0].results[1].url + "</a></p>",

                                response.data.output.generic[0].results[1].highlight.text[0],

                                "<p className='urlColor'><a href='pdfDiscovery/" + response.data.output.generic[0].results[2].url + "' target='_blank'>" + response.data.output.generic[0].results[2].url + "</a></p>",

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

       // this.clearText();

    }

    getSampleQText = (event, text) => {
        // console.log(text);
        // this.setState({
        //     chosenSampleQ: text
        // });

        if (!text) {
            console.log(event.target.value);
            this.setState({
                chosenSampleQ: event.target.value,
                chosenInputText: event.target.value
            });
        } else {
            console.log(text);
            this.setState({
                chosenSampleQ: text,
                chosenInputText: text,
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
                        {/* <p>{d.watsonDialog}</p> */}
                        <div>{d.watsonDialog}</div>
                        {/* {sampleQs} */}
                    </WatsonDialog>
                );
                //console.log(search);
            }
            return (
                <Aux key={index++}>
                    <UserDialog
                        name="User">
                        {/* <p>{d.userDialog}</p> */}
                        <div>{d.userDialog}</div>
                    </UserDialog>
                    {/* <WatsonDialog> */}
                    {search}
                    {/* {sampleQs} */}
                    {/* </WatsonDialog> */}
                </Aux>
            );
        });
        //this.clearText();
        return dialog;
    }

    getFirstDialog = () => {
        let sampleQs = this.getQuestions();
        let firstDialog =
            (<WatsonDialog>
                <p>Hello, how may I help you?</p>
                {/* {sampleQs} */}
            </WatsonDialog>);
        return firstDialog;
    }

    clearText = () => {
        this.setState({
            chosenSampleQ : ""
        });
    }

    render() {
        let firstDialog = this.getFirstDialog();
        let dialog = this.getDialog();
        //this.clearText();

        return (
            <div
                className="assistantContainer"
                style={{ opacity: this.props.show ? '1' : '0', zIndex: this.props.show ? '500' : '-500' }}>
                <div className="assistantSidebar">
                    <div className="assistantIconContainer" tabIndex="10">
                        {this.state.tabFocus.watson? <HorizontalRectangle/>: null} <img src={watson} onClick={()=> this.setState({
                            tabFocus: {
                                watson: !this.state.watson
                            }
                        })}/>
                        </div>
                    {/* <div><img src={note} /></div> */}
                    <div className="assistantIconContainer" tabIndex="11">
                        {/* <Dropdown questions={this.getQuestions}> */}
                        {this.state.tabFocus.note? <HorizontalRectangle/>: null}<img src={note} onClick={()=> this.setState({
                            tabFocus: {
                                note: !this.state.note
                            }
                        })} />
                        {/* </Dropdown>  */}
                    </div>
                    {/* <div><img src={note} /></div> */}
                    <div className="assistantIconContainer" tabIndex="12">
                    {this.state.tabFocus.bulb? <HorizontalRectangle/>: null}<img src={bulb} onClick={()=> this.setState({
                            tabFocus: {
                                bulb: !this.state.bulb
                            }
                        })} /></div>
                    {/* <div className="assistantIconContainer"><img src={lightningBolt} /></div> */}
                    <div className="assistantIconContainer" tabIndex="13" onClick={this.clearText}>{this.state.tabFocus.clear? <HorizontalRectangle/>: null}
                    <img src={settingsGrey} onClick={()=> this.setState({
                            tabFocus: {
                                clear: !this.state.clear
                            }
                        })} /></div>
                </div>
                <div className="AssistantTop">
                    <div>
                        <div>Watson Manager</div>
                        <div>Assistant</div>
                    </div>
                    <div className="assistantHeaderIcons">
                        <div><img src={mute} /></div>
                        <div><img src={expand} /></div>
                    </div>


                </div>
                <div className="AssistantMid" ref={this.ref}>
                <div className="assistantIconContainer" 
                // onClick={() => this.setState({lightningBlue: !this.state.lightningBlue})}
                >
                        <Dropdown questions={this.getQuestions}>
                        {/* {this.state.lightningBlue ? <img src={lightningBoltBlue}/> : <img src={lightningBolt} />}  */}
                        </Dropdown> 
                </div>
                    {firstDialog}
                    {dialog}
                </div>
                <div className="AssistantBottom">
                    <input onChange={(e) => this.getSampleQText(e)} placeholder="Type something.." className="AssistantBottom_input" type="input" value={this.state.chosenInputText} />
                    {/* <div onChange={(e) => this.getAssistanceResponse(e)} className="AssistantBottom_input" contentEditable="true" type="input">{this.state.chosenSampleQ}</div> */}
                    {/* <div onClick={(e) => this.getAssistanceResponse(e)}><p className="upArrow">&#x2191;</p></div> */}
                    <div onClick={(e) => (this.getAssistanceResponse(e), this.state.chosenInputText="")}><img src={UpArrow}/></div>
                    {/* // <div onClick={(e) => { this.getAssistanceResponse(e) }} style={{ textAlign: "right" }} ><img style={{ marginLeft: "325px" }} src={UpArrow} width="50%" height="50%" /></div> */}
                </div>
            </div>
        );
    }
}

export default Assistant;
