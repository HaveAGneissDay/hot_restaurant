<<<<<<< HEAD
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var liveserver = require("live-server");

// Sets up the Express App
// =============================================================
=======
//Requirments 
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
// Set up express
>>>>>>> b06a510402229634379ff732988db4b4673686db
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
<<<<<<< HEAD
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var characters = [
  {
    Name: "",
    PhoneNumber: "",
    UniqueID: "",
  },


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:characters?", function(req, res) {
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }

    return res.json(false);
  }
  return res.json(characters);
});
//
// // Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
//
//   console.log(newcharacter);
//
//   characters.push(newcharacter);
//
//   res.json(newcharacter);
// });
//
// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
=======
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

>>>>>>> b06a510402229634379ff732988db4b4673686db
