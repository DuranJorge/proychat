var app = require('express')();
var http = require('http').createServer(app);

//socket.io
var io = require('socket.io')(http);

/*app.get('/', function(req, res){
  res.send('<h1>Hola mundo</h1>');
});*/

app.get ( '/' , function ( req, res ) { 
  res.sendFile (__dirname + '/index.html' ); 
});

//socket.io
io.on('connection',function(socket){
	console.log('Un usuario se encuentra conectado :D');
	socket.on('disconnect',function(){
		console.log('El usuario se ha desconectado')
	})
	//mensaje recibido del cliente 'chat message'
	socket.on('chat message', function(msg){
    //console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
})


http.listen(3000, function(){
  console.log('listening on *:3000');
});