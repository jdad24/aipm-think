import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import request from 'request';

ReactDOM.render(<App />, document.getElementById('root'));

// ///////////////////////////

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

// //const request = require('request');

// var username = "admin",

//     password = "Net@pp123!",

//     uuid = "7a085276-b793-11e9-b3a4-00a0b89c650c",

//     url = "https://aipm-gsc-nodered.mybluemix.net/getVolumes"


// console.log("HEREEE");

 

// request(url, { method : 'GET', json: true }, function (err, res, body) {

//   if (err) { return console.log("err",err); }

//   console.log("BODY",body);

//   console.log(res.headers);

//   console.log(res.statusCode);

// });
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
