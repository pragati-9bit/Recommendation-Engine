// Importing required modules
const http = require('http');

// Define port
const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello World"
    res.end('Hello World\n');
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
