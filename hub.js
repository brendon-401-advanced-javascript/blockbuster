'use strict';
const io = require('socket.io')(3000);
const ioClient = require('socket.io-client');

io.on('connection', (socket) => {
    console.log('were connected', socket.id);
});
    const hub = io.of('hub-system');
    hub.on('connection', (socket) => {
        console.log('connected'); 
    });
    
    
    
    
    io.emit('checkout', (payload) => {
        console.log('checkout emitted', payload);    
});



// function logger(payload) {
//     hubConnection.emit(payload); 
//     console.log(payload); 
// }

// const hubConnection = ioClient.connect('http://localhost:3000');

// hubConnection.on('connection',logger); 

