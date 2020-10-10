'use strict';
const io = require('socket.io-client');
let host = 'http://localhost:3000'; 
const hubConnection = io.connect(`${host}/hub-system`);

function logger(payload) {
    return payload; 
}


hubConnection.on('checkout', logger); 