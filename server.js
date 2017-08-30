// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

const bodyParser = require('body-parser');

// Get our API routes
const posts = require('./server/routes/posts');
const heroes = require('./server/routes/heroes');
//app init
const app = express();

var db;
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// Set our api routes
app.use('/api', posts);
app.use('/api', heroes);
// Catch all other routes and return the index file

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/** * Get port from environment and store in Express. */
const port = process.env.PORT || '3000';
app.set('port', port);

/** * Create HTTP server. */
//const server = http.createServer(app);
/** * Listen on provided port, on all network interfaces. */
// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/test", function(err, database) {
  if(err) throw err;
  app.db = database;
  // Start the application after the database connection is ready
  app.listen(3000);
  console.log("Listening on port 3000");
});
