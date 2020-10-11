
'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:3000'; 

const hubConnection = io.connect(host);

function checkedOut(payload) {
    setTimeout(() => {
        hubConnection.emit('checked-out',payload);   
        
    },2000);
}



hubConnection.on('in-stock', checkedOut); 