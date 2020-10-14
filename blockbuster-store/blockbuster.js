'use strict';

'use strict';
const io = require('socket.io-client');
let host = 'http://localhost:3000';
const hubConnection = io.connect(host);

function logger(payload) {
  return payload;
}

let movies = {
  results: [
    {
      name: 'Lord of The Rings',
      status: 'in stock',
      checked_out_by: null,
    },

    {
      name: 'Dirty Dancing',
      status: 'in stock',
      checked_out_by: null,
    },

    {
      name: 'Mission Impossible',
      status: 'in stock',
      checked_out_by: null,
    },

    {
      name: 'Hard to Kill',
      status: 'in stock',
      checked_out_by: null,
    },
  ],
};

hubConnection.on('request', (payload) => {
  console.log(`Movie: ${payload} requested`);
  let dbMovie = { status: 'broken', name: 'movie not in database' };
  let index;

  for (let i = 0; i < movies.results.length; i++) {
    if (movies.results[i].name === payload) {
      // console.log(movies.results[i]);
      dbMovie = movies.results[i];
      // console.log(dbMovie.status);
      index = i;
    } else {
      // dbMovie = 'movie not in database';
    }
  }

  console.log(dbMovie.status);
  if (dbMovie.status === 'in stock') {
    hubConnection.emit('check-out', dbMovie);
    movies.results[index].status = 'checked-out';
  } else {
    hubConnection.emit('check-out', 'movie not in stock');
  }
});

hubConnection.on('check-in', (payload) => {
  for (let i = 0; i < movies.results.length; i++) {
    if (movies.results[i].name === payload) {
      movies.results[i].status = 'in stock';
      console.log(payload, 'checked back in');
    }
  }
});
