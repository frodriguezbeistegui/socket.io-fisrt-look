// we need http because we don't have express
const http = require('http');

// we need socketio... it's 3rd party
const socketio = require('socket.io');

// we make an http server with node
const server = http.createServer((req, res) => {
    res.end('I am connected!');
})

// Almost the same as standard ws
const io = socketio(server);

io.on('connection', (socket, req)=>{
    //ws.send because socket.emit
    socket.emit('welcome', 'Welcome to the websocket server!');
    //no change here...
    socket.on('message', (msg) =>{
        console.log(msg);
    });
});

server.listen(3000);