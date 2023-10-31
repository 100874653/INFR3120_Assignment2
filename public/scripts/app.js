/*(function(){
    function Start(){
        console.log("App started ....")
    }
    window.addEventListener("load",Start())
}) ();

 The above code was provided by Prof */



var express = require('express');
var path = require('path');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use express.static to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// import index.js as a router
var indexRouter = require('./index');

// use indexRouter for all requests
app.use('/', indexRouter);

// catch 404 and send a custom message
app.use(function(req, res, next) {
  res.status(404).send("Sorry, I can't find that page.");
});

// listen on port 8080
app.listen(8080, function() {
  console.log('Server is listening on port 8080');
});
