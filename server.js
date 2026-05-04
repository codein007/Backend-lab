const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const myUrl = url.parse(req.url, true);
    let filePath = '';

    if (myUrl.pathname === '/') {
        filePath = 'project/pages/index.html';
    }
    else if (myUrl.pathname === '/about') {
        filePath = 'project/pages/about.html';
    }
    else if (myUrl.pathname === '/contact') {
        filePath = 'project/pages/contact.html';
    }
    else if (myUrl.pathname === '/services') {
        filePath = 'project/pages/services.html';
    }
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err); 
            res.end('Server Error');
        } else {
            res.end(data);
        }
    });
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});


/*
npm init
super globleal or envirnment virable
__filename
__dirname

path.
extname

join

resolve 
isabsolute
parse   object key value pair (root,
dirname

*/ 