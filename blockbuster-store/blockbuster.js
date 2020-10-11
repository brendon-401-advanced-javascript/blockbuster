'use strict';


'use strict';
const io = require('socket.io-client');
let host = 'http://localhost:3000'; 
const hubConnection = io.connect(host);

function logger(payload) {
    return payload; 
}


setInterval(() => {
    let movies = ['Top Gun','Lord of The Rings', 'Dirty Dancing', 'Mission Impossible', 'Hard to Kill', 'Ghost Rider', 'Ghost Busters', 'Bill and Teds Excellent Adventure'];

    let randomMovie = movies[Math.floor(Math.random()*movies.length)];
    hubConnection.emit('checkout', randomMovie); 
}, 3000);

hubConnection.on('checkout', logger); 