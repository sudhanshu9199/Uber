const http = require('http'); // use http to create a server.
const app = require('./app'); // Import the app from app.js

const port = process.env.PORT || 3000; // Set the port to the environment variable PORT or 3000

const server = http.createServer(app); // use http to create a server with the app
// Listen for incoming requests on the specified port

server.listen(port, ()=> {
    console.log(`Server is running on port ${port}`); // Log the port number to the console
    console.log(`http://localhost:${port}`); // Log the URL to the console
});