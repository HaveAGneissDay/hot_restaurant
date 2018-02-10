//Requirments 
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
// Set up express
var app = express();
var PORT = process.env.PORT || 3000;

//Server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//Data 
var reservation_array = [];
var waitlist_array = [];

//Routes
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservation/create", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/reservation/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/reservation/list", function (req,res){
	res.json({reservation:reservation_array, waitlist:waitlist_array});
});

app.post("/api/reservation/create", function(req,res){
	let new_reservation = req.body;
	console.log("req",req.body);
	if(reservation_array.length<=5){
		reservation_array.push(new_reservation);
	}else{
		waitlist_array.push(new_reservation);
	}
	res.json({reservation:reservation_array, waitlist:waitlist_array});
});

app.get("/api/reservation/clear", function(req, res){
	reservation_array = [];
	waitlist_array = [];
	res.json({reservation:reservation_array, waitlist:waitlist_array});
});



