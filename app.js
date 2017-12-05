var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hi Prasad..");
});

app.listen(4000);
