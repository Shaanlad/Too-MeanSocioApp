//Simple node server
var http = require('http');
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type":"text/plain"});
  console.log("It's alive!")
  response.write("Hello World");
  response.end();
}).listen(3000);

var ws  = require('ws')
exports.connect = function (server) {
	var wss = new ws.Server({server: server})
	wss.on('connection', function (ws) {
		ws.send('hello!')
	})
}