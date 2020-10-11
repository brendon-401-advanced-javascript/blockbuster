
'use strict';
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log('were connected', socket.id);
    
    socket.on('in-stock', (payload) => {   
        socket.emit('in-stock',payload);
        console.log(payload, 'is ready to be checked out');
    });
    socket.on('in-stock', (payload) => {
        socket.emit('checked-out', payload);
        console.log(payload, 'was checked out');
    })
});

