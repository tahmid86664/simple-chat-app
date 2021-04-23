import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './chat.style.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:9000';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        
        socket = io(ENDPOINT, {
            withCredentials: true,
        });

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });

        console.log(socket);
        // console.log(location.search);
        // console.log(name, room);

        // unmount from useEffect
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [location, ENDPOINT]);

    return(
        <div className="chat">
            <h1>Chat</h1>
        </div>
    );
}
export default Chat;