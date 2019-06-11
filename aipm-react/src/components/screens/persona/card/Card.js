import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import carla from "../../../../assets/carla.png"; // with import
import mark from "../../../../assets/mark.png";
import "./card.css";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Mark",
    backside: "Mark is Manufacturing Line Manager ",
    post: "Manufacturing Line Manager",
    tool: "Predictive Maintanance",
    imgurl: mark,
    redirect: "/pm",
    redirectText: "Run Demo"
  },
  {
    title: "Carla",
    backside: "Carla is Quality Assurance Inspector",
    post: "Quality Assurance Inspector",
    tool: "Visual Insights",
    imgurl: carla,
    redirect: "/vi",
    redirectText: "Run Demo"
  },
  {
    title: "Carla",
    backside: "Carla is Quality Assurance Inspector",
    post: "Quality Assurance Inspector",
    tool: "Visual Insights",
    imgurl: carla,
    redirect: "/vi",
    redirectText: "Run Demo"
  },
  {
    title: "Carla",
    backside: "Carla is Quality Assurance Inspector",
    post: "Quality Assurance Inspector",
    tool: "Visual Insights",
    imgurl: carla,
    redirect: "/vi",
    redirectText: "Run Demo"
  },
  {
    title: "Carla",
    backside: "Carla is Quality Assurance Inspector",
    post: "Quality Assurance Inspector",
    tool: "Visual Insights",
    imgurl: carla,
    redirect: "/vi",
    redirectText: "Run Demo"
  },
  {
    title: "Carla",
    backside: "Carla is Quality Assurance Inspector",
    post: "Quality Assurance Inspector",
    tool: "Visual Insights",
    imgurl: carla,
    redirect: "/vi",
    redirectText: "Run Demo"
  }
];

class FlipCard extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped0: false,
      isFlipped1: false,
      isFlipped2: false,
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
    // console.log(cardId);
  };

  render() {
    return (
      <div className="cards">
        {this.state.personas.map((i, j) => {
          console.log(j);
          let currentCard = `isFlipped${j}`;
          return (
            <div className="card">
              <ReactCardFlip isFlipped={this.state[currentCard]}>
                <div key="front" className="mycard">
                  <img src={i.imgurl} onClick={this.handleClick(j)} />
                  <div className="frontText">
                    <div className="frontTitle"> {i.title}</div>
                    {i.post}
                  </div>
                  <div className="frontText">
                    <br />
                    {i.tool}
                  </div>
                </div>

                <div
                  onClick={this.handleClick(j)}
                  key="back"
                  className="mycard"
                >
                  <div className="text">{i.backside}</div>
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
