'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:3000';

const hubConnection = io.connect(host);

setInterval(() => {
  let movies = [
    'Lord of The Rings',
    'Dirty Dancing',
    'Mission Impossible',
    'Hard to Kill',
  ];

  let randomMovie = movies[Math.floor(Math.random() * movies.length)];
  // console.log(randomMovie);

  hubConnection.emit('request', randomMovie);
}, 1000);

hubConnection.on('check-out', (payload) => {
  if (payload.status === 'in stock') {
    console.log('you checked out', payload);
  } else {
    // console.log(payload);
  }

  setInterval(() => {
    console.log('you checked in', payload);
    hubConnection.emit('check-in', payload.name);
  }, 5000);
});
