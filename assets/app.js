//Requirments 
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
// Set up express
var app = express();
var PORT = process.env.PORT || 3000;

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

//Store reseverations in an array of objects
// Name, Phone Number , Email, Unique Id



// Waitlist if there are 5 tables then push to a new list

// Routes

// GET / Reservations
// Ajax API to fill in tables api- reservations

//Post / Reservations

// GET / Waitlist
//API waitlist

// Clear 

