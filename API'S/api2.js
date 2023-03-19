const http = require("http");

function datacontrol(req, res) {
  res.write("<h1>this is akshay and Rajshekar</h1>");
  res.end();
}
http.createServer(datacontrol).listen(5000);
