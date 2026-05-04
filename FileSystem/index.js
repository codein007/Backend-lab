const fs = require('fs');

fs.writeFileSync('test.txt', 'Hello Students');

const data = fs.readFileSync('test.txt', 'utf-8');
console.log(data);

fs.appendFileSync('test.txt', '\nNew Line Added');

fs.unlinkSync('test.txt');