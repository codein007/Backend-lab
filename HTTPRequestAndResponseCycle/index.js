const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:", req.headers);

    res.write("Check console for request details");
    res.end();
});

server.listen(3000);