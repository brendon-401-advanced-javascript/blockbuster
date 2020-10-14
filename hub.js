'use strict';
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('were connected', socket.id);

  socket.on('request', (payload) => {
    io.emit('request', payload);
  });

  socket.on('check-out', (payload) => {
    io.emit('check-out', payload);
  });

  socket.on('check-in', (payload) => {
    io.emit('check-in', payload);
  });
});
