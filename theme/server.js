const express = require("express");
const serveStatic = require('serve-static')
//const cors = require("cors");
// Instantiate server
const app = express();
const path = require("path");


// Body Parser configuration
app.use('/',serveStatic(path.join(__dirname, "/dist")));
// Configure routes
app.get(/.*/, function(req, res) {
    res.sendFile(path.join(_dirname, '/dist/index.js'))
});

// Launch server
const port = process.env.PORT || 8080
app.listen(port)
  console.log(`Server en écoute : ${port})`)     
