//
var express = require("express");
var app = express();

app.get('/home', (req,res) => {
    res.json("Hello word");
});

app.listen(3000);
