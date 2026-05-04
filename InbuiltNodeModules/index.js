const os = require('os');
const path = require('path');
const url = require('url');

console.log("OS Platform:", os.platform());
console.log("Home Dir:", os.homedir());

console.log("File Path:", path.join(__dirname, 'test.txt'));

const myUrl = new URL('http://localhost:3000/test?name=Aryan_Singh');
console.log("Hostname:", myUrl.hostname);
console.log("Query:", myUrl.searchParams.get('name'));