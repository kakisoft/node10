var express = require('express');
var jae = require('jade');

var app = express();

app.get("/",function(req, res){
    res.render('index.jade');
});

app.listen(1234);
console.log('server running ato http://127.0.0.1:1234')