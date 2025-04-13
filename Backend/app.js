const dotenv = require('dotenv'); // use dotenv to load environment variables
dotenv.config(); // load environment variables from .env file
const express = require('express'); // use express to create a server
const cors = require('cors'); // use cors to enable cross-origin resource sharing
const connectDB = require('./db/db'); // use connectDB to connect to the database

connectDB();
const app = express(); // use express to create an app

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!'); // send a response to the client
});

module.exports = app; // use module.exports to export the app