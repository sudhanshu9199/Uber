const dotenv = require('dotenv'); // use dotenv to load environment variables
dotenv.config(); // load environment variables from .env file
const express = require('express'); // use express to create a server
const cors = require('cors'); // use cors to enable cross-origin resource sharing
const cookieParser = require('cookie-parser');
const connectDB = require('./db/db'); // use connectDB to connect to the database
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes'); // use rideRoutes to handle ride-related routes

connectDB();
const app = express(); // use express to create an app

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!'); // send a response to the client
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes); // use rideRoutes to handle ride-related routes


module.exports = app; // use module.exports to export the app