import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import './messages.style.css';

import Message from '../message/message.component';

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, id) => 
                    <Message key={id} message={message} name={name} />    
            )}
        </ScrollToBottom>
    );
}


export default Messages;