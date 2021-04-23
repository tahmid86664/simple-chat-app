// imports
// import express from 'express';
// import http from 'http';
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const router = require('./router');
const { addUser, removeUser, getUser, getUserInRoom } = require('./users');

// appconfig
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});

const port = process.env.PORT || 9000;

// middleware
app.use(router);
app.use(cors);
app.use(express.json());

// socket.io
io.on('connection', (socket) => {
    console.log("A new connection has occured");

    // get the data from client side which are emitted
    socket.on('join', ({ name, room }, callback) => { // here the callback is for error handling
        // console.log(name, room);
        const { err, user } = addUser({ id: socket.id, name, room })
        console.log(socket.id, user);

        if (err) {
            return callback(err);
        }

        socket.emit('message', { user: 'admin', text: `${user.name}, Welcome to the room ${user.room}!`}); // this is for welcoming the user
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has just joined!`} ); // this is to let all the users know in the room that a user is joined

        socket.join(user.room); // join user in the room 

        callback();
    });

    // now send messages
    socket.on('sendMessage', (message, callback) => {
        const user = getUser({ id: socket.id });
        
        io.to(user.room).emit('message', { user: user.name, text: message});

        callback();
    })

    // now we've to write disconnect code for that socket 
    // which just connect right now
    socket.on('disconnect', () => {
        console.log("User had left");
    });
});

// listen
server.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});