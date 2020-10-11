
'use strict';
const io = require('socket.io-client');
let host = 'http://localhost:3000'; 
const hubConnection = io.connect(`${host}/hub-system`);

function logger(payload) {
    console.log(payload); 
}


setInterval(() => {
    let payload = {
        name:'test'
    }
    hubConnection.emit('checkout', payload); 
}, 3000);

hubConnection.on('checkout', logger); 