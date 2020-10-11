
'use strict';
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log('were connected', socket.id);
    
    socket.on('checkout', (payload) => {   
        socket.emit('checkout',payload);
        console.log(payload);
});

});

