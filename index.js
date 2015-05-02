// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
server.listen(port, function () {
console.log('Server listening at port %d', port);
});

// Routing

app.use(express.static(__dirname + '/public'));

// when the client emits instructions, this listens and executes
io.sockets.on('connection', function(socket){
  socket.on('editorUpdate', function(data){
   socket.broadcast.emit('editorUpdate',data);
  });
});
