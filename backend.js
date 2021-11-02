const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('ndex.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const services  = fs.readFileSync('services.html');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.statusCode= 200;
    res.setHeader('content-type', 'text/html');
    res.end();
});

server.listen(port, hostname, ()=>{
    console.log(`server running at http${hostname}:${port}`);
});