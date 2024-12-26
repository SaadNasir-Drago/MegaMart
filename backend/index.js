// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a port
const PORT = 4000;

// Middleware: Parses incoming JSON requests
app.use(express.json());

// Define a GET route
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

// Define a POST route
app.post('/data', (req, res) => {
    const { name, age } = req.body; // Destructure data from the request body
    res.send(`Received data: Name - ${name}, Age - ${age}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
