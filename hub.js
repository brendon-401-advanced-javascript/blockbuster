'use strict';
const io = require('socket.io')(3000);
const ioClient = require('socket.io-client');

io.on('connection', (socket) => {
    console.log('were connected', socket.id);
    
});
const hub = io.of('hub-system');
hub.on('connection', (socket) => {
    // console.log('connected');
    
    socket.on('join', (room) => {
        socket.join(room); 
    });
    socket.on('checkout', (payload) => {
        socket.broadcast.emit('checkout', payload); 
    })
});





