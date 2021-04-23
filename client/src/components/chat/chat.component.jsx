import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './chat.style.css';

import ChatHeader from '../chat-header/chat-header.component'

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const ENDPOINT = 'localhost:9000';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        
        socket = io(ENDPOINT, {
            withCredentials: true,
        });

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (err) => {
            console.log(err);
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

    // for handling messages
    useEffect(() => {
        socket.on('message', (message, callback) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    // function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return(
        <div className="chat">
            <div className="chat__inner">
                <ChatHeader room={ room }/>
                {/* Chat messages */}
                {/* Chat form or chat footer */}
                {/* <input 
                    value={message} 
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
                /> */}
            </div>
        </div>
    );
}
export default Chat;