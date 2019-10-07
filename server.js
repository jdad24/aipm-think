const express = require("express");
const basicAuth = require('express-basic-auth');
const path = require("path");
const bodyParser = require('body-parser');


// const democenterLoader = require("./democenter-loader");

const app = express();
const cfEnv = require("cfenv");

const publicPath = path.join(__dirname, "aipm-react", "build");

const isLocal = cfEnv.getAppEnv().isLocal;
console.log("isLocal:" + isLocal);

// module.exports.app = app;
// const hlfClent = require('./hlf-client');

var localUser = 'gscuser';
var localPassword = 'passw0rd';

var myBasicAuth = {
  users: {[localUser] : localPassword},
  challenge: true
};
console.log(JSON.stringify(myBasicAuth));

if (isLocal) {
  console.log("isLocal set");
  console.log("local basicauth with: gscuser/" + localPassword);

  app.use(basicAuth(myBasicAuth));
} else {
  var useBasicAuth = process.env.USE_BASICAUTH;
  if (useBasicAuth === 'true') {
    var dashboardUser = process.env.DASHBOARD_USER;
    var dashboardPassword = process.env.DASHBOARD_PASSWORD;
    var gscUser = process.env.GSC_USER;
    var gscPassword = process.env.GSC_PASSWORD;
    console.log("using basicauth with: " + dashboardUser + " and " + gscUser);
    app.use(basicAuth({
      users: {
        [dashboardUser]: dashboardPassword,
        [gscUser]: gscPassword
        },
      challenge: true
    }));
  } 
}

// app.use(democenterLoader({
//   cookie_name: "democentercooki",
//   solution_id: "e5803ebe0f03c2358dfb1ec339557fd7",
//   demo_center_url: "https://gsc-demo-center-industrial.mybluemix.net",
//   demo_center_key: ["-----BEGIN PUBLIC KEY-----",
//   "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvSlK/neR5warY97xxWfQ",
//   "jo6PDI1OYD6UCBReHR2ZZ2iRcqAcYzlEkjxaehlxnXXlOXUV60x0JA4b1q0Nb4QX",
//   "2Rh2Yq6Hhd81p4GtM39M+5HevNg525kztallCY9rIOSGPc1QX1oDlN4jHXEw1DDB",
//   "JEtFPi86AZb1/mHtH+SFr14s+o3z4fmGDRc1d4KO2ATW/hfLwaVGso82qlwa3ZRP",
//   "Y33Nmt6KJlNAmBu1Lo/bDCPM6TKI2tHp+F5f8OA750ffklB+2nqDW2XZDOsQA+WS",
//   "xd9oLQuytoz5EpxHvroyY2X9Y9AE9OKSujBPp2POsUZYx5ujsQ+a3HPGdO3du+Sc",
//   "jQIDAQAB",
//   "-----END PUBLIC KEY-----"].join("\n")
// }));

// app.use(express.static(path.join(__dirname, "build")));
// serve the react app files
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server listening on port: ", port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
