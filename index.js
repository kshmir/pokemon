var http = require("http");

http.createServer(function (request, response) {
  if (request.url.startsWith("/Pokemon1")) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Pikachu\n');
    return;
  }
  if (request.url.startsWith("/Pokemon2")) {
    if (Math.random() > 0.5) {
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end('Bulbasaur\n');
    } else {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end('Error x)\n');
    }
    return;
  }
  if (request.url.startsWith("/Pokemon3")) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    setTimeout(function() {
      response.end('Charizard\n');
    }, Math.random() * 10000);
    return;
  }
  response.writeHead(400, {'Content-Type': 'text/plain'});
  response.end('Invalid Request\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');