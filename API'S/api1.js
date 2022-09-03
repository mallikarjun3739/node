// creating basic server and api

const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1> this is akshay and mallikarjun</h1>");
    res.end();
}).listen(5000);
