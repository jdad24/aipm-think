const express = require("express");
const basicAuth = require('express-basic-auth');
const path = require("path");
const bodyParser = require('body-parser');


// const democenterLoader = require("./democenter-loader");

const app = express();
const cfEnv = require("cfenv");

const publicPath = path.join(__dirname, "think-react", "build");

const isLocal = cfEnv.getAppEnv().isLocal;
console.log("isLocal:" + isLocal);

module.exports.app = app;
// const rest_endpoint = require('./rest-endpoints');

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

