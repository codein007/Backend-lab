const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.end("Server Running on Port " + PORT);
});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});