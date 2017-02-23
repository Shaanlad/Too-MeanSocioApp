//Simple express server
var express = require("express");
var app = express();

app.get('/', function(req, res) {
    res.send(200, "Hello There");
    console.log("Express delivery!");
});
app.listen(8887);
