
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var mongoose = require("mongoose");
var app = express();

var {post} = require("./models/post");
var {MongoClient} = require('mongodb');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client')));


MongoClient.connect("mongodb://localhost:27017/myproject", (error, client)=>{
  if(error){
     console.log("@@@@@@@not connected", error);
  }else{
    console.log("connected..............");
  }
});



app.use('/', function(req, res){
  // res.sendFile(express.static(__dirname+"/client/index.html"));
  res.sendFile(__dirname+"/client/index.html");
});


var server = http.createServer(app);
server.listen(3000);

module.exports = app;
