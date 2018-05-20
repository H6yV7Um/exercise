// var Koa = require('koa');
// var app = new Koa();

// app.use(ctx => {
//   ctx.body = 'hello koa';
// });

// app.listen(3000);

var WebSocketServer = require('websocket').server;

var http = require('http');

var server = http.createServer(function(req, res) {
  console.log('inner createServer');
});

server.listen(1337, function() { console.log('listen'); });

var wsServer = new WebSocketServer({
  httpServer: server
});

wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin);
  connection.on('message', function(message) {
    console.log(message);
  });

  connection.on('close', function(connection) {
    console.log('close', connection);
  });
});


