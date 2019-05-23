const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "aipm-react", "build");

// app.use(express.static(path.join(__dirname, "build")));
// serve the react app files
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server listening on port", port);
});