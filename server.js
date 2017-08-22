

// Require our dependencies
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var cheerio = require("cheerio")
var bodyParser = require("body-parser");
// Bring in the Scrape function from our scripts directory
var scrape = require("./scripts/scrape.js");

// Bring article and notes from the controller
// var articleController = require("./controllers/article");

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();

// Set up an Express Router
var router = express.Router();

// Require our routes file pass our router object
//require("./config/routes")(router);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

// Use bodyParser in our app
app.use(bodyParser.urlencoded({
  extended: false
}));

// Have every request go through our router middleware
app.use(router);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});
// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});
