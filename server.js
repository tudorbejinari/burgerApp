// express 
var express = require('express');

var app = express();

var PORT = process.env.PORT || 8080;


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars 
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require('./controllers/burgers_controller');

app.use(router);

app.listen(PORT, function(){
    console.log("Listening on: " + PORT);
});