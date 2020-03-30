import React from 'react'
import Plot from 'react-plotly.js';
import axios from 'axios';
import $ from 'jquery'
import './3DGraph.css'
import sizeMe from 'react-sizeme'



class Graph extends React.Component {
  constructor(props) {
    super(props)

    this.dataArray = [
      {      
        "sTorque": "0",      
        "lTorque": "2520",      
        "uTorque": "-3154",      
        "rTorque": "-576",      
        "bTorque": "0",      
        "tTorque": "352",      
        "xPos": "635202",      
        "yPos": "-428911",      
        "zPos": "594962",      
        "timestamp": 1585325912286
        },

      {

      "sTorque": "0",      
      "lTorque": "5320",      
      "uTorque": "-2158",      
      "rTorque": "-704",      
      "bTorque": "-192",      
      "tTorque": "-256",      
      "xPos": "795447",      
      "yPos": "169888",      
      "zPos": "196498",      
      "timestamp": 1585325880409      
      },       
             
      
      {      
      "sTorque": "0",      
      "lTorque": "2520",      
      "uTorque": "-3154",      
      "rTorque": "-576",      
      "bTorque": "0",      
      "tTorque": "352",      
      "xPos": "635202",      
      "yPos": "-428911",      
      "zPos": "594962",      
      "timestamp": 1585325912286      
      },
      
      {      
      "sTorque": "0",      
      "lTorque": "5180",      
      "uTorque": "-2158",      
      "rTorque": "-736",
      "bTorque": "-384",
      "tTorque": "-256",
      "xPos": "794744",
      "yPos": "169223",
      "zPos": "192847",
      "timestamp": 1585325930250
      }]


    this.state = {
      yaskawa1: [],
      width: window.innerWidth/4.6,
      height: window.innerHeight/3.1
    }


  }

  getYaskawa1Data() {
    $.ajax({
      url: 'https://aipm-gsc-nodered.mybluemix.net/yaskawaHistory',
      type: 'GET',
      dataType: 'json',

    }).then(response => {


      response.yaskawaHistory.slice(0, 10).map((record, index) => {
        this.setState({
          yaskawa1: [...this.state.yaskawa1, JSON.parse(record)]
        })
        // return JSON.parse(record)
      })

      console.log(this.state.yaskawa1)

    })

  }

  componentDidMount() {
    this.getYaskawa1Data()

    window.addEventListener('resize', () => {
      this.setState({
        width: window.innerWidth/4.6,
        height: window.innerHeight/3.1
      })
    })

  }


  render() {
    return (
      <div className="Graph-Container">
        <Plot
          data={[
            {
              name: "Yaskawa Position",
              x: [
              this.dataArray[0]['xPos'], 
              this.dataArray[1]['xPos'], 
              this.dataArray[2]['xPos'], 
              this.dataArray[3]['xPos'], 
              // this.dataArray[0]['xPos']
            ],
              y: [
                this.dataArray[0]['yPos'], 
                this.dataArray[1]['yPos'], 
                this.dataArray[2]['yPos'], 
                this.dataArray[3]['yPos'], 
                // this.dataArray[0]['xPos']
              ],
              z: [
                this.dataArray[0]['zPos'], 
                this.dataArray[1]['zPos'], 
                this.dataArray[2]['zPos'], 
                this.dataArray[3]['zPos'], 
                // this.dataArray[0]['xPos']
              ],
              type: 'scatter3d',
              mode: 'markers',
              marker: {
                color: [
                  'rgba(251,51,129,1)',
                  'rgba(221,79,134,1)',
                  'rgba(178,73,112,1)',
                  'rgba(134,60,88,1)',
                  'rgba(95,42,61,1)'
                ],
                size: '10',
                opacity: ".7"
                // symbol: ['circle-open', 'circle-open','circle-open','circle-open', 'circle']
              },


            },
            // {
            //   name: "Current Point",
            //   x: [5, 10, 15, 20, 30],
            //   y: [10, 20, 30, 35, 40],
            //   z: [4, 9, 12, 16, 20],
            //   type: 'scatter3d',
            //   opacity: '1',
            //   mode: 'lines',
            //   marker: { 
            //     color: '#56D679',
            //     size: '0' 
            //    }
            // }
          ]}
          useResizeHandler={true}
          style={{height: this.state.height, width: this.state.width}}
          layout={{
            // width: 300,
            // height: 300,
            autosize: true,
            title: {
              text: "Position",
              x: '.05',
              y: '.97',
              font: {
                size: '22',
                color: '#A4A4A4',
                family: 'IBMPlexSans'
              }
            },
            showlegend: false,
            paper_bgcolor: '#252525',
            margin: {
              t: "10",
              b: "10",
              l: "10",
              r: "10"
            },
            scene: {
              bgcolor: "#252525",
              // bgcolor: "rgba(37,37,37,1)",
              xaxis: {
                // range: [-1000000,1000000],
                title: {
                  text: ""
                },
                showgrid: false,
                showticklabels: false,
                showbackground: true,
                backgroundcolor: "rgba(37,37,37,.2)",
                showaxeslabels: false
                // visible: false
              },
              yaxis: {
                // range: [-1000000,1000000],
                title: {
                  text: ""
                },
                showbackground: true,
                backgroundcolor: "rgba(37,37,37,.5)",
                showgrid: false,
                showticklabels: false,
                showaxeslabels: false
                // visible: false
              },
              zaxis: {
                // range: [-1000000,1000000],
                title: {
                  text: ""
                },
                showbackground: true,
                backgroundcolor: "rgba(37,37,37,.9)",
                showgrid: false,
                showticklabels: false,
                showaxeslabels: false,
                visible: false
              },
              camera: {
                eye: {
                  x: 2,
                  y: 2,
                  z: 2
                },
                up: {
                  x: 0,
                  y: 0,
                  z: 1
                },
                center: {
                  x: -.75,
                  y: -.75,
                  z: -.5
                }
              }
            }
          }}
        />
      </div>
    )
  }

}

export default Graph;