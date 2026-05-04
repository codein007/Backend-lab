const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello from Node Server");
    res.end();
});

server.listen(8080, () => {
    console.log("Server running on port 8080");
});