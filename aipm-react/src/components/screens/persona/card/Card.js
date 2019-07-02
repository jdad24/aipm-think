import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import carla from "../../../../assets/carla.png"; // with import
import mark from "../../../../assets/mark.png";
import paul from "../../../../assets/Paul.png";
import rhonda from "../../../../assets/Rhonda.png";
import joe from "../../../../assets/Joe.png";
import pene from "../../../../assets/pene.png";
import "./card.css";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Mark",
    backside:
      "Mark needs to know how well his line is working, if there are issues predicted for the line, and if the end product is within specifications.",
    post: "Manufacturing Line Manager",
    tool: "Predictive Maintanance",
    imgurl: mark,
    redirect: "/pm",
    redirectText: "Run Demo"
  },
  {
    title: "Carla",
    backside:
      "Carla needs to know how well the Visual Inspection is working (historically and real time) and that the quality of the products are within specification.",
    post: "Quality Assurance Inspector",
    tool: "Visual Insights",
    imgurl: carla,
    redirect: "/vi",
    redirectText: "Run Demo"
  },
  {
    title: "Paul",
    backside:
      "Paul needs to know how the plant is operating, if there are any issues with any of the lines, has to be able to ask natural language questions about production, and compare lines and plants.",
    post: "Plant Manager",
    tool: "Production Optimization",
    imgurl: paul,
    redirect: "/vi",
    redirectText: "Run Demo"
  },
  {
    title: "Joe",
    backside:
      "Joe needs to see all of his assigned service requests and needs tools to help him determine the best fix for reported issues.",
    post: "Plant Technician",
    tool: "Equipment Maintenance Advisor",
    imgurl: joe,
    redirect: "/em",
    redirectText: "Run Demo"
  },
  {
    title: "Rhonda",
    backside:
      "Rhonda needs to know disaster recovery is achievable, manage the cloud services and the independent containers, and be able to manage services on multiple clouds.",
    post: "Operations Manager",
    tool: "Net App",
    imgurl: rhonda,
    redirect: "/vi",
    redirectText: "Run Demo"
  },
  {
    title: "Penelope",
    backside:
      "Penelope needs to see the entire procurement process, and determine quickly and with pinpoint accuracy where components came from and are deployed",
    post: "Procurement Manager",
    tool: "SAP, Blockchain",
    imgurl: pene,
    redirect: "/vi",
    redirectText: "Run Demo"
  }
];

class FlipCard extends Component {
  constructor() {
    super();
    this.state = {
      //isFlipped0: false,
      // isFlipped1: false,
      // isFlipped2: false,
      // isFlipped3: false,
      // isFlipped4: false,
      // isFlipped5: false,

      personas: data
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //handleClick(e) {
  // e.preventDefault();
  // this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  //}

  handleClick = id => () => {
    const cardId = `isFlipped${id}`;
    this.setState({ [cardId]: !this.state[cardId] });
    console.log("id:" + id + " " + cardId);
  };

  render() {
    return (
      <div className="cards">
        {this.state.personas.map((i, j) => {
          console.log(j);
          let currentCard = `isFlipped${j}`;
          return (
            <div className="card" key={i.title}>
              <ReactCardFlip isFlipped={this.state[currentCard]}>
                <div key="front" className="mycard">
                  <img src={i.imgurl} onClick={this.handleClick(j)} />
                  <div className="frontText">
                    <div className="frontTitle"> {i.title}</div>
                    {i.post}
                  </div>
                  <div className="frontText">
                    {/* <br /> */}
                    {i.tool}
                  </div>
                </div>

                <div
                  onClick={this.handleClick(j)}
                  key="back"
                  // className="mycard"
                >
                  <div className="text">
                    <div className="flippedTextContent">{i.backside}</div>
                  </div>
                </div>
              </ReactCardFlip>
              <Link to={i.redirect}>
                <div className="frontText2">
                  <br />
                  {i.redirectText} <span>&#8594;</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FlipCard;
